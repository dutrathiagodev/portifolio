import Image from "next/image";
import { socialLinks } from "@/content/site";

export function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          {...(link.external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
        >
          <Image src={link.icon} alt="" width={18} height={18} />
        </a>
      ))}
    </div>
  );
}
