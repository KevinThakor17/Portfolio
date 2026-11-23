"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolio";

interface CopyEmailButtonProps {
  label?: string;
  copiedLabel?: string;
  className?: string;
  size?: "md" | "lg";
}

export default function CopyEmailButton({
  label = "Copy Email",
  copiedLabel = "Copied to Clipboard! ✓",
  className = "",
  size = "md",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const sizeClasses =
    size === "lg" ? "px-5 py-4 text-sm" : "px-5 py-3.5 text-sm";

  return (
    <button
      onClick={handleCopy}
      className={`spotlight-card rounded-xl font-semibold transition-all flex items-center gap-2 ${sizeClasses} ${
        copied
          ? "text-cyan-400 border-cyan-500/50"
          : "text-slate-300 hover:text-cyan-400"
      } ${className}`}
    >
      <svg
        className="w-4 h-4 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}
