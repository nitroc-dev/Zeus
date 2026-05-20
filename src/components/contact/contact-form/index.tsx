"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { ContactSuccess } from "@/components/contact/contact-success";
import { FormInput } from "@/components/inputs/input";
import { FormTextarea } from "@/components/inputs/textarea";
import {
  type ContactFormData,
  contactSchema,
} from "@/utils/contact-validation";
import type { ContactFormProps } from "./props";

export function ContactForm({ locale }: ContactFormProps) {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const handleSubmit = form.handleSubmit(async (values) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || "Failed to send message");
      }
      form.reset();
      setIsSuccess(true);
      toast.success(t("success"));
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("error"));
    } finally {
      setIsSubmitting(false);
    }
  });

  const metaItems = [
    {
      href: "mailto:contact@nitroc.xyz",
      icon: <Mail className="w-4 h-4" />,
      label: "contact@nitroc.xyz",
      sub: t("metaEmailSub"),
    },
    {
      href: null,
      icon: <MapPin className="w-4 h-4" />,
      label: t("metaLocationLabel"),
      sub: t("metaLocationSub"),
    },
    {
      href: "https://github.com/nitroc-dev",
      icon: <Github className="w-4 h-4" />,
      label: "github.com/nitroc-dev",
      sub: t("metaGithubSub"),
    },
    {
      href: "https://www.linkedin.com/in/corentin-d-02472724b",
      icon: <Linkedin className="w-4 h-4" />,
      label: "linkedin.com/in/corentin-d",
      sub: t("metaLinkedinSub"),
    },
  ];

  const faqItems = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
  ];

  return (
    <main className="relative overflow-hidden page-bg">
      <div className="px-8 max-w-[1180px] mx-auto">
        <section
          className="pt-[60px] pb-20 grid gap-20 items-start"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Left: form */}
          <div
            className="rounded-[16px] p-8"
            style={{
              background: "var(--navy-1)",
              border: "1px solid var(--portfolio-line)",
            }}
          >
            {isSuccess ? (
              <ContactSuccess onReset={() => setIsSuccess(false)} />
            ) : (
              <FormProvider {...form}>
                <form onSubmit={handleSubmit} className="space-y-[18px]">
                  <div className="grid grid-cols-2 gap-3.5">
                    <FormInput
                      name="name"
                      label={`${t("name")} *`}
                      placeholder="Your name"
                      required
                    />
                    <FormInput
                      name="email"
                      label={`${t("email")} *`}
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <FormTextarea
                    name="message"
                    label={`${t("message")} *`}
                    rows={5}
                    placeholder="Tell me about your project - timeline, scope, anything I should know."
                    required
                  />
                  <p className="text-xs" style={{ color: "var(--text-p-3)" }}>
                    By submitting, you agree to our{" "}
                    <Link
                      href={`/${locale}/privacy`}
                      className="underline transition-opacity hover:opacity-80"
                      style={{ color: "var(--portfolio-accent)" }}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting || !form.formState.isValid}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[15px] font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110"
                    style={{
                      background: "var(--portfolio-accent)",
                      color: "oklch(0.18 0.02 252)",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
                        Sending...
                      </>
                    ) : (
                      "Send message →"
                    )}
                  </button>
                </form>
              </FormProvider>
            )}
          </div>

          {/* Right: heading + meta */}
          <div>
            <h1
              className="font-semibold tracking-tight mb-5"
              style={{
                fontSize: "clamp(40px, 5vw, 64px)",
                lineHeight: "1.05",
                color: "var(--text-p-0)",
              }}
            >
              Get in{" "}
              <span style={{ color: "var(--portfolio-accent)" }}>touch</span>
            </h1>
            <p
              className="text-[17px] mb-8 max-w-[480px] leading-relaxed"
              style={{ color: "var(--text-p-1)" }}
            >
              {t("description")}
            </p>
            <div className="flex flex-col gap-3">
              {metaItems.map(({ href, icon, label, sub }) => {
                const inner = (
                  <>
                    <span
                      className="w-8 h-8 rounded-lg grid place-items-center shrink-0"
                      style={{
                        background: "var(--portfolio-accent-soft)",
                        color: "var(--portfolio-accent)",
                      }}
                    >
                      {icon}
                    </span>
                    <div>
                      <b
                        className="block text-sm font-medium"
                        style={{ color: "var(--text-p-0)" }}
                      >
                        {label}
                      </b>
                      <small
                        className="font-mono text-xs"
                        style={{ color: "var(--text-p-2)" }}
                      >
                        {sub}
                      </small>
                    </div>
                  </>
                );
                const cls =
                  "flex items-center gap-3 px-4 py-3 rounded-[10px] transition-colors text-sm border";
                const baseStyle = { background: "var(--navy-1)" };
                return href ? (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`${cls} border-[var(--portfolio-line)] hover:border-[var(--portfolio-accent)]`}
                    style={baseStyle}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div
                    key={label}
                    className={`${cls} border-[var(--portfolio-line)]`}
                    style={baseStyle}
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="pb-20 pt-[60px]"
          style={{ borderTop: "1px solid var(--portfolio-line)" }}
        >
          <h2
            className="text-3xl font-semibold tracking-tight mb-6"
            style={{ color: "var(--text-p-0)" }}
          >
            {t("faqTitle")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {faqItems.map(({ q, a }) => (
              <div
                key={q}
                className="px-6 py-5 rounded-xl"
                style={{
                  background: "var(--navy-1)",
                  border: "1px solid var(--portfolio-line)",
                }}
              >
                <h4
                  className="font-semibold mb-2"
                  style={{ color: "var(--text-p-0)" }}
                >
                  {q}
                </h4>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-p-2)" }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
