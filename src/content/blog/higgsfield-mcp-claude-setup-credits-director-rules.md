---
id: "art-201"
title: "Higgsfield MCP Costs and Rules You Must Know"
description: "Higgsfield MCP puts Seedance, Kling and Nano Banana inside Claude. How to connect it, what a clip costs in credits, and seven rules to paste before you spend."
pubDate: "2026-11-22"
toolVersion: "2026-11"
category: "AI"
tags:
  - "Higgsfield"
  - "MCP"
  - "Claude"
  - "AI Video"
  - "Workflow"
  - "Method"
heroImage: "https://images.unsplash.com/photo-1600354026342-a96603baf9df?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxOXx8ZmlsbSUyMHNldCUyMGNpbmVtYXRvZ3JhcGh5fGVufDF8MHx8fDE3OTUzNDI2ODJ8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<p>Higgsfield MCP is the connector that lets Claude generate video, images and audio on your Higgsfield account from inside a chat. On November 18, 2026, Higgsfield published its own guide to it, and one line in that guide deserves more attention than the setup steps: there is no built-in spending limit.</p>

<p>The same guide prices a 10-second Seedance 2.5 clip at 70 credits in 720p, 160 in 1080p and 280 in 4K. At Higgsfield's stated rate of 49 dollars per 1,000 credits, that is about 3.43, 7.84 and 13.72 dollars a clip. Those are Higgsfield's numbers, checked by them on November 19.</p>

<p>What follows is two things kept apart. The setup, the prices and the limits come from Higgsfield's pages, read on November 22, 2026, and are linked at the end. The rules are mine. Higgsfield is the hub I work in and Claude is what drives it, and the pilot of my series was generated this way. I ran no new test for this article, so there are no timings or results of mine below.</p>

<h2>What is Higgsfield MCP?</h2>

<p>MCP stands for Model Context Protocol, an open standard that lets an AI assistant call outside tools. Higgsfield's guide splits the work in three. Claude reads the request, picks a model and settings, and writes the prompt. MCP carries the call. Higgsfield runs the model and saves the result to your account.</p>

<p>You connect once with a URL. There is no API key, and you sign in on Higgsfield's own page, so Claude never sees the password.</p>

<p>Through that one connection Claude can reach the video models (the guide names Seedance, Kling and Veo), image models such as Nano Banana Pro and GPT Image 2.6, voiceover and voice cloning, Ads Studio and Short Drama. Every result lands in the chat and in your Higgsfield history, and Claude can browse that history to reuse an earlier image as a reference.</p>

<h2>How do you connect Higgsfield MCP to Claude?</h2>

<p>There are two routes, and they depend on which Claude you use.</p>

<p><strong>Claude on the web or Claude Desktop.</strong> Higgsfield's five steps:</p>

<ol>
<li>Go to <strong>Customize</strong>, then <strong>Connectors</strong>.</li>
<li>Click <strong>+ Add</strong>, then <strong>Add custom connector</strong>. Name it Higgsfield, paste <code>https://mcp.higgsfield.ai/mcp</code>, continue through the authentication screen and click <strong>Add</strong>.</li>
<li>Click <strong>Connect</strong>. A Higgsfield window opens. Sign in and authorize.</li>
<li>In a chat, open the <strong>+</strong> menu, then <strong>Connectors</strong>, and check that Higgsfield is on.</li>
<li>Ask: "What is my Higgsfield credit balance?" If the answer comes from Higgsfield, it works.</li>
</ol>

<p>Two notes from the same guide. On Claude's Free plan you get one custom connector, so this would be it. On Team plans an Owner has to add the connector in Organization settings before members can connect.</p>

<p><strong>Claude Code.</strong> Higgsfield recommends its CLI and Skills here instead of the connector. Three commands:</p>

<pre><code>npm i -g @higgsfield/cli
higgsfield auth login
npx skills add higgsfield-ai/skills</code></pre>

<p>The first installs the CLI, the second opens a browser to sign in, the third adds the skills. Both routes draw on the same account and the same credits.</p>

<h2>What does Higgsfield MCP cost?</h2>

<p>Credits, at Higgsfield's standard rates. The cost depends on model, resolution and length. The guide's own table for a 10-second Seedance 2.5 clip:</p>

<table>
<thead><tr><th>Resolution</th><th>Credits</th><th>Approx. cost</th></tr></thead>
<tbody>
<tr><td>720p</td><td>70</td><td>$3.43</td></tr>
<tr><td>1080p</td><td>160</td><td>$7.84</td></tr>
<tr><td>4K</td><td>280</td><td>$13.72</td></tr>
</tbody>
</table>

<p>Three rules from the guide matter more than the table:</p>

<ul>
<li><strong>Unlimited does not apply.</strong> Web-only Unlimited access and free generations do not carry over to Claude, the connector or the CLI.</li>
<li><strong>No spending cap.</strong> Higgsfield says its help center confirms there is no native credit limit, and tells you to ask Claude for the cost and wait for approval each time.</li>
<li><strong>Failed generations return credits.</strong> Most do, automatically. Completed ones are charged, whether or not you like the result.</li>
</ul>

<p>There is also a 3-day free trial for eligible new users. It needs a card, and it renews into a paid plan unless you tell Claude "cancel auto-renewal". Read the renewal date on the offer screen before accepting.</p>

<p>The 720p row is the one I work from. I draft and usually deliver from 720p and upscale after, because 1080p costs more than double for the same ten seconds. I wrote that math out in <a href="/blog/seedance-2-5-1080p-what-the-resolution-upgrade-costs/">what the 1080p upgrade costs</a>.</p>

<h2>The line in the guide I would not skip</h2>

<p>Higgsfield describes its own test like this: before generating, Claude split a one-paragraph request into four shots.</p>

<p>Most people will read that as a feature. I read it as a decision somebody else made. Where a shot ends is a cut, and a cut is an argument about what matters in the scene. An agent that turns your paragraph into four shots has made that argument for you, politely, before you saw a frame.</p>

<p>That is the real risk of the connector, and it has nothing to do with image quality. The models are good. The risk is that typing a wish into a chat feels like directing, and the agent fills every gap you leave with its own average answer: which model, how many shots, what pace, which face. Then it charges 160 credits for it.</p>

<p>An agent is a tireless assistant and a bad director. The fix is not to trust it less. It is to tell it what is yours to decide.</p>

<h2>Seven rules to paste before you spend</h2>

<p>This is the block I would put at the top of any chat that has the Higgsfield connector on. Copy it as is:</p>

<pre><code>Standing rules for Higgsfield in this chat:

1. Before any generation, show me the plan: model, resolution,
   length, aspect ratio and number of generations.
2. Show the credit cost of each generation and the total.
   Wait for my "go". No go, no generation.
3. Do not split my prompt into more shots than I wrote.
   If you think it needs more, ask first.
4. Attach every reference I approved (character sheet, wardrobe,
   location, product, approved still) to every generation,
   including regenerations.
5. One generation first. No variations and no batches until
   I approve that one.
6. If my request changed after your plan, show the new plan
   and the new cost again before spending.
7. After each result, tell me the credits spent and the balance.</code></pre>

<p>Rules 2 and 7 are the spending cap Higgsfield does not have. Rule 3 keeps the cut with you. Rule 4 is the one that decides whether a character survives a film: the sheet goes in every time, not once. How I build those sheets is in <a href="/blog/higgsfield-character-consistency-toninho-workflow/">the Toninho Sagatiba case</a>, where six characters had to stay the same people across a whole pilot.</p>

<p>Rule 6 covers the moment a brief changes while the agent is still preparing. Unless told otherwise it fires the old version, and I treat a submitted generation as spent. Confirm again, every time the brief moves.</p>

<h2>One date for developers</h2>

<p>If you built your own MCP client, Higgsfield is switching off Dynamic Client Registration on January 1, 2027. After that, Client ID Metadata Documents are the only way a third-party client identifies itself. If you use Claude's connector as above, Higgsfield says there is nothing to configure on your side.</p>

<h2>What I would do today</h2>

<p>Connect it, ask for the balance, and paste the seven rules before the first real request.</p>

<p>Then make one reference image, approve it, and generate one 720p clip from it. Look at what Claude planned before you said go, and compare it with what you would have planned. The distance between those two is the part of the job that is still yours. For the shot itself, my <a href="/blog/how-to-use-seedance-2-5-director-prompting-method/">prompting method for Seedance</a> picks up from here, and if you want the same idea applied to 3D, see <a href="/blog/blender-mcp-claude-blockout-previs-director-workflow/">Blender MCP for blockout</a>.</p>

<p>The connector makes generating as easy as asking. Asking was never the hard part.</p>

<h2>Sources</h2>
<ul>
<li>Higgsfield, "How to Generate AI Videos in Claude With the Higgsfield MCP Connector (2026)," November 18, 2026, prices checked by Higgsfield on November 19: <a href="https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP">higgsfield.ai</a></li>
<li>Higgsfield MCP product page, with the connect button: <a href="https://higgsfield.ai/mcp">higgsfield.ai/mcp</a></li>
<li>Higgsfield, "Higgsfield MCP Moves to CIMD: What Developers Need to Know": <a href="https://higgsfield.ai/blog/higgsfield-mcp-moves-to-cimd">higgsfield.ai</a></li>
<li>Higgsfield skills repository on GitHub, MIT licensed: <a href="https://github.com/higgsfield-ai/skills">github.com/higgsfield-ai/skills</a></li>
<li>Claude Help Center, custom connectors using remote MCP: <a href="https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp">support.claude.com</a></li>
<li>Model Context Protocol, the open standard: <a href="https://modelcontextprotocol.io/">modelcontextprotocol.io</a></li>
</ul>
