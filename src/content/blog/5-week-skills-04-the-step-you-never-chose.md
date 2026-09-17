---
id: "art-186"
title: "Five Claude Skills and the Choice They Make for You"
description: "Five Claude skills opened on September 17. One sends your photo slots to a server answering 503. What each one does in the step you never chose."
pubDate: "2026-09-17"
toolVersion: "2026-09"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1742333420195-84c5f5655b2b?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxMnx8YmFja3N0YWdlJTIwcHJvZHVjdGlvbiUyMGNyZXd8ZW58MXwwfHx8MTc4OTY1MTc5MHww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "15 min read"
featured: true
---

<p>503. I requested <code>source.unsplash.com</code> nine times this afternoon, in three rounds twenty seconds apart, with a portrait query, a food query and a plain random one. Nine times the server answered 503 and a Heroku page titled "Application Error".</p>

<p>On its own that number is somebody else's outage. It lands in this column because a design skill with almost 29,000 stars on GitHub tells the agent to use that address whenever a page needs a photograph of a real subject. You never pick it. The skill picks it, in a step you do not see, and you find out when the client opens the link.</p>

<p>So this week I read each skill for the same thing: what it does on its own when you do not choose. Every one of the five makes a decision like that, and in each case the decision is written down in a file you can read before installing. That is where I looked.</p>

<h2>How I checked</h2>

<p>One snapshot, September 17, 2026, between 13:30 and 13:31 UTC.</p>

<p>Repository numbers came from the authenticated <code>gh</code> CLI, because the public API rate limits this machine at 403. Every link in this article was requested with <code>curl</code> in that window and answered 200. The two exceptions are on purpose and named where they appear: the Unsplash address that answered 503, and a Picsum address that answered with a 302 redirect to an actual image, which is how Picsum works.</p>

<p>What I did not do: I did not install or run any of the four GitHub skills. Where I describe behaviour, I read it in the source file, and I say which file.</p>

<h2>1. Hallmark</h2>

<p>A design skill that builds web pages and refuses the layout every model falls back to.</p>

<p><strong>Link.</strong> <a href="https://github.com/Nutlope/hallmark" target="_blank" rel="noopener">github.com/Nutlope/hallmark</a></p>

<p><strong>What it does.</strong> You describe a page. Before writing any markup it picks a whole page shape from a catalogue of macrostructures, a long document, a manifesto, a stat led page, a portfolio grid, dresses it in a theme, and runs a checklist of anti patterns against the draft before it hands anything back. It has three other verbs: <code>audit</code> scores an existing page without editing it, <code>redesign</code> keeps the copy and the brand and rebuilds the structure, and <code>study</code> extracts the design logic of a page you admire while refusing to clone it pixel for pixel. The README credits Together AI as the maker. The live gallery at <code>usehallmark.com</code> shows pages built from different briefs, and they do not look like colour swaps of one template, which is the claim.</p>

<p><strong>Who it is for.</strong> The producer who needs a one page site for a short film premiere by Friday and does not want it to look like every other page an AI made this month.</p>

<p><strong>What it saves.</strong> The substitution is the first pass of a web designer's week: choosing a structure and a type system before anyone argues about details. If you would hire that pass out anyway, this is a sharper brief to hand over. If you would never build a page, it saves nothing.</p>

<p><strong>Cost to install.</strong> One command, with Node on the machine.</p>

<pre><code>npx skills add nutlope/hallmark</code></pre>

<p><strong>The catch.</strong> It is in <code>references/assets.md</code>, the file the skill loads when a page needs an image. There is a placeholder ladder with five tiers, and the file says skipping tiers is "the slop move." Tier one is Hallmark's own imagery kit. Tier two is hand built SVG. Tier three is Picsum, for a generic photo slot. Tier four is Unsplash Source, <code>https://source.unsplash.com/&lt;w&gt;x&lt;h&gt;/?&lt;keywords&gt;</code>, and the use case written next to it is food, travel, portrait, real product.</p>

<p>That is the tier that answered 503 nine times out of nine, from 13:25:07 to 13:25:49 UTC, and once more in the snapshot window.</p>

<p>Think about which briefs reach tier four. Not the SaaS landing page, which the kit covers. The restaurant, the travel agency, the cast page, the product launch: exactly the pages where a photograph of the subject is the point. Those are the ones that come back with empty image slots. Nothing in the code looks wrong, because the address is well formed. It shows up in the browser.</p>

<p>The fix is cheap once you know it. Tell the agent before it starts that photo slots use your own files, or tier five, a local placeholder checked into the project. The skill itself already insists every placeholder carries a comment with the target size and routes through one constant, so swapping them later is one edit. That part is well designed.</p>

<p>I do not know why the service is down, and I am not going to guess in print. What I can say is what I looked for: in the most recent 100 issues and pull requests the API returned for the repository, none mentions Unsplash, 503 or placeholders. The last commit that touched <code>assets.md</code> is from May 26.</p>

<p><strong>Verified.</strong> September 17, 2026, 13:30 UTC. 28,759 stars, 1,480 forks, 47 open issues, MIT with a LICENSE file, last push August 6 at 16:19 UTC, repository created April 27, 2026, not archived. <code>SKILL.md</code> declares version 1.1.0. The live gallery answered 200. The 503s are mine, made with <code>curl</code>, and the tier table was read in <code>assets.md</code> as served in that window.</p>

<h2>2. wjs-syncing-multicam and wjs-editing-multicam</h2>

<p>Two skills that line up several cameras of the same event by their audio, then cut them into one file.</p>

<p><strong>Link.</strong> <a href="https://github.com/jianshuo/claude-skills" target="_blank" rel="noopener">github.com/jianshuo/claude-skills</a>, engine at <a href="https://github.com/jianshuo/polysync" target="_blank" rel="noopener">github.com/jianshuo/polysync</a></p>

<p><strong>What it does.</strong> The sync skill takes a reference camera and any number of other sources, a second camera, a phone, a separate audio recorder, and finds the time offset of each one. It compares the loudness envelope of the sound rather than the raw waveform, which is the right call: two microphones in the same room sound nothing alike, but they hear the same sentences get loud and quiet at the same moments. It checks for clock drift across the recording, it automatically picks the loudest audio track so a camera with a dead track one does not sync against silence, and it has a mode for a recorder that only covers the middle of the session. Then it writes a small <code>.sync.json</code> file next to each original and never touches the footage. No re-encoded copies. The edit skill reads those files and renders a single MP4 with hard cuts, or cuts with a picture in picture corner.</p>

<p>Both skills say, in their first section, that they no longer ship their own scripts. The work is done by <code>polysync</code>, a Python package by the same author, installed from PyPI.</p>

<p><strong>Who it is for.</strong> The editor who gets a podcast shoot with two cameras and a Zoom recording and has to line the three up before anyone can start cutting.</p>

<p><strong>What it saves.</strong> The substitution is the manual sync: dragging clips on a timeline until the clap or the first word lands on top of itself, then doing it again for every source. On three sources that is a short job. On a long session with a recorder that started late and a camera that drifts, it is the part of the day nobody bills for.</p>

<p><strong>Cost to install.</strong> Three commands, plus ffmpeg and ffprobe on the path.</p>

<pre><code>git clone https://github.com/jianshuo/claude-skills.git
cp -r claude-skills/wjs-syncing-multicam claude-skills/wjs-editing-multicam ~/.claude/skills/
python3 -m pip install -U polysync</code></pre>

<p><strong>The catch.</strong> The edit skill describes itself in its first line as "the cam with the loudest mic each second wins." That is one of two modes, and it is not the default.</p>

<p>I read <code>autoedit.py</code> in the polysync source. The <code>--mode</code> flag defaults to <code>rotation</code>. In rotation mode the length of each shot is drawn by a random number generator, seeded with 42, somewhere between 8 and 15 seconds. The audio decides only which camera the cut goes to next. The mode that actually follows whoever is talking is <code>greedy</code>, and you have to ask for it. The skill does document both modes further down, under "Brainstorm before running", so this is not hidden. It is just not what the first line tells you, and the first line is what makes Claude pick the skill.</p>

<p>Two more things decide how you use it. The decision list works in whole seconds, one value per second of reference time, so cuts land on second boundaries and never on the syllable. And the same skill file admits, under "Editing quality", that with close microphones that bleed into each other the loudness score keeps choosing the loudest mic even when the other person is talking, and that the fixes are "applied by hand on the EDL." That EDL is a JSON file only polysync's own renderers read. The command line has five commands, <code>sync</code>, <code>verify</code>, <code>edit</code>, <code>render-cuts</code> and <code>render-pip</code>, and none of them writes a file an editing program imports.</p>

<p>My reading after the source: install it for the sync, which is careful work with a verification step built in, and treat the automatic cut as a rough to watch before anyone else does.</p>

<p>One number disagrees with itself and it matters before a shoot rather than after. The sync skill says a 75 minute 4K shoot from three cameras is "60+ GB". The polysync README, same author, same example, says "250+ GB". Both can be true, because the answer is the codec, not the camera. If you are buying the drive the week before, it is worth seeing <a href="https://axenworks.com/how-many-hours-of-video-can-1tb-hold/" target="_blank" rel="noopener">what a terabyte holds at each format</a> instead of trusting either figure.</p>

<p><strong>Verified.</strong> September 17, 2026, 13:30 UTC. The skills repository: 129 stars, 21 forks, 1 open issue, MIT, last push August 20 at 17:07 UTC, created May 11, 2026, not archived. Its README says it is mirrored automatically from the author's own skills folder by a hook, so it changes when he edits. polysync: 0 stars, 2 forks, MIT, last push May 25 at 16:37 UTC. Its whole commit history is four commits on May 25, and PyPI lists 0.1.0, 0.2.0 and 0.3.0, all uploaded that same day. The source on GitHub declares 0.3.0, matching PyPI. The README's status line still says "Beta (0.1)", and its install line still says "once published", which is the only stale part I found.</p>

<h2>3. Frontend Slides</h2>

<p>Builds presentations as single HTML files, and converts PowerPoint files into them.</p>

<p><strong>Link.</strong> <a href="https://github.com/zarazhangrui/frontend-slides" target="_blank" rel="noopener">github.com/zarazhangrui/frontend-slides</a></p>

<p><strong>What it does.</strong> Instead of asking you to describe a look in words, it renders a few title slides in different styles and lets you point at one. One comes from a set of twelve presets, at least one from a pack of bold templates, and one is a wildcard. Then it builds the deck as one HTML file with inline CSS and JavaScript, no framework and no build step, and adds in-browser text editing after the first draft. The template gallery in the README is large enough to judge the taste before installing anything.</p>

<p><strong>Who it is for.</strong> The director writing a treatment for a pitch on Thursday who wants it to look like a piece of work and not like a corporate template.</p>

<p><strong>What it saves.</strong> The layout hours of a treatment deck. The writing and the reference frames are still yours.</p>

<p><strong>Cost to install.</strong> Two messages inside Claude Code, sent separately, as the README insists.</p>

<pre><code>/plugin marketplace add https://github.com/zarazhangrui/frontend-slides
/plugin install frontend-slides@frontend-slides</code></pre>

<p><strong>The catch.</strong> It is in what "share" means, and a treatment is the kind of document where that matters.</p>

<p>When the deck is done, the skill asks whether you want to share it, and offers two routes. The first is <code>scripts/deploy.sh</code>. Its own header says it "deploys the slide deck to a public URL", and the command inside runs Vercel with <code>--yes --prod</code>. The skill file adds that the link "stays live until the user takes it down", and that redeploying overwrites the same address. For a talk, perfect. For a treatment with an unreleased campaign in it, a public production URL that lives until you remember it is a decision, and it should be made by you before you say yes, not after.</p>

<p>The second route is <code>scripts/export-pdf.sh</code>, and I read it. It opens each slide in a headless browser, takes a 1920 by 1080 PNG screenshot, and wraps the screenshots into a PDF. So the PDF is pictures of slides. The text cannot be selected or searched, and the skill warns that an eighteen slide deck comes out at about 20 MB, with a <code>--compact</code> flag that drops to 1280 by 720.</p>

<p>And the PowerPoint road runs one way. The package has three scripts: one that extracts content from a .pptx, the deploy script and the PDF script. Nothing writes a .pptx. If the agency on the other side needs to edit your deck in PowerPoint, this is the wrong tool, and it is better to know that before the style selection than after.</p>

<p><strong>Verified.</strong> September 17, 2026, 13:30 UTC. 29,445 stars, 2,318 forks, 68 open issues, MIT, last push June 23 at 20:08 UTC, repository created January 28, 2026, not archived. The deploy flags were read in <code>deploy.sh</code>, the screenshot method in <code>export-pdf.sh</code>, and the file size warning in <code>SKILL.md</code>, all as served in that window.</p>

<h2>4. shuohao-skills</h2>

<p>Five skills that turn a novel into production material for a vertical short drama: outline, character bible, art bible, script and storyboard.</p>

<p><strong>Link.</strong> <a href="https://github.com/eternityspring/shuohao-skills" target="_blank" rel="noopener">github.com/eternityspring/shuohao-skills</a></p>

<p><strong>What it does.</strong> It is a pipeline with a clear order of authority, stated in one line: the outline settles the structure, script, scenes and characters iterate together, and the storyboard only outputs and makes no new decisions. The storyboard stage splits each episode into segments of fifteen seconds or less, the length of one video generation, and each segment into cuts of two to five seconds, with a hard check on both. The script stage estimates episode duration from reading speed instead of guessing. Every skill ships a self test that calls no model and costs nothing, and the reports render in English with <code>--lang en</code>.</p>

<p><strong>Who it is for.</strong> The showrunner of a vertical micro drama who has the rights to a book and needs a writers' room document set before the first generation.</p>

<p><strong>What it saves.</strong> The substitution is the pre production binder: the character sheets, the prop list, the scene by scene breakdown that a coordinator would otherwise build in a spreadsheet. The rights to the book are not in any skill, and neither is the judgment about which chapters survive.</p>

<p><strong>Cost to install.</strong> Three commands, and Node 18 or newer.</p>

<pre><code>git clone https://github.com/eternityspring/shuohao-skills.git
cd shuohao-skills
./scripts/install.sh</code></pre>

<p><strong>The catch.</strong> The pictures in the README were made by a different agent than the one you are probably using.</p>

<p>The gallery shows character sheets, set sheets and keyframes, captioned as "actually generated by the skill." Now read the image step inside the skill files. In <code>novel-characters</code>, <code>novel-art</code> and <code>novel-storyboard</code>, image generation runs only through the built in image tool of OpenAI's codex CLI. The files say, in plain words, that without codex the whole step is skipped and you receive only the prompts, and that they deliberately do not use the codex fallback that needs an OpenAI API key. Run this in Claude Code with no codex installed and you get every document in the gallery except the images.</p>

<p>The video prompts have an address too. The storyboard writes one prompt per segment in the structure of MiniMax H3, following that model's published method, down to the alignment line and the cut timestamps. If your generations run on Seedance or Kling, the segment and cut timing carries over, and the prompt text needs rewriting for the model you actually use.</p>

<p>One line from the English README belongs here as well, because it decides the language of the binder: the skills are Chinese first, and the character skill produces Chinese profiles even from an English novel, with a validator that rejects English in those fields.</p>

<p><strong>Verified.</strong> September 17, 2026, 13:30 UTC. 3,514 stars, 476 forks, 1 open issue, Apache 2.0 with a LICENSE file, last push September 14 at 00:50 UTC, repository created August 6, 2026, not archived. The codex requirement was read in the three <code>SKILL.md</code> files named above, and the language note in <code>README.en.md</code>. The README states the project was only tested on macOS with Node 24.</p>

<h2>5. world-film</h2>

<p>Mine. The same continuous fly through the world generation as scroll-world, from last week, but the deliverable is one film instead of a website.</p>

<p><strong>Link.</strong> <a href="https://openyourais.com/skills/">openyourais.com/skills</a></p>

<p><strong>What it does.</strong> It interviews you for the subject, the journey through the scenes, the format and the audio plan, generates one still per scene as the storyboard, and stops. No video is generated until the whole storyboard is approved. Then it renders camera clips where every clip starts from the actual last frame of the previous one, extracted with ffmpeg, so the camera reads as one take with no cuts. A Python assembler normalizes the clips, joins them, checks every seam and lays one continuous music bed or voiceover over the whole film. There is a table that turns target duration into scene count, because in a film, unlike a scroll page, time is fixed.</p>

<p><strong>Who it is for.</strong> The brand team that wants a one take fly through of their world for Reels and YouTube and has no 3D department.</p>

<p><strong>What it saves.</strong> The substitution is a previs or 3D animation pass for a continuous camera move. If that is the alternative on your desk, this replaces it with a generation budget and an approval gate. If the alternative is a normal edit of existing footage, it saves nothing and costs credits.</p>

<p><strong>Cost to install.</strong> One command, plus an authenticated Higgsfield CLI, ffmpeg, ffprobe and Python 3.</p>

<pre><code>unzip world-film.zip -d ~/.claude/skills/</code></pre>

<p><strong>The catch.</strong> The README inside the zip says, under "What changed before release": "Nothing. The files went out exactly as they run here." I wrote that as a virtue. Reading the file this week as a stranger would, it is the problem.</p>

<p>The skill still carries the rules of my own studio. Every run is told to live in a <code>human-output/world-film/</code> folder, which is how my projects are organised and means nothing on your machine. The voiceover step defaults to a Brazilian ElevenLabs voice and a script born in Portuguese, and two of the house rules are written in Portuguese inside an otherwise English file. The worst one is the handoff: for end cards and titles, both the skill and <code>references/pipeline.md</code> send you to a skill called <code>novelty</code>. That skill is not in the public library. It lives on my machine and carries private account details. So the step that finishes the film points to a door you do not have.</p>

<p>None of that breaks the generation or the assembly, which are the parts that matter. It does mean you should read Step 6 before running it, and replace the voice, the folder and the title handoff with your own. The credit estimate is also mine and dated: the skill says it observed roughly 40 to 55 credits per video in July 2026 on my plan, and it tells the agent to measure one still and one video before trusting any number, which is the instruction I would keep.</p>

<p><strong>Verified.</strong> September 17, 2026, 13:30 UTC. The zip served at <code>openyourais.com/skills/world-film.zip</code> answered 200 and is byte identical to the file in the site repository. Five files: a README of 867 bytes, a <code>SKILL.md</code> of 16,363 bytes, <code>pipeline.md</code>, <code>prompts.md</code> and <code>assemble.py</code>. The folder, voice and <code>novelty</code> lines were read in that <code>SKILL.md</code> and in <code>pipeline.md</code>. Instructions are in English, with the exceptions above.</p>

<h2>What I did not verify</h2>

<p>This section is permanent. An empty one would mean the checking was lazy.</p>

<p>I did not install or run any of the four GitHub skills. Nothing above is a benchmark I produced.</p>

<p>I did not see Hallmark reach tier four. I know the tier exists, what it points to and what that address answered. How often a real brief sends the agent there, I did not measure.</p>

<p>I did not run polysync on footage. The random dwell, the seed and the one second resolution are read from <code>autoedit.py</code>; I did not watch a cut made with them. I also did not read the two render scripts line by line, only the command line entry point and the decision list builder.</p>

<p>I did not check whether a Vercel deployment made by Frontend Slides can be password protected afterwards from the Vercel dashboard. I reported what the script does, not what the platform allows.</p>

<p>I did not install codex to confirm that the shuohao image step works there. I confirmed that it is the only route written into the skill files.</p>

<p>I did not re-run world-film this week, so the July credit figure stays a July figure.</p>

<p>And every star count above is a photograph, not a fact. That is what the timestamps are for.</p>

<p>Next Monday, five more.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>VERIFICATION NOTE, September 17, 2026.
Every repository number in this article was read by me on September 17, 2026, between 13:30 and 13:31 UTC.
Repository metadata came from the authenticated `gh` CLI, not the public unauthenticated API, which rate limits this machine at 403.
Every link in the article was requested with `curl` in the same window; all returned HTTP 200 except the two addresses discussed in the text, which returned 503 and 302.
The Unsplash Source address was also requested nine times between 13:25:07 and 13:25:49 UTC and returned 503 each time.
The polysync release dates came from the PyPI JSON API and its commit history from the GitHub API, in the same session.
The four GitHub skills were NOT installed or executed on this machine, and the article says so in its own section.
The world-film figures were read out of the zip published at openyourais.com/skills, compared byte for byte with the file in the site repository.</p>
</section>
