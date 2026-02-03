import { Resend } from "resend";
import type { ContactFormData } from "./schema";

export async function sendContactEmail(data: ContactFormData): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  if (!apiKey) {
    return { ok: false, error: "Configuration email manquante (RESEND_API_KEY)" };
  }
  if (!toEmail) {
    return { ok: false, error: "Configuration email manquante (CONTACT_TO_EMAIL)" };
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
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
