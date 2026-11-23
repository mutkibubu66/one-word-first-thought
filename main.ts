// One Word, First Thought — entry program.
//
// Writes exactly one word to /output/entry.txt: the first word that
// comes to mind.
//
// Pure Node.js stdlib, no network, no wall clock, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// ---------------------------------------------------------------------------
// The word.
//
// The first word that came to mind: a murmuration — thousands of starlings
// wheeling as one dark ribbon across the evening sky. One word, but it
// carries a whole scene: surprising (a word most people rarely say),
// vivid (you can see the flock turn), and a little witty (a crowd that
// moves like a single mind, with no leader at all). The word is a named
// constant so the choice is deliberate and easy to audit, not a magic
// string.
// ---------------------------------------------------------------------------
const WORD = "murmuration";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
  console.log(WORD);
}

main();
