# Branching Strategy

## Overview

Chitkaar 2.0 uses a protected branch workflow.

The repository is currently maintained by a solo developer, but the workflow
is designed to support additional contributors later.

## Protected Branches

### main

Purpose:

Production-ready code.

Rules:

- No direct pushes.
- Pull request required.
- CI must pass.
- No force pushes.
- No branch deletion.
- Changes should be production-ready.
- Solo development currently allows self-approval.

### develop

Purpose:

Integration and staging branch.

Rules:

- No direct pushes.
- Pull request required.
- CI must pass.
- No force pushes.
- No branch deletion.
- Used to integrate completed work before production.

## Working Branches

### feature/*

New functionality.

Examples:

- `feature/events`
- `feature/volunteer`
- `feature/donation`

### ui/*

UI/UX experiments and visual implementation.

Examples:

- `ui/homepage`
- `ui/navigation`
- `ui/hero`

### test/*

Testing, QA, accessibility, and performance work.

Examples:

- `test/accessibility`
- `test/performance`

### fix/*

Bug fixes.

Examples:

- `fix/mobile-navigation`
- `fix/event-registration`

### docs/*

Documentation changes.

Examples:

- `docs/architecture`
- `docs/testing`

### experiment/*

Isolated experimental work that may not reach production.

## Flow

Working branch
→ Pull Request
→ develop
→ Testing / staging
→ Pull Request
→ main
→ Production

## Rules

Never:

- Force push protected branches.
- Commit directly to `main`.
- Commit directly to `develop`.
- Mix unrelated changes in one branch.
- Merge untested functionality.

Branches should have a focused purpose.