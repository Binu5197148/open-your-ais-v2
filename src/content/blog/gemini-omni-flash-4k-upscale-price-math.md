---
id: "art-177"
title: "Gemini Omni Flash: Your 4K Is an Upscale Anyway"
description: "Google's new video model charges ten times more for 4K than for a 360p draft. Its own API docs call that 4K an upscale. Here is how I read the tier list."
pubDate: "2026-08-31"
toolVersion: "2026-08"
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

<p>On August 27, Google DeepMind put Gemini Omni 1.1 Flash into general availability and published a price list with four lines on it. Three cents a second for 360p. Ten cents for 720p. Fifteen cents for 1080p. Thirty cents for 4K. Every roundup I read that week ran the same headline, which was that 4K video now costs thirty cents a second.</p>

<p>That is the least useful way to read this table. Read it from the bottom instead, and a different document appears. Google's own API parameter documentation labels the top two tiers as "1080p output (upscaled)" and "4k output (upscaled)". Not marketing copy. The literal parameter description. The model generates at 720p, and everything above that line is an upscale you are renting by the second.</p>

<h2>What Google actually shipped on August 27</h2>

<p>Be precise, because the precision is the whole argument.</p>

<p>Gemini Omni 1.1 Flash is available through the Gemini API, Google AI Studio and Google's enterprise Agent Platform, with consumer access through Flow and scene extension inside the Gemini app for eligible subscribers. Billing is per second of generated video, at the four tiers above.</p>

<p>Scene extension is the headline feature. You can extend a clip in ten second increments up to a cumulative forty seconds, and each pass now reads up to ten seconds of preceding video for context instead of only the final second. That last detail is the real engineering. Continuity across a chain of extensions fails when the model can only see the last frame, because a single frame carries no motion vector and no rhythm. Ten seconds of context carries both.</p>

<p>There are limits worth writing on a card and taping to your monitor. Extension is end only. There is no mid clip insertion and no extending backwards. You can upload up to three seconds of external footage as a style reference to carry a character or a motion pattern across generations, and you can set keyframes for camera moves.</p>

<p>And then the tier that nobody put in a headline: a 360p draft mode that runs roughly sixty percent faster at one third the cost of 720p.</p>

<h2>Why is the 4K on this price list an upscale?</h2>

<p>Because the model does not generate there. The native ceiling is 720p, and the 1080p and 4K options are post processes applied to that output before it reaches you.</p>

<p>This matters for a reason that has nothing to do with Google and everything to do with physics. An upscale cannot invent detail that was never captured at generation resolution. It can sharpen edges, it can clean compression noise, it can make a file that plays nicely on a large display. It cannot add the texture of fabric that the model never rendered, or resolve the strands of hair it approximated as a shape. If the 720p generation was soft in the face, the 4K version is a larger soft face.</p>

<p>So the question stops being "can I afford 4K" and becomes "who should do my upscale". Google will do it inside the same API call at fifteen cents a second above the 720p price. I already own <a href="/blog/seedance-2-5-1080p-what-the-resolution-upgrade-costs/">a dedicated upscaler and a habit of using it</a>, because this is exactly how I already run Seedance. I generate at 720p and I upscale afterwards in Topaz, not because I am being clever but because the 1080p tier on that model is expensive enough that the math stopped being close.</p>

<p>The convenience of an in call upscale is real and I am not going to pretend otherwise. If you are shipping a social cut in a hurry and the difference is one API parameter versus exporting into another application, take the parameter. But do not enter that number into a budget believing you bought resolution. You bought a resize.</p>

<h2>The 360p tier is the one that changes the work</h2>

<p>Here is the contrarian part, and I hold it fairly strongly.</p>

<p>The thing that fails in AI video is almost never resolution. It is motion. The camera drifts when it should be locked. A character crosses the frame at the wrong speed. A push in that read beautifully in your head arrives as a slow zoom with no acceleration curve. The gesture lands a beat late. These are the failures that send a shot back, and I have never once needed 1080p to see any of them.</p>

<p>Motion is completely legible at 360p. So is composition, so is blocking, so is the timing of a cut point, so is whether the light is coming from the side you asked for. At three cents a second and sixty percent faster, that tier is not a cheap version of the real thing. It is a viewing copy, and viewing copies are how film has always worked. Nobody graded a commercial off the answer print. You cut on the low resolution transfer, you locked it, and the expensive process happened once, at the end, on the version that survived.</p>

<p>That is the workflow this price list is quietly describing. Draft wide at 360p. Generate the variations you would normally be too cost conscious to try, because the whole reason people stop exploring is that each attempt feels expensive. Judge motion and framing. Kill most of them. Then re render only the survivors at 720p, which is the highest tier where new pixels are actually created, and decide separately and deliberately who performs the upscale.</p>

<h2>How this lands in a real pipeline</h2>

<p>My hub is Higgsfield, connected to Claude over an MCP command line, and Gemini Omni already has a specific job in there. It is what I reach for when a scene has gone static and needs the camera to move through it, because Omni will fly through an environment in a way nothing else in my stack does as easily. It is not the most consistent model I use. When it lands, it lands better than the consistent ones.</p>

<p>The draft tier fits that job precisely. The reason I use Omni is motion, motion is the thing I need to evaluate, and motion is exactly what survives a drop to 360p. For a model whose value to me is camera behaviour rather than skin texture, a cheap fast preview tier is worth more than a 4K checkbox.</p>

<p>Scene extension is the piece I want to stress test before I trust it on a paid job. Forty seconds sounds like a lot until you remember it accumulates in ten second passes and only forward. That shape rewards planning and punishes discovery. You cannot decide at second thirty that the sequence needed two more beats at the front. It also puts real weight on the first ten seconds, because everything downstream is conditioned on them, which is a familiar feeling to anyone who has ever built a sequence on a bad establishing shot.</p>

<p>None of this replaces the argument I keep making about where consistency actually comes from. A cheaper draft tier lets you find the shot faster. It does not do <a href="/blog/ai-character-consistency-prep-problem-not-model-problem/">the preparation that makes a character survive across twenty of them</a>, and it will not rescue a sequence that was never designed. Motion control on <a href="/blog/kling-3-0-motion-control-multi-shot-director-review/">Kling still does something Omni does not</a>, which is repeat a move precisely enough that you can swap what is inside it.</p>

<h2>What I would not do with it</h2>

<p>I would not promise a client a 4K deliverable off this model without putting the upscaled output on a large display first and looking at it with them in the room. Upscaled 4K passes on a laptop and gets interrogated on a television. That test costs you one afternoon and it is the cheapest insurance in this entire pipeline.</p>

<p>I would not let the draft tier turn into an excuse to generate a hundred variations and call that direction. Cheap iteration is a tool for testing a decision you already made, not a substitute for making one. The fastest way to waste three cents a second is to spend it two thousand times because you never wrote down what the shot was supposed to do.</p>

<p>And I would not read this launch as Google winning anything. It is a price list that tells you, with unusual honesty, where the model actually stops generating. Most vendors bury that. This one wrote it into the parameter description.</p>

<p>The useful skill here was never picking the highest number on a tier list. It is knowing which tier does the work, which tier does the showing off, and doing the expensive step once, on purpose, at the end. That was true when the answer print cost real money, and the arithmetic has not changed. Only the units did.</p>
