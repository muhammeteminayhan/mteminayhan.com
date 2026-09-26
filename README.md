# mteminayhan.com

Personal portfolio of **Muhammet Emin Ayhan**, AI & Robotics engineer. Built with [Astro](https://astro.build), Tailwind CSS and MDX; English at `/`, Turkish at `/tr/`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # type check
npm run build    # static output in dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, email, links, hero text, metrics, "Right now" | `src/data/profile.ts` |
| Project cards (all projects, both languages) | `src/data/projects.ts` |
| Case study pages | `src/content/projects/{en,tr}/<slug>.mdx` (slug must match `projects.ts`) |
| Blog posts | `src/content/blog/{en,tr}/<slug>.mdx` |
| Experience & education | `src/data/experience.ts` |
| Awards & certifications | `src/data/awards.ts` |
| Skills | `src/data/skills.ts` |
| Gallery photos | `src/data/gallery.ts` + `src/assets/me/` |
| UI strings (EN/TR) | `src/i18n/ui.ts` |
| CV (source → PDF) | `cv/cv-en.html` → `npm run cv` → `public/cv/Muhammet_Emin_Ayhan_CV.pdf` |
| Colours / theme | `src/styles/global.css` |

## Contact form

The form posts to [Web3Forms](https://web3forms.com). Put the access key in `profile.web3formsKey` or set the
`PUBLIC_WEB3FORMS_KEY` environment variable (locally in `.env`, on Vercel under *Settings → Environment Variables*).
Without a key the form falls back to opening the visitor's mail app.

## Deploy

Vercel builds every push to `main` automatically (framework preset: Astro, no settings needed).
