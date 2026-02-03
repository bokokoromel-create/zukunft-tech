import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Le nom est requis")
    .max(120, "Le nom ne doit pas dépasser 120 caractères")
    .trim(),
  email: z
    .string()
    .min(1, "L'email est requis")
    .email("Adresse email invalide")
    .max(254, "Email trop long")
    .trim()
    .toLowerCase(),
  message: z
    .string()
    .min(1, "Le message ne peut pas être vide")
    .max(5000, "Le message ne doit pas dépasser 5000 caractères")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
