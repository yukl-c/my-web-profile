---
name: saving-workspace-context
description: Persist useful context — research, decisions, learnings, templates — to workspace files so knowledge survives across conversations. Use proactively when working on this project.
user-invocable: false
---

# Saving Workspace Context

Build institutional memory. As you work, save information that should outlast this conversation.

## At the start of every conversation

Load existing context before doing anything else:

1. Read `.cursor/plans/design-spec.md` and `.cursor/plans/profile-website.md` for UI/layout constraints
2. Read `docs/profile-data.md` when touching profile content
3. Check `.cursor/rules/` for project conventions
4. Check `context/` if it exists — read files relevant to the current task

If `context/` does not exist, create it when you first have something worth saving.

## During a conversation

Save context as soon as you recognize it — don't wait until the end.

| Signal | Where to save |
|---|---|
| Profile content or data conventions | `docs/profile-data.md` or `context/profile-data.md` |
| Design/layout decisions | `.cursor/plans/design-spec.md` (after user approval) |
| Research on a topic | `context/{topic-slug}.md` |
| Strategy decisions or learnings | `context/{topic}.md` with dated entries |
| A repeatable multi-step workflow | New skill in `.cursor/skills/{name}/SKILL.md` |
| A persistent constraint or convention | New rule in `.cursor/rules/` |

### How to save

- **Don't ask permission** for small context saves — mention what you saved
- **Do ask permission** before creating new skills or rules
- **Append, don't overwrite** when adding to existing context files — use dated entries
- **Use clear file names** — future agents skim directory listings to find context

## At the end of a conversation

Before finishing, ask:

- Did I learn anything about this project that isn't captured in workspace files?
- Did I do research that would be painful to redo?
- Did I discover a pattern that should become a skill or rule?

If yes to any, save it before the conversation ends.

## File format (`context/{slug}.md`)

```markdown
# {Topic}

## {Date} — {Brief title}

{What was learned, decided, or discovered}
```

Keep entries reverse-chronological (newest first).

## Rules

- Be proactive — save context without being asked, but mention what you saved
- Keep files scannable
- Don't save trivial information
- Date everything that accumulates over time
- Check for existing files before creating new ones
