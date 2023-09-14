import Link from "next/link";

import { Text } from "@/components/ui";
import SignInForm from "@/components/sign-in-form";
import Logo from "@/components/logo";

export default function SignIn() {
  return (
    <main className="pt-24">
      <div className="mx-auto flex max-w-sm flex-col rounded-md bg-white px-6 py-12 ring-1 ring-slate-200">
        <div className="flex items-center justify-center">
          <Logo size="sm" />
        </div>
        <div className="mb-6 mt-3">
          <Text
            variant="h1"
            className="text-center text-xl font-semibold text-slate-800"
          >
            Welcome back
          </Text>
          <Text variant="p" className="mt-2 text-center text-sm text-slate-600">
            Enter your email to continue
          </Text>
        </div>

        <SignInForm />

        <Text variant="p" className="mt-6 text-sm text-slate-500">
          Don&apos;t have an account?&nbsp;
          <Link
            href="/signup"
            className="text-slate-700 underline underline-offset-4"
          >
            Sign up
          </Link>
        </Text>
      </div>
    </main>
  );
}
