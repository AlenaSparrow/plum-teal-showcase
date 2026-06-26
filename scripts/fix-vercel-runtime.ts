import { readFileSync, writeFileSync } from "fs";

const path = ".vercel/output/functions/__server.func/.vc-config.json";
const config = JSON.parse(readFileSync(path, "utf8"));
config.runtime = "nodejs20.x";
config.supportsResponseStreaming = false;
writeFileSync(path, JSON.stringify(config, null, 2));
console.log("Patched .vc-config.json:", config);
