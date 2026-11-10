---
id: "art-194"
title: "Claude Skills That Clone Motion, Edit Decks, Run YouTube"
description: "Week 10 of 5 Week Skills: a motion cloner, an Office CLI, a diagram kit, a YouTube CLI and a short-drama suite, and what each one does after it says done."
pubDate: "2026-11-02"
toolVersion: "2026-11"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1714201623945-0079e2150240?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw1fHxmaWxtJTIwcmVlbCUyMDM1bW0lMjBhbmFsb2d8ZW58MXwwfHx8MTc5MzYzNDM3Mnww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "15 min read"
featured: true
---

<p>Here is a question I could not answer this week. An agent records an animation from someone else's site, rebuilds it in your code, films its own copy the same way and keeps adjusting, for up to five rounds, until the two recordings pass a comparison of timing, easing and pixels. On its strictest setting the pass mark is 2 percent mean mismatch, and the examples in its README report differences as small as 0.03 percent of pixels, by the author's own count. What you hand the client after that: is it a reference, or is it a copy? One of this week's skills does exactly this, and its README does not pretend to settle it either. It says the fonts, images and code still belong to their owners, and leaves the rest to you.</p>

<p>That sentence sits near the end, under the word Limits. Every skill this week has its own version of it: something that happens after the tool reports that it is finished. A file that reaches the disk a few seconds later. A video job that may already be billed when the process dies. A diagram that calls a font server each time someone opens it. A login token left in whichever folder you happened to be in.</p>

<h2>How I checked</h2>

<p>This is a documentary review, not a hands-on test. I read each repository's own files on November 2, 2026: the README, the <code>SKILL.md</code>, and the FAQ, privacy notice or source file where the sentence that matters lives, named in each entry. Stars, forks, licence and last push come from GitHub in one snapshot that afternoon, between 15:43 and 15:46 UTC. Where a claim depends on one file, the link goes to that file at a fixed commit, so it still says what I quote after the repository moves on.</p>

<p>I did not install or run any of the five. Where I describe behaviour, I read it in a file or in the code, and the authors' numbers stay the authors'. Three of the five are under the MIT licence and two under Apache 2.0.</p>

<h2>1. reanimate</h2>

<p>A skill that records an animation you like, rebuilds it in your project, and measures the copy against the original frame by frame until they match.</p>

<p><strong>Link.</strong> <a href="https://github.com/NiazMorshed2007/reanimate" target="_blank" rel="noopener">github.com/NiazMorshed2007/reanimate</a>, by Niaz Morshed.</p>

<p><strong>What it does.</strong> You point it at a live page, a screen recording, an MP4, a GIF or a Lottie file, and say what you want: the hero entrance, the loader between seconds 3 and 5, the card that tilts on hover. It films the reference in a headless browser at a fixed size and frame rate, writes a spec with one row per element and property (start, duration, easing, stagger), builds the animation with whatever your project already uses, such as CSS, Framer Motion, GSAP or three.js, then films its own copy the same way and compares the two. It fixes the biggest difference and films again, usually two to five rounds, and whatever still does not match after five is listed in its report with the reason. By default it matches the motion and leaves the look to you. Say "match it exactly" and it goes after the fonts, colours, spacing and assets too.</p>

<p><strong>Who it is for.</strong> The motion designer who receives a link and the brief "make our site's intro move like this one", and has to turn it into code a developer can ship, instead of a reference video nobody can measure.</p>

<p><strong>What it saves.</strong> I did not measure it. The README says most of its own examples were cloned by an agent in 30 to 90 minutes each; that is the authors' number. If you would rebuild a reference animation by eye, the job it replaces is the one where you scrub a recording frame by frame and guess the easing.</p>

<p><strong>Cost to install.</strong> One command. It needs Bun 1.1 or newer on macOS or Linux, and the first run downloads a static ffmpeg and Playwright's Chromium, about 250 MB together. No API keys. The README says it has only been tested with Claude Code.</p>

<pre><code>npx skills add NiazMorshed2007/reanimate -g</code></pre>

<p><strong>The catch.</strong> The last item under Limits: <a href="https://github.com/NiazMorshed2007/reanimate/blob/3f7a55a2986a84ca2173e86ee9127eefe31d046d/README.md#L98" target="_blank" rel="noopener">it clones what you point it at, and fonts, images and code from another site still belong to their owners</a>. Read that next to the capture flag for WebGL and 3D. The <code>SKILL.md</code> tells the agent to <a href="https://github.com/NiazMorshed2007/reanimate/blob/3f7a55a2986a84ca2173e86ee9127eefe31d046d/skills/reanimate/SKILL.md#L52" target="_blank" rel="noopener">add <code>--assets</code> and collect the shader sources, textures and models</a> from the page it is copying. The skill is careful about this. Its report is supposed to name, as a reason for a residual difference, a shader or model you may not copy. But the files are already in your project folder by then, and the decision about using them was never the skill's to make.</p>

<p>For an agency, the practical line falls between the two fidelity levels. The default, which matches timing and easing and lets your brand supply the look, is a study of how something moves. Asking for "pixel-perfect" on a competitor's hero is a different request, and the README lists the fonts and assets among the things that level must reproduce.</p>

<p><strong>Verified.</strong> November 2, 2026, at commit <code>3f7a55a</code>. 868 stars and 84 forks, MIT, created October 29, last push October 31. It was four days old when I read it. Read: the README, <code>SKILL.md</code> in full and the example list in its site folder. The demo video's caption mentions 18 examples; the README table lists 14 clones, and the site's example file holds 26 entries, because some cards are counted one by one. I could not make the three numbers agree, and I counted entries, not what the gallery shows.</p>

<h2>2. Drama Skills</h2>

<p>Eleven skills for short vertical dramas and motion comics, from a novel or an idea to episode scripts, storyboards, image and video prompts, a confirmed generation batch and a cut.</p>

<p><strong>Link.</strong> <a href="https://github.com/zenstory-ai/drama-skills" target="_blank" rel="noopener">github.com/zenstory-ai/drama-skills</a>, by ZenStory AI.</p>

<p><strong>What it does.</strong> Every creative decision lives in a Markdown file per episode: the script, the visual design, the storyboard, the image prompts, the video prompts, and a cut list when you edit. A look that has to hold across shots, a jacket, a scar, the colour of a car, is written once as a short phrase the README calls a continuity lock, and that phrase is pasted unchanged into every prompt that needs it. A checker script then verifies that the declared references and locks are actually there. Nothing gets generated until the production skill shows the exact batch, with content, references and parameters, and you confirm. The edit skill writes down why each in and out point sits where it does, takes subtitles word for word from the script and normalises loudness before rendering.</p>

<p><strong>Who it is for.</strong> The writer and director of a vertical series or motion comic who generates shot by shot and keeps losing the character's face between shot 7 and shot 12.</p>

<p><strong>What it saves.</strong> I did not measure it. The README opens with a 68 second sample, 20 shots adapted from a 20 chapter novel, and says the video generation cost about 40 yuan. That is their figure for their episode. What it replaces is the spreadsheet where you track which reference image goes into which shot, in what order.</p>

<p><strong>Cost to install.</strong> One command. Python 3.9 or newer for the scripts, and <code>ffmpeg</code> on your path for the edit. Generation is optional and goes through adapters for Seedance, GPT Image 2 and MiniMax, with credentials you set up outside the project and pay the provider for. The writing skill, by its own description, writes Chinese scripts, and much of the reference material is in Chinese; the English README is complete.</p>

<pre><code>npx skills add zenstory-ai/drama-skills -y -g</code></pre>

<p><strong>The catch.</strong> It is in the FAQ, under a question nobody asks until it happens: <a href="https://github.com/zenstory-ai/drama-skills/blob/d8a9a9b5f5fa0e46dc2644d55879d1c984ff70e6/README_EN.md#L370-L377" target="_blank" rel="noopener">the process died after a video job was submitted; resubmit?</a> The answer is no, not yet. An asynchronous submission may already have been charged. The adapters write the provider's job ID to disk the moment they receive it, an <code>audit</code> command reports the unfinished job, and <code>collect</code> retrieves the result without paying for a new generation.</p>

<p>Anyone who generates video on credits knows the reflex: the terminal froze, so you press it again. This is the only suite this week that writes that into its procedure, and it only helps if you read the FAQ before the first crash.</p>

<p><strong>Verified.</strong> November 2, 2026, at commit <code>d8a9a9b</code>. 3,673 stars and 676 forks, MIT, created July 16, last push the same day I read it. The badge says 11 skills and I counted 11 skill folders. Read: the Chinese and English READMEs, the FAQ, and the <code>SKILL.md</code> of the writing skill.</p>

<h2>3. OfficeCLI</h2>

<p>A single program that lets an agent create, read and edit Word, Excel and PowerPoint files without Office installed, and render them to HTML or PNG to check its own work.</p>

<p><strong>Link.</strong> <a href="https://github.com/iOfficeAI/OfficeCLI" target="_blank" rel="noopener">github.com/iOfficeAI/OfficeCLI</a>, by iOfficeAI.</p>

<p><strong>What it does.</strong> Every slide, shape, paragraph and cell gets an address, like <code>/slide[1]/shape[1]</code>, and the agent adds, changes or removes things by address. A <code>watch</code> command opens a live preview in the browser that refreshes with every change, and the renderer gives the agent a picture of the page, so it can look at what it made and fix it. Batch edits are atomic by default: if one item in a batch fails, the file is left exactly as it was. The repository ships separate skills for pitch decks, Word forms, financial models and dashboards.</p>

<p><strong>Who it is for.</strong> The producer who has to turn a call with the client into a treatment deck and a budget spreadsheet by the next morning, and would rather direct the layout than drag text boxes.</p>

<p><strong>What it saves.</strong> I did not measure it. If you already build decks from a template in PowerPoint, it saves the typing. If the deck needs judgement on every slide, it saves less, and you still look at every page.</p>

<p><strong>Cost to install.</strong> Two commands: the binary, then <code>officecli install</code>, which copies it to your path and writes its skill into every AI agent it detects on the machine. Running <code>officecli</code> with no arguments triggers the same install.</p>

<pre><code>brew install officecli
officecli install</code></pre>

<p><strong>The catch.</strong> For speed, every command starts a resident process that keeps the document in memory. OfficeCLI's own reads always see your latest edit, so inside the tool you never notice. But <a href="https://github.com/iOfficeAI/OfficeCLI/blob/c56512c8c7b76fe284f09940e4cd492470099d3e/README.md#L332-L339" target="_blank" rel="noopener">the write to disk is deferred</a>, and anything else that opens the file, Word, a converter, an email attachment, an upload, may get the version from a few seconds earlier. The README's fix is one command, <code>officecli save</code> or <code>close</code>, before the file leaves the tool. Idle sessions flush on their own within 2 to 10 seconds, which is exactly the window in which you attach the deck and hit send.</p>

<p>Two more lines to read before automating it. <a href="https://github.com/iOfficeAI/OfficeCLI/blob/c56512c8c7b76fe284f09940e4cd492470099d3e/README.md#L249" target="_blank" rel="noopener">Updates are checked automatically in the background</a> unless you turn that off in its config. And <a href="https://github.com/iOfficeAI/OfficeCLI/blob/c56512c8c7b76fe284f09940e4cd492470099d3e/README.md#L490" target="_blank" rel="noopener">exit code 2 covers both "it worked with a warning" and "nothing was applied"</a>, so a script has to read the result, not the exit code.</p>

<p><strong>Verified.</strong> November 2, 2026, at commit <code>c56512c</code>. 32,945 stars and 2,241 forks, Apache 2.0, created March 15, last push October 30. Read: the README in full and the root <code>SKILL.md</code> on resident mode.</p>

<h2>4. Diagram Design</h2>

<p>A skill that draws diagrams as one self-contained HTML and SVG file, in your own colours and fonts.</p>

<p><strong>Link.</strong> <a href="https://github.com/cathrynlavery/diagram-design" target="_blank" rel="noopener">github.com/cathrynlavery/diagram-design</a>, by Cathryn Lavery.</p>

<p><strong>What it does.</strong> You describe the diagram in plain words and the agent picks one of 45 types, says its plan and writes a single <code>.html</code> file you open by double clicking. Among the types are a Gantt chart, a swimlane, a timeline, an org chart, a journey map and a service blueprint. It can take your palette and fonts from your website once, and every diagram after that matches. It also redraws existing draw.io, Mermaid and Excalidraw files, and exports to PNG and SVG. There is a public gallery of every type in light, dark and full editorial versions, so you can judge it before installing anything.</p>

<p><strong>Who it is for.</strong> The post-production coordinator who has to show the client, in one page, who delivers what between the shoot and the final master, and in which week.</p>

<p><strong>What it saves.</strong> I did not measure it. If your production schedules are drawn by hand in Keynote, it replaces the drawing. The thinking about which week the colour session goes in stays yours.</p>

<p><strong>Cost to install.</strong> One command for any agent, or two in Claude Code if you want the plugin, which brings updates and slash commands for export and import.</p>

<pre><code>npx skills add cathrynlavery/diagram-design</code></pre>

<p><strong>The catch.</strong> It is in <code>PRIVACY.md</code>, which is itself unusual for a skill. The plugin has no server and no analytics. But <a href="https://github.com/cathrynlavery/diagram-design/blob/0cf73c3fcc56667ad91a9a04c439ac6ccfabc9d1/PRIVACY.md#L22" target="_blank" rel="noopener">every generated diagram loads its fonts from Google Fonts when a browser opens it</a>. Exporting to PNG renders the diagram in a browser, so the fonts are requested at that moment too; the finished PNG is only an image and calls nothing when it is opened. Google receives the viewer's IP address and browser details. The notice is precise that the request names the fonts and carries none of the diagram's content.</p>

<p>For most work that is nothing. For a delivery schedule sent to a client under NDA, it means an HTML or SVG file you hand over makes a request to a third party each time someone on their side opens it. The same notice gives the fix: <a href="https://github.com/cathrynlavery/diagram-design/blob/0cf73c3fcc56667ad91a9a04c439ac6ccfabc9d1/PRIVACY.md#L34" target="_blank" rel="noopener">remove the Google Fonts link and every font falls back to a system font</a>. Ask the agent to do that before you send it.</p>

<p><strong>Verified.</strong> November 2, 2026, at commit <code>0cf73c3</code>. 64,285 stars and 4,244 forks, the largest repository this week; MIT, created April 16, last push November 1. The README says 45 types and I counted 45 type files in its references. Read: the README, <code>PRIVACY.md</code> in full and the reference folder listing.</p>

<h2>5. yutu</h2>

<p>A command line tool, MCP server and skill that let an agent run a YouTube channel through Google's official API: uploads, thumbnails, captions, playlists and comments.</p>

<p><strong>Link.</strong> <a href="https://github.com/eat-pray-ai/yutu" target="_blank" rel="noopener">github.com/eat-pray-ai/yutu</a>, by eat-pray-ai.</p>

<p><strong>What it does.</strong> It wraps the YouTube Data API: upload a video with title, category and privacy, set the thumbnail, send a caption file, build playlists, read and moderate comments, manage live broadcasts. The skill sorts every operation into three lists: reads with no side effects, writes, and irreversible deletions, and tells the agent to confirm before any deletion. The code backs that up: deleting a video asks for confirmation, and on the command line a <code>--yes</code> flag exists to skip the question. Privacy has no default on upload; the command refuses to run until you say public, unlisted or private.</p>

<p><strong>Who it is for.</strong> The editor who also manages a client's channel and spends the end of every delivery day in YouTube Studio filling in the same fields for the same kind of video.</p>

<p><strong>What it saves.</strong> I did not measure it. It replaces the Studio form: title, description, thumbnail, captions and playlist for each upload. The one-time Google setup costs more than a single upload saves, so it pays off for channels that publish every week.</p>

<p><strong>Cost to install.</strong> Three commands, plus a Google Cloud setup done in the browser: create a project, enable the YouTube Data API, create a desktop OAuth client with yourself as a test user, and download its <code>client_secret.json</code>. Then the binary, the login, and the skill. Connecting it to Claude Code as an MCP server is a fourth command, with the paths of the two credential files.</p>

<pre><code>brew install yutu
yutu auth --credential client_secret.json
npx skills add eat-pray-ai/yutu --skill youtube</code></pre>

<p><strong>The catch.</strong> After you log in, <a href="https://github.com/eat-pray-ai/yutu/blob/95ebc91f8778a61225ca8049362f960a26a58527/README.md#L77-L89" target="_blank" rel="noopener">the token is saved to <code>youtube.token.json</code>, and by default yutu reads it and the client secret from the current directory</a>. The file holds a refresh token, the part that lets yutu act on the channel again without asking you to log in. If you run the login inside a project folder that syncs to a shared drive or a Git repository, the key to the client's channel goes along with the edit. The README gives environment variables to point both files somewhere else. Set them before the first <code>auth</code>.</p>

<p>Two smaller things. The skill's growth tips tell the agent to put <a href="https://github.com/eat-pray-ai/yutu/blob/95ebc91f8778a61225ca8049362f960a26a58527/skills/youtube/SKILL.md#L123" target="_blank" rel="noopener">three to five hashtags in every description</a> and to write titles with curiosity gaps; if the channel has a voice, say so in your request. And the skill file declares <a href="https://github.com/eat-pray-ai/yutu/blob/95ebc91f8778a61225ca8049362f960a26a58527/skills/youtube/SKILL.md#L4" target="_blank" rel="noopener">its licence as MIT</a>, while the repository's <code>LICENSE</code> is Apache 2.0. Both are permissive, but I found nothing that says which one covers which file. If you plan to redistribute the skill, ask the maintainer about the scope first.</p>

<p><strong>Verified.</strong> November 2, 2026, at commit <code>95ebc91</code>. 712 stars and 84 forks, the smallest repository this week; Apache 2.0, created May 2023, the oldest here, last push October 31. Read: the README in full, the skill's <code>SKILL.md</code> and setup reference, and the video upload and delete commands in its source.</p>

<h2>What I did not verify</h2>

<p>I did not install or run any of the five. Every behaviour above comes from a README, a notice, a skill file or source code I read.</p>

<p>I did not watch reanimate's demo or open its live examples, so the pixel numbers in its README are the author's. I did not run Drama Skills' checker or its production adapters, and I did not read its Chinese reference files in full; the 40 yuan and the dialogue pace in its FAQ come from the authors' own small samples. I did not test how long OfficeCLI's resident process really waits before writing to disk. I did not open a Diagram Design file with the network off to see the fallback fonts.</p>

<p>For yutu, the confirmation on deletion is implemented in a library outside the repository, and I did not read that library or check what happens in an agent that cannot show a confirmation prompt. I also did not check how long Google keeps a test user's login valid.</p>

<p>I tried to search Hacker News for the five names over the last two months and the search did not answer from here. Reddit refused the request. So I cannot say whether any of the five was discussed. Stars move by the hour, and the numbers above carry the afternoon they were read.</p>

<p>Left out this week: a launch video skill that would have been the fourth video tool in three editions, and a YouTube transcript skill that runs on a paid API with credits.</p>

<p>Edition 11 is due next Monday.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Method: a documentary review of each repository's own files, read on November 2, 2026, with one GitHub snapshot between 15:43 and 15:46 UTC. None of the five skills was installed or run.</p>
<ul>
<li><a href="https://github.com/NiazMorshed2007/reanimate" target="_blank" rel="noopener">reanimate</a>: <a href="https://github.com/NiazMorshed2007/reanimate/blob/3f7a55a2986a84ca2173e86ee9127eefe31d046d/README.md" target="_blank" rel="noopener">README at 3f7a55a</a>, <a href="https://github.com/NiazMorshed2007/reanimate/blob/3f7a55a2986a84ca2173e86ee9127eefe31d046d/skills/reanimate/SKILL.md" target="_blank" rel="noopener"><code>SKILL.md</code></a>, <code>site/src/examples.ts</code>.</li>
<li><a href="https://github.com/zenstory-ai/drama-skills" target="_blank" rel="noopener">Drama Skills</a>: <a href="https://github.com/zenstory-ai/drama-skills/blob/d8a9a9b5f5fa0e46dc2644d55879d1c984ff70e6/README_EN.md" target="_blank" rel="noopener">English README at d8a9a9b</a>, the Chinese README, <code>skills/short-drama-write/SKILL.md</code>.</li>
<li><a href="https://github.com/iOfficeAI/OfficeCLI" target="_blank" rel="noopener">OfficeCLI</a>: <a href="https://github.com/iOfficeAI/OfficeCLI/blob/c56512c8c7b76fe284f09940e4cd492470099d3e/README.md" target="_blank" rel="noopener">README at c56512c</a>, root <code>SKILL.md</code>.</li>
<li><a href="https://github.com/cathrynlavery/diagram-design" target="_blank" rel="noopener">Diagram Design</a>: README, <a href="https://github.com/cathrynlavery/diagram-design/blob/0cf73c3fcc56667ad91a9a04c439ac6ccfabc9d1/PRIVACY.md" target="_blank" rel="noopener"><code>PRIVACY.md</code> at 0cf73c3</a>, <code>skills/diagram-design/references/</code>, and the <a href="https://cathrynlavery.github.io/diagram-design/" target="_blank" rel="noopener">public gallery</a>.</li>
<li><a href="https://github.com/eat-pray-ai/yutu" target="_blank" rel="noopener">yutu</a>: <a href="https://github.com/eat-pray-ai/yutu/blob/95ebc91f8778a61225ca8049362f960a26a58527/README.md" target="_blank" rel="noopener">README at 95ebc91</a>, <a href="https://github.com/eat-pray-ai/yutu/blob/95ebc91f8778a61225ca8049362f960a26a58527/skills/youtube/SKILL.md" target="_blank" rel="noopener"><code>skills/youtube/SKILL.md</code></a>, <code>cmd/video/insert.go</code>, <code>cmd/video/delete.go</code>, <code>LICENSE</code>.</li>
</ul>
</section>
