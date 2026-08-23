---
id: "art-169"
title: "LTX 2.5 Multi-Shot Means the Model Is Making Your Cut"
description: "LTX 2.5 shipped open weights on August 11, 2026, and by this week the ComfyUI workflows had caught up. Everyone is benchmarking VRAM and physics. Almost nobody is saying the obvious thing: native multi-shot hands the edit point to the model, and the edit point is where a film means what it means. A director and editor on what to switch off."
pubDate: "2026-08-21"
toolVersion: "2026-08"
category: "AI"
tags:
  - "LTX 2.5"
  - "ComfyUI"
  - "AI Video"
  - "Editing"
  - "Directing"
  - "Craft"
heroImage: "https://images.unsplash.com/photo-1583482183620-f692113aafc3?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw0fHx0aGVhdGVyJTIwc3RhZ2UlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDF8MHx8fDE3ODcyMjQ4ODF8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<p>LTX 2.5 landed on August 11, 2026 with open weights, and the thing that made it interesting took another week to show up. Not the model. The workflows. On August 19 and 20 the ComfyUI community published the all-in-one graphs and the low-VRAM builds, which is the moment a research release turns into something a working person can actually open on a Tuesday.</p>

<p>So I read the coverage that came with it. Generation speed on GB200s. Physics tests against MiniMax H3. Can it run on 8GB. Native 4K at 50fps. All real, all measurable, all beside the point.</p>

<p>Buried in the feature list is a line that should have stopped the room, and it did not. One generation produces multiple connected shots, holding character, environment, lighting, voice and style across the cuts.</p>

<p>Across the cuts. The model is making your cut.</p>

<h2>What LTX 2.5 actually shipped</h2>

<p>Set the argument aside for a second and look at the release honestly, because it is a strong one.</p>

<p>Open weights, free to use commercially for any company under 10 million dollars in annual recurring revenue. A 10 second 720p clip in 6.8 seconds on two GB200s, or about 24 seconds through the API. Native resolutions up to 4K HDR. Synchronised audio and picture in the same pass. Two open variants, a dev model and a faster distilled one. Day one support in ComfyUI through a launch partnership, and durations from 2 to 20 seconds with an experimental mode that predicts the length from your prompt.</p>

<p>That is not a demo. That is a production tool with a licence a small company can actually sign. I run ComfyUI and Comfy Cloud in my pipeline, so this is not an abstract release to me. It lands in a tool I already have open.</p>

<p>And native multi-shot is the headline feature. One prompt, several connected shots, consistency held across the transitions. Wide shot, then close-up, and the same actor comes back with the same voice under the same light.</p>

<h2>Why is native multi-shot a directing problem?</h2>

<p>Because a cut is not a transition. A cut is an argument.</p>

<p>I have cut things. Not as a hobby, as the job. And the single most consequential decision in a sequence is not which lens or which take. It is where you leave one image and arrive at the next, and how long you stayed. That decision is what tells the audience what the scene is about. Stay two seconds longer on a face and the scene is about doubt. Leave two seconds early and it is about avoidance. Same footage. Opposite film.</p>

<p>Tarkovsky called it sculpting in time and people quote that like it is poetry. It is not poetry. It is a job description. The material you are shaping is duration, and the chisel is the cut.</p>

<p>Native multi-shot generation takes that decision and resolves it inside the model, from a text description, before you have seen a single frame of what you are cutting between. The model does not know that the second shot landed better than you expected and now deserves to breathe. It cannot know. It decided the rhythm at the prompt stage, which is the one stage where nobody yet knows what the footage is.</p>

<p>Continuity across a cut is a rendering achievement. Choosing the cut is authorship. The release describes both with the same word and the industry is reading it as one feature.</p>

<h2>The failure mode nobody is testing for</h2>

<p>Here is what worries me more than the principle.</p>

<p>Every test I can find is a quality test. Does the face hold. Does the light match. Does the voice stay the same person. Those are the questions you ask when you have decided the feature works and you are checking the finish.</p>

<p>Nobody is running the test that matters, which is: was that the right cut. And that test has no benchmark, because it is not a measurement. It is a judgement about a specific scene with a specific intention, and the only instrument for it is somebody who knows what the scene is for.</p>

<p>What will actually happen on jobs is not that directors get replaced. It is subtler and worse. The model will return a sequence that is technically clean, consistent, and defensible in a client review, and it will be marginally wrong in its rhythm in a way nobody can articulate. The client will not object. It cuts fine. And a thousand small wrongnesses will get approved because the alternative is explaining, out loud, to a room, why two seconds matter.</p>

<p>I have sat in that room. Advertising film is full of that room. The paperwork version of this problem is the one I wrote about when <a href="/blog/ai-video-watermark-rules-what-your-export-deletes/">the watermark rules went live</a>, and the answer there was the same as here: the tool solves its half, and the half that leaves the building with your name on it is still yours.</p>

<h2>What I would actually use it for</h2>

<p>Not finishing. Previz.</p>

<p>Multi-shot generation is genuinely excellent at a thing that is genuinely hard, which is showing a client the shape of a sequence before anyone commits money to it. A consistent character walking through four connected shots, with sound, in one pass, for essentially nothing, is a better pitch document than a boards deck has ever been. I would use it for that tomorrow and I would use it happily.</p>

<p>What I would not do is let the sequence it returns become the edit. Generate the shots. Take them into a timeline. Cut them yourself. You will find, most of the time, that you disagree with the model about where the sequence turns, and that disagreement is the only part of the process that was ever yours.</p>

<p>This is the same argument I made about the 30 second single pass, where <a href="/blog/how-to-use-seedance-2-5-director-prompting-method/">the writing is what carries the shot</a>. Longer generations and multi-shot generations both push the same work upstream, into the prompt, where it looks like efficiency. Sometimes it is. When the thing being moved upstream is the edit, it is not efficiency. It is a decision leaving the building.</p>

<h2>The boring part of the release is the valuable part</h2>

<p>Here is my contrarian read, and it is not the one the benchmarks invite.</p>

<p>The most important thing in LTX 2.5 is not multi-shot. It is the raw pretrained foundation checkpoint shipped alongside the cinematic model, and the licence that lets a small company use the whole thing commercially for free.</p>

<p>Open weights plus a fine-tuning checkpoint means a production company can train the model on its own material and get a look that belongs to it. Not a preset. Not a style prompt that six thousand other people are typing this week. An actual house look, derived from work you already own.</p>

<p>That is the first thing in two years of AI video that points away from homogenisation instead of towards it. Everyone worried that these tools would make everything look the same, and they were right, because everyone was renting the same model through the same interface with the same defaults. A fine-tunable open checkpoint is the exit from that, and it arrived with almost no coverage because it does not produce a good side-by-side thumbnail.</p>

<p>The resolution race gets the headlines. I wrote about that when <a href="/blog/seedance-2-5-1080p-what-the-resolution-upgrade-costs/">1080p arrived with a shorter clip attached</a>, and the pattern repeats here. Pixels are legible on a spec sheet. Authorship is not.</p>

<p>So take the open weights. Take the licence. Take the previz. Look hard at the fine-tuning checkpoint, because that is where a distinctive look is going to come from for the next year.</p>

<p>And when the model hands you four shots already cut together, treat that as a first assembly from an assistant who has never seen the film. Which is what it is. Assemblies are useful. They are just not the movie, and the difference between them has always been somebody deciding where to cut.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Facts verified August 21, 2026 against two or more independent sources per claim.</p>
<ol>
<li>LTX-2.5 released August 11, 2026 with open weights: datanorth.ai news item "LTX releases LTX-2.5: Open weights video world model", VentureBeat ("LTX-2.5 can generate a 10-second AI video from an image in just 6.8 seconds on Nvidia superchips and it's open weights"), and blog.comfy.org "LTX-2.5 is now available in ComfyUI".</li>
<li>Speed: 10-second 720p clip in 6.8 seconds on two NVIDIA GB200 GPUs self-hosted, 23.7 seconds via API: datanorth.ai, corroborated by the VentureBeat headline figure.</li>
<li>Native multi-shot: one generation renders a full sequence as a single output rather than stitching separate clips, holding character, environment, lighting, voice and style across the cuts: datanorth.ai and blog.comfy.org (independent).</li>
<li>Licence: free for organisations under USD 10 million annual recurring revenue, larger companies negotiate separately, permissive with no mandatory branding: datanorth.ai.</li>
<li>Raw pretrained foundation checkpoint ships alongside the cinematic model for fine-tuning on domain-specific data: datanorth.ai, corroborated by VentureBeat coverage and search-result summaries of ltx.io.</li>
<li>Day-one ComfyUI support through a launch partnership; two open-weight variants (LTX-2.5 dev and LTX-2.5 distilled); synchronised audio and video; native 4K up to 50fps; durations from 2 to 20 seconds with an experimental auto-duration feature: blog.comfy.org, with resolution tiers (720p, 1080p, 2K, 4K HDR) corroborated by datanorth.ai.</li>
<li>Community ecosystem activity in the days after release, including ComfyUI all-in-one and low-VRAM workflows published August 19 and August 20, 2026: vidIQ trending-video data pulled 2026-08-21 (FutuTek, "How to Use the LTX 2.5 All-In-One Workflow in ComfyUI", published 2026-08-20; Tensor Alchemist, "LTX 2.5 + Director 2.0 on 8GB VRAM", published 2026-08-19). Parameter count deliberately omitted: only one source stated a figure and it could not be independently confirmed. No claim is made here about hands-on benchmark results.</li>
</ol>
</section>
