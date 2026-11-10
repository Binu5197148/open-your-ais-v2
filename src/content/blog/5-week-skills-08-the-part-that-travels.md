---
id: "art-191"
title: "Five Claude Skills for Editors and Producers, and the Part That Travels"
description: "Five Claude skills read from their own files: lower thirds with alpha, subtitle quote cards, photo geolocation, HTML plans and logo design, with limits."
pubDate: "2026-10-19"
toolVersion: "2026-10"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1671575584088-03eb2811c30f?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxNnx8ZmlsbSUyMHNldCUyMGNpbmVtYXRvZ3JhcGh5fGVufDF8MHx8fDE3OTI0MDUxMDd8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "15 min read"
featured: true
---

<p>A lower third is a strange file. Eight seconds of 1920 by 1080, and almost every pixel is empty on purpose: the first frame is clear, the last frame is clear, and in between a name slides in, holds still while someone reads it, and slides out. It never sees the footage it will sit on. Whatever is wrong with it, you find out in the edit, over somebody's face.</p>

<p>That is the theme this week. Five skills that make something you hand to someone else: an overlay, a quote card, a location, a plan, a logo. In most of them, something leaves with the deliverable that you did not decide to send, and in one, the useful part never gets called at all.</p>

<h2>How I checked</h2>

<p>This is a documentary review, not a hands-on test. I read each repository's own files on October 19, 2026: the README, the <code>SKILL.md</code>, and the script or notice where the sentence that matters lives, named in each entry. Stars, forks, licence and last push come from GitHub in one snapshot that morning, between 10:12 and 10:17 UTC. Where a claim depends on one file, the link goes to that file at a fixed commit, so it still says what I quote after the repository moves on.</p>

<p>I did not install or run any of the five. Where I describe behaviour, I read it in a file or in the code, and the authors' numbers stay the authors'. All five are under the MIT licence. That covers their code, and two of the entries below are about what it does not cover.</p>

<h2>1. lower-thirds</h2>

<p>A skill that designs animated name straps and other broadcast overlays and renders them as video files with a real transparent background.</p>

<p><strong>Link.</strong> <a href="https://github.com/iart-ai/lower-thirds-skills" target="_blank" rel="noopener">github.com/iart-ai/lower-thirds-skills</a>, one pack of the <a href="https://github.com/iart-ai/motion-skills" target="_blank" rel="noopener">motion-skills</a> collection.</p>

<p><strong>What it does.</strong> You say who is on screen and where the file is going. The agent copies an HTML template, draws the graphic frame by frame on a canvas in JavaScript, and renders it through a headless Chrome and FFmpeg: WebM with alpha for OBS and browsers, ProRes 4444 with alpha for Premiere Pro, DaVinci Resolve and Final Cut, or an MP4 on green for editors without alpha. The rules in the <code>SKILL.md</code> are the ones a broadcast designer would give a junior: text on its own backing so it reads over any shot, everything inside title safe, still during the hold, empty first and last frames so it never pops on in the edit. After encoding, the script decodes a frame from the middle of the hold and refuses the file if it does not come back see-through. One page holds every name, so the next guest is a re-render of the same design.</p>

<p><strong>Who it is for.</strong> The editor cutting a podcast or an event recap with eight guests, who needs eight matching name straps in Premiere tonight and does not have an After Effects template for this show.</p>

<p><strong>What it saves.</strong> I did not measure it. If you would build the straps from a Motion Graphics template you already own, it saves little. If you would design the first one from scratch, it replaces that design and every duplicate after it.</p>

<p><strong>Cost to install.</strong> One command for the skill, then the tools it calls: Node 18 or newer, <code>playwright-core</code> in the working folder, FFmpeg with the VP9 and ProRes encoders, and Chrome.</p>

<pre><code>npx skills add iart-ai/lower-thirds-skills
npm i playwright-core</code></pre>

<p>The <code>delivery.md</code> reference has the line that saves a night: Premiere does not read WebM alpha, so a WebM dropped on a Premiere timeline comes in with a black ground. For an NLE you want the <code>.mov</code>, which the script itself labels large. One ProRes 4444 file per guest adds up on a shared drive; <a href="https://axenworks.com/prores-file-size-calculator/" target="_blank" rel="noopener">a ProRes file size calculator</a> gives the weight of a 4444 clip at your resolution and frame rate before you render the whole guest list.</p>

<p><strong>The catch.</strong> It is about fonts, and it is in the gap between the README and the render script. The README says <code>--check</code> fails the design if a font face did not load, and that is true: the template loads its faces from Google Fonts, and the check lists any face that fell back. But <code>--check</code> is a separate command. The render itself does not stop. In <a href="https://github.com/iart-ai/lower-thirds-skills/blob/aa8ef7ed9fa59d0a79fc57701e493cfd8197b5d8/skills/lower-thirds/scripts/render.mjs#L211-L213" target="_blank" rel="noopener"><code>render.mjs</code>, lines 211 to 213</a>, the script prints the line that says the file was rendered, with alpha confirmed, and only after that prints the font warning. The file is written either way.</p>

<p>So a name strap can leave in the right size, the right colour and the wrong typeface, and the last good news on the screen is the line above the warning. The skill tells the agent to run the check first, and the agent probably will. If you render by hand, or if the client's typeface is not on Google Fonts, read to the bottom of the output. The template has no instructions for a licensed brand font loaded from a file; that part is yours.</p>

<p><strong>Verified.</strong> October 19, 2026, at commit <code>aa8ef7e</code>. The pack has 1 star and 0 forks, MIT, created and last pushed September 30; the parent collection has 894 stars and 80 forks, last push October 14. Read: the pack README, <code>SKILL.md</code>, <code>references/delivery.md</code>, the font section of <code>templates/lower-third.html</code>, and <code>scripts/render.mjs</code> in full.</p>

<h2>2. native-subtitle-quote-image</h2>

<p>A skill that turns a video into a tall still image of real frames and subtitle lines, the quote card that circulates after an interview.</p>

<p><strong>Link.</strong> <a href="https://github.com/chengyi-ai/native-subtitle-quote-image" target="_blank" rel="noopener">github.com/chengyi-ai/native-subtitle-quote-image</a></p>

<p><strong>What it does.</strong> From a local file or a link, the agent finds the lines worth quoting, grabs exact frames, and stacks one hero frame over up to six subtitle strips, in 3:4 or the source proportions. There are two modes and the skill refuses to blur them. Native mode crops subtitles that are already burned into the picture, pixel for pixel, with no OCR and no redraw. Script mode draws lines you have reviewed onto real frames. If you do not say which, the agent asks. It also refuses duplicate frames, does not overwrite existing images unless told to, and for multi speaker videos labels the transcript by speaker before choosing a single line.</p>

<p><strong>Who it is for.</strong> The social editor on a documentary or a talk show who has to turn yesterday's interview into three shareable cards with the subject's actual words, from the actual cut.</p>

<p><strong>What it saves.</strong> Scrubbing for clean frames between subtitle changes and lining up strips by hand in Photoshop. How much time that gives back depends on the footage and was not measured here, since no skill in this edition was run. The cost is a Python setup.</p>

<p><strong>Cost to install.</strong> Four commands for local video, plus <code>yt-dlp</code> if you want links.</p>

<pre><code>git clone https://github.com/chengyi-ai/native-subtitle-quote-image.git
cp -R native-subtitle-quote-image/skills/native-subtitle-quote-image ~/.claude/skills/
python3 -m pip install -r native-subtitle-quote-image/skills/native-subtitle-quote-image/requirements.txt
python3 native-subtitle-quote-image/skills/native-subtitle-quote-image/scripts/check_environment.py</code></pre>

<p>The README is in Chinese, English and Korean; the agent instructions in <code>SKILL.md</code> are in Chinese, and the skill asks its questions in the language you write in.</p>

<p><strong>The catch.</strong> The English README says script mode "labels it as post-produced". I went looking for that label in the image. In the renderer, <a href="https://github.com/chengyi-ai/native-subtitle-quote-image/blob/b250653b211eb5343330ba027e8f7ca724009062/skills/native-subtitle-quote-image/scripts/native_subtitle_stitch.py#L333-L350" target="_blank" rel="noopener"><code>native_subtitle_stitch.py</code>, lines 333 to 350</a>, the only text drawn on a card is the subtitle line and, if you turn it on, a speaker prefix. The label lives in the <code>SKILL.md</code>, as a rule for how the agent must describe the output to you. It does not travel inside the JPG.</p>

<p>The same is true of who said what. The README is candid that readers assume every strip belongs to the person in the hero frame, and that native mode cannot add speaker names to the picture, so for a question and answer card the speaker of each line goes in the delivery notes. Notes stay in the folder. The card goes to Instagram. If a card mixes voices, or its words were drawn rather than cropped, say so in the post, because the image will not.</p>

<p><strong>Verified.</strong> October 19, 2026, at commit <code>b250653</code>, skill version 2.10.3. 2,715 stars, 268 forks, MIT, last push October 13. Read: the Chinese and English READMEs, <code>SKILL.md</code>, and the drawing functions of <code>scripts/native_subtitle_stitch.py</code>.</p>

<h2>3. geo-sleuth</h2>

<p>A skill that works out where a photo was taken, and which way the camera faced, from the geometry in the frame.</p>

<p><strong>Link.</strong> <a href="https://github.com/Oldcircle/geo-sleuth" target="_blank" rel="noopener">github.com/Oldcircle/geo-sleuth</a></p>

<p><strong>What it does.</strong> About twenty single purpose Python scripts do the searching and ranking; the model only judges among the top few. It reads EXIF and text in the frame, runs reverse image search, then narrows candidates with OpenStreetMap features, elevation data, shadows, satellite tiles and street view, and returns coordinates with an error radius, a heading and a satellite evidence image. The README's three cases are worth reading for the method alone: a viaduct's 17 piers used as a ruler, a ridge line matched against elevation data after solving a phone held one degree off level, a cherry tree found through a city's open street tree register. The author is careful with the numbers. The two blind re-runs are labelled regression checks on photos the skill had already solved; accuracy on new photos is not claimed, and a public blind test set is on the roadmap.</p>

<p><strong>Who it is for.</strong> The producer whose client sends a reference still with "we want it here", and the location scout who has to find the real road before booking a recce.</p>

<p><strong>What it saves.</strong> Not measured, and the README does not promise speed: its recorded runs took 32, 53 and about 72 minutes. If the photo has a sign or a landmark, a search engine finds it in a minute without any of this. The skill is for the photo with nothing to read.</p>

<p><strong>Cost to install.</strong> One command, and a check the README asks for on first use. You need Python 3.10 or newer, <code>uv</code>, <code>curl</code>, and Chrome or Playwright Chromium.</p>

<pre><code>npx skills add Oldcircle/geo-sleuth</code></pre>

<p>Then ask the agent to run <code>doctor.py</code> from the installed skill's <code>scripts/</code> folder and fix whatever fails, as the README asks on first use.</p>

<p>The image matching models download on first use; the README puts the CUDA build of torch for Windows at about 2.4 GB.</p>

<p><strong>The catch.</strong> It is the first step, and it runs by default. The intake script sends the photo to reverse image search on Baidu and Yandex: in <a href="https://github.com/Oldcircle/geo-sleuth/blob/16e9429416e1151562836a613acefe74f3b8f0d5/skills/geo-sleuth/scripts/intake.py#L136-L140" target="_blank" rel="noopener"><code>intake.py</code>, lines 136 to 140</a>, the engines default to <code>baidu,yandex</code>, the search is on unless you pass <code>--no-rev</code>, and each engine also searches up to four cropped variants of the image. The <code>SKILL.md</code> starts every job with that intake. The README does document it, under the setup section, and its own local test command adds <code>--no-rev</code> so you can try the pipeline offline.</p>

<p>For a public photo that is fine. For a client's unreleased campaign still, a frame from a film in post, or a photo with a person in it, the first thing the skill does is upload it to two outside reverse image search services, Baidu and Yandex. What those services keep, and where they process it, is set by their own terms, which this edition did not read. Tell the agent to start with <code>--no-rev</code> when the image is not yours to share, and accept a slower search. The README ends with a line about consent: run it on your own photos or ones you have permission to analyze, never to find people who have not agreed to be found.</p>

<p><strong>Verified.</strong> October 19, 2026, at commit <code>16e9429</code>. 3,420 stars, 460 forks, MIT, last push October 18. Read: the README, <code>SKILL.md</code>, and the argument and search sections of <code>scripts/intake.py</code>. Tables in <code>data/</code> derived from Wikipedia are CC BY-SA 4.0, and OpenStreetMap results need the credit line the README gives when you publish them.</p>

<h2>4. effective-html</h2>

<p>A set of seven skills for single file HTML documents, of which the one for producers is <code>html-plan</code>: a plan people can read and check, built from the plan you already wrote.</p>

<p><strong>Link.</strong> <a href="https://github.com/plannotator/effective-html" target="_blank" rel="noopener">github.com/plannotator/effective-html</a></p>

<p><strong>What it does.</strong> You paste the messy version, a shoot schedule, a delivery list, an email thread, and <code>html-plan</code> turns it into one HTML file with phases, owners, dependencies, decision points and open questions. The interesting part is what it is told not to do: keep your commitments and your wording recognisable, separate decisions from assumptions, and add no timeline, progress percentage, status badge or dashboard unless the source supports it. Everything stays inline, with no external services, and the agent checks the file at wide and narrow widths. The other six skills cover wireframes, prototypes, diagrams, a visual direction pass and a broad router; the README also suggests reading them as references before installing anything.</p>

<p><strong>Who it is for.</strong> The line producer who has the shoot plan in a notes file and needs to send the director, the client and the post house the same version, one where nobody can miss which deliverable depends on which approval.</p>

<p><strong>What it saves.</strong> Rebuilding the plan in a deck or a spreadsheet so it looks like a plan. If your company already lives in a production tool that does this, it saves nothing.</p>

<p><strong>Cost to install.</strong> One command for the whole collection.</p>

<pre><code>npx skills add plannotator/effective-html</code></pre>

<p><strong>The catch.</strong> It is in the first lines of <a href="https://github.com/plannotator/effective-html/blob/975b047f6da6874e176db54f048c0c31c30e9f65/skills/html-plan/SKILL.md" target="_blank" rel="noopener"><code>html-plan/SKILL.md</code></a>: it is a "direct-invocation specialist", used when you name it or when the broad <code>html</code> skill routes a plan request to it, and it must not activate on its own from a general request. The README shows how to install skills one at a time. Install only <code>html-plan</code>, ask for "a production plan for next week", and nothing in the collection is listening.</p>

<p>The router, the <code>html</code> skill, calls itself "the collection's only implicit router", and its own description says it is for requests where HTML is the deliverable. So either install the collection and say you want an HTML plan, or call <code>html-plan</code> by name. Both are one sentence. The difference is whether the rule about not inventing a progress bar ever gets read.</p>

<p><strong>Verified.</strong> October 19, 2026, at commit <code>975b047</code>. 3,697 stars, 250 forks, MIT, last push October 15. Read: the README, and the <code>SKILL.md</code> of <code>html</code>, <code>html-plan</code> and the description lines of the other five. One skill in the set, <code>big-pics-little-words</code>, is credited in the README as copied from another repository, <code>bro</code>.</p>

<h2>5. logo-design-skill</h2>

<p>A skill that takes an agent through logo design from brief to production files, with a reference library of real logos to study.</p>

<p><strong>Link.</strong> <a href="https://github.com/kaankiziltug/logo-design-skill" target="_blank" rel="noopener">github.com/kaankiziltug/logo-design-skill</a></p>

<p><strong>What it does.</strong> It runs a design process with a stop in the middle: brief, research in the library, eight to twelve one line ideas, three built as SVG, tests, then a checkpoint where it shows the concepts with a recommendation and produces nothing more until you choose. Only then the kit: colour, lockups, a presentation board with mockups, favicons and guidelines. The tests are the useful part for anyone who has seen a logo die at 16 pixels: a pixel test, one colour, reversed, a squint blur, mirror, and a shelf test next to competitors. The README shows 28 fictional briefs run end to end, and says in four of them the client picked a different concept from the one recommended.</p>

<p><strong>Who it is for.</strong> The producer naming a new production company, or a director who needs a title mark for a short film and a festival poster, without a design budget this month.</p>

<p><strong>What it saves.</strong> A first round of concepts, tested at small sizes, before a designer is involved. It does not replace the designer if the mark matters, and the skill's checkpoint is built around a human choosing.</p>

<p><strong>Cost to install.</strong> Two commands inside Claude Code.</p>

<pre><code>/plugin marketplace add kaankiziltug/logo-design-skill
/plugin install logo-design@logo-design-skill</code></pre>

<p>The README notes the skill works best with a model that can see images, because it renders its own drafts and checks them before showing you.</p>

<p><strong>The catch.</strong> It is the library, and the repository says so plainly in <a href="https://github.com/kaankiziltug/logo-design-skill/blob/0ecf52e9a4b3ac92b714f7cc6e3148ab8c774134/TRADEMARKS.md" target="_blank" rel="noopener"><code>TRADEMARKS.md</code></a>: the folder holds 1,432 logos of companies and products, every one a trademark of its owner, and "the MIT license of this repository does not apply to these files and grants no rights to them". The README says 1,400 plus; I counted the SVG files at this commit and got 1,432, about 8.5 MB.</p>

<p>Two things follow, and neither is in the install instructions. Your skills folder now carries 1,432 trademarks, so if you share that folder with a team or commit it to a repository, you are passing them along under a notice that grants nothing. The author's packaging script builds a <code>lite</code> zip without the SVG files, meant for upload limits, and that is the version to share. And the test sheet can place real competitor logos next to your concept, which is the point of a shelf test. Keep that sheet as a working file. The presentation board is what goes to the client.</p>

<p><strong>Verified.</strong> October 19, 2026, at commit <code>0ecf52e</code>. 3,729 stars, 291 forks, MIT for the skill text, scripts and catalog data, last push September 30. Read: the README, <code>TRADEMARKS.md</code>, <code>SKILL.md</code> and <code>tools/package_skill.py</code>, and the repository tree for the logo count.</p>

<h2>What I did not verify</h2>

<p>I did not install or run any of the five. Every behaviour above comes from a file or from code I read.</p>

<p>I did not render a lower third with a missing font to watch the order of the messages. The order comes from reading <code>render.mjs</code>, where the success line and the font warning are printed in that sequence.</p>

<p>I did not reproduce geo-sleuth's three cases or its distances. They are the author's runs, and the author labels the blind ones as regression checks. I did not read Baidu's or Yandex's terms for uploaded images, and I make no claim about what they keep.</p>

<p>I read the drawing code of native-subtitle-quote-image and skipped the rest of its 1,472 line script, and I read its Chinese <code>SKILL.md</code> for the sections on modes and speakers.</p>

<p>I did not check whether the logo-design skill still works fully from the <code>lite</code> package; the packaging script says it keeps the catalog metadata and scripts and drops the SVG files and the gallery.</p>

<p>I searched Hacker News for the five names over the last two months and found nothing. Reddit did not let me read its search from here, so I cannot say whether they were discussed there. Stars move by the hour, and the numbers above carry the morning they were read.</p>

<p>The rule for this week fits in one line: before a skill touches a client's file, find out what it sends out and what it writes when something fails.</p>

<p>Edition 9 is due next Monday.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Method: a documentary review of each repository's own files, read on October 19, 2026, with one GitHub snapshot between 10:12 and 10:17 UTC. None of the five skills was installed or run.</p>
<ul>
<li><a href="https://github.com/iart-ai/lower-thirds-skills" target="_blank" rel="noopener">lower-thirds-skills</a>: README, <code>SKILL.md</code>, <code>references/delivery.md</code>, <a href="https://github.com/iart-ai/lower-thirds-skills/blob/aa8ef7ed9fa59d0a79fc57701e493cfd8197b5d8/skills/lower-thirds/scripts/render.mjs" target="_blank" rel="noopener"><code>render.mjs</code> at aa8ef7e</a>.</li>
<li><a href="https://github.com/chengyi-ai/native-subtitle-quote-image" target="_blank" rel="noopener">native-subtitle-quote-image</a>: READMEs, <code>SKILL.md</code>, <a href="https://github.com/chengyi-ai/native-subtitle-quote-image/blob/b250653b211eb5343330ba027e8f7ca724009062/skills/native-subtitle-quote-image/scripts/native_subtitle_stitch.py" target="_blank" rel="noopener"><code>native_subtitle_stitch.py</code> at b250653</a>.</li>
<li><a href="https://github.com/Oldcircle/geo-sleuth" target="_blank" rel="noopener">geo-sleuth</a>: README, <code>SKILL.md</code>, <a href="https://github.com/Oldcircle/geo-sleuth/blob/16e9429416e1151562836a613acefe74f3b8f0d5/skills/geo-sleuth/scripts/intake.py" target="_blank" rel="noopener"><code>intake.py</code> at 16e9429</a>.</li>
<li><a href="https://github.com/plannotator/effective-html" target="_blank" rel="noopener">effective-html</a>: README, <a href="https://github.com/plannotator/effective-html/blob/975b047f6da6874e176db54f048c0c31c30e9f65/skills/html-plan/SKILL.md" target="_blank" rel="noopener"><code>html-plan/SKILL.md</code> at 975b047</a>, <code>html/SKILL.md</code>.</li>
<li><a href="https://github.com/kaankiziltug/logo-design-skill" target="_blank" rel="noopener">logo-design-skill</a>: README, <a href="https://github.com/kaankiziltug/logo-design-skill/blob/0ecf52e9a4b3ac92b714f7cc6e3148ab8c774134/TRADEMARKS.md" target="_blank" rel="noopener"><code>TRADEMARKS.md</code> at 0ecf52e</a>, <code>SKILL.md</code>, <code>tools/package_skill.py</code>.</li>
</ul>
</section>
