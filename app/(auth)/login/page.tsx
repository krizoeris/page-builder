import { Metadata } from "next";
import { LoginProvider } from "@/components/auth/LoginProvider";

export const metadata: Metadata = {
  title: "Login",
};
export default function LoginPage() {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-4">
        <LoginProvider provider="google" />
      </div>
    </div>
  );
}
