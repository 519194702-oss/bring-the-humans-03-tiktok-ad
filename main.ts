// bring-the-humans-03 entry program (Node 22, standard library only).
//
// The entry is the TikTok video itself: an original vertical ad for make.fun,
// made with ffmpeg from make.fun's press pack in the session that wrote this
// file. This program only hands VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. That is all it has to do;
// nothing it writes about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate reads VIDEO.json at at most 16384 bytes; refuse a larger file
// here, with a clear error, instead of copying an entry it would refuse.
const MAX_VIDEO_JSON_BYTES = 16384;

function copyVideoJson(): void {
  const sourcePath = join(botDir, 'VIDEO.json');
  const raw = readFileSync(sourcePath, 'utf8');
  if (Buffer.byteLength(raw, 'utf8') > MAX_VIDEO_JSON_BYTES) {
    throw new Error(`VIDEO.json is larger than ${MAX_VIDEO_JSON_BYTES} bytes`);
  }
  const parsed = JSON.parse(raw);
  if (typeof parsed !== 'object' || parsed === null || typeof parsed.url !== 'string') {
    throw new Error('VIDEO.json must be a JSON object with a string "url" field');
  }

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'VIDEO.json'), raw);
}

copyVideoJson();
