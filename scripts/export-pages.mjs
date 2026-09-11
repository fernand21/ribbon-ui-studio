import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "pages-dist");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "dist", "client"), output, { recursive: true });

// vinext places generated assets inside the configured basePath directory.
// GitHub Pages already mounts this artifact at /ribbon-ui-studio, so merge
// that directory into the artifact root to avoid duplicating the base path.
const nestedBasePath = path.join(output, "ribbon-ui-studio");
await cp(nestedBasePath, output, { recursive: true, force: true });
await rm(nestedBasePath, { recursive: true, force: true });

const workerUrl = pathToFileURL(path.join(root, "dist", "server", "index.js"));
workerUrl.searchParams.set("pages", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const siteBaseUrl = "https://fernand21.github.io/ribbon-ui-studio";
const workerEnv = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};
const workerCtx = { waitUntil() {}, passThroughOnException() {} };

async function renderPage(route, destination) {
  const response = await worker.fetch(
    new Request(`${siteBaseUrl}${route}`, { headers: { accept: "text/html" } }),
    workerEnv,
    workerCtx,
  );

  if (!response.ok) {
    throw new Error(`Static render failed for ${route}: ${response.status}`);
  }

  const target = path.join(output, destination);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, await response.text(), "utf8");
}

// Render every application route that must work as a real GitHub Pages URL.
// In particular, /docs/ must come from app/docs rather than an old static
// public/docs page, so it shares the homepage theme and multilingual UI.
await renderPage("/", "index.html");
await renderPage("/docs/", "docs/index.html");

await writeFile(path.join(output, ".nojekyll"), "", "utf8");
console.log(output);
