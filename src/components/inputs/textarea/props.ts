import type { FormikErrors, FormikTouched } from "formik";
import type * as React from "react";

export interface FormTextareaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "children" | "form"
  > {
  label?: string;
  description?: string;
  error?: string;
  touched?: boolean;
  orientation?: "vertical" | "horizontal" | "responsive";
  required?: boolean;
  /** Formik field props (when using Formik) */
  field?: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  };
  /** Formik form object for error/touched state */
  formik?: {
    errors: FormikErrors<Record<string, unknown>>;
    touched: FormikTouched<Record<string, unknown>>;
  };
}
