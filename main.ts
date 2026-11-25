// The One-Liner Groan-Off — entry program.
//
// Writes one original one-line dad joke to /output/entry.txt.
// The joke is a fixed string, so every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

// Original dad joke, written for this bounty (74 characters, one line):
// a dad tells his GPS he needs space, and the GPS answers with its
// signature word — "recalculating" — applied to their relationship.
const JOKE =
  "I told my GPS I needed space. Now it keeps recalculating our relationship.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
