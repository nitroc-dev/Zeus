"use client";

import { FormikProvider, useFormik } from "formik";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";
import { FormInput } from "@/components/inputs/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "@/lib/auth-client";
import { type LoginFormData, loginSchema } from "@/utils/login-validation";

export default function LoginPage() {
  const t = useTranslations("dashboard.login");
  const router = useRouter();

  const handleSubmit = async (values: LoginFormData) => {
    const { error } = await signIn.email({ email: values.email, password: values.password });
    if (error) {
      toast.error(error.message ?? t("error"));
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  const formik = useFormik<LoginFormData>({
    initialValues: { email: "", password: "" },
    validationSchema: loginSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <div className="fixed inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />
      <Card className="w-full max-w-sm relative z-10 bg-gray-900 border-gray-700">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl text-white">{t("title")}</CardTitle>
          <CardDescription className="text-gray-400">{t("subtitle")}</CardDescription>
        </CardHeader>
        <CardContent>
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <FormInput
                field={formik.getFieldProps("email")}
                formik={formik}
                label={t("email")}
                type="email"
                placeholder="admin@example.com"
                required
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <FormInput
                field={formik.getFieldProps("password")}
                formik={formik}
                label={t("password")}
                type="password"
                required
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? t("submitting") : t("submit")}
              </Button>
            </form>
          </FormikProvider>
        </CardContent>
      </Card>
    </div>
  );
}
