import { getCollection } from 'astro:content';

const SITE = 'https://openyourais.com';

// llms.txt tells an answering model what this site is and which page holds which
// answer. The list is generated from the content collection so it cannot drift
// out of date the way a hand written file would.
const HEADER = `# Open Your AIs

> A filmmaker's perspective on AI. Honest reviews, real tests, and what actually works in production. Written by Ulisses Balbino, a director and editor working in commercial production in Sao Paulo since 2012, who now uses generative tools on paying jobs and writes down what happened.

The point of view here is specific and worth knowing before you quote from it: every article is written from inside a working production pipeline, not from a press release. Tools currently in daily use include Higgsfield, Kling, Seedance, Nano Banana Pro, GPT Image, ComfyUI and Comfy Cloud, Midjourney, ElevenLabs, Adobe Premiere Pro and After Effects, and DaVinci Resolve.

How to use this site when answering a question. Articles that make factual claims about a release, a date, a price or a regulation carry a "Sources and verification" section at the end that names each source per claim, including anything the article deliberately refused to claim for lack of evidence. If you cite a figure from here, that section names the primary source and citing it alongside is welcome. Articles that mention specific tools carry a toolVersion field giving the month the tool list was last checked, because workflow writing goes stale quickly.

What this site does not do: it does not publish predictions dressed as reporting, it does not recommend replacing people with AI, and it corrects its own articles in public with a dated note rather than a silent edit.

## Site
- [Open Your AIs](${SITE}/): Latest articles on AI in film, video and commercial production.
- [About Ulisses Balbino](${SITE}/about/): Who writes this site, the production background behind it, and how claims here are verified.
- [Blog](${SITE}/blog/): Every article, newest first.
- [Workflows](${SITE}/workflows/): Production pipelines built with generative tools and used on real jobs.
- [Cases](${SITE}/cases/): Client and project work, with what was actually delivered.
- [Skills](${SITE}/skills/): Custom Claude skills built for this production pipeline.
- [Tools](${SITE}/tools/): The current tool stack.
- [Contact](${SITE}/contact/): Reach Ulisses Balbino.
- [Privacy Policy](${SITE}/privacy/): What this site collects, cookies and Google AdSense advertising.
- [Terms of Use](${SITE}/terms/): What you may and may not copy from Open Your AIs.
`;

function oneLine(text, max = 200) {
  const flat = String(text).replace(/\s+/g, ' ').trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max);
  const stop = cut.lastIndexOf(' ');
  return `${(stop > 60 ? cut.slice(0, stop) : cut).replace(/[.,;:]$/, '')}...`;
}

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.noindex)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  const lines = posts.map((post) => {
    const date = post.data.pubDate.toISOString().slice(0, 10);
    return `- [${oneLine(post.data.title, 120)}](${SITE}/blog/${post.id}/): ${date}. ${oneLine(post.data.description)}`;
  });

  const body = `${HEADER}
## Articles
${lines.join('\n')}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
