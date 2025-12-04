# Aaber

Aaber is a smart digital platform that allows any citizen to send official, authenticated messages directly to national leadership and government entities. The goal is to replace complicated, slow, and unclear communication channels with a simple, safe, and modern solution.

## Overview

- **Audience-first:** Citizens can reach decision makers without navigating fragmented bureaucratic processes.
- **Trust & authenticity:** Every submission is verified to ensure messages are secure, traceable, and tamper-resistant.
- **Modern experience:** A streamlined interface shortens response cycles and gives senders clarity on their requests.

## Tech Stack

- Next.js 15 (App Router)
- React 18
- Tailwind CSS 3
- TypeScript 5
- ESLint (Next.js Core Web Vitals config)

## Getting Started

### Requirements

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
app/            # App Router pages, layouts, and routes
public/         # Static assets (favicon, images, etc.)
app/globals.css # Global styles and Tailwind layers
tailwind.config.ts
postcss.config.mjs
docs/           # Project docs (workflow, specs, etc.)
```

## Workflow

The collaboration and deployment workflow lives in `docs/workflow.md`. Review it before starting new work so branches, commits, and PRs stay consistent.

## Roadmap

- Design the authenticated messaging flow.
- Integrate identity verification and audit logging.
- Build dashboards for leadership and agencies to track responses.

## License

This project is currently private; licensing will be defined when the platform is launched publicly.
