import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";

export function Hero() {
  const { word, role, technologies, location, photo, cta } = homeContent;

  return (
    <section className="hero">
      <p className="hero-word" aria-hidden="true">
        {word}
      </p>

      <div className="hero-photo">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={700}
          height={700}
          priority
        />
      </div>

      <p className="hero-word-outline" aria-hidden="true">
        {word}
      </p>

      <div className="hero-foot">
        <div className="shell">
          <div className="rise d2">
            <h1 className="hero-role">{role}</h1>
            <p className="hero-tech">{technologies.join(" · ")}</p>
          </div>

          <div className="hero-side rise d3">
            <span>{location}</span>
            <Link href={cta.href} className="btn btn-solid">
              {cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
