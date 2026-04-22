# 🤖 AI Handoff Prompt — cybdev_portfolio

Use this document to give any AI assistant full context about this project so it can continue development without missing any details.

---

## 📌 Project Overview

| Property | Value |
|---|---|
| **Project Name** | cybdev_portfolio |
| **Owner** | Amit Saini |
| **Type** | Personal Developer Portfolio — Single Page Application |
| **GitHub Repo** | https://github.com/Amitsaini-tech/cybdev_portfolio |
| **Active Branch** | `develop` |
| **Local Path** | `c:\react\cybdev_portfolio` |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | **React 19** + **TypeScript** |
| Build Tool | **Vite 8** |
| Styling | **TailwindCSS v4** (imported via `@import "tailwindcss"` in `index.css`) |
| Icons | **lucide-react** |
| 3D (unused section) | `@react-three/fiber`, `@react-three/drei`, `three` |
| Package Manager | npm (also has `yarn.lock`) |
| Dev Command | `npm run dev` |

> ⚠️ **TailwindCSS v4 note:** gradient utilities use `bg-linear-to-r` / `bg-linear-to-t` / `bg-linear-to-br`, NOT the v3 `bg-gradient-to-r`. Always use `bg-linear-to-*` in this project.

---

## 🎨 Design System

### Color Palette
- **Background:** `#0a0a0a` (near black), `#0d1117` (dark blue-black)
- **Accent Primary:** `cyan-400` / `cyan-500` (text, borders, glows)
- **Accent Secondary:** `blue-600` (gradient partner)
- **Text:** `white`, `gray-300`, `gray-400`

### Glassmorphism Card (`.glass-card`)
Defined in `src/index.css`:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.glass-card:hover {
  background: rgba(255, 255, 255, 0.05);
}
```
Used on every card, panel, and overlay. Always pair with `border border-white/10`.

### Typography
- Font: **Inter** (system fallback stack)
- Headings: large bold with gradient `from-white to-cyan-400 bg-clip-text text-transparent`
- Monospace labels above headings: `text-cyan-400 font-mono text-sm` (e.g. `$ cd projects/`)

### Shared Patterns
- Section wrapper: `<section id="X" className="min-h-screen py-20 relative">`
- Content wrapper: `<div className="container mx-auto px-6"><div className="max-w-6xl mx-auto">`
- Hover border: `hover:border-cyan-500/50 transition-all duration-300`
- Hover scale: `hover:scale-105` or `hover:scale-110`
- Gradient button: `bg-linear-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50`

---

## 📁 File Structure

```
c:\react\cybdev_portfolio\
├── src\
│   ├── main.tsx              # React root entry
│   ├── App.tsx               # Root layout — renders all sections
│   ├── index.css             # TailwindCSS v4 import + custom utilities
│   ├── App.css               # Legacy CSS (not actively used)
│   ├── Navigation.tsx        # Fixed top navbar with scroll detection & mobile menu
│   ├── Hero.tsx              # Landing section with particle background + CTA buttons
│   ├── ParticleBackground.tsx # Canvas particle animation used in Hero
│   ├── About.tsx             # About Me section with 4 feature cards
│   ├── Skills.tsx            # Skills grid (Frontend / Backend / DevOps / Design)
│   ├── Projects.tsx          # Projects grid — 4 project cards with image/tech/links
│   ├── Contact.tsx           # Contact section with email form
│   ├── Hero3D.tsx            # Unused Three.js 3D component (not rendered)
│   └── assets\
│       ├── hero.png
│       ├── react.svg
│       └── vite.svg
├── public\
│   ├── favicon.svg
│   └── icons.svg
├── package.json
├── vite.config.ts
├── tsconfig.app.json
└── index.html
```

---

## 🧩 Component Details

### `App.tsx`
- Renders a fixed ambient background (two blurred blobs: cyan top-left, blue bottom-right)
- Then renders all sections in order: Navigation → Hero → About → Skills → Projects → Contact → Footer
- **Currently simple** — no routing library, no state management

### `Navigation.tsx`
- Fixed at top, `z-50`
- Logo: `<AS />` (Amit Saini initials) in gradient text
- Links: Home, About, Skills, Projects, Contact — smooth scroll on click
- Becomes glassmorphic (`glass-card` + border) after scrolling 50px
- Mobile: hamburger menu toggles a vertical nav drawer

### `Hero.tsx`
- Full-screen section with `ParticleBackground` canvas
- Name/role: "Full-Stack Developer & MCA Candidate"
- Tagline: "Seeking a challenging role..."
- CTA buttons: Download Resume (`/resume.pdf`) + Contact Me (`mailto:sainiamit3464@gmail.com`)
- Animated scroll indicator (bouncing mouse icon) at the bottom

### `About.tsx`
- 4 cards in a 2-col grid with icons (Code2, Zap, Palette, Database)
- Topics: Clean Code, Performance, Design Focus, Full Stack

### `Skills.tsx`
- 4 skill category cards in a 2-col grid
- Categories: Frontend, Backend, Tools & DevOps, Design & UI
- Skills render as pill badges with cyan border

### `Projects.tsx` ← **Key component for the feature below**
- 4 project cards in a 2-col grid
- Each card: image (h-48, zoom on hover), title, description, tech stack pills, GitHub + Live Demo links

**Current project data (4 projects):**

| # | Title | Tech | Image URL |
|---|---|---|---|
| 1 | AI-Powered Analytics Platform | React, TypeScript, Python, TensorFlow, PostgreSQL | pexels 7688336 |
| 2 | E-Commerce Platform | Next.js, Node.js, MongoDB, Stripe, AWS | pexels 230544 |
| 3 | Social Media Management Tool | Vue.js, GraphQL, Redis, Docker, Microservices | pexels 267350 |
| 4 | 3D Product Configurator | Three.js, React, WebGL, Blender, Node.js | pexels 1714208 |

All `github` and `demo` links are currently `"#"` (placeholder).

### `Contact.tsx`
- Email + Location info cards
- Form fields: Name, Email, Subject, Message (textarea), Send button
- Form is UI-only — no backend submission wired up

---

## 🚧 Pending Feature: Project Detail Page

The user wants: **clicking a project card opens a full detail page** for that project.

### What the detail page should show:
- Large hero banner image (full width, darkened)
- Project title & short description overlaid on the banner
- **"Back to Projects"** button (top-left of banner)
- **Project Overview** — longer description paragraph
- **Project Goals** — bulleted list of 3–4 goals
- **Key Features** — grid of feature chips/cards
- **Tech Stack** sidebar — pill badges
- **Action Links** sidebar — "Live Demo" (primary gradient button) + "View Source Code" (ghost button)
- Thumbnail image in sidebar

### Data shape needed (extend each project object):

```typescript
interface Project {
  title: string;
  description: string;         // short (already exists)
  tech: string[];              // already exists
  image: string;               // already exists
  github: string;              // already exists
  demo: string;                // already exists
  // NEW fields:
  category?: string;           // e.g. "Data & AI", "Full-Stack", "SaaS", "WebGL / 3D"
  longDescription?: string;    // 3–5 sentence detailed overview
  goals?: string[];            // 3–4 project goals
  features?: string[];         // 4–6 key feature names
}
```

### Implementation approach (no router needed):
1. **`src/ProjectDetail.tsx`** — new component, receives `project: Project` and `onBack: () => void` props
2. **`src/Projects.tsx`** — add `onProjectClick: (project: Project) => void` prop; make cards clickable
3. **`src/App.tsx`** — add `useState<Project | null>(null)` → if set, render `<ProjectDetail>` instead of the main page; on back, scroll to `#projects`

### Design rules for the detail page:
- Inherit the same dark theme (`#0a0a0a` background, cyan accents)
- Use `.glass-card` for all panels/sidebars
- Back button: monospace font, `ArrowLeft` icon from lucide-react, glass style
- Goals list: each item in a glass card with a `CheckCircle2` icon
- Features: 2-col responsive grid of cards with a cyan dot indicator
- Layout: `lg:grid-cols-3` — main content takes 2 cols, sidebar takes 1 col
- Use `bg-linear-to-t` for the hero image gradient overlay (TailwindCSS v4)

---

## 🌿 Git Workflow

| Branch | Purpose |
|---|---|
| `main` | Stable/production — do not push directly |
| `develop` | Active development — all new work goes here |

**Push command (token required):**
```powershell
git remote set-url origin https://TOKEN@github.com/Amitsaini-tech/cybdev_portfolio.git
git push -u origin develop
```

> ⚠️ PowerShell does not support `&&`. Run git commands as separate statements.

---

## 📧 Owner Info

| Field | Value |
|---|---|
| Name | Amit Saini |
| Email | sainiamit3464@gmail.com |
| GitHub | https://github.com/Amitsaini-tech |

---

## ✅ What's Already Done

- [x] Full portfolio SPA with 5 sections (Hero, About, Skills, Projects, Contact)
- [x] Dark cyber theme with glassmorphism cards
- [x] TailwindCSS v4 setup (Vite plugin)
- [x] Particle animation background in Hero
- [x] Responsive navigation with mobile hamburger
- [x] Git repo initialized, `main` + `develop` branches pushed to GitHub
- [x] `ProjectDetail.tsx` component was created initially (may have been deleted by user — re-create if missing)

## 🔲 What Still Needs To Be Done

- [ ] Re-wire `Projects.tsx` to accept `onProjectClick` prop and make cards clickable
- [ ] Re-wire `App.tsx` to manage `selectedProject` state and render `ProjectDetail` when set
- [ ] Enrich project data with `category`, `longDescription`, `goals`, `features` fields
- [ ] Make the Contact form functional (e.g. EmailJS or Formspree)
- [ ] Replace `#` GitHub/demo links with real URLs
- [ ] Add real resume PDF to `public/resume.pdf`
