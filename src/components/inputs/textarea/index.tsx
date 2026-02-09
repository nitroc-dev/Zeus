"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { FormTextareaProps } from "./props";

const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
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
    ref,
  ) => {
    const generatedId = React.useId();
    const textareaId = id || generatedId;

    // Support Formik field prop pattern
    const fieldName = field?.name || name;
    const fieldValue = field?.value ?? props.value ?? "";
    const fieldOnChange = field?.onChange || props.onChange;
    const fieldOnBlur = field?.onBlur || props.onBlur;

    // Support Formik error/touched detection
    const isFieldTouched =
      touched || (formik && fieldName ? formik.touched[fieldName] : false);
    const fieldError =
      error ||
      (formik && fieldName ? (formik.errors[fieldName] as string) : undefined);
    const hasError = isFieldTouched && fieldError;

    return (
      <Field
        orientation={orientation}
        data-invalid={hasError ? "true" : "false"}
        className="space-y-2"
      >
        {label && (
          <FieldLabel htmlFor={textareaId} className="text-sm font-medium">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </FieldLabel>
        )}

        <FieldContent>
          <Textarea
            id={textareaId}
            name={fieldName}
            ref={ref}
            value={fieldValue}
            onChange={fieldOnChange}
            onBlur={fieldOnBlur}
            className={cn(
              hasError && "border-destructive focus-visible:ring-destructive",
              className,
            )}
            aria-invalid={hasError ? "true" : "false"}
            aria-describedby={
              description || fieldError
                ? `${textareaId}-description ${textareaId}-error`
                : undefined
            }
            {...props}
          />

          {description && (
            <FieldDescription id={`${textareaId}-description`}>
              {description}
            </FieldDescription>
          )}

          {hasError && (
            <FieldError id={`${textareaId}-error`}>{fieldError}</FieldError>
          )}
        </FieldContent>
      </Field>
    );
  },
);

FormTextarea.displayName = "FormTextarea";

export { FormTextarea };
