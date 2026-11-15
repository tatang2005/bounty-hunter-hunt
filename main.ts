// Bounty Hunter ($HUNT) entry for makefun-coin-promo-01.
// This program copies LAUNCH.json from the repository root to /output,
// where the gate reads the coin's mint and the create transaction's signature.
// The entry itself is the coin on pump.fun; nothing written here is judged.
//
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
