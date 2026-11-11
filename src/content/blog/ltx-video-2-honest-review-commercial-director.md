---
id: "art-105"
title: "LTX 2.5 vs LTX 2: What Changed?"
description: "LTX Video 2 was the open weights video model of early 2026. What LTX 2.5 changed, how to download and run it locally, and where open video still breaks."
pubDate: "2026-03-28"
updatedDate: "2026-11-11"
toolVersion: "2026-11"
category: "AI"
tags:
  - "LTX-Video"
  - "AI Video"
  - "Video Production"
  - "Commercial Production"
  - "Filmmaking"
  - "AI Tools Review"
heroImage: "https://images.unsplash.com/photo-1570459725314-e47a1bdb4764?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwzfHxmaWxtJTIwZGlyZWN0b3IlMjBvbiUyMHNldHxlbnwxfDB8fHwxNzc2NzI0MjU2fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "10 min read"
---

<p><em>Updated November 11, 2026. This page was written in March about LTX Video 2 and now compares it with the current model, LTX 2.5. It is an analysis built from Lightricks' model cards, licence and release coverage, not a hands-on benchmark. The March version described a week of tests and a side by side with Kling 2.1 that are not documented anywhere, so those passages were rewritten as prompts and checks you can run yourself. The per clip prices, the 5 second ceiling and the access notes about Kling and Sora were the March picture and have been removed.</em></p>

<h2>Why LTX still deserves your attention</h2>
<p>Most AI video is rented. You pay per second, the model lives on someone else's server, and the day the company changes its mind your pipeline changes with it. OpenAI removed the Sora API on September 24, 2026, which I covered in <a href="/blog/sora-api-shutdown-platform-dependency-filmmakers/">the piece on renting a platform</a>. Google retired the Veo 3 endpoints in its Gemini API on June 30.</p>
<p>LTX is the other kind of tool. Lightricks, the company behind Facetune, publishes the weights. You download them, you run them on your own machine, and nobody can switch them off. That was the reason to pay attention in March. It is a better reason now.</p>

<h2>What was LTX Video 2?</h2>
<p>LTX-2 was announced by Lightricks in October 2025, and <a href="https://www.opensourceforu.com/2026/01/ltx-2-from-lightricks-delivers-native-4k-audio-video-with-fully-open-weights/" target="_blank" rel="noopener">the full weights followed in January 2026</a>. It was the release that put native 4K and synchronized audio into a video model you could download. The research behind it is public too, in the paper <a href="https://huggingface.co/papers/2601.03233" target="_blank" rel="noopener">"LTX-2: Efficient Joint Audio-Visual Foundation Model"</a>.</p>
<p>In March 2026 came LTX 2.3, an interim version with a retrained decoder and native portrait. I went through that one in <a href="/blog/ltx-video-23-4k-audio-one-pass-what-changed-overnight/">the LTX 2.3 article</a>, including the cases where a working 2.3 pipeline is still the right thing to keep.</p>

<h2>LTX 2.5 vs LTX 2: what changed?</h2>
<p>LTX 2.5 arrived on August 11, 2026, according to <a href="https://datanorth.ai/news/ltx-releases-ltx-2-5-open-weights-video-world-model" target="_blank" rel="noopener">DataNorth's release report</a>. On the date of this update, the <a href="https://huggingface.co/Lightricks" target="_blank" rel="noopener">Lightricks page on Hugging Face</a> shows nothing newer, so 2.5 is the current state. Read against LTX 2, five things are different:</p>
<ul>
<li><strong>Several shots in one pass.</strong> The model card lists "Native multishot generation", holding character, environment and style across cuts. LTX 2 gave you one shot per generation and you built the sequence in the edit. I have an opinion about letting the model choose the cut, and it is in <a href="/blog/ltx-2-5-multi-shot-the-model-is-making-your-cut/">the multi-shot piece</a>.</li>
<li><strong>A new decoder.</strong> The stage that turns the model's internal representation back into pixels now comes in two versions: a higher quality diffusion decoder, which the card calls DiffVAE, and a faster conventional one. LTX 2 had a reputation for soft output, and this is the part of the pipeline that answers it.</li>
<li><strong>Speed, on the right hardware.</strong> <a href="https://venturebeat.com/technology/ltx-2-5-can-generate-a-10-second-ai-video-from-an-image-in-just-6-8-seconds-on-nvidia-superchips-and-its-open-weights" target="_blank" rel="noopener">VentureBeat reported</a> a 10 second clip from an image in 6.8 seconds on NVIDIA's datacenter chips. That is not your desktop. Treat it as a ceiling, not a promise.</li>
<li><strong>A duration head.</strong> If you leave the frame count out, a small extra model predicts how long the clip should be. In LTX 2 you always chose.</li>
<li><strong>A licence you can read in one sitting.</strong> The LTX-2.x Community License allows commercial and production use at no cost for organizations under 10 million dollars in annual revenue, counted across the whole entity. Above that you need a paid agreement, and the card warns that transferring fine-tunes may require one too.</li>
</ul>
<p>What did not change is the reason the line exists. Picture and sound still come out of the same pass, and the weights are still yours to keep.</p>

<h2>How to download LTX 2.5 and run it locally</h2>
<p>This is the question people type most about this model, so here is the path in order, taken from the official model card:</p>
<ol>
<li><strong>Open the model page and accept the gate.</strong> The weights live at <a href="https://huggingface.co/Lightricks/LTX-2.5" target="_blank" rel="noopener">huggingface.co/Lightricks/LTX-2.5</a>. The download is gated: you log in and agree to share your Hugging Face information before the files unlock.</li>
<li><strong>Read the licence before any client work.</strong> If the company you are delivering for is above the revenue line, the free terms do not cover the job.</li>
<li><strong>Pick the transformer your machine can carry.</strong> The distilled model runs a fixed 8 step schedule and is the fast one. The dev model is the full, trainable one. There are int8 builds for ComfyUI that are lighter on memory, and an NVFP4 build of the distilled model for NVIDIA's Blackwell cards.</li>
<li><strong>Pick your route.</strong> ComfyUI has official workflow templates. If you prefer code, the <code>ltx-pipelines</code> package is in the <a href="https://github.com/Lightricks/LTX-2" target="_blank" rel="noopener">LTX-2 GitHub repository</a>. There is also a Diffusers version, which at the time of the card needs Diffusers installed from its main branch.</li>
<li><strong>Respect the two rules that break first renders.</strong> The frame count has to be a multiple of 8 plus 1, so 121 works and 120 does not. Width and height have to be divisible by 32.</li>
<li><strong>Short on memory?</strong> The card gives no minimum VRAM figure. It lists the options instead: fp8 casting with CPU offload in the Python pipeline, model offload and VAE tiling in Diffusers. The low memory workflows you see in video tutorials are community builds, and quality trades against memory.</li>
</ol>
<p>No machine for it? Lightricks keeps an API playground linked from the same model card, and the documentation is at <a href="https://docs.ltx.io" target="_blank" rel="noopener">docs.ltx.io</a>.</p>

<h2>Three prompts to run before you trust it</h2>
<p>A spec sheet tells you what a model can do. A brief tells you what it does to your work. These are three briefs of the kind a commercial director gets every month, written as prompts, with the thing to look at in each result.</p>
<h3>Test 1: product reveal</h3>
<p>Prompt: <em>"Product reveal shot: a sleek cosmetics bottle slowly rising from white surface, soft golden morning light from behind creating warm bokeh, shallow depth of field, clean white negative space, luxurious and minimal, slow motion, 9:16 vertical, cinematic"</em></p>
<p><strong>What to check:</strong> the label. Step through the clip frame by frame and watch the text on the bottle. Fine print and logos are where video models drift between frames. If the label holds, you have a hero shot. If it shifts, you have an insert for a social cutdown, and that is still worth having.</p>
<h3>Test 2: emotional human moment</h3>
<p>Prompt: <em>"Medium shot of woman gazing through rain-streaked window, warm amber interior light, cold blue exterior, reflection visible in glass, contemplative expression, handheld subtle movement, Terrence Malick visual language, film grain, 9:16"</em></p>
<p><strong>What to check:</strong> the face, and only the face. Composition and mood are the easy part. The question is whether the expression reads as a person thinking or as a model approximating one. If it reads mechanical, do what you would do with a weak performance on set: change the frame. Profile, back of the head, the reflection in the glass.</p>
<h3>Test 3: landscape and establishing shot</h3>
<p>Prompt: <em>"Aerial slow drift over ancient forest at dawn, morning mist in valleys, golden light breaking through trees, serene and vast, cinematic scale, slow motion, Roger Deakins lighting palette"</em></p>
<p><strong>What to check:</strong> whether the mist moves like weather or like a texture sliding over the image, and whether the light changes over the length of the shot. No faces, no text, no hands. This is the friendliest brief you can give any video model, so if it fails here, stop.</p>

<h2>Is LTX 2.5 ready for commercial work?</h2>
<p>It depends on the deliverable, not on the model. Three situations, in order of how comfortable I would be:</p>
<p><strong>Concept and mood.</strong> Moving references for a client presentation, before any real budget is committed. Clients respond better to motion than to static frames, and a model you run locally lets you make twenty variations without watching a credit counter.</p>
<p><strong>B-roll and atmosphere.</strong> Establishing shots, transitions, abstract elements around footage you shot or generated elsewhere. Test 3 is the audition for this.</p>
<p><strong>Faces, logos and complex action.</strong> Here you run Test 1 and Test 2 on your own brief first, and you believe the result over any review, this one included.</p>
<p>For the record, my own paid work runs mostly on Seedance inside Higgsfield. I am not telling you LTX is what I deliver with. I am telling you it is the one model in this category that nobody can take away from you, and that is worth an afternoon of your time.</p>
<p>The key is always the same: clear creative direction before prompting. The tool amplifies your vision. It cannot replace it.</p>

<h2>What this means for the next 12 months</h2>
<p>I have been through enough technology cycles to recognize the pattern. Open video today is roughly where affordable drone footage was in 2016: impressive for the price, limited in application, and pointing clearly at a near future where those limits move.</p>
<p>The people who learned drones early, who worked out what to ask of an operator and how to set a client's expectations, were the ones who benefited when the technology matured. The same thing is happening now, with one difference. LTX went from LTX 2 to 2.3 to 2.5 in about ten months. You do not rebuild every quarter. You keep the model name in one place in your pipeline and you run the three prompts above every time the number changes.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Verified November 11, 2026. LTX 2.5 capabilities, checkpoint variants, frame and resolution rules, low memory options and licence terms: the official model card at huggingface.co/Lightricks/LTX-2.5. Current version: the Lightricks organization page on Hugging Face, which lists no model newer than LTX 2.5 on this date. Release date of August 11, 2026: DataNorth. Speed figure: VentureBeat. LTX-2 announcement in October 2025 and open weights in January 2026: Open Source For You. Sora API removal on September 24, 2026 and Veo 3 retirement on June 30, 2026: OpenAI's and Google's deprecation pages, covered in the linked articles. No generation was run for this article.</p>
</section>
