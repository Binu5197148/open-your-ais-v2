---
id: "art-175"
title: "AI Short Drama: The Format Built Around AI's Flaws"
description: "Ninety second vertical episodes hide most of what generative video still gets wrong. The fit is structural, not a happy accident, and it will not hold."
pubDate: "2026-08-27"
toolVersion: "2026-08"
category: "AI"
tags:
  - "AI Short Drama"
  - "Microdrama"
  - "Kling"
  - "Seedance"
  - "Busan"
  - "Directing"
heroImage: "https://images.unsplash.com/photo-1490971774356-7fac993cc438?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw2fHxiYWNrc3RhZ2UlMjBwcm9kdWN0aW9uJTIwY3Jld3xlbnwxfDB8fHwxNzg3ODM2NDMzfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<p>Yesterday, on August 26, 2026, the Asian Contents and Film Market in Busan published the lineup for InnoAsia 2026. Google DeepMind. Amazon Web Services. Alibaba Cloud. Kling AI. BytePlus. Netflix's VFX studio Eyeline Studios. The program runs October 10 to 13 at BEXCO, and Kling AI is co-hosting two of its own sessions with the market itself.</p>

<p>Every write up I read led with that guest list. Look who came to the film market. The infrastructure companies are inside the building now.</p>

<p>Read the schedule instead. Sitting in the same program is a panel called Microdrama: Data, AI, Formats and Audiences, China and Beyond, with executives from Mango TV, FlickReels and Vigloo. That panel is the actual news, and it tells you something no benchmark has managed to say in a year. AI short drama is not a side effect of the video models getting good. It is the format they were built for, whether or not anyone designed it that way.</p>

<h2>What AI short drama actually is</h2>

<p>Be precise about the thing before arguing about it.</p>

<p>A short drama is a vertical series. Sixty to a hundred episodes, each one running about a minute or two, watched on a phone, usually free for the first stretch and then paywalled at the exact moment you stop being able to walk away. The writing is built around that paywall. Betrayal, reveal, cliffhanger, repeat. It came out of China, it went global, and the market is now large enough that a film festival built a panel around it instead of a footnote.</p>

<p>The AI part is newer. Studios and solo operators generate the footage instead of shooting it, and the economics are not subtle. A live action season needs a cast, a location, a crew and a schedule. A generated one needs one person with prompt discipline and a render budget.</p>

<p>The industry read on this is that AI came for the cheap end of the market first, the way it always does. I think that read is backwards.</p>

<h2>Why does the format fit the model instead of the model fitting the format?</h2>

<p>Take every real failure of generative video and write it down honestly.</p>

<p>Faces drift across a long sequence. Physics falls apart when an action has consequences three shots later. Continuity of a room, a costume, a scar, a coffee level, degrades the longer you ask the model to hold it. Camera grammar collapses when a scene needs to be staged in depth with two people at different distances doing different things. Every one of those is a duration problem or a depth problem.</p>

<p>Now look at the format. Episodes of ninety seconds. Shots that rarely run past eight. A vertical frame that physically cannot stage depth in width, so it stages one face, close, centered. Sets that are a bedroom, an office, a car. Emotional beats that reset every episode because the audience is expected to arrive mid season and stay anyway.</p>

<p>The format never asks the model for the thing the model cannot do.</p>

<p>I run Kling and Seedance on paying jobs, so this is not theory to me. Kling 3.0 holds a character across a multi shot sequence better than anything I used a year ago, and Seedance 2.5 carries continuity through a long single take instead of handing me fragments to reconcile. In a feature I would still find the drift. It shows up in act two, on the third day of the edit, when a face has quietly become someone else's face. In a ninety second episode the drift has nowhere to accumulate. The episode is over before the model runs out of memory.</p>

<p>There is more. Short drama lighting is flat and bright, because phones get watched in daylight on a bus. Generative video is very good at flat and bright and very bad at a single hard source raking across a face. The format's aesthetic floor sits exactly where the model's ceiling is. What would read as a failure in a film reads as house style here.</p>

<p>This is also why the multi shot argument matters more here than anywhere else. I wrote about that when LTX 2.5 shipped native multi shot and <a href="/blog/ltx-2-5-multi-shot-the-model-is-making-your-cut/">the model started making the cut</a>. In a film, handing the edit point to the model is a serious loss. In a format where the cut lands on a metronome anyway, nobody is going to miss it.</p>

<h2>The part that should worry a director, and it is not the one you expect</h2>

<p>The obvious objection is that this is disposable content and beneath discussion. I do not believe that, and I think the people saying it have not looked at what constraint does to writing.</p>

<p>I directed advertising for fourteen years. Starbucks, Nestlé, Yamaha, Carrefour, Benefit. The thirty second slot was not handed down by an artist. It was set by media buyers who were not thinking about my work for one second. That constraint produced some of the sharpest directing of the last fifty years, because a form with a hard wall forces you to decide what the thing is about before you shoot a frame of it. Brazilian television learned the same lesson from the telenovela. A chapter a day, a hook at the end of every one, and out of that machine came writers who could build a scene faster than almost anyone alive.</p>

<p>So the format is not the problem. Here is the problem.</p>

<p>In advertising, the wall was time. Thirty seconds, and inside it you were free. In short drama, the wall is retention. The cliffhanger does not arrive when the scene has earned it. It arrives when the curve says a viewer is about to leave. That is a different kind of constraint, because it does not shape the story from the outside. It reaches in and sets the beats.</p>

<p>And a generative pipeline makes that worse, not better, because it removes the last piece of friction that used to protect the writing. When shooting an episode costs a day and a crew, somebody in the room asks whether the scene is any good. When it costs a render, nobody asks. You just make another one.</p>

<h2>What I would actually do this week</h2>

<p>If you want to build one, the order of operations matters more than the model you pick.</p>

<p>Start with the character, not the shot. Lock the faces first and treat them as assets, not as prompts you rewrite each time. Nano Banana Pro exists for exactly this, and a character sheet built once will save you more time than any prompt trick. If your lead's face changes in episode nineteen, the season is dead and no amount of good writing brings it back.</p>

<p>Then map the paywall before you write a line of dialogue. Decide where the free episodes end and mark every hook on a single page. This is the one part of the process I would not let a model near. Retention structure is the closest thing this format has to direction, and if you outsource it you have outsourced the show.</p>

<p>Then write to shot lengths you know the model can hold. Not to the length you wish it could hold. I use start and end frames in Kling to fix the boundaries of a shot rather than hoping the motion lands, and I keep speech in Seedance where it belongs instead of generating silent picture and fighting the sync later. There is a longer version of that method in <a href="/blog/how-to-use-seedance-2-5-director-prompting-method/">how I prompt Seedance 2.5 as a director</a>.</p>

<p>And keep your own copies of everything. Character sheets, approved frames, the seed of every take you liked. Access to these models is a rental, and the terms move under you. Alibaba's last four flagship video releases shipped with <a href="/blog/wan-3-0-ships-closed-open-line-stopped-at-2-2/">no weights at all</a>. If your series lives inside somebody's account, so does your season two.</p>

<h2>The honest close</h2>

<p>Busan did not put a microdrama panel next to Google DeepMind by accident. A film market schedules what money is moving toward, and the money is moving toward the one format where generated footage is not a compromise.</p>

<p>I am not going to pretend that makes me comfortable. There is something bleak about a form whose grammar was written by a retention graph. But I have been in this industry long enough to have watched the same complaint made about the thirty second spot, about music video, about the telenovela chapter, and every one of those turned out to be a school. What decides it is not the format. It is whether a person is still choosing where the cut lands and why the scene exists.</p>

<p>The models will hand you the footage. Keep the hooks. That is the whole job.</p>
