"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { FormInputProps } from "./props";

export function FormInput({
  className,
  label,
  description,
  orientation = "vertical",
  required = false,
  name,
  ...props
}: FormInputProps) {
  const id = React.useId();
  const {
    register,
    formState: { errors, touchedFields },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;
  const isTouched = !!touchedFields[name];
  const hasError = isTouched && !!error;

  return (
    <Field
      orientation={orientation}
      data-invalid={hasError ? "true" : "false"}
      className="space-y-2"
    >
      {label && (
        <FieldLabel htmlFor={id} className="text-sm font-medium">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </FieldLabel>
      )}
      <FieldContent>
        <Input
          id={id}
          className={cn(
            hasError && "border-destructive focus-visible:ring-destructive",
            className,
          )}
          aria-invalid={hasError ? "true" : "false"}
          aria-describedby={
            description || hasError
              ? `${id}-description ${id}-error`
              : undefined
          }
          {...register(name)}
          {...props}
        />
        {description && (
          <FieldDescription id={`${id}-description`}>
            {description}
          </FieldDescription>
        )}
        {hasError && <FieldError id={`${id}-error`}>{error}</FieldError>}
      </FieldContent>
    </Field>
  );
}
