"use client";

import { Mail, MailOpen, Reply, Trash2 } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  isRead: boolean;
}

const MOCK_MESSAGES: Message[] = [
  {
    id: "1",
    name: "Alice Martin",
    email: "alice.martin@example.com",
    message:
      "Hi Corentin, I came across your portfolio and I'm really impressed by the Zeus project. I'm looking for a freelance Next.js developer for a 3-month project — would you be available for a quick call this week?",
    createdAt: "2026-05-07T14:32:00Z",
    isRead: false,
  },
  {
    id: "2",
    name: "Julien Dupont",
    email: "julien@startupxyz.io",
    message:
      "Bonjour, je cherche un développeur full-stack pour construire une application de gestion RH. Le stack envisagé est React + NestJS. Est-ce que tu seras disponible à partir de juin ?",
    createdAt: "2026-05-06T09:15:00Z",
    isRead: false,
  },
  {
    id: "3",
    name: "Emma Johnson",
    email: "emma.j@designco.co",
    message:
      "Hey! Love the design work on your portfolio. We're a small design studio looking for a front-end dev who can collaborate closely with designers. Are you open to contract work?",
    createdAt: "2026-05-05T17:48:00Z",
    isRead: true,
  },
  {
    id: "4",
    name: "Thomas Leroy",
    email: "t.leroy@consulting.be",
    message:
      "Bonjour Corentin, j'ai trouvé votre profil LinkedIn. Nous avons un besoin urgent sur un projet .NET / React à Bruxelles, mission de 6 mois. Dites-moi si ça vous intéresse.",
    createdAt: "2026-05-03T11:20:00Z",
    isRead: true,
  },
  {
    id: "5",
    name: "Sofia Reyes",
    email: "sofia@techventures.es",
    message:
      "Hi! I'm a recruiter specialising in tech roles. I have a full-stack position at a Series B startup in Brussels that matches your profile perfectly. Would you be open to hear more?",
    createdAt: "2026-04-30T08:05:00Z",
    isRead: true,
  },
];

function formatDate(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - d.getTime()) / 86400000);
  if (diffDays === 0)
    return d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return d.toLocaleDateString("en-US", { weekday: "short" });
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = messages.find((m) => m.id === selectedId) ?? null;
  const unreadCount = messages.filter((m) => !m.isRead).length;

  function selectMessage(msg: Message) {
    setSelectedId(msg.id);
    if (!msg.isRead) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, isRead: true } : m)),
      );
    }
  }

  function deleteMessage(id: string) {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selectedId === id) setSelectedId(null);
  }

  function markUnread(id: string) {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isRead: false } : m)),
    );
  }

  return (
    <div className="flex h-full -m-6 overflow-hidden">
      {/* Left: message list */}
      <aside className="w-80 shrink-0 flex flex-col border-r border-gray-800 bg-gray-950">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
          <div>
            <h1 className="text-base font-semibold text-white">Messages</h1>
            {unreadCount > 0 && (
              <p className="text-xs text-gray-500 mt-0.5">
                {unreadCount} unread
              </p>
            )}
          </div>
          {unreadCount > 0 && (
            <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 text-xs">
              {unreadCount}
            </Badge>
          )}
        </div>

        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 gap-2">
              <Mail size={24} className="text-gray-600" />
              <p className="text-sm text-gray-500">No messages</p>
            </div>
          ) : (
            messages.map((msg) => (
              <button
                key={msg.id}
                type="button"
                onClick={() => selectMessage(msg)}
                className={cn(
                  "w-full text-left px-4 py-3.5 border-b border-gray-800/60 transition-colors",
                  selectedId === msg.id
                    ? "bg-blue-600/10 border-l-2 border-l-blue-500"
                    : "hover:bg-gray-900",
                )}
              >
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5 min-w-0">
                    {!msg.isRead && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-0.5" />
                    )}
                    <span
                      className={cn(
                        "text-sm truncate",
                        msg.isRead
                          ? "text-gray-300 font-normal"
                          : "text-white font-medium",
                      )}
                    >
                      {msg.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-500 shrink-0">
                    {formatDate(msg.createdAt)}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate pl-3">
                  {msg.email}
                </p>
                <p className="text-xs text-gray-600 truncate mt-1 pl-3">
                  {msg.message}
                </p>
              </button>
            ))
          )}
        </div>
      </aside>

      {/* Right: message detail */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {selected === null ? (
          <div className="flex flex-col items-center justify-center h-full gap-3 text-center px-8">
            <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center">
              <MailOpen size={22} className="text-gray-500" />
            </div>
            <p className="text-gray-400 text-sm">Select a message to read it</p>
          </div>
        ) : (
          <div className="flex flex-col h-full overflow-y-auto p-6 gap-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold text-white">
                  {selected.name}
                </h2>
                <a
                  href={`mailto:${selected.email}`}
                  className="text-sm text-blue-400 hover:underline"
                >
                  {selected.email}
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(selected.createdAt).toLocaleString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-gray-200 text-xs gap-1.5"
                  onClick={() => markUnread(selected.id)}
                >
                  <Mail size={13} />
                  Mark unread
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-500 hover:text-red-400 hover:bg-red-400/10"
                  onClick={() => deleteMessage(selected.id)}
                >
                  <Trash2 size={14} />
                </Button>
              </div>
            </div>

            {/* Message body */}
            <div className="rounded-xl bg-gray-900 border border-gray-800 px-6 py-5">
              <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-wrap">
                {selected.message}
              </p>
            </div>

            {/* Reply section */}
            <div className="rounded-xl bg-gray-900 border border-gray-800 px-6 py-5">
              <div className="flex items-center gap-2 mb-3">
                <Reply size={14} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-300">Reply</span>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Reply via your email client — contact form submissions are
                forwarded to Discord only; no reply API is available yet.
              </p>
              <Button
                asChild
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 gap-2"
              >
                <a href={`mailto:${selected.email}`}>
                  <Mail size={13} />
                  Open in email client
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
