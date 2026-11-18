# Fonts Directory

Drop your licensed commercial webfont files here:
- `Stumblebum-Regular.woff2` (primary) and `Stumblebum-Regular.woff` (fallback)

These are configured in `src/app/globals.css` with `@font-face` and `font-display: swap`.
Until `Stumblebum-Regular.woff2` is placed here, the site automatically and smoothly falls back to:
- **Display Headings**: `"Bricolage Grotesque"` (weight 600) via Google Fonts
- **Sub-headings, Numbers & Prices**: `"Bricolage Grotesque"` (weights 500–700) via Google Fonts
- **Body, Navigation, Buttons, Forms & Captions**: `"Schibsted Grotesk"` (weights 400–600) via Google Fonts
