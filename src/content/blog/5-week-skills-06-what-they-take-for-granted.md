---
id: "art-188"
title: "Five Claude Skills and What They Take for Granted"
description: "Five Claude skills opened on September 28: a Word redliner, a brand palette extractor, a local ComfyUI kit, a NotebookLM driver and a Seedance starter. What each one takes for granted about your files, your licences and your account."
pubDate: "2026-09-28"
toolVersion: "2026-09"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1727451139462-cd34008cd50b?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxNHx8ZmlsbSUyMHNldCUyMGNpbmVtYXRvZ3JhcGh5fGVufDF8MHx8fDE3OTA2MDA3NzN8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "14 min read"
featured: true
---

<p>Hitchcock shot Rope in 1948 as if it were one continuous take. It is not. Several of its cuts are hidden by pushing the camera into the dark back of a jacket and pulling out again on the other side of the splice. You watch eighty minutes without seeing a join, and the joins are the whole craft.</p>

<p>The skill I liked most this week works exactly like that. It is called onetake, it went public on GitHub on September 26, and by this morning it had 639 stars. It makes motion films where every beat grows out of the one before, and it measures the joins with a script before a human sees the cut. I read the README to the bottom, and the last section settles it: the licence is PolyForm Noncommercial 1.0.0, and the file says in bold that commercial use is not permitted. This column is read by people who deliver paid work, so onetake is not one of the five.</p>

<p>That is the week. The five below are all usable on a paid job, and each one assumes a permission you never gave it out loud: over your file, over someone else's images, over a model's licence, over your whole Google account, or over what you think you attached.</p>

<h2>How I checked</h2>

<p>One snapshot, September 28, 2026, between 12:57 and 13:05 UTC.</p>

<p>Repository numbers came from the authenticated <code>gh</code> CLI and were read for the last time at 13:05:17 UTC. The public unauthenticated API still rate limits this machine. Every link in this article was requested with <code>curl</code> at 13:05:20 UTC and answered 200. Text I quote came from files downloaded raw in the same window: READMEs, <code>SKILL.md</code> files, and in two cases the deeper documents where the real sentence lives, which I name in each entry.</p>

<p>What I did not do: I did not install or run any of the four GitHub skills. Where I describe behaviour, I read it in a file.</p>

<h2>1. docx-cli</h2>

<p>A command line tool and skill that lets an agent read, comment on and redline a Word file without breaking its formatting.</p>

<p><strong>Link.</strong> <a href="https://github.com/kklimuk/docx-cli" target="_blank" rel="noopener">github.com/kklimuk/docx-cli</a></p>

<p><strong>What it does.</strong> The usual way an agent edits a <code>.docx</code> is to unzip it and write the XML underneath by hand, which burns tokens and often produces a file Word refuses to open. This tool gives the agent plain commands instead: read the document as annotated Markdown, find a phrase, replace it while keeping the font, turn on tracked changes, leave a comment anchored to a sentence. Every paragraph gets a stable address like <code>p3:5-20</code>, so the agent can point at exactly the words it means. You open the result in Word and accept or reject each change like any other redline. The README publishes its own benchmark: six real document tasks, graded from rendered Word pages, where a small cheap model driving docx-cli solved 5 of 6 against 0.7 of 6 with the default skill, using about 2.5 times fewer input tokens. That is their measurement, not mine, and the harness that produced it is in the repository.</p>

<p><strong>Who it is for.</strong> The producer who gets the agency's script back as a Word file with thirty client comments on a Friday night, and needs a redlined answer in the same file, not a new PDF.</p>

<p><strong>What it saves.</strong> The replacement is the evening you spend retyping the agent's suggestions into Word one comment at a time. If your scripts live in Google Docs, it replaces nothing.</p>

<p><strong>Cost to install.</strong> Two commands: the skill, and the binary it drives. The latest release is v0.26.0, published September 25.</p>

<pre><code>npx skills add kklimuk/docx-cli
bun add -g bun-docx</code></pre>

<p>Without Bun, the skill folder carries a bootstrap script that downloads a prebuilt binary pinned to the release and checks its SHA-256 before installing. The README adds that the macOS binaries are ad hoc signed, not notarized.</p>

<p><strong>The catch.</strong> It is a comment inside the quick example, and it is the first line of that example: make a copy first, because "there's no undo". The <code>SKILL.md</code> says the same thing in its safety section: every command that changes the file overwrites it in place, and "git is your history". A flag writes a copy instead, <code>-o</code>, and another previews without writing, <code>--dry-run</code>. Both exist. Neither is the default.</p>

<p>Developers keep their files in git, so for them this is fine. The script in your Downloads folder is not in git. It is the only copy of the version the client commented on.</p>

<p>There is a second line worth knowing, one section above. When the agent reads the document, tracked changes are shown "accepted-clean". If the file arrives with the agency's own pending redlines, the agent reads their proposal as if it were already the approved text, unless it asks for the full view. Tell it to list tracked changes before it reads anything else.</p>

<p><strong>Verified.</strong> September 28, 2026, 13:05 UTC. 214 stars, 10 forks, MIT, last push September 25 at 21:03 UTC. Read: the README, <code>skills/docx-cli/SKILL.md</code>, <code>scripts/bootstrap.sh</code>, and the latest release tag.</p>

<h2>2. design-dna</h2>

<p>A skill that turns screenshots or links of a design you admire into a measured JSON file, then builds new pages from that file.</p>

<p><strong>Link.</strong> <a href="https://github.com/zanwei/design-dna" target="_blank" rel="noopener">github.com/zanwei/design-dna</a></p>

<p><strong>What it does.</strong> Three passes. It lays out a schema of everything a visual identity contains, it fills that schema from your references, and it generates pages from the result. The schema has three layers: measurable tokens like colour, type scale and spacing, qualitative style like mood and composition, and effects that go beyond plain CSS, like particles, shaders and scroll driven motion. The part that made me stop is colour. The README says a model looking at a screenshot drifts toward familiar palettes: a brand pink of <code>#ff90e8</code> gets seen as <code>#ec4899</code>. So when the reference is an image file, the skill does not look. It runs a clustering script over the actual pixels, writes the exact hexes, and after generating, screenshots its own output and scores the drift colour by colour, with a pass or fail threshold. Their example: a measured rebuild at a mean colour difference of 0.87, a perceived rebuild at 9.54.</p>

<p><strong>Who it is for.</strong> The art director building a pitch page or a title card system for a brand whose palette has to match the brand book to the hex, and who is tired of the agent inventing a nearby pink.</p>

<p><strong>What it saves.</strong> The eyedropper session: opening five reference frames, sampling colours by hand, and still getting the background wrong because it looked black and was not. If your client hands you a brand book with hex values already written in it, the measuring half saves you little.</p>

<p><strong>Cost to install.</strong> One command, with Node on the machine.</p>

<pre><code>npx skills add zanwei/design-dna</code></pre>

<p>A second install happens later, silently. The first time you analyse an image, the <code>SKILL.md</code> tells the agent to run <code>npm install --silent</code> inside the skill's own scripts folder, which pulls an image library called sharp. Expect a pause and a network call the first time, not the second.</p>

<p><strong>The catch.</strong> It is step 5 of the generate phase in <code>SKILL.md</code>, and the README never mentions it. When the design needs assets, the agent should fetch them from the original source, and if you gave it a URL, it should take the real asset from that URL "instead of recreating, approximating, or substituting it".</p>

<p>Think about what a reference URL usually is on our side of the business. It is a competitor's site, a festival page, a campaign someone else shot. Give design-dna that link to capture the feel, and the rule tells the agent to pull that site's actual photographs and logo into your page. For a private mood test, harmless. For a pitch that leaves the building, you are presenting someone else's images. The <code>SKILL.md</code> contains no word about licence or rights. If you want the feel without the pictures, give it screenshots, and tell it to use placeholders for anything it would have downloaded.</p>

<p><strong>Verified.</strong> September 28, 2026, 13:05 UTC. 1,855 stars, 100 forks, MIT, last push August 28. Read: the README, <code>SKILL.md</code>, and <code>scripts/package.json</code>.</p>

<h2>3. ComfyUI-Agent-Kit</h2>

<p>A kit that lets Claude Code, and three other agents, drive a ComfyUI install on your own machine.</p>

<p><strong>Link.</strong> <a href="https://github.com/SlavaSexton/ComfyUI-Agent-Kit" target="_blank" rel="noopener">github.com/SlavaSexton/ComfyUI-Agent-Kit</a></p>

<p><strong>What it does.</strong> It installs a skill plus an MCP driver with around 90 tools, so the agent can operate ComfyUI directly: build and validate a graph, queue it, download a model, read the logs. It checks your VRAM and free disk first and refuses a model download that will not fit. It indexes Comfy's official library of 581 workflow templates and uses them as the starting point instead of inventing graphs from memory, and it saves every workflow it runs into your Workflows sidebar, so you can open it by hand afterwards. For this readership the unusual part is colour: version 2 ships a set of OpenColorIO nodes to read a sequence, grade in ACES and write ProRes or EXR. It is published by AI VFX News under Apache 2.0.</p>

<p><strong>Who it is for.</strong> The finishing artist with a strong GPU under the desk who wants to say "restore this archive clip and write it out as ProRes" and get a graph, not a tutorial.</p>

<p>Not for me, and I will say why. I run Comfy on Comfy Cloud, not locally. The README is clear about this in a quoted block near the top: this kit is the local counterpart, and if you prefer the cloud, the official Comfy Cloud MCP is the one to use.</p>

<p><strong>What it saves.</strong> The hour of hunting for the right template and the right model variant for your card, then discovering the model does not fit in memory halfway through the download. If you already keep a folder of your own tested graphs, it saves you the typing and not much more.</p>

<p><strong>Cost to install.</strong> Two commands inside Claude Code, and a precondition: ComfyUI already running locally on port 8188.</p>

<pre><code>/plugin marketplace add SlavaSexton/ComfyUI-Agent-Kit
/plugin install comfyui@comfyui-agent-kit</code></pre>

<p>The multi agent installer also clones the template library, about 900 MB, unless you pass the skip flag.</p>

<p>Before you ask the agent to write that restored clip out as ProRes 4444, it helps to know what a minute of it weighs at your resolution. <a href="https://axenworks.com/prores-file-size-calculator/" target="_blank" rel="noopener">This ProRes file size calculator</a> gives the number before the drive fills.</p>

<p><strong>The catch.</strong> The kit is Apache 2.0. Some of the weights it recommends are not commercial at all, and the warning is in the right file but not in the sentence that sends you there.</p>

<p>The clearest case is SUPIR, a diffusion based restore and upscale model. At the top of the README it is listed among the enhancement tools with no note. The note comes much further down, in the thank you list: "the SUPIR weights are non-commercial." The model entry itself, in <code>MODELS/utility.md</code>, is explicit, and I want to be fair to the author here: it says do not use it in a commercial pipeline. The problem is the general advice a few lines lower in the same file, the rule for choosing an upscaler. It sends animated and AI generated frames to diffusion upscalers and names SUPIR among them, with no flag. AI generated frames are precisely what this readership would feed it. The same credits section flags two more pieces as non-commercial, a FLUX.2 Klein enhancer and the Anima ControlNet patches.</p>

<p>So on a paid job, ask the agent which weights it loaded, by name, before you deliver. The kit's own <code>ATTRIBUTION.md</code> has the licence of each component in one table. Read that table once.</p>

<p><strong>Verified.</strong> September 28, 2026, 13:05 UTC. 102 stars, 13 forks, Apache 2.0, last push September 3. Read: the README, <code>shared/comfyui/SKILL.md</code>, <code>shared/comfyui/MODELS/utility.md</code>, <code>docs/ADVANCED.md</code>, <code>ATTRIBUTION.md</code> and <code>docs/UPDATING.md</code>.</p>

<h2>4. notebooklm-py</h2>

<p>An unofficial Python library, command line and skill that lets an agent drive Google's NotebookLM, now renamed Gemini Notebook.</p>

<p><strong>Link.</strong> <a href="https://github.com/teng-lin/notebooklm-py" target="_blank" rel="noopener">github.com/teng-lin/notebooklm-py</a></p>

<p><strong>What it does.</strong> NotebookLM reads the sources you give it and answers only from them, with citations. This library lets Claude do that without the browser: create a notebook, load thirty PDFs, links and YouTube videos, ask questions and get cited answers back as JSON, then generate the audio overview, slides, a report or a mind map and download all of it in one go. The README's own framing is to let Google do the heavy reading while your agent spends tokens only on the final pass. The note at the top says Google renamed the product Gemini Notebook in July 2026 and the library still works unchanged.</p>

<p>One reason it is this one and not the other. The best known NotebookLM skill for Claude, by PleasePrompto, with 7,780 stars, was archived this month. Its README now opens by saying it is no longer maintained. notebooklm-py was pushed to yesterday.</p>

<p><strong>Who it is for.</strong> The documentary researcher with forty interview transcripts, a stack of archive PDFs and a director who asks "where did she say that?" at eleven at night.</p>

<p><strong>What it saves.</strong> The search. Finding the one quote, with the source it came from, across forty documents you half remember. The time depends entirely on how messy your archive is, and I did not run it on one.</p>

<p><strong>Cost to install.</strong> Three commands. The first login downloads a Chromium of about 170 MB and opens a Google sign in.</p>

<pre><code>uv tool install "notebooklm-py[browser]"
notebooklm login
notebooklm skill install</code></pre>

<p>The README states it plainly in a warning box: it uses undocumented Google APIs that can change without notice, and it is not affiliated with Google.</p>

<p><strong>The catch.</strong> There are three ways to log in, and for unattended work the <code>SKILL.md</code> tells the agent to prefer one of them: a durable master token. That is the recommendation, on line 27. The warning comes on line 64 of the same file: a master token is "a durable full-account credential that survives password changes", so use a dedicated account.</p>

<p>The design document behind it, in the repository's decision records, is more direct than the skill. The token authorizes your entire account, not NotebookLM alone, it keeps working after you change your password until you revoke it by hand, and the login path it uses is described there as grey against Google's terms. The record recommends a dedicated or throwaway account, and that is the right call.</p>

<p>Here is the practical problem with that advice for a producer. Your research, your client decks and your Drive live on your main account. That is exactly the account you would be tempted to connect, and exactly the one the author says not to. Make a separate Google account for this, move only the sources you need into it, and use the browser login, not the token, until you have read the decision record yourself.</p>

<p><strong>Verified.</strong> September 28, 2026, 13:05 UTC. 19,516 stars, 2,609 forks, MIT, last push September 27 at 23:20 UTC. Read: the README, <code>SKILL.md</code>, and <code>docs/adr/0023-master-token-headless-auth.md</code>. The archived status of PleasePrompto/notebooklm-skill was read at 13:05:04 UTC.</p>

<h2>5. seedance-lab-starter</h2>

<p>A small starter kit, from my own library, for one continuity exercise in Seedance: keep a character's face, clothes and room steady through a single shot.</p>

<p><strong>Link.</strong> <a href="https://openyourais.com/skills/seedance-lab-starter.zip" target="_blank" rel="noopener">openyourais.com/skills/seedance-lab-starter.zip</a>, written up in the <a href="/blog/higgsfield-character-consistency-toninho-workflow/">character consistency workflow from the Toninho Sagatiba pilot</a>.</p>

<p><strong>What it does.</strong> It turns the order I work in on a real film into eight steps an agent follows. Start from what the director intends and the actual reference files. Check the references against each other and say which image governs which feature, face from one, wardrobe from another. Propose a scene frame, have a human look at the actual frame before anything moves, draft the prompt, show the cost, get approval, then review the result against a ten question checklist that asks at which frame a defect first appears and whether it was already in the source image. Step 2 carries the line I would keep if I kept only one: do not assume a file is attached to a generation because it appears in the conversation. A reference that sits in the chat is not a reference the model received.</p>

<p><strong>Who it is for.</strong> The director moving from single pretty clips to a recurring character, who needs the same person in the same shirt in the same room for more than one shot.</p>

<p><strong>What it saves.</strong> Credits, more than hours. The frame review in step 4 and the approval in step 6 exist so you do not pay for a clip built on a frame nobody looked at. How much that is worth depends on how often you have animated a frame nobody approved.</p>

<p><strong>Cost to install.</strong> One command after the download. The kit connects nothing and runs no scripts.</p>

<pre><code>unzip seedance-lab-starter.zip -d ~/.claude/skills/</code></pre>

<p><strong>The catch.</strong> Two lines in the kit's own files, and both are there on purpose.</p>

<p>The first is in the README: the example is "an instructional prompt, not a logged successful generation." The prompt template in the kit teaches the structure. It is not a prompt I ran and kept because it worked, and nobody should read it as one.</p>

<p>The second closes the <code>SKILL.md</code>: the starter covers a silent shot, not a lip sync pipeline. The template asks for one listening shot, one small head movement, no dialogue. The moment your character has to speak, you are outside what this kit covers. The README says the larger handoff behind it is not in the zip.</p>

<p>Same gap as every skill from my library so far: there is no LICENSE file inside. The README grants use for your own projects and asks you to keep the author credit when you share it. The permission lives in one sentence of the README, and the folder has no licence file to back it.</p>

<p><strong>Verified.</strong> September 28, 2026, 13:05 UTC. The published zip answered 200 at 2,558 bytes. It holds four files: <code>SKILL.md</code> at 1,480 bytes, <code>README.md</code> at 826, <code>checklist.md</code> at 818 and <code>prompt.txt</code> at 455. I read all four as published, not my local copy. Long dashes and short dashes in the package: zero.</p>

<h2>What I did not verify</h2>

<p>I did not install or run any of the four GitHub skills.</p>

<p>I did not reproduce docx-cli's benchmark or design-dna's colour example. Both numbers are theirs, and both repositories publish how they got them.</p>

<p>I did not read the SUPIR licence at XPixel's source. I am relying on two files of the kit that both call the weights non-commercial.</p>

<p>I did not read Google's terms of service on the login path notebooklm-py uses. The word grey is the author's, not mine, and I did not check it against the terms.</p>

<p>I did not watch onetake's films or open its scripts. I stopped at the licence, which was enough for this column and says nothing about the quality of the work.</p>

<p>Star counts move by the hour. The ones above were read at 13:05 UTC and may already be different when you read this.</p>

<h2>What I still do not know</h2>

<p>I do not know where the line sits for a reference. design-dna will measure a competitor's palette to the hex and, left alone, pull their images into your page. The images are clearly not yours. The palette is less clear. A colour is not owned the way a photograph is, and yet a measured copy of someone's whole system is closer to their work than any mood board I ever pinned. I have not settled where taking the feel ends and taking the work begins, and this week's five did not settle it for me.</p>

<p>Next Monday, five more.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>VERIFICATION NOTE, September 28, 2026.
Every repository number in this article was read by me on September 28, 2026, in a single snapshot window between 12:57 and 13:05 UTC, with the final metadata read at 13:05:17 UTC.
Metadata came from the authenticated `gh` CLI, not the public unauthenticated API.
Every link in the article was requested with `curl` at 13:05:20 UTC and all returned HTTP 200.
Quoted text was read in files downloaded raw in the same window: the READMEs of all four GitHub repositories and of onetake, the `SKILL.md` of each of the four, plus `scripts/bootstrap.sh` for docx-cli, `scripts/package.json` for design-dna, `MODELS/utility.md`, `ADVANCED.md`, `ATTRIBUTION.md` and `UPDATING.md` for ComfyUI-Agent-Kit, and `docs/adr/0023-master-token-headless-auth.md` for notebooklm-py.
The four GitHub skills were NOT installed or executed on this machine, and the article says so in its own section.
The seedance-lab-starter figures were read from the zip published at openyourais.com, as served at 13:05 UTC.</p>
</section>
