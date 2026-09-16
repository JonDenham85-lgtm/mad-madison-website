# MAD Madison AI Website

Complete Next.js App Router project for MAD Madison AI - Unified AI system for automation, revenue, deployment, and owner-level control.

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `public/` - Static assets and PWA manifest
- `seo/` - SEO metadata configuration

## Pages

- `/` - Home
- `/pricing` - Pricing tiers
- `/install` - Installation options
- `/support` - Support contact information
- `/legal/privacy` - Privacy policy
- `/legal/terms` - Terms of service
- `/app` - Main application iframe

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## PNG Icons

For PWA support, add 192x192 and 512x512 PNG icons to `public/icons/`:
- `public/icons/icon-192.png`
- `public/icons/icon-512.png`

The manifest.json is already configured to reference these files.

## License

© 2026 MAD Madison AI — All Rights Reserved
