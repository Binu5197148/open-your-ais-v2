---
id: "art-182"
title: "Don't Install Claude Skills Until You Check This File"
description: "Five Claude skills opened repo by repo on September 7. One hides a 4K video exporter in neither manual. The file check I run before installing."
pubDate: "2026-09-07"
toolVersion: "2026-09"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1617423851080-1181791aa20e?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxfHxzaGFkb3clMjBsaWdodCUyMHBvcnRyYWl0fGVufDF8MHx8fDE3ODg3OTQyNTB8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "14 min read"
featured: true
---

<p>A skill is a promise about a file. You install it, you run it, and something lands in a folder.</p>

<p>So this week I opened five and asked each one the same narrow question: what is the file at the end, and is it the file the opening line made me picture. Four times the answer moved. The first one is the widest gap, so it goes first.</p>

<h2>How I checked</h2>

<p>One snapshot, September 7, 2026, between 15:16 and 15:17 UTC.</p>

<p>Repository numbers came from the authenticated <code>gh</code> CLI. The public API rate limits this machine at 403, so nothing below was read through it. Every URL in this article was hit with <code>curl</code> in the same window and answered 200. Where a project announces a number about itself, I counted the number.</p>

<p>What I did not do: I did not install or run any of the four GitHub skills. There is no benchmark of mine anywhere in this article.</p>

<h2>1. Pixel2Motion</h2>

<p>Takes a flat logo file, rebuilds it as a clean vector with the parts named, and choreographs a reveal on top of it.</p>

<p><strong>Link.</strong> <a href="https://github.com/nolangz/pixel2motion" target="_blank" rel="noopener">github.com/nolangz/pixel2motion</a></p>

<p><strong>What it does.</strong> You hand it a PNG, a JPG, a WebP or a screenshot of a logo. It traces the shape, then argues with itself about the trace: there is a QA loop that renders the candidate vector back over the raster source and compares mark scale, dot placement, wordmark baseline and ink weight until they hold. The interesting design decision is that a mathematically tighter trace loses to a smoother one. A jagged path that overlaps the source better is rejected when a simpler curve explains the logo more honestly. Only after the static vector passes does it write the motion, and it writes it against named parts, so the mark, the dot and the wordmark are separately addressable instead of one soup of paths.</p>

<p><strong>Who it is for.</strong> The motion designer who gets a client logo as a flattened PNG on Friday and has to deliver an animated bumper for a launch on Monday.</p>

<p><strong>What it saves.</strong> I did not run it, so there is no clock here. The substitution is the tracing afternoon: importing a raster logo into Illustrator, rebuilding the curves by hand, exporting an SVG with usable ids, and only then opening After Effects. If that afternoon is not one you spend, this saves you nothing.</p>

<p><strong>Cost to install.</strong> Four commands, and Chrome already on the machine.</p>

<pre><code>git clone https://github.com/nolangz/pixel2motion.git
cd pixel2motion
python3 -m venv .venv
.venv/bin/pip install pillow numpy playwright</code></pre>

<p><strong>The catch.</strong> The repository sells itself, in its own first paragraph, as a tool that exports "animated logo HTML, GIF/video previews, and motion QA evidence."</p>

<p>Then look at what the Deliverables section actually lists. Nine artifacts: an SVG, a CSS file, a standalone HTML page, a written motion spec, overlay evidence PNGs, motion frame PNGs, a contact strip, and two static render checks. No GIF. No video. The animated logo you were promised is a web page plus a stylesheet, and the moving files in the gallery at the top of the README live in <code>docs/gifs/</code>, which is the project's own documentation folder.</p>

<p>There is a video exporter. It is <code>scripts/export_claude_videos.mjs</code>, 20,475 bytes, and I read it. It renders at 4K and 120 frames per second and it can produce transparent WebM and MOV as well as MP4, which is genuinely more than most tools in this category offer. Three things about it. Its source is hardcoded to <code>docs/index.html</code>, the project's own demo page. Its render list is hardcoded to the five demo logos: N, Focus, Continuum, Horizon and CueRecord. And its Chrome path is hardcoded to the macOS application bundle.</p>

<p>Your logo does not enter that script without you editing it.</p>

<p>The counting is the part that decided this for me. I searched the README, 10,145 bytes across 224 lines: <code>export_claude</code> appears zero times, and <code>ffmpeg</code> appears zero times, even though the script shells out to ffmpeg and the Requirements section lists only Python, Pillow, numpy, Chrome and Playwright. Then I searched <code>SKILL.md</code>, the file the agent actually reads, 28,565 bytes: gif, mp4, webm, video and ffmpeg all appear zero times. The one script that makes a moving file is in neither manual.</p>

<p>None of that makes the skill bad. The vector fitting is the real work here and it is good work. It means that if you install this expecting a file you can drop on a timeline, you are going to spend your Monday writing the exporter yourself.</p>

<p><strong>Verified.</strong> September 7, 2026, 15:16 UTC. 2,167 stars, 181 forks, 6 open issues, MIT with a LICENSE file in the root, last push August 21 at 12:06 UTC, repository created June 12, 2026, not archived. The live demo at <code>nolangz.github.io/pixel2motion</code> answered 200, so the motion is judgeable before you clone anything. The byte counts and the zero counts above are mine, made with <code>grep</code> and <code>wc</code> against the files as served in that window.</p>

<h2>2. draw-your-font</h2>

<p>Photograph your own handwriting on paper and get back an installable font file.</p>

<p><strong>Link.</strong> <a href="https://github.com/danilo-znamerovszkij/draw-your-font" target="_blank" rel="noopener">github.com/danilo-znamerovszkij/draw-your-font</a></p>

<p><strong>What it does.</strong> Two paths. Either you print an A4 grid it generates, fill it in with a dark pen and photograph the page, or you write your alphabet freehand on anything and tell it what order you wrote in. It thresholds the image, finds the letter blobs, uses vision to label them, vectorises with potrace, and fits every character into a shared 1000 unit em square with real cap height, x height and descender depth. That last step is the whole craft: it is why the g hangs below the baseline and the o stays small instead of the output looking like a ransom note. It exports TTF, WOFF, WOFF2 and a CSS snippet, and it runs entirely on your machine. The photograph never uploads.</p>

<p>The honesty I liked: the project states plainly that the AI never draws your letters. It finds them, labels them and judges them. The curves are yours.</p>

<p><strong>Who it is for.</strong> The title designer who wants the director's actual handwriting in the opening card of a documentary instead of a Google Fonts approximation of it.</p>

<p><strong>What it saves.</strong> Their own comparison, in their own FAQ, is a subscription: Calligraphr at eight dollars a month. That is a price, not an hour, and it is theirs, not a figure I produced.</p>

<p><strong>Cost to install.</strong> One command, and Node 18 or newer. No FontForge, no ImageMagick, no potrace binary.</p>

<pre><code>npx skills add danilo-znamerovszkij/draw-your-font</code></pre>

<p><strong>The catch.</strong> Two, and the second one is specific to anyone working in Portuguese.</p>

<p>The first is in the FAQ and it is one line: kerning, ligatures and letter randomization are marked v2, and the current output is a clean single variant font. Read that twice if you set type for a living. Single variant means every letter a in a paragraph is byte identical to every other letter a. Handwriting is not like that, and the eye knows within about a line and a half. For a title card of four words it will pass. For a body paragraph pretending to be handwritten, it will read as a font of handwriting, which is a different thing and usually a worse one. No kerning is the same problem on the pair level.</p>

<p>The second one I found by opening the source rather than the README. The printable template ships two character sets, and I read both in <code>src/charsets.js</code>. <code>minimal</code> is A to Z, a to z, 0 to 9 and the punctuation <code>.,;:!?'"-()@#&amp;+/$</code>. <code>spanish</code> is that list plus <code>ÑñÁÉÍÓÚáéíóúü¿¡</code>. There is no Portuguese set, and Spanish does not cover Portuguese: no ã, no õ, no ç, no â, no ê, no ô. If you print the template and fill it in, you will photograph a sheet with no way to write "ação" in the font you just made.</p>

<p>There is a way around it and the project gives it to you: the freeform path takes <code>--chars</code> with whatever string you want, so you write your own accented letters on a page and declare them. It just means the good path, the one the project calls best quality, is the one that leaves the accents out.</p>

<p><strong>Verified.</strong> September 7, 2026, 15:16 UTC. 757 stars, 71 forks, 3 open issues, MIT, last push August 5 at 07:48 UTC, repository created July 22, 2026, not archived. The two character sets were read in <code>src/charsets.js</code> and confirmed against line 64 of the skill's own <code>SKILL.md</code>, which prints the same two lists. The kerning line is in the README FAQ.</p>

<h2>3. mono-color</h2>

<p>Turns a theme, a sentence, an object or a supplied photograph into a one ink or two ink editorial print image.</p>

<p><strong>Link.</strong> <a href="https://github.com/yanliudesign/mono-color-skill" target="_blank" rel="noopener">github.com/yanliudesign/mono-color-skill</a></p>

<p><strong>What it does.</strong> It is a visual system written down as rules, not a style prompt. Eight named one ink colours with hex values, nine two ink recipes, a stated split where the dominant plate carries 70 to 85 percent of the printed area and the accent plate has to be given a specific job such as dates or annotations. Between 25 and 55 percent of the page has to stay empty paper, on an asymmetric grid, with exactly one deliberate disruption. Halftone, risograph grain, cyanotype or photocopy breakup for the image. It hands back the generated raster, the exact production prompt it used, and a short recipe naming the mode, palette, layout family, type pairing and print process, which means the output is reproducible by a human without the skill.</p>

<p>It also states, in its own words, that the substrate is not a third colour and the overlap where two plates cross is not a third ink. That single sentence is the difference between someone who has specified a print job and someone who has not.</p>

<p><strong>Who it is for.</strong> The art director pitching a poster campaign who needs a client to see six coherent options on Tuesday and cannot book a designer until the client picks one.</p>

<p><strong>What it saves.</strong> No hours here either. What it replaces is the reference hunt: the hour you spend pulling forty images into a board to explain the register you want before anyone draws anything.</p>

<p><strong>Cost to install.</strong> One command, then restart the session.</p>

<pre><code>git clone https://github.com/yanliudesign/mono-color-skill.git ~/.claude/skills/mono-color</code></pre>

<p><strong>The catch.</strong> The MIT badge at the top of the page does not cover the pictures, and the project says so itself in a License section most people never scroll to. MIT covers the source code, the skill instructions and the scripts. The example images are copyright Yan Liu and are explicitly excluded. The twelve reference images remain the property of their creators.</p>

<p>Then open <code>REFERENCES.md</code>, which is where this gets interesting rather than merely legal. The visual system was distilled from a research set of twelve third party images. The project publishes all twelve, with research notes on each, and publishes the provenance honestly: eight trace to Pinterest pins, one to a 2012 event article, and three carry the line "Unverified: original URL was not preserved." A fourth has a source page but no identified creator. There is a fifth Pinterest link listed separately that now returns nothing, so it cannot be matched at all.</p>

<p>The project's own explanation for that is the reason I am putting it in the article instead of using it as an accusation: the original URLs and creator names were not saved when the files were first collected, and rather than invent attribution they marked the fields unverified and opened a correction form. That is more discipline than most design tools show, and it is still the fact you have to hold. The rules you are installing were reverse engineered from work whose authors are, in at least three cases, currently unknown to the person who reverse engineered them.</p>

<p>The rules themselves are not the copyrightable part, and the skill is explicit that it does not copy a reference's composition, wording, logos or arrangement. But if you are pitching this look to a client who asks where the visual language came from, "a research set of twelve images, three of them unattributed" is the honest answer, and you should decide today whether you are comfortable saying it.</p>

<p><strong>Verified.</strong> September 7, 2026, 15:16 UTC. 2,855 stars, 70 forks, 6 open issues, MIT, last push September 2 at 18:49 UTC, repository created August 19, 2026, not archived. Stated version 1.2.0. The repository root carries a separate <code>ASSET-LICENSE.md</code> alongside the MIT <code>LICENSE</code>, which is the split described above. The twelve reference rows were counted by me in <code>REFERENCES.md</code> in that window, and the gallery of generated examples is in the README, so this is one you can judge on sight before installing.</p>

<h2>4. obsidian-second-brain</h2>

<p>Gives your agent a memory that lives as plain markdown in a folder you own, so you stop re-explaining the same project every session.</p>

<p><strong>Link.</strong> <a href="https://github.com/eugeniughelbur/obsidian-second-brain" target="_blank" rel="noopener">github.com/eugeniughelbur/obsidian-second-brain</a></p>

<p><strong>What it does.</strong> It is a large command set over an Obsidian vault, and you never have to open Obsidian: you talk, it writes the notes. Save, daily note, capture, find, tasks, health check, merge near duplicates, surface patterns across thirty days of notes. Search works out of the box as keyword search with nothing to install, and there is an optional local embedding layer through Ollama if you want meaning based retrieval, which stays on your machine.</p>

<p>The part that made me read the whole file is the maintenance rule, which they have named and specified separately: every stored fact must be timeless, dated, or a pointer. Slow knowledge gets written down. Fast facts, counts, statuses, balances, get linked to where they actually live with an "as of" stamp instead of copied in to rot. There is a linter that enforces it. Anyone who has watched a production bible go stale in six weeks will recognise the problem being solved.</p>

<p><strong>Who it is for.</strong> The producer running four projects who has told the same agent who the client contact is, what the deliverable is and why the second cut was rejected, four separate times this month.</p>

<p><strong>What it saves.</strong> Nothing I measured. What the project publishes is per call research cost, not time, and those figures are theirs: roughly four cents for a research pass, forty to eighty cents for the deep one, as of April 2026 by their own dating.</p>

<p><strong>Cost to install.</strong> Two lines inside a Claude Code session, then one vault path in your settings.</p>

<pre><code>/plugin marketplace add eugeniughelbur/obsidian-second-brain
/plugin install obsidian-second-brain@obsidian-second-brain</code></pre>

<p><strong>The catch.</strong> There is a background agent that fires after every context compaction and updates the vault while you keep working, plus scheduled agents at 8 in the morning and 10 at night. The line that matters sits in the paragraph that arms them, and the project put it in bold itself: the headless run uses <code>--dangerously-skip-permissions</code>, because nobody is there to approve each write.</p>

<p>Read what they did with that, because it is the right shape. The agent ships inert. You have to arm it on purpose. Its tool surface is pinned to read, write, edit, glob and grep, so it cannot run a shell command or reach the network, and it only adds and updates, never deletes or merges. That is a genuinely careful design and it is disclosed in the same breath as the risk.</p>

<p>It is still an agent writing into your folder, unattended, with the approval step off. If that folder holds client notes, decide before you arm it and not after.</p>

<p>The second one is smaller and is about spend. The research commands that call paid providers log their cost to a usage file, and the README says, in plain words, that there are no hard caps and you are trusted to monitor your own spend. A scheduled agent and an uncapped meter are two features that are fine alone.</p>

<p>One number came out clean, so it goes here rather than being held against them. The README claims 47 commands in three separate places. The repository description on GitHub says 45. I counted the <code>commands/</code> directory: 47 markdown files. The README is right and the storefront line is the stale one, which is the harmless direction for that error to run.</p>

<p><strong>Verified.</strong> September 7, 2026, 15:16 UTC. 4,357 stars, 539 forks, 10 open issues, MIT, last push September 6 at 20:40 UTC, repository created March 24, 2026, not archived. The permissions line and the spend line were read in the README as served in that window; the command count came from the directory listing through the same authenticated CLI.</p>

<h2>5. scroll-world</h2>

<p>Mine. Builds a landing page where scrolling drives a camera that flies from outside one scene into its interior and on into the next with no cuts, plus the generation pipeline that makes the scenes and the joins.</p>

<p><strong>Link.</strong> <a href="https://openyourais.com/skills/">openyourais.com/skills</a></p>

<p><strong>What it does.</strong> It interviews you for the subject, the sections and the brand kit, then generates one still per section against a single shared style preamble so the world holds together, one dive in clip per scene, and one connector clip between every consecutive pair. The page itself is a scrubber: the camera genuinely moved when the clip was rendered, and scroll only drives time. The engine is vanilla JavaScript that builds its own DOM and injects its own CSS into a container you hand it, so it drops into plain HTML, Next, Vue or a Python served page without caring which.</p>

<p>The one rule the whole thing rests on is that the seams have to be frame identical. The last frame of a dive and the first frame of the connector that follows it are extracted with ffmpeg and compared, and if they are not the same frame the visitor sees a pop between scenes. That is the failure this skill exists to prevent, and it is the one I got wrong repeatedly before it was written down.</p>

<p><strong>Who it is for.</strong> The agency that has to present a brand as a place rather than a page, and does not have a 3D team.</p>

<p><strong>What it saves.</strong> The substitution is a WebGL build. If the alternative on your desk is commissioning a real time 3D scene, this replaces it, and the trade you are making is that a pre rendered flight cannot be interacted with, only scrubbed. If the alternative is a normal landing page, this saves nothing and costs a great deal.</p>

<p><strong>Cost to install.</strong> One command, plus an authenticated Higgsfield CLI, ffmpeg and ffprobe on the path.</p>

<pre><code>unzip scroll-world.zip -d ~/.claude/skills/</code></pre>

<p><strong>The catch.</strong> The page you are building is a video player, and nobody budgets for that at the brief stage.</p>

<p>Count the clips first. The pipeline is N stills, N dive clips and N minus 1 connectors, so a six section world is eleven video files, not six. Then read the encoding step, which is my own text and my own arithmetic sitting in the skill: at all intra an eight second clip bloats to roughly 25 MB, and at a GOP of eight it comes down to roughly 8 MB while still scrubbing cleanly. Eleven clips at that setting is somewhere near ninety megabytes of video that a visitor's browser has to pull before the hero moves. On a desk in São Paulo that is invisible. On a phone on mobile data it is the entire experience.</p>

<p>Before you encode the batch, it is worth knowing what the page is going to weigh at the settings you picked, because the number that decides this is bitrate times duration times clip count, and it is easier to change the answer before eleven renders than after. <a href="https://axenworks.com/video-bitrate-calculator/" target="_blank" rel="noopener">The arithmetic is here</a> if you want to do it in one screen.</p>

<p>The second thing is that the generation is not free and the seams are where the money goes. Every generation runs 3 to 8 minutes, and a connector that does not frame lock has to be regenerated, which is another paid job. The skill tells you to confirm you have credits for roughly N image jobs plus 2N minus 1 video jobs before it starts. That estimate assumes every seam works the first time. Mine did not.</p>

<p><strong>Verified.</strong> September 7, 2026, 15:16 UTC. Read out of the published zip at <code>openyourais.com/skills</code>, which answered 200. Nine entries, 92,949 bytes unpacked: a README, a <code>SKILL.md</code> of 37,900 bytes, and five reference files including the scrub engine itself at 28,673 bytes. The clip arithmetic and both encoding figures were read in Step 6 of that <code>SKILL.md</code>, not recalled. Instructions are in English.</p>

<h2>What I did not verify</h2>

<p>This section is permanent. An empty one would mean the checking was lazy.</p>

<p>I did not install or run any of the four GitHub skills. Nothing above is a benchmark I produced, and no output in this article was generated by any of them.</p>

<p>I did not execute Pixel2Motion's video exporter. I read all 20,475 bytes of it and I am describing what the code says it does, including the 4K and 120 frames per second figures and the transparent WebM and MOV paths, which are constants in the file rather than results I saw.</p>

<p>I did not test whether draw-your-font's freeform path actually accepts accented characters through <code>--chars</code>. I read the flag in the README and in the skill file. What I confirmed by opening the source is the absence, not the workaround.</p>

<p>I did not attempt to identify the three unattributed mono-color references. I counted the rows and read the status the project gave each one.</p>

<p>I did not arm obsidian-second-brain's background agent, and I did not audit whether its tool surface is actually pinned the way the README says. I am reporting a description, not an inspection of the hook.</p>

<p>I did not re-measure the two scroll-world encoding figures this week. They are my numbers from when the skill was written, and I am quoting my own file, which is a weaker form of evidence than counting somebody else's.</p>

<p>And every star count above is a photograph, not a fact. That is what the timestamps are for.</p>

<h2>What I still do not know</h2>

<p>The Pixel2Motion one has been sitting with me all afternoon and I cannot settle it.</p>

<p>An exporter that renders 4K at 120 frames per second with a transparent alpha path is not a weekend accident. Somebody built that on purpose and built it well. It is also hardcoded to five demo logos on a demo page, and it is absent from both manuals, which means it was written to make the marketing GIFs at the top of the README rather than to serve the person installing the skill.</p>

<p>I do not know which of those two readings is right. Maybe it is an internal tool that was never meant to ship and simply was not deleted. Maybe it is next month's feature, half landed. Maybe the author knows exactly how much work generalising it would be and has quietly decided the commercial service at the other end of that first link is where it goes instead.</p>

<p>All three are ordinary and none of them are dishonest. But I could not tell them apart by reading, and the difference decides whether you clone this repository or wait. So I am publishing the gap rather than a verdict on it.</p>

<p>Next Monday, five more.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>VERIFICATION NOTE, September 7, 2026.
Every repository number in this article was read by me on September 7, 2026, between 15:16 and 15:17 UTC.
Repository metadata came from the authenticated `gh` CLI, not the public unauthenticated API, which rate limits this machine at 403.
Every URL in the article was hit with `curl` in the same window and returned HTTP 200.
Counts described as counted were counted by me, with `grep`, `wc` or a directory listing, against the file as served in that window, never read off a badge.
The four GitHub skills were NOT installed or executed on this machine during the verification, and the article says so in its own section.
The scroll-world figures were read out of the zip published at openyourais.com/skills in the same window.</p>
</section>
