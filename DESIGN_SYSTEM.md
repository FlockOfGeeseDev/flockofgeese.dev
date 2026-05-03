# FlockOfGeese.dev Design System Foundation

This repository now has a baseline design system intended for fast, consistent feature delivery.

## 1) Token foundation (`styles.css`)

All foundational tokens are defined in `:root`:

- Color: canvas, surfaces, semantic text, accent, borders, status colors
- Typography: font family, text size scale, line-height scale
- Spacing: `--space-1` to `--space-12`
- Shape: small/medium/large/pill radius tokens
- Elevation: card and accent-hover shadow tokens
- Layout: max content width

## 2) Component primitives

Current page components are now normalized to token usage:

- `Nav` via `.ds-nav` (navigation container + active link state)
- `Section` via `.ds-section` (layout shell for top-level blocks)
- `Card` via `.ds-card` (surface, radius, and elevation)
- `Button` via `.ds-button` (action treatment and hover state)
- `Input` via `.ds-input` (field, placeholder, and focus behavior)
- Badge treatment via `.ds-badge`

These primitives can be reused for upcoming product sections without introducing new one-off values.

Usage examples are rendered directly on the landing page in the **Design System Primitives** section.
Production consistency is validated in **Our Projects**, which now renders multiple real project cards using the same primitives.

## 3) Delivery guardrails

When adding new UI, follow these rules:

1. Do not add raw hex values unless introducing a new token.
2. Prefer existing spacing and radius tokens over ad-hoc numbers.
3. Keep component state colors semantic (`accent`, `text-secondary`, `border-subtle`).
4. Keep mobile behavior additive via existing breakpoints unless a new breakpoint is required.

## 4) Next build steps

1. Add a second project card to validate repeated primitive composition in production content.
2. Add visual regression checks (Playwright screenshot) to lock baseline.
3. Add a dark-theme token set behind `[data-theme="dark"]` without changing component APIs.
