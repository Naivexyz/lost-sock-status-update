// Funniest Lost Sock Status Update — make.fun entry
// Writes one status update (<=120 chars) in the voice of a lost sock
// to /output/entry.txt (mode 0644).
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const ENTRY =
  "Update: the dryer didn't eat me. I left. I live in the garden now, and the gnome respects me more than you ever did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
chmodSync("/output/entry.txt", 0o644);
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
