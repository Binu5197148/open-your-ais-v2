---
id: "art-189"
title: "REA: The Reverse Engineering Skill That Shows Its Evidence"
description: "REA, an MIT-licensed MCP and Claude skill with 185,794 GitHub stars, explains how software works from the shipped files. I installed it and ran it on my own site."
pubDate: "2026-10-13"
toolVersion: "2026-10"
category: "AI"
tags:
  - "Claude Code"
  - "Skills"
  - "Workflow"
  - "Craft"
heroImage: "https://images.unsplash.com/photo-1637408982203-2eb65bd6aa22?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw0fHxhbmFsb2clMjBmaWxtJTIwcGhvdG9ncmFwaHklMjBncmFpbnxlbnwxfDB8fHwxNzkxODkxODg2fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "6 min read"
---

<!-- Published Oct 13, 2026 -->

<p>On October 13, 2026, the <a href="https://github.com/morluto/rea">REA repository</a> on GitHub had 185,794 stars and 45,056 forks. REA stands for Reverse Engineer Anything. It is an MCP server plus a Claude skill, MIT licensed, and version 6.4.0 went out on npm on October 11.</p>

<p>The pitch fits on one line of its README: see a feature you like in an app, then understand how it works, down to the binary level. Your agent inspects the shipped files, explains the feature and shows the evidence behind every conclusion.</p>

<p>This piece hands you the skill and tells you exactly what I did with it. What I did is small and real: I installed it this morning on my Mac mini and ran it on the build of this website. I did not point it at anybody else's software. More on why below.</p>

<h2>What I installed, and the one thing that broke</h2>

<p>The project gives you one command:</p>

<pre><code>npx rea-agents setup</code></pre>

<p>It asks which agents you use, shows the changes it plans to make, backs up your config files and installs two pieces. One is the MCP server, the part that actually runs the analysis. The other is the skill, called <code>reverse-engineer-anything</code>, which teaches the agent when to use REA and which tool to pick for each kind of file.</p>

<p>The first attempt stopped with the status <code>needs_human</code>. The reason was the Node.js version. REA asks for Node 22, 24 or 26, and my machine runs 25. I had Node 22 installed alongside it, so I ran the setup with Node 22 first in the path:</p>

<pre><code>npx -y rea-agents@latest setup --client claude_code --yes --json</code></pre>

<p>This time it returned <code>ready</code>, registered REA in Claude Code and installed the skill, version 37, which reported 170 tools. As a check, I started the server under Node 25 by hand. It printed an "unsupported engine" warning and answered the handshake anyway. If your setup stops at <code>needs_human</code>, check the Node version first.</p>

<p>Restart your agent afterwards. The skill alone adds no tools to a session that is already open.</p>

<h2>The test I ran</h2>

<p>REA has a terminal command for JavaScript and Electron apps that needs no extra software:</p>

<pre><code>npx -y rea-agents@latest analyze-javascript-application /absolute/path --json</code></pre>

<p>I pointed it at the <code>dist</code> folder of openyourais.com, the static site you are reading now. It counted 138 relevant files and read about 3 MB of text. It parsed 2 JavaScript files and logged 543 findings, mapped into a graph of 277 nodes and 684 edges, with zero integrity contradictions. Every Electron field came back at zero, which is correct: this is a website, not a desktop app.</p>

<p>The part I liked most was a field called <code>limitations</code>. The report says the code was read as inert text and never executed. It says that a static import does not prove the code runs. And it says that some paths may stay unresolved. Every result also states its confidence and its authority, here "derived" from a "shipped-artifact". The tool tells you how far its own answer goes.</p>

<p>For native apps, meaning the compiled programs most Mac and Windows software is made of, REA needs an analysis engine already on your machine: Hopper, Ghidra or IDA. I have none of them, so I did not test that side.</p>

<h2>Film students already did this with a VCR</h2>

<p>Before film school taught me anything, the VCR did. You rented a tape, found the scene that worked on you, and pressed pause. Then you stepped through it frame by frame, counting the shots and timing the cuts, trying to see where the camera was and why the light fell where it did. Nobody handed you the shooting script. All you had was the finished film, and you learned its grammar by taking it apart.</p>

<p>Every editor I know has some version of that habit. The finished piece is evidence. Studying it is how a craft gets passed on when nobody is around to explain it to you.</p>

<p>REA is that pause button for software. The shipped app becomes the tape, and the agent steps through it and writes down what it saw, frame by frame.</p>

<h2>Where the line is</h2>

<p>The pause button never gave anyone the right to copy the film. REA's own <a href="https://github.com/morluto/rea/blob/main/DISCLAIMER.md">disclaimer</a> draws the same line, in writing. The project supports security research, malware analysis, interoperability, education, preservation and auditing software you own or are authorized to examine. It will not help with breaking DRM or license checks, building game cheats, bypassing authentication, or copying proprietary code and assets.</p>

<p>It also puts the responsibility on you. Reverse engineering can be restricted by law where you live, or by the license of the program you open. That is why my test ran on my own site. Before you point REA at someone else's app, read that app's license.</p>

<h2>Not a copy machine</h2>

<p>The easy reading of REA is "a tool for stealing features". Not because it cannot take things apart. Because the useful part is the evidence trail, and evidence is what lets you build your own version instead of a clone.</p>

<p>Look at how the README frames its own example: understand how search works in a notes app, show the evidence, then build a similar feature for your project. The output is an explanation, plus a list of what the tool could not see. Taking an idea apart until you understand it and then building it your own way is what every craft has always done. What would be wrong is shipping someone else's code, and nothing in the evidence makes that right.</p>

<p>A practical tip if you try it. Start with something you own: your site, your app, an old project of yours. Read the <code>limitations</code> field before reading the findings. You will learn how the tool thinks without any legal doubt hanging over the session.</p>

<h2>How to get it</h2>

<ul>
  <li><strong>Source and docs:</strong> <a href="https://github.com/morluto/rea">github.com/morluto/rea</a> and <a href="https://rea.tools/">rea.tools</a>.</li>
  <li><strong>Install:</strong> <code>npx rea-agents setup</code>. It works with Claude Code, Codex, Cursor, Gemini CLI and other agents.</li>
  <li><strong>Node.js:</strong> use 22, 24 or 26.</li>
  <li><strong>Native apps:</strong> need Hopper, Ghidra or IDA. JavaScript and Electron need nothing else.</li>
  <li><strong>Updates:</strong> the project releases often. Run <code>npx rea-agents@latest setup</code> again to refresh the skill.</li>
</ul>

<p>Studying the finished work has always been how this craft gets learned. REA just puts the pause button in the hands of anyone who builds software, and it writes down what it saw and what it missed.</p>
