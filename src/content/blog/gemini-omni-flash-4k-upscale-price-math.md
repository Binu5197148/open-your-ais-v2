---
id: "art-177"
title: "Don't Pay for 4K: Gemini Omni Truth"
description: "Google's own API docs call Gemini Omni Flash 4K an upscale of a 720p render. What a second really costs, the 360p draft, and how to use it step by step."
pubDate: "2026-08-31"
updatedDate: "2026-10-13"
toolVersion: "2026-10"
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

<!-- Correction and refresh 2026-10-13: billing model corrected (token based, not a flat per-second list), source of the 360p/1080p/4K per-second figures clarified, how-to section and source links added. State checked against the Gemini API pricing page (last updated 2026-10-09) and the Omni API docs. -->

<p><em>Updated October 13, 2026. Gemini Omni 1.1 Flash is still Google's current Omni video model, and the API docs still label 1080p and 4K as upscaled. One correction: the Gemini API bills Omni by output tokens, not by a flat price per second. Google's pricing page, last updated October 9, gives a rate only for 720p, about ten cents a second. The 360p, 1080p and 4K per-second figures below come from the launch coverage and reseller listings, so check the API pricing page before you budget. This piece is a reading of Google's documentation, not a hands-on test. A step-by-step section and source links were added at the end.</em></p>

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

<p>So the question stops being "can I afford 4K" and becomes "who should do my upscale". Google will do it inside the same API call, at a per-second premium over the 720p price. I already own <a href="/blog/seedance-2-5-1080p-what-the-resolution-upgrade-costs/">a dedicated upscaler and a habit of using it</a>, because this is exactly how I already run Seedance. I generate at 720p and I upscale afterwards in Topaz, not because I am being clever but because the 1080p tier on that model is expensive enough that the math stopped being close.</p>

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

<h2>How do you use Gemini Omni Flash, and is it free?</h2>

<p>On the API it is not free. Both Omni models show "Not available" in the free tier column of Google's pricing page, so every second you generate is billed. The consumer route is Google Flow, where Omni 1.1 is included for Google AI Plus, Pro and Ultra subscribers, and the Gemini app, where those same plans get scene extension.</p>

<p>If you work through the API, the draft first method above comes down to one parameter. Resolution sits inside <code>response_format</code>, with the values <code>360p</code>, <code>720p</code>, <code>1080p</code> and <code>4k</code>, and 720p is the default. This is the order I would run it in:</p>

<ol>
<li>Write the shot down before you generate: what the camera does, what the subject does, where the cut lands.</li>
<li>Generate three to five variations at <code>360p</code>. Judge only motion, framing and timing.</li>
<li>Re-render the one survivor at <code>720p</code>, the highest tier where the model creates new pixels.</li>
<li>Need more than 10 seconds? Extend forward in 10 second steps, up to 40 in total. Plan the first ten carefully, everything after is conditioned on them.</li>
<li>Need a correction? Send a text instruction against the previous generation instead of starting over. The docs say unmentioned elements are preserved.</li>
<li>Upscale last, and decide on purpose whether that is the API's <code>1080p</code>/<code>4k</code> option or your own upscaler. Look at the result on a large screen before it goes to a client.</li>
</ol>

<p>The draft call, adapted from Google's own example:</p>

```python
from google import genai
import base64

client = genai.Client()
draft = client.interactions.create(
    model="gemini-omni-1.1-flash",
    input="Slow push in on a lone chair in an empty theatre, side light from stage left.",
    response_format={"type": "video", "resolution": "360p"},
)
with open("draft.mp4", "wb") as f:
    f.write(base64.b64decode(draft.output_video.data))
```

<p>Two limits to know before you plan a job around it. Editing or extending uploaded videos is not available in the EEA, Switzerland or the UK, and uploaded clips must be ten seconds or shorter.</p>

<h2>Sources</h2>

<ul>
<li><a href="https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/" rel="noopener">Google: Gemini Omni 1.1 Flash lets you build with more control (August 27, 2026)</a></li>
<li><a href="https://ai.google.dev/gemini-api/docs/omni" rel="noopener">Gemini API docs: Omni video generation, resolutions and editing</a></li>
<li><a href="https://ai.google.dev/gemini-api/docs/pricing" rel="noopener">Gemini API pricing (last updated October 9, 2026)</a></li>
<li><a href="https://opper.ai/google/gemini-omni-1-1-flash" rel="noopener">Opper reseller listing with 1080p and 4K per-second rates</a></li>
</ul>
