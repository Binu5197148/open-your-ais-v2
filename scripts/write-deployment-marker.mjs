import fs from 'node:fs/promises';
// Only production builds need a public readiness marker. No credentials are exposed.
if (process.env.VERCEL_ENV === 'production') {
  const sha = process.env.VERCEL_GIT_COMMIT_SHA;
  if (!sha || !/^[a-f0-9]{40}$/.test(sha)) throw Error('Missing production commit SHA');
  await fs.writeFile('.vercel/output/static/indexnow-deployment.txt', sha + '\n');
}
