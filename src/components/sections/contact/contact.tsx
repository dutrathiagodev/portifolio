import Image from "next/image";
import { PageHeading } from "@/components/ui/page-heading";
import { Reveal } from "@/components/ui/reveal";
import { contactContent } from "@/content/contato";
import { ContactForm } from "./contact-form";
import { CopyEmail } from "./copy-email";

export function Contact() {
  const { heading, availability, headline, email, channels, form } =
    contactContent;

  return (
    <main className="page">
      <PageHeading {...heading} />

      <div className="shell page-body">
        <div className="contact-layout">
          <Reveal>
            <div className="contact-main">
              <p className="contact-available">
                <span className="contact-dot" aria-hidden="true" />
                {availability}
              </p>
              <h2 className="contact-headline">{headline}</h2>

              <div className="contact-mail">
                <a href={`mailto:${email}`} className="contact-mail-link">
                  {email}
                </a>
                <CopyEmail />
              </div>

              <ul className="channels">
                {channels.map((channel, index) => (
                  <li key={channel.label}>
                    <a
                      className="channel"
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="channel-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Image
                        src={channel.icon}
                        alt=""
                        width={20}
                        height={20}
                        className="channel-icon"
                      />
                      <span className="channel-name">{channel.label}</span>
                      <span className="channel-handle">{channel.handle}</span>
                      <span className="channel-go" aria-hidden="true">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="contact-paper paper torn-both">
              <p className="contact-paper-title">{form.title}</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
