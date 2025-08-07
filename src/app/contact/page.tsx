"use client";

import { useState } from "react";
import { useFormik, FormikProvider } from "formik";
import toast from "react-hot-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { contactSchema, ContactFormData } from "@/utils/contact-validation";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);

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

      console.log("Contact form submitted successfully");
      setIsSubmitted(true);
      formik.resetForm();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: handleSubmit,
  });

  if (isSubmitted) {
    return (
      <section className="min-h-[95vh] flex items-center justify-center bg-gray-950 px-6 py-20">
        <div className="w-full max-w-2xl mx-auto text-center">
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-8 space-y-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-50">
                  Message Sent!
                </h2>
                <p className="text-lg text-gray-300">
                  Thank you for reaching out! I&apos;ll get back to you as soon
                  as possible.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 bg-blue-600 hover:bg-blue-700"
                >
                  Send Another Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[95vh] flex items-center justify-center bg-gray-950 px-6 py-20">
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-50 sm:text-5xl">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-lg text-gray-300 sm:text-xl max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say
            hello? I&apos;d love to hear from you!
          </p>
        </div>

        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-8">
            <FormikProvider value={formik}>
              <form onSubmit={formik.handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Name
                    </Label>
                    <Input
                      {...formik.getFieldProps("name")}
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className={`bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-600 ${
                        formik.touched.name && formik.errors.name
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="text-red-400 text-sm">
                        {formik.errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      {...formik.getFieldProps("email")}
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className={`bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-600 ${
                        formik.touched.email && formik.errors.email
                          ? "border-red-500"
                          : ""
                      }`}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="text-red-400 text-sm">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300">
                    Subject
                  </Label>
                  <Input
                    {...formik.getFieldProps("subject")}
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    className={`bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-600 ${
                      formik.touched.subject && formik.errors.subject
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.subject && formik.errors.subject && (
                    <p className="text-red-400 text-sm">
                      {formik.errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    {...formik.getFieldProps("message")}
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    className={`bg-gray-800 border-gray-700 text-gray-100 placeholder-gray-400 focus:border-blue-600 resize-none ${
                      formik.touched.message && formik.errors.message
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formik.touched.message && formik.errors.message && (
                    <p className="text-red-400 text-sm">
                      {formik.errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !formik.isValid}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </FormikProvider>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
