import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { HeroStage } from "./hero-stage";

export function Hero() {
  const { word, role, technologies, location, photo, cta } = homeContent;

  return (
    <HeroStage>
      <div className="hero-photo">
        <div className="parallax-photo">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={930}
            height={930}
            priority
          />
        </div>
      </div>

      <div className="parallax-word" aria-hidden="true">
        <p className="hero-word">{word}</p>
        <p className="hero-word-outline">{word}</p>
      </div>

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
    </HeroStage>
  );
}
