import { Glyphs } from "@/components/ui/glyphs";
import type { PageHeadingContent } from "@/types/common";

const REPEATS = 4;

// cabeçalho das páginas internas, no mesmo estilo cartaz da Home
export function PageHeading({
  label,
  title,
  tagline,
  lead,
  marquee,
}: PageHeadingContent) {
  return (
    <header className="poster">
      <div className="poster-paper paper torn-bottom">
        <div className="shell">
          <div className="hero-caps">
            <span>{label}</span>
            <span>2026</span>
          </div>
          <h1 className="poster-title">{title}</h1>
          {tagline && <p className="poster-tagline">{tagline}</p>}
          {lead && <p className="poster-lead">{lead}</p>}
          <Glyphs className="poster-glyphs" size={28} />
        </div>
      </div>

      <div className="poster-band" aria-hidden="true">
        <div className="marquee-track poster-track">
          {[0, 1].map((half) => (
            <div key={half} className="marquee-half">
              {Array.from({ length: REPEATS }, (_, index) => (
                <span key={index}>{marquee}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
