// Ship It Friday — one-line git commit message entry.
// Writes the entry text to /output/entry.txt, byte-identical on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "fix: Friday 4:59pm deploy, wrapped all of prod in try/except, so this one is mathematically incapable of failing";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters.
if (ENTRY.length < 1 || ENTRY.length > 159 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-159 gate`);
}

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
