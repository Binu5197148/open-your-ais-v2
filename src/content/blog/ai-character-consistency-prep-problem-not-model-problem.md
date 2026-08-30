---
id: "art-176"
title: "AI Character Consistency Is a Prep Problem, Not a Model Problem"
description: "Junkyard King Chapter 2 landed this week at fifteen minutes, and every write up led with the runtime. Read the method instead. AI character consistency did not arrive as a switch inside a model. It arrived as a recipe built before a single frame is generated, which is what pre-production has always been. A working director on where the bottleneck actually moved."
pubDate: "2026-08-30"
toolVersion: "2026-08"
category: "AI"
tags:
  - "AI Character Consistency"
  - "Nano Banana Pro"
  - "Seedance"
  - "Animation"
  - "Pre-Production"
  - "Filmmaking"
heroImage: "https://images.unsplash.com/photo-1598267416816-2fc7a6058eaa?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw5fHxmaWxtJTIwZGlyZWN0b3IlMjBvbiUyMHNldHxlbnwxfDB8fHwxNzg4MDY0MDM0fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<!-- Correction 2026-08-30: read "Three days ago"; the Chapter 2 announcement is dated August 26, 2026, so the reference was anchored to the explicit date instead of a relative countdown. -->
<p>On August 26, Henry Daubrez released the second chapter of Junkyard King. Fifteen minutes of animation, an eighties inspired action adventure about a kid, a glowing sword and a mechanical crow, built with Google's Veo and Nano Banana models and premiered with invideo. He posted that it had been six weeks since the first chapter, and that he thinks it sets a new benchmark for AI-assisted animated storytelling. It is also the clearest public evidence yet of what AI character consistency actually costs, and where you pay for it.</p>

<p>Every post I read about it led with the runtime. Fifteen minutes. Continuous narrative. Look how long it holds.</p>

<p>The runtime is the least interesting number in that announcement. What matters is buried in how Daubrez describes working, and it reframes the entire argument about AI character consistency that this industry has been having for two years. Consistency did not show up as a feature inside a model. It showed up as a method built before anything is generated, and that is a much older idea than any of these tools.</p>

<h2>What Chapter 2 actually shipped</h2>

<p>Be specific, because the specifics are the argument.</p>

<p>Chapter 2, called The New Guy, is not simply longer than what came before it. By Daubrez's own account it carries more characters, more dialogue, more locations, more complex action and longer narrative sequences. Every one of those is a consistency multiplier. One character in one room for ninety seconds is a prompt. Six characters across five locations for fifteen minutes is a continuity department.</p>

<p>He is a resident filmmaker at Google Labs, working inside Flow, which means he has access most people do not have. That is worth saying out loud rather than pretending the playing field is level. But access to a better model is not what the work demonstrates, and treating it as the explanation is how you avoid the actual lesson.</p>

<p>Here is the part that got skipped. Daubrez builds large boards of inspirations, tests and explorations before production, and works toward a unique aesthetic and a repeatable recipe that reduces randomness. He has also said he revived shelved projects once Nano Banana Pro delivered near enough perfect consistency across characters and environments.</p>

<p>Read those two statements together. The model improving is what made the project possible. The recipe is what made it finishable. Those are different things and the difference is the whole job.</p>

<h2>Why is AI character consistency a prep problem and not a model problem?</h2>

<p>Because a model has no memory of your intentions, and consistency is an intention.</p>

<p>When people say a model is inconsistent, they usually mean they described a character in words, generated a shot, described the character again in slightly different words, generated another shot, and got two different people. That is not the model failing. That is a specification failing. The model answered both prompts correctly. The prompts were not the same prompt.</p>

<p>I run Nano Banana Pro, Seedance and Kling on paying work, so I have watched this play out on real deadlines. Nano Banana Pro is genuinely good at holding a subject across generations, and Seedance 2.0 is the workhorse I reach for on almost everything because it stays consistent across multiple scenes. Neither of them can hold a character I have not decided on. If I have not locked the face, the wardrobe, the silhouette and the lighting logic as fixed assets before I generate, then every shot is a fresh negotiation, and I will lose that negotiation slowly, over about forty shots, without noticing until the edit.</p>

<p>That failure has a signature. It never looks broken in a single shot. It looks fine in every shot and wrong in the sequence. You find it on the third day of the assembly, when a face has quietly become a cousin of itself.</p>

<p>The fix is not a better prompt. The fix is a character sheet built once, treated as an asset, and referenced rather than redescribed. This is the same conclusion I reached writing about <a href="/blog/ai-short-drama-format-the-models-were-built-for/">why AI short drama fits these models so well</a>, and it holds at fifteen minutes for the same reason it holds at ninety seconds. Lock the character first or accept the drift.</p>

<h2>Animation solved this in 1930 and we are relearning it badly</h2>

<p>None of this is new. It is embarrassing how not new it is.</p>

<p>The model sheet, the turnaround, the expression chart, the colour key. Traditional animation invented all of it for exactly this problem, because a character passing through eighteen animators in four cities has to arrive the same person. Nobody in that system believed consistency emerged from talent. They believed it was engineered before production, in a document, and enforced.</p>

<p>I learned this in the least forgiving version of it. My company Pichorra Filmes directed a stop-motion manifesto and a set of short films for Forno de Minas, made with Estudio Fue. Stop-motion has no undo. You cannot regenerate frame two hundred because the puppet's mouth drifted. Everything that matters is decided in front of the camera before you shoot a single frame, and the entire discipline of the form is prep. You build the thing, you test the thing, you agree what the thing looks like, and only then does anyone touch it.</p>

<p>Generative video is the first medium in decades that offers infinite undo, and the industry read that as permission to skip prep. It is the opposite. Infinite undo without a specification just means infinite drift, generated faster.</p>

<h2>What I would actually do this week</h2>

<p>If you are trying to hold a character across a real piece, the order of operations matters more than which model you pick.</p>

<p>Build the sheet before the shot list. Front, three quarter, profile, two expressions, full body for silhouette. Generate it once in Nano Banana Pro, look at it properly, and be willing to throw it away and redo it. This is the cheapest hour in the entire production and the one people skip.</p>

<p>Then stop writing your character into prompts. Reference the approved asset instead. The moment a character exists as words in a prompt box, it is being reinterpreted every time you press generate, and reinterpretation is the drift. Words describe. Assets constrain.</p>

<p>Fix the boundaries of motion rather than hoping for it. I use start and end frames in Kling, and Motion Control when a movement needs to repeat across shots or a scene needs redoing with different scenery. A movement you can repeat is a movement you can match, and matching is what continuity is.</p>

<p>Write down your recipe. Not the prompts, the decisions. Which model for which job, which lighting logic, which lens language, what the aesthetic actually is. Daubrez calls it reducing randomness and that is precisely right. A recipe is a document that stops you renegotiating settled questions at two in the morning. There is a longer version of how I structure that kind of pipeline in <a href="/blog/oiioii-ai-animation-pipeline-seven-agents-director-read/">this breakdown of a multi stage animation pipeline</a>.</p>

<p>And keep the assets on your own drive. Every sheet, every approved frame, every seed that worked. These models are rented and the terms move under you, which is why Alibaba's recent flagship video releases shipping with <a href="/blog/wan-3-0-ships-closed-open-line-stopped-at-2-2/">no open weights at all</a> is a production risk and not a licensing footnote. If your character only exists inside somebody's account, so does your second season.</p>

<h2>The honest close</h2>

<p>What Junkyard King Chapter 2 proves is not that the models got long. It is that somebody did the preparation these tools have been quietly demanding since the beginning, and got fifteen coherent minutes out of the other side.</p>

<p>I find that genuinely encouraging, and not for a technical reason. The bottleneck moved back to the part of filmmaking that was always the actual work. Deciding what the thing looks like. Writing it down. Holding everyone to it. That is not a skill the models are anywhere near taking, and the people who already have it are the ones about to look very good at this.</p>

<p>The model will give you the frames. Deciding who is in them is still yours.</p>

<p><em>Sources: <a href="https://x.com/henrydaubrez/status/2092664967388647666" target="_blank" rel="noopener">Henry Daubrez on X (Chapter 2 announcement)</a>; <a href="https://promptscene.substack.com/p/google-labs-artist-henry-daubrez" target="_blank" rel="noopener">Promptscene interview with Henry Daubrez</a>; <a href="https://www.linkedin.com/in/upskydown/" target="_blank" rel="noopener">Daubrez, Google Labs resident filmmaker</a>; <a href="https://www.youtube.com/watch?v=QqH-KT3r-_8" target="_blank" rel="noopener">The Creator Sessions interview</a></em></p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Verified on August 30, 2026. The Chapter 2 release, its fifteen minute runtime, the title The New Guy, the six week gap since Chapter 1 and the invideo premiere come from Daubrez's own public announcement and were cross checked against secondary coverage. His role as resident filmmaker at Google Labs since September 2025, the use of Veo and Nano Banana, the practice of building large pre-production boards toward a repeatable recipe, and his comment on Nano Banana Pro consistency come from his published interviews and posts, not from memory. No runtime, budget, crew size or production duration has been attributed to this article's author beyond the Forno de Minas stop-motion work with Estudio Fue, which is a matter of record. Claims about model behaviour are the author's own working experience and are labelled as such rather than presented as benchmarks.</p>
</section>
