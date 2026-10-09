---
id: "art-147"
title: "FLUX 3 Video: What You Need to Know"
description: "FLUX 3 Video makes dialogue and room tone in the same pass as the picture. Is it out, how to get access, and why sound is the right test, not 20 seconds."
pubDate: "2026-07-25"
updatedDate: "2026-10-09"
toolVersion: "2026-10"
category: "AI"
tags:
  - "Text to Video"
  - "FLUX 3"
  - "Black Forest Labs"
  - "AI Video"
  - "Sound Design"
  - "AI Tools"
heroImage: "https://images.unsplash.com/photo-1512206451403-542d321772f3?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwyfHxzaGFkb3clMjBsaWdodCUyMHBvcnRyYWl0fGVufDF8MHx8fDE3ODQ4OTU1Mjh8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "6 min read"
---

<section class="article-note note-correction">
<h2>Update</h2>
<p>Updated Oct 6, 2026: this article was written on July 25, during gated early access. Since then FLUX 3 Video became <a href="https://bfl.ai/blog/flux-3-video">generally available through the BFL API and select partners</a> (Black Forest Labs, August 4), <a href="https://bfl.ai/blog/flux-video-upscale">FLUX Video Upscale</a> added regeneration up to 4K (August 20), and the robotics variant <a href="https://bfl.ai/blog/flux-3-action">FLUX 3 Action shipped with open weights</a> (September 23). FLUX 3 Image and an open-weight FLUX 3 Dev are still on the roadmap with no date. The Sora API mentioned below did go dark on September 24. Where the text says "early access" or "later this year", read it as the July state. A new section answers whether FLUX 3 is out and how to get access.</p>
</section>

<h2>What does FLUX 3 change about text to video AI?</h2>

<p>On July 23, 2026, Black Forest Labs announced FLUX 3, and the specification that matters is not the one in the headline. Text to video AI in this model arrives with its own sound. FLUX 3 Video generates clips of up to 20 seconds in a single generation, and the dialogue, the effects, and the room ambience are produced in the same pass as the picture, not bolted on afterward.</p>

<p>The company trained one set of weights on images, video, and audio together, then extended the same architecture to predict robot actions. Co-founder and CEO Robin Rombach put the thesis bluntly in the announcement: "You can't cheat reality." A model that only ever learns pictures, the argument goes, can only ever make pictures.</p>

<p>At launch in July the rollout was narrow. FLUX 3 Video and FLUX 3 Action went out first through gated early access to selected partners, with FLUX 3 Image following in the coming weeks and an open-weight release planned for later in the year. The early access list includes Canva, Burda, Krea, Picsart, and Magnific.</p>

<p>That last name is why I am writing this today rather than reading about it. Magnific is one of the AI hubs in my working stack. When a partner list includes a tool already open on my second monitor, the release stops being industry news and becomes a scheduling question.</p>

<h2>The number everyone will lead with is the wrong number</h2>

<p>Twenty seconds will read as a step backward to anyone keeping score, and Black Forest Labs has not published an output resolution ceiling at all. What it published instead was a preference benchmark run on 10-second clips at 720p. <a href="/blog/seedance-2-5-30-second-4k-single-pass-director-take/">Seedance already runs 30 continuous seconds in a single pass, with 4K through upscaling</a>, and I wrote at the time that the unbroken take was the real story there. By the only two metrics the coverage tends to use, length and resolution, FLUX 3 does not even bring a number to the fight.</p>

<p>Which is exactly why the scoreboard is the wrong instrument. These two releases are not competing for the same job. One is chasing the longest, cleanest picture. The other is chasing a picture that arrives already carrying its own world.</p>

<p>Not because resolution stopped mattering. Because resolution was never the thing that made a shot feel real. A 4K clip with no sound is a beautiful corpse. A 720p clip where a footstep lands on the right frame and the room has the right amount of air is a scene.</p>

<h2>Sound was never the last department</h2>

<p>I started as a composer. Before I ever directed anything, my job was to sit with a cut and work out what a scene was actually feeling, then put music underneath it without telling the audience what to think. Later I spent years in the edit. Both jobs taught me the same lesson from opposite ends: sound is not decoration applied to finished picture. Sound is half of when the audience decides to believe you.</p>

<p>Every filmmaker learns this the expensive way. You lock a cut that plays flat, you hand it to a sound designer, and it comes back alive. Nothing in the picture changed. What changed is that somebody decided what the room sounds like, which frequencies to pull out of the dialogue, and where to let it go quiet.</p>

<p>Silence is the part nobody talks about. In music, the rests carry the phrase. In a cut, the half second where the score drops out is doing more work than the four bars before it. Sound design is not the act of adding noise. It is the act of choosing what the audience is allowed to hear.</p>

<p>So here is my contrarian read on native audio, and it is not the celebration you will find in most coverage this week. A model that generates its own sound does not hand you a finished scene. It removes the last place in the pipeline where you were structurally forced to make a decision.</p>

<h2>The default is now a full room</h2>

<p>Think about how the old workflow protected you. You generated a clip and it came back silent. That silence was an unavoidable appointment with your own judgment. You had to sit there and answer: what does this place sound like, and what should the audience feel here? You could answer badly, but you could not skip the question.</p>

<p>Native audio deletes the appointment. The clip now arrives with plausible footsteps, plausible ambience, plausible breath. Plausible is the dangerous word. The model is giving you the statistical average of what a room like that has sounded like across everything it learned. That average is competent, and it is nobody's decision.</p>

<p>This is the same trap I keep writing about in a new costume. <a href="/blog/flux-2-black-forest-labs-commercial-image-generation-multi-reference/">When FLUX 2 made commercial-grade images trivial to produce</a>, the work did not disappear. It moved upstream, into knowing which image was worth producing. Native audio moves the same way. The labor of making sound is collapsing. The labor of deciding what should be heard has not moved an inch.</p>

<p>AI amplifies what you bring to it. Bring a real decision about what a scene should feel like and the model will execute it faster than any team you could afford. Bring nothing and it will fill your silence with an average, in sync, at 20 seconds, and you will ship it because it sounded fine.</p>

<h2>What this means if you deliver work to clients</h2>

<p>Two practical notes, from someone who has to answer for what goes out the door.</p>

<!-- Correction 2026-10-09: removed present-tense "gated API" claim; FLUX 3 Video is GA via API since 2026-08-04 (bfl.ai/blog/flux-3-video). -->
<p>First, treat early access as weather, not ground. <a href="/blog/sora-shutdown-disney-partnership-ai-creative-tools/">Sora is the lesson still sitting in front of everyone</a>. OpenAI shut the app down in April of this year and the API went dark on September 24. People built pipelines, and in some cases businesses, on a frontier model from the most visible AI company on earth, and it was withdrawn. FLUX 3 Video is now <a href="https://bfl.ai/blog/flux-3-video">generally available through an API</a>, but its video weights remain private. Build a look on it if the work is yours. Do not promise a client a campaign that depends entirely on one provider.</p>

<p>Second, when the sound arrives for free, listen to it as an editor rather than an owner. Mute the clip and watch it once. Decide what it should sound like before you hear what the model decided. Then unmute. If the two agree, you got lucky and you kept your judgment. If they disagree, you just found the actual creative decision in the shot, and it was hiding in a track you would otherwise have accepted without noticing.</p>

<p>An open-weight video release, which Black Forest Labs still lists only as roadmap, is when this genuinely changes for people who cannot depend on one hosted API. That is the version worth preparing for, because that is the version that ends up in everyone's pipeline.</p>

<p>The models keep getting better at filling rooms. None of them has learned what a room is for. That question still walks in with a person, and it is still the whole job.</p>

<h2>Is FLUX 3 out, and how do you get access?</h2>

<p>Partly. As of October 8, 2026, two members of the family are out and two are not. FLUX 3 Video has been generally available since August 4, and FLUX 3 Action, the robotics model, shipped with open weights on September 23. FLUX 3 Image and an open-weight FLUX 3 Dev are still presented as roadmap items, with no date on the <a href="https://bfl.ai/blog">Black Forest Labs blog</a>.</p>

<ol>
<li><strong>FLUX 3 Video:</strong> generally available since August 4, 2026 through the <a href="https://bfl.ai/blog/flux-3-video">BFL API and select partners</a>. Clips run up to 20 seconds, with dialogue, effects and ambience generated alongside the picture, at HD with Full HD through upscaling.</li>
<li><strong>Higher resolution:</strong> <a href="https://bfl.ai/blog/flux-video-upscale">FLUX Video Upscale</a> regenerates a clip at roughly 1080p, 2K or 4K, in a Precise or a Creative mode, through the same API and the BFL playground.</li>
<li><strong>Through a tool you already use:</strong> several platforms list FLUX 3 in their model menus, <a href="https://invideo.io/blog/flux-3-ai-video-generator/">invideo among them</a>. Check the partner you work with before opening a new account.</li>
<li><strong>Open weights:</strong> not for video yet. Black Forest Labs lists an open-weight FLUX 3 Dev on its roadmap. The only FLUX 3 weights published so far are FLUX 3 Action, a robotics model, under separate non-commercial and self-hosted commercial terms.</li>
<li><strong>FLUX 3 Image:</strong> announced, not released.</li>
</ol>

<p>The practical rule from the client section above still holds. The video model that was gated in July is now an API model, which is better ground. It is still one company's API, and the weights that would put it in everyone's pipeline have not shipped.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Published Jul 25, 2026. FLUX 3 launch date, architecture, variant availability, and early access partner list verified against Black Forest Labs' own announcement on GlobeNewswire (Jul 23, 2026). The 20-second native-audio specification verified against VentureBeat, The Decoder, Decrypt, and TechTimes. Sora shutdown dates verified against The Decoder and TechCrunch.</p>
<p>Rechecked Oct 8, 2026 against Black Forest Labs: <a href="https://bfl.ai/blog/flux-3">FLUX 3 announcement</a>, <a href="https://bfl.ai/blog/flux-3-video">FLUX 3 Video</a>, <a href="https://bfl.ai/blog/flux-video-upscale">FLUX Video Upscale</a>, <a href="https://bfl.ai/blog/flux-3-action">FLUX 3 Action</a>, <a href="https://bfl.ai/models/flux-3-action">FLUX 3 Action model page</a>; and OpenAI's <a href="https://developers.openai.com/api/docs/deprecations">API deprecations page</a> for the September 24 Sora 2 shutdown. This is a documentary analysis, not a hands-on test.</p>
<p>Corrected Jul 27, 2026, by the daily fact-check pass: the article originally stated FLUX 3 Video outputs "up to 20 seconds at 720p" and built the comparison paragraph on that figure. Black Forest Labs has published no output resolution ceiling for FLUX 3 Video. The 720p figure comes from its human-preference benchmark, which used 10-second clips at 720p (confirmed against The Decoder, MarkTechPost, and TestingCatalog). The two affected sentences were rewritten to attribute 720p to the benchmark rather than to the model's output specification. The argument, that sound matters more than resolution, is unchanged.</p>
</section>
