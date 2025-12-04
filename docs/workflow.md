# Workflow

This document describes the default flow for proposing, reviewing, and deploying changes to Aaber. Treat it as the single source of truth for how we collaborate; update it whenever the process evolves.

## Branching Strategy

- `main` stays deployable at all times. Every commit on `main` should pass lint/build checks and reflect production-ready code.
- Create short-lived branches from `main` using the following prefixes:
  - `feature/<short-desc>` for new functionality.
  - `fix/<short-desc>` for bug fixes.
  - `chore/<short-desc>` for tooling, docs, or dependency work.
- Keep branch names lowercase with hyphen-separated keywords (e.g., `feature/auth-form`).

## Commit Convention

- Follow [Conventional Commits](https://www.conventionalcommits.org) to keep history readable and automate release notes later.
  - Examples: `feat: add message submission form`, `fix: handle empty attachments`, `chore: update README`.
- Make small, focused commits. Avoid mixing unrelated changes.

## Development Flow

1. **Sync**: `git pull origin main` before branching.
2. **Branch**: `git checkout -b feature/<short-desc>`.
3. **Environment**: Create/refresh `.env.local` (never commit secrets). Firebase / Vercel keys live here and inside Vercel project settings.
4. **Install**: `npm install` if dependencies changed.
5. **Build locally**: Keep `npm run dev` running for fast feedback.
6. **Quality gates**: Run `npm run lint` and `npm run build` before opening a PR. Add automated tests once they exist and run them here as well.
7. **Commit**: Use the conventional format.
8. **Push**: `git push -u origin <branch-name>`.
9. **Open PR**: Fill out the template (see checklist below) and request review.

## Continuous Integration

- GitHub Actions workflow: `.github/workflows/ci.yml`.
- Triggers on every push to `main` and all pull requests targeting `main`.
- Steps:
  1. Install dependencies with `npm ci`.
  2. Run `npm run lint`.
  3. Run `npm run build`.
- PRs must be green before merging. If the workflow fails, fix the issue locally, push again, and re-run the checks.

## Pull Request Checklist

- Purpose and context are explained (screenshots or videos when UI changes are visible).
- References related issues or tasks.
- `npm run lint` and `npm run build` succeed locally.
- Migrations or schema changes are documented with rollback instructions.
- Environment variable changes are highlighted.
- Preview link (from Vercel) is attached once CI finishes.

## Code Review Expectations

- Reviewers focus on correctness, security, accessibility, and maintainability.
- Authors respond to feedback promptly or document why a suggestion is deferred.
- No self-approvals unless explicitly agreed upon for emergencies.

## Deployment

- **Preview deployments**: Every PR automatically receives a Vercel preview once connected.
- **Production deployment**: Merging to `main` triggers a Vercel production deploy.
- Keep Firebase service accounts and API keys synced between `.env.local` and Vercel’s Environment Variables (Production & Preview scopes as needed).
- After Firebase changes (rules, indexes, functions), document the required manual steps in the PR.

## Firebase & Secrets

- Never commit `.env*`, service-account JSON, or Firebase configuration files containing secrets.
- Use Firebase Console to generate client config and store values under:
  - `NEXT_PUBLIC_FIREBASE_*` for browser-safe settings.
  - `FIREBASE_ADMIN_*` (or similar) for privileged server actions.
- If using Firebase Admin SDK (via Next.js server actions or API routes), ensure the credentials are only loaded server-side.

## Updating This Document

- When the workflow changes (new tooling, additional gates, etc.), update `docs/workflow.md` in the same PR as the process change so everyone stays aligned.

