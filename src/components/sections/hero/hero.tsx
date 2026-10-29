import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { heroContent } from "@/content/hero";

export function Hero() {
  const { eyebrow, title, description, primaryAction, secondaryAction } = heroContent;

  return (
    <section id="inicio" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-6">
        <p className="text-sm font-medium uppercase tracking-widest text-brand">{eyebrow}</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
        <p className="max-w-xl text-lg text-foreground/70">{description}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={primaryAction.href}>{primaryAction.label}</ButtonLink>
          <ButtonLink href={secondaryAction.href} variant="secondary">
            {secondaryAction.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
