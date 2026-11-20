---
id: "art-200"
title: "GPT Image 2.6: A Director's Take on New Features"
description: "GPT Image 2.6 adds SVG, animated GIF, a complexity dial and edits you mark with a circle. What each one does, the limits in the docs, and a field sheet to copy."
pubDate: "2026-11-20"
toolVersion: "2026-11"
category: "AI"
tags:
  - "GPT Image 2.6"
  - "OpenAI"
  - "ChatGPT Images"
  - "SVG"
  - "Image Editing"
  - "Workflow"
heroImage: "https://images.unsplash.com/photo-1766603065109-401f5bed90be?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw2fHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjBhcnRpc3RpY3xlbnwxfDB8fHwxNzk1MTY5OTMzfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<p>GPT Image 2.6 came out on November 4, 2026, as two models, Sunburst and Flare. The API changelog gives it one sentence: adjustable complexity, SVG generation, animated GIF generation, and markup-guided editing.</p>

<p>This is a reading of OpenAI's documentation, opened on November 20, 2026, and of one trade report from launch day. I have not run the model for this article and nothing below is a test result. GPT Image is the model I reach for inside Higgsfield when a frame needs text that survives, so I read the pages with one question: of the four new things, which one changes a working day?</p>

<p>My answer is not the one in the headlines. The GIF and the SVG got the coverage. The circle is the one I would use.</p>

<h2>What GPT Image 2.6 shipped</h2>

<p>Two models with the same price. OpenAI describes Sunburst as the one for detailed visual work and Flare as the one for fast iteration. MarkTechPost, reporting on launch day, quotes OpenAI saying images generate 50 percent faster than before and that Flare can return one in as little as six seconds at low quality. Those are the company's numbers, not mine.</p>

<p>The rates did not move from 2.5: 8 dollars per million image input tokens, 30 dollars per million image output tokens, 5 dollars per million text input tokens. The guide says adjusting complexity has no separate fee and that markup edits cost the same as any other edit.</p>

<table>
<thead>
<tr><th>New in 2.6</th><th>What it does</th><th>The limit the docs state</th></tr>
</thead>
<tbody>
<tr><td>Complexity</td><td>Sets how much the model plans before it renders: low, medium or high</td><td>Default is high. Higher can add latency and "introduce unwanted changes"</td></tr>
<tr><td>Markup edit</td><td>You draw on a transparent layer where the change goes</td><td>Edits endpoint only. The layer must match the image's width and height</td></tr>
<tr><td>SVG output</td><td>Returns editable vector paths instead of pixels</td><td>One per request, generation only, static, no embedded raster</td></tr>
<tr><td>Animated GIF</td><td>Returns a short loop from a prompt or from reference stills</td><td>2 to 16 frames. Default is 9 frames at 200 ms</td></tr>
</tbody>
</table>

<h2>The red circle became a parameter</h2>

<p>In advertising, the note almost never arrives as a sentence. It arrives as a frame with a circle on it. Somebody on the client side opens the still, draws around the product with a red marker tool, writes "blue?" next to it and sends it back.</p>

<p>Until now, turning that circle into an edit meant translating it. You described the region in words and hoped, or you painted a mask, which is a different skill from pointing.</p>

<p>The 2.6 guide takes the circle as it is. You send the original image first. You send a second file, a transparent PNG of the same width and height, with only your annotations on it, in a field called <code>markup</code>. The prompt says what changes, what stays, and asks for the circle to be removed from the result. OpenAI's own example recolors a striped vase inside a red circle and tells the model to keep the dried stems and the rest of the kitchen unchanged.</p>

<p>That is the first image feature in a long time that is shaped like a review round instead of like a prompt. And it also works on supported 2.5 models, per the changelog, so it is not locked to the newest name.</p>

<p>The catch is in the same guide, under Limitations, and 2.6 did not delete it. The model "may have difficulty placing elements precisely in structured or layout-sensitive compositions" and may not hold recurring characters or brand elements across generations. A circle tells the model where to look. It does not promise the rest of the frame comes back untouched, which is why the example prompt spends more words on what to keep than on what to change. Write yours the same way.</p>

<h2>The GIF is a flipbook, not a shot</h2>

<p>Read the numbers before the word "animated" does the thinking for you.</p>

<p>A request returns between 2 and 16 frames. The default is 9 frames at 200 milliseconds each, and the guide's own example, a monkey lifting a lantern, returns to its starting pose after 1.8 seconds. Frame duration can go from 20 to 2000 milliseconds. Frame count, frame size and number of animations share one pixel budget, so more frames means smaller frames.</p>

<p>Sixteen frames at film speed is two thirds of a second. So this is not motion in the sense a video model gives you, and it should not be judged as one. It is a flipbook: a blink, a steam curl over a cup, a logo that breathes. For a pitch deck or a storyboard beat, a loop that costs one image request is a useful thing. For a shot, I would still go to Seedance or Kling, which is where the motion in my jobs comes from.</p>

<p>One detail worth knowing: the edits endpoint accepts GIF output too, so still reference images can guide the loop. A product photo in, a small loop of that product out.</p>

<h2>The SVG is drawn from a picture first</h2>

<p>The guide is plain about how the vector gets made. The API creates a reference image, then produces the SVG from it. You pay the image model for the reference and a second, authoring model for the tokens it spends writing the paths. The total depends on both.</p>

<p>What comes back is static vector content: no scripts, no external resources, no embedded raster images. One file per request. No streaming. The edit endpoint does not return SVG, and an SVG is not accepted as input for an edit, so you do not refine a vector by editing it. You regenerate, or you open it in Illustrator and fix it by hand.</p>

<p>Why I care anyway: paths are what motion from code wants. A logo as pixels has to be traced before anything can animate its strokes. A logo as paths can go straight into the kind of pipeline I described in <a href="/blog/remotion-claude-code-video-variations-director-method/">the Remotion method</a>. I have not put one of these files through Remotion yet. That is a plan, not a result.</p>

<h2>How do you use GPT Image 2.6?</h2>

<p>Three doors. In ChatGPT it is the built-in image tool, and MarkTechPost reports the GIF controls there include speed and per-frame edits. In the API it is two endpoints. And it reaches people through the hubs that resell it, which is how I get to GPT Image in the first place.</p>

<p>For the API, this is every new field on one page. The guide notes that your organization may need to complete verification before the image models respond.</p>

<pre><code>GPT IMAGE 2.6, REQUEST FIELDS
(OpenAI image generation guide, read 2026-11-20)

MODELS     gpt-image-2.6-sunburst  detail
           gpt-image-2.6-flare     speed
ENDPOINTS  POST /v1/images/generations
           POST /v1/images/edits

complexity   low | medium | high        default high, no extra fee
quality      low | medium | high | xhigh | max

MARKUP EDIT  (edits endpoint)
  image      the original, sent first
  markup     transparent PNG, same width and height, circles only
  prompt     what changes, what stays, "remove the circle"

SVG          (generations only)
  output_format  svg      n = 1, no streaming, no edits

GIF          (generations or edits)
  output_format      gif
  frame_count        2 to 16       default 9
  frame_duration_ms  20 to 2000    default 200
  size               auto, or WIDTHxHEIGHT in multiples of 16</code></pre>

<p>Official pages: the <a href="https://platform.openai.com/docs/guides/image-generation" target="_blank" rel="noopener">image generation guide</a>, the <a href="https://platform.openai.com/docs/models/gpt-image-2.6-sunburst" target="_blank" rel="noopener">Sunburst model page</a> and the <a href="https://platform.openai.com/docs/models/gpt-image-2.6-flare" target="_blank" rel="noopener">Flare model page</a>.</p>

<h2>Three lines the launch coverage skipped</h2>

<p><strong>There is no dated snapshot.</strong> The 2.5 model page lists two names, the alias and <code>gpt-image-2.5-sunburst-2026-09-08</code>. The 2.6 page lists only the alias. A dated snapshot is how you pin a model so the same request behaves the same way next month. Without one, the name stays and what is behind it can move. If a look has to hold across a campaign, write the date next to every file.</p>

<p><strong>Batch is listed as not supported.</strong> On the 2.6 model pages the Batch endpoint reads "Not supported", where the 2.5 page reads "Supported". The pricing page still shows a batch rate for 2.6. The two pages disagree today, so check before you plan a few hundred overnight variations at half price.</p>

<p><strong>The older model got its notice six days later.</strong> On November 10 OpenAI's deprecations page gave gpt-image-2 a shutdown date of February 10, 2027, with 2.6 as the replacement. I put the full list of image model end dates in <a href="/blog/dall-e-retires-august-30-your-masters-are-inside-it/">the piece on what you lose when a model is retired</a>, with a sidecar file to save next to each image.</p>

<h2>What I would do with it on Monday</h2>

<p>Use the circle. Take the next round of client notes that arrives as a marked-up frame, redraw the marks on a transparent layer, and see if the edit lands without touching what was approved. Start at low complexity, because the guide says low suits focused edits and high is where unwanted changes come in, and high is the default if you say nothing.</p>

<p>Treat the GIF as a sketch and the SVG as a first draft that a person will clean.</p>

<p>The model got better at taking direction in the form direction already comes in. Somebody still has to draw the circle in the right place.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Read November 20, 2026. This is a documentary analysis. No image was generated for this article.</p>
<ol>
<li>Release date and feature list: <a href="https://platform.openai.com/docs/changelog" target="_blank" rel="noopener">OpenAI API changelog</a>, entry of November 4, 2026; corroborated by <a href="https://www.marktechpost.com/2026/11/04/openai-gpt-image-2-6-flare-sunburst/" target="_blank" rel="noopener">MarkTechPost, November 4, 2026</a>, which is also the source for the 50 percent and six second figures, attributed there to OpenAI.</li>
<li>Complexity levels and default, markup layer rules, SVG and GIF fields and limits, the Limitations list and cost notes: <a href="https://platform.openai.com/docs/guides/image-generation" target="_blank" rel="noopener">OpenAI image generation guide</a>.</li>
<li>Token rates: <a href="https://platform.openai.com/docs/pricing" target="_blank" rel="noopener">OpenAI pricing page</a> and the two model pages linked above.</li>
<li>Snapshots and Batch support: the GPT-Image-2.6 Sunburst and Flare model pages compared with the <a href="https://platform.openai.com/docs/models/gpt-image-2.5-sunburst" target="_blank" rel="noopener">GPT-Image-2.5 Sunburst model page</a>.</li>
<li>Shutdown date for gpt-image-2: <a href="https://platform.openai.com/docs/deprecations" target="_blank" rel="noopener">OpenAI deprecations page</a>.</li>
</ol>
</section>
