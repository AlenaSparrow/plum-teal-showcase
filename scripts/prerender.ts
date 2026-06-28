import { spawn } from "child_process";
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const ROUTES = [
  "/",
  "/work",
  "/work/smart-alerts",
  "/work/research",
  "/work/forecasting",
  "/work/uwork",
  "/about",
  "/contact",
  "/articles",
  "/articles/part-1-why-im-documenting",
  "/articles/part-2-from-first-draft",
  "/articles/part-3-getting-it-live",
  "/articles/part-4-what-i-learned",
];

const PORT = 3999;

// Start the production server
const server = spawn("bun", [".vercel/output/functions/__server.func/index.mjs"], {
  env: { ...process.env, PORT: String(PORT) },
  stdio: ["ignore", "pipe", "pipe"],
});

server.stderr?.on("data", (d: Buffer) => process.stderr.write(d));

// Wait for the server to be ready
await new Promise<void>((resolve, reject) => {
  const timeout = setTimeout(() => reject(new Error("Server start timeout")), 15000);
  server.stdout?.on("data", (data: Buffer) => {
    if (data.toString().includes("localhost")) {
      clearTimeout(timeout);
      resolve();
    }
  });
  server.on("error", reject);
});

// Small extra delay to ensure server is ready
await new Promise((r) => setTimeout(r, 500));

console.log("[prerender] Server ready, rendering routes...");

for (const route of ROUTES) {
  try {
    const res = await fetch(`http://localhost:${PORT}${route}`);
    if (!res.ok) {
      console.warn(`[prerender] ${route} → ${res.status}, skipping`);
      continue;
    }
    const html = await res.text();

    const filePath = route === "/" ? "index.html" : `${route.replace(/^\//, "")}/index.html`;
    const outPath = join(".vercel/output/static", filePath);
    mkdirSync(join(".vercel/output/static", route === "/" ? "" : route.replace(/^\//, "")), { recursive: true });
    writeFileSync(outPath, html, "utf8");
    console.log(`[prerender] ${route} → ${outPath} (${(html.length / 1024).toFixed(1)}KB)`);
  } catch (e) {
    console.warn(`[prerender] ${route} failed:`, e);
  }
}

server.kill();
console.log("[prerender] Done.");
