import type * as React from "react";

export interface FormTextareaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    "children" | "form"
  > {
  name: string;
  label?: string;
  description?: string;
  orientation?: "vertical" | "horizontal" | "responsive";
}
