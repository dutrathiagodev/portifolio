import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "border border-foreground/20 hover:bg-foreground/5",
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
        variants[variant],
      )}
    >
      {children}
    </a>
  );
}
