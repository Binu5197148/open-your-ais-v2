---
id: "art-096"
title: "The Secret to Directing AI"
description: "Most AI filmmaking prompts fail because nobody directed them. Eight control layers, written in the language you would use to brief a cinematographer."
pubDate: "2026-03-15"
updatedDate: "2026-09-10"
category: "AI"
tags:
  - "Workflow"
  - "Prompt Engineering"
  - "AI Video"
  - "Cinematography"
  - "Directing"
  - "Runway"
  - "Veo"
  - "Production Workflow"
heroImage: "https://images.unsplash.com/photo-1686484527894-4a5ee954489a?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBmaWxtJTIwcGhvdG9ncmFwaHklMjBncmFpbnxlbnwxfDB8fHwxNzc2NzI0MjcyfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "9 min read"
featured: true
---

<h2>Why Your Prompts Are Probably Undirected</h2>
<p>When most people start using AI video generation tools, their prompts look like this: "A woman walking through a city at night, cinematic, beautiful lighting, 4K." The output they get is technically competent and aesthetically generic. It looks like a stock video that represents the concept rather than a specific creative vision.</p>
<p>The problem is not the tool. It is the prompt. "Cinematic" is not a direction. "Beautiful lighting" is not a lighting design. The models in 2026 (Runway Gen-4.5, Google Veo 3.1, Kling 3.0) have been trained on vast datasets of professional cinematography. They respond to specific technical language the same way a DP responds to a proper brief. When you give them vague adjectives, they make generic default choices. When you give them specific technical parameters, they execute a specific vision.</p>
<p>After 14 years of directing commercial work, I can tell you that this is exactly how it feels to brief a DP. Vague creative language produces technically competent footage that expresses nothing in particular. Specific technical and aesthetic language produces footage that represents a decision.</p>

<h2>The Eight Control Layers</h2>
<p>Current AI video research describes eight primary control dimensions that determine the quality and specificity of generated video output. I'm going to translate each one into the production language I use on set, because that translation is the key to moving from generic to directed.</p>
<p><strong>1. Subject:</strong> Not "a woman" but "a woman in her 40s, Mediterranean appearance, mid-length dark hair, wearing a cream linen blazer over a white shirt, carrying a document folder, purposeful walking cadence." Your talent direction brief, translated directly. The more specific the subject description, the more coherent the generated performance.</p>
<p><strong>2. Emotion/Performance:</strong> Not "confident" but "the quiet confidence of someone who has already decided the outcome of a meeting and is approaching it with controlled energy." Directing a performance on a brief: the emotional register you'd give the talent in a pre-shoot conversation. Models respond to emotional specificity with visible performance choices in body language and facial expression.</p>
<p><strong>3. Optics:</strong> This is where production language translates most directly. "85mm equivalent, f/2.8, slight rack focus from foreground element to subject at midpoint." The focal length determines the spatial compression and background relationship. The aperture determines depth of field. A telephoto lens at a wide aperture produces a different spatial relationship than a 35mm at f/5.6, and the models understand this difference when you specify it in technical terms rather than aesthetic descriptions.</p>
<p><strong>4. Motion:</strong> Camera movement should be described as a DP would execute it. "Slow tracking shot from camera right to camera left, tracking the subject, slight push-in as the subject pauses, camera height at subject's chest level." Not "the camera moves with her" but a specific movement description with direction, speed, and height. The models execute this with much higher fidelity than natural language movement descriptions.</p>
<p><strong>5. Lighting:</strong> Give a lighting setup description, not an aesthetic label. "Overcast exterior, even diffuse light, no harsh shadows, slight fill from a reflective surface to camera left, color temperature approximately 5600K." That is a real lighting condition you'd scout for or recreate with a soft box and a reflector. The model understands it as such and generates coherent light behavior rather than aesthetic approximation.</p>
<p><strong>6. Style:</strong> The aesthetic reference frame for the shot. The most effective style prompts reference specific photographers, cinematographers, or productions rather than genre labels. "Rodrigo Prieto exterior work" or "commercial photography aesthetic in the tradition of Art Streiber portraits" gives the model a specific visual tradition to draw from. "Cinematic" does not.</p>
<p><strong>7. Audio:</strong> For models with native audio generation (Runway Gen-4.5, Kling 3.0, Veo 3.1), the audio direction is part of the prompt. "Ambient urban soundscape, distant traffic, quiet footsteps on stone, no dialogue" is a sound design brief. The model generates audio that corresponds to the described environment rather than adding generic background sound.</p>
<p><strong>8. Continuity:</strong> For multi-shot sequences, continuity parameters maintain visual consistency across shots. "Maintain the same color temperature and lighting character as the preceding shot, same talent wardrobe, late afternoon in the same urban environment." This is what prevents AI-generated sequences from feeling like a collection of separate clips rather than a coherent edit.</p>

<h2>Prompt Length and Structure</h2>
<p>One of the non-obvious insights from working with current AI video models: prompts for video should be shorter than image prompts but technically denser. Fewer words, higher precision. A 150-word prompt with eight specific technical parameters outperforms a 400-word descriptive paragraph that covers the same ground in narrative prose.</p>
<p>Structure the prompt as a shot list entry rather than a description. Shot number, subject action, camera setup, lighting condition, audio. The more it reads like professional production documentation and the less it reads like a creative brief to a marketing team, the better the output typically is.</p>
<p>The iterative workflow that works: start with a short, high-precision prompt that establishes the technical parameters. Generate three or four variations. Identify which technical element is producing the most useful result and which is producing the most unwanted variation. Adjust the underperforming element with more specific direction. One parameter change at a time, not a complete prompt rewrite.</p>

<h2>The AI Filmmaking Prompt Template</h2>
<p>Copy this, fill it in, delete nothing. The empty slots are the point: every line you leave blank is a decision the model makes for you, and it will make the average one.</p>
<pre><code>SUBJECT: who or what, and what they are doing
PERFORMANCE: the emotional state, played not stated
OPTICS: lens length, aperture feel, distance to subject
MOTION: camera move, speed, and what motivates it
LIGHT: key source, direction, quality, time of day
STYLE: stock, era, grain, palette
AUDIO: room tone, specific sounds, dialogue or none
CONTINUITY: what must match the previous shot, verbatim</code></pre>
<p>The last line does the heavy lifting across a sequence and it is the one everybody skips. Continuity is not a description, it is a copy and paste job. Whatever text described the wardrobe, the location and the light in shot one goes into shot two unchanged, word for word. Rewrite it in your own words and the model reads it as a new instruction and gives you a new room.</p>
<p>Two habits that save more time than any prompt trick. Write the shot list before you open the tool, because a prompt written in the generation window is a wish and a prompt written in a document is a brief. And generate at low resolution until the sequence cuts, because the shot that looks best alone is usually not the shot the edit needs.</p>
<p>Google publishes the most useful vendor guide on this, the <a href="https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1" target="_blank" rel="noopener">Veo prompting guide</a>, and the vocabulary in it transfers to every other model. If you want the still image version of the same discipline, I wrote about <a href="/blog/midjourney-v7-commercial-concept-boards-visual-development-directors-guide/">prompting Midjourney with reference images</a>, and about <a href="/blog/seedance-2-0-bytedance-ai-video-capabilities-copyright-controversy/">why I generate at 720p and upscale afterwards</a>.</p>

<h2>What This Means for Directors</h2>
<p>The directorial skill that translates most directly to AI video work is the ability to describe a vision in technical language rather than aesthetic language. Directors who have always given their DPs specific technical briefs ("I want a 100mm lens at f/2 for this shot, motivated backlight from camera left, foreground out of focus") are better positioned to get high-quality AI video output than those who have worked primarily in conceptual and aesthetic language.</p>
<p>The skills are the same. The tool that executes them has changed.</p>
<p><em>Sources: <a href="https://www.truefan.ai/blogs/cinematic-ai-video-prompts-2026" target="_blank" rel="noopener">TrueFan, Master Cinematic AI Video Prompts: 2026 Expert Playbook</a> | <a href="https://metricsmule.com/ai/ai-video-prompt-engineering/" target="_blank" rel="noopener">MetricsMule: AI Video Prompt Engineering</a> | <a href="https://cloud.google.com/blog/products/ai-machine-learning/ultimate-prompting-guide-for-veo-3-1" target="_blank" rel="noopener">Google Cloud Blog: Ultimate Prompting Guide for Veo 3.1</a></em></p>
