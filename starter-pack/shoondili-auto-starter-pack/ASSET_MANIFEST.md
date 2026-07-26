# Asset Manifest

## Brand

| File | Purpose | Notes |
|---|---|---|
| `brand/logo-dark.svg` | Primary logo on dark backgrounds | Contour-traced directly from the supplied PNG; white wordmark, gold automotive line and descriptor, transparent canvas |
| `brand/logo-light.svg` | Logo on light backgrounds | Same traced geometry; charcoal wordmark, deep-gold automotive line and descriptor, transparent canvas |
| `brand/favicon.svg` | Browser icon | Gold automotive line on black rounded square |
| `brand/logo-reference.png` | Supplied reference | Use as the visual authority when checking the SVG recreations |

## Background photography

| Asset family | Recommended use | Copy-safe area |
|---|---|---|
| `coastal-road-hero` | Home hero, delivery CTA, page transition | Left side |
| `audi-rs7-motion-hero` | Primary home hero or campaign hero | Left side; atmospheric artwork only, never inventory |
| `walvis-bay-port` | Import from Japan, shipping and logistics | Right side |
| `import-documents-desk` | Finance, import paperwork, FAQ CTA | Upper-left and centre |
| `document-handover` | Finance/process/customer-support section | Left side |
| `key-handover` | Trust, delivery, after-sales section | Upper-right |

Each family includes:

- Full-resolution WebP
- `-1280.webp` for standard desktop/tablet delivery
- `-768.webp` for mobile and compact sections

The five process/background images contain no generated vehicles, visible faces, generated logos, or readable private information. The separate Audi RS7 motion hero was specifically approved as atmospheric artwork. Label and treat it as a visual hero, not as an available vehicle or exact unit.

## Interface accents

| File | Purpose |
|---|---|
| `assets/ui/gold-route-line.svg` | Quiet route/import divider or masked scroll line |
| `assets/ui/corner-frame.svg` | Small image-corner or CTA framing accent |
| `assets/ui/inspection-mark.svg` | Custom trust/inspection marker |

Use these sparingly. The real vehicle imagery and typography should remain dominant.

## Service icons

The `assets/icons/` directory contains custom current-colour SVG icons for finance, import, inspection, shipping, delivery, trade-in, registration, support, vehicle search, location, documentation, and verified mileage. These are project-native assets and should be preferred over generic thin-line icon libraries.
