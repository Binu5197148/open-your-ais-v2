---
id: "art-077"
title: "How to Use Midjourney Like a Pro (V8.2 Guide)"
description: "Midjourney V8.2 is still the default and Niji 8 brings back consistent characters with a two-image edit. A 7-step pro routine, and what V7 got right."
pubDate: "2026-03-15"
updatedDate: "2026-11-26"
toolVersion: "2026-11"
category: "AI"
tags:
  - "Workflow"
  - "Midjourney"
  - "AI Image"
  - "V7"
  - "Creative Tools"
  - "Production Workflow"
heroImage: "https://images.unsplash.com/photo-1611915272607-81bbdbd2ad77?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwyN3x8c2hhZG93JTIwbGlnaHQlMjBwb3J0cmFpdHxlbnwxfDB8fHwxNzc2NzI0MjY3fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "8 min read"
---

<p><em>Updated September 3, 2026: this review was written in March 2026, when V7 was the current Midjourney model. It no longer is. V8 arrived as an alpha on March 17, 2026, two days after this was published, and V8.2 shipped on July 24, 2026. Read what follows as a record of what V7 did, not as a description of the model you get when you open Midjourney today. The current model list is in the <a href="https://docs.midjourney.com/hc/en-us/articles/32199405667853-Version" target="_blank" rel="noopener">official version documentation</a>.</em></p>

<p><em>Updated October 22, 2026: V8.2 is still the default. The newest change is a test, not a release. On October 8 Midjourney started trying a "Rerun (Thinking)" button on its alpha site, which regenerates a finished job with more reasoning to fix prompt accuracy, typography and coherence. Midjourney says it might ship it broadly or might not, so treat it as a preview (<a href="https://updates.midjourney.com/testing-thinking-mode/" target="_blank" rel="noopener">Midjourney update, October 8</a>). The video section below was also corrected on this date.</em></p>

<p><em>Updated November 26, 2026: V8.2 is still the default Midjourney model, with no newer main version announced. The news this month is on the anime side. On November 24 Midjourney and Spellbrush released <a href="https://nijijourney.com/blog/niji-8" target="_blank" rel="noopener">Niji 8</a>, which brings back character consistency through an edit feature that replaces the old cref parameter, and adds HD output (also reported by <a href="https://emergent.sh/news/midjourney-niji-v8-launches-built-anime" target="_blank" rel="noopener">Emergent</a>). A new section below shows how that edit feature is meant to be used. No public update on the October Thinking Mode test was found as of today.</em></p>

<h2>The Mixed Reviews Are Telling</h2>
<p>Midjourney V7 launched and immediately generated something unusual for a major model release: mixed reviews. Not uniformly bad, not uniformly good. Split.</p>
<p>That split is more informative than a clear verdict in either direction, and it points to something real about how the model changed and who those changes serve.</p>

<h2>Personalization by Default: What It Does to Your Output</h2>
<p>The biggest structural change in V7 is that personalization is on by default. Midjourney now shapes output based on your rating history: the images you have ranked and the aesthetic preferences you have implicitly expressed through your usage.</p>
<p>For users who have been on the platform long enough to build a meaningful rating history, this makes the model more responsive to their specific visual sensibility. Output drifts toward what you have historically preferred rather than the platform's generic aesthetic baseline.</p>
<p>For new users or users who haven't rated much, personalization has nothing to work with and the default behavior can feel inconsistent. This explains part of the split in reviews: experienced users with established histories got noticeably better results; newer users got results that varied more than expected.</p>
<p>The setup takes about five minutes and is worth doing before evaluating the model's quality.</p>

<h2>Draft Mode: The Feature That Changes the Workflow Math</h2>
<p>Draft Mode is the update with the most immediate practical impact. Half the credit cost, ten times the render speed. You get lower-resolution output suitable for concept exploration and iteration, with the option to upscale selects at full cost.</p>
<p>The workflow implication is significant. Using Draft Mode for the exploration phase of any project (generating multiple concept directions, testing compositions, iterating on a visual idea) and only spending full credits on final selects dramatically reduces the cost of creative development.</p>
<p>For anyone using Midjourney professionally and managing budget against volume of output, this is a material improvement. The quality gap between Draft and full render is real but manageable for the use cases where Draft makes sense: internal concepting, client-facing mood boards, reference generation for AI video prompts.</p>

<h2>Voice Prompting: Convenient, and Nothing More</h2>
<p>Draft Mode includes voice input: you speak your prompt and the system interprets it. The implementation works. Whether it is meaningfully better than typing depends on your workflow context.</p>
<p>For quick ideation where you want to verbalize thoughts without interrupting your thinking to type, it is useful. For prompts that require specific technical language (focal length references, lighting terminology, style precision), typing still gives you more control over exact wording.</p>
<p>The voice feature will likely matter more once Midjourney develops the conversational iteration capability it has hinted at, where you can refine through dialogue rather than regeneration cycles.</p>

<h2>The Video V1 Model: What It Does and What It Doesn't</h2>
<!-- Correction 2026-10-22: the earlier text said six images produce about 60 seconds of video in roughly three hours. Midjourney's own launch post describes four 5-second clips per job, extendable in roughly 4-second steps up to four times, at about 8x the cost of an image job. Corrected below. -->
<p>Midjourney launched its V1 Video Model in June 2025, allowing users to animate still images into short clips. Each job gives you four clips of five seconds. You can extend a clip about four seconds at a time, up to four times, which tops out around 21 seconds. Midjourney priced a video job at roughly eight times an image job (<a href="https://updates.midjourney.com/introducing-our-v1-video-model/" target="_blank" rel="noopener">Midjourney launch post</a>).</p>
<p>The limiting factor is not speed. It is control. You animate a still with a short motion prompt, and the still is your starting frame. You can also set where the clip ends: Midjourney's <a href="https://docs.midjourney.com/hc/en-us/articles/37460773864589-Video#looping--end-frames" target="_blank" rel="noopener">video documentation</a> describes Starting Frame and Ending Frame, the <code>--end</code> parameter with an image URL, and <code>--loop</code> for a clip that returns to its first frame (<a href="https://updates.midjourney.com/looping-and-end-frame-for-video-video-in-the-discord-bot/" target="_blank" rel="noopener">update post</a>). What the documentation does not describe is a motion reference you can copy, or a way to hold a character across a cut. For mood, motion reference and a shot with a fixed start and end, that is enough. For a move that has to repeat exactly, or a character that has to survive several shots, it is not.</p>
<p>The output quality for the video feature is solid for concept visualization and mood reference. In my own work it does not replace Kling or Seedance for production shots. But Midjourney was never primarily a video tool. The image quality advantage of the platform is what makes it useful, and the video feature extends that into motion reference.</p>

<h2>Where V7 Fits in the Current Image Generation Landscape</h2>
<p>Midjourney V7 remains the standard for photorealistic image generation with specific aesthetic sensibility. The coherence improvements on hands, objects, and human anatomy are genuine. These have been persistent weak points in AI image generation and V7 handles them better than previous versions.</p>
<p>For visual development work in commercial production (generating reference images, mood boards, client-facing concept frames, lighting studies), V7 with Draft Mode active is the most cost-efficient workflow I have used for this purpose.</p>
<p>The mixed reviews are largely from users expecting a dramatic quality leap from V6. The improvement is more about workflow efficiency (Draft Mode, personalization) than raw quality ceiling. For power users who integrate Midjourney into a broader production workflow, these efficiency gains matter. For casual users expecting to be immediately blown away, the upgrade may feel underwhelming.</p>

<h2>What I would skip in V7</h2>
<p>The video model. Not because it is bad. The output is decent. Because past the first and last frame, it gives a director little to steer the motion with. Start and end frames exist here too, so that is not the reason. The reason is the move. If the shot depends on a specific camera or body movement, generate the still in Midjourney and animate it in Kling, whose Motion Control repeats a reference move, or in Seedance for multi-shot consistency.</p>
<p>The V7 video feature is for people who want one tool that does everything. The reality of production is that the best workflow is rarely one tool. Use Midjourney for what it is best at (image quality with a specific aesthetic) and let purpose-built video models handle the motion.</p>

<h2>How do you keep a consistent character in Midjourney?</h2>
<p>For years the answer was a parameter: cref in Niji 6, then image and style references on the main models. The newest answer, in Niji 8, is an edit step instead. Midjourney's own launch post describes it this way: you finish a generation, press the quick edit button in the bottom right corner, attach more images, and tell the model in words what to do with them. The post's example is a character sheet plus a background, combined with an instruction like putting the girl from the first image onto a boat from the second.</p>
<p>That is the same discipline any director already uses on set, and it works the same way whatever the model:</p>
<ol>
<li><strong>Make the sheet first.</strong> One clean image of the character, front facing, plain background, sharp. The Niji 8 post warns that blurry or pixelated input degrades the result, so the sheet is not a draft.</li>
<li><strong>Make the place separately.</strong> Generate the background as its own image, with no character in it.</li>
<li><strong>Combine with two images, not one.</strong> The post's author recommends naming both: take the character from image 1 and put it into image 2, then the action. One image works for small touch-ups, two gives more control over style and quality.</li>
<li><strong>Write the action as a stage direction.</strong> What the character is doing, where they look, what is in their hands. Leave the description of the face out, because the sheet already carries it.</li>
<li><strong>Keep the approved frames.</strong> Every frame you approve becomes the next reference. That is how a look survives twenty shots.</li>
</ol>
<p>Two limits matter before a paid job. Niji 8 is an anime and illustration model, so for photographic work you are still on V8.2. And Niji 8 deliberately gives more variety for the same words than Niji 7 did, so typing the same description twice will not give you the same person. The sheet does that work, not the prompt. For the same method applied to video, see <a href="/blog/higgsfield-character-consistency-toninho-workflow/">how to stop character drift in Higgsfield</a>.</p>

<h2>How do you use Midjourney today?</h2>
<p>If you are opening Midjourney for the first time in November 2026, this is the order I would follow. It is a working routine, not a feature tour.</p>
<ol>
<li><strong>Use the web app, not Discord.</strong> Everything below lives at <a href="https://www.midjourney.com" target="_blank" rel="noopener">midjourney.com</a>. Discord still works, but the editor, moodboards and settings are easier to reach on the site.</li>
<li><strong>Check the version.</strong> In settings, confirm the model is V8.2, the default since July 24, 2026. Older articles, this one included, describe V7 behaviour.</li>
<li><strong>Rate before you judge.</strong> Personalization learns from images you rank. Spend the first session rating, then generate. Otherwise you are judging the generic baseline.</li>
<li><strong>Explore in Draft, finish in full.</strong> Run concept directions in Draft Mode, pick the frame that solves the brief, and only then spend full renders on it.</li>
<li><strong>Write the shot, not the adjective.</strong> Lens, camera height, light direction, what the subject is doing. "Cinematic" tells the model nothing a 35mm lens at eye level does not say better.</li>
<li><strong>Lock the look with references.</strong> Once a frame is approved, use it as an image or style reference for the next ones instead of rewriting the description every time.</li>
<li><strong>Send motion elsewhere.</strong> Midjourney is the still. If the job needs a shot that moves on cue, take the still into a video model built for control.</li>
</ol>
<p>The one thing no setting fixes is taste. Midjourney will give you a beautiful frame for a weak idea as fast as for a strong one. Deciding which is which is still the job.</p>

<p><em>Sources: <a href="https://venturebeat.com/ai/midjourney-v7-launches-with-voice-prompting-and-faster-draft-mode-why-is-it-getting-mixed-reviews" target="_blank" rel="noopener">VentureBeat: Midjourney V7 launches with voice prompting and Draft Mode</a> | <a href="https://updates.midjourney.com/v7-alpha/" target="_blank" rel="noopener">Midjourney: V7 Alpha release notes</a> | <a href="https://nijijourney.com/blog/niji-8" target="_blank" rel="noopener">niji journey: Welcome to Niji 8</a></em></p>
