"use client";

import { Check, Copy, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CopyEmailProps {
  email: string;
  successMessage?: string;
}

export function CopyEmail({ email, successMessage = "Email copied!" }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success(successMessage);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center gap-3 group w-fit"
    >
      <Mail className="w-5 h-5 text-blue-400 shrink-0" />
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
        {email}
      </span>
      {copied ? (
        <Check className="w-3.5 h-3.5 text-green-400 shrink-0" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 transition-colors shrink-0" />
      )}
    </button>
  );
}
