---
id: "art-165"
title: "Claude Code Agents: How the Gauntlet Loop Actually Works"
description: "The Gauntlet Loop turns Claude Code agents into a crew: executors, harsh verifiers, and a loop that only stops when every reviewer is impressed. A director explains why it works."
pubDate: "2026-08-12"
updatedDate: "2026-08-13"
category: "AI"
tags:
  - "Workflow"
  - "Claude Code"
  - "AI Agents"
  - "Prompt Engineering"
  - "Craft"
heroImage: "https://images.unsplash.com/photo-1496559249665-c7e2874707ea?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw5fHxmaWxtJTIwc2V0JTIwY2luZW1hdG9ncmFwaHl8ZW58MXwwfHx8MTc4NjUzNjkyN3ww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "8 min read"
---

<p>Andrej Karpathy fed the first paragraph of The Lord of the Rings to a coding agent, set a budget of one million tokens, roughly ten dollars, and walked away for two hours. What came back was a three dimensional scene running in a browser, about 5,500 lines of code written without him touching the keyboard again. Days earlier, Matt Shumer had posted a first person shooter with physics and lighting that people refused to believe came from a single prompt.</p>

<p>Neither result came from a better model. Both came from the same prompt structure, now called the Gauntlet Loop, and it is the most useful thing to happen to Claude Code agents this year. I have been running it on production work, and the reason it clicks for me has nothing to do with code. It is the way a film set has always worked.</p>

<h2>The three levels of asking</h2>

<p>Almost everyone using AI is stuck on level one, including people who use it all day.</p>

<p><strong>Level one.</strong> You ask, the agent produces, and you review. You are the quality control. It works until you get tired, and you always get tired before the machine does.</p>

<p><strong>Level two.</strong> You ask, the agent produces, and a second agent reviews before anything reaches you. Anthropic has recommended this for a while and it is a genuine jump in quality. Most people never get here.</p>

<p><strong>Level three, the Gauntlet Loop.</strong> A team of agents produces and a team of agents verifies, in parallel, in a loop, and nothing reaches you until every reviewer signs off. This is the level where the strange results come from.</p>

<h2>The three pillars of the prompt</h2>

<p>The structure is short enough to memorize.</p>

<p><strong>One, the task, with a named quality bar and a real comparison.</strong> Not "build a shooter" but build it at the level of the most recent Call of Duty, AAA quality, from textures to physics. The reference is not decoration. It becomes the ruler the verifiers measure against later, and a prompt without a reference produces work with nothing to fail against.</p>

<p><strong>Two, the methodology.</strong> Fan the work out into sub-agents, one per area, running in parallel rather than in a queue. Then, and this is the part people skip, pair every executor with a separate verifier whose only job is to judge that one area. Shumer's instruction is that the verifier should be a "really harsh critic". If the work does not clear the bar, it goes back.</p>

<p><strong>Three, the stopping criterion.</strong> This is the genius of it. The loop does not stop when the thing works. It stops when every verifier is, in his words, "utterly wowed" by the quality compared against the real reference, having literally put them side by side and said which one is better. When subjective is too loose for your case, swap it for a score from zero to one hundred and refuse anything under eighty five.</p>

<h2>Why a film director recognizes this immediately</h2>

<p>Fourteen years of directing and this is just a crew.</p>

<p>On a set, the director does not light the scene, record the sound, or build the props. Department heads do. Each department has its own quality control, and the director's actual job is a single repeated decision: is this good enough to keep, or do we go again. The whole apparatus exists so that nothing reaches the edit that has not already survived somebody whose entire job was to be unimpressed by it.</p>

<p>That is the Gauntlet Loop, described in production terms. The master agent is the director assembling a crew. The sub-agents are departments. The verifiers are the people who say "one more take" when the take was fine but not right. And the stopping criterion, wow me or keep going, is the note every director has given a thousand times.</p>

<p>Not because the machine learned taste. Because someone finally wrote the crew structure into the prompt, and a crew is what turns competence into quality.</p>

<h2>The four upgrades that separate a good prompt from a shipping one</h2>

<p>Running this technique for real surfaces things the original prompt does not cover.</p>

<p><strong>Verification has to be real, not code review.</strong> A verifier that only reads the code approves broken work with confidence. The verifier has to use the product the way the audience will: open the browser, click the buttons, play the game, take the flow end to end. Tell it to use browser automation, and if the tool is not installed, to install it before verifying. This single instruction is the difference between "the code looks correct" and "I used it and it works".</p>

<p><strong>Judge blind.</strong> The verifier should not know how the work was made or how many attempts it took. Anyone who has cooked dinner knows their own food gets a discount that a restaurant plate never receives. Hand the reviewer the result and the criteria, never the history.</p>

<p><strong>Cap the loop.</strong> Infinite loops eat hours and tokens with a straight face. Three rounds on a heavy project can burn four hours. Set a maximum number of rounds, and a token budget when it matters. Karpathy's ten dollar ceiling was not a limitation, it was the design.</p>

<p><strong>Parallel, not sequential.</strong> Ten deliverables in a queue cost ten times the wall clock of ten deliverables side by side. When the parts are independent, say so explicitly, and consolidate at the end.</p>

<h2>This is not only for code</h2>

<p>The technique moved into my film work immediately, because the shape fits anything with a quality bar.</p>

<ul>
<li><strong>Video.</strong> The reference is a real commercial. The verifier watches the render and compares shot by shot: sharpness, continuity, typography, whether the world drifted between clips. Executors split into script, still, animation, sound, caption, edit.</li>
<li><strong>Websites.</strong> The reference is a site in the same market you admire. The verifier navigates it, tests every button, checks the phone. That is exactly how I would rebuild the <a href="/blog/scroll-animation-website-ai-video-case-study/">scroll animation site</a> if I were starting it today.</li>
<li><strong>Campaigns.</strong> The reference is the piece that actually performed. The verifier scores hook, clarity and call to action against it.</li>
</ul>

<p>The pattern is always the same: name the bar, split the work, pair every maker with a skeptic, and refuse to stop at adequate.</p>

<h2>The part that is still yours</h2>

<p>Here is what nobody says out loud about this technique. It does not decide what good means. You do.</p>

<p>The reference is your choice. The quality bar is your standard. When fifty verifiers argue about whether something is impressive, they are arguing inside a definition you wrote in the first paragraph. Give the loop a weak reference and it will converge, efficiently and expensively, on mediocrity.</p>

<p>It is the amplifier argument again, and this technique is the clearest proof of it I have found. AI is a modern child with hyperfocus: it will unfold whatever problem you hand it, for as long as you let it, with a patience no human has. Hand it a poor definition of excellence and it amplifies that. Hand it a real one and it will chase that definition for four hours without complaining once.</p>

<p>The machine will do the takes. Knowing which one to keep is still the job, and it is the same job it has always been. I wrote about that when <a href="/blog/ai-replacing-jobs-nobel-economists-letter-directors-answer/">the economists warned about AI and work</a>, and this technique does not soften that argument. It sharpens it.</p>

<p>Write the bar high. Then let the crew chase it.</p>

<section class="article-note note-correction">
<h2>Correction</h2>
<p>Correction 2026-08-13: line count corrected from "about 5,400 lines" to "about 5,500 lines". Karpathy's own post (x.com/karpathy, status 2083749667410727319) states 5500 lines; corroborated by BigGo Finance and the-decoder.</p>
</section>
