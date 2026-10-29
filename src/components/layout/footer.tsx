import { siteContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <span>{siteContent.copyright}</span>
        <span>{siteContent.madeWith}</span>
      </div>
    </footer>
  );
}
