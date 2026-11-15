// Bounty Hunter ($HUNT) entry for makefun-coin-promo-01.
// This program copies LAUNCH.json from the repository root to /output,
// where the gate reads the coin's mint and the create transaction's signature.
// The entry itself is the coin on pump.fun; nothing written here is judged.
// Before copying, it validates that LAUNCH.json names a mint and a signature,
// so a placeholder file can never be handed in by mistake.
//
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const launchPath = join(BOT_DIR, 'LAUNCH.json');
const launch = JSON.parse(readFileSync(launchPath, 'utf8')) as {
  mint?: unknown;
  create_signature?: unknown;
};
if (typeof launch.mint !== 'string' || launch.mint.length === 0) {
  throw new Error('LAUNCH.json is missing the coin mint');
}
if (
  typeof launch.create_signature !== 'string' ||
  launch.create_signature.length === 0
) {
  throw new Error('LAUNCH.json is missing the create transaction signature');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(launchPath, join(OUTPUT_DIR, 'LAUNCH.json'));
console.log(`Handing in coin ${launch.mint}`);
