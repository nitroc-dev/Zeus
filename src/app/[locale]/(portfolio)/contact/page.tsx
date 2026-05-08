"use client";

import { FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import { FormInput } from "@/components/inputs/input";
import { FormTextarea } from "@/components/inputs/textarea";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import {
  type ContactFormData,
  contactSchema,
} from "@/utils/contact-validation";

const MAIL_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const MAP_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-7.58 8-12a8 8 0 10-16 0c0 4.42 8 12 8 12z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (values: ContactFormData) => {
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
      formik.resetForm();
      setIsSuccess(true);
      toast.success(t("success"));
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : t("error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: contactSchema,
    onSubmit: handleSubmit,
  });

  const metaItems = [
    {
      href: "mailto:contact@nitroc.xyz",
      icon: MAIL_ICON,
      label: "contact@nitroc.xyz",
      sub: "Replies within 24h",
    },
    {
      href: null,
      icon: MAP_ICON,
      label: "Brussels, Belgium",
      sub: "CET · open to remote",
    },
    {
      href: "https://github.com/nitroc-dev",
      icon: <GithubIcon className="w-4 h-4" />,
      label: "github.com/nitroc-dev",
      sub: "Most code lives here",
    },
    {
      href: "https://www.linkedin.com/in/corentin-d-02472724b",
      icon: <LinkedinIcon className="w-4 h-4" />,
      label: "linkedin.com/in/corentin-d",
      sub: "For the recruiters out there",
    },
  ];

  const faqItems = [
    {
      q: "Are you available right now?",
      a: "Yes — I take on freelance work alongside my role at Eachstapp. I prefer focused engagements where I can ship something polished end-to-end.",
    },
    {
      q: "What kind of projects do you work on?",
      a: "Web apps, dashboards, marketing sites — anywhere a small team needs full-stack help. React/Next on the front, Node or .NET on the back.",
    },
    {
      q: "Do you work remotely?",
      a: "Yes. I'm in Brussels (CET) and work async-friendly with teams across Europe and the US. Happy to come on-site occasionally if you're nearby.",
    },
    {
      q: "How fast do you reply?",
      a: "Within 24 hours, usually faster. The form goes straight to my Discord, so I'll see it on my watch.",
    },
  ];

  return (
    <main
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 600px at 80% -10%, color-mix(in oklch, var(--portfolio-accent) 8%, transparent), transparent 60%), radial-gradient(900px 500px at -10% 120%, color-mix(in oklch, var(--portfolio-accent) 6%, transparent), transparent 60%), var(--navy-0)",
      }}
    >
      <div className="px-8 max-w-[1180px] mx-auto">
        <section className="pt-[60px] pb-20 grid gap-20 items-start" style={{ gridTemplateColumns: "1fr 1fr" }}>

          {/* Left: heading + meta */}
          <div>
            <h1
              className="font-semibold tracking-tight mb-5"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: "1.05", color: "var(--text-p-0)" }}
            >
              Get in{" "}
              <span style={{ color: "var(--portfolio-accent)" }}>touch</span>
            </h1>
            <p className="text-[17px] mb-8 max-w-[480px] leading-relaxed" style={{ color: "var(--text-p-1)" }}>
              {t("description")}
            </p>
            <div className="flex flex-col gap-3">
              {metaItems.map(({ href, icon, label, sub }) => {
                const inner = (
                  <>
                    <span
                      className="w-8 h-8 rounded-lg grid place-items-center shrink-0"
                      style={{ background: "var(--portfolio-accent-soft)", color: "var(--portfolio-accent)" }}
                    >
                      {icon}
                    </span>
                    <div>
                      <b className="block text-sm font-medium" style={{ color: "var(--text-p-0)" }}>{label}</b>
                      <small className="font-mono text-xs" style={{ color: "var(--text-p-2)" }}>{sub}</small>
                    </div>
                  </>
                );
                const cls = "flex items-center gap-3 px-4 py-3 rounded-[10px] transition-all text-sm";
                const sty = {
                  background: "var(--navy-1)",
                  border: "1px solid var(--portfolio-line)",
                };
                return href ? (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={cls}
                    style={{ ...sty, transition: "border-color 140ms" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--portfolio-accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--portfolio-line)")}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={label} className={cls} style={sty}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <div
            className="rounded-[16px] p-8"
            style={{ background: "var(--navy-1)", border: "1px solid var(--portfolio-line)" }}
          >
            {isSuccess ? (
              <div className="text-center space-y-4 py-10">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto"
                  style={{
                    background: "color-mix(in oklch, var(--portfolio-ok) 15%, transparent)",
                    border: "1px solid color-mix(in oklch, var(--portfolio-ok) 40%, transparent)",
                  }}
                >
                  <svg
                    role="img"
                    aria-label="Success"
                    className="w-7 h-7"
                    style={{ color: "var(--portfolio-ok)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--text-p-0)" }}>Message sent!</h3>
                <p className="text-sm" style={{ color: "var(--text-p-2)" }}>
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSuccess(false)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all bg-[var(--navy-2)] hover:bg-[var(--navy-3)] border border-[var(--portfolio-line-2)]"
                  style={{ color: "var(--text-p-1)" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit} className="space-y-[18px]">
                  <div className="grid grid-cols-2 gap-3.5">
                    <FormInput
                      field={formik.getFieldProps("name")}
                      formik={formik}
                      label={`${t("name")} *`}
                      placeholder="Your name"
                      required
                    />
                    <FormInput
                      field={formik.getFieldProps("email")}
                      formik={formik}
                      label={`${t("email")} *`}
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <FormTextarea
                    field={formik.getFieldProps("message")}
                    formik={formik}
                    label={`${t("message")} *`}
                    rows={5}
                    placeholder="Tell me about your project — timeline, scope, anything I should know."
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
                    disabled={isSubmitting || !formik.isValid}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-[15px] font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: "var(--portfolio-accent)", color: "oklch(0.18 0.02 252)" }}
                    onMouseEnter={(e) => { if (!isSubmitting) (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = ""; }}
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
              </FormikProvider>
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-20 pt-[60px]" style={{ borderTop: "1px solid var(--portfolio-line)" }}>
          <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: "var(--text-p-0)" }}>
            Frequently asked
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {faqItems.map(({ q, a }) => (
              <div
                key={q}
                className="px-6 py-5 rounded-xl"
                style={{ background: "var(--navy-1)", border: "1px solid var(--portfolio-line)" }}
              >
                <h4 className="font-semibold mb-2" style={{ color: "var(--text-p-0)" }}>{q}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-p-2)" }}>{a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
