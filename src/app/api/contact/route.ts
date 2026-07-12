import { type NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/utils/contact-validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 },
      );
    }

    const { name, email, message, website } = parsed.data;

    // Honeypot filled: silently accept without forwarding
    if (website) {
      return NextResponse.json({ message: "Message sent successfully" });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 500 },
      );
    }

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      cache: "no-store",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: "New Contact Message",
            color: 0x4f46e5,
            fields: [
              { name: "Name", value: name, inline: true },
              { name: "Email", value: email, inline: true },
              { name: "Message", value: message },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!discordResponse.ok) {
      return NextResponse.json(
        { error: "Failed to send message" },
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
