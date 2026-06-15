# Shadcn UI-Only Component Usage

## Purpose and Scope
These rules govern all UI implementation in this project. They apply to pages, layouts, client components, and any other code that renders visible interface elements.

## Required Rules
- Use shadcn/ui components for all UI elements.
- Reuse existing components from components/ui before adding anything new.
- If a required UI primitive is missing, add the official shadcn/ui component version under components/ui.
- Limit customization to props, className, and Tailwind utility classes on shadcn/ui components.
- Compose UI directly in feature files by combining shadcn/ui components.

## Disallowed Patterns
- Do not create custom UI component files for buttons, inputs, dialogs, cards, navigation, forms, or similar elements.
- Do not build primary interactive controls with raw HTML when an equivalent shadcn/ui component exists.
- Do not copy or fork shadcn/ui component source into feature folders.
- Do not introduce additional UI component libraries.

## Examples
- Acceptable: Use Button, Input, Card, Dialog, and Select from components/ui.
- Acceptable: Add a missing official shadcn/ui primitive to components/ui, then use it.
- Not acceptable: Create components/MyButton.tsx for a styled button.
- Not acceptable: Use a custom-styled raw button for primary actions when Button exists.

## Validation Checklist
- [ ] Every UI change uses shadcn/ui components.
- [ ] No new custom UI component files were introduced.
- [ ] Any newly added components in components/ui are official shadcn/ui primitives.
- [ ] No extra UI component libraries were added.
- [ ] Primary interactive controls are not raw HTML when shadcn/ui equivalents exist.