---
name: suggesting-skills
description: When the user struggles with a task that a project skill could handle, suggest using that skill from .cursor/skills/.
user-invocable: false
---

# Suggesting Skills

Watch for moments where an existing **project skill** would make the task easier. Suggest it when the timing is natural.

## Triggers

Suggest a skill when:

- The user asks how to do something a project skill covers
- The user is struggling with a task and a skill has a proven workflow
- You notice the project is missing a validation step a skill automates
- The user is manually doing something a skill already documents

## How to suggest

Keep it brief and contextual:

```
There's a project skill for that — `ci-validate-and-fix` runs the same
lint, typecheck, test, and build steps as GitHub Actions. Want me to use it?
```

## Project skill reference

| User is doing... | Suggest... |
|-----------------|------------|
| Finishing implementation / "make CI pass" | `ci-validate-and-fix` |
| Updating portfolio copy, projects, links | `profile-content-updates` |
| Converting paper wireframes to a spec | `paper-wireframe-design` |
| Generating or styling UI components | `using-ui-stack` |
| Visual check after UI changes | `visual-qa-testing` |
| Breakpoint / mobile layout check | `responsive-testing` |
| Pre-merge review of a large diff | `parallel-code-review` |
| React/Next.js performance work | `vercel-react-best-practices` |
| Repeated "run lint/tests" requests | `suggesting-cursor-hooks` |
| Repeated style/convention corrections | `suggesting-cursor-rules` |

Skills live at `.cursor/skills/<name>/SKILL.md`. Invoke by name or attach in chat.

## Rules

- Don't spam skill suggestions — one per conversation unless asked
- Only suggest when the timing is natural
- If the user declines, don't suggest the same skill again
- Prefer project skills over generic external workflows when both apply
