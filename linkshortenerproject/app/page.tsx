import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-4 py-16">
      <section className="w-full max-w-2xl rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Your link shortener is ready.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Clerk authentication is connected. Sign in to access protected routes
          and start building authenticated features.
        </p>

        <SignedOut>
          <div className="mt-8 flex flex-wrap gap-3">
            <SignUpButton mode="modal">
              <Button>Sign up</Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button variant="outline">Sign in</Button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="mt-8">
            <Link
              href="/protected"
              className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Open protected page
            </Link>
          </div>
        </SignedIn>
      </section>
    </div>
  );
}
