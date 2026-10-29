import Image from "next/image";
import Link from "next/link";
import { SocialLinks } from "@/components/ui/social-links";
import { homeContent } from "@/content/home";

export function Hero() {
  const { label, name, role, technologies, photo, actions } = homeContent;

  return (
    <main className="hero">
      <section className="hero-content">
        <p className="hero-label">{label}</p>

        <h1>{name}</h1>
        <h2>{role}</h2>

        <p className="technologies">
          {technologies.map((tech, index) => (
            <span key={tech}>
              {index > 0 && (
                <>
                  {" "}
                  <span className="separator">•</span>{" "}
                </>
              )}
              {tech}
            </span>
          ))}
        </p>

        <div className="hero-buttons">
          {actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={`button button-${action.variant}`}
            >
              {action.label}
            </Link>
          ))}
        </div>

        <SocialLinks />
      </section>

      <section className="hero-image">
        <div className="image-circle">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={400}
            priority
          />
        </div>
      </section>
    </main>
  );
}
