---
id: "art-093"
title: "HeyGen Avatar V: Where It Works and Where It Doesn't"
description: "HeyGen Avatar V builds a twin from 15 seconds of video. What each plan covers, how to record it right, and the jobs where an avatar is still wrong."
pubDate: "2026-03-15"
updatedDate: "2026-11-06"
toolVersion: "2026-11"
category: "AI"
tags:
  - "HeyGen"
  - "AI Avatar"
  - "Localization"
  - "Spokesperson"
  - "Commercial Production"
  - "Dubbing"
heroImage: "https://images.unsplash.com/photo-1761925098120-c33304cfa418?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw5fHx0aGVhdGVyJTIwc3RhZ2UlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDF8MHx8fDE3NzY3MjQyNjJ8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "8 min read"
---

<!-- Updated Nov 3, 2026. Scope: documentary analysis of HeyGen's pricing, translate and Avatar V pages, read on November 3. No avatar was generated for this update. Corrected: Avatar IV is no longer the current model; plan prices and the "unlimited" claim were superseded; an unsourced per-minute dubbing cost was removed. -->

<p><strong>Update, November 3, 2026:</strong> this article was written in March about Avatar IV. HeyGen's current model is <a href="https://www.heygen.com/blog/heygen-april-2026-release" target="_blank" rel="noopener">Avatar V</a>, released in April 2026. It builds an identity-consistent avatar from a <a href="https://www.heygen.com/tool/custom-avatar" target="_blank" rel="noopener">15-second recording</a>, and since May you can <a href="https://www.heygen.com/blog/heygen-may-2026-release" target="_blank" rel="noopener">direct its performance in plain text</a> (face, hands, posture, gaze, energy) or call it through the API at five cents per second. The plans changed too: there is no unlimited tier anymore, everything runs on credits. The sections below are corrected where the March text is no longer true, and a step by step for creating an avatar was added. This is a reading of HeyGen's own pages, not a hands-on test.</p>

<h2>The Uncanny Valley Problem Is Mostly Solved</h2>
<p>Two years ago, AI-generated spokesperson videos had a specific visual tell that most viewers could identify within a few seconds: something slightly wrong with the mouth. The lip sync was close but not quite right. The blinks happened at the wrong frequency. The micro-expressions were absent: the face was performing speech without the emotional texture that real human faces produce constantly without thinking. The uncanny valley for AI avatars was real and it made these tools unsuitable for professional commercial work.</p>
<p>HeyGen Avatar IV, the 2025 model, addressed these failures at a technical level that changes the evaluation. Full-body motion capture. Timing-aware hand gestures that track the emotional tone of the script. Micro-expressions (blinks, eyebrow movement, subtle smiles) that occur at frequencies matching real human performance. Lip-sync accuracy that adapts across languages so that translated content looks native rather than dubbed.</p>
<p>The uncanny valley still exists for audiences watching closely on professional monitors. For the majority of distribution contexts (social video, digital advertising, internal corporate communications, online training), Avatar IV produces output that doesn't trigger the immediate recognition of "this is generated" that earlier versions did. That is the threshold that matters for commercial viability.</p>

<h2>The Localization Economics Are the Real Story</h2>
<p>Traditional dubbing for commercial content is priced per finished minute, and every market adds the same line again: voice casting in the target language, studio time, direction, sync adjustment, and final mastering. Small and mid-sized brands run that calculation and decide to localize into one or two markets rather than five.</p>
<p>HeyGen lists <a href="https://www.heygen.com/translate" target="_blank" rel="noopener">175+ languages and dialects</a> for translation. The localization workflow: upload the original video, select the target languages, and the system generates translated versions with lip sync re-synced to match the target language's mouth movements rather than the original language. The translated spokesperson video looks native: the lip movement matches the language being spoken rather than being an approximation of the original performance.</p>
<p>For brands and production companies willing to accept AI-generated localization rather than re-recorded human performance, the cost reduction is substantial. The <a href="https://www.heygen.com/pricing" target="_blank" rel="noopener">plans on November 3</a>: Creator at $29/month for 600 credits, with Avatar III and IV and limited Avatar V; Pro at $49/month for 1,000 credits, with Avatar V; Business at $149/month for 1,500 credits plus $20 per extra seat. HeyGen does not publish a per-minute credit cost on that page and says usage varies by model, duration and complexity, so run one short test render and read the credit counter before you quote a client. Even with that caveat, relative to per-minute dubbing rates, the economics of multi-market localization change at that price point.</p><p>The pricing pages leave out the part that hurts inside a real delivery, which is that a translated script almost never lands in the same duration as the original. Portuguese comes out longer than English, so the read stretches and every beat that was cut to picture slides out of place, the super, the product shot, the last frame with the logo. On a client job I would lock the timing first, write the original for whichever language runs longest, and fit the shorter versions inside that, instead of accepting whatever duration comes back and repairing the edit afterwards. I would also keep the voice in ElevenLabs and let HeyGen carry only the face, because the read is the performance and I am not handing that to a pipeline.</p>

<h2>How to create a HeyGen avatar with Avatar V</h2>
<p>The recording is the whole job. The model can only keep what the fifteen seconds give it. This is the order I would follow, built from what HeyGen publishes about Avatar V:</p>
<ol>
<li><strong>Get consent in writing first.</strong> If the face is not yours, the person signs for this use, these markets and this period. A face is not a stock asset.</li>
<li><strong>Record at least 15 seconds, facing the lens.</strong> Steady camera, eye level, upper body in frame, hands visible at some point, because Avatar V reproduces upper-body movement.</li>
<li><strong>Light it like a talking head, not like a film.</strong> Soft key, no hard shadow across the face, nothing blinking in the background. Whatever is in the clip becomes part of the identity.</li>
<li><strong>Talk the way the avatar will talk.</strong> Energy recorded is energy kept. A flat read gives you a flat twin, and text direction later only pushes so far.</li>
<li><strong>Create the custom avatar from that clip, then generate one short line.</strong> Check mouth, teeth and hands on that line before you write a single script.</li>
<li><strong>Direct with one sentence per beat.</strong> "Leans in, lowers the voice, small smile on the last word" works better than a paragraph of adjectives.</li>
<li><strong>Translate last.</strong> Lock the master in the original language, then create the language versions, and check the timing of each one against the edit.</li>
</ol>
<p>The recording checklist I would tape next to the camera:</p>
<pre><code>[ ] Signed consent: person, use, markets, dates
[ ] 15 s minimum, single take, no cuts
[ ] Eye level, steady, upper body in frame
[ ] Soft key light, no moving background
[ ] Wardrobe without fine stripes or logos
[ ] Natural energy, the same the scripts will need
[ ] Test line rendered and checked before scripting</code></pre>
<p>For the voice side, I keep the read with a cloned voice in ElevenLabs, which I covered in <a href="/blog/elevenlabs-voice-ai-voice-id-review-2026/">the ElevenLabs voice review</a>. For what YouTube now does for free on the dubbing side, and what it will not let you fix, see <a href="/blog/youtube-ai-dubbing-27-languages-what-it-cannot-do/">YouTube auto dubbing</a>.</p>

<h2>The Production Quality Conversation</h2>
<p>As a director, I want to be direct about the limitation: Avatar V, like Avatar IV before it, is excellent for what it is, and what it is not is a replacement for a skilled on-camera talent in a production context where the performance quality matters.</p>
<p>Human spokespeople in brand content carry credibility that AI avatars don't yet replicate, for specific reasons that go beyond visual quality. Authenticity signals in performance (the particular way a skilled communicator reads a pause, handles a difficult word, or allows genuine enthusiasm to come through) are not the same as technically correct lip sync and motion capture. Audiences receive these signals without being able to articulate them, and they affect trust in the message being delivered.</p>
<p>For content where the spokesperson is a known figure (a CEO, a public personality, a recognized expert), AI avatars are not a replacement. For content where the spokesperson is a generic brand representative whose job is functional communication rather than personal trust, Avatar IV performs well enough that the practical distinction from real performance is minimal for most audiences.</p>

<h2>The Right Use Cases</h2>
<p>Where HeyGen Avatar IV performs well in commercial production: internal training and corporate communications where the audience is already invested and authenticity is a secondary signal to clarity. Multi-market localization where re-recording in each language is cost-prohibitive. High-volume content programs (product tutorials, FAQ videos, update announcements) where consistent visual brand presence matters more than individual performance nuance. Social media content at high production volume where per-unit cost needs to stay low.</p>
<p>Where real talent remains the right choice: brand films where performance quality is central to the brand's image. Content directed at audiences with high sensitivity to authenticity signals: premium brands, healthcare, financial services, any category where trust is built through human presence. Content featuring named or known spokespeople where the individual identity carries brand value. Anything that will run on broadcast where professional QC will scrutinize the output at full resolution.</p>
<p>The practical workflow question for a production company: does this particular piece of content require performance quality that AI can't currently replicate, or does it require consistent, competent communication at scale? The answer determines the tool.</p>
<p><em>Sources: <a href="https://www.heygen.com/pricing" target="_blank" rel="noopener">HeyGen pricing (read Nov 3, 2026)</a> | <a href="https://www.heygen.com/blog/heygen-april-2026-release" target="_blank" rel="noopener">HeyGen April 2026 release</a> | <a href="https://www.heygen.com/blog/heygen-may-2026-release" target="_blank" rel="noopener">HeyGen May 2026 release</a> | <a href="https://www.heygen.com/tool/custom-avatar" target="_blank" rel="noopener">HeyGen custom avatar</a> | <a href="https://wavespeed.ai/blog/posts/heygen-avatar-iv-complete-guide-2026/" target="_blank" rel="noopener">WaveSpeed AI, HeyGen Avatar IV Complete Guide 2026</a> | <a href="https://www.ezugc.ai/blog/heygen-review" target="_blank" rel="noopener">EzUGC, HeyGen Review 2026: Real Costs and Avatar IV Limits</a> | <a href="https://wavespeed.ai/blog/posts/heygen-vs-synthesia-comparison-2026/" target="_blank" rel="noopener">WaveSpeed AI, HeyGen vs Synthesia 2026</a></em></p>
