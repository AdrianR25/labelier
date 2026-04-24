# Labelier

A free, privacy-first web application for efficiently labeling images for machine learning training datasets.

## Overview

Labelier is a lightweight, browser-based image annotation tool designed to streamline the process of manually labeling large volumes of images for AI training. With an intuitive interface, keyboard shortcuts, and zero data transmission, Labelier puts your data security and workflow efficiency first.

All processing happens locally in your browser—no server uploads, no data collection, no compromises.

## Features

- **100% Free** — No paywalls, no subscriptions, no limitations
- **Privacy-Focused** — Runs entirely in your browser; your data never leaves your device
- **Keyboard Shortcuts** — Hotkeys and quality-of-life features for rapid labeling workflows
- **Export Capabilities** — Save labeled data as a text file with key-value pairs (image name → label)
- **Cross-Platform** — Works on any modern web browser supporting the File System Access API

## Architecture

Labelier uses a monorepo structure with two distinct deployable components:

```
User → Landing Page (Astro) → /app → Angular Application
         ↓
      Marketing & Feature Info
         ↓
      "Start Labeling" Button
         ↓
      Angular App (Embedded)
```

### Application Components

**Landing Page** (Astro static site)
- Marketing homepage with feature descriptions
- Single entry point for users
- Links to the embedded annotation application

**Labeling Application** (Angular SPA)
- Interactive image annotation interface
- Runs entirely in browser
- Deployed as embedded app at `/app` route

### Technology Stack

| Layer | Technology |
|-------|-----------|
| **Landing Page** | Astro 6, Bootstrap 5 |
| **Labeling App** | Angular 21, RxJS, Bootstrap 5 |
| **Styling & Icons** | Bootstrap 5, Bootstrap Icons |
| **Local Storage** | IndexedDB (idb-keyval) |
| **Browser APIs** | File System Access API |
| **Build & Dev** | TypeScript, Vitest |

## Installation & Development

### Prerequisites

- Node.js 20.19 or higher
- npm 11.6.2 or higher

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd labelier
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

### Development

#### Running the Application

```bash
# Start Angular development server
cd app
npm start
```

The app will be available at `http://localhost:4200`

#### Running the Landing Page

```bash
# Start Astro development server
cd landing
npm run dev
```

The landing page will be available at `http://localhost:3000`

### Building

#### Build Everything

```bash
npm run build
```

This script:
1. Builds the Angular application
2. Copies the build output to the landing page's public directory
3. Builds the static landing page

#### Build Individually

```bash
# Build Angular app only
npm run build:angular

# Build landing page only
npm run build:astro
```

#### Preview Production Build

```bash
npm run preview
```

## Deployment

The build process generates a single, unified deployment package:

1. **Build Angular app** → Compiled SPA (`app/dist/labelier/browser/`)
2. **Copy to Landing** → Embeds compiled app at `landing/public/app/`
3. **Build Landing** → Static HTML with embedded app (`landing/dist/`)

**Result**: Single deployable folder (`landing/dist/`) containing:
- Static landing page (`/`)
- Embedded Angular app (`/app`)

Deploy to any static host: Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.

## Browser Support

Labelier requires modern browser features, specifically:
- [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
- IndexedDB support
- ES2020+ JavaScript support

**Supported browsers:**
- Chrome/Chromium 86+
- Edge 86+
- Opera 72+
- Safari 15+ (with limitations)

## License

This project is licensed under the [GNU General Public License v3.0](./LICENSE). See the LICENSE file for details.

## Contact & Support

For issues, feature requests, or general inquiries:

- **Email**: [adrian@adrianr.dev](mailto:adrian@adrianr.dev)
- **Repository**: [GitHub](https://github.com/adrianr25/labelier)
