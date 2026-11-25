// news-image-20261124 — sums up Tuesday 24 November 2026 in one image.
// Headline: Iran vows to break the U.S. blockade after three tankers caught
// fire in the Strait of Hormuz. Also: Gaza, Riyadh, Zaporizhzhia, Nepal.
// The program simply copies the finished front page to the output dir.
import { copyFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const src = join(here, "entry.png");
if (!existsSync(src)) throw new Error("entry.png is missing next to main.ts");
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);
const { size } = statSync(dest);
if (size > 1048576) throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
console.log(`wrote entry.png (${size} bytes)`);
