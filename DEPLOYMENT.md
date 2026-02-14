# Deploy to Cloudflare Pages

This project is configured for **static export** and can be deployed to Cloudflare Pages.

## Prerequisites

- Node.js 18+
- Git repository (e.g. GitHub) for the project

## Build locally

```bash
npm install
npm run build
```

The static site is generated in the **`out`** directory.

---

## Option A: Cloudflare Dashboard (Git integration)

1. Push your code to **GitHub** (or GitLab / Bitbucket).

2. In the [Cloudflare dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.

3. Select your repository and choose **Begin setup**.

4. Use these **Build configuration** settings:

   | Setting            | Value              |
   |--------------------|--------------------|
   | **Framework preset** | Next.js (Static HTML Export) |
   | **Production branch** | `main` (or your default branch) |
   | **Build command**    | `npm run build` or `npx next build` |
   | **Build output directory** | `out` |

5. Click **Save and Deploy**. Cloudflare will build and deploy your site and give you a `*.pages.dev` URL.

6. Future pushes to the production branch will trigger automatic deployments.

---

## Option B: Deploy from CLI (Wrangler)

1. Install Wrangler (if needed):

   ```bash
   npm install -g wrangler
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Deploy the `out` folder to Cloudflare Pages:

   ```bash
   wrangler pages deploy out --project-name=snackverse-cp
   ```

   (Use the same project name as in `wrangler.jsonc` if you already created the project in the dashboard.)

4. Log in when prompted (`wrangler login`) if you haven’t already.

---

## Notes

- **Static export**: The app uses `output: 'export'` in `next.config.ts`, so there are no server-side rewrites at runtime. The `public/_redirects` file is used to redirect `/public/fonts/*` to `/fonts/*` on Cloudflare.
- **Environment variables**: If you need env vars (e.g. for a future API), set them in the Cloudflare Pages project settings (Settings → Environment variables).
