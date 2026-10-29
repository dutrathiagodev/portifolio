import type { RichTextPart } from "@/types/common";

export function RichText({ parts }: { parts: RichTextPart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          part
        ) : (
          <a
            key={index}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {part.text}
          </a>
        ),
      )}
    </>
  );
}
