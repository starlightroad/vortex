import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1>Manage your bill and subscriptions with ease</h1>
      <nav>
        <Link href="/signin">Sign in</Link>
        <Link href="/signup">Sign up</Link>
      </nav>
    </main>
  );
}
