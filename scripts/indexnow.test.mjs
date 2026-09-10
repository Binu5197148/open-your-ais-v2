import test from 'node:test';
import assert from 'node:assert/strict';
import { selectUrls } from './indexnow.mjs';
const all = ['https://openyourais.com/', 'https://openyourais.com/about/'];
test('article changes include archive and retain removed URLs for notification', () => {
  assert.deepEqual(selectUrls(['src/content/blog/removed.md','src/content/blog/added.mdx'], all), [
    'https://openyourais.com/blog/removed/', 'https://openyourais.com/', 'https://openyourais.com/blog/', 'https://openyourais.com/blog/added/'
  ]);
});
test('global changes notify the current sitemap', () => {
  assert.deepEqual(selectUrls(['src/layouts/BlogPost.astro'], all), all);
});
test('documentation-only commits do not resubmit pages', () => {
  assert.deepEqual(selectUrls(['CLAUDE.md', 'scripts/indexnow.mjs'], all), []);
});

test('global edits do not lose removed article notifications', () => {
  assert.ok(selectUrls(['src/layouts/BlogPost.astro','src/content/blog/removed.md'], all).includes('https://openyourais.com/blog/removed/'));
});
