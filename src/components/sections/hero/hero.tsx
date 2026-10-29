import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/content/home";
import { HeroStage } from "./hero-stage";

const REPEATS = 4;

export function Hero() {
  const { marquee, role, technologies, location, photo, cta } = homeContent;

  return (
    <HeroStage>
      <div className="parallax-word" aria-hidden="true">
        {marquee.map((row) => (
          <div
            key={row.text}
            className={`marquee marquee-${row.variant} marquee-${row.direction}`}
            style={{ top: row.top }}
          >
            <div className="marquee-track">
              {[0, 1].map((half) => (
                <div key={half} className="marquee-half">
                  {Array.from({ length: REPEATS }, (_, index) => (
                    <span key={index}>{row.text}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

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
