type GlyphsProps = {
  className?: string;
  size?: number;
};

// três símbolos decorativos do cartaz: estrela, brilho e trevo
export function Glyphs({ className, size = 36 }: GlyphsProps) {
  return (
    <span className={className} aria-hidden="true">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.00,0.00 L13.91,7.38 L20.49,3.51 L16.62,10.09 L24.00,12.00 L16.62,13.91 L20.49,20.49 L13.91,16.62 L12.00,24.00 L10.09,16.62 L3.51,20.49 L7.38,13.91 L0.00,12.00 L7.38,10.09 L3.51,3.51 L10.09,7.38Z" />
      </svg>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C13 8 16 11 24 12C16 13 13 16 12 24C11 16 8 13 0 12C8 11 11 8 12 0Z" />
      </svg>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <circle cx="7.5" cy="12" r="5.5" />
        <circle cx="16.5" cy="12" r="5.5" />
        <circle cx="12" cy="7.5" r="5.5" />
        <circle cx="12" cy="16.5" r="5.5" />
        <rect x="11" y="16" width="2" height="8" />
      </svg>
    </span>
  );
}
