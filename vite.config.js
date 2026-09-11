import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// White-label assets: if a folder `public-<client>` exists (e.g. public-acme),
// that client's build ships it INSTEAD of the default `public/` — so each
// client can have its own pictures, logo and favicon without touching the
// code or the course content. The client comes from VITE_CLIENT, exactly like
// the branding in src/config/clients.js.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const clientKey = (env.VITE_CLIENT || "hitech").toLowerCase();
  const clientPublic = resolve(process.cwd(), `public-${clientKey}`);
  return {
    plugins: [react(), tailwindcss()],
    publicDir: existsSync(clientPublic) ? clientPublic : "public",
  };
});
