---
id: "art-159"
title: "Grok Imagine Video: A Director's Analysis"
description: "Grok Imagine moved into the Grok chat on November 14. What changed, how many of its 14 references to lock, a prompt you can copy and what each shot costs."
pubDate: "2026-08-08"
updatedDate: "2026-11-28"
toolVersion: "2026-11"
category: "AI"
tags:
  - "Grok Imagine Video"
  - "AI Video"
  - "Filmmaking"
  - "Direction"
  - "Craft"
heroImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "6 min read"
---

<p><em>Updated November 28, 2026. Two things changed since the last update. Where you use it: on November 14 the Grok Imagine team announced that image and video creation now live inside the main Grok app, so the separate Imagine tab is gone and creation happens in Grok's Image and Video mode (<a href="https://teslanorth.com/2026/11/15/grok-imagine-image-video-one-app/" target="_blank" rel="noopener">TeslaNorth</a>, <a href="https://grokshelf.com/news/grok-imagine-now-in-grok-chat" target="_blank" rel="noopener">GrokShelf</a>). The model did not change: <a href="https://docs.x.ai/developers/model-capabilities/video/overview" target="_blank" rel="noopener">xAI's video overview</a>, read today, still lists grok-imagine-video-1.5 with up to 14 reference images, 3 voice references and clips of up to 15 seconds, at the same per-second prices quoted below. What the earlier notes left out: the same page now says 1.5 can pin the first frame, the last frame and up to four mid-video frames, and that the Lite model's 1080p is upscaled from 720p, not native. The two new sections near the end cover what happened to Grok Imagine and how to write a prompt for it. No generation was run for this update.</em></p>

<p><em>Updated October 28, 2026. The limit this article was written around has moved. xAI's own <a href="https://docs.x.ai/docs/guides/video-generations" target="_blank" rel="noopener">video generation guide</a> now lists Grok Imagine Video 1.5 with up to 14 reference images, 3 voice references, lip-synced speech and clips of up to 15 seconds. Those belong to different modes, though: <a href="https://docs.x.ai/developers/model-capabilities/video/reference-to-video" target="_blank" rel="noopener">reference to video</a> tops out at 720p, and the native 1080p in <a href="https://docs.x.ai/developers/model-capabilities/video/overview" target="_blank" rel="noopener">xAI's overview</a> applies to text to video and image to video, so you cannot have 14 references and 1080p in one generation. The seven-reference figure below was the August state, and some third-party integrations still document it: the <a href="https://vercel.com/ai-gateway/models/grok-imagine-video-1.5/about" target="_blank" rel="noopener">Vercel AI Gateway</a> page for the same model still says one to seven. So the ceiling depends on where you call the model. The argument did not move. It got stronger: twice the locks is twice the chance to direct nothing. This is a documentary analysis of the published specs, not a hands-on test.</em></p>

<p>On August 1, 2026, xAI updated Grok Imagine Video 1.5 with a feature that several AI coverage outlets called a breakthrough in character consistency: up to seven image references per generation, each one locking a different visual element into the shot. A face, a location, an object, a lighting style. Seven separate locks, all active at once. The update also added native 1080p output and voice cloning tied to character identity, and opened access across SuperGrok subscribers and the xAI API.</p>

<p>The coverage was enthusiastic. Most of it described what the feature does. I want to describe what it means, specifically for anyone who has spent time inside a production before any AI was involved.</p>

<h2>What "reference" means in production</h2>

<p>When I was working on commercial spots, reference was a negotiation tool disguised as an image. You pulled a frame from a Kubrick film, or a shot from a Nespresso campaign, or a portrait you tore out of a magazine, and you put it in front of the director of photography and said: "This kind of light." That was not an instruction. It was the beginning of a conversation. The DP would look at it, nod, ask a question, push back, suggest something better. Half the time the original reference got discarded before the first setup was lit. It had done its job just by starting the exchange.</p>

<p>Reference in that context is intentionally approximate. It points in a direction without locking you to it. The emotional tone of the image, not the technical specs. The sense of a relationship between the subject and the space around them, not a specific focal length.</p>

<p>What Grok Imagine Video calls a reference is technically the opposite. It is a lock. You give it an image of a face, and the model treats that face as a constraint it must satisfy. You give it an image of a location, and the model holds the location across the generation. Seven references means seven constraints that the model tries to honor simultaneously, every time it generates a frame. This is a significant engineering achievement, but the word "reference" carries very different weight here than it does on a set.</p>

<h2>Why that distinction matters for what the tool does</h2>

<p>The coverage describes this as a character consistency upgrade. That framing makes sense from the product side. If a model can hold a character's face across multiple shots, you do not need to regenerate until you get a lucky match. That problem is real, and the solution has obvious commercial value.</p>

<p>But from a director's perspective, what seven references introduce is something closer to scene architecture than to consistency. Consistency means the same person looks the same across shots. Scene architecture means you can describe the relationship between the person, the space, the object, and the light before the model generates any of them. Those are not the same task.</p>

<p>When you use one reference, you are holding a single element fixed while everything else floats. Two references start to define a relationship. Seven references begin to describe a scene in advance, constraining the model's interpretation before generation begins. That is a pre-production workflow, not a generation workflow, and it changes what the tool is useful for.</p>

<p>Practical things this makes possible that were harder before:</p>

<ul>
<li>A character appears in three different locations without losing their face between shots, without touching any external compositing tool.</li>
<li>A product holds its visual identity across a sequence where the setting and action change, which is exactly what a brand commercial needs.</li>
<li>A location is established in one shot, then reused in a later shot as a background element without rebuilding the prompt from scratch each time.</li>
</ul>

<p>None of this is trivial. These were real friction points in AI video workflows. The seven-reference system addresses them directly, and the xAI API support means it can be integrated into pipelines without going through the consumer interface every time.</p>

<h2>What the tool still cannot do</h2>

<p>The limitation worth naming is exactly where the word "reference" diverges. When you lock seven elements into a generation, you are constraining the model's interpretation before you see what it would have done on its own. On a real set, the version you planned and the version that emerged from the location, the actor, and the light of that specific afternoon were often not the same, and the difference was frequently more interesting than the plan.</p>

<p>Locks remove that possibility. Seven locks remove it seven times over. The model cannot surprise you inside the frame you have constrained. It can only execute.</p>

<p>There is a version of filmmaking where that is exactly what you want. Commercial work, product content, anything where brand guidelines require that a specific visual stays fixed. In those contexts, seven references is a serious workflow improvement. But there is another version of filmmaking where the most interesting frame was the one nobody could have referenced in advance, because it had not existed yet. That version of the work is not what this feature is designed to help.</p>

<h2>The question nobody asked in the coverage</h2>

<p>Every article I read about this update explained how the multi-reference system works. None of them asked when you would choose not to use it.</p>

<p>AI video generation has spent two years getting better at holding things constant. That is a legitimate problem to solve, and the tools that have solved it are genuinely more useful than the ones that have not. But a tool that holds everything constant is a tool that removes the possibility of the unexpected. For some work, that is the goal. For other work, it is a creative ceiling.</p>

<p>The useful question is not whether the seven-reference system is impressive, it clearly is. The useful question is whether your project needs the thing it fixes. If your work requires a face to stay the same across ten shots, this feature saves you hours. If your work is the kind where you are still figuring out who the face belongs to, locking it into the model before generation begins solves a problem you do not have yet.</p>

<h2>Where this leaves the director</h2>

<p>The amplifier thesis that I return to when I think about AI tools is this: you feed a weak idea into a capable model and you get a capable version of a weak idea. You feed a strong idea into the same model and you get something worth showing people. Seven references does not change the thesis. It makes the capable version of your idea easier to produce at scale. The idea, the selection of which seven things to lock, and the judgment about when to unlock them, those are still yours.</p>

<p>That is not a small thing to hold onto. It is the whole job.</p>

<h2>So how many references should you lock?</h2>

<p>Here is the rule this article argues for, and it is not the one the feature list implies. Start at the bottom of this list and only climb when the shot forces you to.</p>

<ul>
<li><strong>One reference, the face.</strong> This is where most commercial work lives. Lock the person, let the model find the room. You will get options you did not think of, and one of them is usually better than your plan.</li>
<li><strong>Two, face and location.</strong> Use this when the space carries story weight and continuity across shots matters. This is the highest setting I reach for on most jobs.</li>
<li><strong>Three, add the object.</strong> The product, the prop, the thing the ad is about. Beyond this point you are no longer directing, you are assembling.</li>
<li><strong>Five to seven.</strong> Reserve these for the shot you have already failed to get twice, where you know exactly what has to be in frame and you have stopped wanting to be surprised. That is a real situation and it happens. It is just not the normal one.</li>
<li><strong>Eight to fourteen.</strong> The new ceiling. At this point the references are a storyboard, not a direction. If you need this many, the problem is usually the shot design, and splitting it into two shots is cheaper than one overloaded generation.</li>
</ul>

<p>The feature is genuinely well built and I am not telling you to avoid it. I am telling you that the number of locks is a creative decision, not a quality setting, and the interface will not tell you that. Reaching for seven every time is the same instinct as lighting every corner of a set because you have the lamps.</p>

<h2>How to use Grok Imagine 1.5 to make a film scene, step by step</h2>

<p>The most searched question about the tool is how to make a film with it, not how to make a clip. Those are different jobs. Here is the order that keeps the references working for the scene instead of against it.</p>

<ol>
<li><strong>Write the scene before you open the tool.</strong> One line per shot: who, where, what changes. If you cannot say what changes, the shot does not need to exist.</li>
<li><strong>Lock the face once and reuse that exact file.</strong> The same reference image in every shot of the scene. A new photo of the same actor is a new constraint, and the model treats it that way.</li>
<li><strong>Add the location only for shots where the space carries story.</strong> Wide and establishing shots, yes. Close-ups, usually no.</li>
<li><strong>Use the voice reference for every line of the same character.</strong> xAI lists up to three voice references per generation, which is enough for a two-hander with room for one more voice. These are preset voices from its public catalog, chosen by <code>voice_id</code>, not a free upload for cloning: your own audio files are limited to trusted partners, on request.</li>
<li><strong>Generate short.</strong> Clips go up to 15 seconds. A scene is cut from shots, and a shot rarely needs more than five.</li>
<li><strong>Prototype on Lite, finish on the full model.</strong> Price depends on resolution. In xAI's <a href="https://docs.x.ai/developers/model-capabilities/video/overview#capabilities-and-specifications" target="_blank" rel="noopener">capabilities and pricing table</a>, grok-imagine-video-1.5 costs $0.08 per second at 480p, $0.14 at 720p and $0.25 at 1080p; grok-imagine-video-1.5-lite costs $0.02 at 480p, $0.03 at 720p and $0.14 at 1080p. A ten-second Lite test at 480p is $0.20; the same ten seconds on the full model at 720p, the ceiling for reference to video, is $1.40. Testing framing on the cheaper model and paying for the final take is the same logic as rehearsing before you roll. One limit: Lite does not support reference to video, so the test can only check framing and motion from text or an image. The shot with your references has to run on the full model.</li>
<li><strong>Cut it outside.</strong> The generation is raw material. The scene happens in the edit.</li>
</ol>

<p>Consumer access goes through Grok's paid plans, and the plan that includes video changes often, so check <a href="https://grok.com/plans" target="_blank" rel="noopener">the current plans page</a> before you count on a free tier.</p>

<h2>What the Odyssey episode says about this</h2>

<p>On October 23, 2026, Grok Imagine's account released the first episode of an AI-generated Odyssey, about seven minutes long, credited to Wonder Studios and director Dev Walker, after Elon Musk promised a full-length film by the end of the year. Coverage from <a href="https://au.variety.com/2026/film/news/elon-musks-grok-ai-generated-odyssey-41884/" target="_blank" rel="noopener">Variety</a> and <a href="https://cryptobriefing.com/xai-grok-ai-generated-odyssey-series/" target="_blank" rel="noopener">CryptoBriefing</a> covered the release, and much of the reaction praised the environments and criticized the performances. That is exactly the split this article predicts. References can hold a world steady. They cannot give a face something to feel. The team behind the episode made the creative choices, and those are what the reviews are about.</p>

<p>The current model, its reference behaviour and its pricing are documented on <a href="https://x.ai/news/grok-imagine-video-1-5-references" target="_blank" rel="noopener">xAI's own reference announcement</a>, and the API parameters are in the <a href="https://docs.x.ai/developers/model-capabilities/imagine" target="_blank" rel="noopener">Imagine API documentation</a>. Read the parameter list before you plan the shoot, not after.</p>

<h2>What has happened to Grok Imagine?</h2>

<p>Nothing was shut down. It moved. On November 14 the Grok Imagine team said image and video creation now live in Grok, and the dedicated Imagine tab was replaced by an Image and Video mode inside the main chat. If you open the app looking for the old tab and cannot find it, that is why. The model underneath is the same grok-imagine-video-1.5 described in this article, and the API was not touched: the model names, the 14 reference limit and the prices on <a href="https://docs.x.ai/developers/model-capabilities/video/overview" target="_blank" rel="noopener">xAI's video overview</a> are unchanged as of today.</p>

<p>Two things the announcement did not answer, so do not plan around them yet: whether your old Imagine gallery keeps every file, and whether the plan that includes video changes again. Download anything you need before you assume it is still there, and check <a href="https://grok.com/plans" target="_blank" rel="noopener">the plans page</a> before a job. Coverage also reported layoffs on the Imagine team the day before the announcement. That rests on a single report, so I am not treating it as a fact about the product.</p>

<h2>How do you prompt Grok Imagine video?</h2>

<p>The question people search most, after "is it free", is how to prompt it well. The answer follows from everything above: write one shot, with one thing that changes, and let the references carry what you already decided instead of describing it again in words. A reference and a sentence fighting over the same face is the most common way to get drift.</p>

<p>Here is the structure I would start from. Copy it, fill the brackets, and delete any line the shot does not need:</p>

<pre><code>Shot: [framing, e.g. medium close-up, eye level]
Subject: the person in reference 1. Do not describe the face.
Place: the location in reference 2. Only if the space matters to this shot.
Action: [one verb phrase with a start and an end, e.g. she puts the cup down and looks up]
Camera: [one move or none, e.g. slow push in]
Light: [one line, e.g. late afternoon window light from the left]
Sound: [the line of dialogue, or the one sound that matters]
Length: 5 seconds</code></pre>

<p>Three rules keep it working. Keep the action to a single change, because a shot with two events usually lands one of them badly. Use a pinned first or last frame when you already know exactly how the shot has to start or end, which xAI's docs now support on 1.5, instead of piling on another reference. And when a take drifts, remove a reference before you add words. The fewer constraints you give it, the clearer the one you care about gets.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Facts verified August 8, 2026. Core update (up to seven image references, voice cloning, native 1080p, broader availability) confirmed independently by: TechTimes (August 2, 2026, "Grok Imagine Video Update Adds 1080p, Voice Cloning, and Seven-Reference Scene Control"); CryptoBriefing ("Grok Imagine upgrades bring voice consistency, native 1080p video, and multi-reference support to xAI's creative toolkit"); TestingCatalog ("xAI adds character references and 1080p to Imagine Video 1.5"); AIBase News ("xAI upgrades Imagine Video 1.5: New Image and Voice Reference Features, and Native 1080p Video Generation"). Base model Imagine Video 1.5 launched June 2026; multi-reference/1080p rollout confirmed as August 1, 2026. Access via SuperGrok Heavy/Plus and xAI API (grok-imagine-video-1.5 model).</p>
<p>RECHECKED September 8, 2026. The seven-reference system, native 1080p and voice reference are still the current state and were reconfirmed against xAI's own reference page on this date. Since publication xAI has also shipped changes on the image side, not the video side: image editing now accepts up to five source images (was three), the quality parameter defaults to auto, and 21:9 and 5:2 aspect ratios were added. Nothing in the argument above has been superseded.</p>
<p>RECHECKED November 6, 2026. Resolution separated by mode, voice references described as presets, Lite limit added, against xAI's reference to video and video overview pages.</p>
<p>RECHECKED November 28, 2026. xAI video overview read on this date: grok-imagine-video-1.5 still lists up to 14 reference images, 3 voice references, clips up to 15 seconds, pinned first, last and up to four mid-video frames; Lite lists 1080p upscaled from 720p; per-second prices unchanged. Move of image and video creation into the main Grok app, announced November 14, per TeslaNorth (November 15) and GrokShelf (November 16). The reported Imagine team layoffs rest on one report and are not stated as fact.</p>
<p>RECHECKED October 28, 2026. xAI's video generation guide now lists up to 14 reference images and 3 voice references for grok-imagine-video-1.5 (was 7 image references in August); Vercel AI Gateway still documents one to seven for the same model. API prices from xAI's capabilities table, rechecked November 7, 2026, per second by resolution: 1.5 at $0.08 (480p), $0.14 (720p), $0.25 (1080p); 1.5 Lite at $0.02 (480p), $0.03 (720p), $0.14 (1080p). Odyssey episode of October 23 per Variety and CryptoBriefing. Consumer plan prices not restated because the plans page could not be read on this date.</p>
</section>
