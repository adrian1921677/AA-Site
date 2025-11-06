# Portfolio - Adrian Adullahu

Ein professionelles, minimalistisches Portfolio für Full Stack Developer, erstellt mit Next.js 15, TypeScript, Tailwind CSS v4 und Framer Motion.

## 🎨 Design-Konzept

- **Minimalistisch & Ruhig**: Viel Whitespace, klare Typografie, verständlich für Nicht-Entwickler
- **Dark Theme**: Sehr dunkles Grundthema (#0a0a0a) mit Neonviolett/Cyan-Akzenten
- **Sanfte Animationen**: Funktionale, fließende Bewegungen mit Framer Motion
- **Modular & Skalierbar**: Klare Komponentenstruktur für einfache Erweiterung

## 📁 Projektstruktur

```
├── app/
│   ├── about/          # Über mich Seite
│   ├── contact/        # Kontakt Seite
│   ├── projects/       # Projekte Seite
│   ├── globals.css     # Design-System & globale Styles
│   ├── layout.tsx      # Root Layout (Navigation, Footer)
│   └── page.tsx        # Home/Hero Seite
│
├── components/
│   ├── ui/             # Wiederverwendbare UI-Komponenten
│   │   ├── ProjectCard.tsx
│   │   └── ProjectModal.tsx
│   │
│   ├── sections/       # Hauptbereiche der Seiten
│   │   ├── Hero.tsx
│   │   ├── ProjectsGrid.tsx
│   │   ├── TechStack.tsx
│   │   └── ContactForm.tsx
│   │
│   └── shared/         # Gemeinsame Komponenten
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       ├── CustomCursor.tsx
│       ├── BootIntro.tsx
│       └── SocialLinks.tsx
│
└── store/              # Zustand State Management
    └── terminalStore.ts
```

## 🎯 Design-System

### Farben
- **Background**: `#0a0a0a` (sehr dunkel)
- **Accent**: `#a855f7` (Neonviolett)
- **Accent Secondary**: `#06b6d4` (Cyan)
- **Text**: `#ffffff` / `#a3a3a3` / `#737373`

### Typografie
- **Display**: Space Grotesk (Überschriften)
- **Body**: Inter (Fließtext)
- **Mono**: JetBrains Mono (Code, Captions)

### Utility-Klassen
- `.card` / `.card-hover` - Card-Komponenten
- `.btn-primary` / `.btn-secondary` - Buttons
- `.input` - Formular-Inputs
- `.section` / `.section-content` - Seiten-Layout
- `.heading-1` / `.heading-2` / `.heading-3` - Typografie-Scale
- `.body` / `.body-large` / `.caption` - Text-Styles

## 🚀 Features

- ✅ Responsive Design (Mobile-First)
- ✅ Sanfte Scroll-Animationen
- ✅ Interaktiver Custom Cursor
- ✅ Boot-Intro Animation
- ✅ Projekt-Filter mit Animationen
- ✅ Modal-Dialoge für Projekt-Details
- ✅ Kontakt-Formular mit Fokus-Feedback
- ✅ Terminal-Easter-Egg

## 📦 Installation

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Sprache**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animationen**: Framer Motion
- **UI Components**: Radix UI
- **State Management**: Zustand

## 📝 Seiten

### Home (`/`)
- Hero-Section mit Name und Rolle
- Subtile Licht-Animationen
- CTA-Buttons zu Projekten/Kontakt

### Projekte (`/projects`)
- Grid-Layout mit Projekt-Cards
- Filter nach Technologien
- Modal mit detaillierten Projekt-Infos
- Verständliche Beschreibungen ("Was ist das?" / "Wofür ist es gut?")

### Über mich (`/about`)
- Persönliche Beschreibung
- Tech-Stack Präsentation
- Ruhige, klare Struktur

### Kontakt (`/contact`)
- Modernes Kontakt-Formular
- Fokus-Animationen
- Social Links

## 🎨 Design-Prinzipien

1. **Bewegung folgt Funktion**: Jede Animation hat einen Zweck
2. **Subtilität**: Sanfte Effekte, keine Reizüberflutung
3. **Klarheit**: Verständlich für alle Zielgruppen
4. **Konsistenz**: Einheitliches Design-System durchgehend

## 📄 Lizenz

Privat - Adrian Adullahu
