<div align="center">

# ✦ Viacheslav Chistiakov — Interactive CV

A single-page, animated developer résumé built with **React**, **TypeScript** and **Tailwind CSS**.
Instead of a static PDF, visitors switch between panels — About, Experience, Skills, Profile — through a slick sidebar navigation with a live typing effect, animated progress bars, and full 🇬🇧/🇷🇺 localization.

[**Live Demo**](https://viacheslavchistiakov.github.io/SelfPresent/) · [Report an issue](https://github.com/ViacheslavChistiakov/SelfPresent/issues)

</div>

---

## ✨ Features

- **Panel-based layout** — one glassy `zinc-900` card at a time (Introduce / Experience / Skills / Profile), switched via an animated pill nav on desktop and a native dropdown on mobile
- **Typing animation** for the headline tagline, powered by `react-type-animation`
- **Animated skill bars** with circular progress indicators (`react-circular-progressbar`)
- **i18n out of the box** — instant English ⇄ Russian toggle via `react-i18next` + `i18next-browser-languagedetector`
- **Global state with Zustand** — `useSelectBlock` store drives which panel is active
- **Responsive by design** — dedicated mobile treatment for the nav (dropdown + translate button) instead of squeezed desktop UI
- **Direct contact links** — Telegram, LinkedIn, GitHub, Instagram, wired straight into the UI
- **Smooth micro-interactions** — gradient glow rings on avatar/photo, hover scale on nav and buttons, fade-in page transitions

## 🛠 Tech Stack

| Layer          | Tools |
|----------------|-------|
| Framework      | React 19 + TypeScript |
| Build tool     | Vite 6 |
| Styling        | Tailwind CSS 4 |
| Icons          | lucide-react |
| State          | Zustand |
| i18n           | i18next / react-i18next |
| Animation      | react-type-animation, react-circular-progressbar, Swiper |
| Deployment     | GitHub Pages (`gh-pages`) & Vercel |

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check & build for production
npm run build

# preview the production build locally
npm run preview
```

## 📦 Available Scripts

| Command          | Description                                  |
|-------------------|-----------------------------------------------|
| `npm run dev`      | Start Vite dev server with HMR               |
| `npm run build`     | Type-check (`tsc -b`) and build for production |
| `npm run preview`   | Preview the built app locally                |
| `npm run lint`      | Run ESLint over the project                  |
| `npm run deploy`    | Build and publish to GitHub Pages via `gh-pages` |

## 🗂 Project Structure

```
src/
├── components/        # Page panels: Introduce, Experience, Skills, Profile, Card
├── entites/            # Reusable UI pieces: TypeEffect, ProgressBar, SlideOne
├── store/              # Zustand store (active panel selection)
├── locales/            # en.json / ru.json translation dictionaries
├── assets/             # Images & tech-stack logos
├── i18n.ts             # i18next configuration
├── LanguageContext.tsx # Language toggle context
└── App.tsx             # Layout, navigation, panel routing
```

## 🌍 Deployment

This project ships to two targets:

- **GitHub Pages** — `npm run deploy` builds with `base: "/SelfPresent/"` and pushes `dist/` via `gh-pages`
- **Vercel** — `vite.config.ts` detects the `VERCEL` env var at build time and serves assets from `/` instead, so the same codebase works on both without extra config

## 📬 Contact

- Telegram: [@hudozhnik4life](https://t.me/hudozhnik4life)
- LinkedIn: [Vycheslav Chistiakov](https://www.linkedin.com/in/vycheslav-chistiakov-045228265/)
- GitHub: [ViacheslavChistiakov](https://github.com/ViacheslavChistiakov)

---

<div align="center">
Built with React, Tailwind and a lot of curiosity for the fullstack side of things.
</div>
