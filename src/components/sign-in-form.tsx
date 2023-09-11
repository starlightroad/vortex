"use client";

import type { SubmitHandler } from "@/lib/types";
import { signInConstants } from "@/lib/constants";
import { Alert, AlertDescription, Button } from "@/components/ui";
import useForm from "@/hooks/use-form";
import useAuth from "@/hooks/use-auth";

export default function SignInForm() {
  const { signIn, status, error } = useAuth();
  const { data, handleChange, handleSubmit } = useForm({
    email: "",
  });

  const handleSignIn: SubmitHandler<typeof data> = (data) => {
    signIn(data.email);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(handleSignIn)}>
      {status === "failed" && (
        <Alert variant="error">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {status === "succeeded" && (
        <Alert variant="success">
          <AlertDescription>{signInConstants.SIGN_IN_SUCCESS}</AlertDescription>
        </Alert>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="sr-only text-sm text-slate-600">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="name@acme.com"
          autoComplete="off"
          defaultValue={data.email}
          onChange={handleChange}
          disabled={status === "loading"}
          className="h-10 rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
        />
        <Button type="submit" size="lg" disabled={status === "loading"}>
          Continue
        </Button>
      </div>
    </form>
  );
}
