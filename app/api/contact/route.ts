import { NextResponse } from "next/server";
import { contactFormSchema } from "@/app/lib/contact/schema";
import { sendContactEmail } from "@/app/lib/contact/send-email";

export async function POST(request: Request) {
  if (request.headers.get("content-type")?.includes("application/json") === false) {
    return NextResponse.json(
      { success: false, error: "Content-Type doit être application/json" },
      { status: 400 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Corps de la requête JSON invalide" },
      { status: 400 }
    );
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.flatten().fieldErrors;
    const message =
      firstError.email?.[0] ?? firstError.name?.[0] ?? firstError.message?.[0] ?? "Données invalides";
    return NextResponse.json(
      { success: false, error: message },
      { status: 400 }
    );
  }

  const result = await sendContactEmail(parsed.data);
  if (!result.ok) {
    return NextResponse.json(
      { success: false, error: result.error },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, message: "Message envoyé avec succès." });
}
