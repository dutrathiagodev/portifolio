"use client";

import { useState } from "react";
import { contactContent } from "@/content/contato";

export function CopyEmail() {
  const { email, copyLabel, copiedLabel } = contactContent;
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={copy} aria-live="polite">
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
