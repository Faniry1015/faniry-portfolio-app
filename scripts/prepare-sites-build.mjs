import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const exportDirectory = resolve(projectRoot, "out");
const sitesDirectory = resolve(projectRoot, "dist");
const clientDirectory = resolve(sitesDirectory, "client");
const serverDirectory = resolve(sitesDirectory, "server");

await rm(sitesDirectory, { recursive: true, force: true });
await mkdir(serverDirectory, { recursive: true });
await cp(exportDirectory, clientDirectory, { recursive: true });
await cp(
  resolve(projectRoot, "worker", "sites-static.js"),
  resolve(serverDirectory, "index.js"),
);

console.log("Sites deployment bundle prepared in dist/.");
