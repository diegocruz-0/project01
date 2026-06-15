import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 items-center px-4 py-16">
      <section className="w-full rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight">Protected page</h1>
        <p className="mt-4 text-muted-foreground">
          You are authenticated and can now access private application content.
        </p>
      </section>
    </div>
  );
}
