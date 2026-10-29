import { Container } from "@/components/ui/container";
import { siteContent } from "@/content/site";

export function Header() {
  return (
    <header className="border-b border-foreground/10">
      <Container className="flex h-16 items-center justify-between">
        <span className="font-semibold">{siteContent.name}</span>
        <nav aria-label="Principal">
          <ul className="flex gap-6 text-sm">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-brand">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
