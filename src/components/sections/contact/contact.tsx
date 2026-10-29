import { PageHeading } from "@/components/ui/page-heading";
import { SocialLinks } from "@/components/ui/social-links";
import { contactContent } from "@/content/contato";
import { ContactForm } from "./contact-form";

export function Contact() {
  const { heading } = contactContent;

  return (
    <main className="page">
      <PageHeading {...heading} />

      <div className="shell page-body">
        <div className="contact-card">
          <div className="contact-hero">
            <ContactForm />
          </div>

          <div className="contact-footer">
            <SocialLinks />
          </div>
        </div>
      </div>
    </main>
  );
}
