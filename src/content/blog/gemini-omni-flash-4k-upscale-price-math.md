---
id: "art-177"
title: "Gemini Omni 1.2 Flash: What They Don't Say"
description: "Gemini Omni 1.2 Flash runs 15 seconds at $0.07 a second in 720p, and the launch headlines skip this: Google's own docs still label its 4K as an upscale."
pubDate: "2026-08-31"
updatedDate: "2026-11-09"
toolVersion: "2026-11"
category: "AI"
tags:
  - "Gemini Omni"
  - "Google"
  - "AI Video"
  - "Pricing"
  - "Workflow"
  - "Filmmaking"
heroImage: "https://images.unsplash.com/photo-1640127249305-793865c2efe1?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwzfHxjaW5lbWElMjBoYWxsJTIwZW1wdHl8ZW58MXwwfHx8MTc4ODA2NDIyMHww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<p><em>Updated November 9, 2026. Google released Gemini Omni 1.2 Flash on November 5. The section right below is the current state, read from Google's published pages on November 9. No clips were generated for this update. The August text that follows it describes 1.1 and stays as the record of that price list, with its argument intact: the model still stops generating at 720p.</em></p>

<h2>What changed with Gemini Omni 1.2 Flash?</h2>

<p><a href="https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/" target="_blank" rel="noopener">Google's announcement</a> gives three changes that matter on a job. Native generation and editing go from 10 to 15 seconds, set in one second steps from 3 to 15. Multi-turn conversational editing works across the full clip. And the 720p price drops 30 percent, to $0.07 a second.</p>

<p>The announcement quotes one price. The rest is on the <a href="https://aistudio.google.com/docs/pricing" target="_blank" rel="noopener">Gemini API pricing page</a>:</p>

<table>
<thead><tr><th>Output</th><th>1.1 Flash (August)</th><th>1.2 Flash (per second)</th><th>15 second clip on 1.2</th></tr></thead>
<tbody>
<tr><td>360p draft</td><td>$0.03</td><td>$0.023</td><td>about $0.35</td></tr>
<tr><td>720p</td><td>$0.10</td><td>about $0.07</td><td>about $1.04</td></tr>
<tr><td>1080p (upscaled)</td><td>$0.15</td><td>$0.104</td><td>about $1.56</td></tr>
<tr><td>4K (upscaled)</td><td>$0.30</td><td>$0.209</td><td>about $3.14</td></tr>
</tbody>
</table>

<p>The word in parentheses is the one the launch coverage skips. The <a href="https://aistudio.google.com/docs/omni" target="_blank" rel="noopener">Gemini API documentation for Omni</a> still lists "1080p output (upscaled)" and "4K output (upscaled)", and Google's own post says drafts are made at 360p or 720p and finished clips can be upscaled. A cheaper table does not move the line where new pixels stop being made.</p>

<p>Two limits are worth writing down. Extension adds 3 to 10 seconds per turn, up to 30 seconds total on the Gemini API page, and first and last frame interpolation only runs from 3 to 10 seconds. Clips of 11 to 15 seconds accept one reference video instead of three. Audio references on Google Cloud need allowlisting, per the <a href="https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available" target="_blank" rel="noopener">Cloud announcement</a>.</p>

<p>If you have code calling <code>gemini-omni-1.1-flash</code>, the pricing page says those requests route to 1.2 and bill at 1.2 rates from December 3, 2026. Re-run your approved prompts on 1.2 before that date, because the model answering them is going to change either way.</p>

<h2>Is Gemini Omni free, and how do you use it?</h2>

<p>The API has no free tier. Google says Google Vids offers 15 second clips at no additional cost with a Google account or Workspace subscription, Flow is the place for directing scenes and multi-turn edits, and the Gemini app is rolling out to AI Ultra subscribers. Plan limits change, so confirm yours on the product page before you promise anything.</p>

<p>The people searching this also ask how to change a background. Google's Cloud post lists swapping a product, changing lighting or camera angle and changing style on the same clip, without starting over. A background change is the same kind of request, though Google does not name it, so test it on your own footage.</p>

<p>The routine this article argues for, ready to copy:</p>

<pre><code>1. Write what the shot has to do, in one sentence, before generating.
2. Draft at 360p, 3 to 15 seconds. Judge motion, framing, timing only.
3. Kill most drafts. Stop when one does the sentence from step 1.
4. Re-render the survivor at 720p. This is the last tier of new pixels.
5. Fix it with conversational edits on the same clip, not a new roll.
6. Decide who upscales: Google in the call, or your own upscaler.
7. Look at the upscale on a large display before calling it 4K.</code></pre>

<p>Google also says it is still working on fast sports action, rapid scene changes and complex physics. Treat those as the shots to draft first.</p>

<h2>The August price list that started this</h2>

<p>On August 27, Google DeepMind put Gemini Omni 1.1 Flash into general availability and published a price list with four lines on it. Three cents a second for 360p. Ten cents for 720p. Fifteen cents for 1080p. Thirty cents for 4K. Every roundup I read that week ran the same headline, which was that 4K video now costs thirty cents a second.</p>

<p>That is the least useful way to read this table. Read it from the bottom instead, and a different document appears. Google's own API parameter documentation labels the top two tiers as "1080p output (upscaled)" and "4k output (upscaled)". Not marketing copy. The literal parameter description. The model generates at 720p, and everything above that line is an upscale you are renting by the second.</p>

<h2>What Google actually shipped on August 27</h2>

<p>Be precise, because the precision is the whole argument.</p>

<p>Gemini Omni 1.1 Flash is available through the Gemini API, Google AI Studio and Google's enterprise Agent Platform, with consumer access through Flow and scene extension inside the Gemini app for eligible subscribers. Billing on the Gemini API is by output tokens, at $17.50 per million video tokens. A second of 720p uses 5,792 of them, which is where the ten cents comes from. Google states the 360p draft as one third of the 720p cost; the 1080p and 4K figures circulate through resellers rather than the pricing page.</p>

<p>Scene extension is the headline feature. You can extend a clip in ten second increments up to a cumulative forty seconds, and each pass now reads up to ten seconds of preceding video for context instead of only the final second. That last detail is the real engineering. Continuity across a chain of extensions fails when the model can only see the last frame, because a single frame carries no motion vector and no rhythm. Ten seconds of context carries both.</p>

<p>There are limits worth writing on a card and taping to your monitor. Extension is end only. There is no mid clip insertion and no extending backwards. You can upload up to three seconds of external footage as a style reference to carry a character or a motion pattern across generations, and you can set keyframes for camera moves.</p>

<p>And then the tier that nobody put in a headline: a 360p draft mode that runs roughly sixty percent faster at one third the cost of 720p.</p>

<h2>Why is the 4K on this price list an upscale?</h2>

<p>Because the model does not generate there. The native ceiling is 720p, and the 1080p and 4K options are post processes applied to that output before it reaches you.</p>

<p>This matters for a reason that has nothing to do with Google and everything to do with physics. An upscale cannot invent detail that was never captured at generation resolution. It can sharpen edges, it can clean compression noise, it can make a file that plays nicely on a large display. It cannot add the texture of fabric that the model never rendered, or resolve the strands of hair it approximated as a shape. If the 720p generation was soft in the face, the 4K version is a larger soft face.</p>

<p>So the question stops being "can I afford 4K" and becomes "who should do my upscale". On the August list Google would do it inside the same API call for twenty cents a second above the 720p price. On 1.2 the gap is about fourteen cents. I already own <a href="/blog/seedance-2-5-1080p-what-the-resolution-upgrade-costs/">a dedicated upscaler and a habit of using it</a>, because this is exactly how I already run Seedance. I generate at 720p and I upscale afterwards in Topaz, not because I am being clever but because the 1080p tier on that model is expensive enough that the math stopped being close.</p>

<p>The convenience of an in call upscale is real and I am not going to pretend otherwise. If you are shipping a social cut in a hurry and the difference is one API parameter versus exporting into another application, take the parameter. But do not enter that number into a budget believing you bought resolution. You bought a resize.</p>

<h2>The 360p tier is the one that changes the work</h2>

<p>Here is the contrarian part, and I hold it fairly strongly.</p>

<p>The thing that fails in AI video is almost never resolution. It is motion. The camera drifts when it should be locked. A character crosses the frame at the wrong speed. A push in that read beautifully in your head arrives as a slow zoom with no acceleration curve. The gesture lands a beat late. These are the failures that send a shot back, and I have never once needed 1080p to see any of them.</p>

<p>Motion is completely legible at 360p. So is composition, so is blocking, so is the timing of a cut point, so is whether the light is coming from the side you asked for. At three cents a second and sixty percent faster, that tier is not a cheap version of the real thing. It is a viewing copy, and viewing copies are how film has always worked. Nobody graded a commercial off the answer print. You cut on the low resolution transfer, you locked it, and the expensive process happened once, at the end, on the version that survived.</p>

<p>That is the workflow this price list is quietly describing. Draft wide at 360p. Generate the variations you would normally be too cost conscious to try, because the whole reason people stop exploring is that each attempt feels expensive. Judge motion and framing. Kill most of them. Then re render only the survivors at 720p, which is the highest tier where new pixels are actually created, and decide separately and deliberately who performs the upscale.</p>

<h2>How this lands in a real pipeline</h2>

<p>My hub is Higgsfield, connected to Claude over an MCP command line, and Gemini Omni already has a specific job in there. It is what I reach for when a scene has gone static and needs the camera to move through it, because Omni will fly through an environment in a way nothing else in my stack does as easily. It is not the most consistent model I use. When it lands, it lands better than the consistent ones.</p>

<p>The draft tier fits that job precisely. The reason I use Omni is motion, motion is the thing I need to evaluate, and motion is exactly what survives a drop to 360p. For a model whose value to me is camera behaviour rather than skin texture, a cheap fast preview tier is worth more than a 4K checkbox.</p>

<p>Scene extension is the piece I want to stress test before I trust it on a paid job. Forty seconds on the 1.1 list, thirty on the current Gemini API page, sounds like a lot until you remember it accumulates in passes of ten seconds or less and only forward. That shape rewards planning and punishes discovery. You cannot decide at second thirty that the sequence needed two more beats at the front. It also puts real weight on the first ten seconds, because everything downstream is conditioned on them, which is a familiar feeling to anyone who has ever built a sequence on a bad establishing shot.</p>

<p>None of this replaces the argument I keep making about where consistency actually comes from. A cheaper draft tier lets you find the shot faster. It does not do <a href="/blog/ai-character-consistency-prep-problem-not-model-problem/">the preparation that makes a character survive across twenty of them</a>, and it will not rescue a sequence that was never designed. Motion control on <a href="/blog/kling-3-0-motion-control-multi-shot-director-review/">Kling still does something Omni does not</a>, which is repeat a move precisely enough that you can swap what is inside it.</p>

<h2>What I would not do with it</h2>

<p>I would not promise a client a 4K deliverable off this model without putting the upscaled output on a large display first and looking at it with them in the room. Upscaled 4K passes on a laptop and gets interrogated on a television. That test costs you one afternoon and it is the cheapest insurance in this entire pipeline.</p>

<p>I would not let the draft tier turn into an excuse to generate a hundred variations and call that direction. Cheap iteration is a tool for testing a decision you already made, not a substitute for making one. The fastest way to waste three cents a second is to spend it two thousand times because you never wrote down what the shot was supposed to do.</p>

<p>And I would not read this launch as Google winning anything. It is a price list that tells you, with unusual honesty, where the model actually stops generating. Most vendors bury that. This one wrote it into the parameter description.</p>

<p>The useful skill here was never picking the highest number on a tier list. It is knowing which tier does the work, which tier does the showing off, and doing the expensive step once, on purpose, at the end. That was true when the answer print cost real money, and the arithmetic has not changed. Only the units did.</p>

<p><em>Sources, read November 9, 2026: <a href="https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/" target="_blank" rel="noopener">Google, Introducing Gemini Omni 1.2 Flash</a> | <a href="https://cloud.google.com/blog/products/ai-machine-learning/gemini-omni-1-2-flash-generally-available" target="_blank" rel="noopener">Google Cloud, Gemini Omni 1.2 Flash now GA</a> | <a href="https://aistudio.google.com/docs/pricing" target="_blank" rel="noopener">Gemini API pricing</a> | <a href="https://aistudio.google.com/docs/omni" target="_blank" rel="noopener">Gemini API, Generate and edit videos with Omni Flash</a></em></p>
