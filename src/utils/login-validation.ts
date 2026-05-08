import * as yup from "yup";

export interface LoginFormData {
  email: string;
  password: string;
}

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
