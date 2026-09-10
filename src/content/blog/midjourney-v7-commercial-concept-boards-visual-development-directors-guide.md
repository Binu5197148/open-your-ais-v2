---
id: "art-094"
title: "Midjourney for Pitch Decks: Ditch Pinterest"
description: "How to prompt Midjourney with a reference image and build a concept board a client can approve, instead of assembling one more Pinterest moodboard."
pubDate: "2026-03-15"
updatedDate: "2026-09-10"
category: "Tools"
tags:
  - "Workflow"
  - "Midjourney"
  - "AI Image"
  - "Commercial Production"
  - "Pitch Deck"
  - "Concept Board"
  - "Visual Development"
heroImage: "https://images.unsplash.com/photo-1570459725042-850c4a7ccc70?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwyNXx8ZmlsbSUyMGRpcmVjdG9yJTIwb24lMjBzZXR8ZW58MXwwfHx8MTc3NjcyNDI1Nnww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "8 min read"
---

<h2>The Pitch That Pays for Itself</h2>
<p>Every commercial director knows the pitch cycle: client issues a brief, production companies submit treatments with visual direction, one company wins the job. The winning treatment is rarely the one with the most words. It's the one where the client can see exactly what they're going to get: the visual language, the tone, the specific shots, the world of the campaign.</p>
<p>Building that kind of visual pitch used to require either stock imagery that only approximately represented your vision or budget spent on a pre-visualization that you hadn't been paid for yet. Most directors assembled moodboards from Pinterest and licensed stock libraries, which inevitably felt assembled rather than original. The client saw references to other work rather than a specific vision for their campaign.</p>
<p>Midjourney V7, which became the default model in June 2025, changed what's possible in the pitch stage at a practical level.</p>

<h2>What V7 Actually Fixed</h2>
<p>The failure modes of earlier Midjourney versions for commercial concept work were consistent: bodies were wrong in ways that made images unusable for client presentation, hands were a persistent source of problems, and lighting that looked good at a small size revealed inconsistencies at the larger display sizes used in pitch decks. The images were impressive as generative art but not plausible as commercial production references.</p>
<p>V7 addresses these specifically. Better coherence in bodies: proportions that hold up at inspection rather than breaking down in the details. Hands that are recognizable as hands rather than abstract approximations. Richer textures that read as materials rather than rendered surfaces. Consistent lighting within an image that would be achievable in an actual production environment.</p>
<p>Draft Mode, introduced with V7, generates at 10x speed at half the cost. For the iteration cycle in a pitch (trying multiple visual directions, exploring different lighting approaches, testing different casting directions), this changes the economics of exploration. You can generate 50 variations and select the 8 that best represent the vision in the time it previously took to generate 5.</p>

<h2>How I Use It in Commercial Pitches</h2>
<p>My current pitch workflow for a commercial brief: after reading the brief and developing the creative concept, I use Midjourney V7 to generate the specific scenes I'm proposing, not stock-adjacent imagery that approximates the idea, but images generated from prompts that describe the exact visual language I'm pitching. Specific talent direction (not real people, but the aesthetic type), specific location or environment, specific lighting condition, specific color temperature.</p>
<p>The prompt engineering is part of the creative work. Describing a scene with enough precision to get the image you've envisioned requires the same specificity of language that a good shot list demands. "Warm 5600K backlight, product in frame left, shallow depth of field, urban industrial environment, late afternoon practical light through windows" is both a Midjourney prompt and a DP brief. Working through what you actually want forces the conceptual clarity that makes pitches stronger regardless of the tool used to visualize them.</p>
<p>The generated images go directly into the treatment. Not as "AI-generated references" but as specific visual direction for the campaign. Clients see a coherent visual world (the same lighting aesthetic across multiple shots, the same color temperature, the same tonal register) because I generated it from a consistent set of prompts rather than assembling it from disparate stock sources.</p>

<h2>How Do You Prompt Midjourney With an Image?</h2>
<p>You paste the image URL at the front of the prompt, before any words. That is the whole mechanic, and it is the step that separates a concept board from a folder of nice pictures. The words describe what you want. The image describes the register you want it in.</p>
<p>The distinction matters more than it sounds. A written prompt asks the model to invent a look. An image reference asks it to stay inside a look you have already chosen. On a pitch, you have already chosen. The client bought a treatment, not a lottery.</p>
<p>Here is the structure I paste, in this order, every time:</p>
<pre><code>[reference image url] [second reference url]
subject and action, in one plain sentence
environment and time of day
light source and direction
lens and framing
--ar 16:9 --sref [style reference url] --sw 100</code></pre>
<p>Two things earn their place there. The <code>--sref</code> flag points at a style reference and carries the palette and grain without dragging in the content of that image, which is what you want when the reference is somebody else's commercial. The <code>--sw</code> value sets how hard it pulls. I start at 100 and drop toward 50 when the board starts looking like the reference instead of like the idea.</p>
<p>The moodboard question people ask next is whether you can feed several images at once. You can, and it averages them. That is useful for a palette and actively harmful for a look. Two references that disagree produce a compromise nobody pitched. I use one image for the look, one for the palette, and nothing else.</p>
<p>The official flag documentation is at <a href="https://docs.midjourney.com/" target="_blank" rel="noopener">docs.midjourney.com</a>, and it is worth reading the parameter list once rather than copying prompts from social posts. If you want the video side of the same argument, I wrote about <a href="/blog/ai-video-prompting-cinematography-director-guide-2026/">prompting as shot listing</a>.</p>

<h2>What It Can't Replace and Shouldn't Try To</h2>
<p>Midjourney V7 generates images. It doesn't understand production. There is no camera direction in the prompt system that corresponds to an actual lens decision. "85mm f/1.4 portrait" produces an approximation of that look, not a technically accurate representation of what that lens does. For clients with sophisticated production teams who will review the treatment technically, the images set a visual direction but cannot serve as a DP spec.</p>
<p>Real talent, specific locations, proprietary products, and anything with brand-specific visual identity cannot be generated with accuracy. A Midjourney image of a smartphone doesn't look like your client's specific product. A generated retail environment doesn't look like your client's store. For pitches where the specific brand environment is part of the visual language, the concept images need to be supplemented with actual photography or careful composite work.</p>
<p>V7 also has the Midjourney signature aesthetic: a particular rendering quality and color palette that's recognizable to anyone who spends time with the tool. For clients who have been exposed to a lot of AI-generated imagery, the tool's origin is visible. This is a consideration when the visual language of the pitch should feel genuinely original rather than generated. The solution is more specific and unusual prompting, which produces results that are less recognizably Midjourney.</p>

<h2>The Competitive Advantage in the Near Term</h2>
<p>Most production companies are not yet using AI-generated imagery in pitches at a sophisticated level. The ones that are can produce treatments with more specific, coherent visual direction than those assembling moodboards from stock. In a competitive pitch environment, that specificity of vision can be the deciding factor when multiple companies are equally qualified on production capability.</p>
<p>The tool advantage in pitching is likely to be temporary. As more companies adopt it, the differentiation returns to creative vision and production quality rather than the richness of the pitch visuals. The window where Midjourney V7 gives a pitch an advantage over moodboard-assembled treatments is probably measured in months. But that window is open now.</p>
<p><em>Sources: <a href="https://techcrunch.com/2025/04/03/midjourney-releases-its-first-new-ai-image-model-in-nearly-a-year/" target="_blank" rel="noopener">TechCrunch, Midjourney releases V7</a> | <a href="https://therightgpt.com/midjourney-ai-image-generator-review/" target="_blank" rel="noopener">TheRightGPT, Midjourney V7 Review 2026</a> | <a href="https://www.godofprompt.ai/blog/midjourney-2025-v7-timeline-and-video-features" target="_blank" rel="noopener">God of Prompt, Midjourney 2026 V7 Features</a></em></p>
