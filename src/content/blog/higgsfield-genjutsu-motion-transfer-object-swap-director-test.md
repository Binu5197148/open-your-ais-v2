---
id: "art-183"
title: "Higgsfield Genjutsu vs Lite: Which Should You Pick?"
description: "Higgsfield Genjutsu at 1080p now costs about $14.70 per clip. How to use it step by step, Genjutsu vs Lite, the new prices, and how to run it from Claude."
pubDate: "2026-09-08"
updatedDate: "2026-11-24"
toolVersion: "2026-11"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Video"
heroImage: "https://images.unsplash.com/photo-1490971688337-f2c79913ea7d?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxNHx8ZmlsbSUyMHNldCUyMGNpbmVtYXRvZ3JhcGh5fGVufDF8MHx8fDE3ODg3OTA5OTZ8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "9 min read"
featured: true
---

<p><strong>Update, November 24, 2026:</strong> the prices moved, and the 1080p tier is the one that moved most. Higgsfield's <a href="https://higgsfield.ai/blog/higgsfield-genjutsu" target="_blank" rel="noopener">Genjutsu guide</a>, with prices checked by Higgsfield on November 2, now lists a 15 second Motion Transfer at 45 credits at 480p, 105 at 720p and 300 at 1080p, about $2.21, $5.15 and $14.70. In September the 1080p clip was about $7.20. Object Swap now costs slightly more than Motion Transfer, and Lite is 96 credits at 720p and 192 at 1080p, so it is no longer "about a third" of the full model at 720p: it is about 9 percent cheaper there and about a third cheaper at 1080p. The guide also adds 20 ready made Styles inside Motion Transfer and says both Genjutsu and Lite run through the Higgsfield MCP connector, so you can drive them from Claude. The price sections and the steps below are rewritten for that, and there is a new section on running it from Claude. Still no paid job run on Genjutsu for this piece.</p>

<p><strong>Update, October 29, 2026:</strong> Higgsfield added <strong>Genjutsu Lite</strong> on October 20. It is faster, costs about a third of the full model on higgsfield.ai, takes up to 10 reference images instead of 30, renders at 720p or 1080p, and applies the change on its own instead of letting you pick Motion Transfer or Object Swap. Higgsfield also lists Lite on its API, MCP and CLI. The comparison and the "is it free" answer are in the two new sections below. The rest of the article is the September reading, with the October fixes kept.</p>

<p>Higgsfield Genjutsu shipped in the first week of September 2026, and the search curve for it went from nothing to a peak in three days. I run Higgsfield as my main hub, so this one landed on a tool I already have open. I spent the first day of it doing the boring thing: reading the pricing table and the spec sheet before generating anything.</p>

<p>Two things came out of that. The first is that Genjutsu does something genuinely different from the motion tools I already use. The second is that, at launch, its own pages did not agree with each other about what it accepts, and the price per clip is high enough that the difference matters before you start, not after.</p>

<p><strong>Scope:</strong> This is an analysis of Higgsfield's published documentation and pricing, with a proposed workflow adapted from existing practice. Genjutsu had not been used on a paid job before publication; this article does not report a production benchmark.</p>

<h2>What Genjutsu does to a shot</h2>

<p>It takes a video you already have and rebuilds part of it while holding the rest. There are two modes and they are opposite ends of the same idea.</p>

<p><strong>Motion Transfer</strong> keeps the motion, the camera and the timing, and rebuilds the scene from your references. The dolly move stays. The cut points stay. The person walking through frame is now a different person, in a different place, wearing something else.</p>

<p><strong>Object Swap</strong> does the inverse. It holds the original shot and changes one thing inside it: a character, a garment, a product, a location, an object. Everything you did not select survives untouched.</p>

<p>Both accept real footage and AI generated footage as the input. That second part is the one people are underselling. It means a clip you generated last month, that came out well but with the wrong product in it, is not dead.</p>

<h2>How do you use Higgsfield Genjutsu?</h2>

<p>This is the part worth copying, because the order matters more than the settings. The sequence below is the cheap-first habit I already use on expensive tiers like Seedance, applied to Genjutsu, and it is built to spend money once rather than four times.</p>

<ol>
<li><strong>Pick the driving video first, not the idea.</strong> Genjutsu inherits whatever the source does. A source with a lazy camera gives you a lazy result in a new costume. If the original move is not good, nothing downstream fixes it.</li>
<li><strong>Cut the source to the shortest version that still reads.</strong> You pay by duration. A move that works in six seconds should not be submitted at fifteen because the timeline happened to be that long.</li>
<li><strong>Decide the mode before you gather references.</strong> Motion Transfer wants references for a whole world: the cast, the location, the wardrobe. Object Swap wants references for one thing. Gathering forty images when you needed four is how a morning disappears.</li>
<li><strong>Run the first pass at the lowest resolution.</strong> This is the whole trick and I will come back to it below. You are buying a judgement about whether the shot works, and that judgement does not need 1080p.</li>
<li><strong>Only then go up.</strong> Re-run the approved version at the resolution you are delivering, or take the cheaper render into an upscale. Both are valid, and one is a lot less expensive.</li>
</ol>

<p>The tool is at <a href="https://higgsfield.ai/genjutsu" target="_blank" rel="noopener">higgsfield.ai/genjutsu</a>, and Higgsfield's own walkthrough of the two modes is on <a href="https://higgsfield.ai/blog/higgsfield-genjutsu" target="_blank" rel="noopener">their blog</a>. At launch the two pages gave different input limits. As of October 4, 2026 they match, and the blog post is still the one with the full spec table.</p>

<h2>Genjutsu vs. Genjutsu Lite: which one to run</h2>

<p>The two models are not a cheap version and an expensive version of the same thing. They answer different questions.</p>

<ul>
<li><strong>Genjutsu (full):</strong> you choose the mode, Motion Transfer or Object Swap. Source clip from 4 to 30 seconds, up to 30 reference images, output up to 1080p, 30+ presets and, in Motion Transfer, 20 ready made Styles or one from your own image.</li>
<li><strong>Genjutsu Lite:</strong> no mode choice, the model decides what to change. Same 4 to 30 second window, up to 10 reference images, 720p or 1080p only.</li>
</ul>

<p>The price of a 15 second clip, from Higgsfield's guide as checked on November 2, 2026, at $49 per 1,000 credits:</p>

<table>
<thead><tr><th>Model</th><th>480p</th><th>720p</th><th>1080p</th></tr></thead>
<tbody>
<tr><td>Motion Transfer</td><td>45 credits, about $2.21</td><td>105, about $5.15</td><td>300, about $14.70</td></tr>
<tr><td>Object Swap</td><td>48, about $2.35</td><td>112, about $5.49</td><td>320, about $15.68</td></tr>
<tr><td>Genjutsu Lite</td><td>not offered</td><td>96, about $4.70</td><td>192, about $9.41</td></tr>
</tbody>
</table>

<p>Higgsfield says the exact cost is on the Generate button and that your account may show a lower price, so treat the table as the ceiling, not the bill.</p>

<p>The practical split starts from the documented limits, and the rest is my recommendation, not a tested result. Lite was not run for this piece, so I cannot tell you where its consistency breaks. If the job needs more than ten reference images, or explicit control of the mode, the full model is the one that accepts that. Either way, judge consistency on the clips you get. If the job is a trend format, a quick recast for a social cut, or a test of whether the source clip is worth recasting at all, Lite is the cheaper way to get the answer.</p>

<p>Read the table before you assume Lite is the cheap test. At 720p it saves about 9 percent. The cheapest way to judge a shot is still the full model at 480p, at 45 credits. Lite earns its place at 1080p, where it costs 192 credits against 300, and on jobs where you do not need to pick the mode. So the cheap-first order is: judge the source at 480p with the full model, and only then decide whether the delivery runs on full 1080p or on Lite 1080p. One caution. Because Lite chooses what to change by itself, a Lite test tells you whether the motion survives, not whether a precise Object Swap will behave. Test the mode you will deliver with before you commit a budget to it.</p>

<h2>Is Higgsfield Genjutsu free?</h2>

<p>No. Neither model is listed as free. Both run on Higgsfield's credit system, and each generation shows its credit cost before you confirm it. The cheapest documented path is the full model at 480p, 45 credits or about $2.21 for fifteen seconds. Lite does not render at 480p, so it is not the cheapest entry, whatever the "faster and cheaper" label suggests. Free credits from promotions or plan trials can cover a few tests, but those offers rotate, so check the <a href="https://higgsfield.ai/pricing" target="_blank" rel="noopener">pricing page</a> on the day rather than trusting a video that promised free Genjutsu last month.</p>

<p>If what you want is a free way to learn the idea, the closest thing is to practise with clips you already generated. Genjutsu accepts AI footage as input, so the source costs nothing extra. The spend is only the recast.</p>

<h2>How do you use Higgsfield Genjutsu from Claude?</h2>

<p>Higgsfield's guide says both Genjutsu and Genjutsu Lite are available through the <a href="https://higgsfield.ai/mcp" target="_blank" rel="noopener">Higgsfield MCP connector</a>, so you can run them from Claude or ChatGPT, and through the API, which is priced separately in the API console. Higgsfield is the hub I run, and this is the route that matters most to me, because the recast becomes one step in a longer brief instead of a separate trip to a web page. How to connect the MCP, and what it costs in credits, is in my <a href="/blog/higgsfield-mcp-claude-setup-credits-director-rules/">Higgsfield MCP guide</a>.</p>

<p>Once it is connected, the order above still applies. A brief I would paste, with the source clip and references already uploaded:</p>

<pre><code>Genjutsu, Motion Transfer, 480p, 15 seconds.
Source: [clip name]. Keep the camera move, timing and cuts.
Rebuild: the presenter as [character], using the 6 reference
images in [folder]. Location: [describe or reference].
Before you run it, tell me the credit cost and wait for my OK.
After it renders, show me three frames: first, middle, last.
Do not upscale or re-run at 1080p until I approve the 480p.</code></pre>

<p>The last two lines are the whole point. An agent will happily spend credits in a loop if you let it. Ask for the cost before each run and keep the approval with you.</p>

<p>To change only the background, which is one of the most searched Genjutsu questions, use Object Swap and name the location as the thing to change, with one or two reference images of the new place. Everything you did not select, the person, the motion and the framing, is meant to survive. If you want the whole clip in a new look instead, the Style option in Motion Transfer does that: 20 ready made looks, such as cel animation or felt puppet stop motion, or a custom style from one image of yours.</p>

<h2>The two numbers that did not match</h2>

<p><strong>Update, October 4, 2026:</strong> the gap is closed. Higgsfield's <a href="https://higgsfield.ai/genjutsu" target="_blank" rel="noopener">product page</a> now says what the <a href="https://higgsfield.ai/blog/higgsfield-genjutsu" target="_blank" rel="noopener">blog post</a> said from the start: one source video from <strong>4 to 30 seconds</strong> and up to <strong>30 reference images</strong>. Plan on those numbers. What follows is how it read on September 8, kept because the habit it argues for still applies.</p>

<p>The gap, stated plainly, because I could not resolve it by reading and I am not going to pretend I did.</p>

<p>Higgsfield's product page and most of the coverage that followed it say Genjutsu accepts reference videos from <strong>3 seconds</strong> and up to <strong>40 reference images</strong>. Higgsfield's own blog post about Genjutsu says <strong>4 seconds</strong> and up to <strong>30 reference images</strong>.</p>

<p>Those are small differences and they are not small in practice. If you have built a character sheet with thirty five references and the real cap is thirty, you find out at submission, after the work. If your driving clip is three and a half seconds and the real floor is four, same story.</p>

<p>On September 8 I did not know which page was current. It turned out to be the blog. The most likely explanation is boring: one of them was written against a build that changed, and nobody went back. That happens on every product I have ever worked near. But the fix on your end is to test the edge before you plan around it, with one throwaway generation, rather than trusting either number.</p>

<h2>What it costs, and why that changes the plan</h2>

<p>Higgsfield now lists a 15 second Motion Transfer at about $2.21 at 480p, $5.15 at 720p and $14.70 at 1080p, as checked on November 2, 2026. When this was first written the 1080p clip was about $7.20, so the top tier roughly doubled in two months while the two lower tiers barely moved. Output tops out at 1080p.</p>

<p>Fifteen dollars a clip does not sound like much until you remember what this tool is for. Nobody uses Genjutsu once. The entire pitch is variants: the same ad recast for four markets, the same choreography with three different wardrobes, the same product shot in six locations. Forty variants at 1080p is close to six hundred dollars, and it arrives before you know which variants are any good.</p>

<p>So I run the same shape I already run for Seedance, which is <a href="/blog/seedance-2-5-1080p-what-the-resolution-upgrade-costs/">expensive at its top tier</a> for the same reason. Generate at the cheap resolution, judge, then either re-run the winner high or take the cheap render into an upscale. I use <a href="/blog/topaz-video-ai-archival-footage-upscaling-commercial-production/">Topaz</a> for that step. The point is that the expensive tier is for the shot you have already approved, not for the shot you are still deciding about, and the interface will quietly let you do it the other way round.</p>

<h2>Where this beats Kling Motion Control, and where it does not</h2>

<p>I already had a tool for this. <a href="/blog/kling-3-0-motion-control-multi-shot-director-review/">Kling Motion Control</a> repeats a movement, which is exactly why it lets you change scenery and objects underneath, and it is what I reach for when a scene has complex movement I do not want to gamble on regenerating.</p>

<p>Genjutsu goes further in one specific direction: the reference stack. Thirty or forty images of a character, a product and a wardrobe is a different instrument from a driving clip alone. It is the difference between repeating a move and recasting a production. For work where one character has to survive across many scenes without drifting, that stack is the thing that holds.</p>

<p>Where it does not win is where nothing wins. Both tools inherit the source. Neither invents a better shot than the one you fed it. If you hand either of them a move that was already boring, you get an efficient, high resolution, consistent version of boring, delivered faster than before.</p>

<h2>The part that is still yours</h2>

<p>There is a reading of Genjutsu that goes: the cast is now a variable, the location is now a variable, so the shoot was the expensive mistake all along. I have directed enough commercials to think that reading is backwards, and I want to be precise about why.</p>

<p>Everything Genjutsu manipulates is downstream of a decision somebody made. The camera move it preserves so faithfully was chosen by a person who stood somewhere and decided the frame started here and ended there. The timing it holds was somebody's judgement about how long an audience will sit with an image before it goes slack. The tool is extraordinarily good at carrying those decisions into new material. It has no opinion about whether the decisions were any good.</p>

<p>That is not a limitation to be fixed in the next version. It is what the tool is. A lazy idea run through Genjutsu produces a spectacle you have already seen a million times, in four languages, consistently. The machine takes the daily task, which is real and worth having. You still have to be the one who knows what the shot is for.</p>

<p>Which is the honest reason to learn it properly this week, while the thing is new and the price is high. Not because it replaces the work. Because it makes the part that was always the work, deciding what is worth making, the only part left that anyone will pay for.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>UPDATE, November 24, 2026: the <a href="https://higgsfield.ai/blog/higgsfield-genjutsu" target="_blank" rel="noopener">Genjutsu guide</a> re-read today, marked "Updated Nov 2, 2026". Prices for a 15 second clip, checked by Higgsfield on November 2 at $49 per 1,000 credits: Motion Transfer 45, 105 and 300 credits at 480p, 720p and 1080p (about $2.21, $5.15, $14.70); Object Swap 48, 112 and 320 (about $2.35, $5.49, $15.68); Genjutsu Lite 96 and 192 at 720p and 1080p (about $4.70, $9.41). The guide states the exact cost is on the Generate button and an account may see a lower price. It lists 30+ presets and 20 ready made Styles in Motion Transfer, and states that both Genjutsu and Genjutsu Lite run through the Higgsfield MCP connector and the API. The product page still states 4 to 30 seconds and up to 30 reference images. Genjutsu was not run for this update.
VERIFICATION NOTE, September 8, 2026.
Every figure here was read on September 8, 2026 from Higgsfield's own pages, not from third party summaries.
The two modes, Motion Transfer and Object Swap, appear identically on the Genjutsu product page and on Higgsfield's blog post about it.
The conflict is real and is reported as found: the product page and the coverage that followed state 3 seconds minimum and up to 40 reference images; Higgsfield's own blog post states 4 seconds and up to 30. Neither page was updated between the two readings on this date.
UPDATE, October 29, 2026: both pages re-read. The <a href="https://higgsfield.ai/blog/higgsfield-genjutsu" target="_blank" rel="noopener">blog post</a> (marked last updated October 20, 2026) describes Genjutsu Lite: 4 to 30 second clips, up to 10 reference images, 720p or 1080p, no mode choice, about one third of the cost on higgsfield.ai, and availability through API, MCP, CLI and plugins. The <a href="https://higgsfield.ai/genjutsu" target="_blank" rel="noopener">product page</a> labels Lite as new: "Faster and cheaper. Up to 30s, 720p/1080p". No Lite credit table is published. The full-model prices on the blog are still marked as verified in September 2026. Lite was not run for this update.
UPDATE, October 4, 2026: both pages re-read. The product page now states "reference videos from 4-30 seconds" and "up to 30 reference images", matching the blog post. The 15 second prices of 40, 104 and 144 credits (about $2.00, $5.20 and $7.20) are unchanged on the blog post.
Pricing in September (approximately $2.00 at 480p, $5.20 at 720p and $7.20 at 1080p for a 15 second generation, capped at 1080p output) comes from Higgsfield's blog post and is quoted in US dollars as listed there. Credit costs are displayed before generation in the product itself, which is the number to trust at the moment of use.
The launch is described as the first week of September 2026 rather than a specific date, because Higgsfield's own post says only that Genjutsu "just launched"; the post itself carries a publish date of September 1, 2026. The search demand curve for the term begins on September 2, 2026.
Genjutsu was NOT run on a paid job before this was published. The workflow described is the one I already use for expensive generation tiers, applied to this tool, and is labelled as such rather than as a result.</p>
</section>
