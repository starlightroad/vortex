import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";

import "@/assets/styles/globals.css";
import SessionProvider from "@/providers/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign in | Vortex",
  description: "Sign in to your account",
};

type AuthProps = {
  children: React.ReactNode;
};

export default async function AuthLayout({ children }: AuthProps) {
  const session = await getServerSession();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
