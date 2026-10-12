---
id: "art-188"
title: "Five Claude Skills and What They Take for Granted"
description: "Five Claude skills reviewed from their own files: a Word redliner, a palette tool, a ComfyUI kit, a NotebookLM driver and a screenwriting pack, with limits."
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

<p>The skill I liked most this week works exactly like that. It is called <a href="https://github.com/feitangyuan/onetake" target="_blank" rel="noopener">onetake</a>, it went public on GitHub on September 26, and by this morning it had 639 stars. It makes motion films where every beat grows out of the one before, and it measures the joins with a script before a human sees the cut. I read the README to the bottom, and the last section settles it: the licence is PolyForm Noncommercial 1.0.0, and the file says in bold that commercial use is not permitted. This column is read by people who deliver paid work, so onetake is not one of the five.</p>

<p>That is the week. None of the five below forbids commercial use in its own licence. That is not the same as saying everything they touch is cleared for a paid job, and each entry separates the licence of the code from the models, accounts and material it reaches. Each one also assumes something you never said out loud: about your file, someone else's images, a model's licence, your Google account, or quotations that belong to other people.</p>

<h2>How I checked</h2>

<p>This is a documentary review, not a hands-on test. I read each repository's own files on September 28 and 29, 2026: the README, the <code>SKILL.md</code>, and where the real sentence lives deeper, that document too, named in each entry. One exception: screenwriting-skills keeps its skill bodies in Chinese, and I reviewed it through its English README and its NOTICE only. Star counts and dates come from GitHub on those days. Where a claim depends on one file, the link goes to that file at a fixed commit, so it still says what I quote after the repository moves on.</p>

<p>I did not install or run any of the five. Where I describe behaviour, I read it in a file, and the author's words stay the author's.</p>

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

<p><strong>Verified.</strong> September 28, 2026. 214 stars, 10 forks, MIT, last push September 25. Read: the README, <code>skills/docx-cli/SKILL.md</code>, <code>scripts/bootstrap.sh</code>, and the latest release tag.</p>

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

<p>Think about what a reference URL usually is on our side of the business. It is a competitor's site, a festival page, a campaign someone else shot. Give design-dna that link to capture the feel, and the rule tells the agent to pull that site's actual photographs and logo into your page. Inside your own studio that is still a copy of someone else's photographs, and the kit does not know whether you are allowed to make it. In a pitch that leaves the building, you are presenting those images as part of your work. The <code>SKILL.md</code> contains no word about licence or rights. If you want the feel without the pictures, give it screenshots, and tell it to use placeholders for anything it would have downloaded.</p>

<p><strong>Verified.</strong> September 28, 2026. 1,855 stars, 100 forks, MIT, last push August 28. Read: the README, <code>SKILL.md</code>, and <code>scripts/package.json</code>.</p>

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

<p>The clearest case is <a href="https://github.com/Fanghua-Yu/SUPIR/blob/bda91af2000042f8bedfec8897d92917e67c1d88/README.md" target="_blank" rel="noopener">SUPIR</a>, a diffusion based restore and upscale model. At the top of the README it is listed among the enhancement tools with no note. The note comes much further down, in the thank you list: "the SUPIR weights are non-commercial." The model entry itself, in <code>MODELS/utility.md</code>, is explicit, and I want to be fair to the author here: it says do not use it in a commercial pipeline. The problem is the general advice a few lines lower in the same file, the rule for choosing an upscaler. It sends animated and AI generated frames to diffusion upscalers and names SUPIR among them, with no flag. AI generated frames are precisely what this readership would feed it. The same credits section flags two more pieces as non-commercial, a FLUX.2 Klein enhancer and the Anima ControlNet patches.</p>

<p>I went to the source for SUPIR. The original repository, whose README lists two checkpoints, SUPIR-v0Q and SUPIR-v0F, closes with a "Non-Commercial Use Only Declaration": the software may be used, reproduced and distributed strictly for non-commercial purposes, and commercial use needs prior written permission from the rights holder named there. That is what the document says. It is not legal advice, and whether a given job counts as commercial is a question for whoever signs your contract.</p>

<p>So on a paid job, ask the agent which weights it loaded, by name, before you deliver. The kit's own <code>ATTRIBUTION.md</code> has the licence of each component in one table. Read that table once.</p>

<p><strong>Verified.</strong> September 28, 2026. 102 stars, 13 forks, Apache 2.0, last push September 3. Read: the README, <code>shared/comfyui/SKILL.md</code>, <code>shared/comfyui/MODELS/utility.md</code>, <code>docs/ADVANCED.md</code>, <code>ATTRIBUTION.md</code> and <code>docs/UPDATING.md</code>. SUPIR's own README was read on September 29 at commit <code>bda91af</code>.</p>

<h2>4. notebooklm-py</h2>

<p>An unofficial Python library, command line and skill that lets an agent drive Google's NotebookLM, which <a href="https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/" target="_blank" rel="noopener">Google renamed Gemini Notebook on July 16, 2026</a>.</p>

<p><strong>Link.</strong> <a href="https://github.com/teng-lin/notebooklm-py" target="_blank" rel="noopener">github.com/teng-lin/notebooklm-py</a></p>

<p><strong>What it does.</strong> NotebookLM reads the sources you give it and answers only from them, with citations. This library lets Claude do that without the browser: create a notebook, load thirty PDFs, links and YouTube videos, ask questions and get cited answers back as JSON, then generate the audio overview, slides, a report or a mind map and download all of it in one go. The README's own framing is to let Google do the heavy reading while your agent spends tokens only on the final pass. The note at the top says the library still works unchanged after the rename, which is the author's claim about the author's code.</p>

<p>One reason it is this one and not the other. The best known NotebookLM skill for Claude, <a href="https://github.com/PleasePrompto/notebooklm-skill" target="_blank" rel="noopener">by PleasePrompto</a>, with 7,780 stars, was archived this month. Its README now opens by saying it is no longer maintained. notebooklm-py was pushed to yesterday.</p>

<p><strong>Who it is for.</strong> The documentary researcher with forty interview transcripts, a stack of archive PDFs and a director who asks "where did she say that?" at eleven at night.</p>

<p><strong>What it saves.</strong> The search. Finding the one quote, with the source it came from, across forty documents you half remember. The time depends entirely on how messy your archive is, and I did not run it on one.</p>

<p><strong>Cost to install.</strong> Three commands. The first login downloads a Chromium of about 170 MB and opens a Google sign in.</p>

<pre><code>uv tool install "notebooklm-py[browser]"
notebooklm login
notebooklm skill install</code></pre>

<p>The README states it plainly in a warning box: it uses undocumented Google APIs that can change without notice, and it is not affiliated with Google.</p>

<p><strong>The catch.</strong> There are three ways to log in, and for unattended work the <code>SKILL.md</code> tells the agent to prefer one of them: a durable master token. That is the recommendation, <a href="https://github.com/teng-lin/notebooklm-py/blob/4d6a4e5494d721cea4d87e2d4c226afee305eee8/SKILL.md#L27" target="_blank" rel="noopener">on line 27</a>. The warning comes <a href="https://github.com/teng-lin/notebooklm-py/blob/4d6a4e5494d721cea4d87e2d4c226afee305eee8/SKILL.md#L64" target="_blank" rel="noopener">on line 64</a> of the same file, in the author's words: a master token is "a durable full-account credential that survives password changes", so use a dedicated account.</p>

<p>The <a href="https://github.com/teng-lin/notebooklm-py/blob/4d6a4e5494d721cea4d87e2d4c226afee305eee8/docs/adr/0023-master-token-headless-auth.md" target="_blank" rel="noopener">design record behind it</a> is more direct than the skill, and everything in this paragraph is the author describing their own tool. The record calls the master token "full-account", says it survives password changes "until explicitly revoked", and calls that a larger blast radius than the ordinary login file. It names the mechanism, Google's unofficial Android sign in path, and describes it as "ToS-grey like the rest of the client". That is the author's assessment. I have not checked it against Google's terms, and I am not saying the tool breaks them. The record's own mitigation is a dedicated or throwaway account.</p>

<p>Here is the practical problem with that advice for a producer. Your research, your client decks and your Drive live on your main account. That is exactly the account you would be tempted to connect, and exactly the one the author says not to. Make a separate Google account for this, move only the sources you need into it, and use the browser login, not the token, until you have read the decision record yourself.</p>

<p><strong>Verified.</strong> September 28, 2026, and again September 29 against commit <code>4d6a4e5</code>. On the 29th: 19,550 stars, MIT, last push September 28. Read: the README, <code>SKILL.md</code>, and <code>docs/adr/0023-master-token-headless-auth.md</code>. PleasePrompto/notebooklm-skill still showed as archived on September 29.</p>

<h2>5. screenwriting-skills</h2>

<p>Twenty six skills for screenwriting, television writing and dramaturgy, for Claude Code and Codex, distilled from craft books and published scripts.</p>

<p><strong>Link.</strong> <a href="https://github.com/jtydhr88/screenwriting-skills" target="_blank" rel="noopener">github.com/jtydhr88/screenwriting-skills</a></p>

<p><strong>What it does.</strong> It gives the agent a writer's room shelf instead of a vague sense of story. The skills sit in four layers: general dramaturgy (premise, structure, character, dialogue, scene, format), a medium layer for series, sitcom and stage, a layer for how the trade works in America, Japan, Korea, France and mainland China, and a last layer built on complete primary texts: Chekhov's plays, Ozu's screenplays, all four seasons of Succession, and teleplays from The West Wing and The Sopranos. You ask "my dialogue is all on the nose, fix this scene" and the agent reaches for the dialogue and scene skills. Where the sources disagree, the README says both positions are kept side by side with a note on when to use which. One project skill, <code>sw-workflow</code>, keeps the state of your script in a single <code>story-bible.md</code> across sessions.</p>

<p>The README also says what it will not do, and I respect it for that. Short vertical drama and AI generated comic drama are not planned, because their logic is distribution and there is "no dramaturgy to distil". That is a harder line than most tools in this column would dare to write.</p>

<p><strong>Who it is for.</strong> The director who writes their own shorts and wants a second reader at two in the morning who knows where the act out goes. I wrote and acted on a talk show, and the part of this I would open first is the half hour comedy skill, with its setups, toppers and running gags.</p>

<p><strong>What it saves.</strong> The shelf. Pulling the right craft book for the problem in front of you, and finding the page. If you already work with a script editor you trust, it saves you less, and it does not replace them.</p>

<p><strong>Cost to install.</strong> Two commands inside Claude Code. Nothing runs on install beyond copying the skill files.</p>

<pre><code>/plugin marketplace add jtydhr88/screenwriting-skills
/plugin install screenwriting@screenwriting-skills</code></pre>

<p><strong>The catch.</strong> Two, and the author wrote both down, which is exactly why they are worth reading.</p>

<p>The first is the language. The skill bodies are written in Chinese, because most of the sources are Chinese originals or Chinese translations. You ask in English and the answer comes back in English. But the README says it plainly: you cannot read the instruction file itself unless you read Chinese, "only the agent's account of it". For every other skill in this column I could open the <code>SKILL.md</code> and check what the agent was told. Here, most readers of this site cannot.</p>

<p>The second is in a file most people will never open, the <a href="https://github.com/jtydhr88/screenwriting-skills/blob/357d1348ccaa1ab75f2f51ef7c90a7f00a686c76/NOTICE" target="_blank" rel="noopener">NOTICE</a>. The MIT licence covers the author's own work: the architecture, the numbered principles, the checklists, the script in the tools folder. It does not cover the passages quoted from the books, scripts and plays in the <code>reference.md</code> files. Those stay with their authors, translators and publishers, and the NOTICE says the excerpts are kept short "for study and commentary". A Chinese translation of Chekhov has its own copyright even though Chekhov does not. So the licence badge says MIT, and the folder you copy into your project carries material the badge does not reach. Use it to write. If you fork it, repackage it or paste its reference files into something you sell, that part is on you, and the author says so in writing.</p>

<p><strong>Verified.</strong> September 29, 2026, at commit <code>357d134</code>. 1,455 stars, 160 forks, MIT with a NOTICE, created September 6, last push September 22. Read: the English README and the NOTICE, and I counted the <code>SKILL.md</code> files myself: 26, matching the README.</p>

<h2>What I did not verify</h2>

<p>I did not install or run any of the five GitHub skills.</p>

<p>I did not reproduce docx-cli's benchmark or design-dna's colour example. Both numbers are theirs, and both repositories publish how they got them.</p>

<p>I read SUPIR's non-commercial declaration in its original README. I did not ask its rights holder how they read any particular use, and nothing here is legal advice.</p>

<p>I did not read Google's terms of service on the login path notebooklm-py uses. "ToS-grey" is the author's word, not mine, and I did not check it against the terms.</p>

<p>I reviewed screenwriting-skills through its English README and NOTICE. I did not read the Chinese skill bodies, and I did not check any of its quotations against the books they come from.</p>

<p>I did not watch onetake's films or open its scripts. I stopped at the licence, which was enough for this column and says nothing about the quality of the work.</p>

<p>Star counts move by the hour. The ones above carry the day they were read and may already be different when you read this.</p>

<h2>What I still do not know</h2>

<p>I do not know where the line sits for a reference. design-dna will measure a competitor's palette to the hex and, left alone, pull their images into your page. The images are clearly not yours. The palette is less clear. A colour is not owned the way a photograph is, and yet a measured copy of someone's whole system is closer to their work than any mood board I ever pinned. I have not settled where taking the feel ends and taking the work begins, and this week's five did not settle it for me.</p>

<p>Next Monday, five more.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Method: a documentary review of each repository's own files, read on September 28 and 29, 2026. None of the five skills was installed or run. Numbers are GitHub's on the day named in each entry.</p>
<ul>
<li><a href="https://github.com/kklimuk/docx-cli" target="_blank" rel="noopener">docx-cli</a>: README, <code>skills/docx-cli/SKILL.md</code>, <code>scripts/bootstrap.sh</code>, release v0.26.0.</li>
<li><a href="https://github.com/zanwei/design-dna" target="_blank" rel="noopener">design-dna</a>: README, <code>SKILL.md</code>, <code>scripts/package.json</code>.</li>
<li><a href="https://github.com/SlavaSexton/ComfyUI-Agent-Kit" target="_blank" rel="noopener">ComfyUI-Agent-Kit</a>: README, <code>shared/comfyui/SKILL.md</code>, <code>MODELS/utility.md</code>, <code>ATTRIBUTION.md</code>. <a href="https://github.com/Fanghua-Yu/SUPIR/blob/bda91af2000042f8bedfec8897d92917e67c1d88/README.md" target="_blank" rel="noopener">SUPIR README at commit bda91af</a>, Non-Commercial Use Only Declaration.</li>
<li><a href="https://github.com/teng-lin/notebooklm-py/blob/4d6a4e5494d721cea4d87e2d4c226afee305eee8/SKILL.md" target="_blank" rel="noopener">notebooklm-py SKILL.md</a> and <a href="https://github.com/teng-lin/notebooklm-py/blob/4d6a4e5494d721cea4d87e2d4c226afee305eee8/docs/adr/0023-master-token-headless-auth.md" target="_blank" rel="noopener">ADR 0023</a>, both at commit 4d6a4e5. Rename: <a href="https://blog.google/innovation-and-ai/products/gemini-notebook/notebooklm-gemini-notebook/" target="_blank" rel="noopener">Google, July 16, 2026</a>.</li>
<li><a href="https://github.com/jtydhr88/screenwriting-skills/blob/357d1348ccaa1ab75f2f51ef7c90a7f00a686c76/README.md" target="_blank" rel="noopener">screenwriting-skills README</a> and <a href="https://github.com/jtydhr88/screenwriting-skills/blob/357d1348ccaa1ab75f2f51ef7c90a7f00a686c76/NOTICE" target="_blank" rel="noopener">NOTICE</a> at commit 357d134.</li>
<li><a href="https://github.com/feitangyuan/onetake" target="_blank" rel="noopener">onetake</a>: README licence section, PolyForm Noncommercial 1.0.0.</li>
</ul>
</section>
