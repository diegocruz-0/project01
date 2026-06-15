<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Shared Workspace Instruction Pack

Use this file as the current source of project standards until the docs folder is created.

Topic-specific instructions:

- `../docs/clerk-auth-routing.instructions.md`: Clerk-only auth rules, protected dashboard routing, homepage redirect behavior, and modal sign-in/sign-up requirements.
- `../docs/shadcn-ui-only.instructions.md`: Enforce shadcn/ui for all UI elements and prohibit custom UI component creation.

## Project Overview

This project is a Next.js 16 App Router application for a link shortener with Clerk authentication.

Current structure and intent:

- Application code lives in the current folder.
- Public and authenticated flows exist (sign-in, sign-up, and protected routes).
- UI uses Tailwind CSS v4 with shadcn patterns.
- Data access is designed around Drizzle ORM and Neon serverless Postgres.

## Technology Baseline

- Next.js 16 and React 19
- TypeScript with strict mode
- Clerk for authentication and middleware route protection
- Tailwind CSS v4 and shared UI primitives
- Drizzle ORM and Neon driver for database operations

## Mandatory Pre-Code Rule

ALWAYS refer to the relevant `.md` file before generating any code.

Required workflow for every coding task:

1. Determine the task area (auth, routing, UI, data, or quality checks).
2. Read this file first, then any additional relevant markdown file that exists (`README.md`, `CLAUDE.md`, or workspace `../AGENTS.MD`).
3. If the needed markdown guidance does not exist yet, ask for direction instead of guessing standards.
4. When multiple markdown files apply, prioritize the most specific one to the task.
5. Apply selected rules during implementation and validation.

## Best Practices

- Keep changes minimal and scoped to the request; avoid unrelated refactors.
- Prefer Server Components by default and use `"use client"` only when required.
- Protect sensitive routes with middleware and server-side auth checks.
- Never hardcode secrets or credentials; use environment variables.
- Keep strict TypeScript safety and avoid `any` unless unavoidable and justified.
- Reuse existing UI components and utilities before creating new primitives.
- Follow existing import/path conventions, including alias usage (`@/`).
- Preserve responsive and accessible behavior for all UI changes.
- Run relevant quality checks before finishing (`npm.cmd run lint`, and build when behavior can be affected).
