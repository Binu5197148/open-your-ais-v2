---
id: "art-189"
title: "I Used Reverse Engineer Anything & It's Scary"
description: "Download REA free: the skill that lets your agent take any app apart and explain it. I tested it, and here is why the app on demand worries me."
pubDate: "2026-10-13"
toolVersion: "2026-10"
category: "AI"
tags:
  - "Claude Code"
  - "Skills"
  - "Freelance"
  - "Industry trend"
heroImage: "https://images.unsplash.com/photo-1637408982203-2eb65bd6aa22?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw0fHxhbmFsb2clMjBmaWxtJTIwcGhvdG9ncmFwaHklMjBncmFpbnxlbnwxfDB8fHwxNzkxODkxODg2fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<!-- Published Oct 13, 2026 -->

<p>On October 13, 2026, the <a href="https://github.com/morluto/rea">REA repository</a> on GitHub had 185,794 stars and 45,056 forks. REA stands for Reverse Engineer Anything. It is an MCP server plus a Claude skill, MIT licensed, and version 6.4.0 went out on npm on October 11.</p>

<p>The pitch fits on one line of its README: see a feature you like in an app, then understand how it works, down to the binary level. Your agent inspects the shipped files, explains the feature, shows the evidence, and can build a version of it for your own project.</p>

<p>I installed it this morning and ran it on the build of this website, and I am giving it to you. <a href="#download-rea">Download the REA skill free</a> or open the repository, with the exact install steps, further down this page.</p>

<p>But the tool is not what kept me thinking all day. What kept me thinking is where it points.</p>

<h2>What I installed and what I ran</h2>

<p>The setup is one command, <code>npx rea-agents setup</code>. It installs the MCP server, which does the analysis, and the skill <code>reverse-engineer-anything</code>, which teaches the agent which tool to use for each kind of file. Mine reported version 37 of the skill and 170 tools.</p>

<p>My first attempt stopped with the status <code>needs_human</code> because of Node.js. REA asks for Node 22, 24 or 26, and my Mac runs 25. Running the setup with Node 22 first in the path solved it.</p>

<p>Then I pointed its JavaScript analyzer at the <code>dist</code> folder of openyourais.com. It read 138 relevant files, logged 543 findings and mapped them into a graph of 277 nodes and 684 edges, with zero integrity contradictions. Every result came with a field called <code>limitations</code>, saying for example that the code was read as text and never executed. I did not point it at anybody else's software. Native apps also need Hopper, Ghidra or IDA, which I do not have, so that side stays untested here.</p>

<h2>The app nobody sells you</h2>

<p>Here is where I think this goes. Until now, if you needed software for your work, you paid for it. You paid Adobe every month for a suite where you use a small slice of the features, because nobody made the slice you actually need.</p>

<p>Tools like REA, plus coding agents, change that math. You look at the feature that matters to you, understand how it works, and build an app that does exactly that, for you. Then you can offer it to other people with the same need. Everybody will be able to do this, or will want to. In the same way we now want agents that take care of our daily tasks, we are going to want apps made for our own needs, whatever the work is.</p>

<p>Digital stores will matter more than ever. But a store full of apps rewards ideas, not code. When anyone can build, what sets you apart is knowing what to build.</p>

<p>The first number already shows it. In the first quarter of 2026, new app submissions to Apple's App Store jumped 84%, the biggest jump in a decade, driven by people building apps with AI tools. <a href="https://www.entrepreneur.com/business-news/app-store-submissions-are-the-highest-in-10-years">Entrepreneur reported</a> on April 7 that approval times went from 24 hours to as long as 30 days. Apple disputes the delays and says it handles 90% of submissions within 48 hours, and that its rule is not about AI: apps cannot run downloaded code that changes what they do after review.</p>

<h2>Why I am not optimistic</h2>

<p>I am describing a possibility. I am not cheering for it.</p>

<p>To me this smells like chaos. A flood of apps nobody reviewed, built from features somebody else took apart, sold by people who learned to build last month. On its own, that does not organize itself. We are going to need regulation, and the App Store queue is what happens before the rules exist: the store improvises them on the way.</p>

<p>The part that worries me most is work. Companies will build everything in-house. Why hire a freelancer, or pay for a service, when you can have your own app that answers to nobody and costs no license? That is already happening at the small end. <a href="https://www.hudson-labs.com/research/ai-saas-replacement-2026">GoDaddy told investors</a> it is testing internal replacements for smaller software it subscribes to. No one is replacing a whole enterprise platform yet. But the direction is clear, and it has been for a while.</p>

<p>For independent professionals, that is bad news. Less outsourcing means less work for people like me, and like most of the freelancers I have worked alongside on commercial sets.</p>

<h2>Where the data disagrees with me</h2>

<p>Before writing this, I believed one group would come out ahead: the people with real expertise. The experienced professional, who knows a craft deeply, could turn that knowledge into a tool other professionals need. A small developer has the knowledge to build. Before, very few people could make an app end to end. Now it is within reach.</p>

<p>The evidence does not back me up on that.</p>

<p>In 2025, researchers Xiang Hui and Oren Reshef published at <a href="https://www.brookings.edu/articles/is-generative-ai-a-job-killer-evidence-from-the-freelance-market">Brookings</a> what happened on a large freelancing platform after the 2022 AI tools came out. In the most exposed occupations, freelancers saw a 2% drop in contracts and a 5% drop in earnings. And the hardest hit were not the beginners. In their words, the effects were especially pronounced among experienced freelancers who offered higher-priced, higher-quality services.</p>

<p>That contradicts what I thought, and I am leaving it here on purpose. Experience alone did not protect anyone. The expensive, skilled professional was the first one clients replaced with a cheaper tool.</p>

<p>I still think expertise is the way out. But the data changes how I say it. Not because knowing your craft is enough. Because the knowledge has to become something other people use, a tool, a service, a product, before the market decides it can do without you. Sitting on expertise and waiting for clients is exactly the position the study shows losing.</p>

<h2>The pause button</h2>

<p>Before film school taught me anything, the VCR did. You paused the scene that worked on you and stepped through it frame by frame, counting cuts, guessing where the camera was. All you had was the finished film. Taking it apart was how you learned.</p>

<p>REA is that pause button for software. Its own <a href="https://github.com/morluto/rea/blob/main/DISCLAIMER.md">disclaimer</a> draws the same line the pause button always had: study, security research, interoperability and auditing software you own, yes. Breaking DRM or license checks, building cheats, bypassing logins, or copying someone's protected code, no. Reverse engineering can also be restricted by law where you live, or by a program's license. That is why my test ran on my own site.</p>

<h2 id="download-rea">Download REA</h2>

<p>I am putting the repository here so you can use it. REA is open source under the MIT license, and all credit goes to its authors. Get it straight from the source, which is always the newest version, or download the skill I packaged from it today.</p>

<section class="editorial-cta">
<h3>REA, Reverse Engineer Anything</h3>
<p>The full repository on GitHub, with the MCP server, the skill, the docs and the disclaimer.</p>
<p class="editorial-cta__actions"><a class="editorial-cta__button" href="https://github.com/morluto/rea" rel="noopener noreferrer">Open the REA repository →</a></p>
<p>Or download just the skill: the <code>reverse-engineer-anything</code> folder copied from the repository on October 13, 2026, with the MIT license and a short README. The skill teaches your agent how to use REA. The tools themselves come from <code>npx rea-agents setup</code>.</p>
<p class="editorial-cta__actions"><a class="editorial-cta__button" href="/skills/rea-reverse-engineer-anything.zip" download>Download the REA skill free ↓</a></p>
</section>

<h2>How to install it</h2>

<ul>
  <li><strong>Docs:</strong> <a href="https://rea.tools/">rea.tools</a> has setup guides and case studies.</li>
  <li><strong>Install:</strong> <code>npx rea-agents setup</code>. It works with Claude Code, Codex, Cursor, Gemini CLI and other agents. Restart the agent afterwards.</li>
  <li><strong>Node.js:</strong> use 22, 24 or 26. If setup stops at <code>needs_human</code>, check this first.</li>
  <li><strong>First test:</strong> <code>npx -y rea-agents@latest analyze-javascript-application /absolute/path --json</code> on something you own. Read the <code>limitations</code> field before the findings.</li>
  <li><strong>Native apps:</strong> need Hopper, Ghidra or IDA. JavaScript and Electron need nothing else.</li>
</ul>

<p>The app made for you is coming whether we like it or not. I would rather see it coming with rules, and with the people who know the work building the tools, than watch the market find out on its own who it no longer needs.</p>
