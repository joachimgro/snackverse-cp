/// <reference path="./types.ts" />

const SERVED_PAGES = new Set(["/", "/gift", "/subscribe"]);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    const searchParams = url.searchParams;
    if (
      searchParams.has("wc-ajax") ||
      searchParams.has("wc-api") ||
      searchParams.has("page_id")
    ) {
      return fetch(request);
    }

    // Serve these pages and shared static assets from our build
    const serveFromAssets =
      SERVED_PAGES.has(path) ||
      path.startsWith("/_next/") ||
      path.startsWith("/images/") ||
      path.startsWith("/fonts/");

    if (serveFromAssets) {
      return env.ASSETS.fetch(request);
    }

    return fetch(request);
    // Proxy everything else to WordPress origin
    // const originUrl = new URL(request.url);
    // originUrl.hostname = env.ORIGIN_HOST;
    // return fetch(originUrl.toString(), {
    //   method: request.method,
    //   headers: request.headers,
    //   body: request.body,
    // });
  },
};
