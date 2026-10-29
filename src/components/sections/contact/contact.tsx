import { SocialLinks } from "@/components/ui/social-links";
import { contactContent } from "@/content/contato";
import { ContactForm } from "./contact-form";

export function Contact() {
  const { label, title, copyright } = contactContent;

  return (
    <main className="page">
      <div className="contact-card">
        <div className="contact-hero">
          <div className="contact-intro">
            <p className="section-label">{label}</p>
            <h1>{title}</h1>
          </div>

          <ContactForm />
        </div>

        <div className="contact-footer">
          <p className="footer-copy">{copyright}</p>
          <SocialLinks />
        </div>
      </div>
    </main>
  );
}
