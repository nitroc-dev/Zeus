import * as React from "react";

export interface FormInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "form"> {
  label?: string;
  description?: string;
  error?: string;
  touched?: boolean;
  orientation?: "vertical" | "horizontal" | "responsive";
  required?: boolean;
  // Formik support
  field?: {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  formik?: {
    touched: Record<string, boolean>;
    errors: Record<string, string>;
    setFieldValue: (field: string, value: string) => void;
    setFieldTouched: (field: string, touched?: boolean) => void;
  };
}
