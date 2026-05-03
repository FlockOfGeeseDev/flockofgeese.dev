# flockofgoose.dev

Static landing site for **FlockOfGeese.dev**, ready for [GitHub Pages](https://docs.github.com/pages).

## Local preview

Open `index.html` in a browser, or from the repo root:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages

1. Push this repository to GitHub with `index.html` at the **root** of the default branch (for example `main`).
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Under **Source**, choose **Deploy from a branch**, select your default branch, folder **`/` (root)**, then save.

After the first deploy, the site is available at `https://<username>.github.io/<repository>/` unless you add a custom domain.

## Design system foundation

The base design-system tokens and guardrails live in [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md).

- Tokens are defined in `:root` in [`styles.css`](styles.css).
- Existing UI components now consume those tokens for colors, spacing, typography, and radius.

### Acceptance coverage

- Token set exists and is consumed by landing components (`styles.css`, `index.html`).
- Reusable primitives shipped with examples:
  - `Nav` (`.ds-nav`)
  - `Section` (`.ds-section`)
  - `Card` (`.ds-card`)
  - `Button` (`.ds-button`)
  - `Input` (`.ds-input`)
- Visual consistency validated across main landing sections by reusing primitives in:
  - `Our Projects` (multiple real project cards)
  - `Design System Primitives` (usage examples)

## Configuration

- **GitHub icon URL:** In [`index.html`](index.html), find the comment `Replace href with your GitHub profile` and set the `href` on the GitHub link to your profile or org (for example `https://github.com/your-username`).
- **Learn More button:** The SyncGoose card’s “Learn More” link currently points to `#`. Change that `href` to your App Store page, product site, or repository when you have a URL.
- **Reference assets:** [`assets/mock-reference.png`](assets/mock-reference.png) is a copy of the design mock for visual comparison. [`assets/syncgoose-app-icon.png`](assets/syncgoose-app-icon.png) is used for the favicon and Apple touch icon.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and inline SVG artwork |
| `styles.css` | Layout, design tokens, component styles, responsive rules |
| `DESIGN_SYSTEM.md` | Design-system constraints and evolution path |
| `assets/` | PNG favicon and optional mock reference |
| `.nojekyll` | Disables Jekyll so all paths are served as static files |
