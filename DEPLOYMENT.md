# Deploy to Cloudflare Workers

This project is deployed as a **Cloudflare Worker with static assets**. The Worker serves `/`, `/gift`, and `/subscribe` from the Next.js static export, and proxies all other requests to the WordPress origin server.

## Prerequisites

- Node.js 18+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (`npm install -g wrangler`)
- Cloudflare account with Workers enabled

## Build & Deploy

```bash
npm install
npm run build          # produces static site in out/
npx wrangler deploy    # deploys Worker + static assets
```

Log in first if needed: `wrangler login`

## Configuration

### `wrangler.jsonc`

| Field | Purpose |
|---|---|
| `main` | Worker entry point (`worker/index.ts`) |
| `assets.directory` | Static files from Next.js export (`out/`) |
| `vars.ORIGIN_HOST` | Hostname of the WordPress origin server |

### Origin hostname (`ORIGIN_HOST`)

Set this to the hostname or IP of your WordPress server. **Important**: it must NOT route back through this Worker, or you will get an infinite loop. Options:

- Use the server's **IP address** directly (e.g. `123.45.67.89`)
- Create a **grey-cloud** (DNS-only, not proxied) record like `origin.snackverse.com` pointing to the server IP

You can override `ORIGIN_HOST` per-environment in the Cloudflare dashboard under **Workers & Pages → your worker → Settings → Variables**.

## Routing logic

The Worker (`worker/index.ts`) handles requests as follows:

| Request path | Action |
|---|---|
| `/`, `/gift`, `/subscribe` | Served from static assets |
| `/_next/*`, `/fonts/*` | Served from static assets (shared resources) |
| Everything else | Proxied to `ORIGIN_HOST` (WordPress) |

## Adding new pages

To serve an additional page from the Worker instead of proxying to WordPress:

1. Create the page in `src/app/` as usual
2. Add the path to the `SERVED_PAGES` set in `worker/index.ts`
3. Rebuild and redeploy
