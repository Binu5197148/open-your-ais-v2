---
id: "art-202"
title: "Written Down: Claude Skills That Keep Their Own Ledger"
description: "An overnight build loop, a 3D teardown maker, a default breaker, a plain-English rewriter and a video edit flow builder, read through the notes each one keeps."
pubDate: "2026-11-23"
toolVersion: "2026-11"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1532005051008-7bdebde54683?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwyMHx8ZmlsbSUyMHNldCUyMGNpbmVtYXRvZ3JhcGh5fGVufDF8MHx8fDE3OTUzNDI2ODJ8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "14 min read"
featured: true
---

<p>Five skills this week, and every one of them keeps a file about its own work: a round ledger, a list of mistakes, a log of moves already used, a changelog, a notebook of corrections.</p>

<p>I read those files before the READMEs. They say what the skill costs and where it stops.</p>

<p>The first one keeps a ledger for a run that is built to last all night.</p>

<h2>How I checked</h2>

<p>This is a documentary review, not a hands-on test. I read each repository's own files on November 23, 2026: the README, the skill file, and the ledger, lessons file, script or guide named in each entry. Stars, forks, licence and last push come from GitHub in one snapshot that morning, at 10:11 UTC. Where a claim depends on one file, the link goes to that file at a fixed commit.</p>

<p>I did not install or run any of the five. Every number below is the author's unless I say I counted it. All five are under the MIT licence.</p>

<h2>1. cook</h2>

<p>A skill that takes reference images, a quality bar and a time budget, then builds, compares and fixes on its own until the work holds up next to the references.</p>

<p><strong>Link.</strong> <a href="https://github.com/Leonxlnx/cook" target="_blank" rel="noopener">github.com/Leonxlnx/cook</a>, by Leon Lin.</p>

<p><strong>What it does.</strong> It asks every open question in one message, each with a default. After that it works in rounds: build, render stills from the same camera as each reference, put reference and render side by side, hand those images to fresh agents that know nothing about the build, and fix the weakest part. You get the stills after every round. It is written for 3D worlds made in code, code-rendered films, launch videos, games and interfaces. All state lives in a <code>cook/</code> folder in the project, so a run survives a context reset.</p>

<p><strong>Who it is for.</strong> The motion designer who has client-approved style frames and has to build an environment or a launch film in code that matches them, shot for shot.</p>

<p><strong>What it saves.</strong> It replaces the loop of rendering, squinting at the reference and writing the next note yourself. No time figure applies, because the skill is designed to use time, as the catch explains.</p>

<p><strong>Cost to install.</strong> One command. The side-by-side script needs Node 18 or newer and <code>ffmpeg</code>. The rest is Markdown: I counted 12 files.</p>

<pre><code>npx skills add Leonxlnx/cook</code></pre>

<p><strong>The catch.</strong> The time you give it is a minimum. The intake file tells the agent the user should be able to <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/references/intake.md?plain=1#L3" target="_blank" rel="noopener">reply "defaults" and go to sleep</a>, and the default for a visual build is <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/references/intake.md?plain=1#L22" target="_blank" rel="noopener">a floor of 8 hours</a>. If the agent thinks it is finished earlier, the skill file tells it that <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/SKILL.md?plain=1#L109" target="_blank" rel="noopener">the bar was read too low</a> and to start another round. Usage is paced the same way: <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/references/loop-and-critics.md?plain=1#L98" target="_blank" rel="noopener">about 99 percent of each five-hour window</a>. So one word of reply commits a night, and leaves little of each usage window for anything else you meant to do with the plan.</p>

<p>The README's own example gives the scale: <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/README.md?plain=1#L81-L88" target="_blank" rel="noopener">about 45 hours, 55 subagents, about 11 million output tokens, and an API-equivalent cost of roughly $1,800 to $2,300</a>, run on a Max plan. Those are the author's numbers for the author's showpiece.</p>

<p>Read the ledger template too. The scores that decide when to stop are labelled <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/templates/ROUNDS.md?plain=1#L36" target="_blank" rel="noopener">"eyeballed"</a>, in the template's own word: they are opinions from other agents, kept apart from anything a command measured. The one hard stop for a person is the final render, which waits for your approval of the stills. For a small job, answer question 4 with a cap.</p>

<p><strong>Verified.</strong> November 23, 2026, at commit <code>b23cac6</code>. 810 stars and 61 forks; MIT, created and last pushed October 31. Read: the README, <code>SKILL.md</code>, the intake, rules and loop references, and <code>templates/ROUNDS.md</code>.</p>

<h2>2. cutaway</h2>

<p>A skill that turns one picture of a robotic animal or a machine into a 3D object written in code, which takes itself apart on camera part by part.</p>

<p><strong>Link.</strong> <a href="https://github.com/Nyxera0x/cutaway" target="_blank" rel="noopener">github.com/Nyxera0x/cutaway</a>, by Nyxera0x. The three GIFs at the top of the README show the output before you install anything.</p>

<p><strong>What it does.</strong> The agent measures the picture, writes a checklist of 10 to 12 lines for it, and rebuilds the object in three.js without importing the image. It grades its still against the picture line by line and stops after round 2 for your yes. Only then does it film: a cursor presses a button, that part opens under its own camera, the whole object explodes and reassembles. Output is a single offline HTML page and a 60 fps MP4 with a score made in code.</p>

<p><strong>Who it is for.</strong> The art director who has one concept image of a product or a creature and needs an exploded-view hero shot for a pitch, without booking a 3D artist first.</p>

<p><strong>What it saves.</strong> Modelling, rigging and animating a teardown by hand. The README gives no time figure and I did not time anything.</p>

<p><strong>Cost to install.</strong> Two commands, the second run once inside the installed folder. Node 20 or newer; <code>ffmpeg</code> for the video and Python 3 for the sound.</p>

<pre><code>npx skills add Nyxera0x/cutaway -g -a claude-code
npm install && npx playwright install chromium</code></pre>

<p><strong>The catch.</strong> The description says "any object or creature". The lessons file is narrower, and it is the most useful page in the repository. It lists what failed: <a href="https://github.com/Nyxera0x/cutaway/blob/5d8f1c6efe0ed65a8fc7647a7a2a3ee9fbb4d20a/docs/LESSONS.md?plain=1#L9" target="_blank" rel="noopener">a moth thrown out after 9 rounds</a>, <a href="https://github.com/Nyxera0x/cutaway/blob/5d8f1c6efe0ed65a8fc7647a7a2a3ee9fbb4d20a/docs/LESSONS.md?plain=1#L14" target="_blank" rel="noopener">a scarab that took 4 rounds and about 450,000 tokens and still looked cheap</a>, and <a href="https://github.com/Nyxera0x/cutaway/blob/5d8f1c6efe0ed65a8fc7647a7a2a3ee9fbb4d20a/docs/LESSONS.md?plain=1#L17" target="_blank" rel="noopener">one moth that used about 430,000 tokens before it was dropped</a>.</p>

<p>The pattern behind those rows is in two other lines. The film works by <a href="https://github.com/Nyxera0x/cutaway/blob/5d8f1c6efe0ed65a8fc7647a7a2a3ee9fbb4d20a/SKILL.md?plain=1#L77" target="_blank" rel="noopener">porting the choreography of the closest of the three examples and changing the body only</a>, so a subject unlike a spider, a fish or a wasp starts without a film to borrow. And the prompt guide warns that <a href="https://github.com/Nyxera0x/cutaway/blob/5d8f1c6efe0ed65a8fc7647a7a2a3ee9fbb4d20a/docs/PROMPTS.md?plain=1#L17" target="_blank" rel="noopener">smooth bodies read as toys however many rounds they get</a>. The house look is also fixed in the brief: white shells, dark mechanism, one green accent. If your client's product is a smooth bottle in brand colours, you are outside what the three examples prove.</p>

<p><strong>Verified.</strong> November 23, 2026, at commit <code>5d8f1c6</code>. 443 stars and 71 forks; MIT, created and last pushed November 6. Three examples promised, three counted, each in three folders. The 12 recorded sounds are listed as CC0 with their Freesound pages, and I counted 12 files. The README credits whaleyxbt/claude-motion for the runtime and capture. Read: the README, <code>SKILL.md</code> and the four files in <code>docs/</code>.</p>

<h2>3. antialgorithm</h2>

<p>A skill for open creative choices, such as names, taglines, posters and layouts, that makes the model name its most average answer and then move away from it for a reason taken from the project.</p>

<p><strong>Link.</strong> <a href="https://github.com/mankidev/antialgorithm" target="_blank" rel="noopener">github.com/mankidev/antialgorithm</a>, by mankidev.</p>

<p><strong>What it does.</strong> When a request is thin, a script rolls a starting point from system randomness: a making method, colours, a layout, a region, a verb. Two people sending the same prompt start in different places. A second script keeps a log of the main move behind each answer, and the model reads it before showing new work, so last month's good idea does not come back as this month's habit. Two more scripts roughen the lines of an SVG and flag text that runs off an edge or is too small.</p>

<p><strong>Who it is for.</strong> The creative at an agency who asks an agent for ten names or three poster routes and keeps getting the same ten and the same three.</p>

<p><strong>What it saves.</strong> The rounds of "less generic, please". I have no figure, and the README offers none.</p>

<p><strong>Cost to install.</strong> One command. The scripts need Python 3, and the layout check also needs numpy, Pillow and <code>rsvg-convert</code>.</p>

<pre><code>npx skills add mankidev/antialgorithm</code></pre>

<p><strong>The catch.</strong> The showcase image is two rows of six posters, and the README tells you how each row was chosen, which is to its credit. The row without the skill is <a href="https://github.com/mankidev/antialgorithm/blob/a6392c0d35382cd8fe0676668e2c7b2de4ec9269/README.md?plain=1#L19" target="_blank" rel="noopener">one batch of six runs, none left out. The row with it is picked from about a dozen runs made while the skill was still being written</a>. So expect to make a dozen and choose, the way the author did.</p>

<p>The log deserves a look before client work. It is one file in your home folder, <a href="https://github.com/mankidev/antialgorithm/blob/a6392c0d35382cd8fe0676668e2c7b2de4ec9269/scripts/history.py?plain=1#L6-L9" target="_blank" rel="noopener">up to 300 entries</a>, shared by every project on the machine. The skill tells the model to <a href="https://github.com/mankidev/antialgorithm/blob/a6392c0d35382cd8fe0676668e2c7b2de4ec9269/SKILL.md?plain=1#L87" target="_blank" rel="noopener">record the move and leave out the project and the user's content</a>. That is an instruction to the model. The script itself <a href="https://github.com/mankidev/antialgorithm/blob/a6392c0d35382cd8fe0676668e2c7b2de4ec9269/scripts/moves.py?plain=1#L16-L21" target="_blank" rel="noopener">saves whatever text it is handed</a>. Open the file now and then, and you will also see which moves from one client's job are steering the next one's.</p>

<p><strong>Verified.</strong> November 23, 2026, at commit <code>a6392c0</code>. 745 stars and 41 forks; MIT, created November 14, last push November 20. The README comes in ten languages, Portuguese among them. Read: the README, <code>SKILL.md</code>, the opening of <code>visuals.md</code>, <code>history.py</code> and <code>moves.py</code>.</p>

<h2>4. STE80 Humanizer</h2>

<p>A skill that rewrites text in two passes: it removes the habits readers recognise as machine writing, then rebuilds the sentences in the style of the controlled English used in aircraft maintenance manuals.</p>

<p><strong>Link.</strong> <a href="https://github.com/Dodaios/ste80-humanizer" target="_blank" rel="noopener">github.com/Dodaios/ste80-humanizer</a>, by the Dodaios team.</p>

<p><strong>What it does.</strong> Pass 1 works through 26 numbered tells, following the catalogue of blader/humanizer, which the repository credits and whose licence notice it carries. Pass 2 applies 15 structure rules: one idea per sentence, about 20 words for an instruction, the condition first, the warning before the step. It reports each edit by number, so you can look up why a sentence changed. Its fidelity rules forbid adding facts, softening a "may" or rounding a number.</p>

<p><strong>Who it is for.</strong> The post supervisor who writes the delivery spec and the handoff notes that a freelancer in another time zone has to follow without calling.</p>

<p><strong>What it saves.</strong> The second read your instructions usually need. No time figure in the README, and none from me.</p>

<p><strong>Cost to install.</strong> One command. The optional checker is one Python file with no dependencies.</p>

<pre><code>npx skills add Dodaios/ste80-humanizer</code></pre>

<p><strong>The catch.</strong> The standard is an English standard, and the limits section says what that means elsewhere: <a href="https://github.com/Dodaios/ste80-humanizer/blob/ace4484da2d81dda97861e004c37c0a2e93896d1/README.md?plain=1#L220" target="_blank" rel="noopener">for other languages the skill applies the tells and the structure rules, without the English word lists</a>. The checker is narrower still. I read its patterns: <a href="https://github.com/Dodaios/ste80-humanizer/blob/ace4484da2d81dda97861e004c37c0a2e93896d1/scripts/ste_check.py?plain=1#L116-L122" target="_blank" rel="noopener">English auxiliaries, English endings, and a word pattern built on unaccented letters</a>. For a call sheet in Portuguese, the model can still follow the structure rules, but the checker was built to count something else.</p>

<p>Two more lines set the weight of the evidence. The README says its own tests are four cases and asks you to <a href="https://github.com/Dodaios/ste80-humanizer/blob/ace4484da2d81dda97861e004c37c0a2e93896d1/README.md?plain=1#L215" target="_blank" rel="noopener">treat them as a hint</a>. And under the graphic borrowed from the post that inspired the method, it notes that <a href="https://github.com/Dodaios/ste80-humanizer/blob/ace4484da2d81dda97861e004c37c0a2e93896d1/README.md?plain=1#L46" target="_blank" rel="noopener">a later fact check found errors in one panel</a>, and lists them. A repository that corrects its own illustration earns some trust on the rest. Keep it away from a treatment or a tagline, though: for fiction, speeches and brand copy <a href="https://github.com/Dodaios/ste80-humanizer/blob/ace4484da2d81dda97861e004c37c0a2e93896d1/SKILL.md?plain=1#L203" target="_blank" rel="noopener">the skill itself skips the second pass, because that pass removes voice on purpose</a>.</p>

<p><strong>Verified.</strong> November 23, 2026, at commit <code>ace4484</code>. 1,093 stars and 74 forks; MIT, created November 9, last push November 18. 26 tells and 15 rules promised, and I counted 26 and 15 rows in <code>SKILL.md</code>; four test cases promised, four folders counted. Read: the README, <code>SKILL.md</code>, the changelog, the third-party notice, and the patterns at the top of <code>ste_check.py</code>.</p>

<h2>5. fluxo-de-edicao</h2>

<p>A skill, written in Portuguese, that interviews you and then writes your own set of video editing skills for Claude Code, one per stage of the edit.</p>

<p><strong>Link.</strong> <a href="https://github.com/LeiteZ/fluxo-de-edicao" target="_blank" rel="noopener">github.com/LeiteZ/fluxo-de-edicao</a>, by Lucas Leite.</p>

<p><strong>What it does.</strong> It starts from an eight-stage flow the author uses on his own videos: open the project, prepare and transcribe, cut, plan the animations, fetch assets, render the animations, add camera moves, add sound effects. It asks where you review the edit (Premiere, Resolve, Final Cut, or no editor at all), what kind of video you make, and how tight you like the cuts. It studies clips you admire and writes a style profile with measured numbers. Then it writes one skill per stage, a master skill that knows where each video stands, and a notebook where corrections worth keeping are logged for later.</p>

<p><strong>Who it is for.</strong> The Portuguese-speaking editor or solo creator who cuts talking-head videos every week and wants the agent to make the first pass while the finishing stays in the editing program.</p>

<p><strong>What it saves.</strong> Designing that pipeline alone, and learning its traps the slow way. The guides carry them. One example: <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/guias/decisoes.md?plain=1#L13" target="_blank" rel="noopener">use the real frame rate of the footage, because 29.97 is a different number from 30 and the error shows up as drift at the end</a>. Before the first project file goes to the editor, <a href="https://axenworks.com/timecode-calculator/" target="_blank" rel="noopener">a timecode calculator</a> puts a number on that drift for the length of your video.</p>

<p><strong>Cost to install.</strong> One command, or one sentence to your agent. It needs a paid Claude plan and Claude Code. Python, FFmpeg, a transcription tool and HyperFrames are checked and installed with you along the way.</p>

<pre><code>git clone https://github.com/LeiteZ/fluxo-de-edicao ~/.claude/skills/fluxo-de-edicao</code></pre>

<p><strong>The catch.</strong> The README says it plainly, and it still surprises: <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/README.md?plain=1#L46" target="_blank" rel="noopener">this skill does not edit video</a>. I counted 22 files in the repository and every one is text. There is no script in it. The skill file tells the agent <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/SKILL.md?plain=1#L76" target="_blank" rel="noopener">to write the scripts the first time each stage runs on a real video, and to write none in advance</a> (my translation). So the code that cuts your footage is written on your machine, by your agent, during a <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/SKILL.md?plain=1#L81" target="_blank" rel="noopener">test on a clip of one to three minutes</a>. The description's "already tested on real videos" (my translation again) refers to the author's flow. Yours is tested when you finish that clip.</p>

<p>Plan the first session as a setup day: an interview, <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/guias/referencias.md?plain=1#L6" target="_blank" rel="noopener">five to ten short reference clips</a> to gather, and installs to approve. The notebook has a rule I would copy into any pipeline: <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/guias/principios-do-fluxo.md?plain=1#L33" target="_blank" rel="noopener">writing a correction down changes nothing until you ask for it to be applied</a>. And if you do not read Portuguese, the conversation and all the guides are in it.</p>

<p><strong>Verified.</strong> November 23, 2026, at commit <code>703561d</code>. 152 stars and 40 forks, the smallest repository this week; MIT, created November 2, last push November 4. Eight stages promised; seven stage guides counted, with the first two stages sharing one file. Read: the README, <code>SKILL.md</code>, and the guides on principles, decisions and references.</p>

<h2>What I did not verify</h2>

<p>I did not install or run any of the five. Every behaviour above comes from a file I read.</p>

<p>I did not start a cook run, so I cannot say how close the pacing gets to the 99 percent it aims for, or what a night costs on any plan. I did not build a cutaway object or open the three example pages. I did not roll a seed or look at more posters than the twelve in the README image. I did not rewrite a text with STE80 Humanizer, in English or in Portuguese, and I did not run its checker. I did not go through the fluxo-de-edicao interview, so I have not seen a single script it leads an agent to write.</p>

<p>The token counts in cutaway's lessons file and the hours and dollars in cook's README are the authors' own records. I have no way to audit them.</p>

<p>Nothing from my own skill library again this week. What is left there has either run in this column already or has a rights question I have not settled.</p>

<p>Hacker News has a Show HN post for STE80 Humanizer; my searches there found nothing for the other four. Reddit refused the request. Stars move by the hour, and the numbers above carry the morning they were read.</p>

<p>Edition 14 is due next Monday.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Method: a documentary review of each repository's own files, read on November 23, 2026, with one GitHub snapshot at 10:11 UTC. None of the five skills was installed or run.</p>
<ul>
<li><a href="https://github.com/Leonxlnx/cook" target="_blank" rel="noopener">cook</a>: <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/README.md" target="_blank" rel="noopener">README at b23cac6</a>, <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/SKILL.md" target="_blank" rel="noopener"><code>SKILL.md</code></a>, <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/references/intake.md" target="_blank" rel="noopener"><code>references/intake.md</code></a>, <a href="https://github.com/Leonxlnx/cook/blob/b23cac6fd9439dfddcab61b14808e7bf72549b46/templates/ROUNDS.md" target="_blank" rel="noopener"><code>templates/ROUNDS.md</code></a>.</li>
<li><a href="https://github.com/Nyxera0x/cutaway" target="_blank" rel="noopener">cutaway</a>: <a href="https://github.com/Nyxera0x/cutaway/blob/5d8f1c6efe0ed65a8fc7647a7a2a3ee9fbb4d20a/README.md" target="_blank" rel="noopener">README at 5d8f1c6</a>, <a href="https://github.com/Nyxera0x/cutaway/blob/5d8f1c6efe0ed65a8fc7647a7a2a3ee9fbb4d20a/SKILL.md" target="_blank" rel="noopener"><code>SKILL.md</code></a>, <a href="https://github.com/Nyxera0x/cutaway/blob/5d8f1c6efe0ed65a8fc7647a7a2a3ee9fbb4d20a/docs/LESSONS.md" target="_blank" rel="noopener"><code>docs/LESSONS.md</code></a>, <a href="https://github.com/Nyxera0x/cutaway/blob/5d8f1c6efe0ed65a8fc7647a7a2a3ee9fbb4d20a/docs/PROMPTS.md" target="_blank" rel="noopener"><code>docs/PROMPTS.md</code></a>.</li>
<li><a href="https://github.com/mankidev/antialgorithm" target="_blank" rel="noopener">antialgorithm</a>: <a href="https://github.com/mankidev/antialgorithm/blob/a6392c0d35382cd8fe0676668e2c7b2de4ec9269/README.md" target="_blank" rel="noopener">README at a6392c0</a>, <a href="https://github.com/mankidev/antialgorithm/blob/a6392c0d35382cd8fe0676668e2c7b2de4ec9269/SKILL.md" target="_blank" rel="noopener"><code>SKILL.md</code></a>, <a href="https://github.com/mankidev/antialgorithm/blob/a6392c0d35382cd8fe0676668e2c7b2de4ec9269/scripts/history.py" target="_blank" rel="noopener"><code>scripts/history.py</code></a>, <a href="https://github.com/mankidev/antialgorithm/blob/a6392c0d35382cd8fe0676668e2c7b2de4ec9269/scripts/moves.py" target="_blank" rel="noopener"><code>scripts/moves.py</code></a>.</li>
<li><a href="https://github.com/Dodaios/ste80-humanizer" target="_blank" rel="noopener">STE80 Humanizer</a>: <a href="https://github.com/Dodaios/ste80-humanizer/blob/ace4484da2d81dda97861e004c37c0a2e93896d1/README.md" target="_blank" rel="noopener">README at ace4484</a>, <a href="https://github.com/Dodaios/ste80-humanizer/blob/ace4484da2d81dda97861e004c37c0a2e93896d1/SKILL.md" target="_blank" rel="noopener"><code>SKILL.md</code></a>, <a href="https://github.com/Dodaios/ste80-humanizer/blob/ace4484da2d81dda97861e004c37c0a2e93896d1/scripts/ste_check.py" target="_blank" rel="noopener"><code>scripts/ste_check.py</code></a>.</li>
<li><a href="https://github.com/LeiteZ/fluxo-de-edicao" target="_blank" rel="noopener">fluxo-de-edicao</a>: <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/README.md" target="_blank" rel="noopener">README at 703561d</a>, <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/SKILL.md" target="_blank" rel="noopener"><code>SKILL.md</code></a>, <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/guias/principios-do-fluxo.md" target="_blank" rel="noopener"><code>guias/principios-do-fluxo.md</code></a>, <a href="https://github.com/LeiteZ/fluxo-de-edicao/blob/703561d07d78ab4cf69623b09198273d4e830b9b/guias/decisoes.md" target="_blank" rel="noopener"><code>guias/decisoes.md</code></a>.</li>
</ul>
</section>
