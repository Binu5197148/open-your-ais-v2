---
id: "art-190"
title: "Five Claude Skills for Video, and What Each One Leaves to You"
description: "Five Claude skills read from their own files: films made in code, a local FFmpeg kit, a video dissector, a podcast editor and a scroll deck, with limits."
pubDate: "2026-10-12"
toolVersion: "2026-10"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1589976584421-86fda88fa33a?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwzfHxjaW5lbWElMjBjYW1lcmElMjBjbG9zZXVwfGVufDF8MHx8fDE3OTE4MDk5OTJ8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "14 min read"
featured: true
---

<p>Five skills, all for people who cut, score or present moving pictures. Each one does real work and then hands one decision back to you, usually in a file you would not open on a Monday. The first one makes films with no video model at all.</p>

<h2>How I checked</h2>

<p>This is a documentary review, not a hands-on test. I read each repository's own files on October 12, 2026: the README, the <code>SKILL.md</code>, and where the sentence that matters lives deeper, that file too, named in each entry. Stars, forks, licence and last push come from GitHub in one snapshot that morning, between 12:55 and 12:59 UTC. Where a claim depends on one file, the link goes to that file at a fixed commit, so it still says what I quote after the repository moves on.</p>

<p>I did not install or run any of the five. Where I describe behaviour, I read it in a file or in the code, and the author's numbers stay the author's. All five are under the MIT licence. That covers their code, and each entry says what it does not cover.</p>

<h2>1. lemo-opuscar</h2>

<p>A library of film styles, each with a short film the author made entirely in code, and a skill that lets your agent make a new one in that style about your own story.</p>

<p><strong>Link.</strong> <a href="https://github.com/lemomo-ai/lemo-opuscar" target="_blank" rel="noopener">github.com/lemomo-ai/lemo-opuscar</a></p>

<p><strong>What it does.</strong> You name a style and a topic, and the agent directs a film: it writes a treatment, draws every frame with canvas or WebGL code, renders frame by frame, writes an original score from free sample libraries, voices the narration with text to speech (a local engine for English, an online one for Chinese), mixes, and checks loudness and blank frames with FFmpeg at the end. No video generation and no stock footage. The styles go from watercolour and ink wash to woodcut, 1960s spy titles, 16-bit pixel RPG and a 1920s silent film. The README says 43. I counted the style folders: 44, one of which is the empty template, so 43 is right. The <a href="https://lemomo-ai.github.io/lemo-opuscar/" target="_blank" rel="noopener">gallery</a> plays every demo film, so you can judge the look before installing anything.</p>

<p><strong>Who it is for.</strong> The motion designer asked for a 45 second explainer in a hand drawn look, with no budget for an illustrator and no wish to fight a video model for consistent frames.</p>

<p><strong>What it saves.</strong> If you would otherwise animate the piece yourself in After Effects, the trade is your own keyframing time against one agent run. I timed neither. The README puts a film at 30 to 60 minutes of agent time "and a fair amount of tokens". If you would not have made the film at all, it saves nothing, it adds a film.</p>

<p><strong>Cost to install.</strong> Two commands inside your terminal, then Node 20 or newer, FFmpeg and Python 3.11 or newer on the machine.</p>

<pre><code>claude plugin marketplace add lemomo-ai/lemo-opuscar
claude plugin install lemo-opuscar@lemolab</code></pre>

<p>The first film downloads the library to <code>~/lemo-opuscar</code>. Voice adds about 0.55 GB plus a 145 MB speech model for checking each line, and each instrument library is 70 to 400 MB, fetched only when the score needs it. The README also says the styles are tuned for one model and other models may not reproduce them.</p>

<p><strong>The catch.</strong> It is in section 4 of <a href="https://github.com/lemomo-ai/lemo-opuscar/blob/227e00adfbbec1ef4b7065a4189c2e1c8be2fef4/core/audio/INSTRUMENTS.md" target="_blank" rel="noopener"><code>core/audio/INSTRUMENTS.md</code></a>, a file written in Chinese and marked must read. Most of the instruments are CC0, free with no conditions. Two are not. The piano is Salamander Grand Piano V3, under CC BY 3.0, and the drum kit is MuldjordKit, under CC BY 4.0. The file says that if your score uses <code>piano</code> or <code>drum_kit</code>, the credit line is required, and it gives the exact English text, written for the film's end credits.</p>

<p>The English guide does say every film lists its material in a <code>CREDITS</code> file. What it does not tell you is that a piano note turns that file into an obligation. For a personal short, fine. For a client spot with no end credits, where that line goes is a conversation to have before the score is written, or the instrument to swap. The end credits are the placement INSTRUMENTS.md chooses; I did not read the original licences of the two sample sets to see what else would satisfy them. The skill can print the lines for you: <code>sampler.py</code> has a <code>credits()</code> function that writes them from the list of instruments you used.</p>

<p><strong>Verified.</strong> October 12, 2026, at commit <code>227e00a</code>. 2,008 stars, 213 forks, MIT, last push October 12. Read: the README, <code>AGENTS.md</code>, <code>TECHNIQUE.md</code>, <code>core/audio/INSTRUMENTS.md</code> and <code>plugin/skills/lemo-opuscar/SKILL.md</code>, and the repository tree for the style count.</p>

<h2>2. ffmpeg-skill</h2>

<p>A local FFmpeg toolkit and skill that gives an agent 42 typed editing tools instead of letting it improvise shell commands.</p>

<p><strong>Link.</strong> <a href="https://github.com/kajisho5/ffmpeg-skill" target="_blank" rel="noopener">github.com/kajisho5/ffmpeg-skill</a></p>

<p><strong>What it does.</strong> The agent follows a fixed order: measure the file first, edit without re-encoding where it can, check the result against the destination's spec, then render a contact sheet and look at it before saying done. The tools cover cutting, joining, silence removal, fitting to a duration and aspect, captions with karaoke highlight, loudness, HDR to SDR, LUTs, multicam and sync with drift correction, plus delivery templates for TikTok, Reels, Shorts, YouTube, X and LinkedIn. The TikTok one, per the README, places captions above the description bar and clear of the like column. Nothing goes to a cloud, no API key, no Python packages. The README says 42 tools; I counted the public scripts in <code>scripts/</code> and got 42. Every tool takes <code>--dry-run</code>, which prints the FFmpeg commands and writes nothing.</p>

<p><strong>Who it is for.</strong> The editor who gets a 40 minute interview at six in the evening and has to deliver a 60 second vertical cut with burned captions at -14 LUFS the same night.</p>

<p><strong>What it saves.</strong> The part of the night spent remembering filter syntax and re-exporting because the captions sat under the like button. If you already have a Premiere preset and a caption template you trust, it replaces those and you gain an agent that can run them on a folder of files.</p>

<p><strong>Cost to install.</strong> One command, and a second one you should not skip.</p>

<pre><code>npx ffmpeg-skill
npx ffmpeg-skill doctor</code></pre>

<p>It needs FFmpeg 5 or newer and Python 3.9 or newer. Re-running the first command refreshes the copy; the README says copies do not update on their own.</p>

<p>Every time flag accepts SMPTE timecode with a frame rate after an <code>@</code>, so a cut list from the edit can go in as it is. The rate you type there decides which frame the cut lands on. Before handing over a list exported at 23.976, <a href="https://axenworks.com/timecode-calculator/" target="_blank" rel="noopener">a timecode calculator</a> shows what the same timecode means in frames and seconds at each rate.</p>

<p><strong>The catch.</strong> It is one paragraph under the quick start of the <a href="https://github.com/kajisho5/ffmpeg-skill/blob/f62e7d0be9e1e442734034fca035852427401c4a/README.md" target="_blank" rel="noopener">README</a>, and it is about the second command. <code>doctor</code> can say <code>ok</code> while the caption tool cannot run. The README's own example is a plain Homebrew FFmpeg on a Mac: <code>ok</code> overall, because nothing every tool needs is missing, but no <code>subtitles</code> filter, so <code>caption.py</code> is unusable. The per tool answer is in <code>doctor --json</code>, in a field called <code>tools</code>, not in the word <code>ok</code>.</p>

<p>If you edit on a Mac with FFmpeg from Homebrew and captions are why you want this, read the <code>tools</code> field for <code>caption</code> before the night you need it. A second line further down is worth knowing too: when a vertical crop has to keep a face, the skill relies on the agent looking at the contact sheet. Nothing in the repository detects a subject, and without that look the default is a plain centre crop.</p>

<p><strong>Verified.</strong> October 12, 2026, at commit <code>f62e7d0</code>, package version 2.8.6. 1,925 stars, 157 forks, MIT, last push October 12. Read: the README, <code>package.json</code>, and the repository tree for the tool count.</p>

<h2>3. dissect</h2>

<p>A skill that takes a link to a video, measures it frame by frame, and writes a blueprint for making a new video in the same format.</p>

<p><strong>Link.</strong> <a href="https://github.com/0xpratzyy/dissect" target="_blank" rel="noopener">github.com/0xpratzyy/dissect</a></p>

<p><strong>What it does.</strong> You paste a link from YouTube, TikTok, Reels, X, Vimeo and others. It downloads the video, finds every cut and transition in frames, measures camera moves, type sizes, palette, the beat grid, loudness and the speech timing of a transcript, and builds labelled frame sheets: the hook at four frames a second, one frame per shot, strips around every transition. Claude then reads those sheets and writes a blueprint: format card, beat sheet, shot table, type spec, a fill in the blanks script and a production plan. A second command scores your own render against the reference out of 100 and tells you which cut lands how many frames late. The author reports one side by side test, 82 against 62 between the new and old blueprint versions. That is their test, not mine. The source video is deleted at the end unless you ask to keep it.</p>

<p><strong>Who it is for.</strong> The creative who receives "make it like this one" with a link, and wants the pacing in numbers instead of a feeling, before writing the treatment.</p>

<p><strong>What it saves.</strong> Scrubbing a reference with a notepad, counting frames between cuts. The README puts the measuring at about three minutes for a 40 second film on a laptop. If your references are one shot mood pieces, there is little to count.</p>

<p><strong>Cost to install.</strong> Two commands inside Claude Code, with uv and FFmpeg on the machine.</p>

<pre><code>/plugin marketplace add 0xpratzyy/dissect
/plugin install dissect@dissect</code></pre>

<p>The first run installs about 600 MB of Python packages and a speech model of 140 MB to 1.5 GB depending on depth, 480 MB at the default.</p>

<p><strong>The catch.</strong> It is in the code, not the README. The README promises that your browser login is used only if you say yes, and the code keeps that promise: cookies are passed only when you approve them. What it does without asking is a different fallback. When a site answers with a block, a 403 or a Cloudflare page, <a href="https://github.com/0xpratzyy/dissect/blob/1b4712726ed92d678a9486aa49c85c26a5aef00b/plugins/dissect/skills/dissect/scripts/dissect.py#L196" target="_blank" rel="noopener">line 196 of <code>dissect.py</code></a> retries the download with yt-dlp's <code>--impersonate chrome</code>, which makes the request look like it came from the Chrome browser. The README covers it in one clause, "falls back to browser impersonation", in the same section that promises to ask before using your login. The question is asked about the login. The impersonation has no question.</p>

<p>I am not telling you what any platform's terms say about that; I did not read them for this column. I am telling you the decision is made by the script, not by you. The README itself ends with "study, don't re-upload". If the reference belongs to a client's competitor, decide before you paste the link, not after the folder exists. One more thing worth knowing: the folder keeps the full timed transcript of the video, while the top comments it saves carry likes and text only, with no commenter names. That last part is a careful choice by the author, and it is in the code.</p>

<p><strong>Verified.</strong> October 12, 2026, at commit <code>1b47127</code>. 26 stars, 9 forks, MIT, created October 1, last push October 11. Read: the README and <code>scripts/dissect.py</code>, the download, comment and output sections.</p>

<h2>4. podcast-to-article</h2>

<p>A skill that turns a podcast or interview transcript into an article organized by topic instead of by speaker.</p>

<p><strong>Link.</strong> <a href="https://github.com/orange2ai/podcast-to-article" target="_blank" rel="noopener">github.com/orange2ai/podcast-to-article</a></p>

<p><strong>What it does.</strong> A transcript runs on who spoke and when; an article runs on what the subject is. The skill walks seven steps: clean the transcript, list the facts, fix one through line, rebuild by topic while quoting the original words, check every name against who actually said it, cut, and run a self check. The README names three ways models fail at this, and calls the third the hardest to spot: the guest's own voice flattened into third person summary. With one guest the rule flips, and it keeps the original wording as intact as possible. The README's English case is honest about its own drafts: a first version with zero direct quotes, sent back three times, and a paragraph attributed to the guest that the host had said.</p>

<p><strong>Who it is for.</strong> The documentary producer who recorded a long interview for research and needs a readable text for the client or the press kit, with the subject still sounding like the subject.</p>

<p><strong>What it saves.</strong> The rewrite of the first AI draft, the one that reads like meeting minutes. The README's own example went from 5,730 to 3,703 Chinese characters. It saves you nothing on the reading: the check script ends by telling you to pick three quotes and compare them with the transcript yourself.</p>

<p><strong>Cost to install.</strong> Two commands: clone, then link the folder into your agent's skills directory. The README's example links it for an agent called Cola and says other agents take the same folder. For Claude Code that is <code>~/.claude/skills/</code>. Python 3 standard library only.</p>

<pre><code>git clone https://github.com/orange2ai/podcast-to-article.git
ln -s "$(pwd)/podcast-to-article" ~/.claude/skills/podcast-to-article</code></pre>

<p><strong>The catch.</strong> The English README says the skill works on panels and interviews "in Chinese or English", and for the transcript that is true: the cleaning script reads SRT, VTT and text in any language. The self check is another matter. <a href="https://github.com/orange2ai/podcast-to-article/blob/efc43919962e8356058057c4b5fd32c57876e6b7/scripts/check_style.py#L100" target="_blank" rel="noopener">Line 100 of <code>check_style.py</code></a> counts Chinese characters, and below 200 it stops with a message, in Chinese, that there are too few characters to measure anything. Its rules are Chinese phrases, and its baselines are per thousand Chinese characters.</p>

<p>So an article in English or Portuguese gets the seven step method, and the last step does not run. Even the English case in the README was written up as a Chinese article. The method is the valuable part and it travels. The automatic check does not, so the reading you were going to skip is the check.</p>

<p><strong>Verified.</strong> October 12, 2026, at commit <code>efc4391</code>. 166 stars, 9 forks, MIT, created October 7, last push October 8. Read: both READMEs and <code>scripts/check_style.py</code> in full.</p>

<h2>5. Scrolline</h2>

<p>A presentation engine and skill where a deck is one continuous timeline you scrub with the mouse wheel, and the same timeline renders to MP4.</p>

<p><strong>Link.</strong> <a href="https://github.com/gongnyang/awesome-html-scrolline-deck" target="_blank" rel="noopener">github.com/gongnyang/awesome-html-scrolline-deck</a></p>

<p><strong>What it does.</strong> You write the beats of a talk in a <code>deck.yaml</code> file, and Scrolline lays them on one GSAP timeline on one stage. There are no slide changes: a bar in one chart travels into its place in the next beat, a date slides along a time rail, a camera dives into a figure. Six concepts set the grammar, from a horizontal time rail to an infinite zoom, a camera flythrough of a map and kinetic type. Arrow keys jump between stops, <code>b</code> blacks out the screen, and one command exports the whole path as a 1920 by 1080 MP4 through HyperFrames. Real data decks must cite a source for every number, and invented companies have to say so on screen.</p>

<p><strong>Who it is for.</strong> The director pitching a treatment or a year of results to a client in a room, who wants the deck to move like a title sequence and wants the same thing as a video file for whoever missed the meeting.</p>

<p><strong>What it saves.</strong> Building the pitch twice, once as slides and once as an animated video. If your pitches are a PDF sent by email, it saves nothing and costs you a Node project.</p>

<p><strong>Cost to install.</strong> Three commands to get it running, a fourth to make it a skill, and Node 22 or newer.</p>

<pre><code>git clone https://github.com/gongnyang/awesome-html-scrolline-deck.git
cd awesome-html-scrolline-deck && npm install
npm run dev
ln -s "$PWD" ~/.claude/skills/scrolline-deck</code></pre>

<p>The README also tells you to <code>git checkout v2</code>. On October 12 the main branch and the <code>v2</code> branch pointed at the same commit, so that step changes nothing today.</p>

<p><strong>The catch.</strong> It is the last line of the install, and it is the whole repository. The skill is not a folder inside the project: <code>ln -s "$PWD"</code> links the entire checkout into your skills directory, examples included. At this commit the repository holds 4,808 files and about 143 MiB, and 4,321 of those files are images, mostly the frame sequences of the six example decks. The agent does not load them into its context, so this is weight on disk and in every update, not cost per message.</p>

<p>What does reach the agent is the <a href="https://github.com/gongnyang/awesome-html-scrolline-deck/blob/d17200400a6b9cd7e1e42929e4edef5b0f69c1cc/SKILL.md" target="_blank" rel="noopener"><code>SKILL.md</code></a>, and it is written in Korean, as are the six example decks. The README is in English. Your deck can be in English, the brief asks for the language. Video inside a deck needs your own Pexels or Pixabay key, kept in a git ignored <code>.env</code>, and the project blocks a commit if one leaks.</p>

<p><strong>Verified.</strong> October 12, 2026, at commit <code>d172004</code>. 90 stars, 10 forks, MIT, last push October 8. Read: the README, the opening of <code>SKILL.md</code>, the branch list, and the repository tree for the file and image counts.</p>

<h2>What I did not verify</h2>

<p>I did not install or run any of the five. Every behaviour above comes from a file or from code I read.</p>

<p>I did not test the Homebrew claim in ffmpeg-skill's README on a Mac. It is their statement about a FFmpeg build, and builds change.</p>

<p>I did not reproduce dissect's 82 against 62, or podcast-to-article's before and after counts. Both are the authors' own measurements.</p>

<p>I did not read any platform's terms of service about downloading with yt-dlp or with browser impersonation, and I make no claim about them.</p>

<p>I read lemo-opuscar's instrument licences in the table and section 4 of the Chinese file. I did not open each sample library's own licence file, which the README says ships with each download.</p>

<p>I read the opening of Scrolline's Korean <code>SKILL.md</code>, not the whole file, and I did not read GSAP's licence terms, which the README names as GreenSock's standard no charge license.</p>

<p>I searched for discussion of these five on Reddit and Hacker News from the last two months and found none. These are new repositories: one was created eleven days ago and another five. Stars move by the hour, and the numbers above carry the morning they were read.</p>

<p>Edition 8 is due next Monday.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Method: a documentary review of each repository's own files, read on October 12, 2026, with one GitHub snapshot between 12:55 and 12:59 UTC. None of the five skills was installed or run.</p>
<ul>
<li><a href="https://github.com/lemomo-ai/lemo-opuscar" target="_blank" rel="noopener">lemo-opuscar</a>: README, <code>AGENTS.md</code>, <code>TECHNIQUE.md</code>, <a href="https://github.com/lemomo-ai/lemo-opuscar/blob/227e00adfbbec1ef4b7065a4189c2e1c8be2fef4/core/audio/INSTRUMENTS.md" target="_blank" rel="noopener"><code>core/audio/INSTRUMENTS.md</code> at 227e00a</a>, plugin <code>SKILL.md</code>.</li>
<li><a href="https://github.com/kajisho5/ffmpeg-skill" target="_blank" rel="noopener">ffmpeg-skill</a>: <a href="https://github.com/kajisho5/ffmpeg-skill/blob/f62e7d0be9e1e442734034fca035852427401c4a/README.md" target="_blank" rel="noopener">README at f62e7d0</a>, <code>package.json</code>.</li>
<li><a href="https://github.com/0xpratzyy/dissect" target="_blank" rel="noopener">dissect</a>: README, <a href="https://github.com/0xpratzyy/dissect/blob/1b4712726ed92d678a9486aa49c85c26a5aef00b/plugins/dissect/skills/dissect/scripts/dissect.py" target="_blank" rel="noopener"><code>dissect.py</code> at 1b47127</a>.</li>
<li><a href="https://github.com/orange2ai/podcast-to-article" target="_blank" rel="noopener">podcast-to-article</a>: README, English README, <a href="https://github.com/orange2ai/podcast-to-article/blob/efc43919962e8356058057c4b5fd32c57876e6b7/scripts/check_style.py" target="_blank" rel="noopener"><code>check_style.py</code> at efc4391</a>.</li>
<li><a href="https://github.com/gongnyang/awesome-html-scrolline-deck" target="_blank" rel="noopener">Scrolline</a>: README, <a href="https://github.com/gongnyang/awesome-html-scrolline-deck/blob/d17200400a6b9cd7e1e42929e4edef5b0f69c1cc/SKILL.md" target="_blank" rel="noopener"><code>SKILL.md</code> at d172004</a>.</li>
</ul>
</section>
