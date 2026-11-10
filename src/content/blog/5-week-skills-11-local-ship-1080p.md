---
id: "art-195"
title: "Local, Ship, 1080p: The Small Words Inside This Week's Claude Skills"
description: "A private transcriber, a Higgsfield prompt library, a 3D web kit, a YouTube research workbook and a critic loop for commercials, each with one word to read twice."
pubDate: "2026-11-09"
toolVersion: "2026-11"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1543235074-4768b5c2233c?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw0fHxjaW5lbWElMjBjYW1lcmElMjBjbG9zZXVwfGVufDF8MHx8fDE3OTQyMTkyNTd8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "14 min read"
featured: true
---

<p>The first skill I opened this week did not make the list. It is a talking-head editing plugin with 3,195 stars, and near the top of its README, in bold, the author writes that <a href="https://github.com/Agentchengfeng/chengfeng-videocut-skills/blob/a33b43e08c34fa8beeb5e78498e852f4e80975a5/README.md#L11" target="_blank" rel="noopener">the new skill requires a runtime version the current public download does not meet</a>. The plugin asks for 0.5.9 or later. The public runtime is 0.4.11. If the capability is missing, the skill reports it and stops.</p>

<p>I left it out for a plainer reason: it installs as a Codex plugin, and this column is about Claude skills. That warning was still the best sentence I read all week, because the author drew the line around their own label before anyone installed anything.</p>

<p>The five below have labels too: local, snapshot, 1080p, public, ship. Each word has a working definition inside the repository, and yours may be different.</p>

<h2>How I checked</h2>

<p>This is a documentary review, not a hands-on test. I read each repository's own files on November 9, 2026: the README, the <code>SKILL.md</code> and the notice, case study or script where the sentence that matters lives, named in each entry. Stars, forks, licence and last push come from GitHub in one snapshot that morning, at 10:12 UTC. Where a claim depends on one file, the link goes to that file at a fixed commit, so it still says what I quote after the repository moves.</p>

<p>I did not install or run any of the five. Where I describe behaviour, I read it in a file or in the code, and the authors' numbers stay the authors'. All five are under the MIT licence.</p>

<h2>1. audio-tldr</h2>

<p>A skill that transcribes a video, a podcast or a recording on your own computer and turns it into a short digest of key points.</p>

<p><strong>Link.</strong> <a href="https://github.com/AugustusW/audio-tldr-skill" target="_blank" rel="noopener">github.com/AugustusW/audio-tldr-skill</a>, by AugustusW.</p>

<p><strong>What it does.</strong> You give it a URL or a local file. It runs one of four Whisper speech-to-text engines on your machine, stores the transcript in a cache keyed to that source, and has the agent write three to seven takeaways and a summary. Ask for a different angle later and it reads the cached transcript, so nothing is transcribed twice. It also has meeting-minutes and analysis templates, exports SRT and VTT subtitles, and can pull stills at exact timestamps. Before each digest, a model proposes fixes for sound-alike errors and names, and they go into a separate copy with every change listed.</p>

<p><strong>Who it is for.</strong> The assistant editor holding a two-hour director interview who needs a list of usable quotes and an SRT before the first assembly.</p>

<p><strong>What it saves.</strong> The job it replaces is listening through the interview and logging it by hand. If your editing software already transcribes for you, the only thing left to gain is the digest and the re-reading from cache.</p>

<p><strong>Cost to install.</strong> Two commands, after the prerequisites: Python 3.10 or newer (the README warns that macOS's built-in version is too old), <code>ffmpeg</code>, <code>yt-dlp</code> for URLs, and one Whisper engine.</p>

<pre><code>git clone https://github.com/AugustusW/audio-tldr-skill.git
cp -r audio-tldr-skill/skills/audio-tldr ~/.claude/skills/</code></pre>

<p><strong>The catch.</strong> The word is local, and the first line of the README uses it. The Privacy section finishes the sentence. <a href="https://github.com/AugustusW/audio-tldr-skill/blob/124d51678cb1ed95984b3eda687c5085300416d9/README.md#L331" target="_blank" rel="noopener">The audio and video never leave the machine</a>, and that holds. But <a href="https://github.com/AugustusW/audio-tldr-skill/blob/124d51678cb1ed95984b3eda687c5085300416d9/README.md#L335" target="_blank" rel="noopener">the digest phase sends the transcript text to the model</a>, inside your Claude session. On an interview under NDA, the words are the sensitive part.</p>

<p>The same section gives you the two exits: set <code>digest_model: ollama:&lt;model&gt;</code> so the digest runs on your own Ollama server, which the README says trades away some quality, or run the transcription script by itself and keep the text. And clean up. <a href="https://github.com/AugustusW/audio-tldr-skill/blob/124d51678cb1ed95984b3eda687c5085300416d9/README.md#L341" target="_blank" rel="noopener">Transcripts are unencrypted plain text, kept indefinitely by default</a>, and <a href="https://github.com/AugustusW/audio-tldr-skill/blob/124d51678cb1ed95984b3eda687c5085300416d9/README.md#L349" target="_blank" rel="noopener">the digest folder has no clearing or retention mechanism at all</a>. Use <code>--clear</code> when the job closes, and delete the output folder yourself.</p>

<p><strong>Verified.</strong> November 9, 2026, at commit <code>124d516</code>. 43 stars and 4 forks, the smallest repository this week; MIT, created July 18, last push October 13. Read: the README's features, install, privacy and cache sections.</p>

<h2>2. Higgsfield AI Prompt Skill</h2>

<p>A community library of sub-skills that turns a plain request into a prompt written for one specific model on Higgsfield.</p>

<p><strong>Link.</strong> <a href="https://github.com/OSideMedia/higgsfield-ai-prompt-skill" target="_blank" rel="noopener">github.com/OSideMedia/higgsfield-ai-prompt-skill</a>, by OSideMedia. It is not an official Higgsfield product; the README points to Higgsfield's own CLI and skills as separate tools.</p>

<p><strong>What it does.</strong> A root file reads your request and opens the sub-skills it needs: camera language, character consistency, Seedance 2.5 reference roles, Kling Motion Control failures, acting direction, shot lists. What comes out is a prompt. The skill does not generate anything by itself. If you have the Higgsfield CLI or connector, it can check the model's accepted settings and estimate the cost before you submit.</p>

<p><strong>Who it is for.</strong> The director preparing a 30-shot generation day who has to decide, shot by shot, which model and which reference role to use before any credit is spent.</p>

<p><strong>What it saves.</strong> It stands in for reading each model's documentation and for working out why a take failed; the repository includes a list of named Seedance render failures with symptom, mechanism and counter. Whether it saves credits is something only your own log can show.</p>

<p><strong>Cost to install.</strong> One command, and <code>python3</code> for the scripts. The prompts are free; generating with them needs a Higgsfield account and its credits. If you already have a skill folder called <code>higgsfield</code>, the clone will refuse to write there, so pick another path.</p>

<pre><code>git clone https://github.com/OSideMedia/higgsfield-ai-prompt-skill ~/.claude/skills/higgsfield</code></pre>

<p><strong>The catch.</strong> The word is snapshot. <a href="https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/6a6a5dd105d285782dd6992692be4d8b3825ca13/specs/MODEL-SPECS.md#L3" target="_blank" rel="noopener">The model specifications are dated September 26, 2026</a>. The skill's own rule says that <a href="https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/6a6a5dd105d285782dd6992692be4d8b3825ca13/SKILL.md#L84" target="_blank" rel="noopener">a snapshot older than 30 days must be verified against the live schema</a>. On the day I read it, that snapshot was 44 days old, so the fresh install starts past its own limit.</p>

<p>The fix exists and is switched off. <a href="https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/6a6a5dd105d285782dd6992692be4d8b3825ca13/README.md#L303-L312" target="_blank" rel="noopener">A weekly job that catches model changes ships dormant until you store your Higgsfield credentials as a secret in your own GitHub repository</a>. Decide whether your account login belongs in a CI secret. If it does not, run the schema check by hand on the model you are about to pay for. The README also marks Cinema Studio 4.0 as <a href="https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/6a6a5dd105d285782dd6992692be4d8b3825ca13/README.md#L22" target="_blank" rel="noopener">"schema-documented, not yet field-rated"</a>. Treat that section as a map of the settings, with no record yet of what they do in practice.</p>

<p><strong>Verified.</strong> November 9, 2026, at commit <code>6a6a5dd</code>. 877 stars and 146 forks; MIT, created March 8, last push October 25. The repository description says 32 sub-skills, the README says 35, and I counted 35 folders with a <code>SKILL.md</code>; the description is the part that aged. Read: the README, root <code>SKILL.md</code>, <code>specs/MODEL-SPECS.md</code> and the folder listing.</p>

<h2>3. Open 3D Skills</h2>

<p>Eight skills for building 3D and animated websites, plus the checking and recording around them.</p>

<p><strong>Link.</strong> <a href="https://github.com/Moh4696/open-3d-skills" target="_blank" rel="noopener">github.com/Moh4696/open-3d-skills</a>, by exploraX.</p>

<p><strong>What it does.</strong> One skill builds real-time three.js scenes from code, one turns generated clips into a film scrubbed by scroll, one keys clips shot on a flat color into transparent video, one makes a painted character follow the cursor, and one takes a machine apart on screen. The last two are the ones I would reach for first even without a 3D page: <code>site-check</code> shoots a page in Chromium and WebKit at three sizes and fails on blank canvases and broken phone layouts, and <code>frame-capture</code> records any page as frame-exact 60 fps video on a virtual clock.</p>

<p><strong>Who it is for.</strong> The web producer on a launch page who needs a transparent character over a headline, and a clean screen recording of the finished site for the case film.</p>

<p><strong>What it saves.</strong> <code>site-check</code> replaces opening the page in two browser engines at three widths and looking. <code>frame-capture</code> replaces screen recording a page and hoping the frame rate holds. Time saved depends on how often you do those by hand.</p>

<p><strong>Cost to install.</strong> One command for the skills. The scripts then need Node 22.20 or newer, Python 3.9 or newer, <code>pip install -r requirements.txt</code>, Playwright's Chromium and WebKit, and <code>ffmpeg</code>. Four of the eight also need an image and video generation service of your choosing.</p>

<pre><code>npx skills add Moh4696/open-3d-skills</code></pre>

<p><strong>The catch.</strong> The word is 1080p. In the table the agent uses to judge generated clips, <code>motion-assets</code> says <a href="https://github.com/Moh4696/open-3d-skills/blob/53beb899e77f65d50160a3765f36f5ddb8b3c19b/skills/motion-assets/SKILL.md#L41" target="_blank" rel="noopener">"Never upscale a clip and call it 1080p; encode what the model returned"</a>. It is a defensible rule for a page. It also conflicts with how I work: when a model's 1080p tier is too expensive, I generate at 720p and upscale. If that is your pipeline too, say so at the start, or expect the agent to argue with your deliverable.</p>

<p>Two more things to know before you commit to a hero. The transparent version that plays in every browser <a href="https://github.com/Moh4696/open-3d-skills/blob/53beb899e77f65d50160a3765f36f5ddb8b3c19b/skills/alpha-cutout/SKILL.md#L73" target="_blank" rel="noopener">doubles the frame height and costs about 1.3 times the bytes of the color alone, and the skill tells you to ship two widths</a>. Before those two files go on a page, it is worth working out <a href="https://axenworks.com/video-bitrate-calculator/" target="_blank" rel="noopener">what they will weigh at the bitrate you plan to use</a>. And the repository was created on October 31. The README's line that <a href="https://github.com/Moh4696/open-3d-skills/blob/53beb899e77f65d50160a3765f36f5ddb8b3c19b/README.md#L20" target="_blank" rel="noopener">every script was run on real footage</a> is the author's word, and nine days is not long for anyone else to have tested it.</p>

<p><strong>Verified.</strong> November 9, 2026, at commit <code>53beb89</code>. 308 stars and 40 forks; MIT, created October 31, last push November 9. The README says eight skills and I counted eight folders. Read: the README, and the <code>SKILL.md</code> of <code>alpha-cutout</code>, <code>motion-assets</code>, <code>frame-capture</code> and <code>site-check</code>.</p>

<h2>4. youtube-scout</h2>

<p>A skill that takes one topic and writes a spreadsheet of the videos that rank for it, with the channels behind them and what the audience says.</p>

<p><strong>Link.</strong> <a href="https://github.com/AgriciDaniel/youtube-scout" target="_blank" rel="noopener">github.com/AgriciDaniel/youtube-scout</a>, by Daniel Agrici.</p>

<p><strong>What it does.</strong> You type <code>/scout</code> and a topic. It queries the YouTube Data API and writes an <code>.xlsx</code> with a Videos sheet, a Channels sheet and a Summary. Each video gets views per day and views per subscriber, which is where a small channel with a huge hit shows up. With flags it adds top comments, the opening line of each video from its captions, and the moments viewers replay most. It can also append to a research sheet you already keep, dropping duplicates and leaving your manual columns alone.</p>

<p><strong>Who it is for.</strong> The strategist writing a brief who has to show the client, on Thursday, which openings and formats are working in their category.</p>

<p><strong>What it saves.</strong> It replaces opening fifty video pages and copying numbers into a sheet. The Google key takes one setup. After that, a default run of 50 videos uses one search call and three quota units, by the README's count.</p>

<p><strong>Cost to install.</strong> Four commands, plus a free YouTube Data API key from Google Cloud. <code>yt-dlp</code> is only for the caption and download flags.</p>

<pre><code>git clone https://github.com/AgriciDaniel/youtube-scout.git
cd youtube-scout
./install.sh
python3 -m pip install --user openpyxl</code></pre>

<p><strong>The catch.</strong> The word is public. The README sells "everything the public API exposes", and the limit has two sides. The first is your network: <a href="https://github.com/AgriciDaniel/youtube-scout/blob/8edb2b66cb2da969d54ece257d0a81047f5f8c8e/README.md#L161" target="_blank" rel="noopener">YouTube blocks caption downloads per IP after bursts, and the block can last several hours</a>. The script paces itself and stops after one hard failure, but an IP is the whole office if you all sit behind one connection. Run <code>--hooks</code> on a small batch first.</p>

<p>The second is rights. The repository's own notice says that <a href="https://github.com/AgriciDaniel/youtube-scout/blob/8edb2b66cb2da969d54ece257d0a81047f5f8c8e/PUBLISHING_NOTICE.md#L19-L23" target="_blank" rel="noopener">public availability of a video, comment or caption creates no permission to redistribute it, and asks you to publish summaries and links, not bulk copies</a>. That applies to the deck you send a client. The <code>--download</code> flag saves full MP4s of the top videos, so read it next to that notice. Also, the "most replayed" curve is, in the README's words, the closest public proxy for retention. It is not retention, and the deck should not call it that.</p>

<p><strong>Verified.</strong> November 9, 2026, at commit <code>8edb2b6</code>. 72 stars and 11 forks; MIT, created September 11, last push October 30. The README says 48 columns per video. The script's list has 65 names, and 17 of them are left out of a new workbook when blank, which gives 48. Read: the README, <code>SKILL.md</code>, <code>PUBLISHING_NOTICE.md</code> and the column lists in <code>scripts/scout.py</code>.</p>

<h2>5. Motion Video Kit</h2>

<p>A skill for making 15 to 40 second commercials for real businesses, built around critics that never saw the work being made.</p>

<p><strong>Link.</strong> <a href="https://github.com/echris6/motion-video-kit" target="_blank" rel="noopener">github.com/echris6/motion-video-kit</a>, by echris6.</p>

<p><strong>What it does.</strong> It starts from a brief that lists what is provably true and what must never be claimed. The builder <a href="https://github.com/echris6/motion-video-kit/blob/e4b1c0004080fe6a0deb883631bad5eba1e5f339/business-motion-film/SKILL.md#L26" target="_blank" rel="noopener">never grades its own work</a>: every component and every full cut goes to a fresh agent that sees only the render, the brief and the references, and a new one verifies the fixes. It ships ready-made critic prompts, scripts that measure frozen time and loudness, written notes on 28 launch films with links only, and three case studies round by round. The loop is credited in its own file as adapted from the Gauntlet Loop idea.</p>

<p><strong>Who it is for.</strong> The producer at a small studio delivering spec ads for local service businesses, with no second pair of eyes in the room.</p>

<p><strong>What it saves.</strong> I have no figure for this one. A fresh critic per review is model usage you pay for, and what it buys is the first rounds of notes before a person has to watch.</p>

<p><strong>Cost to install.</strong> Two commands. The scripts need <code>ffmpeg</code>. The README says it works best with HyperFrames for rendering, and that the prompts and checks do not depend on it.</p>

<pre><code>git clone https://github.com/echris6/motion-video-kit.git
cp -r motion-video-kit/business-motion-film ~/.claude/skills/</code></pre>

<p><strong>The catch.</strong> The word is ship, and the kit is the one that tells you. In its third case study, <a href="https://github.com/echris6/motion-video-kit/blob/e4b1c0004080fe6a0deb883631bad5eba1e5f339/business-motion-film/references/case-study-home-display.md#L5" target="_blank" rel="noopener">the critics said SHIP at version 2, and the client asked for changes over seven more versions, almost all about sound and pacing</a>. <a href="https://github.com/echris6/motion-video-kit/blob/e4b1c0004080fe6a0deb883631bad5eba1e5f339/business-motion-film/references/case-study-home-display.md#L28-L33" target="_blank" rel="noopener">The list of what the client caught</a> is the most useful page in the repository: text over text because the critics had checked settled frames and never the middle of a crossfade, a label that read "Open" while the number counted down, a film that went from 12 sound effects to 28.</p>

<p>So budget for the rounds after the machine approves, and spend your own attention on sound and on the frames in between. One smaller thing: the price anchors in the business playbook are <a href="https://github.com/echris6/motion-video-kit/blob/e4b1c0004080fe6a0deb883631bad5eba1e5f339/README.md#L58" target="_blank" rel="noopener">a September 2026 snapshot of public US listings</a>, and the README asks you to verify them again before quoting anyone.</p>

<p><strong>Verified.</strong> November 9, 2026, at commit <code>e4b1c00</code>. 1,376 stars and 122 forks, the largest repository this week; MIT, created September 27, last push October 14. The notes file promises 28 films and I counted 28 numbered entries. Read: the README, <code>SKILL.md</code>, the opening of <code>references/gauntlet.md</code> and the home-display case study.</p>

<h2>What I did not verify</h2>

<p>I did not install or run any of the five. Every behaviour above comes from a README, a notice, a skill file or source code I read.</p>

<p>I did not measure audio-tldr's transcription quality or how much a small local model loses on the digest. I read the Higgsfield skill's root file and its specifications, and not the 35 sub-skills one by one, so I cannot say how good any given prompt is. I did not run Open 3D Skills' keyer on a real clip. I did not hit YouTube's caption block, so its duration is the README's. In Motion Video Kit, the client's notes are the author's account of their own project.</p>

<p>No piece from my own skill library this week: the ones left either already ran here or are still waiting on a rights review.</p>

<p>The Hacker News search did not answer from here, and I did not read Reddit, so I cannot say whether any of the five was discussed. Stars move by the hour, and the numbers above carry the morning they were read.</p>

<h2>One rule for this week</h2>

<p>Before a client file goes through a new skill, search its README for the word on the badge and read the sentence that follows it.</p>

<p>Edition 12 is due next Monday.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Method: a documentary review of each repository's own files, read on November 9, 2026, with one GitHub snapshot at 10:12 UTC. None of the five skills was installed or run.</p>
<ul>
<li><a href="https://github.com/AugustusW/audio-tldr-skill" target="_blank" rel="noopener">audio-tldr</a>: <a href="https://github.com/AugustusW/audio-tldr-skill/blob/124d51678cb1ed95984b3eda687c5085300416d9/README.md" target="_blank" rel="noopener">README at 124d516</a>.</li>
<li><a href="https://github.com/OSideMedia/higgsfield-ai-prompt-skill" target="_blank" rel="noopener">Higgsfield AI Prompt Skill</a>: <a href="https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/6a6a5dd105d285782dd6992692be4d8b3825ca13/README.md" target="_blank" rel="noopener">README at 6a6a5dd</a>, <a href="https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/6a6a5dd105d285782dd6992692be4d8b3825ca13/SKILL.md" target="_blank" rel="noopener">root <code>SKILL.md</code></a>, <a href="https://github.com/OSideMedia/higgsfield-ai-prompt-skill/blob/6a6a5dd105d285782dd6992692be4d8b3825ca13/specs/MODEL-SPECS.md" target="_blank" rel="noopener"><code>specs/MODEL-SPECS.md</code></a>.</li>
<li><a href="https://github.com/Moh4696/open-3d-skills" target="_blank" rel="noopener">Open 3D Skills</a>: <a href="https://github.com/Moh4696/open-3d-skills/blob/53beb899e77f65d50160a3765f36f5ddb8b3c19b/README.md" target="_blank" rel="noopener">README at 53beb89</a>, <a href="https://github.com/Moh4696/open-3d-skills/blob/53beb899e77f65d50160a3765f36f5ddb8b3c19b/skills/motion-assets/SKILL.md" target="_blank" rel="noopener"><code>motion-assets</code></a>, <a href="https://github.com/Moh4696/open-3d-skills/blob/53beb899e77f65d50160a3765f36f5ddb8b3c19b/skills/alpha-cutout/SKILL.md" target="_blank" rel="noopener"><code>alpha-cutout</code></a>.</li>
<li><a href="https://github.com/AgriciDaniel/youtube-scout" target="_blank" rel="noopener">youtube-scout</a>: <a href="https://github.com/AgriciDaniel/youtube-scout/blob/8edb2b66cb2da969d54ece257d0a81047f5f8c8e/README.md" target="_blank" rel="noopener">README at 8edb2b6</a>, <a href="https://github.com/AgriciDaniel/youtube-scout/blob/8edb2b66cb2da969d54ece257d0a81047f5f8c8e/PUBLISHING_NOTICE.md" target="_blank" rel="noopener"><code>PUBLISHING_NOTICE.md</code></a>, <a href="https://github.com/AgriciDaniel/youtube-scout/blob/8edb2b66cb2da969d54ece257d0a81047f5f8c8e/scripts/scout.py#L81-L115" target="_blank" rel="noopener">column lists in <code>scripts/scout.py</code></a>.</li>
<li><a href="https://github.com/echris6/motion-video-kit" target="_blank" rel="noopener">Motion Video Kit</a>: <a href="https://github.com/echris6/motion-video-kit/blob/e4b1c0004080fe6a0deb883631bad5eba1e5f339/README.md" target="_blank" rel="noopener">README at e4b1c00</a>, <a href="https://github.com/echris6/motion-video-kit/blob/e4b1c0004080fe6a0deb883631bad5eba1e5f339/business-motion-film/references/case-study-home-display.md" target="_blank" rel="noopener">home-display case study</a>, <a href="https://github.com/echris6/motion-video-kit/blob/e4b1c0004080fe6a0deb883631bad5eba1e5f339/business-motion-film/references/gauntlet.md" target="_blank" rel="noopener"><code>references/gauntlet.md</code></a>.</li>
<li><a href="https://github.com/Agentchengfeng/chengfeng-videocut-skills/blob/a33b43e08c34fa8beeb5e78498e852f4e80975a5/README.md" target="_blank" rel="noopener">chengfeng-videocut-skills README at a33b43e</a>, the skill left out in the opening.</li>
</ul>
</section>
