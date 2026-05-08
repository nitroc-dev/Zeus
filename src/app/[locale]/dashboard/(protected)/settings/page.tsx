"use client";

import { useFormik } from "formik";
import {
  FileText,
  Link2,
  Mail,
  Palette,
  Search,
  Shield,
  User,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { FormInput } from "@/components/inputs/input";
import { FormTextarea } from "@/components/inputs/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// ─── Section types ────────────────────────────────────────────────────────────

type SectionKey =
  | "identity"
  | "social"
  | "cv"
  | "appearance"
  | "seo"
  | "contact"
  | "security";

interface NavSection {
  key: SectionKey;
  label: string;
  icon: React.ElementType;
}

const NAV_SECTIONS: NavSection[] = [
  { key: "identity", label: "Identity", icon: User },
  { key: "social", label: "Social Links", icon: Link2 },
  { key: "cv", label: "CV / Resume", icon: FileText },
  { key: "appearance", label: "Appearance", icon: Palette },
  { key: "seo", label: "SEO", icon: Search },
  { key: "contact", label: "Contact Form", icon: Mail },
  { key: "security", label: "Security", icon: Shield },
];

// ─── Generic save handler (UI-only) ──────────────────────────────────────────

function useSavedToast() {
  return () => toast.success("Saved (UI only — no backend endpoint yet)");
}

// ─── Identity section ─────────────────────────────────────────────────────────

function IdentitySection() {
  const onSave = useSavedToast();
  const formik = useFormik({
    initialValues: {
      displayName: "Corentin",
      tagline: "Full Stack Developer · Brussels",
      bio: "Full-stack developer based in Brussels, Belgium. I build web apps, dashboards, and APIs with React, Next.js, NestJS, and .NET.",
      location: "Brussels, Belgium",
      avatarUrl: "/profile.png",
    },
    validationSchema: Yup.object({
      displayName: Yup.string().required("Required"),
      tagline: Yup.string().default(""),
      bio: Yup.string().default(""),
      location: Yup.string().default(""),
      avatarUrl: Yup.string().default(""),
    }),
    onSubmit: onSave,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          field={formik.getFieldProps("displayName")}
          formik={formik}
          label="Display name *"
          required
        />
        <FormInput
          field={formik.getFieldProps("tagline")}
          formik={formik}
          label="Tagline"
          placeholder="Full Stack Developer"
        />
      </div>
      <FormTextarea
        field={formik.getFieldProps("bio")}
        formik={formik}
        label="Bio"
        rows={3}
      />
      <div className="grid grid-cols-2 gap-3">
        <FormInput
          field={formik.getFieldProps("location")}
          formik={formik}
          label="Location"
          placeholder="Brussels, Belgium"
        />
        <FormInput
          field={formik.getFieldProps("avatarUrl")}
          formik={formik}
          label="Avatar URL"
          placeholder="/profile.png"
        />
      </div>
      <SaveButton />
    </form>
  );
}

// ─── Social Links section ─────────────────────────────────────────────────────

function SocialSection() {
  const onSave = useSavedToast();
  const formik = useFormik({
    initialValues: {
      github: "https://github.com/nitroc-dev",
      linkedin: "https://www.linkedin.com/in/corentin-d-02472724b",
      twitter: "",
    },
    validationSchema: Yup.object({
      github: Yup.string().url("Must be a valid URL").default(""),
      linkedin: Yup.string().url("Must be a valid URL").default(""),
      twitter: Yup.string().url("Must be a valid URL").default(""),
    }),
    onSubmit: onSave,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <FormInput
        field={formik.getFieldProps("github")}
        formik={formik}
        label="GitHub"
        placeholder="https://github.com/..."
        type="url"
      />
      <FormInput
        field={formik.getFieldProps("linkedin")}
        formik={formik}
        label="LinkedIn"
        placeholder="https://linkedin.com/in/..."
        type="url"
      />
      <FormInput
        field={formik.getFieldProps("twitter")}
        formik={formik}
        label="X / Twitter"
        placeholder="https://x.com/..."
        type="url"
      />
      <SaveButton />
    </form>
  );
}

// ─── CV section ───────────────────────────────────────────────────────────────

function CvSection() {
  const onSave = useSavedToast();
  const formik = useFormik({
    initialValues: { cvUrl: "/cv.pdf", downloadLabel: "Download CV" },
    validationSchema: Yup.object({
      cvUrl: Yup.string().required("Required"),
      downloadLabel: Yup.string().required("Required"),
    }),
    onSubmit: onSave,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <FormInput
        field={formik.getFieldProps("cvUrl")}
        formik={formik}
        label="CV PDF path or URL *"
        placeholder="/cv.pdf"
        required
      />
      <FormInput
        field={formik.getFieldProps("downloadLabel")}
        formik={formik}
        label="Download button label *"
        placeholder="Download CV"
        required
      />
      <SaveButton />
    </form>
  );
}

// ─── Appearance section ───────────────────────────────────────────────────────

const ACCENT_PRESETS = [
  { label: "Blue (default)", value: "oklch(0.68 0.18 252)", color: "#5b7bef" },
  { label: "Teal", value: "oklch(0.72 0.16 195)", color: "#2ec4b6" },
  { label: "Violet", value: "oklch(0.68 0.20 290)", color: "#8b5cf6" },
  { label: "Rose", value: "oklch(0.66 0.20 15)", color: "#f43f5e" },
];

function AppearanceSection() {
  const [selected, setSelected] = useState(ACCENT_PRESETS[0].value);
  const onSave = useSavedToast();

  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-medium text-gray-300 mb-3">Accent color</p>
        <div className="flex flex-wrap gap-3">
          {ACCENT_PRESETS.map((preset) => (
            <button
              key={preset.value}
              type="button"
              onClick={() => setSelected(preset.value)}
              className={cn(
                "flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-sm transition-colors",
                selected === preset.value
                  ? "border-blue-500 bg-blue-600/10 text-white"
                  : "border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600",
              )}
            >
              <span
                className="w-4 h-4 rounded-full shrink-0"
                style={{ background: preset.color }}
              />
              {preset.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Applies the{" "}
          <code className="font-mono text-gray-400">--portfolio-accent</code>{" "}
          CSS token sitewide. Requires code change to take effect.
        </p>
      </div>
      <Button
        type="button"
        className="bg-blue-600 hover:bg-blue-700"
        onClick={onSave}
      >
        Save
      </Button>
    </div>
  );
}

// ─── SEO section ──────────────────────────────────────────────────────────────

function SeoSection() {
  const onSave = useSavedToast();
  const formik = useFormik({
    initialValues: {
      siteTitle: "Corentin — Full Stack Developer",
      metaDescription:
        "Full-stack developer based in Brussels. Building web apps, APIs, and dashboards with React, Next.js, NestJS, and .NET.",
      ogImageUrl: "https://nitroc.xyz/og-image.png",
      canonicalUrl: "https://nitroc.xyz",
    },
    validationSchema: Yup.object({
      siteTitle: Yup.string().required("Required"),
      metaDescription: Yup.string().max(160, "Max 160 characters").default(""),
      ogImageUrl: Yup.string().url("Must be a valid URL").default(""),
      canonicalUrl: Yup.string().url("Must be a valid URL").default(""),
    }),
    onSubmit: onSave,
  });

  const charCount = formik.values.metaDescription.length;

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <FormInput
        field={formik.getFieldProps("siteTitle")}
        formik={formik}
        label="Site title *"
        required
      />
      <div>
        <FormTextarea
          field={formik.getFieldProps("metaDescription")}
          formik={formik}
          label="Meta description"
          rows={2}
          description={`${charCount}/160 characters`}
        />
      </div>
      <FormInput
        field={formik.getFieldProps("ogImageUrl")}
        formik={formik}
        label="OG image URL"
        placeholder="https://nitroc.xyz/og-image.png"
        type="url"
      />
      <FormInput
        field={formik.getFieldProps("canonicalUrl")}
        formik={formik}
        label="Canonical URL"
        placeholder="https://nitroc.xyz"
        type="url"
      />
      <SaveButton />
    </form>
  );
}

// ─── Contact Form section ─────────────────────────────────────────────────────

function ContactSection() {
  const onSave = useSavedToast();

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-gray-800/50 border border-gray-700 px-5 py-4">
        <p className="text-sm font-medium text-gray-300 mb-1">
          Discord Webhook URL
        </p>
        <p className="text-xs text-gray-500 mb-3">
          Set via the{" "}
          <code className="font-mono text-gray-400">DISCORD_WEBHOOK_URL</code>{" "}
          environment variable. Submissions from the contact form are forwarded
          here.
        </p>
        <div className="flex items-center gap-2">
          <code className="flex-1 text-xs font-mono text-gray-400 bg-gray-900 border border-gray-700 rounded-md px-3 py-2 truncate">
            https://discord.com/api/webhooks/••••••••••••/••••••••••••
          </code>
          <span className="text-xs text-green-400 font-mono bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-md">
            configured
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm font-medium text-gray-300 mb-2">
          Spam protection
        </p>
        <p className="text-xs text-gray-500">
          Form validation is handled client-side via Yup. Server-side rate
          limiting can be added to{" "}
          <code className="font-mono text-gray-400">
            src/app/api/contact/route.ts
          </code>
          .
        </p>
      </div>
      <Button
        type="button"
        className="bg-blue-600 hover:bg-blue-700"
        onClick={onSave}
      >
        Save
      </Button>
    </div>
  );
}

// ─── Security section ─────────────────────────────────────────────────────────

function SecuritySection() {
  const onSave = useSavedToast();
  const formik = useFormik({
    initialValues: {
      email: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be a valid email").required("Required"),
      currentPassword: Yup.string().required("Required"),
      newPassword: Yup.string().min(8, "Min 8 characters").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords do not match")
        .required("Required"),
    }),
    onSubmit: onSave,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <FormInput
        field={formik.getFieldProps("email")}
        formik={formik}
        label="Account email *"
        type="email"
        placeholder="contact@nitroc.xyz"
        required
      />
      <Separator className="bg-gray-800" />
      <FormInput
        field={formik.getFieldProps("currentPassword")}
        formik={formik}
        label="Current password *"
        type="password"
        required
      />
      <FormInput
        field={formik.getFieldProps("newPassword")}
        formik={formik}
        label="New password *"
        type="password"
        required
      />
      <FormInput
        field={formik.getFieldProps("confirmPassword")}
        formik={formik}
        label="Confirm new password *"
        type="password"
        required
      />
      <SaveButton label="Change password" />
    </form>
  );
}

// ─── Shared save button ───────────────────────────────────────────────────────

function SaveButton({ label = "Save" }: { label?: string }) {
  return (
    <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
      {label}
    </Button>
  );
}

// ─── Section content map ─────────────────────────────────────────────────────

const SECTION_CONTENT: Record<
  SectionKey,
  { title: string; description: string; component: React.ReactNode }
> = {
  identity: {
    title: "Identity",
    description:
      "Your public profile — name, bio, and avatar shown across the site.",
    component: <IdentitySection />,
  },
  social: {
    title: "Social Links",
    description: "External profile links shown in the footer and contact page.",
    component: <SocialSection />,
  },
  cv: {
    title: "CV / Resume",
    description: "The PDF linked from the About page download button.",
    component: <CvSection />,
  },
  appearance: {
    title: "Appearance",
    description: "Theme and accent color for the portfolio.",
    component: <AppearanceSection />,
  },
  seo: {
    title: "SEO",
    description:
      "Site-wide metadata used for search engines and social sharing.",
    component: <SeoSection />,
  },
  contact: {
    title: "Contact Form",
    description: "Webhook and delivery configuration for the contact form.",
    component: <ContactSection />,
  },
  security: {
    title: "Security",
    description: "Manage your admin account credentials.",
    component: <SecuritySection />,
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>("identity");
  const section = SECTION_CONTENT[activeSection];

  return (
    <div className="flex gap-8 min-h-full">
      {/* Left nav */}
      <aside className="w-52 shrink-0">
        <p className="text-xs font-mono uppercase tracking-widest text-gray-600 px-3 mb-3">
          Settings
        </p>
        <nav className="space-y-0.5">
          {NAV_SECTIONS.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveSection(key)}
              className={cn(
                "w-full flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors",
                activeSection === key
                  ? "bg-blue-600/20 text-blue-400 font-medium"
                  : "text-gray-400 hover:bg-gray-800 hover:text-gray-200",
              )}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Section content */}
      <div className="flex-1 max-w-xl">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-white">{section.title}</h1>
          <p className="text-sm text-gray-400 mt-1">{section.description}</p>
        </div>
        <Separator className="bg-gray-800 mb-6" />
        {section.component}
      </div>
    </div>
  );
}
