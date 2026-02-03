import { Resend } from "resend";
import type { ContactFormData } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "contact@zukunft-tech.com";

export async function sendContactEmail(data: ContactFormData): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: "Configuration email manquante (RESEND_API_KEY)" };
  }
  if (!process.env.CONTACT_TO_EMAIL?.trim()) {
    return { ok: false, error: "Configuration email manquante (CONTACT_TO_EMAIL)" };
  }

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: `[Contact] Message de ${data.name}`,
      html: `
        <h2>Nouveau message depuis le formulaire de contact</h2>
        <p><strong>Nom / Société :</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Message :</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(data.message)}</pre>
      `,
    });

    if (error) {
      return { ok: false, error: error.message };
    }
    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur lors de l'envoi";
    return { ok: false, error: message };
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
