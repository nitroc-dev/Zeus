import * as yup from "yup";

export interface CategoryFormData {
  label: string;
  icon: string;
}

export const categorySchema = yup.object().shape({
  label: yup.string().required("Label is required"),
  icon: yup.string(),
});
