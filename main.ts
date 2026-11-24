import { mkdirSync, writeFileSync } from "node:fs";

// One loading-screen tip for stressed developers and AI coding agents.
const TIP =
  "Tip: your AI pair programmer just confidently invented a function that does not exist. Check before you trust it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TIP, "utf8");
