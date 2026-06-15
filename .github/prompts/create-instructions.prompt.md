---
name: create-instructions
description: Create or update a project instruction markdown file in /docs using the instructions-generator agent
argument-hint: Provide topic, scope, hard rules, optional examples, and optional target .md filename
agent: instructions-generator
---

Create or update an instructions markdown file in /docs based on the user input.

Execution rules:
1. If the user provides a target .md file path or filename, update that file.
2. If no target file is provided, create a new file in /docs named <topic-slug>.instructions.md.
3. Keep instructions concise, specific, and enforceable.
4. Write for both humans and coding agents.
5. Include examples only when they improve clarity.

Required sections in generated instruction files:
- Title
- Purpose and Scope
- Required Rules
- Disallowed Patterns
- Examples (optional)
- Validation Checklist

AGENTS.md synchronization rules:
1. If this is a new topic, add one entry that references the new /docs file.
2. If this updates an existing topic, update the existing AGENTS.md entry as needed.
3. Do not create duplicate entries.
4. Prefer updating linkshortenerproject/AGENTS.md unless the user explicitly specifies another AGENTS.md.

Quality bar:
- Use plain, testable language (avoid vague terms like "usually" or "try to").
- Avoid conflicting rules.
- Keep changes scoped to the requested topic.

If critical details are missing (for example topic, scope, or target audience), ask the user for the minimum missing information before editing files.