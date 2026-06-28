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
PUBLIC_ACTION_NETWORK_MEMBERSHIP_SCRIPT_URL=https://actionnetwork.org/widgets/v6/form/become-a-member-of-yimby-adelaide?format=js&source=widget
PUBLIC_ACTION_NETWORK_MEMBERSHIP_TARGET_ID=can-form-area-become-a-member-of-yimby-adelaide
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

The membership page uses a separate Action Network form:

```text
PUBLIC_ACTION_NETWORK_MEMBERSHIP_SCRIPT_URL=https://actionnetwork.org/widgets/v6/form/become-a-member-of-yimby-adelaide?format=js&source=widget
PUBLIC_ACTION_NETWORK_MEMBERSHIP_TARGET_ID=can-form-area-become-a-member-of-yimby-adelaide
```

## Membership Donation Links

Membership contributions are donation-based. Once payment pages exist, set these values to the relevant Action Network Fundraising, Stripe, or other payment links:

```text
PUBLIC_MEMBERSHIP_DONATION_25_URL=
PUBLIC_MEMBERSHIP_DONATION_50_URL=
PUBLIC_MEMBERSHIP_DONATION_100_URL=
PUBLIC_MEMBERSHIP_DONATION_CUSTOM_URL=
```

When these are empty, the membership page shows the contribution options as "Coming soon" and routes people to membership interest signup.

## Planning map tiles

The About page reads the minimum-lot parcel layer from `public/maps/adelaide-min-lot.pmtiles`.
At the metropolitan overview it uses a small transparent raster for a fast first render, then fades
to the detailed vectors as the reader zooms in.
The PMTiles archive contains only parcel geometry and an eight-value display category; it does not
publish the source GeoPackage or its other parcel fields.

To rebuild the archive on Windows with QGIS installed:

```powershell
.\scripts\build-parcel-tiles.ps1 -Source 'C:\path\to\sa-parcels.gpkg'
```

The map uses MapLibre GL JS because it can render the single-file PMTiles vector archive directly.
This avoids shipping one large GeoJSON or thousands of individual tile files, and leaves room for
additional planning layers to use the same pattern later.
