import Link from "next/link";

import { buttonStyles } from "@/components/ui";
import Features from "@/components/features";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl py-24">
      <div className="flex flex-col items-center px-5">
        <section className="flex flex-col items-center">
          <h1 className="max-w-4xl text-center text-4xl font-medium md:text-5xl lg:text-7xl">
            Manage your bill and subscriptions with ease
          </h1>
          <p className="mt-8 text-center text-xl text-slate-500">
            The best way to view your bills at a glance.
          </p>
          <nav className="mt-6 flex gap-3">
            <Link
              href="/signin"
              className={buttonStyles({ variant: "primary", size: "lg" })}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className={buttonStyles({ variant: "outline", size: "lg" })}
            >
              Sign up
            </Link>
          </nav>
        </section>
        <Features />
      </div>
    </main>
  );
}
