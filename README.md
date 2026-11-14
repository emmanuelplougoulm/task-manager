# Task Manager

[![CI](https://github.com/emmanuelplougoulm/task-manager/actions/workflows/ci.yml/badge.svg)](https://github.com/emmanuelplougoulm/task-manager/actions/workflows/ci.yml)

A small task board built with **Vue 3**, **Pinia** and **TypeScript**, used as a testing playground: unit tests on the store and utilities, an end-to-end Playwright suite running on Chromium, Firefox and WebKit, accessibility checks with axe, and UI components documented in Storybook.

**Live demo:** [emmanuelplougoulm.github.io/task-manager](https://emmanuelplougoulm.github.io/task-manager/)

## Features

- Create, edit and delete tasks (title, description, due date, status)
- Two views: a table and a kanban board with drag and drop between columns
- Search, filter by status, sort by due date (undated tasks last)
- Tasks persist in `localStorage`

## Testing strategy

| Layer | Tool | What it covers |
| --- | --- | --- |
| Unit | Vitest + jsdom | Pinia store (add, edit, move, delete, filter, search, sort, persistence) and utilities |
| End-to-end | Playwright | User flows on Chromium, Firefox and WebKit: CRUD, validation, cancel, delete confirmation, reload persistence, filters, sorting, kanban drag and drop |
| Accessibility | axe-core | WCAG 2 A/AA scan of the empty board, the table, the kanban view and the edit form |
| Components | Storybook | UI primitives (Button, TextInput, Badge, Tabs, Dropdown) in isolation |

The e2e suite follows a few rules:

- **Page object** (`e2e/pages/TaskBoardPage.ts`) holds the selectors and user actions, so specs read as scenarios.
- **Accessible selectors**: roles, labels and accessible names only (`getByRole`, `getByLabel`), no CSS classes. If a test cannot find an element by role, that is an accessibility bug in the app.
- **Fixtures** (`e2e/fixtures.ts`): a `seed` fixture writes tasks to `localStorage` before the app loads, so filter and kanban tests start from a known state without clicking through the UI.
- **CI** runs each browser as its own job on the production build, uploads the HTML report as an artifact, and only deploys the demo when every job is green.

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check and build for production |
| `npm run test:unit` | Run the Vitest unit tests |
| `npm run test:e2e` | Run the Playwright suite (`npx playwright install` first) |
| `npm run lint` | Run ESLint |
| `npm run storybook` | Start Storybook |

## Project structure

```
src/
  _UI/                 design-system primitives, each with a Storybook story
  modules/project/     the task board: page, components, Pinia store
  composables/         side panel and delete helpers
  utils/               filtering, sorting, date formatting, persistence
e2e/
  pages/               page objects
  fixtures.ts          shared fixtures (page object, data seeding)
  *.spec.ts            scenarios
```
