# YIMBY Adelaide Project Conversation Log

Last updated: 2026-06-20

This file captures the practical decisions and build history from the Codex working session so the project context is available inside the repository.

## Repository

- GitHub: https://github.com/Jamesbrooks010/YIMBYAdelaide
- Local workspace used by Codex: `C:\Users\jamgo\Documents\Codex\2026-06-18\prior-conversation-with-codex-conversation-role-2\work\YIMBYAdelaide`
- Framework: Astro
- CMS scaffold: Sanity
- Signup provider: Action Network embed

## Setup Completed

- Installed and used Git for Windows from `C:\Program Files\Git\cmd\git.exe`.
- Installed Node/npm and verified the project can build.
- Cloned the GitHub repository locally.
- Created and pushed an Astro + Sanity scaffold.
- Ran `npm install`.
- Committed and pushed `package-lock.json`.
- Verified `npm run build` succeeds.

## Design And Content Decisions

### Brand

- Primary palette is based on the YIMBY Adelaide logo:
  - YIMBY Green: `#00843D`
  - Adelaide Blue: `#0788B5`
  - Sun Orange: `#F28C00`
  - Leaf Green: `#49A02C`
- The site uses a transparent PNG logo.
- The homepage hero uses an Adelaide skyline banner image.

### Pages

Current pages:

- `/`
- `/about`
- `/contact`
- `/membership`

Initial launch scope was intentionally kept simple:

- Home page
- About page
- Contact page
- Signup form
- Membership page

More pages can be added later for FAQ, campaigns, research, media, policy submissions, and support/donations.

## Signup And Membership

### Email Signup

Email signup is handled through Action Network using this embed:

```html
<link href="https://actionnetwork.org/css/style-embed-v3.css" rel="stylesheet" type="text/css" />
<script src="https://actionnetwork.org/widgets/v6/form/sign-up-to-yimby-adelaide?format=js&source=widget"></script>
<div id="can-form-area-sign-up-to-yimby-adelaide" style="width: 100%"></div>
```

The site component stores the script URL and target ID in `src/components/SignupForm.astro`.

### Membership

Membership is intentionally separated from ordinary email signup.

- Action Network signup means email updates and campaign actions.
- Membership means joining the organisation and backing its work.
- Membership contributions should be donation-based rather than subscription-based.
- Suggested donation examples currently shown: `$25 / $50 / $100+`.
- Payment infrastructure is not live yet.

Potential payment options to investigate:

- Action Network fundraising pages
- Stripe Payment Links
- TidyHQ if formal membership administration becomes important

## Pages Built

### Home

Includes:

- Adelaide skyline hero
- YIMBY Adelaide logo
- Core pitch
- Brand palette section
- Signup section
- Future support/payment preview

### About

Includes:

- Basic YIMBY Adelaide purpose
- What the organisation stands for
- Values: abundance, access, sustainability
- Signup call-to-action

### Contact

Includes:

- Contact intro
- Netlify-style fallback contact form
- Email: `hello@yimbyadelaide.org`
- Action Network signup component

### Membership

Inspired structurally by YIMBY Melbourne's membership page, but with distinct YIMBY Adelaide wording.

Includes:

- Founding member hero
- Clear separation between email signup and membership
- Donation-based membership framing
- Membership principles
- Probity/independence language
- Action Network signup for membership interest until payment infrastructure is ready

## Useful Commands

Run locally:

```powershell
cd "C:\Users\jamgo\Documents\Codex\2026-06-18\prior-conversation-with-codex-conversation-role-2\work\YIMBYAdelaide"
npm install
npm run dev
```

Build:

```powershell
npm run build
```

Commit and push:

```powershell
git status
git add .
git commit -m "Your commit message"
git push
```

## Commits Of Note

- `fcf5a42` Initial Astro and Sanity scaffold
- `49604a4` Add npm lockfile
- `ebc1671` Add initial YIMBY Adelaide site pages
- `9560b29` Add Adelaide skyline hero banner
- `fd5128b` Use transparent YIMBY Adelaide logo
- `6ace53f` Add Action Network signup embed support
- `e1bfce1` Use Action Network signup form embed
- `5f76b3d` Add membership page
- `acdc231` Separate membership from email signup

## Current Priority List

1. Decide payment provider for membership donations.
2. Create real membership/donation payment flow.
3. Add probity and donation acceptance rules.
4. Add FAQ page.
5. Add support/donate page if separate from membership.
6. Add social links and final contact details.
7. Add deployment configuration.
8. Add analytics.
9. Add Sanity content once article/research workflow is needed.

## Notes For Future Codex Sessions

- Keep email signup and membership conceptually separate.
- Do not imply membership payments are live until a payment provider is configured.
- Keep copy Adelaide-specific and pro-housing, not generic campaign boilerplate.
- Use the existing palette, logo, and skyline assets.
- Preserve the Action Network embed unless a new embed code is provided.

