# Clerk Authentication and Routing

## Purpose and Scope
These rules govern authentication and auth-dependent routing for this project. They apply to all pages, components, middleware, and server logic related to user identity and access control.

## Required Rules
- Use Clerk as the only authentication system for this project.
- Protect `/dashboard` as an authenticated route. Unauthenticated users must not access dashboard content.
- Redirect authenticated users from `/` to `/dashboard`.
- Launch sign-in and sign-up flows as Clerk modals.
- Use Clerk-provided components, middleware, and server helpers for auth checks and redirects.

## Disallowed Patterns
- Do not use any non-Clerk auth providers, custom auth systems, or parallel session stores.
- Do not implement token parsing or session validation outside Clerk APIs.
- Do not expose `/dashboard` content before verifying authentication.
- Do not send authenticated users to the homepage when `/dashboard` is available.
- Do not use full-page sign-in or sign-up UX when modal flow is required.

## Examples
- Acceptable: Use Clerk modal triggers (for example, `SignInButton` and `SignUpButton` with modal mode) in navigation and entry points.
- Acceptable: In middleware or server route logic, redirect signed-in users from `/` to `/dashboard`.
- Not acceptable: Adding NextAuth, Auth.js, custom JWT cookies, or localStorage-based auth state.

## Validation Checklist
- [ ] Auth dependencies and checks use Clerk only.
- [ ] `/dashboard` requires a logged-in user.
- [ ] Signed-in users are redirected from `/` to `/dashboard`.
- [ ] Sign-in opens as a Clerk modal.
- [ ] Sign-up opens as a Clerk modal.