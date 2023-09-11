import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import type { Status } from "@/lib/types";
import { signInConstants } from "@/lib/constants";
import { createError } from "@/lib/utils";

export default function useAuth() {
  const session = useSession();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const isSignedIn = session.status === "authenticated" ? true : false;

  const handleSignIn = async (email: string) => {
    try {
      setError(null);
      setStatus("loading");

      if (!email) {
        throw new Error(signInConstants.SIGN_IN_FAILED);
      }

      const res = await signIn("email", {
        email,
        callbackUrl: "/dashboard",
        redirect: false,
      });

      if (res?.error) {
        setStatus("failed");

        throw new Error(res.error);
      }

      setStatus("succeeded");
    } catch (err) {
      const error = createError(err);

      setStatus("failed");
      setError(error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" });
    } catch (err) {
      const error = createError(err);

      setStatus("failed");
      setError(error.message);
    }
  };

  return {
    status,
    error,
    isSignedIn,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };
}
