# YIMBY Adelaide

Astro website scaffold with a co-located Sanity Studio.

## Requirements

- Node.js 20 or newer
- npm

## Local Setup

```powershell
npm install
cp .env.example .env
npm run dev
```

The Astro site runs at `http://localhost:4321`.

To run Sanity Studio:

```powershell
npm run studio
```

## Sanity Configuration

Create a Sanity project, then set these values in `.env`:

```text
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

The site works with fallback content until the Sanity environment variables are set.

