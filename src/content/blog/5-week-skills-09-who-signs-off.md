---
id: "art-193"
title: "Five Claude Skills for Previz, Demos and Docs, and Who Signs Off"
description: "Five Claude skills read from their own files: web demo videos, storyboards, Blender, on-screen arrows and de-AI writing, and who approves each step."
pubDate: "2026-10-26"
toolVersion: "2026-10"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1592685530141-64eb6bdbf1c6?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxMHx8ZmlsbSUyMGRpcmVjdG9yJTIwb24lMjBzZXR8ZW58MXwwfHx8MTc5MzAwOTgxOHww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "15 min read"
featured: true
---

<p>The README of one of this week's skills says it ships 50 headless Blender tests. I counted the test functions in its twenty test files and got 50. The number is honest. Then I opened the last public run of its test workflow, on October 16: 47 passed, 0 failed, 3 skipped. The three skipped are the ones that need a graphics card, and the workflow file says why in a comment: the hosted machines have no GPU, so the render tests do not run. The part of a Blender job a client actually sees, the render, is the part nobody's machine but yours will check.</p>

<p>That is the theme this week. Five skills that each come with a yes built in: a passed test, an ACCEPT verdict, a "verified" install, a permission switch, a scene that waits for your answer. In each one I went looking for who, exactly, is saying yes.</p>

<h2>How I checked</h2>

<p>This is a documentary review, not a hands-on test. I read each repository's own files on October 26, 2026: the README, the <code>SKILL.md</code>, and the script, workflow or notice where the sentence that matters lives, named in each entry. Stars, forks, licence and last push come from GitHub in one snapshot that morning, between 10:11 and 10:16 UTC. Where a claim depends on one file, the link goes to that file at a fixed commit, so it still says what I quote after the repository moves on.</p>

<p>I did not install or run any of the five. Where I describe behaviour, I read it in a file or in the code, and the authors' numbers stay the authors'. Four of the five are under the MIT licence and one under Apache 2.0.</p>

<h2>1. video-demo</h2>

<p>A skill that films a web app as a narrated screen recording, with the camera pushing in on whatever the voice is talking about.</p>

<p><strong>Link.</strong> <a href="https://github.com/nilbuild/video-demo" target="_blank" rel="noopener">github.com/nilbuild/video-demo</a>, by Kamran Ahmed.</p>

<p><strong>What it does.</strong> You give it a public URL or point it at the repository of a web app, and say what to show: the checkout flow, the search, the new keyboard shortcut. It drives a real Chromium with a visible cursor, zooms on the control being used, and lays a voice-over generated on your own machine on top. Each scene comes out as an MP4 with its poster frame and high-resolution stills, plus a full-tour MP4 and an HTML index of everything. For an app behind a login it does not film your real account: it builds a private copy from the repository and fakes every request with seeded data, so no real customer's address ends up on screen. Video is 1080p at 60 frames, and the <code>SKILL.md</code> explains why it refuses 4K by default: the recorder has a fixed pixel budget per second, and 4K judders.</p>

<p><strong>Who it is for.</strong> The producer making a launch video for a software client, who needs the product's screens recorded clean and narrated before the edit, and does not want to book a screen-recording session with the client's developer.</p>

<p><strong>What it saves.</strong> I did not measure it. If you would record the screens yourself in one take, it saves the re-takes. If the client's app needs a login with real data you are not allowed to show, it replaces the part of the job where someone builds a demo account by hand.</p>

<p><strong>Cost to install.</strong> One command for the skill, then two installer scripts the skill runs after asking you: the engine and Chromium, about 250 MB, and the local voice, about 350 MB. Node 22.18 or newer, and <code>uv</code> for the voice. Filming without a voice is allowed if you skip the second one.</p>

<pre><code>npx skills add nilbuild/video-demo</code></pre>

<p><strong>The catch.</strong> It is in the <a href="https://github.com/nilbuild/video-demo/blob/767bfb818880c9f38bb02873d3d67141a3e62250/SKILL.md#L126-L128" target="_blank" rel="noopener">list of things the skill never does</a>, and the first word on it is subtitles. The reason given is that the voice is the channel. For a demo watched with sound on a product page, that holds. For a cut that goes to a feed that autoplays muted, the voice is the one channel the viewer does not get until they tap. The captions are a separate job, done outside the skill, from the audio it hands you.</p>

<p>The same list also refuses music, intro cards and cross-fades. What it gives you is raw material for an edit, cut by scene. And it is the one skill this week that writes its own sign-off into the method: after the first scene, the <a href="https://github.com/nilbuild/video-demo/blob/767bfb818880c9f38bb02873d3d67141a3e62250/SKILL.md#L91-L94" target="_blank" rel="noopener">instructions say STOP</a>, hand you the file and write nothing else until you answer.</p>

<p><strong>Verified.</strong> October 26, 2026, at commit <code>767bfb8</code>. 297 stars, 28 forks, MIT, created September 17, last push September 21. Read: the README, <code>SKILL.md</code> in full, <code>scripts/install.sh</code>, <code>scripts/install-voice.sh</code> and <code>scripts/say.sh</code>.</p>

<h2>2. shotkit</h2>

<p>Five skills that turn a creative brief into a storyboard, image and video prompts for ten generators, and a review of every frame against the brief.</p>

<p><strong>Link.</strong> <a href="https://github.com/whystrohm/shotkit" target="_blank" rel="noopener">github.com/whystrohm/shotkit</a>, by Yuri Strohm.</p>

<p><strong>What it does.</strong> You describe the video and hand it the brand: a site, a PDF or screenshots, which one of the five skills turns into a brand file with palette, type and visual rules. Another writes the storyboard twice, once for people to read and once as JSON a machine can check, with a field on every shot explaining why the beat, the duration and the framing are what they are. A third writes the prompts, one file per generator: six for stills, among them Midjourney, GPT Image and Nano Banana, and four for motion, Kling, Veo, Seedance and Hailuo. You generate the frames yourself in whatever tool you pay for and drop them in a folder. A fourth skill reviews each frame against its shot and the brand and writes a verdict, ACCEPT, REVISE or REJECT, and the prompts for the shots marked REVISE get rewritten for a second round. On-screen text is kept out of the images on purpose and specified as its own layer, to be composited later. The last skill builds a single HTML page you can send or print.</p>

<p><strong>Who it is for.</strong> The creative at a small agency who has to hand a 30 second piece to an editor and a motion designer on Monday, with every frame on brand and a reason written down for every shot.</p>

<p><strong>What it saves.</strong> I did not measure it. The repository ships two finished storyboard examples, of 30 and 60 seconds, that you can open in a browser before installing. If you build storyboards in a slide deck from scratch, compare those to your last one and judge.</p>

<p><strong>Cost to install.</strong> Three commands: clone, run the installer, and the two Python packages the validators need. The installer writes into three folders under <code>~/.claude/</code> and has a <code>--dry-run</code> that shows what it would do.</p>

<pre><code>git clone https://github.com/whystrohm/shotkit.git
cd shotkit &amp;&amp; ./install.sh
pip install pyyaml jsonschema</code></pre>

<p><strong>The catch.</strong> The audit trail is the selling point, and it is real: every run freezes the brand file and records a content hash of every input, prompt and reviewed frame, and a validator checks them later. The loop is over, in the README's words, when every shot's latest verdict is ACCEPT. But the verdict comes from the reviewing skill, which is a model looking at a model's image. The README's own roadmap says what is missing: <a href="https://github.com/whystrohm/shotkit/blob/ac209c52dffcd8da2ff1e598dfb817f117509cc7/README.md#L253" target="_blank" rel="noopener">the run records what was built and reviewed, not who signed it off</a>, and the approver's name and timestamp is listed as a future feature.</p>

<p>So the trail can prove what the critic saw and that no file has changed since. It cannot prove that a client, or a director, said yes. If the storyboard goes to someone who will later ask who approved frame 4, that answer still lives in your email. One more line, from the licence section: Apache 2.0 covers the code and the docs, and grants no rights to the Shotkit or WhyStrohm names.</p>

<p><strong>Verified.</strong> October 26, 2026, at commit <code>ac209c5</code>. 23 stars and 5 forks, the smallest repository this week; Apache 2.0, last push September 26, its validation workflow green on that date. I counted the prompt adapters: ten, as the README says. Read: the README, the installer, the <code>visual-asset-critic</code> <code>SKILL.md</code> and the adapter list.</p>

<h2>3. blender-skills</h2>

<p>Twenty-two skills that teach an agent to drive Blender 5.2, from modelling and materials to lighting, rendering, weather and checking a model before delivery.</p>

<p><strong>Link.</strong> <a href="https://github.com/EL4CTEO/blender-skills" target="_blank" rel="noopener">github.com/EL4CTEO/blender-skills</a>.</p>

<p><strong>What it does.</strong> One core skill routes the request to the specialist one and holds the rules for Blender's current Python API, including a table of the 5.x changes that break old tutorials and old model memory. The agent works in your open Blender if you have a Blender MCP server, or runs Blender in the background without one. There are skills for studio lighting and turntables, for time of day and fog, for rain, snow and wet streets, for Cycles and EEVEE settings with quality presets, and one that checks a model for overlapping faces, floating parts and flipped normals. The rendering skill has a line any post supervisor would sign: render frames first and encode later, because a crash in the middle of an MP4 loses all of it. The author publishes <a href="https://el4cteo.github.io/blender-skills/comparison/" target="_blank" rel="noopener">a side by side comparison</a>, same model and same prompts, with and without the skills.</p>

<p><strong>Who it is for.</strong> The motion designer or art director who needs a product turntable or a rough previz of a wet street at night for a pitch this week, knows what Blender can do and does not have the hours to click through it.</p>

<p><strong>What it saves.</strong> I did not measure it. The comparison page is the fairest way to judge before installing: it shows what the same agent made without the skills.</p>

<p><strong>Cost to install.</strong> Two commands as a Claude Code plugin, and Blender 5.2 or newer on the machine.</p>

<pre><code>/plugin marketplace add EL4CTEO/blender-skills
/plugin install blender-agent-skills@blender-agent-skills</code></pre>

<p>The rain is built on a camera rule, and it is written into the script: <a href="https://github.com/EL4CTEO/blender-skills/blob/71d031dab8bc6729504d11a78cbe91945401045f/skills/blender-weather-fx/scripts/precipitation.py#L302" target="_blank" rel="noopener">each drop is drawn as a streak as long as the distance it falls in half a frame</a>, which is what a 180 degree shutter records. If the rain has to sit on a plate that was shot at 90 degrees for a crisp action look, or at 270, the streak should follow the real exposure time; <a href="https://axenworks.com/shutter-angle-calculator/" target="_blank" rel="noopener">a shutter angle calculator</a> turns angle and frame rate into that time before you adjust it.</p>

<p><strong>The catch.</strong> There are two, and the first is the opening of this piece: the 50 tests exist and the public run passes, but the three that need a GPU are skipped there, and those are the renders. Whether the render presets behave on your card is checked on your card.</p>

<p>The second is in the other way to install it, the shell script for agents other than Claude Code. By default it installs into two places at once, your Claude folder and the shared folder Codex and Cursor read, and what it puts there are links pointing back to the folder you cloned. Before linking each skill it <a href="https://github.com/EL4CTEO/blender-skills/blob/71d031dab8bc6729504d11a78cbe91945401045f/install/install.sh#L43-L45" target="_blank" rel="noopener">deletes whatever already sits under the same name</a>, without asking. If you ever wrote your own skill called <code>blender-rendering</code>, it is gone; and if you later move or delete the cloned folder, all 22 disappear from both agents at once. The script has a <code>--copy</code> flag for real copies.</p>

<p><strong>Verified.</strong> October 26, 2026, at commit <code>71d031d</code>. 516 stars and 45 forks, MIT, created October 14, last push October 19. I counted 22 skill folders and 50 test functions, both as the README says; the test workflow ran on that commit on October 16 and logged 47 passed, 0 failed, 3 skipped. Read: the README, <code>blender-core</code> and <code>blender-rendering</code> <code>SKILL.md</code>, the installer, the CI workflow, the rain script and the test runner.</p>

<h2>4. big-arrow-on-the-screen</h2>

<p>A small macOS program, with a skill, that lets an agent draw a big arrow and a sign on top of any window, pointing at the button you are supposed to press.</p>

<p><strong>Link.</strong> <a href="https://github.com/franzenzenhofer/big-arrow-on-the-screen" target="_blank" rel="noopener">github.com/franzenzenhofer/big-arrow-on-the-screen</a>, by Franz Enzenhofer.</p>

<p><strong>What it does.</strong> When an agent reaches a step only a person should do, a permission dialog, a payment, a two factor code, it normally prints a line in a terminal nobody is looking at. With this, it draws an arrow on the real screen, over the real button, with a sentence on the sign. Clicks pass through the arrow, the keyboard stays where it was, and the arrow removes itself after a time limit, when the agent's session ends or when you answer. It never clicks, types or captures the screen; it only points. The sign can carry a copy button for a code to paste, can be read aloud, and an arrow can be rendered straight to a PNG for documentation. The README shows it in System Settings, Keynote, Finder and Chrome.</p>

<p><strong>Who it is for.</strong> The editor recording a screen tutorial for a client's team, how to relink media or where the export preset lives, who wants clear arrows on the recording without animating callouts in post.</p>

<p><strong>What it saves.</strong> I did not measure it. If you add callouts to tutorials in After Effects or in a screen recording app afterwards, it replaces that pass for the shots where an arrow is enough.</p>

<p><strong>Cost to install.</strong> Two commands, through Homebrew, on macOS 14 or newer. The second one installs the skill for both Claude Code and Codex.</p>

<pre><code>brew install franzenzenhofer/tap/bigarrow
bigarrow install-skill</code></pre>

<p><strong>The catch.</strong> Near the top, the README says drawing needs <a href="https://github.com/franzenzenhofer/big-arrow-on-the-screen/blob/8917602eb86eb4cc66953480fa8d62f8612e420b/README.md#L20" target="_blank" rel="noopener">no macOS permission at all</a>. That is true for an arrow aimed at screen coordinates. Aiming at a button by its name, which is what the examples do, needs Accessibility, and the FAQ says where that permission goes: <a href="https://github.com/franzenzenhofer/big-arrow-on-the-screen/blob/8917602eb86eb4cc66953480fa8d62f8612e420b/README.md#L242-L245" target="_blank" rel="noopener">to the app that started the program</a>, your Terminal, VS Code or Claude, never to the arrow itself.</p>

<p>Accessibility is the macOS permission that lets an app read and operate other apps. Switched on for your terminal, it covers every program you run from that terminal from then on, the arrow included. The tool is careful and says so plainly; the decision is still the one switch you flip. Inside Chrome pages, pointing by name also needs Chrome started with a special flag, and the README says it verified that this month.</p>

<p><strong>Verified.</strong> October 26, 2026, at commit <code>8917602</code>. 817 stars and 26 forks, MIT, created October 8, last push October 18, its test workflow green that day. Read: the README with its FAQ, and the skill's <code>SKILL.md</code>.</p>

<h2>5. sepia</h2>

<p>A writing skill that tries to remove what gives AI text away, starting with the structure of the piece before it touches word choice.</p>

<p><strong>Link.</strong> <a href="https://github.com/Nanako0129/sepia" target="_blank" rel="noopener">github.com/Nanako0129/sepia</a>.</p>

<p><strong>What it does.</strong> It has four operations, write, review, refactor and recreate, plus a fifth that applies a Hemingway voice to fiction. For stories it works in three passes: first the narrative architecture, then the flow between paragraphs, and only last the surface, the clichés and vocabulary most similar tools stop at. The README grounds the order in published studies, linked in a research folder, that found AI fiction detectable from structure alone. For professional writing it has separate rules by kind of document: release notes, tickets, technical articles, long form journalism, and postmortems, with a line worth pinning to a production office wall, blameless toward people, merciless toward mechanisms. Its governing rule warns against overdoing it: a piece with every rule applied becomes a new fingerprint, so it picks three to five moves and leaves the rest.</p>

<p><strong>Who it is for.</strong> The producer writing the report after a shoot that went wrong, who used a model for the first draft and needs it to read like a person who was there, with the times, the dead ends and the actions that follow.</p>

<p><strong>What it saves.</strong> I did not measure it. It replaces a rewriting pass on a draft you already have; it does not replace knowing what happened on set.</p>

<p><strong>Cost to install.</strong> One command through the Skills CLI, or two as a Claude Code plugin.</p>

<pre><code>claude plugin marketplace add Nanako0129/sepia
claude plugin install sepia@sepia --scope user</code></pre>

<p><strong>The catch.</strong> The README has a table of which agents it runs on, and the word that matters is defined in a notice under it: <a href="https://github.com/Nanako0129/sepia/blob/fb06be76abeae7dd606960a32f2b10c1d1798e0d/README.md#L170" target="_blank" rel="noopener">"Verified" means the install completes and the entries appear</a>. Whether each entry then behaves as documented, the same notice says, was not checked platform by platform. It is an unusually honest sentence. Read the table as a list of places it installs; where it works is for you to find out.</p>

<p>The second line to read is about the Hemingway voice. On fiction, <a href="https://github.com/Nanako0129/sepia/blob/fb06be76abeae7dd606960a32f2b10c1d1798e0d/README.md#L101" target="_blank" rel="noopener">asking for strong de-AI on a story counts as opting in</a>. The skill announces it and tells you how to decline, so it is not hidden. But if your treatment has its own voice, a request phrased one way gets you someone else's.</p>

<p><strong>Verified.</strong> October 26, 2026, at commit <code>fb06be7</code>. 3,488 stars and 214 forks, the largest repository this week; MIT, created August 28, last push October 15, its behaviour evaluation workflow green that day. I counted six skill folders, the router plus the five entries the README lists. Read: the README in full and the repository tree. I did not read the research folder.</p>

<h2>What I did not verify</h2>

<p>I did not install or run any of the five. Every behaviour above comes from a file, a workflow log or code I read.</p>

<p>I did not watch a video-demo film or listen to its voice, and I did not check which languages its local voice speaks. I did not generate frames for shotkit or read its critic's rubric in full, so I make no claim about how strict its ACCEPT is.</p>

<p>I did not run the Blender tests myself, and the three skipped ones were not run by anyone whose log I could read. I did not read sepia's research files or the studies they cite; the numbers in its README are the authors' reading of those papers.</p>

<p>I tried to search Hacker News for the five names over the last two months and the search did not answer from here. I did not read Reddit. So I cannot say whether any of the five was discussed. Stars move by the hour, and the numbers above carry the morning they were read.</p>

<p>Left out this week: a DaVinci Resolve editing kit under a non commercial licence that bars use in anything sold, which rules out client work; and a 3D storyboard blocking tool, one of the best fits for this column so far, with two commits made on one day in July and nothing since, whose instructions also tell the agent to open pull requests to the author's repository on its own.</p>

<p>The doubt I am left with is the one shotkit names in its own roadmap. A second model reviewing the first catches real errors, and a hash proves nothing moved. Whether an ACCEPT from a machine should ever close a shot that a client is paying for, without a person's name next to it, I do not know yet.</p>

<p>Edition 10 is due next Monday.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Method: a documentary review of each repository's own files, read on October 26, 2026, with one GitHub snapshot between 10:11 and 10:16 UTC. None of the five skills was installed or run.</p>
<ul>
<li><a href="https://github.com/nilbuild/video-demo" target="_blank" rel="noopener">video-demo</a>: README, <a href="https://github.com/nilbuild/video-demo/blob/767bfb818880c9f38bb02873d3d67141a3e62250/SKILL.md" target="_blank" rel="noopener"><code>SKILL.md</code> at 767bfb8</a>, <code>scripts/install.sh</code>, <code>scripts/install-voice.sh</code>, <code>scripts/say.sh</code>.</li>
<li><a href="https://github.com/whystrohm/shotkit" target="_blank" rel="noopener">shotkit</a>: <a href="https://github.com/whystrohm/shotkit/blob/ac209c52dffcd8da2ff1e598dfb817f117509cc7/README.md" target="_blank" rel="noopener">README at ac209c5</a>, <code>install.sh</code>, <code>skills/visual-asset-critic/SKILL.md</code>.</li>
<li><a href="https://github.com/EL4CTEO/blender-skills" target="_blank" rel="noopener">blender-skills</a>: README, <a href="https://github.com/EL4CTEO/blender-skills/blob/71d031dab8bc6729504d11a78cbe91945401045f/.github/workflows/ci.yml" target="_blank" rel="noopener"><code>ci.yml</code> at 71d031d</a>, <a href="https://github.com/EL4CTEO/blender-skills/blob/71d031dab8bc6729504d11a78cbe91945401045f/install/install.sh" target="_blank" rel="noopener"><code>install.sh</code></a>, <code>precipitation.py</code>, <code>tests/run_all.py</code>, and the public log of the October 16 workflow run.</li>
<li><a href="https://github.com/franzenzenhofer/big-arrow-on-the-screen" target="_blank" rel="noopener">big-arrow-on-the-screen</a>: <a href="https://github.com/franzenzenhofer/big-arrow-on-the-screen/blob/8917602eb86eb4cc66953480fa8d62f8612e420b/README.md" target="_blank" rel="noopener">README at 8917602</a>, <code>skill/big-arrow/SKILL.md</code>.</li>
<li><a href="https://github.com/Nanako0129/sepia" target="_blank" rel="noopener">sepia</a>: <a href="https://github.com/Nanako0129/sepia/blob/fb06be76abeae7dd606960a32f2b10c1d1798e0d/README.md" target="_blank" rel="noopener">README at fb06be7</a> and the repository tree.</li>
</ul>
</section>
