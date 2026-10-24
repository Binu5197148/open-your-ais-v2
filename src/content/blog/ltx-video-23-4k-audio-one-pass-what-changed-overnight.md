---
id: "art-106"
title: "Why You Should Still Use LTX-Video 2.3"
description: "LTX 2.3 did not bring 4K or audio, LTX-2 did. What 2.3 changed, how to run it in ComfyUI, and when a working 2.3 pipeline beats jumping to LTX 2.5."
pubDate: "2026-03-28"
updatedDate: "2026-10-24"
toolVersion: "2026-10"
category: "AI"
tags:
  - "LTX-Video"
  - "AI Video"
  - "Video Production"
  - "fal.ai"
  - "Open Source AI"
  - "Filmmaking"
  - "AI Tools"
heroImage: "https://images.unsplash.com/photo-1640127249308-098702574176?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBoYWxsJTIwZW1wdHl8ZW58MXwwfHx8MTc3NjcyNDI2M3ww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "8 min read"
featured: true
---

<p><em>Corrected and updated October 24, 2026. The March version of this article said LTX 2.3 added native 4K and synchronized audio. That was wrong. Both arrived with LTX-2, announced by Lightricks in October 2025 with open weights in January 2026. The March text also described hands-on tests that are not documented anywhere, so those passages were removed. What follows is a documentary analysis of the release notes and model card, not a benchmark. LTX 2.5, released in August 2026, is now the current Lightricks model.</em></p>

<h2>What LTX 2.3 changed</h2>

<p>LTX 2.3 shipped in early March 2026 as a refinement of LTX-2, the 22 billion parameter model that generates picture and sound together. It is not a new capability tier. It is a better version of the same engine, and that is a more useful thing to know than a headline about 4K.</p>

<p>The documented changes, as reported at release by <a href="https://rits.shanghai.nyu.edu/ai/ltx-2-3-sharper-video-native-portrait-and-cleaner-audio-in-lightricks-latest-open-source-model/" target="_blank" rel="noopener">NYU Shanghai's research computing team</a> and <a href="https://www.vp-land.com/stories/lightricks-releases-ltx-2-3-open-source-video-model-with-sharper-detail-and-native-vertical-format" target="_blank" rel="noopener">VP Land</a>:</p>

<ul>
<li><strong>A rebuilt VAE.</strong> The part that turns the model's internal representation back into pixels was retrained for sharper detail and cleaner edges. LTX-2 output had a reputation for looking soft.</li>
<li><strong>Native vertical video.</strong> 1080 by 1920, trained on portrait footage instead of cropped landscape. For anyone delivering to social, this is the change that matters most.</li>
<li><strong>A new vocoder.</strong> Fewer silence gaps, less noise, fewer random sounds, tighter alignment between what you see and what you hear.</li>
<li><strong>A better text connector.</strong> Prompts about timing, motion and expression are followed more faithfully.</li>
<li><strong>Less frozen image to video.</strong> Starting from a still produces fewer slow pans and dead frames.</li>
</ul>

<p>Notice what is not on the list. Nothing in the release says faces in sustained close up were solved. That was the constraint on LTX-2, and nobody at Lightricks claimed 2.3 removed it. Plan around it the same way: environments, objects, atmosphere, motion. Not the hero close up where a face carries the scene.</p>

<h2>Why the 4K and audio story spread anyway</h2>

<p>Because most March coverage was written in a hurry by aggregators listing a dozen releases a week, and the March version of this page leaned on two of those lists. LTX-2 had been announced with native 4K, 50 frames per second and synchronized audio in <a href="https://www.opensourceforu.com/2025/10/lightricks-launches-ltx-2-to-democratise-4k-ai-video-production/" target="_blank" rel="noopener">October 2025</a>, and its full open weights landed in <a href="https://www.opensourceforu.com/2026/01/ltx-2-from-lightricks-delivers-native-4k-audio-video-with-fully-open-weights/" target="_blank" rel="noopener">January 2026</a>. By March the features were old, but the version number was new, and a new number reads like news.</p>

<p>This matters beyond one correction. When you read a release roundup, ask which version introduced a feature, not which version is being announced. The answer changes what you test. Here it means 2.3 is a quality pass on a pipeline you may already have, not a reason to rebuild.</p>

<p>The same week also brought Helios, from researchers at Peking University, ByteDance and Canva. The March text said it ran on a single consumer GPU. The <a href="https://arxiv.org/abs/2603.04379" target="_blank" rel="noopener">Helios paper</a> reports 19.5 frames per second on a single H100, which is a data center card. Different bet, different hardware.</p>

<h2>Why you should still use LTX-Video 2.3</h2>

<p>LTX 2.5 exists, and it is the better model on paper: native multi shot generation that keeps character, set and light across cuts, plus 4K HDR, according to the <a href="https://comfyui-wiki.com/en/news/2026-08-11-ltx-2-5-open-weights-release" target="_blank" rel="noopener">ComfyUI release note of August 11</a>. I wrote about what <a href="/blog/ltx-2-5-multi-shot-the-model-is-making-your-cut/">that multi shot feature does to your edit</a>. So why stay on 2.3?</p>

<p>Because a working pipeline is an asset, and swapping the model under it in the middle of a delivery is how jobs slip. There are three cases where staying is the sober choice.</p>

<ul>
<li><strong>Your workflow is already tuned to it.</strong> Node graphs, LoRAs and prompt habits built on 2.3 do not move to a new model for free. Finish the job on what you know, then test 2.5 on the next one.</li>
<li><strong>You deliver vertical.</strong> Native 9:16 was the headline of 2.3 and it is documented. If 9:16 is most of your output, confirm the 2.5 behavior on your own shots before you switch.</li>
<li><strong>You cut the shots yourself.</strong> If the editing decisions are yours and you only need single clean takes, a model that makes multi shot decisions for you is not an upgrade to your process. It is a different process.</li>
</ul>

<p>And one case where you should move: if you need the same character across several angles in one generation, that is exactly what 2.5 was built for, and 2.3 was not.</p>

<h2>How to run LTX 2.3 in ComfyUI</h2>

<p>The short version, with the official sources for each step:</p>

<ol>
<li><strong>Read the licence first.</strong> The <a href="https://huggingface.co/Lightricks/LTX-2.3" target="_blank" rel="noopener">model card on Hugging Face</a> tags the weights with the LTX-2 Community License Agreement and points to the terms in the <a href="https://github.com/Lightricks/LTX-2" target="_blank" rel="noopener">LTX-2 GitHub repository</a>. Some coverage calls it Apache 2.0. The model card is the source that binds you, so check it before any paid job.</li>
<li><strong>Get the ComfyUI repackage.</strong> Comfy-Org publishes the files arranged for ComfyUI at <a href="https://huggingface.co/Comfy-Org/ltx-2.3" target="_blank" rel="noopener">Comfy-Org/ltx-2.3</a>. Plan disk space: community reports put the full model around 47 GB.</li>
<li><strong>Add the text encoder.</strong> LTX 2.3 uses Gemma 3 12B IT as its text encoder, per the <a href="https://comfyui-wiki.com/en/models/ltx-video/ltx-2-3" target="_blank" rel="noopener">ComfyUI wiki entry</a>.</li>
<li><strong>Start with the distilled variant.</strong> It runs in 8 steps with CFG at 1. Use it to find the shot, then move to the full dev checkpoint for the final render if you need the extra quality. An FP8 version exists for cards with less memory.</li>
<li><strong>Install the Lightricks nodes.</strong> The <a href="https://github.com/Lightricks/ComfyUI-LTXVideo" target="_blank" rel="noopener">ComfyUI-LTXVideo repository</a> carries the custom nodes and example workflows.</li>
</ol>

<p>A practical rule for the prompt: describe what happens in time, in order, the way you would brief a camera operator. The improved connector in 2.3 is specifically about following timing and motion, so a prompt that says what happens first, then second, then third is using the model for what it got better at. My own <a href="/blog/cinematography-vocabulary-ai-video-prompts-director-guide/">cinematography vocabulary guide</a> has the shot language that works across these models.</p>

<h2>The pace is the story, but read the version numbers</h2>

<p>LTX went from LTX-2 to 2.3 to 2.5 in about ten months. That pace does not mean you rebuild every quarter. It means you keep the model name in one place in your pipeline, you read release notes for what changed rather than what is being announced, and you test the new version on a real shot before it touches a client delivery.</p>

<p>The March version of this page got that wrong in the most ordinary way: it took a version number as proof of a new feature. The correction is the lesson. The tool moved fast. The checking has to move with it.</p>

<p><em>Sources: <a href="https://huggingface.co/Lightricks/LTX-2.3" target="_blank" rel="noopener">Lightricks/LTX-2.3 model card</a> | <a href="https://rits.shanghai.nyu.edu/ai/ltx-2-3-sharper-video-native-portrait-and-cleaner-audio-in-lightricks-latest-open-source-model/" target="_blank" rel="noopener">NYU Shanghai RITS on LTX-2.3</a> | <a href="https://www.vp-land.com/stories/lightricks-releases-ltx-2-3-open-source-video-model-with-sharper-detail-and-native-vertical-format" target="_blank" rel="noopener">VP Land, March 7, 2026</a> | <a href="https://www.opensourceforu.com/2025/10/lightricks-launches-ltx-2-to-democratise-4k-ai-video-production/" target="_blank" rel="noopener">LTX-2 announcement coverage, October 2025</a> | <a href="https://arxiv.org/abs/2603.04379" target="_blank" rel="noopener">Helios paper, arXiv 2603.04379</a> | <a href="https://comfyui-wiki.com/en/news/2026-08-11-ltx-2-5-open-weights-release" target="_blank" rel="noopener">ComfyUI wiki, LTX-2.5 release</a></em></p>
