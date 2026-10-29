"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <nav className="shell nav" aria-label="Principal">
        <Link href="/" className="logo">
          {siteContent.name}
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(pathname === item.href && "active")}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
