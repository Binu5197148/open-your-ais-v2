---
id: "art-187"
title: "Five Claude Skills and the Check the Install Command Skips"
description: "Five Claude skills opened on September 21. NVIDIA counted one vulnerability in every four skills it analyzed, then wrote down what its own scanner cannot read. The check each of these five leaves to you."
pubDate: "2026-09-21"
toolVersion: "2026-09"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1591961310354-91ca99664c65?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw1fHxibGFjayUyMGFuZCUyMHdoaXRlJTIwcG9ydHJhaXQlMjBhcnRpc3RpY3xlbnwxfDB8fHwxNzkwMDAwNTU2fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "16 min read"
featured: true
---

<p>Here is a question I could not answer today, and I looked for most of the afternoon.</p>

<p>NVIDIA ships a scanner that reads an agent skill before you install it. Its README opens with a number from the research behind it: of 31,132 skills analyzed out of a 42,447 skill dataset, 26.1 per cent contain at least one vulnerability and 5.2 per cent show likely malicious intent. That is one in four with something wrong in it, on a shelf where nobody asks for papers at the door.</p>

<p>Further down, in a section called Limitations, the same file says this: "Non-English content: May miss patterns in other languages."</p>

<p>I write my skills in Portuguese. Half of what I install comes out of Chinese, Korean and Japanese repositories. So which number covers me? I do not know. I do not know what the scanner sees in a Portuguese instruction file, and I do not know why 11,315 skills in that dataset were left out of the analysis. Nothing in the README says.</p>

<p>That is the week. Each of the five below is doing real work, and each one quietly leaves one check on your desk that the install command does not run for you.</p>

<h2>How I checked</h2>

<p>One snapshot, September 21, 2026, between 13:02 and 14:22 UTC.</p>

<p>Repository numbers came from the authenticated <code>gh</code> CLI, read at 14:22:13 UTC, because the public unauthenticated API rate limits this machine at 403. Every link in this article was requested with <code>curl</code> at 14:21:55 UTC and answered 200, with no exceptions this week. File counts came from the git tree of each repository's default branch, and the text I quote came from files downloaded raw in the same window.</p>

<p>What I did not do: I did not install or run any of the four GitHub skills. Where I describe behaviour, I read it in a file, and I name the file.</p>

<h2>1. huashu-design</h2>

<p>A design skill that writes finished pages, decks and animations as plain HTML, then renders them out to MP4, GIF, PPTX or PDF.</p>

<p><strong>Link.</strong> <a href="https://github.com/alchaincyf/huashu-design" target="_blank" rel="noopener">github.com/alchaincyf/huashu-design</a></p>

<p><strong>What it does.</strong> You ask in one sentence for a deck, a clickable phone prototype, an infographic or a sixty second animation, and it builds the thing rather than a description of the thing. The design decisions are encoded as recipes in a <code>references/</code> folder and a review pass scores the draft across five dimensions before it comes back to you. The motion side is the part that matters to this readership: it has a stage and sprite time model with a small set of animation primitives, and one command exports the finished HTML to MP4 at 25fps, to a 60fps interpolated version, to a palette optimised GIF, and with a music bed mixed in. Narration is there too, through a text to speech step, and that step is the one part that needs an outside account: the optional cloud scripts read a Doubao voice key and a Volcano Ark key from <code>.env</code>, both from Volcengine consoles. The README states plainly that the core design and render pipeline runs locally with no keys and no network calls, and that the cloud pieces sit apart in <code>scripts/cloud/</code> behind an explicit consent flag. The licence changed to MIT on May 14, 2026, so commercial use no longer needs permission.</p>

<p><strong>Who it is for.</strong> The director who has to hand a client a treatment deck on Thursday and a fifteen second animated logo idea on Friday, and owns neither an After Effects licence nor the two days.</p>

<p><strong>What it saves.</strong> The substitution is the deck build and the motion mock, the two jobs that usually go to a designer at the exact moment the designer is on another job. If you would have made those in Keynote and After Effects, you save that time. If you would have sent a PDF of stills instead, you save nothing and gain a format.</p>

<p><strong>Cost to install.</strong> One command, with Node on the machine.</p>

<pre><code>npx skills add alchaincyf/huashu-design</code></pre>

<p><strong>The catch.</strong> It is in a quoted block immediately under that install line, and it is the most useful sentence in the file: this skill is not one <code>SKILL.md</code>. The four subdirectories carry the recipes, the scripts and the assets that the instructions call by name, and a <code>skills</code> CLI at version 1.5.15 or older had a bug that synced the single file and nothing else. The fix shipped in 1.5.19.</p>

<p>Think about what that failure looks like from the inside. Nothing errors. The skill installs, the agent finds it, reads 582 lines of confident instruction, and then tries to open a recipe file that is not on the disk. You get a result. It is just a result built without any of the twenty design philosophies you thought you were buying, and it will look like the model's ordinary output, which is precisely what the skill exists to avoid.</p>

<p>The check is one line, and it is the check this whole edition is named after.</p>

<pre><code>ls ~/.claude/skills/huashu-design/</code></pre>

<p>If you see only <code>SKILL.md</code>, upgrade the CLI and install again, or clone the repository straight into the skills folder.</p>

<p>The counter rule, which this column runs on every number a README claims about itself, did not settle here. The README says those four subdirectories hold 99 referenced recipes, scripts and assets. I counted three ways and got none of them to 99: the four directories hold 181 files in the tree; <code>SKILL.md</code> mentions 64 distinct paths inside them, of which 58 resolve to a file that exists; the raw count of path mentions is 138. The unit the README means by "referenced" is not defined, so I am reporting the method rather than a verdict. The part that matters for the check above is not in dispute: it is 191 files, not one.</p>

<p><strong>Verified.</strong> September 21, 2026, 14:22 UTC. 24,343 stars, 2,785 forks, 3 open issues, MIT with a LICENSE file at the root, last push September 18 at 13:14 UTC, repository created April 19, 2026, not archived. <code>SKILL.md</code> is 582 lines and 65,262 bytes. The tree of <code>master</code> holds 191 files: 33 in <code>references/</code>, 105 in <code>assets/</code>, 20 in <code>scripts/</code>, 23 in <code>demos/</code>, and 10 at the root including <code>LICENSE</code>, <code>SECURITY.md</code> and <code>.env.example</code>. The two key names in <code>.env.example</code> were read in that file.</p>

<h2>2. reference-video-director</h2>

<p>A skill that measures a reference video with FFmpeg and turns it into a shot plan for a different shoot, without copying it.</p>

<p><strong>Link.</strong> <a href="https://github.com/8TrafficAI/reference-video-director" target="_blank" rel="noopener">github.com/8TrafficAI/reference-video-director</a></p>

<p><strong>What it does.</strong> It splits a job most of us do badly into three layers that never touch. First the bundled command line tool measures the reference locally: duration, audio presence, sampled frames, scene change candidates, a contact sheet. Then the agent writes an interpretation of composition, light, camera language, cutting rhythm, sound and structure, and it has to label every statement as observation, inference or unknown. Then it takes your brief, the real one with your subject, your duration, your one presenter and your half day, and produces a shot plan with durations, priorities, fallbacks and a line of rationale pointing back at either measured evidence or your own constraints. It refuses several jobs out loud: it does not download remote video, does not draw storyboard frames, does not write video model prompts, and does not fabricate subtitle timing before footage exists. It also says, in the skill file itself, that analysing a reference grants you no rights to reuse anything in it.</p>

<p><strong>Who it is for.</strong> The director who gets the client link with "we want this energy" attached and has to convert that into a list a crew can actually shoot on Tuesday.</p>

<p><strong>What it saves.</strong> The substitution is the reference breakdown pass: watching a piece eight times with a notepad, writing down what is transferable and what is just that brand's property, then arguing about it. The repository ships a self contained proof you can run before trusting any of it, which is rarer than it should be: a script that generates its own six second test clip, measures it, validates a four shot plan against it, and deletes everything it made. No model, no key, no upload.</p>

<p><strong>Cost to install.</strong> One command, plus Node 20 or newer and an FFmpeg build whose <code>ffmpeg</code> and <code>ffprobe</code> expose the seekable <code>fd</code> protocol. macOS or Linux only.</p>

<pre><code>npx skills@1.5.21 add L4A-ai/reference-video-director --skill reference-video-director --agent codex --yes</code></pre>

<p><strong>The catch.</strong> It is in a section called Local data note, and it is about your disk rather than your prompt. Before FFmpeg runs, the tool copies the selected source into a private staging directory beside your output folder, hashes that snapshot, and reads it through an inherited file descriptor. That design is deliberate and it is good: it stops a playlist from pointing somewhere else and stops the file being swapped under the analyser mid run. The price is written in the same paragraph and almost nobody will read it before pointing the thing at a four hour master: it temporarily needs enough free space for a complete extra copy of the video, plus the extracted frames. The supported ceilings are 8 GiB, four hours, 7680 by 4320 pixels and 16 audio channels.</p>

<p>The second half of that note is the part I would put on a sticky note. If the process dies in a way it cannot catch, it can leave a <code>.reference-video-director-tmp-</code> directory behind, and that directory may hold a full copy of the source. On a client reference under embargo, that is a copy you did not decide to make, sitting in a project folder you might commit.</p>

<p>So the check here is disk, before the fact. If your reference is a long master rather than a thirty second spot, it is worth knowing what your format actually weighs per hour before you ask a tool to hold two of them: <a href="https://axenworks.com/hours-per-card/" target="_blank" rel="noopener">how many hours each card and drive size holds at each data rate</a>. Then confirm the staging directory is gone when the run finishes.</p>

<p>One more thing belongs in the open, because the repository put it in the open first. Its published audit lists an indirect prompt injection surface, and the skill file responds by instructing the agent to treat every filename, frame, subtitle, metadata field, on screen text and QR code in the reference as untrusted content, and never to follow an instruction found inside it. That is the correct posture. It is also a reminder that a reference video is somebody else's file.</p>

<p><strong>Verified.</strong> September 21, 2026, 14:22 UTC. 0 stars, 0 forks, 0 open issues, MIT with a LICENSE at the root and a second one inside the skill folder, last push August 7 at 12:24 UTC, repository created August 2, 2026, not archived, 349 KB, 31 files. The organisation was renamed: the install line above still says <code>L4A-ai</code>, and that address redirected to the <code>8trafficai</code> listing and answered 200 at 14:21:55 UTC. The disk limits, the staging behaviour and the leftover directory were read in the README and confirmed in <code>SKILL.md</code>. I did not run the verifier.</p>

<h2>3. SkillSpector</h2>

<p>NVIDIA's open source scanner that reads a skill's files and scores how risky it is to install.</p>

<p><strong>Link.</strong> <a href="https://github.com/NVIDIA/SkillSpector" target="_blank" rel="noopener">github.com/NVIDIA/SkillSpector</a></p>

<p><strong>What it does.</strong> You point it at a repository, a zip, a folder or a single file and it answers one question: is this safe to install. Stage one is static. Regular expression matching, a Python abstract syntax tree pass that flags dangerous calls, taint tracking from sensitive sources to network sinks, YARA signatures for known malware patterns, and a live lookup of the skill's declared dependencies against the OSV vulnerability database, which is free and needs no key. Stage two is optional and uses a language model to judge intent and strip false positives. Output is a score from 0 to 100 with a plain recommendation, and it will write terminal text, JSON, Markdown or SARIF. It never executes the skill it is reading. It is also, and the README says so, not a sandbox: it tells you before you install, and does nothing for you after.</p>

<p><strong>Who it is for.</strong> Anyone who has installed a skill this month because a thread said it was good. Going by my own week, that is me.</p>

<p><strong>What it saves.</strong> The substitution is reading a stranger's repository line by line before letting an agent run it on a machine that holds client footage. Most people do not do that pass at all, so calling it time saved is dishonest. What it replaces is the shrug.</p>

<p><strong>Cost to install.</strong> Two commands, and then one per scan. There is a Docker route in the README if you would rather not put Python on the machine.</p>

<pre><code>uv tool install git+https://github.com/NVIDIA/skillspector.git
skillspector scan ./the-skill-folder/ --no-llm</code></pre>

<p><strong>The catch.</strong> It is the flag I just wrote into that second line, and it is there for a reason. With the language model stage enabled, which is the state you get if you type nothing, the contents of the eligible files are sent to whichever provider you configured. That is the correct behaviour for scanning a stranger's public repository. It is the wrong behaviour the first time you point the tool at your own unpublished skill, the one that still has a client name and a working method inside it. The habit worth building is <code>--no-llm</code> for anything of yours, and the full scan for anything of theirs. One detail cuts the sting: if you point it at a local agent CLI instead of an API endpoint, it uses that CLI's existing login and never reads or forwards a key. Separately, the dependency check talks to OSV.dev even in static mode, sending package names rather than file contents.</p>

<p>And then the Limitations section, which is where this edition started. Non-English content may miss patterns. It cannot read text inside images. It cannot read compiled or encrypted content. It is static, so it cannot see what a skill does at runtime. A scan that comes back clean is a smaller promise than a scan that comes back dirty, and for those of us writing in Portuguese it is smaller still by an amount nobody has published.</p>

<p>The counter rule agreed with this one, which is worth saying because the column usually reports the opposite. The README claims 71 vulnerability patterns across 17 categories. I counted 17 category headings exactly, and 72 rows listed in their tables. The single row of drift is in Supply Chain, whose heading says "9+" and lists 8, so the plus sign is doing honest work. That is as close as a self reported number gets.</p>

<p><strong>Verified.</strong> September 21, 2026, 14:22 UTC. 17,961 stars, 1,546 forks, 134 open issues, Apache 2.0, last push September 18 at 11:36 UTC, repository created March 21, 2026, not archived. The dataset figures, the pattern tables, the trust model section and the limitations list were read in the README served at that time. The research is credited to "Agent Skills in the Wild: An Empirical Study of Security Vulnerabilities at Scale", Liu and others, 2026. I did not open the paper.</p>

<h2>4. Distilly</h2>

<p>A skill that turns someone's messages, documents and public record into a reusable profile another agent can wear.</p>

<p><strong>Link.</strong> <a href="https://github.com/titanwings/distilly" target="_blank" rel="noopener">github.com/titanwings/distilly</a></p>

<p><strong>What it does.</strong> You give it material about a person and it produces what it calls a Person Profile: their observable experience, the decisions they made and why, how they express themselves, how they work. That profile is then packaged as an installable skill of its own. It runs three different pipelines depending on who the person is. Colleague builds a working profile out of technical standards, workflows and behaviour at work. Relationship organises expression patterns, triggers, how a conflict starts and how it gets repaired. Celebrity ships a six stage research chain that pulls subtitles, cleans them into transcripts, merges research and runs a quality pass. The project is careful about one claim and repeats it: it builds a source grounded profile, and it does not say it is cloning the person. It was called colleague-skill until August and the rename matters at install time, because the folder has to be named <code>distilly</code> for a host to find it.</p>

<p><strong>Who it is for.</strong> The producer whose editor is leaving in three weeks, taking with them every unwritten rule about how that channel gets cut.</p>

<p><strong>What it saves.</strong> The substitution is the handover document nobody ever writes properly, plus the three months afterwards of asking the person who left. Whether it saves anything at all depends entirely on the next paragraph.</p>

<p><strong>Cost to install.</strong> One command, into the skills directory your agent reads, and the folder name is not optional.</p>

<pre><code>git clone https://github.com/titanwings/distilly ~/.claude/skills/distilly</code></pre>

<p><strong>The catch.</strong> It is a cell in the data sources table, in the Notes column, and it is the whole business case: Slack collection requires an administrator to install a bot, and on the free plan the history only goes back 90 days.</p>

<p>Read that against the scenario the project opens with, which is the colleague who quit. The knowledge you want is the eighteen months of decisions, the argument in March about the edit, the way they answered a difficult client. On a free workspace, none of that is reachable. What is reachable is the last quarter, which is mostly logistics and leaving. The profile will build. It will be a profile of somebody's notice period.</p>

<p>The check, then, is before you collect anything: find out which Slack plan your workspace is on and how far back its history actually goes, and ask the administrator. If the answer is the free plan, the sources that would make this worth doing are already gone, and the honest move is to interview the person while they are still there and feed it that instead, which the skill accepts as a supported input.</p>

<p>Two smaller notes from the same table, since they also decide feasibility. The X route for public figures runs through a third party service that meters usage, so that one is not free. WeChat history has to be exported first with an outside tool. Lark is the only source the project describes as fully automatic.</p>

<p><strong>Verified.</strong> September 21, 2026, 14:22 UTC. 24,933 stars, 2,169 forks, 56 open issues, MIT, last push September 16 at 04:54 UTC, repository created March 30, 2026, not archived. The three families, the eight supported agent hosts, the rename and the full data sources table were read in the README served at that time. The README links a technical report on arXiv under the project's former name; I did not open it.</p>

<h2>5. ugc-avatar-builder</h2>

<p>My own. It writes a six layer image prompt for an AI person who looks like they filmed themselves at home holding your product.</p>

<p><strong>Link.</strong> <a href="https://openyourais.com/skills/" target="_blank" rel="noopener">openyourais.com/skills</a></p>

<p><strong>What it does.</strong> It refuses to write a short prompt. Every output carries all six layers and the assembled version at the end. Layer one is the character anchor, the locked identity you paste verbatim into every later image so the face survives a series: age as a span rather than a number, skin tone with where it runs warmer and cooler, and named asymmetries, because a model left alone renders a symmetrical face and a symmetrical face reads as a render. Layer two is authenticity, which is the list of imperfections the frame needs to have, described as things to draw rather than things to avoid. Then the product hold, the environment, the camera and light, and the expression, which has to name a social moment rather than a mood. The camera layer is the one I would defend in a room of photographers: 50 to 70 centimetres of subject distance, one soft catch light rather than two, and no ring light, because two matching catch lights is what tells a viewer they are looking at an advertisement.</p>

<p><strong>Who it is for.</strong> The social editor producing thirty product variations a month who cannot book a creator for each one.</p>

<p><strong>What it saves.</strong> No measurement. What it replaces is the hour of rewriting a prompt after each render, which is the wrong hour to spend because the fix is almost always more specificity in the anchor, not a different setting.</p>

<p><strong>Cost to install.</strong> One command after the download. It needs nothing else: the output is text.</p>

<pre><code>unzip ugc-avatar-builder.zip -d ~/.claude/skills/</code></pre>

<p><strong>The catch.</strong> This one is an absence rather than a line, and the file is mine, so it is on me.</p>

<p>The stated goal of this skill, written in its second sentence, is an image that survives a viewer scrolling at full speed and looking for signals that something was produced. Everything in it is engineered toward a frame nobody can tell from a real person. I searched the published package this afternoon, all three files: the word disclosure does not appear once. Neither does policy, nor consent, nor likeness. The phrase AI generated appears twice, both times describing a look to avoid rather than a label to apply.</p>

<p>So the skill builds a synthetic person for paid social and says nothing at all about telling the platform, or the viewer, that the person is synthetic. That is not a small omission on a paid campaign, where the platforms have their own rules about labelling realistic synthetic media and the brand carries the consequence. I am not quoting those rules here, because I did not open them today and this column does not quote what it has not read. I am telling you the file is silent, and that the check belongs to whoever runs the campaign.</p>

<p>The same package has a second gap this column has flagged before and has still not closed: there is no LICENSE file inside the zip. The permission to use it lives in a sentence on the download page, which is not the same thing as a licence in the folder.</p>

<p><strong>Verified.</strong> September 21, 2026, 14:22 UTC. The published zip answered 200 and is 11,416 bytes. It holds three files: <code>SKILL.md</code> at 12,229 bytes, <code>references/ugc-anatomy-reference.txt</code> at 11,852 bytes, and a 909 byte README. The word searches above were run against all three of those files as published, not against the copy on my machine. Long dashes and short dashes in the package: zero of each.</p>

<h2>What I did not verify</h2>

<p>I did not install or run any of the four GitHub skills. I did not run the coffee shop verifier that reference-video-director ships, which means the five findings and thirteen evidence locators it promises are still its claim and not my observation.</p>

<p>I could not reproduce huashu-design's 99. Three counts, three different numbers, none of them 99, and the README does not define the unit.</p>

<p>I do not know why 11,315 of the 42,447 skills in NVIDIA's cited dataset were left out of the analysed subset. The README gives both figures and no reason, and I did not open the paper to find one.</p>

<p>I did not test whether SkillSpector actually misses a pattern written in Portuguese. That is the difference between reading a limitation and measuring it, and measuring it is a job with a result, not a paragraph.</p>

<p>I did not read the current TikTok or Meta rules on labelling synthetic media today, which is exactly why I did not quote them.</p>

<p>And every star count above is a photograph taken at 14:22 UTC, not a fact.</p>

<h2>The rule I am keeping</h2>

<p>After you install anything this week, list the directory before you use it. Count the files. If the count is one and the README described a folder, you did not install the skill, you installed its table of contents, and the agent will keep going anyway.</p>

<p>Next Monday, five more.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>VERIFICATION NOTE, September 21, 2026.
Every repository number in this article was read by me on September 21, 2026, in a single snapshot window between 13:02 and 14:22 UTC, with the repository metadata read at 14:22:13 UTC.
Metadata came from the authenticated `gh` CLI, not the public unauthenticated API, which rate limits this machine at 403.
Every link in the article was requested with `curl` at 14:21:55 UTC and all returned HTTP 200.
File counts came from the git tree of each repository's default branch, read through the same authenticated CLI.
Quoted text was read in files downloaded raw in the same window: the READMEs of all four GitHub repositories, plus `SKILL.md` for huashu-design and for reference-video-director, plus `.env.example` for huashu-design.
The four GitHub skills were NOT installed or executed on this machine, and the article says so in its own section.
The ugc-avatar-builder figures and word searches were run against the zip published at openyourais.com/skills, as served at 14:22 UTC.</p>
</section>
