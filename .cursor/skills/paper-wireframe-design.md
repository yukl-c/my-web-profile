---
name: paper-wireframe-design
description: Convert paper wireframes into an implementation-ready design spec before coding.
user-invocable: true
---

# Paper Wireframe Design Workflow

Use this workflow when the design source is hand-drawn wireframes instead of Figma.

## Goal

Create `.cursor/plans/design-spec.md` as the source of truth for UI layout and styling before implementation.

## Input Checklist

- Photos are clear, full-frame, and labeled by page
- Region names are visible (header, hero, projects grid, contact form, etc.)
- Proportion notes are included where meaningful
- Mobile variations are provided if they differ from desktop

## Output Requirements

`design-spec.md` should include:

1. Route map and user journey
2. Global layout (header/footer/container/nav behavior)
3. Per-page breakdown with region order and proportions
4. Style guidance (amber usage, fixed typography, spacing rhythm)
5. Responsive rules and explicit assumptions
6. Component map (wireframe box → component name)

## Rules

- Do not start UI implementation until spec is approved by user.
- If any section is unclear, ask concise clarifying questions first.
- Mark every guess as `assumed — confirm` in the spec.
- When wireframes change, update spec first, then code.

## Approval Gate

| Status | Meaning |
|--------|---------|
| **Draft** | Spec written from wireframes; awaiting review |
| **Approved** | User confirmed layout, styles, workflow — coding may start |
| **Revise** | User sends updated sketch or notes; spec is updated |
