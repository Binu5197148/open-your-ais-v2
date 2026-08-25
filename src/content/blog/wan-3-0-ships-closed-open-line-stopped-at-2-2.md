---
id: "art-174"
title: "Wan 3.0 Ships Closed and the Open Line Stopped at 2.2"
description: "Wan 3.0 launched on August 24, 2026 with 30 second clips, audio in the same pass, and a feature that builds video out of your spreadsheet. It also shipped with no weights, which makes four closed flagships in a row from the company that gave the open community its workhorse. A working director on the spec nobody is benchmarking."
pubDate: "2026-08-25"
toolVersion: "2026-08"
category: "AI"
tags:
  - "Wan 3.0"
  - "Alibaba"
  - "Open Weights"
  - "Video Models"
  - "Pipeline"
  - "Filmmaking"
heroImage: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw0fHxmaWxtJTIwZGlyZWN0b3IlMjBvbiUyMHNldHxlbnwxfDB8fHwxNzg3NjEyMzk3fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "6 min read"
---

<p>Wan 3.0 launched yesterday. On August 24, 2026, Alibaba took its video model out of the public beta it had been running since August 6, days after raising about 10 billion dollars in a Hong Kong share placement to pay for exactly this kind of thing. Thirty second clips, native, up to 1080p, with the audio generated in the same pass. Double the ceiling of the model before it.</p>

<p>The feature everybody is quoting is the input side. Alongside text, image, audio and video, it accepts documents, spreadsheets, slides, PDFs and web pages, and builds a video out of them. Feed it the deck. Get the film.</p>

<p>Every comparison I have read since yesterday is Wan 3.0 against Seedance, or thirty seconds against fifteen. Clip length, prompt adherence, physics. I run Seedance and Kling on paying jobs, so I care about all of that eventually.</p>

<p>But there is a line in the release that decides more of my year than any benchmark, and almost nobody is leading with it. There are no weights. You cannot download this model.</p>

<h2>What Wan 3.0 actually shipped</h2>

<p>Be fair to the release first, because it is a serious one.</p>

<p>Thirty seconds in a single generation, at up to 1080p, with synchronised sound. The previous flagship topped out at fifteen. Alibaba says the beta was already used on short drama and film production, on advertising and marketing, on tourism promotion and on music videos, which is a more honest list than most launch posts manage because it names the jobs instead of the dreams. Access runs through Alibaba Cloud Model Studio and Qwen Cloud, as the model called wan3.0-video.</p>

<p>And the multimodal input is genuinely clever engineering. A model that can read a slide deck and hold its structure across thirty seconds of picture is doing something hard.</p>

<p>Now the part that matters to anyone with a pipeline. There is no Hugging Face checkpoint, no repository, no ComfyUI node. The last Wan flagship released with open weights was Wan 2.2, in July 2025, under Apache 2.0. Since then 2.5, 2.6, 2.7 and now 3.0 have all shipped closed. Four generations in a row.</p>

<p>That matters more than it sounds, because Wan 2.2 was not a minor model. It was the workhorse a large part of the open video community built on. Every wrapper, every node, every low VRAM build. The company that handed the independent world its most useful tool has now spent four releases walking away from that position, and the coverage keeps filing it under features.</p>

<h2>Why does the licence matter more than the clip length?</h2>

<p>Because clip length is a problem that solves itself and access is a problem that does not.</p>

<p>Fifteen seconds became thirty in one release cycle. It will be sixty. Nobody will build a business on being the model with the longest clip, because that number moves every quarter and it moves for everybody.</p>

<p>What does not move on its own is whether the thing you tested is the thing you will still have in November. A model you can download is a version you can pin. You keep the checkpoint, you keep the behaviour, and the look you sold to a client in August is still reproducible in December because it is sitting on your drive.</p>

<p>A model behind an API is a service, and services get revised. Same prompt, same settings, different picture next month, no changelog. I wrote about the sharp end of this when <a href="/blog/seedance-copyright-filters-refuse-your-legitimate-shot/">ByteDance signed its copyright agreement with the Motion Picture Association</a> and the enforcement detail stayed private: you build a look on a version, you book the job on the strength of that test, and then the model quietly updates.</p>

<p>Put yesterday next to two weeks ago and the split is almost comic. On August 11, <a href="/blog/ltx-2-5-multi-shot-the-model-is-making-your-cut/">LTX 2.5 arrived with open weights</a> and a commercial licence free to any company under ten million dollars in annual recurring revenue. Thirteen days later the other major release of the month arrived closed. Same month, same category, opposite directions.</p>

<p>The open one is worse at several things. It is also the one a two person company can actually plan around.</p>

<h2>The deck is not the film</h2>

<p>Then there is the input feature, and I want to be careful here, because my objection is not that it is bad engineering.</p>

<p>Feeding a slide deck into a model to get a video assumes the deck already contains the film. In years of advertising work it never once did. The deck contains the client's argument, the objectives, the mandatory legal line and the product beauty pass everybody agreed to before anyone thought about images. What it does not contain is the decision about what the thing is going to feel like, which is the actual work, and which usually happens when somebody reads the deck and disagrees with it a little.</p>

<p>Pichorra Filmes, the company I ran in São Paulo with Lisandra Barros, produced for WMcCann as a production company. I directed the Forno de Minas manifesto in stop motion, built with Estudio Fue, where every frame was decided before the camera rolled because there was no way to go back and fix it afterwards. That job taught me something I keep finding again in these releases. The value was never in the execution speed. It was in the argument we had about the idea two weeks before we shot a single frame.</p>

<p>A document to video pipeline skips that argument by design. It is not that it produces something bad. It produces something reasonable, which is worse, because reasonable passes the client review and nobody can say what is missing.</p>

<h2>What I would actually do this week</h2>

<p>Split the pipeline in two and be honest about which half is which.</p>

<p>The exploratory half can live on rented models, and should. Pitch material, mood tests, sequence shape, the thing you show a client to prove the idea has a body before anyone commits money. Wan 3.0 at thirty seconds with sound is very good for that, and if it disappeared tomorrow you would lose nothing you cannot regenerate.</p>

<p>The half you are contractually on the hook for is different. Anything a client will ask you to revise in three months, anything with a delivery attached, anything where "the model changed" is not an answer you can give in an email. That half wants a version you control, which today means the open models, which today means the shorter clip and the worse physics and the licence you can read.</p>

<p>This is the same discipline as keeping your own masters, which is why <a href="/blog/dall-e-retires-august-30-your-masters-are-inside-it/">a shutdown with a date on it is the honest kind</a>. The part of your work that belongs to you is the part you carried out of the building.</p>

<p>Thirty seconds is a headline. A file on your drive is a business.</p>
