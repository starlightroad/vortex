import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";

import "@/assets/styles/globals.css";
import SessionProvider from "@/providers/session";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vortex",
  description: "Manage your bills and subscriptions",
};

type HomeProps = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: HomeProps) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
