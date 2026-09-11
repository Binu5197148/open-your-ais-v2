---
title: "Higgsfield Character Consistency: My Toninho Prompt Workflow"
description: "Build character references, review a scene frame and diagnose continuity errors using lessons from Toninho Sagatiba, with a free Seedance Lab prompt kit."
pubDate: "2026-09-10"
toolVersion: "2026-09"
category: "Filmmaking"
tags:
  - "Higgsfield"
  - "Seedance"
  - "Character Consistency"
  - "Creative Workflow"
heroImage: "https://openyourais.com/images/cases/toninho/bianchi-sheet.webp"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<p>In September 2026, I put the reference and prompt lessons from <em>A Saga de Toninho Sagatiba</em> into a skill called Seedance Lab. I had used Claude with Higgsfield to turn characters from my improvised WhatsApp recordings into scenes. Keeping the same person recognizable across those scenes required decisions I could inspect and repeat.</p>

<p>This tutorial is a small exercise based on that production. The images are actual development assets; the teaching prompt below is a new example. It is not a transcript of a successful generation, and I have not run a new video test for this article. The broader story, including the original voice performances, is in <a href="/blog/toninho-sagatiba-whatsapp-voices-ai-film/">the Toninho production account</a>.</p>

<p>Continuity is familiar work in filmmaking: a shirt, a hand holding an object, a person's position relative to a doorway. With generated footage, I need to describe those choices and retain the references that show them. Otherwise a correction can quietly change the shot I wanted.</p>

<h2>Start with one character and one shot</h2>

<p>For a first exercise, choose a short listening shot. Leave dialogue and complicated object handling for later. Write down who is present, where they sit, where they look and what changes during the shot. A person listening off camera gives you something useful to judge without asking the model to solve the entire film.</p>

<p>Bianchi's production sheet fixes a light-blue polo shirt, a beige cap, khaki trousers, brown shoes and a gold wristwatch. Its close portrait and front and back views make those choices visible. Compare the generated frame with the sheet instead of trying to remember whether the face feels approximately right.</p>

<figure><img src="/images/cases/toninho/bianchi-sheet.webp" alt="Bianchi's generated production sheet, with a portrait and front and back views in the same clothes." width="3840" height="2160" loading="lazy" decoding="async" /><figcaption>The original Bianchi sheet has three views. The newer Seedance Lab method proposes a more extensive sheet; that later recommendation should not be confused with how this particular asset was made.</figcaption></figure>

<p>Choose references that agree with one another. If one image shows different clothes, say which image controls the wardrobe, or prepare a corrected reference first. My production notes record a written description contradicting an image and producing another person. Adding more description without resolving that contradiction gave the model competing instructions.</p>

<h2>Connect the tool, then prepare the materials</h2>

<p>The connection and the skill have different jobs. The connection lets the agent reach Higgsfield; the skill helps organize what you ask it to do. Downloading a prompt file does not connect an account or supply generation credits.</p>

<p>Higgsfield's <a href="https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent">official connection guide</a> currently describes a custom connector for Claude web and Desktop, and a CLI route for Claude Code. Follow the instructions for the application you actually use. My original project account describes the MCP workflow; the later full Seedance Lab package also contains CLI helpers. They are different ways of reaching the platform.</p>

<section class="editorial-cta" id="try-higgsfield" aria-label="Try Higgsfield">
<p class="editorial-cta__eyebrow">MAKE YOUR OWN SCENE</p>
<h2>Try the platform I used for Toninho</h2>
<p>I used Higgsfield to develop characters and generate scenes for this project. If you want to try this workflow, explore the platform and its plans through my link.</p>
<p class="editorial-cta__actions"><a class="editorial-cta__button" href="https://higgsfield.ai?fpr=ulisses-2ed0b5" rel="sponsored noopener">Explore Higgsfield →</a></p>
<p class="editorial-cta__disclosure">Affiliate link: I may earn a commission if you purchase through this link. Your purchase can also help support Open Your AIs.</p>
</section>

<p>Once connected, ask the agent to inspect your character sheet and location reference and summarize their roles. Check that summary before asking for a generation. The model options, reference inputs and estimated cost should be confirmed for the selected mode. This exercise does not depend on a fixed price or a claimed maximum number of attachments.</p>

<h2>Approve the frame before animation</h2>

<p>The bar reference used in Toninho establishes a counter, tables and a bright opening behind the room. Those relationships matter when placing a person. A new image of a similar bar may move the doorway or replace the counter, leaving the next shot in a different room.</p>

<p>Use the existing location reference to prepare the intended scene frame. Inspect it at a useful size. Compare the face and clothing with the character sheet. Look at the hands and any objects near them. Decide whether the eye-line belongs to someone listening to another person or addressing the viewer.</p>

<p>The Toninho notes describe an unwanted look into the lens carrying into animation. That is a reason to correct the starting frame before spending on another moving shot. A prompt asking someone to look elsewhere cannot establish that the actual result obeyed.</p>

<p>Keep the intended composition while correcting identity. If the scene needs someone entering from a distance, replacing it with a close-up changes the scene. Better identity control is useful only if it preserves the directing decision.</p>

<h2>A prompt you can adapt</h2>

<p>This example is for a silent listening shot with an approved starting image. Replace the bracketed text and attach the corresponding materials through the selected mode's supported inputs. The instructions express a target; inspect the result to find out what held.</p>

<pre><code>Prepare one continuous listening shot.

References:
- Starting frame: [approved scene image].
- Character identity and wardrobe: [character sheet].
- Room layout: [location reference].

[Character] sits at [position], listening to someone off camera.
Keep the eye-line established in the starting frame.
The character breathes and makes one small head movement.
No dialogue is needed for this exercise.

Preserve the face, clothing and accessories in the character sheet.
Keep the furniture and doorway in the same positions.
Keep the camera at the approved height and shot size.
Do not introduce a cut, a zoom or a new prop.

Before generating, show me the selected mode, supported reference
inputs, duration and estimated cost. Wait for my approval.</code></pre>

<p>The first comparison should be simple: starting frame beside the result. Then scrub through the clip. A convincing first frame can hide a face or accessory changing later. Save a note describing the earliest visible failure, rather than a general verdict that the whole thing is bad.</p>

<h2>Diagnose before rewriting everything</h2>

<ul>
<li><strong>The wardrobe is wrong from the start:</strong> compare the source images and resolve conflicting clothes before changing the video prompt.</li>
<li><strong>The face changes during the shot:</strong> check whether the starting face is clear and whether the intended identity reference was actually attached.</li>
<li><strong>The room changes:</strong> compare the doorway and furniture against the location reference. Reuse the approved environment.</li>
<li><strong>An object changes hands:</strong> inspect its starting position and describe the intended action. Simplify the exercise if that action is unnecessary.</li>
<li><strong>The same defect returns:</strong> inspect the source asset at full size. A repeated prompt can keep reproducing a defect already present in the image.</li>
</ul>

<p>These are investigation steps drawn from the project and the skill, not guarantees about every Seedance generation. Change one relevant input and compare again. Keeping the previous version makes it possible to notice when a correction fixed one thing and damaged another.</p>

<p>When you add dialogue, listen to the actual output against the source recording. My notes describe transcription normalizing a mispronounced word into the expected spelling. A matching transcript alone does not establish that the performance survived.</p>

<h2>Download the exercise kit</h2>

<p>The <a href="/skills/seedance-lab-starter.zip" download>free Seedance Lab starter kit</a> contains a short skill, the teaching prompt and a review checklist. It is an English teaching edition adapted from my production method. It excludes the full package's generation scripts and the other authors' skills. Reading it or asking an agent to draft a prompt does not launch a generation.</p>

<p>Unzip it, open the README and give the SKILL.md file to your agent with your own references. Start by asking for a proposed frame and a list of unresolved choices. The useful output of this first exercise is one shot you can explain: which references it used, what failed, and why you accepted the version you kept.</p>
