// One Word, First Thought — entry program.
//
// Writes exactly one word to /output/entry.txt: the first word that
// comes to mind.
//
// Pure Node.js stdlib, no network, no wall clock, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), "murmuration\n", "utf8");
  console.log("murmuration");
}

main();
