"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle, MessageCircle } from "lucide-react";

type ContactFormProps = { locale?: "fr" | "en" };

const emailJsConfig = {
  serviceId: "service_zxu10b5",
  templateId: "template_r8cbyon",
  publicKey: "FZirjPoVeRTkF65GT",
};

export function ContactForm({ locale = "fr" }: ContactFormProps) {
  const en = locale === "en";
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [whatsAppMessage, setWhatsAppMessage] = useState("");

  const copy = useMemo(() => en ? {
    name: "Name",
    email: "Email",
    organisation: "Organisation (optional)",
    subject: "Subject",
    message: "Tell me briefly about your need",
    consent: "I agree that my details may be used to respond to this request.",
    send: "Send my request",
    sending: "Sending...",
    success: "Your request has been sent by email.",
    error: "The message could not be sent. Please use WhatsApp or the email address shown alongside.",
    whatsapp: "Continue on WhatsApp",
    intro: "Hello Faniriantsoa, I have just sent a request from your portfolio.",
  } : {
    name: "Nom et prénom",
    email: "E-mail",
    organisation: "Organisation (facultatif)",
    subject: "Objet",
    message: "Décrivez brièvement votre besoin",
    consent: "J’accepte que mes coordonnées soient utilisées pour répondre à cette demande.",
    send: "Envoyer ma demande",
    sending: "Envoi en cours...",
    success: "Votre demande a bien été envoyée par e-mail.",
    error: "Le message n’a pas pu être envoyé. Utilisez WhatsApp ou l’adresse e-mail affichée à côté.",
    whatsapp: "Continuer sur WhatsApp",
    intro: "Bonjour Faniriantsoa, je viens d’envoyer une demande depuis votre portfolio.",
  }, [en]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    if (String(values.get("website") ?? "")) return;

    const name = String(values.get("name") ?? "").trim();
    const email = String(values.get("email") ?? "").trim();
    const organisation = String(values.get("organisation") ?? "").trim();
    const subject = String(values.get("subject") ?? "").trim();
    const message = String(values.get("message") ?? "").trim();

    setStatus("sending");
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailJsConfig.serviceId,
          template_id: emailJsConfig.templateId,
          user_id: emailJsConfig.publicKey,
          template_params: {
            firstname: name,
            lastname: organisation,
            from_name: name,
            organisation,
            email,
            reply_to: email,
            phone: "",
            subject,
            message,
          },
        }),
      });
      if (!response.ok) throw new Error("Email delivery failed");

      setWhatsAppMessage(`${copy.intro}\n\n${subject}\n${message}\n\n${name}${organisation ? ` — ${organisation}` : ""}\n${email}`);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <label><span>{copy.name}</span><input name="name" autoComplete="name" required /></label>
        <label><span>{copy.email}</span><input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label><span>{copy.organisation}</span><input name="organisation" autoComplete="organization" /></label>
      <label><span>{copy.subject}</span><input name="subject" required /></label>
      <label><span>{copy.message}</span><textarea name="message" rows={5} required /></label>
      <label className="contact-form__consent"><input name="consent" type="checkbox" required /><span>{copy.consent}</span></label>
      <label className="contact-form__honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button className="button button--light contact-form__submit" type="submit" disabled={status === "sending"}>
        {status === "sending" ? <LoaderCircle className="contact-form__spinner" size={18} aria-hidden="true" /> : null}
        {status === "sending" ? copy.sending : copy.send}
        {status !== "sending" ? <ArrowRight size={18} aria-hidden="true" /> : null}
      </button>
      <div className="contact-form__feedback" aria-live="polite">
        {status === "sent" ? <p className="is-success"><CheckCircle2 size={18} aria-hidden="true" /> {copy.success}</p> : null}
        {status === "error" ? <p className="is-error">{copy.error}</p> : null}
      </div>
      {status === "sent" ? (
        <a className="contact-form__whatsapp" href={`https://wa.me/261340581360?text=${encodeURIComponent(whatsAppMessage)}`} target="_blank" rel="noreferrer">
          <MessageCircle size={18} aria-hidden="true" /> {copy.whatsapp}
        </a>
      ) : null}
    </form>
  );
}
