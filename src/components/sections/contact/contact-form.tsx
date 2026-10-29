"use client";

import type { FormEvent } from "react";
import { contactContent } from "@/content/contato";

// site sem backend: o "enviar" monta um e-mail pronto
export function ContactForm() {
  const { fields, email: to, mailSubjectPrefix } = contactContent;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name"));
    const subject = String(data.get("subject"));
    const email = String(data.get("email"));

    const body = `Meu nome é ${name} e quero falar sobre ${subject}. Você pode me encontrar em ${email}.`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      mailSubjectPrefix + name,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className="mad-lib" onSubmit={handleSubmit}>
      <p>
        Meu nome é{" "}
        <input
          type="text"
          name="name"
          placeholder={fields.name}
          autoComplete="off"
          aria-label="Seu nome"
          required
        />{" "}
        e quero falar sobre{" "}
        <input
          type="text"
          name="subject"
          placeholder={fields.subject}
          autoComplete="off"
          aria-label="Assunto"
          required
        />
        . Você pode me encontrar em{" "}
        <input
          type="email"
          name="email"
          placeholder={fields.email}
          autoComplete="off"
          aria-label="Seu e-mail"
          required
        />{" "}
        pra começarmos.
      </p>

      <button type="submit" className="send-btn">
        ENVIAR
      </button>
    </form>
  );
}
