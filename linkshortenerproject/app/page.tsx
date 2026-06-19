import { SignInButton, SignUpButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const featureHighlights = [
  {
    title: "Custom branded short links",
    description:
      "Create memorable, trusted URLs that match your product voice and improve click confidence.",
    label: "Brand",
  },
  {
    title: "Secure dashboard access",
    description:
      "Use Clerk authentication to keep link management private, with protected routes for your team.",
    label: "Security",
  },
  {
    title: "Fast link operations",
    description:
      "Create, organize, and maintain links from one place so campaigns can move without delays.",
    label: "Speed",
  },
  {
    title: "Campaign-ready analytics",
    description:
      "Track where links are used and how they perform to learn what content actually converts.",
    label: "Insights",
  },
  {
    title: "Team-friendly structure",
    description:
      "Keep links clear and searchable with predictable naming, ownership, and shared visibility.",
    label: "Collaboration",
  },
  {
    title: "Built for growth",
    description:
      "From first launch to larger traffic spikes, the stack is ready for product and marketing scale.",
    label: "Scale",
  },
]

const launchStats = [
  {
    title: "Modal auth onboarding",
    detail: "Sign in and sign up without leaving the page.",
  },
  {
    title: "Protected dashboard",
    detail: "Authenticated users are routed directly to work.",
  },
  {
    title: "Single workflow",
    detail: "Create links, monitor performance, and iterate fast.",
  },
]

const steps = [
  {
    step: "01",
    title: "Create your account",
    description: "Open the modal, sign up, and get instant access to your dashboard.",
  },
  {
    step: "02",
    title: "Generate short links",
    description:
      "Paste your destination URL, define the slug format you want, and publish in seconds.",
  },
  {
    step: "03",
    title: "Track and optimize",
    description:
      "Review usage trends, spot top performers, and keep improving each campaign touchpoint.",
  },
]

export default async function Home() {
  const { userId } = await auth()

  if (userId) {
    redirect("/dashboard")
  }

  return (
    <div className="relative flex flex-1 justify-center overflow-x-hidden px-4 py-14 sm:px-6 lg:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -right-28 top-80 h-72 w-72 rounded-full bg-muted blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:gap-10">
        <section className="rounded-2xl border border-border bg-card/75 p-8 backdrop-blur sm:p-10 lg:p-12">
          <Badge
            variant="secondary"
            className="mb-5 rounded-full px-3 py-1 text-[0.68rem] tracking-[0.14em] uppercase"
          >
            Link shortener platform
          </Badge>

          <h1 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Share cleaner links. Protect access. Learn what performs.
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-sm text-muted-foreground sm:text-base">
            This app gives your team a focused space to create short links, manage
            them securely, and understand usage over time. Built with Clerk auth,
            protected routes, and a modern dashboard-first workflow.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <Button size="lg">Start shortening links</Button>
            </SignUpButton>
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <Button size="lg" variant="outline">
                Sign in to continue
              </Button>
            </SignInButton>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {launchStats.map((item) => (
              <Card key={item.title} className="gap-3 bg-background/70 py-5">
                <CardHeader className="gap-2 pb-0">
                  <CardTitle className="text-sm">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="features" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureHighlights.map((feature) => (
            <Card key={feature.title} className="h-full gap-4">
              <CardHeader>
                <div className="mb-2">
                  <Badge variant="outline">{feature.label}</Badge>
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section className="rounded-2xl border border-border bg-card p-8 sm:p-10">
          <div className="mb-6 flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
            <Badge variant="outline" className="rounded-full px-3 py-1">
              3 quick steps
            </Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((item) => (
              <Card key={item.step} className="gap-4 py-5">
                <CardHeader className="gap-2 pb-0">
                  <CardDescription className="font-mono text-xs tracking-[0.16em] uppercase">
                    Step {item.step}
                  </CardDescription>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
