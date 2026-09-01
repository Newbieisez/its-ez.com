# Erez Haimowicz Portfolio

Static portfolio site for Erez Haimowicz, hosted through GitHub Pages.

## Canva gallery slots

The responsive portfolio gallery uses three 1200 × 760 image slots. Export the final Canva designs as SVG and replace the matching file without changing `index.html`:

- `assets/canva-4-stage-framework-placeholder.svg`
- `assets/canva-8-week-accelerator-placeholder.svg`
- `assets/canva-kpi-metrics-placeholder.svg`

The KPI values are live HTML layered over the third image so recruiters and search engines can read them. Update the values directly in the `kpi-overlay` block in `index.html`.

## Executive resume gate

The resume CTAs collect a valid email through FormSubmit before downloading `Erez-Haimowicz-Executive-Resume.pdf`. FormSubmit sends a one-time activation message to `ErezHaimowicz@gmail.com`; submit the form once after deployment and approve that message to activate delivery.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
