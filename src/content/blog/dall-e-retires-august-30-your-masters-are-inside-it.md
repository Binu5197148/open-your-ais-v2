---
id: "art-173"
title: "What You Lose When OpenAI Kills an AI Model"
description: "DALL-E is gone and the ChatGPT Images models named to replace it now have shutdown dates too. The dated list, and a six step archive rule from post."
pubDate: "2026-08-24"
updatedDate: "2026-11-20"
toolVersion: "2026-11"
category: "AI"
tags:
  - "DALL-E"
  - "OpenAI"
  - "Archive"
  - "Workflow"
  - "Post Production"
  - "Craft"
heroImage: "https://images.unsplash.com/photo-1603126004372-e63e3b53934b?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw1fHxmaWxtJTIwc2V0JTIwY2luZW1hdG9ncmFwaHl8ZW58MXwwfHx8MTc4NzYxMjM5M3ww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "6 min read"
---

<section class="article-note note-correction">
<h2>Update</h2>
<p>Updated Nov 20, 2026: this was written the week the DALL-E GPT left ChatGPT, and the opening is in that week's present tense. The state today, read on OpenAI's own deprecations page: all three models that were named as DALL-E's replacements now have an end date of their own. gpt-image-1 left the API on October 23, 2026. gpt-image-1-mini goes on December 1, 2026, eleven days from this update. gpt-image-2 goes on February 10, 2027. The current models are GPT Image 2.6 Sunburst and Flare, released November 4, 2026. The dated list is in a new section near the end, with a sidecar file you can copy. This is an analysis of published dates, not a test of any model.</p>
</section>

<!-- Correction 2026-08-30: the countdown line read "Six days from today", written on 24/08. Today is the shutdown date, so the relative countdown was replaced with "Today". No factual claim changed. -->
<p>On August 30, 2026, OpenAI switches off the DALL-E GPT inside ChatGPT. The instruction that came with it is one line long: download the images you want to keep, then use ChatGPT Images from now on. Today, a tool that made a very large share of the AI pictures on the internet stops answering.</p>

<p>The coverage is doing what coverage does. Save your stuff, here is the export button, here is a list of alternatives. All correct. All beside the point.</p>

<p>The point is that a company put a date on a door, and several million people are about to find out that the only copy of their work was on the other side of it.</p>

<h2>What the DALL-E retirement removes</h2>

<p>Set the argument aside and read the release honestly, because it is not a scandal.</p>

<p>What goes away is the DALL-E GPT, the dedicated image tool inside ChatGPT. What stays is ChatGPT Images, the newer built-in generator, running gpt-image-1 and gpt-image-1-mini at the time, which follows instructions better, handles text inside pictures better, and can edit an existing image rather than only make a new one. Custom GPTs that people built with image generation switched on keep working. Users got roughly thirty days of notice.</p>

<p>The developer side already happened and almost nobody noticed. The DALL-E 2 and DALL-E 3 model snapshots were removed from the API on May 12, 2026, with gpt-image-2, gpt-image-1 and gpt-image-1-mini named as the replacements. This month is the consumer half of a decision that was made a year ago.</p>

<p>I should say plainly that I have nothing in that folder. I never used DALL-E. Not once on a paying job. My still image work goes through Midjourney, and inside Higgsfield through GPT Image and Nano Banana Pro, which is where I need text to survive inside a frame and a character to survive across frames.</p>

<p>So I am not writing this as somebody about to lose something. I am writing it because the people who are about to lose something are, almost by definition, the people least likely to have a second copy.</p>

<h2>Why is a shutdown date good news?</h2>

<p>Here is my contrarian read, and it is not the one the panic invites.</p>

<p>Everybody is filing this under platform risk. Another reminder that the tools are rented. Fair enough. But a retirement announced a month ahead, with a written date and a written instruction to go and download your work, is the most honest thing a model company will do all year.</p>

<p>What should frighten a working person is the version with no date on it. The silent revision. The same prompt, the same settings, a different picture next month, no announcement, no changelog, no way to get the old behaviour back. That happens constantly and it never makes the news, because there is nothing to photograph. A shutdown at least has the decency to be visible.</p>

<p>I have argued this from the other direction before, when <a href="/blog/sora-api-shutdown-platform-dependency-filmmakers/">the Sora API got a sunset date</a>. The dependency is not the problem. The dependency is the deal. The problem is pretending you have not made it.</p>

<h2>The thing you lose is not the picture</h2>

<p>Be honest about the images for a second. Nobody is going to grieve a 2023 DALL-E render. They are dated in a way that is almost charming now, and any current model will beat them in ten seconds from a worse prompt.</p>

<p>What dies on August 30 is not the picture. It is the record.</p>

<p>The prompt that produced it. The eleven attempts before it that did not work, and why. The order you tried things in. The date. The version of the model that was live that week. That is provenance, and it is the only part of AI image work that cannot be regenerated, because it is a history rather than an output.</p>

<p>Post-production has known this forever. When a job is archived, you do not archive the finished film. You archive the project. The bins, the versions, the notes, the sources, the conform. The finished file answers exactly one question. The project answers all the others, including the one that always eventually gets asked, which is why did we do it that way.</p>

<p>I learned that hardest on stop-motion. I directed the Forno de Minas manifesto through WMcCann, built with Estudio Fue, and on that kind of job every frame is a decision made before the camera rolls and revision is close to impossible. When you cannot go back, the record of how you arrived becomes the actual asset. The deliverable is just the part the client sees.</p>

<p>Generative tools shipped with a chat log where the project file should be. A chat log is not an archive. It is a conversation stored in someone else's account, governed by someone else's roadmap, and now, in this case, ending on someone else's Sunday.</p>

<h2>The archive discipline, borrowed from post</h2>

<p>This is the usable part, and it takes minutes rather than an afternoon.</p>

<p><strong>The master leaves the tool the same day it is made.</strong> Full resolution, straight into the job folder. Not the Downloads folder, which is not a folder, it is a landfill.</p>

<p><strong>Write the prompt down next to the file.</strong> A plain text file with the same name. Prompt, model, model version, date, seed if the tool gives you one, and one line about what you were trying to get. That text file is smaller than a thumbnail and it is worth more than the image.</p>

<p><strong>Name it for a stranger.</strong> Date first, then job, then shot, then version. You are not naming it for yourself this week. You are naming it for whoever opens the drive in four years, and there is a decent chance that person is you with no memory of any of this.</p>

<p><strong>Two copies, two places, and one of them somewhere you do not work.</strong> A second cloud account inside the same workflow is not a backup, it is the same risk with a different logo.</p>

<p><strong>Sort by what is derivable.</strong> Anything you can reproduce from the prompt is a cache. Anything you cannot is a master. Most people have this exactly backwards and are lovingly backing up their caches.</p>

<p><strong>Once a quarter, try to rebuild one old image from your own notes.</strong> If you cannot, your record is incomplete and you have found out cheaply instead of expensively.</p>

<p><strong>Where to check instead of guessing.</strong> The page that answers this without rumour is <a href="https://platform.openai.com/docs/deprecations" target="_blank" rel="noopener">the OpenAI deprecations page</a>. It lists every model snapshot already pulled, the date it went, and the replacement named for each one, which is how the DALL-E 2 and DALL-E 3 API removals were published back in May. Keep it in a bookmark bar. It is where the next date will appear before anybody writes an article about it. The consumer side of these announcements lands in the ChatGPT release notes inside the OpenAI Help Center, which is worth checking on the day rather than trusting a summary, this one included.</p>

<p>Two things make this more urgent than it looks. The first is that provenance metadata is fragile in exactly the way people assume it is not, which I went through when <a href="/blog/ai-video-watermark-rules-what-your-export-deletes/">the watermark rules went live and the first export deleted them</a>. The second is that owning the weights is becoming a real option rather than a slogan, which is the genuinely important part of <a href="/blog/ltx-2-5-multi-shot-the-model-is-making-your-cut/">the LTX 2.5 release</a>. A model on your own disk cannot be retired by a blog post.</p>

<h2>Which OpenAI image models shut down next?</h2>

<p>I said above that I would rather have a date than a silent revision. Here are the dates, as OpenAI's deprecations page lists them on November 20, 2026.</p>

<table>
<thead>
<tr><th>Model</th><th>Leaves the API</th><th>Notice given</th><th>Replacement OpenAI names</th></tr>
</thead>
<tbody>
<tr><td>dall-e-2, dall-e-3</td><td>May 12, 2026 (gone)</td><td>Nov 14, 2025</td><td>gpt-image-2, gpt-image-1 or gpt-image-1-mini</td></tr>
<tr><td>gpt-image-1</td><td>Oct 23, 2026 (gone)</td><td>Apr 22, 2026</td><td>gpt-image-2.5 Sunburst or Flare</td></tr>
<tr><td>gpt-image-1-mini</td><td>Dec 1, 2026</td><td>Jun 2, 2026</td><td>gpt-image-2.6 Sunburst or Flare</td></tr>
<tr><td>gpt-image-1.5, chatgpt-image-latest</td><td>Dec 1, 2026</td><td>Jun 2, 2026</td><td>gpt-image-2.6 Sunburst or Flare</td></tr>
<tr><td>gpt-image-2</td><td>Feb 10, 2027</td><td>Nov 10, 2026</td><td>gpt-image-2.6 Sunburst or Flare</td></tr>
</tbody>
</table>

<p>Read the first row against the other four. In May, people who built on DALL-E were pointed at three models. One of the three is already gone, one goes in eleven days, and the third, whose own snapshot is dated April 21, 2026, got its notice ten days ago and will have lasted under ten months. The model that the page now recommends, GPT Image 2.6, is sixteen days old.</p>

<p>That is not a complaint. Every row has a notice date and a named replacement, which is the procedure I ask for in the next section. It is the reason the prompt alone is not a record. A prompt that reads "same as last time" means nothing when last time ran on a model that no longer answers. The model name and the date have to travel with the file.</p>

<p>This is the sidecar I would save next to every master. Plain text, same file name as the image:</p>

<pre><code>FILE:        2026-11-20_client_job_shot03_v02.png
MADE:        2026-11-20
TOOL:        where you ran it (ChatGPT, API, Higgsfield, Midjourney)
MODEL:       exact model name and version shown that day
MODEL ENDS:  shutdown date if one is published, and where you read it
PROMPT:      the full prompt, pasted, not summarized
REFERENCES:  file names of every image you fed in
SEED/PARAMS: seed, size, quality, anything the tool exposes
INTENT:      one line on what you were trying to get
REJECTED:    what you tried before this and why it failed
COPIES:      where copy one lives / where copy two lives</code></pre>

<p>The MODEL ENDS line is the one I added after reading that table. If the date is known the day you make the image, write it down the day you make the image.</p>

<h2>Ask for more of these, not fewer</h2>

<p>The reflex response to August 30 will be to demand permanence. Keep the old tool. Promise us it will always be there.</p>

<p>Nobody can promise that and nobody should pretend to. Software gets retired. It has always been retired. The reasonable thing to ask for is not permanence, it is procedure: notice measured in weeks, an export path that returns full resolution, and a date written in public. OpenAI did all three here, which is why this is a boring story and should stay one.</p>

<p>The unreasonable thing is to keep treating a chat window as a filing cabinet and then act surprised when the building it was in gets sold.</p>

<p>Your images were never in DALL-E. They were in an account, on a service, under terms you agreed to without reading, and that was always true of every tool any of us has ever rented, including the ones I use every day and will keep using tomorrow. That is not a betrayal. It is just the shape of the arrangement.</p>

<p>The part that belongs to you is the part you carried out of the building. It always was. August 30 is only the week somebody bothered to tell you.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Facts verified August 24, 2026 against two or more independent sources per claim.</p>
<ol>
<li>The official DALL-E GPT is retired from ChatGPT on August 30, 2026, and OpenAI advises users to download images they want to keep: Tom's Guide, "You have until August 30 to save your ChatGPT DALL-E images"; Windows Report, "OpenAI will retire the official DALL.E GPT on August 30"; Crypto Briefing, "OpenAI retires DALL-E image generation from ChatGPT, pushing users to newer models" (published August 3, 2026); TechJournal, "OpenAI Is Retiring DALL-E in ChatGPT: What to Do" (published August 24, 2026); and the OpenAI Help Center ChatGPT release notes.</li>
<li>Roughly thirty days of notice, replacement by ChatGPT Images running gpt-image-1 and gpt-image-1-mini, and user-created GPTs with image generation remaining functional: Crypto Briefing, corroborated on the replacement by TechJournal, which describes ChatGPT Images as a newer built-in generator with better instruction following, better text inside images, and editing of existing pictures.</li>
<li>DALL-E 2 and DALL-E 3 model snapshots were removed from the API on May 12, 2026, with gpt-image-2, gpt-image-1 and gpt-image-1-mini given as recommended replacements: OpenAI developer documentation, deprecations page.</li>
<li>No claim is made here about how many images any individual user has stored, about OpenAI's internal reasons for the consolidation, or about what any specific export path returns today, because none of that is published and export behaviour has to be checked per account. The comparison to silent model revisions is stated as an argument, not as a documented event.</li>
<li>Rechecked November 20, 2026 against the <a href="https://platform.openai.com/docs/deprecations" target="_blank" rel="noopener">OpenAI deprecations page</a> and the <a href="https://platform.openai.com/docs/changelog" target="_blank" rel="noopener">OpenAI API changelog</a>, both read the same day. The deprecations page lists gpt-image-1 as shut down October 23, 2026; gpt-image-1-mini, gpt-image-1.5 and chatgpt-image-latest for December 1, 2026; and gpt-image-2 (snapshot gpt-image-2-2026-04-21) for February 10, 2027 with notice dated November 10, 2026. The changelog lists GPT Image 2.6 Sunburst and Flare as released November 4. These are API dates. No claim is made about what ChatGPT keeps or removes from any account's image library, which OpenAI does not publish on these pages.</li>
</ol>
</section>
