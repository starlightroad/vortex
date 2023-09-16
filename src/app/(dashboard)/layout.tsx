import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";

import "@/assets/styles/globals.css";
import SessionProvider from "@/providers/session";
import authOptions from "@/lib/nextauth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard | Vortex",
  description: "An overview of your bills and subscriptions",
};

type DashboardProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({ children }: DashboardProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
