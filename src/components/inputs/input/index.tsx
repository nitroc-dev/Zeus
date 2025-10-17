"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { FormInputProps } from "./props";

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      className,
      label,
      description,
      error,
      touched = false,
      orientation = "vertical",
      required = false,
      id,
      name,
      field,
      formik,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    // Support Formik field prop pattern
    const fieldName = field?.name || name;
    const fieldValue = field?.value ?? props.value ?? "";
    const fieldOnChange = field?.onChange || props.onChange;
    const fieldOnBlur = field?.onBlur || props.onBlur;

    // Support Formik error/touched detection
    const isFieldTouched =
      touched || (formik && fieldName ? formik.touched[fieldName] : false);
    const fieldError =
      error || (formik && fieldName ? formik.errors[fieldName] : undefined);
    const hasError = isFieldTouched && fieldError;

    return (
      <Field
        orientation={orientation}
        data-invalid={hasError ? "true" : "false"}
        className="space-y-2"
      >
        {label && (
          <FieldLabel htmlFor={inputId} className="text-sm font-medium">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </FieldLabel>
        )}

        <FieldContent>
          <Input
            id={inputId}
            name={fieldName}
            ref={ref}
            value={fieldValue}
            onChange={fieldOnChange}
            onBlur={fieldOnBlur}
            className={cn(
              hasError && "border-destructive focus-visible:ring-destructive",
              className
            )}
            aria-invalid={hasError ? "true" : "false"}
            aria-describedby={
              description || fieldError
                ? `${inputId}-description ${inputId}-error`
                : undefined
            }
            {...props}
          />

          {description && (
            <FieldDescription id={`${inputId}-description`}>
              {description}
            </FieldDescription>
          )}

          {hasError && (
            <FieldError id={`${inputId}-error`}>{fieldError}</FieldError>
          )}
        </FieldContent>
      </Field>
    );
  }
);

FormInput.displayName = "FormInput";

export { FormInput };
