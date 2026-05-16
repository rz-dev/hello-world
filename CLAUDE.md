# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A TypeScript learning sandbox. Source lives under `src/`, runs on Node via `tsx` (no build step — `.ts` is executed directly).

## Commands

- `npm run dev` — execute `src/hello.ts` with `tsx`. Change the entry path in `package.json` when adding new scripts to run.
- `npm run typecheck` — run `tsc --noEmit` against the project. `tsconfig.json` has `strict: true`, so type errors fail this command even though they don't block `npm run dev` (tsx strips types without checking them).

There is no test runner or linter configured yet.

## Conventions

- `tsconfig.json` uses `"moduleResolution": "Bundler"` and `"module": "ESNext"`, so imports use ESM syntax (`import { x } from "./foo.ts"` — include the `.ts` extension).
- `noEmit` is on; this repo is run, not compiled to `dist/`.

## Branching

Per the active development instructions, work on the branch `claude/add-claude-documentation-utdCQ` and push to that same branch. Do not push to `master` without explicit permission.
