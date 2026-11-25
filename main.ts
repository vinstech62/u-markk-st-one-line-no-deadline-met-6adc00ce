// One Line, No Deadline Met — make.fun entry (program/v1, node22).
// Writes exactly one line — a joke excuse for a missed deadline —
// to <output dir>/entry.txt, with no trailing newline. Stdlib only.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I didn't miss the deadline — it ghosted me first, and my mother raised me not to double-text.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, EXCUSE, { encoding: "utf8", mode: 0o644 });
  chmodSync(outPath, 0o644); // exact mode even under a restrictive umask
}

main();
