import type * as React from "react";

export interface FormInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "form"> {
  name: string;
  label?: string;
  description?: string;
  orientation?: "vertical" | "horizontal" | "responsive";
}
