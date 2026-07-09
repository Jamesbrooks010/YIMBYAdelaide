# Custom Domain Hosting Notes

Current recommendation: keep the site on GitHub Pages and attach the purchased domain `yimbyadelaide.com`.

The repository already deploys the Astro site through GitHub Actions in `.github/workflows/deploy-pages.yml`, so GitHub Pages is the lowest-friction hosting option for launch. It avoids adding a second hosting platform while still giving the site a custom domain and HTTPS.

## GitHub Pages Setup

1. In the GitHub repository, open **Settings > Pages**.
2. Set the custom domain to:

   ```text
   yimbyadelaide.com
   ```

3. After DNS is configured and GitHub provisions the certificate, enable **Enforce HTTPS**.

GitHub's docs note that custom domains and HTTPS enforcement are supported by GitHub Pages:

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## DNS Records

At the domain registrar or DNS provider for `yimbyadelaide.com`, create these records.

For the apex/root domain:

```text
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

For the `www` subdomain:

```text
Type: CNAME
Name: www
Value: Jamesbrooks010.github.io
```

DNS propagation can take time. Once records resolve, GitHub Pages should issue the HTTPS certificate.

## Astro Config Change Needed

The site is currently configured for GitHub's project URL, `https://jamesbrooks010.github.io/YIMBYAdelaide`. Before making `yimbyadelaide.com` the production domain, update `astro.config.mjs` so the build uses the root domain path:

```js
export default defineConfig({
  site: 'https://yimbyadelaide.com',
  base: '/'
})
```

This prevents broken internal links and asset paths when the custom domain serves the site from `/` rather than `/YIMBYAdelaide/`.

## Suggested Launch Checklist

1. Update `astro.config.mjs` for `https://yimbyadelaide.com` and `base: '/'`.
2. Commit and push the config change.
3. Configure `yimbyadelaide.com` in GitHub Pages settings.
4. Add the DNS records above.
5. Wait for DNS and certificate provisioning.
6. Enable **Enforce HTTPS**.
7. Smoke test:
   - `https://yimbyadelaide.com`
   - `https://www.yimbyadelaide.com`
   - `/about/`
   - `/membership/`
   - `/member-signup/`
   - `/contact/`
