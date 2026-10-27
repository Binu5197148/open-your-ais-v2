---
id: "art-180"
title: "Why Your Video Needs Code, Not Just AI"
description: "How to use Remotion with Claude Code: the official plugin, a 7 step walkthrough, a prompt to paste, and why code gives exact variations AI cannot."
pubDate: "2026-09-03"
updatedDate: "2026-10-27"
toolVersion: "2026-10"
category: "Workflow"
tags:
  - "Remotion"
  - "Claude Code"
  - "Motion Graphics"
  - "Workflow"
  - "AI Tools"
  - "Commercial Production"
  - "Agent Skills"
heroImage: "https://images.unsplash.com/photo-1709316132552-fe8d20f1adb3?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3IlMjBvbiUyMHNldHxlbnwxfDB8fHwxNzg4NDQxMzAxfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "8 min read"
featured: false
---

<p><em>Updated October 27, 2026. Three things moved since the last check. Remotion now ships an official <a href="https://www.remotion.dev/docs/ai/claude-code-plugin" target="_blank" rel="noopener">Claude Code plugin</a> that bundles the skills, installable from the plugin directory in the Claude desktop app or from the terminal. On October 22 the docs added a GitHub CLI route, <code>gh skill install remotion-dev/skills</code>. And the package reached 4.0.539 on October 26. Still twelve skills, still no 5.0 release, and the license prices below were reread on the <a href="https://www.remotion.pro/license" target="_blank" rel="noopener">official page</a> today without change. A step by step section now answers the question people search most: how to use Remotion with Claude Code.</em></p>

<h2>The Tool That Refuses to Roll the Dice</h2>
<p>Remotion is a framework that builds video out of React code. You write components, the frames are computed, and a renderer turns them into a file. There is no model in the middle deciding what the shot looks like. Every pixel is the consequence of something you wrote, which means the same input produces the same output on Tuesday that it produced on Monday.</p>
<p>That last sentence is the entire argument, and it is the opposite of what the rest of my work looks like. I direct commercials in São Paulo and I run Kling, Seedance and Gemini Omni on paying jobs. Those models are extraordinary and they are also slot machines. You prompt, you get something, you prompt again with the same words and you get a cousin of it. For a hero shot that is fine, because you only need the one. For the forty things that come after the hero shot, it is a catastrophe.</p>
<p>Remotion is what I reach for at exactly that moment. Not to generate. To stop generating.</p>

<h2>What Is Remotion, and What Does It Have to Do With Claude?</h2>
<p>The framework has been around for years. What changed in 2026 is that it became something you can direct through an agent instead of typing yourself, and that is why the search traffic around it exploded into questions like "how to use Remotion with Claude Code" rather than "what is Remotion".</p>
<p>The connection is a set of Agent Skills that Remotion publishes and maintains. They are plain instructions that teach a coding agent the house rules of a Remotion project: how the markup differs from a normal React app, how to preview in the Studio, how to render, how to handle captions and media. Twelve of them ship as of October 4, 2026, up from eleven when this was first published (see the <a href="https://github.com/remotion-dev/skills/tree/main/skills" target="_blank" rel="noopener">skills folder</a> for the current list), with <code>/remotion-best-practices</code> acting as the umbrella that covers the rest. The documentation names Claude Code, Codex, Kimi Code and Cursor as the agents they are written for.</p>
<p>The install is two commands and about a minute:</p>
<pre><code>npx remotion skills add
npx remotion skills update</code></pre>
<p>The first pulls the skills into <code>.agents/skills</code> in your project, and symlinks <code>.claude/skills</code> to the same place so Claude Code finds them without extra configuration. The second is the one people forget: the skills are versioned alongside a framework shipping at a near daily pace, so an install from three months ago is teaching your agent stale patterns. As I write this, the <code>remotion</code> package sits at 4.0.520, published on September 1, 2026, four releases after 4.0.516 on August 24. By October 1 it was already at 4.0.532. That cadence is the reason the update command exists.</p>
<p>You can also install through the general skills registry with <code>npx skills add remotion-dev/skills</code>, which is the route to use if you are collecting skills from several projects in one place.</p>

<h2>How to Use Remotion With Claude Code, Step by Step</h2>
<p>This is the sequence from an empty folder to a rendered file, using the commands in the official docs as of October 27, 2026. It works the same on a Mac and on Windows once Node is installed.</p>
<ol>
<li><strong>Create the project.</strong> In a terminal, run <code>npx create-video --yes --blank my-video</code>, or run <code>npx create-video</code> with no arguments and let the interactive setup ask you, including whether to add the skills.</li>
<li><strong>Connect Claude Code.</strong> Pick one route. In the Claude desktop app, open Code, then Customize, then Plugins and Discover, search for remotion and click Add. In the terminal, run <code>claude plugin marketplace add remotion-dev/claude-code-plugin</code> and then <code>claude plugin install remotion@remotion</code>, and restart Claude Code. If you prefer plain skills inside the project, run <code>npx remotion skills add</code> or <code>npx skills add remotion-dev/skills</code> from the project folder instead.</li>
<li><strong>Open a session in that folder</strong> and ask for one small thing, with the create skill: <code>/remotion:remotion-create</code> through the plugin, or <code>/remotion-create</code> with the project skills, followed by your brief.</li>
<li><strong>Look at it.</strong> Ask for <code>/remotion-studio</code>, or run <code>npx remotion studio</code>, and judge the motion in the preview before anything renders.</li>
<li><strong>Feed it real data,</strong> as a props object or a JSON file: the actual price, the actual legal line, the actual three languages.</li>
<li><strong>Render two variants</strong> with <code>/remotion-render</code> or <code>npx remotion render</code> and put them side by side. Identical apart from the data is the pass mark.</li>
<li><strong>Keep it current.</strong> Run <code>npx remotion skills update</code> before each new job, or update the plugin, because the framework ships several releases a month.</li>
</ol>
<p>A brief I would paste on step three, for a price end card:</p>
<pre><code>/remotion-create A 5 second end card, 1080x1920. Props: productName,
price, currency, legalLine. Product name springs in from below, price
counts up over 20 frames, legal line fades in last at 60% opacity.
Also expose a 16:9 and a 1:1 composition that reuse the same component
and reflow the layout. Do not hardcode any text.</code></pre>

<h2>The Job Nobody Writes About</h2>
<p>Most of what is published about Remotion and Claude right now is a demo. Somebody prompts an agent, a video appears, the video is a bar chart with a title card, everyone claps. That demo is true and it is also the least interesting thing the pairing does.</p>
<p>The job I use it for is variation. A campaign gets approved as one film. Then the client needs it in nine to five and sixteen to nine and one to one. Then in three languages. Then with the price changed in six markets, then with the legal line updated because someone in compliance woke up. On a traditional job that is a week of an editor conforming versions and a producer checking that nothing broke in version seven.</p>
<p>If the piece was generated by a model, you cannot re-render it. You can only regenerate it, and regeneration gives you a different film. The lighting shifts. The face drifts. The product loses the label. This is the same wall I described when I argued that <a href="/blog/ai-character-consistency-prep-problem-not-model-problem/">character consistency is a preparation problem rather than a model problem</a>, and it is the reason the promise of infinite variations from generative video keeps collapsing on contact with a real deliverable.</p>
<p>If the piece is a Remotion composition, the price is a prop. The language is a prop. The aspect ratio is a parameter the layout already responds to. You change the data, you render again, and every frame that was approved stays exactly as approved. That is not a small convenience. That is the difference between selling a campaign and selling a system.</p>

<h2>Where the Agent Earns Its Place</h2>
<p>Claude Code matters here for a reason that has nothing to do with generation. Remotion is code, and code is the medium agents are genuinely good at. Asking an agent to write a React component that animates a lower third on a spring curve is a well posed problem with a checkable answer. Asking a model to imagine a lower third is not.</p>
<p>So the division of labour is clean, and it is the same one I keep arriving at from every direction. I decide what the piece is. Claude writes and rewrites the composition. The Studio shows me the result and I judge it. When something is wrong I say what is wrong in words, not in keyframes.</p>
<p>The check is what makes it work. A Remotion render either matches the frame you approved or it does not, and you can see that in one look. This is the same structure as the <a href="/blog/claude-code-agents-gauntlet-loop-verification/">verification loop I use with Claude Code agents</a> on everything else: let the agent do the labour, keep a harsh and fast check in front of it, and never accept output that has not been looked at. Motion graphics are unusually kind to that method, because bad motion is obvious at a glance and does not need a specialist to spot.</p>
<p>What the agent does not do is decide. It has no taste about whether a transition lands, whether the type is too loud against the plate, whether the thing feels like the brand. Those are still the only parts of the job that were ever worth paying for.</p>

<h2>What It Costs, and the Part People Miss</h2>
<p>Remotion is free for individuals and teams of three or fewer, with all features and unlimited commercial use. That covers most independent directors and small shops outright, which is why it is worth trying before you budget for it.</p>
<p>Above three people you need a company license. The published pricing splits into Creators at 25 dollars per seat per month, for teams making videos by hand, and Automators at one cent per render with a minimum spend of 100 dollars a month, billed in increments of a thousand renders, for anyone wiring it into a pipeline. Enterprise starts at 500 dollars a month. Check the current terms before you commit, because a 5.0 release is queued and the license is one of the things moving in it.</p>
<p>The part people miss is that the pricing tells you what the tool is for. Nobody charges by the render for a tool you use once. They charge by the render because the intended use is the thousandth render of the same composition with the thousandth row of data, and that is precisely the work generative video cannot do.</p>

<h2>How to Start Without Wasting a Week</h2>
<p>Do not start with a film. Start with the piece of your work that is already repetitive and already annoying: the end card, the price tag, the subtitle burn, the social cutdown that gets rebuilt every month.</p>
<p>Create a project, install the skills, open the Studio, and ask your agent for that one component. Give it real data on the second attempt, not placeholder text, because placeholder text hides every layout problem you are going to have. Then render two variants and put them side by side. If the two are identical apart from the data, you have the thing that generative models will not give you.</p>
<p>The full documentation lives at <a href="https://www.remotion.dev/docs/ai/skills" rel="noopener">remotion.dev/docs/ai/skills</a>, and the skills are open at <a href="https://github.com/remotion-dev/skills" rel="noopener">github.com/remotion-dev/skills</a>. The skills I keep loaded alongside my own are listed on the <a href="/skills/">skills page</a> here.</p>
<p>I am not arguing you should abandon generative video. I use it every week and it does things nothing else can do. I am arguing that the two tools answer different questions, and that most of the frustration I see from people trying to run a real campaign on generated footage comes from asking a slot machine to be a printing press. Remotion is the printing press. Keep the slot machine for the shot that only has to exist once.</p>
