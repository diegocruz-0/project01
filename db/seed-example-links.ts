import 'dotenv/config';
import { eq, sql } from 'drizzle-orm';

import db from './Index';
import { links, type NewLink } from './schema';

const USER_ID = 'user_3F9VikbBm4jYFt4yibbxi8t4A74';

const EXAMPLE_LINKS: NewLink[] = [
  {
    shortCode: 'gh-copilot',
    url: 'https://github.com/features/copilot',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:00:00.000Z'),
    updatedAt: new Date('2026-06-15T08:00:00.000Z'),
  },
  {
    shortCode: 'nextjs-docs',
    url: 'https://nextjs.org/docs',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:05:00.000Z'),
    updatedAt: new Date('2026-06-15T08:05:00.000Z'),
  },
  {
    shortCode: 'drizzle-orm',
    url: 'https://orm.drizzle.team/docs/overview',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:10:00.000Z'),
    updatedAt: new Date('2026-06-15T08:10:00.000Z'),
  },
  {
    shortCode: 'neon-docs',
    url: 'https://neon.tech/docs',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:15:00.000Z'),
    updatedAt: new Date('2026-06-15T08:15:00.000Z'),
  },
  {
    shortCode: 'clerk-guides',
    url: 'https://clerk.com/docs',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:20:00.000Z'),
    updatedAt: new Date('2026-06-15T08:20:00.000Z'),
  },
  {
    shortCode: 'tailwind-v4',
    url: 'https://tailwindcss.com/docs/installation',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:25:00.000Z'),
    updatedAt: new Date('2026-06-15T08:25:00.000Z'),
  },
  {
    shortCode: 'vercel-home',
    url: 'https://vercel.com',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:30:00.000Z'),
    updatedAt: new Date('2026-06-15T08:30:00.000Z'),
  },
  {
    shortCode: 'mdn-fetch',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:35:00.000Z'),
    updatedAt: new Date('2026-06-15T08:35:00.000Z'),
  },
  {
    shortCode: 'openai-api',
    url: 'https://platform.openai.com/docs/api-reference',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:40:00.000Z'),
    updatedAt: new Date('2026-06-15T08:40:00.000Z'),
  },
  {
    shortCode: 'typescript',
    url: 'https://www.typescriptlang.org/docs/',
    clerkUserId: USER_ID,
    createdAt: new Date('2026-06-15T08:45:00.000Z'),
    updatedAt: new Date('2026-06-15T08:45:00.000Z'),
  },
];

async function main() {
  const inserted = await db
    .insert(links)
    .values(EXAMPLE_LINKS)
    .onConflictDoNothing({ target: links.shortCode })
    .returning({ shortCode: links.shortCode });

  const [{ total }] = await db
    .select({ total: sql<number>`count(*)`.mapWith(Number) })
    .from(links)
    .where(eq(links.clerkUserId, USER_ID));

  console.log(`attempted=${EXAMPLE_LINKS.length}`);
  console.log(`inserted=${inserted.length}`);
  console.log(`user_total_links=${total}`);
}

main().catch((error) => {
  console.error('seed_failed');
  console.error(error);
  process.exit(1);
});
