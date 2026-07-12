import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  email: z
    .email("Invalid email address")
    .max(254, "Email must be at most 254 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be at most 1000 characters"),
  // Honeypot: humans never see or fill this field
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
