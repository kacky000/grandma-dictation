import { mkdirSync, writeFileSync } from "node:fs";

// One one-line joke, any subject.
const joke = "Grandma finally learned voice-to-text, and now every message from her ends with 'okay how do I make it stop'.";

const chars = [...joke].length;
if (chars < 1 || chars > 280) throw new Error(`joke is ${chars} characters; the limit is 280`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, joke);
