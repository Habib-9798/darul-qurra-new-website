<div align="center">
  <img width="1200" height="475" alt="Darul Qurra Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Darul Qurra Website

A modern, high-performance Islamic educational website built with **Next.js 14 (App Router)** and **TypeScript**, focused on Quranic learning, programs, and community engagement.

Designed and developed by **Habibullah**.

---

## Live Website

(After deployment, add your Vercel link here)

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom design system
- **Fonts:** Inter (UI) + Playfair Display (headings) via next/font
- **Images:** Next.js Image component with AVIF/WebP optimization
- **Deployment:** Vercel (recommended)

---

## Performance Optimizations

This project has been carefully optimized for fast loading across all devices — mobile, tablet, laptop, and desktop.

- **Image optimization** — All images served in AVIF/WebP format with responsive sizing
- **Lazy loading** — Below-fold sections load on scroll, not on initial page load
- **Caching** — Static assets cached for 1 year; homepage served with CDN-level `s-maxage` caching
- **Font preloading** — Google Fonts preconnected and preloaded to eliminate flash
- **GPU-composited animations** — All animations use only `opacity` and `transform` properties
- **No layout reflow** — `box-shadow`, `width`, and `filter` animations replaced with compositor-safe alternatives
- **`will-change` isolation** — Animated elements promoted to their own GPU layers
- **`contain: layout style`** — Heavy sections isolated to prevent repaint cascade
- **`background-attachment: fixed` removed** — Replaced with fixed pseudo-element to restore GPU compositing
- **Code splitting** — Each page section is dynamically imported for smaller initial JS bundle

---

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## Project Structure

```
darul-quran-ui-refresh-v2/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Homepage (lazy-loaded sections)
│   ├── layout.tsx              # Root layout with fonts and metadata
│   ├── globals.css             # Global style imports
│   ├── about/                  # About page
│   ├── admissions/             # Admissions page
│   ├── contact/                # Contact page
│   ├── courses/                # Courses listing and detail pages
│   ├── donate/                 # Donation page
│   ├── events/                 # Events page
│   ├── faculty/                # Faculty page
│   ├── faqs/                   # FAQs page
│   ├── gallery/                # Gallery page
│   └── thank-you/              # Post-form thank you page
│
├── src/
│   ├── components/
│   │   ├── home/               # Homepage section components
│   │   ├── layout/             # Header, Footer, TopBar
│   │   └── ui/                 # Shared UI components (Reveal, AnimatedCounter, etc.)
│   ├── config/
│   │   └── site.ts             # Site-wide configuration
│   ├── data/
│   │   ├── mockData.ts         # Static content (programs, faculty, testimonials)
│   │   ├── models.ts           # TypeScript interfaces
│   │   └── navigation.ts       # Navigation link definitions
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   └── styles/
│       ├── base.css            # Base element styles
│       ├── components.css      # Reusable component classes
│       ├── keyframes.css       # Animation keyframes (GPU-optimized)
│       ├── reduced-motion.css  # Accessibility: respects prefers-reduced-motion
│       ├── theme.css           # Design tokens (colors, fonts)
│       └── utilities.css       # Utility classes
│
├── public/
│   └── images/                 # Static image assets
│
├── next.config.mjs             # Next.js config with caching and image optimization
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript configuration
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, programs, faculty, testimonials |
| `/about` | Institute history and mission |
| `/admissions` | Admission process and requirements |
| `/courses` | Full course catalog with detail pages |
| `/faculty` | Faculty profiles |
| `/events` | Upcoming events and announcements |
| `/gallery` | Photo gallery |
| `/donate` | Donation information |
| `/contact` | Contact form and location map |
| `/faqs` | Frequently asked questions |

---

## Accessibility

- Respects `prefers-reduced-motion` — all animations are paused for users who prefer reduced motion
- Semantic HTML structure throughout
- Proper `alt` text on all images
- Keyboard-navigable interactive elements

---

## Developer

Built with dedication by **Habibullah** for Darul Qurra Peshawar — an institution serving the community since 1969.