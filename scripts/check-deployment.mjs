import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const input = process.argv[2];
if (!input) {
  console.error("Usage: npm run check:deployment -- https://your-project.vercel.app");
  process.exit(1);
}
const base = new URL(input);
assert(["http:", "https:"].includes(base.protocol), "Provide an HTTP(S) URL.");

async function get(path, options) {
  const response = await fetch(new URL(path, base), { ...options, signal: AbortSignal.timeout(30000) });
  assert(response.ok, `${path}: HTTP ${response.status}`);
  return response;
}

async function assets(directory, prefix = "") {
  const paths = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${prefix}/${entry.name}`;
    if (entry.isDirectory()) paths.push(...await assets(`${directory}/${entry.name}`, path));
    else if (/\.(svg|png|jpe?g|webp|ico|pdf|mp4|vtt)$/i.test(entry.name)) paths.push(path);
  }
  return paths;
}

try {
  const home = await get("/");
  const html = await home.text();
  assert(html.includes("Tae Hong (Richard) Kim"), "Portfolio identity is missing.");
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, "Expected one main heading.");
  for (const id of ["about", "experience", "projects", "contact"]) {
    assert(html.includes(`id="${id}"`), `Missing section: ${id}`);
  }
  for (const href of [
    "/documents/TResume.pdf", "https://github.com/th32kim",
    "https://www.linkedin.com/in/richard-kim-10ba1319b", "mailto:th32kim@uwaterloo.ca",
    "https://github.com/th32kim/WebsiteGenerator", "https://github.com/th32kim/AI-Agent-SearchEngine",
    "https://github.com/th32kim/RAG-AI-Chatbot", "https://github.com/th32kim/Eventbook",
  ]) assert(html.includes(`href="${href}"`), `Missing link: ${href}`);

  const publicAssets = await assets(fileURLToPath(new URL("../public", import.meta.url)));
  for (const path of publicAssets) {
    const isVideo = path.endsWith(".mp4");
    const response = await get(path, isVideo ? { headers: { Range: "bytes=0-1023" } } : undefined);
    const body = new Uint8Array(await response.arrayBuffer());
    assert(body.length > 0, `${path}: empty asset`);
    assert(!response.headers.get("content-type")?.includes("text/html"), `${path}: HTML returned instead of asset`);
    if (isVideo) {
      assert.equal(response.status, 206, `${path}: byte-range playback unavailable`);
      assert.equal(body.length, 1024, `${path}: unexpected byte-range length`);
    }
    if (path.endsWith(".pdf")) assert.equal(new TextDecoder().decode(body.slice(0, 5)), "%PDF-", "Invalid resume PDF");
  }
  for (const path of ["/icon.svg", "/apple-icon.png", "/opengraph-image", "/robots.txt", "/sitemap.xml"]) {
    const response = await get(path);
    await response.arrayBuffer();
  }
  // Verify the actual Next.js optimized-image route, not just the source file.
  const optimizedImage = await get("/_next/image?url=%2Fimages%2Frichard-kim.webp&w=640&q=75");
  assert(optimizedImage.headers.get("content-type")?.startsWith("image/"), "Image optimization failed");
  await optimizedImage.arrayBuffer();
  const notFound = await fetch(new URL("/__deployment_check_missing__", base));
  assert.equal(notFound.status, 404, "Missing routes should return 404");
  if (base.hostname.endsWith(".vercel.app")) assert(home.headers.get("x-vercel-id"), "Expected Vercel response headers");
  console.log(`PASS ${base.origin}: portfolio, navigation/contact/project links, ${publicAssets.length} local assets, resume PDF, MP4 ranges, optimized image, metadata routes, and 404 handling.`);
  console.log("This HTTP check does not replace browser playback/fullscreen or external-account verification.");
} catch (error) {
  console.error(`FAIL ${base.origin}: ${error.message}`);
  process.exitCode = 1;
}
