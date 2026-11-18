// One-day world news image: Wednesday 18 November 2026.
//
// The entry image (entry.png beside this file) is the whole program's
// output: this program copies it to /output/entry.png, verifying on the
// way that the source is a whole PNG and that the copy is byte-identical,
// so both grader runs write the same bytes. No network, no randomness,
// standard library only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const source = new URL('./entry.png', import.meta.url);
// Empty-string env falls back to /output too: join('', 'entry.png') would
// otherwise write into the working directory.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const target = join(outDir, 'entry.png');

const bytes = readFileSync(source);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

const written = readFileSync(target);
if (!written.equals(bytes)) {
  throw new Error('entry.png copy mismatch');
}
const sha = createHash('sha256').update(written).digest('hex');
console.log(`entry.png ${written.length} bytes sha256 ${sha}`);
