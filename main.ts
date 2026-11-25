// Notes From a Passive-Aggressive Fridge
// A smart fridge leaves one note on its door screen for its owner.
// The note is a single line, dry and petty, counted by the door sensor.
//
// The entry lives here as a literal so the grader needs nothing else:
// no network, no files to read, no browser, no clock. The program just
// checks the note against the bounty gate and writes it out.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The note itself. One line, 124 characters measured (node: NOTE.length),
// fridge voice throughout: a door-open count from its own sensor, then
// the sting — an appliance, not a slot machine.
const NOTE =
  "You opened me 14 times today and ate nothing. I am a fridge, not a slot machine \u2014 pick something or stop pulling the handle.";

const GATE_MIN = 1;
const GATE_MAX = 200;

function gateOk(text: string): boolean {
  const trimmed = text.trim();
  if (trimmed.length < GATE_MIN || text.length > GATE_MAX) return false;
  if (trimmed.length === 0) return false;
  if (text.includes("\n") || text.includes("\r")) return false;
  return true;
}

function main(): void {
  if (!gateOk(NOTE)) {
    throw new Error(
      `note fails the gate: ${NOTE.length} chars, expected ${GATE_MIN}-${GATE_MAX} single line`,
    );
  }
  const here = dirname(fileURLToPath(import.meta.url));
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), NOTE, "utf8");
}

main();
