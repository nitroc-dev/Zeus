"use client";

import { FormikProvider, useFormik } from "formik";
import { Github, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import { FormInput } from "@/components/inputs/input";
import { CopyEmail } from "@/components/ui/copy-email";
import { FormTextarea } from "@/components/inputs/textarea";
import { Button } from "@/components/ui/button";
import {
  type ContactFormData,
  contactSchema,
} from "@/utils/contact-validation";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";

export default function Contact() {
  const t = useTranslations("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
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
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: handleSubmit,
  });

  return (
    <main className="bg-gray-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none"></div>

      <section className="relative min-h-[95vh] px-6 py-20 flex items-center justify-center backdrop-blur-sm">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  {t("title")}
                </h1>
                <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                  {t("description")}
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <CopyEmail email="contact@nitroc.xyz" successMessage="Email copied!" />

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-sm text-gray-400">Brussels, Belgium</span>
                </div>

                <Link
                  href="https://github.com/nitroc-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <GithubIcon className="w-5 h-5 text-gray-400 shrink-0" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    github.com/nitroc-dev
                  </span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/corentin-d-02472724b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <LinkedinIcon className="w-5 h-5 text-blue-400 shrink-0" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    linkedin.com/in/corentin-d
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-8">
              {isSuccess ? (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      role="img"
                      aria-label="Success"
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300">
                    Thanks for reaching out! I&apos;ll get back to you as soon
                    as possible.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <FormikProvider value={formik}>
                  <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <FormInput
                      field={formik.getFieldProps("name")}
                      formik={formik}
                      label={t("name")}
                      placeholder={t("name")}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 h-12 text-base"
                    />

                    <FormInput
                      field={formik.getFieldProps("email")}
                      formik={formik}
                      label={t("email")}
                      type="email"
                      placeholder={t("email")}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 h-12 text-base"
                    />

                    <FormTextarea
                      field={formik.getFieldProps("message")}
                      formik={formik}
                      label={t("message")}
                      rows={5}
                      placeholder={t("message")}
                      required
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 resize-none text-base min-h-[120px]"
                    />

                    <div className="text-sm text-gray-400">
                      By submitting this form, you agree to our{" "}
                      <Link
                        href="/privacy"
                        className="text-blue-400 underline hover:text-blue-300"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and consent to the collection and use of your information
                      as described.
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formik.isValid}
                      size="lg"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 py-3 text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        t("send")
                      )}
                    </Button>
                  </form>
                </FormikProvider>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
