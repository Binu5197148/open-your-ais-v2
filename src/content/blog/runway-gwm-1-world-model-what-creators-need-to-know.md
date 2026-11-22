---
id: "art-072"
title: "Can You Use Runway GWM-1? The Reality Check"
description: "Runway's world model in November 2026: Characters is on sale, Worlds 2 is still a 720p preview behind a form, and the newest release went to robots, not film."
pubDate: "2026-03-15"
updatedDate: "2026-11-22"
toolVersion: "2026-11"
category: "AI"
tags:
  - "Runway"
  - "GWM-1"
  - "World Model"
  - "AI Video"
  - "Production Tools"
heroImage: "https://images.unsplash.com/photo-1654773615210-cc0e1899d934?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxOXx8dGhlYXRlciUyMHN0YWdlJTIwZHJhbWF0aWMlMjBsaWdodGluZ3xlbnwxfDB8fHwxNzc2NzI0MjYyfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "9 min read"
---

<section class="article-note note-correction">
<h2>Update</h2>
<p>Updated Nov 22, 2026: two things were rechecked on Runway's own pages today. First, GWM Worlds 2 is still a research preview and the only way in is still the contact form, eleven weeks after the announcement. Second, Runway's newest world model release is not for film at all: <a href="https://runway.com/research/introducing-praxis-1" target="_blank" rel="noopener">Praxis-1</a>, an open-weight model for controlling real robots, became available on November 11. A new section below reads what that says about where the company's world model effort is going, and there is now an access brief to copy if you want to ask for Worlds 2.</p>
<p>Updated Oct 12, 2026: this piece first ran in March, when GWM-1 was mostly a research announcement. Since then GWM Avatars shipped as Runway Characters on the Runway API and web app, and on September 3 Runway announced GWM Worlds 2 as a research preview. The availability section below now describes that state, and a new section answers whether you can use the world model today. Runway is not part of the author's current production stack: this is a documentary analysis of Runway's own pages, and nothing here was tested for the article. An earlier version described the location-scouting idea as part of the author's workflow; that wording was corrected.</p>
</section>

<h2>A World Model Is Not a Video Generator</h2>
<p>When Runway announced GWM-1, most coverage framed it as a video generation upgrade. It is not. Understanding the difference matters if you want to figure out where it fits in a production workflow.</p>
<p>A video generator takes a prompt and produces a clip. You get output, you evaluate it, you generate again if needed. The process is linear and disconnected: each generation is independent.</p>
<p>A world model builds an internal representation of an environment and uses it to simulate what happens next based on actions and inputs. It is persistent, interactive, and controllable in real time. You are not generating a clip. You are navigating a simulated space.</p>
<p>GWM-1 runs at 720p and, according to Runway, sustains up to two minutes of video in a session. It responds to camera pose commands, audio inputs, and movement instructions. The output is not pre-rendered. It is generated frame by frame as you interact.</p>

<h2>Three Variants, Three Different Use Cases</h2>
<p><strong>GWM Worlds</strong> takes a static scene as input and generates an infinite, explorable version of it. You can navigate through the space as if it were a 3D environment: geometry, lighting, and physics behave consistently as you move. The obvious application is virtual location scouting and set visualization, but also pre-visualization of environments before committing to building or shooting on location.</p>
<p><strong>GWM Avatars</strong> generates photorealistic conversational characters driven by audio. Facial expressions, eye movement, lip-sync, and gesture are all produced from an audio input. The model maintains quality through extended conversations without degradation. For creators, this is the most immediately interesting variant. It solves the hardest problem in AI character work, which is making a face look human through sustained interaction rather than in a single frozen frame.</p>
<p><strong>GWM Robotics</strong> is the variant least relevant to video creators. It is designed for training robotics systems and simulating robot trajectories. The engineering application is real but it is a different audience.</p>

<h2>Where GWM Avatars Is Genuinely Useful Now</h2>
<p>The Avatars variant deserves specific attention because it closes a gap that has been frustrating in commercial work.</p>
<p>Current AI video generation handles faces poorly in motion. Static portraits look acceptable. The moment you add speech, sustained eye contact, or natural head movement across a longer clip, quality degrades in ways that are immediately visible and unusable for any client-facing output.</p>
<p>GWM Avatars is built specifically to hold quality through sustained conversation. Audio-driven lip-sync with matching facial expressions and gesture, not a single optimized frame but a continuous interaction.</p>
<p>For explainer content, brand spokesperson work, educational video, or any format where you need a convincing human presence on screen without a shoot, this is a meaningful step forward. The quality is not at the level where it replaces a real actor for premium commercial work. But for content types where the standard is lower (internal training videos, product walkthroughs, social content), the gap to "good enough" is closing.</p>

<h2>Where It Is Still Not Ready</h2>
<p>720p is the ceiling for now. That is acceptable for web and social delivery. It is not acceptable for anything going to broadcast, theatrical, or high-end digital distribution. The resolution constraint alone limits the professional use cases significantly.</p>
<p>The Worlds variant produces environments that are visually coherent but not geometrically precise. If you need to navigate a space and make accurate spatial decisions (real pre-production location planning), the output is not reliable enough yet. It is more useful for general atmosphere and mood than for precise spatial reasoning.</p>
<p>Availability is uneven across the three. At launch in December 2025, Robotics went out as an SDK by request and Avatars and Worlds were early access. Avatars has since opened up; Worlds has not. The next section has the details as of November 2026.</p>

<h2>Can you use Runway's world model today?</h2>
<p>Partly. It depends on which of the three you mean, and the answer as of November 22, 2026 is this:</p>
<ol>
<li><strong>Avatars: yes.</strong> GWM Avatars is sold as Runway Characters. Runway's research page says it is available through the Runway API and the Runway web product, and Runway publishes a <a href="https://github.com/runwayml/avatars-sdk-react" target="_blank" rel="noopener">React SDK for real-time avatar sessions</a> on GitHub, MIT licensed and last pushed on November 9. This is the one variant a small team can open this week.</li>
<li><strong>Worlds: not publicly.</strong> <a href="https://runway.com/research/introducing-gwm-worlds-2" target="_blank" rel="noopener">GWM Worlds 2</a>, announced September 3, 2026, generates 720p at 24 fps with 48 kHz audio and, per Runway, can run indefinitely. It is labelled a research preview, and the only route in is a contact form. Runway itself lists the limits: fidelity traded for speed, fast camera turns degrade geometry, imperfect long-term memory, and no image references beyond the first frame.</li>
<li><strong>Robotics: by request, and now with open weights.</strong> Access to GWM Robotics goes through Runway's developer portal and a Python SDK. On November 11 Runway also made Praxis-1 available, which it calls its first open-weight world action model. Not a filmmaking tool.</li>
</ol>
<p>So the virtual scouting use described below is still a preview-access scenario, not something to sell a client as standard. If you want to judge it yourself, the route is to read Runway's own limitation list first, then ask for access with a specific location problem in hand rather than a general curiosity.</p>

<h2>Why is Runway's newest world model for robots, not film?</h2>
<p>Look at the release order on Runway's research page. September 1, a model that generates software interfaces frame by frame. September 3, GWM Worlds 2, a research preview. November 11, Praxis-1, which Runway describes as a 27 billion parameter video model turned into a controller for real robot arms, with the weights open.</p>
<p>Of those three, the only one that shipped to the public is the robotics one. The one a director would use is the one still behind a form.</p>
<p>I do not read that as bad news for film, and I do not read it as a promise either. It is a signal about priority. The same video pretraining feeds both, and Runway says so on the Praxis-1 page. But a robotics lab can use a 720p simulator today, because it needs physics that are roughly right, not a frame a client will approve. A commercial needs the opposite. So the robot customer gets served first.</p>
<p>What it means in practice: do not plan a 2026 job around Worlds. Plan it around the tools that are sold, and treat the world model as something to request, test on one real problem, and report back on.</p>

<h2>The access brief to send, if you want to try Worlds 2</h2>
<p>Runway's form asks for name, business email, company, company size and a free text field of up to 2,000 characters. The free text is the only part that tells them why you are worth a slot. A brief with a real location problem in it reads differently from curiosity. Copy and fill in:</p>
<pre><code>WHO WE ARE
Production company, city, and one line on the work we deliver:

THE LOCATION PROBLEM
Brand or type of job (no confidential names if under NDA):
Location the script asks for:
Why we cannot scout it physically before approval (distance, cost, permit, season):

WHAT WE WOULD DO WITH WORLDS 2
Walk the client through the space on a call before any travel is booked.
Decide: time of day, two or three camera positions, what must be built.
We understand the output is 720p, 24 fps, not geometrically exact,
and that fast camera turns degrade detail. It is for alignment, not measurement.

WHAT WE WOULD REPORT BACK
Whether the client's decision held when we reached the real location.
Where the simulated space misled us.

TIMELINE
Date of the client call we would use it on:</code></pre>
<p>The limits in that brief are Runway's own, from the Worlds 2 page. Stating them yourself shows you read it. I have not sent this form, and nothing here says how Runway chooses who gets in.</p>

<h2>The Direction This Points</h2>
<p>What GWM-1 signals more than its immediate usability is where the technology is heading. The gap between "generate a clip" and "simulate an environment" is collapsing. The next generation of production tools will not just output video. They will let you navigate, iterate, and direct inside a simulated space before committing any resources to physical production.</p>
<p>For a director, that changes pre-production in a fundamental way. The cost of testing a visual approach before a shoot drops to near zero. The ability to show a client what a location will look like before you have booked it, or how a character will move before you have cast them, becomes a standard part of the workflow.</p>
<p>GWM-1 is the early version of that future. It is not there yet. But it is the clearest signal so far of what "there" looks like.</p>

<h2>Where this fits in pre-production right now</h2>
<p>If a world model earns a place in a commercial workflow, the first application is a single one. When a client asks for an expensive or distant location, instead of booking physical scouting, you navigate the simulated version with them on a call. It is not geometrically accurate, and that has to be said to the client on the same call. But it works to align expectations before spending on flights, day rates, and crew.</p>
<p>It is the same logic as <a href="/blog/blender-mcp-claude-blockout-previs-director-workflow/">a rough blockout before previs</a>: cheap answers before expensive ones. It is the first time an AI video tool addresses a pre-production pain instead of competing with final-output production. That matters more to me than any benchmark number Runway publishes.</p>

<p><em>Sources (rechecked Nov 22, 2026): <a href="https://runway.com/research" target="_blank" rel="noopener">Runway Research index</a> | <a href="https://runway.com/research/introducing-praxis-1" target="_blank" rel="noopener">Runway Research: Introducing Praxis-1</a> | <a href="https://runway.com/research/introducing-runway-gwm-1" target="_blank" rel="noopener">Runway Research: Introducing GWM-1</a> | <a href="https://runway.com/research/introducing-gwm-worlds-2" target="_blank" rel="noopener">Runway Research: Introducing GWM Worlds 2</a> | <a href="https://github.com/runwayml/avatars-sdk-react" target="_blank" rel="noopener">runwayml/avatars-sdk-react on GitHub</a> | <a href="https://techcrunch.com/2025/12/11/runway-releases-its-first-world-model-adds-native-audio-to-latest-video-model/" target="_blank" rel="noopener">TechCrunch: Runway releases its first world model</a></em></p>
