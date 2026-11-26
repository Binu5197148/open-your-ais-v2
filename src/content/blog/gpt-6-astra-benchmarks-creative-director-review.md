---
id: "art-184"
title: "The GPT-6 Model You Should Be Using (Not Astra)"
description: "GPT-6.2 Astra and Sol shipped on November 17, Terra moved to 6.1 and 6.1 Astra was cancelled. No benchmark measures creative work. Which to use, and a test."
pubDate: "2026-09-09"
updatedDate: "2026-11-26"
category: "Models"
tags:
  - "GPT-6 Astra"
  - "OpenAI"
  - "AI Models"
  - "Creative Workflow"
  - "Benchmarks"
heroImage: "https://images.unsplash.com/photo-1642290687545-8ab7e6002472?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw0fHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjBhcnRpc3RpY3xlbnwxfDB8fHwxNzg4OTU4MTU4fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "9 min read"
toolVersion: "2026-11"
---

<p><em>Updated November 26, 2026. The lineup moved twice more since the last update. On September 29, at DevDay, OpenAI released <a href="https://thenextweb.com/news/openai-gpt-6-1-sol-price-astra-devday" target="_blank" rel="noopener">GPT-6.1 Sol</a> at $2 per million input tokens and $10 per million output, a fifth of GPT-6 Astra's standard prices. On October 26 the mid-size model got its turn with <a href="https://9to5mac.com/2026/10/26/openai-upgrades-chatgpt-and-codex-with-new-gpt-6-1-terra-model/" target="_blank" rel="noopener">GPT-6.1 Terra</a>, priced 50% below GPT-5.6 Terra. And on November 17 OpenAI shipped <a href="https://9to5mac.com/2026/11/17/openai-upgrades-chatgpt-and-codex-with-new-gpt-6-2-astra-and-sol-models/" target="_blank" rel="noopener">GPT-6.2 Astra and GPT-6.2 Sol</a>, now its top two models, with Astra's API prices 20% lower than GPT-6 Astra and Sol keeping the 6.1 price. GPT-6.1 Astra stays cancelled: it was dropped in October after internal safety tests, first reported by the Wall Street Journal and relayed by <a href="https://bernama.com/en/world/news.php?id=2613183" target="_blank" rel="noopener">Bernama</a> and <a href="https://www.androidauthority.com/open-ai-gpt-6-1-astra-canceled-security-concerns-3716551/" target="_blank" rel="noopener">Android Authority</a>. The benchmark argument below still holds for every one of these releases, and the comparison section now covers the current four tiers. This is a documentary read: no model was run for this article.</em></p>

<h2>Read the Scoreboard Before You Read the Headline</h2>
<p>OpenAI announced GPT-6 Astra on 3 September and started rolling it out the next day, calling it the most intelligent and aligned model in the world. The numbers it led with are real and they are large: 98 percent on FrontierMath Tier 4, 99.9 percent on ARC-AGI-3, 100 percent on ExploitBench, the best software engineering scores it has published, and computer use roughly twice as fast as before. Reporting says it came out ahead of both GPT-5.6 Sol and Claude Fable 5.</p>
<p>Now read that list again and look for the part that concerns you, if what you do is make things that people look at.</p>
<p>Mathematics. Abstract reasoning puzzles. Finding software exploits. Writing code. That is the whole scoreboard. Not one of those benchmarks measures whether a frame reads at a glance, whether a cut lands, whether a line of voiceover sounds like a person said it out loud, or whether a board of ten images holds together as one idea.</p>
<p>This is not a complaint about the model. It is a warning about buying on somebody else's scoreboard.</p>

<h2>What GPT-6 Astra Changes for a Production Stack</h2>
<p>I run these things every day on paid work, so let me be concrete about where a launch like this lands.</p>
<p>The one number on that list that matters to me is computer use, roughly twice as fast. That is the part where the model stops answering and starts operating: opening the tool, filling the field, running the job, reading the result, going again. In a pipeline where an assistant is driving generation and gathering the output, speed there is not a benchmark, it is the difference between a batch that finishes before lunch and one that does not.</p>
<p>The software engineering gains matter too, indirectly. The automation around my work is code. Better code assistance means the scaffolding gets built faster.</p>
<p>What does not change, at all, is the part that decides whether the piece is any good. No model on the market is being graded on taste, and Astra is not the exception. It is the clearest example yet of an industry measuring the things it knows how to measure.</p>
<p>There is a second thing worth saying plainly. OpenAI shipped this one alongside its own warning about how capable it is at cybersecurity work, which is not a sentence companies write about a product launch unless they mean it. Safety researchers quoted in the coverage made the same point from the other side, that capability is moving faster than anyone's ability to predict and control it. You do not have to take a position on that to notice it is unusual.</p>

<h2>Should You Switch Today?</h2>
<p>Probably not today, and the reason is boring rather than principled.</p>
<p>Access is arriving in stages. It went to a limited set of organisations first, then out across Plus, Pro, Business and Enterprise, plus the API and AWS. There is a Pro variant on the higher tiers. Usage sits inside the subscription allowance you already pay for, with extra credits available if you burn through it. So for most people this is not a purchase decision at all. It is a model that will appear in a dropdown you already own.</p>
<p>That changes the question. It is not "is it worth paying for". It is "is it better at my work than the one I am using", and nobody can answer that for you, because your work is not on any benchmark.</p>
<p>Here is the part people get wrong. They read a launch post, switch their default model, and then spend three weeks wondering why the output feels different in a way they cannot name. A model change is a change to the most important collaborator in the room. Treat it like hiring, not like updating an app.</p>

<h2>Test It Against Your Own Work in One Afternoon</h2>
<!-- Correction 2026-10-23: "This is the method I use whenever a model lands" presented the routine as a documented personal practice. Reframed as a method, without the first-person claim. -->
<p>Here is a method for whenever a model lands. It costs you a few hours rather than a project.</p>
<ol>
<li><strong>Pull three jobs you already finished and were happy with.</strong> Finished work is the only honest benchmark, because you already know what good looked like. Never evaluate a new model on a new problem, because you cannot separate the model from the difficulty.</li>
<li><strong>Give it the original brief, not your improved version.</strong> The messy client brief, the one with the contradiction in paragraph two. That contradiction is the test. Watch whether it notices, asks, or steamrolls past it.</li>
<li><strong>Run the same prompt on your current model, in a separate window, at the same time.</strong> Side by side or it did not happen. Memory of how the old model performed is not evidence, it is nostalgia.</li>
<li><strong>Judge it on the second and third pass, not the first.</strong> Every model looks impressive once. What matters is whether it holds the brief after you push back twice, and whether correction two contradicts correction one.</li>
<li><strong>Give it something long.</strong> Forty shots, a full script, a whole sheet. Consistency across a long job is where models separate, and it is the thing no benchmark reports.</li>
</ol>
<p>If it wins on three of those five against what you use now, switch. If it wins on one, you were impressed by novelty. That is a real thing and it fools everyone.</p>

<h2>GPT-6.2 Astra, Sol, Terra or Luna: Which One Should You Use?</h2>
<p>OpenAI now sells four classes of model, from cheapest to most capable: Luna, Terra, Sol and Astra. Each has moved on its own schedule, so the current versions do not share a number. Here is how they line up for creative production, based on what OpenAI and the coverage say, not on a benchmark of creative work, because there still is none.</p>
<ul>
<li><strong>GPT-6.2 Astra, the heavy one.</strong> Released November 17 and still the model OpenAI recommends for the hardest projects. One claim in the launch matters to anyone who builds decks and boards: OpenAI says it can take a screenshot of a slide and match the layout, colours and font size for the rest of the presentation, per <a href="https://9to5mac.com/2026/11/17/openai-upgrades-chatgpt-and-codex-with-new-gpt-6-2-astra-and-sol-models/" target="_blank" rel="noopener">9to5Mac</a>. Use it as the orchestrator when a task runs for hours across tools: gathering references, driving a batch, checking outputs against a brief. Do not use it to write a caption.</li>
<li><strong>GPT-6.2 Sol, the daily driver.</strong> Same release date. OpenAI says it came within half a point of Astra on one real-codebase coding test at about a fifth of the cost. If that holds on your material, this is where scripts, shot lists and treatment drafts belong.</li>
<li><strong>GPT-6.1 Terra, the middle.</strong> Released October 26, aimed at the computer work that fills a day: drafting proposals, reading technical drawings, filling forms, and, in OpenAI's own list, editing videos. It is the one to test when an assistant has to click through a tool on your behalf many times.</li>
<li><strong>GPT-6 Luna, the volume one.</strong> Still the September model. Meant for high-volume tasks with a clear goal: summarising a call, extracting a shot list from a script, tagging a folder of references. It is also the one free and Go users get.</li>
</ul>
<p>Where you meet them matters as much as which one you pick. The 6.2 models arrived in ChatGPT Work and Codex on Plus, Pro, Enterprise and Edu, and in the API as <code>gpt-6.2-astra</code> and <code>gpt-6.2-sol</code>. The $200 Pro plan gets an Ultrafast mode on Sol, and the $500 Pro plan gets it on both, at up to 4.5 times the standard speed while burning more of the allowance.</p>
<p>The rule that holds across all four: the more the job depends on taste, the less the model tier matters and the more your brief matters. Run the five-step test above on Sol before paying for Astra time. If Sol passes on your finished jobs, the difference is not worth the wait.</p>
<p>And one note on the cancelled 6.1 Astra. According to the reporting, it was held back for acting beyond its authorised scope and misreporting its own actions. That is exactly the failure that hurts a production pipeline where an assistant drives tools on your behalf. A model that is honest about what it did beats a smarter one that is not.</p>

<h2>Is GPT-6.2 Better Than GPT-6 for Creative Work?</h2>
<p>Nobody has published an answer, and OpenAI's own launch numbers are about coding, documents and spreadsheets again. The only way to know is the side-by-side from the method above. Here is that test as a block you can paste into two windows, one running the model you use today and one running GPT-6.2 Sol, with the same finished job attached to both.</p>
<pre><code>CONTEXT
Attached: the original client brief for a job I already delivered,
plus the final approved version.

TASK
1. Read the brief and list every instruction that contradicts another one.
   Do not resolve them. Just list them.
2. Write the shot list for the first 30 seconds, from the brief only.
   Do not look at the approved version yet.
3. Now compare your shot list with the approved version.
   Say where yours is weaker, in one line per shot.

RULES
Ask before assuming anything the brief does not say.
Say "I don't know" instead of guessing a fact about the client.
</code></pre>
<p>Then push back twice on the shot list, the same notes in both windows. Score the two runs on four things only: did it find the contradiction, did it ask instead of assume, did the second correction undo the first, and did it describe its own weak shots honestly. The last one is the reason the cancelled 6.1 Astra matters here, because the reporting says it was held back for misreporting its own actions.</p>

<h2>The Part Nobody Benchmarks</h2>
<p>My working setup has a model orchestrating the pipeline and other models doing the generating. The orchestrator is not chosen on mathematics scores. It is chosen because it holds an idea across forty shots without drifting, takes a correction without overcorrecting into something worse, and tells me when a brief contradicts itself rather than quietly picking one side.</p>
<p>None of that appears in a launch post. It cannot, because it is not a number.</p>
<p>So the honest read on GPT-6 Astra is this. It is a serious model and the jump in agent and coding work is real, which means it will change what the automation around your work can do. Whether it changes the work itself depends on a test only you can run, on footage and briefs only you have.</p>
<p>The benchmarks tell you the machine got better at things machines are good at. They still tell you nothing about the only question that matters on delivery day, which is whether the thing you made is any good. That judgement stayed exactly where it was.</p>
<p>If you want to make that judgement repeatable rather than improvised, the thing to build is not a better prompt. It is a written process the assistant follows, which is what <a href="/blog/anthropic-agent-skills-open-standard-production-workflows/">Agent Skills are for</a>, and it now survives switching vendors. For AI inside the editing tools rather than beside them, the useful reference point is <a href="/blog/adobe-premiere-26-ai-object-mask-what-editors-actually-get/">what Premiere shipped this year</a>. For building a whole pipeline around an assistant, see <a href="/blog/remotion-claude-code-video-variations-director-method/">how Remotion and Claude Code make variations from code</a>. The skills I run in production are on <a href="/skills/">the skills page</a>.</p>
<p>Access and the model card are on <a href="https://openai.com/index/path-to-astra/" target="_blank" rel="noopener">OpenAI's Astra page</a>, and it is worth reading their own safety notes before you point it at anything sensitive.</p>
<p><em>Sources: <a href="https://www.cnbc.com/2026/09/03/open-ai-astra-gpt-6-cyber.html" target="_blank" rel="noopener">CNBC, OpenAI begins rolling out Astra</a> | <a href="https://www.aljazeera.com/economy/2026/9/4/openai-unveils-gpt-6-astra-amid-rising-scrutiny-and-safety" target="_blank" rel="noopener">Al Jazeera, OpenAI unveils GPT-6 Astra</a> | <a href="https://9to5mac.com/2026/09/04/openai-releasing-major-upgrade-to-chatgpt-and-codex-with-gpt-6-astra-details-here/" target="_blank" rel="noopener">9to5Mac, GPT-6 Astra details</a> | <a href="https://9to5mac.com/2026/11/17/openai-upgrades-chatgpt-and-codex-with-new-gpt-6-2-astra-and-sol-models/" target="_blank" rel="noopener">9to5Mac, GPT-6.2 Astra and Sol</a> | <a href="https://community.openai.com/t/gpt-6-2-astra-and-sol-are-now-available/1417531" target="_blank" rel="noopener">OpenAI Developer Community, GPT-6.2 announcement</a> | <a href="https://en.wikipedia.org/wiki/GPT-6.1" target="_blank" rel="noopener">Wikipedia, GPT-6.1</a></em></p>
