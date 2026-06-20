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
PUBLIC_ACTION_NETWORK_SCRIPT_URL=https://actionnetwork.org/widgets/v6/form/sign-up-to-yimby-adelaide?format=js&source=widget
PUBLIC_ACTION_NETWORK_TARGET_ID=can-form-area-sign-up-to-yimby-adelaide
PUBLIC_MEMBERSHIP_DONATION_25_URL=
PUBLIC_MEMBERSHIP_DONATION_50_URL=
PUBLIC_MEMBERSHIP_DONATION_100_URL=
PUBLIC_MEMBERSHIP_DONATION_CUSTOM_URL=
```

The site works with fallback content until the Sanity environment variables are set.

## Action Network Signup

The signup component renders the Action Network embedded widget for the YIMBY Adelaide signup form.

If the Action Network form changes, replace these values with the new embed script URL and target ID from Action Network:

```text
PUBLIC_ACTION_NETWORK_SCRIPT_URL=https://actionnetwork.org/widgets/v6/form/sign-up-to-yimby-adelaide?format=js&source=widget
PUBLIC_ACTION_NETWORK_TARGET_ID=can-form-area-sign-up-to-yimby-adelaide
```

The full embed snippet from Action Network includes a stylesheet, a script, and a target `div`. The site component already includes the stylesheet and target `div`, so only the script URL and target ID need to be configured.

## Membership Donation Links

Membership contributions are donation-based. Once payment pages exist, set these values to the relevant Action Network Fundraising, Stripe, or other payment links:

```text
PUBLIC_MEMBERSHIP_DONATION_25_URL=
PUBLIC_MEMBERSHIP_DONATION_50_URL=
PUBLIC_MEMBERSHIP_DONATION_100_URL=
PUBLIC_MEMBERSHIP_DONATION_CUSTOM_URL=
```

When these are empty, the membership page shows the contribution options as "Coming soon" and routes people to membership interest signup.
