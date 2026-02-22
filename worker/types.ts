/// <reference types="@cloudflare/workers-types" />

interface Env {
  /** Static assets binding – serves files from the `out/` directory */
  ASSETS: Fetcher;
  /** Hostname of the WordPress origin server (IP or grey-cloud DNS record) */
  ORIGIN_HOST: string;
}
