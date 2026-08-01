# AGENTS.md

Project rules and conventions for the portfolio. Follow these when writing, editing, or reviewing code in this repo.

## Stack

- Vite 8 + React 19 + TypeScript (strict)
- React Compiler enabled (`babel-plugin-react-compiler`) — **do not manually memoize**
- Tailwind CSS (v4) for styling — see the Styling section
- GSAP for animations
- Oxlint for linting
- No test framework configured yet

## Commands

- `pnpm dev` — start dev server
- `pnpm build` — typecheck + build (`tsc -b && vite build`)
- `pnpm lint` — lint (`oxlint`)
- `pnpm preview` — preview production build

Always run `pnpm lint` (and `pnpm build` when types are touched) after making changes.

## Folder structure

Client-side SPA. Group code by page/feature. **Global, reusable UI components live in `src/Ui/`.**

```
src/
├── Ui/                        # Global, reusable, domain-agnostic components
│   └── Button/
│       ├── Button.tsx
│       ├── Button.css
│       └── index.ts
├── Home/                      # One folder per page/feature (PascalCase)
│   ├── Home.tsx               # Entry component
│   ├── utils.ts               # Page-specific helpers
│   ├── data/                  # Page-specific data, models & mock data
│   ├── hooks/                 # Page-specific hooks (useXxx.ts)
│   └── components/            # Page-specific components (PascalCase.tsx)
├── lib/                       # Shared pure utilities, constants, config
├── hooks/                     # Shared, cross-page hooks (useXxx.ts)
├── assets/                    # Static assets
├── App.tsx
├── main.tsx
└── index.css
```

### Rules

- **One folder per page** (e.g. `Home/`, `Projects/`). Name the folder after the page.
- Each page folder contains only code used by that page: `utils.ts`, `hooks/`, `components/`, `etc`.
- Anything reusable across two or more pages moves to `src/Ui/` (components), `src/hooks/`, or `src/lib/`. Don't promote prematurely — wait until it is actually used in 2+ places.
- Everything in `src/Ui/` is a component folder with an `index.ts` barrel exporting the public API. Keep internals private.
- Import from the folder root (`import { Button } from '@/Ui/Button'`), never deep into private files.
- Feature/page code must not be imported by other pages or by `Ui/`. `Ui/` stays domain-agnostic.
- Assets that belong to a page live next to it in the page folder when possible.

## File naming

- Components: `PascalCase.tsx` (folder `PascalCase/` with matching name)
- Hooks: `usePascalCase.ts` or `use-kebab-case.ts` (pick one style per file area; hooks always start with `use`)
- Utils/helpers/constants: `kebab-case.ts`
- Type-only files: `types.ts` or `kebab-case.types.ts`
- Barrel files: `index.ts`

## React 19 best practices

### Hooks

- Follow the Rules of Hooks: call hooks only at the top level of components/hooks, never inside conditions, loops, or event handlers.
- Do not use `useEffect` for:
  - Derived state — compute during render instead.
  - Event-response logic — put it in event handlers.
  - Props → state mirroring — reset state with the `key` prop instead.
- Every effect that registers a listener/subscription must return a cleanup function that unregisters it.
- Async state: model as a discriminated union (`type State = { status: 'idle' } | { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; error: unknown }`), not three separate booleans.
- Prefer `useReducer` when a component has 3+ related state values.
- React 19 APIs: use `useActionState`/`useOptimistic`/`useFormStatus` for form submission and optimistic UI instead of hand-rolled `pending`/`error` state. Use `use()` to read promises/context.
- `ref` is a regular prop in React 19 — no `forwardRef`.

### No manual memoization

React Compiler is enabled. **Do not use `useMemo`, `useCallback`, or `React.memo`.** Manual memoization interferes with the compiler. Write plain code; the compiler handles it.

### State

- Co-locate state with the component that owns it. Lift only when two siblings share it.
- Categorize state: local UI state → `useState`/`useReducer`; shared app state → Context; server data → fetched via query/fetch layer, never duplicated into local state.
- A Context that wraps the whole app to hold one component's state is a smell.

### Composition

- Compose small components using `children` and prop-driven variants. Prefer composition over large prop lists and over inheritance.
- Extract shared logic into hooks or utilities, not "base" components.
- Keep components focused; split big files into smaller ones.

### Data fetching

- No `useEffect` + `useState` fetch boilerplate. Use a query library, Suspense + `use()`, or fetch in event handlers/actions.
- Handle loading, success, and error states in the UI. Never leave a fetch unhandled.

## TypeScript

- Strict mode is on. Type everything explicitly: component props, API responses, state types, event handler types, context values.
- Never use `any`. Use `unknown` when uncertain and narrow it with type guards.
- Prefer `interface` for object shapes and props; prefer `const as const` + type unions over `enum`.
- Use `import type` for type-only imports (`verbatimModuleSyntax` is on).
- Keep types close to the code that uses them. Share types only when actually reused.

## Accessibility

- Use semantic HTML. Don't use a `div` when a `button`, `a`, `section`, etc. is correct.
- Interactive elements need accessible names (visible text, `aria-label`, or `title`).
- Decorative images: `alt=""`. Meaningful images: descriptive `alt`.
- Support keyboard navigation for custom interactive components.

## Styling

- **Use Tailwind CSS (v4) for all styling.** Style components with utility classes in the JSX. Tailwind is configured via the `@tailwindcss/vite` plugin; global tokens, fonts, and custom `@keyframes` live in `src/index.css` under the `@theme` block (e.g. `--color-accent`, `--animate-scan`).
- Do not write component `.css` files or new global selectors when Tailwind utilities can express the style. Add custom keyframes/animations as `--animate-*` tokens in `src/index.css`, then use them as `animate-*` classes.
- Refer to design tokens (`bg-panel`, `text-accent`, `border-edge`, `font-mono`) instead of hardcoded hex/rgb values.
- Use GSAP for animations and ScrollTrigger for scroll-driven reveals. Prefer GSAP timelines (drive them from `useEffect` with a cleanup that kills the timeline) over raw `setTimeout` chains.
- Dark telemetry theme is the default: `bg-ink` page background, `bg-panel` cards, `accent` cyan highlights, `mint` success states.
- Keep component-scoped styling; avoid global selectors that leak across pages.
