import { Container } from "@/components/ui/container";
import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-8 text-sm text-foreground/70">
      <Container>{siteContent.footer}</Container>
    </footer>
  );
}
