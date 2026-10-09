# Deploy to Vercel

This is a standard Next.js App Router project. No database, backend service, API keys, or manually configured environment variables are required. Keep the default Next.js output; do not enable static export, since the site uses Next.js image optimization and generated sharing images.

## Current deployment

- Public site: https://richardkim.vercel.app
- Vercel project: https://vercel.com/richard-e586/personalwebsite
- GitHub repository: https://github.com/th32kim/PersonalWebsite (`main` is the default branch).
- The production deployment is Ready. An unauthenticated HTTP check passed for all 37 public media assets, resume PDF, MP4 byte ranges, optimized portrait, metadata, and routing. Canonical and social-sharing URLs use the real production hostname. Clean-browser playback/fullscreen checks passed at 320, 390, 768, and 1440px with no page errors.
- GitHub is connected to `th32kim/PersonalWebsite`, with production branch `main`. Successful pushes to `main` deploy automatically to the production URL.
- The initial deployment used the Vercel CLI. The requested `richardkim.vercel.app` address is now assigned to this project; no paid domain registration or hosting upgrade was needed.

## Push to GitHub

The project is connected to [th32kim/PersonalWebsite](https://github.com/th32kim/PersonalWebsite). From `C:\PersonalWebsite`, commit any remaining changes and push the production branch:

```powershell
git add .
git commit -m "Prepare portfolio for Vercel deployment"
git branch -M main
git push -u origin main
```

Git is already initialized and `origin` is configured. If there are no new changes, skip the commit command. If GitHub authentication is needed, run `gh auth login`. For a different new repository, create it empty on GitHub and set its URL with `git remote set-url origin YOUR_REPOSITORY_URL` before pushing. Set the repository default branch and Vercel production branch to `main`.

`.gitignore` excludes node_modules, build output, temporary audit/tool folders, local environment files, and Vercel account/project-link metadata. `.vercelignore` also excludes those files from CLI uploads (verified upload: approximately 19.4 MB). Commit `package-lock.json`, `src`, `public`, `scripts`, and the root configuration files. Every media file is below GitHub's 100 MB individual-file limit; MP4s are ordinary repository assets and do not require Git LFS. The CLI-created `.env.local` contains account/tooling data, is ignored, and is not required by the application.

## Import and deploy

For a fresh GitHub import, follow these steps. The existing project is already connected and deployed; do not import a second copy.

1. Sign in to https://vercel.com using GitHub.
2. Choose **Add New → Project**, authorize access to your new repository, and select **Import**.
3. Use these settings:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (auto-detected) |
| Root directory | Repository root (`./`) |
| Node.js version | 24.x (pinned in package.json) |
| Install command | `npm ci` |
| Build command | `npm run build` |
| Output directory | Leave the Next.js default; do not enter `out` |
| Environment variables | None required |
| Production branch | `main` |

4. Click **Deploy**. Wait until the deployment says **Ready** and open the assigned `https://...vercel.app` production URL.
5. Open the production URL in a signed-out/private browser window to confirm it is public, rather than an account-protected preview URL.

The automatic `VERCEL_PROJECT_PRODUCTION_URL` system variable supplies canonical/social URLs. If unavailable, the code falls back to `VERCEL_URL`; local development uses `http://localhost:3000`. Leave Vercel's system environment variables enabled. `NEXT_PUBLIC_SITE_URL` is an optional override only; do not set it to `richardkim.me` before that domain points to this project.

Official references: [GitHub integration](https://vercel.com/docs/git/vercel-for-github), [Node versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions), and [system variables](https://vercel.com/docs/environment-variables/system-environment-variables).

## Verify the public deployment

From the repository, run:

```powershell
npm run check:deployment -- https://YOUR_PROJECT.vercel.app
```

This requests the real URL and checks the portfolio response, section/link destinations, all local images/videos/captions/PDF assets, video byte ranges, optimized portrait, metadata endpoints, 404 behavior, and Vercel response headers. It fails if a deployment-protection sign-in page replaces the portfolio. It does not perform a new deployment.

Also check in desktop and mobile browsers: page navigation, resume opening, project previews, expanded demo playback/fullscreen, AI-Agent audio, and email behavior. Email uses `mailto:th32kim@uwaterloo.ca`; opening an email app requires an installed/configured mail handler, and the page provides a copy-address fallback. LinkedIn may reject automated link checkers even when the supplied profile URL is correct.

Do not describe the site as deployed or publicly verified until an actual Vercel deployment URL passes these checks. Local production testing alone does not establish that.

## Future updates

```powershell
git add .
git commit -m "Update portfolio"
git push origin main
```

Vercel's GitHub integration builds each push. A successful deployment from the configured production branch updates the stable production URL. Other branches and pull requests receive preview deployments. Build failures leave the last successful production deployment available.

## Add a custom domain later

1. Open the Vercel project → **Settings → Domains** and add `richardkim.me` (or your chosen domain).
2. At your domain registrar/DNS provider, add the exact A/CNAME/TXT records Vercel shows for your project. Use the dashboard's current values rather than copied IP addresses from another tutorial.
3. Add `www` too if desired and configure a redirect to the preferred hostname.
4. Wait for Vercel to confirm valid DNS configuration and HTTPS.
5. Redeploy so generated metadata, sitemap, and sharing URLs use the new production domain. Vercel selects the custom domain automatically; optionally set `NEXT_PUBLIC_SITE_URL=https://richardkim.me` in the Production environment to choose it explicitly, then redeploy.

See [Vercel's custom-domain instructions](https://vercel.com/docs/domains/working-with-domains/add-a-domain).
