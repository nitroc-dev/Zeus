import { type NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// In-memory rate limit store: IP → { count, resetAt }
// Resets per serverless instance lifetime (good enough without external KV)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!discordWebhookUrl) {
      console.error("DISCORD_WEBHOOK_URL environment variable is not set");
      return NextResponse.json(
        { error: "Discord webhook not configured" },
        { status: 500 },
      );
    }

    const discordMessage = {
      embeds: [
        {
          title: "🔔 New Contact Form Submission",
          color: 0x3b82f6,
          fields: [
            { name: "👤 Name", value: name, inline: true },
            { name: "📧 Email", value: email, inline: true },
            {
              name: "💬 Message",
              value:
                message.length > 1000
                  ? `${message.substring(0, 1000)}...`
                  : message,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: "Portfolio Contact Form" },
        },
      ],
    };

    const discordResponse = await fetch(discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordMessage),
    });

    if (!discordResponse.ok) {
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 },
      );
    }

    return NextResponse.json({ message: "Message sent successfully" });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
