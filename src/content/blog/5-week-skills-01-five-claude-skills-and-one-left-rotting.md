---
id: "art-172"
title: "Claude Skills Weekly: Five Checked, One Left Rotting"
description: "Five Claude skills opened and counted on August 22, not recalled from memory, plus the copy on my own drive that had sat five months out of date."
pubDate: "2026-08-22"
updatedDate: "2026-08-24"
toolVersion: "2026-08"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1771591227117-0726b777828e?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwyMHx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMHBvcnRyYWl0JTIwYXJ0aXN0aWN8ZW58MXwwfHx8MTc4NzYxMjQxN3ww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "12 min read"
featured: true
---

<p>There is a folder on this machine called <code>~/.claude/skills/humanizer</code>. I installed it, I use it, and until tonight I had never once looked at what version it was.</p>

<p>It is 2.5.1. Last commit, March 31. Twenty nine numbered patterns.</p>

<p>The version on GitHub tonight is 2.11.2. Thirty five patterns. I counted both.</p>

<p>The six I am missing are numbered 30 to 35. Number 31 is forced punchlines and dramatic fragments. Number 32 is formulaic sayings. Number 33 is fake-candid openings, and its list of trigger phrases includes "Honestly?" and "Let's be honest." Number 34 is answering objections nobody raised.</p>

<p>Between July 25 and August 12 I published nineteen LinkedIn posts carrying the same staged pause before an ordinary point, twelve of them in an unbroken row. The engagement died. I suspended the whole thing on August 13. (Those figures are corrected. See the note at the end.)</p>

<p>The tool that names that exact failure, by number, has been sitting on my hard drive for five months in a version that does not contain it.</p>

<p>So that is the column. Five Claude skills a week, checked by me, with the line the README does not put on the badge. Four from GitHub, one from my own shelf. This is number one.</p>

<h2>How I checked</h2>

<p>One snapshot, August 22, 2026, between 21:13 and 21:22 UTC.</p>

<p>Repository numbers came from the authenticated <code>gh</code> CLI. That detail matters: the public GitHub API had been rate limiting this machine's address earlier in the day with an HTTP 403, and a rate-limited check is not a check. Every URL below was hit with <code>curl</code> in the same window and answered 200.</p>

<p>Where a README announces a number about itself, I counted it. Twice that changed what I wrote.</p>

<p>What I did not do: I did not install or run any of these five during the verification. Nothing below is a benchmark I produced. Where somebody else produced one, I say who, when, and on which version.</p>

<h2>1. video-shotcraft</h2>

<p>An agent skill that hands you a finished product film built in Remotion, plus a library of camera moves you can watch before you write a single prompt.</p>

<p><strong>Link.</strong> <a href="https://github.com/Vincentwei1021/video-shotcraft" target="_blank" rel="noopener">github.com/Vincentwei1021/video-shotcraft</a></p>

<p><strong>What it does.</strong> It ships 152 shot recipe cards across 10 functional categories, 209 motion previews you can browse in a public gallery, and one complete template called Ink Press: 36.2 seconds, 1920x1080, 30fps, 10 shots, paper and ink and amber, with 2.5D camera moves over real page captures and a pinned SFX pass. You point your agent at the template and it swaps in your product's screenshots, copy and branding.</p>

<p><strong>Who it is for.</strong> The editor who has a 30 second product film due Thursday and does not want to keyframe ten camera moves from zero in After Effects.</p>

<p><strong>What it saves.</strong> I did not measure it. What I can state is the substitution: the film arrives already cut, ten shots, 36.2 seconds, with the timing decided. If you would have built that yourself, what you save is your day. If you would not have built it at all, you save nothing and you gained a template you now have to art direct.</p>

<p><strong>Cost to install.</strong> One command.</p>

<pre><code>npx skills add Vincentwei1021/video-shotcraft</code></pre>

<p><strong>The catch.</strong> Three, and the first is the expensive one.</p>

<p>Remotion carries its own license, and the README says so plainly: free for individuals and small teams, companies may need a paid license. "No API key required" and "free for the production company" are two different sentences. Read the Remotion license before you put this in a client pipeline.</p>

<p>Second, the project export goes to JianYing, which is CapCut CN, verified by the author on JianYing Pro 11.2 for macOS. That is not the international CapCut your editor already has open.</p>

<p>Third, the three headless rendering workarounds in the README (concurrency cap, chrome-headless-shell, browser-executable) exist for a headless Linux box. On the Mac you actually work on, that problem probably never shows its face.</p>

<p>One practical thing before you render a batch: this template outputs at 1920x1080, and the day you take that render into the edit and transcode it to ProRes for colour, the file stops being small. It is worth knowing what the output will weigh before you fill the drive, and <a href="https://axenworks.com/prores-file-size-calculator/" target="_blank" rel="noopener">that is arithmetic you can do in advance</a>.</p>

<p><strong>Verified.</strong> August 22, 2026, 21:13 UTC. 6,052 stars, 521 forks, 3 open issues, Apache-2.0, last push the same day at 18:38 UTC, repository created July 19, 2026. The gallery at <code>vincentwei1021.github.io/video-shotcraft</code> answered 200, so you can judge the material before you install anything. I counted the shot cards myself, directory by directory: camera 10, data 11, effects 17, interaction 15, opening 10, outro 7, rhythm 11, transition 19, typography 25, ui-entrance 27. That is 152. The README's number is the real number.</p>

<h2>2. humanizer</h2>

<p>Thirty five numbered patterns of AI writing, each with the instruction to remove it. Plain Markdown, no code, no key.</p>

<p><strong>Link.</strong> <a href="https://github.com/blader/humanizer" target="_blank" rel="noopener">github.com/blader/humanizer</a></p>

<p><strong>What it does.</strong> Pattern 1 is inflated claims about importance. Pattern 35 is rejecting fake alternatives. Pattern 14 is em and en dashes, and it does not stop at "avoid": the rule tells the model to search the finished text for the two characters and remove each one before returning it. In file mode it rewrites prose only and leaves code blocks, YAML metadata, data and link targets untouched. Two rules sit above all thirty five: never invent a fact, never invent a source.</p>

<p><strong>Who it is for.</strong> Anyone who publishes copy an agent helped write. In this house it is the pass before a client deck goes out, so the text does not read like it came out of a chat window.</p>

<p><strong>What it saves.</strong> Not measured. The substitution is the pass where you reread your own copy hunting for your own tics, which is the pass I always skip, because I cannot hear my own tics. That is the whole point of it.</p>

<p><strong>Cost to install.</strong> One command. Drop <code>--global</code> to install it only in the current project.</p>

<pre><code>npx skills add blader/humanizer --global</code></pre>

<p><strong>The catch.</strong> The one at the top of this article, which is mine, not the project's: a skill you installed once is not a skill you have. Mine sat at 2.5.1 from March 31 while upstream went to 2.11.2, and the six patterns that arrived in between are the ones that describe exactly how I broke my own posting in July.</p>

<p>The project's own catch is subtler and it is in the rules. If you give the skill a sample of your previous writing, the sample outranks the rulebook, including rule 14. Feed it something old of yours that is full of the tic you are trying to kill, and it will faithfully preserve the tic. The tool checks you against your sample, not against the list. It obeys whoever trains it.</p>

<p><strong>Verified.</strong> August 22, 2026, 21:13 UTC. 37,209 stars, 3,289 forks, 16 open issues, MIT, last push August 19 at 05:58 UTC, repository created January 18, 2026. Latest published release v2.11.1, August 18. The SKILL.md frontmatter reads 2.11.2, one ahead of the release tag. I counted 35 numbered patterns upstream and 29 in my local copy at <code>~/.claude/skills/humanizer</code>, whose last commit is dated March 31, 2026.</p>

<h2>3. html-anything</h2>

<p>A local browser app where the agent CLI you are already signed into writes the HTML for a deck, a poster, a one pager, a treatment.</p>

<p><strong>Link.</strong> <a href="https://github.com/nexu-io/html-anything" target="_blank" rel="noopener">github.com/nexu-io/html-anything</a></p>

<p><strong>What it does.</strong> Template folders spread across nine delivery surfaces: magazine article, keynote deck, resume, poster, Xiaohongshu card, tweet card, web prototype, data report, Hyperframes video frame. Every template ships an <code>example.html</code> you can open straight from the repository, without cloning and without logging into anything, which means you can reject it in thirty seconds if the taste is wrong. There is no API key: it reuses the session you already have from <code>claude login</code>, <code>cursor login</code> or <code>gemini auth</code>.</p>

<p><strong>Who it is for.</strong> Whoever has a treatment to send on Friday. I have been sending treatments for years and I have never enjoyed building one, not once. Also the producer who needs a one pager that does not look like a Google Doc with a logo on it.</p>

<p><strong>What it saves.</strong> Not measured. What it gives you is the artefact, not the hours: a page that looks designed, produced by the subscription you are already paying for.</p>

<p><strong>Cost to install.</strong> This is the expensive one of the five, and I am going to write all four lines instead of pretending it is one.</p>

<pre><code>git clone https://github.com/nexu-io/html-anything
cd html-anything
pnpm install
pnpm -F @html-anything/next dev</code></pre>

<p>Then open <code>http://localhost:3000</code>. The good news is on the other side of those four commands: once it is up it is a browser interface with a template picker, which is genuinely easier for someone who does not write code than any one line install that leaves you talking to a terminal.</p>

<p><strong>The catch.</strong> Security, and it is in the README where almost nobody reads it. The app spawns your agent CLI with maximally permissive flags. Straight from the repository's own table: <code>codex exec --json --sandbox workspace-write</code>, <code>cursor-agent --print --output-format stream-json --force --trust</code>, <code>gemini --output-format stream-json --yolo</code>, <code>qwen --yolo -</code>, <code>opencode run --format json --dangerously-skip-permissions -</code>, <code>copilot --allow-all-tools --output-format json</code>, <code>aider --no-pretty --no-stream --yes-always --message-file -</code>.</p>

<p>To their credit they are not hiding it. They state the routes are meant for a single operator on a single machine, and every <code>/api/*</code> request is gated on a Host header allowlist specifically to stop a malicious page from rebinding a domain to 127.0.0.1 and posting into them through your browser. That is a real mitigation and it is thought through. It is still your agent running in approve everything mode on the machine that has your client work on it.</p>

<p>A smaller one, from counting. The README puts the number 75 in front of you seven times: the opening line, the skills badge, the "At a glance" table, the alt text of a screenshot, that screenshot's caption, the heading of the Skills section, and the status table. I counted 81 directories under <code>next/src/lib/templates/skills/</code>. I did not open all 81, so I cannot tell you whether six are unlisted, unfinished or simply not counted, and I am not going to guess. The CLI count in the same README does the same thing in the other direction: the opening line and the agents badge say nine, the table that lists the CLIs one by one has nine rows, and three places further down say eight, including the "At a glance" table near the top. None of this is dishonest. It is a fast moving repository whose prose has not caught up with its own folders, which is worth knowing before you quote its numbers in a client deck.</p>

<p><strong>Verified.</strong> August 22, 2026, 21:13 UTC. 8,410 stars, 832 forks, 59 open issues, Apache-2.0, last push August 18 at 03:18 UTC, repository created May 11, 2026. No published release yet.</p>

<h2>4. planning-with-files</h2>

<p>A hook that pushes the plan back in front of the model on every single turn, so the plan survives a clear, a compaction and a dead session.</p>

<p><strong>Link.</strong> <a href="https://github.com/OthmanAdi/planning-with-files" target="_blank" rel="noopener">github.com/OthmanAdi/planning-with-files</a></p>

<p><strong>What it does.</strong> File based planning, except the enforcement is mechanical rather than polite. A hook re-reads <code>task_plan.md</code> before every tool call. It is not an instruction the agent can quietly decide to stop following twenty minutes into the job.</p>

<p><strong>Who it is for.</strong> Anyone running a long task with an agent. In our language it is the call sheet that is still lying on the table after everybody has gone home. A shoot has a brief, an approved reference and a client change that nobody wrote down. This is the skill that writes it down and keeps putting it back on the table.</p>

<p><strong>What it saves.</strong> Not measured by me, and this is the only one of the five with a published number I could audit. Their <code>docs/evals.md</code> records 96.7 percent of assertions passing, 29 of 30, against 6.7 percent, 2 of 30, without the skill. Also 3 wins in 3 blind A/B comparisons. I opened the document and read both figures.</p>

<p><strong>Cost to install.</strong> One line, and which line you pick changes what you get. See the catch.</p>

<pre><code>/plugin marketplace add OthmanAdi/planning-with-files
/plugin install planning-with-files@planning-with-files</code></pre>

<p><strong>The catch.</strong> Four, and I am listing all four because the star count on this one is large enough to switch a reader's brain off.</p>

<p>The skill costs roughly 68 percent more tokens and 17 percent more time. That is in their own document, in the open, stated as the intended trade: speed for structure. If you are the kind of user who hits a weekly plan limit, that is the actual price of admission.</p>

<p>The 96.7 percent is real and it is old. Eval date March 6, 2026, executor model claude-sonnet-4-6, skill version listed as 2.21.0 in the environment table (the opening paragraph of the same document says v2.22.0, which is a small internal contradiction I noticed and cannot resolve from outside). Today's release is v3.11.2, published this morning. A benchmark five months and one major version behind is evidence, not proof.</p>

<p>Their competitive benchmark against six other planning methods is declared by the authors themselves as an internal v1 with harness authored tasks, with the external task corpus and cross-family jury listed as roadmap. They wrote that limitation down before I could. That is the behaviour I want to reward by linking to them.</p>

<p>And the one that would actually bite you: the cheap install routes can leave you silently hook-less. The README says it in plain words. Skill route installs can end up without hooks registered, and the hooks are the entire mechanism. You would have the skill, you would think you had the protection, and the plan would stop being re-injected without anything telling you. Use the plugin route, then run <code>/plan-doctor</code> and confirm.</p>

<p>One more detail, and it is the one that convinced me more than 26,000 stars did. In March they went looking through their own hook and found a prompt injection amplification vector inside it: web content could reach <code>task_plan.md</code> and be re-injected into context on every subsequent tool call. They removed WebFetch and WebSearch from <code>allowed-tools</code> and wrote up what happened. A project that audits its own best feature and publishes the hole is a project I will read again next month.</p>

<p><strong>Verified.</strong> August 22, 2026, 21:13 UTC. 26,287 stars, 2,203 forks, 7 open issues, MIT, last push the same day at 11:09 UTC, release v3.11.2 published one minute later at 11:10 UTC, repository created January 3, 2026.</p>

<h2>5. gauntlet-loop</h2>

<p>Mine. It is not on anybody's GitHub. It turns a request into a prompt that builds a team of sub-agents and a harsh verifier standing over each one.</p>

<p><strong>Link.</strong> <a href="https://openyourais.com/skills/">openyourais.com/skills</a>. It is the first card on the page.</p>

<p><strong>What it does.</strong> It compiles any request into three pillars. Pillar one, the task, with a named quality level and a concrete real world reference to be judged against. Pillar two, the method: fan out sub-agents in parallel, one independent verifier per executor, and the verifier is instructed to be a severe critic rather than a supporter. Pillar three, the stop condition, which is the part of Matt Shumer's original technique that most people copy without understanding: do not stop until every verifier is genuinely impressed comparing side by side against the real reference and says which one is better. Or, when subjective will not do, a score from 0 to 100 with nothing under 85 accepted.</p>

<p>On top of that it carries four changes I added after running it: the verifier has to use the product as an end user rather than read the code, it must judge blind without the history of attempts, there is a hard ceiling on rounds and cost, and the fan out has to be genuinely parallel instead of a queue wearing a costume.</p>

<p><strong>Who it is for.</strong> The director who wants exceptional instead of functional, and is willing to pay for it in rounds. It has an adaptation table by domain, and the video row is the reason it exists: the reference is a real commercial, and the verifier watches the render and compares shot by shot for sharpness, set drift, continuity and typography. That is a decoupage turned into a prompt.</p>

<p><strong>What it saves.</strong> Nothing, if you are in a hurry. This one costs more, on purpose. It is for the job where the second version has to be better than the first.</p>

<p><strong>Cost to install.</strong> Download the zip, unzip it into your skills folder, done. The instructions inside are in Portuguese, which is the honest state of it today.</p>

<p><strong>The catch.</strong> It is not ready, and here is exactly why, counted in the file tonight.</p>

<p>There is no <code>license:</code> field in the frontmatter. All four skills above declare a license. Mine declares nothing, which means nobody knows what they are allowed to do with it.</p>

<p>The file is written in Portuguese and this site is in English.</p>

<p>The SKILL.md contains eight long dashes, and the skill itself carries a house rule telling you not to use them in public text. Shipping it in that state would be the only genuinely unforgivable version of this mistake.</p>

<p>The <code>references/</code> folder is empty.</p>

<p>And Matt Shumer's original prompt is reproduced inside it word for word, credited. Before I publish this under my own name I have to make a deliberate decision, not a lazy one, about whether to carry the full text or point at the source.</p>

<p>That list is why this skill is scheduled for week five rather than week one. Putting it last buys four weeks of work, and telling you that is more useful than pretending the schedule was editorial instinct.</p>

<p><strong>Verified.</strong> August 22, 2026. Local file at <code>~/.claude/skills/gauntlet-loop/SKILL.md</code>, 156 lines, 9,115 bytes, last modified August 12, 2026. My own name appears in it three times, on lines 3, 103 and 152, all of which have to go before it ships. Shumer is credited twice, on lines 3 and 54, so the attribution is already there. Eight long dashes, zero short ones. The <code>references/</code> directory contains no files.</p>

<h2>What I did not verify</h2>

<p>This section is permanent. If it is ever empty, the checking was lazy.</p>

<p>I did not install or run any of the five during this session. Nothing above is a benchmark I produced, and where I wrote "not measured" I meant it literally.</p>

<p>I did not open the 152 shot cards to judge whether they are good. I counted that there are 152 of them.</p>

<p>I did not test the JianYing export, because there is no JianYing on this machine. That claim is the author's, on JianYing Pro 11.2 for macOS.</p>

<p>I did not re-run the planning-with-files evaluation. I read their published document and quoted its numbers with its dates and its version attached.</p>

<p>I did not read html-anything's <code>middleware.ts</code>. The Host header allowlist is described in the README and I am reporting the description, not an audit of the code.</p>

<p>I did not open the 81 template folders I counted, so I cannot say which of them appear in the picker.</p>

<p>And the star counts are a photograph, not a fact. On video-shotcraft the counter moved by one between two reads inside the same session earlier today. Treat every one of these numbers as an order of magnitude with a timestamp, which is why every one of them has a timestamp.</p>

<h2>What happens next</h2>

<p>Between now and Monday I am doing one thing and reporting the result whether it flatters me or not. I am pulling my local humanizer from 2.5.1 up to current, then running the eight LinkedIn posts from July through it, and counting how many of the thirty five patterns it finds. The count goes in edition two, on August 31, including the number that embarrasses me.</p>

<p>Next Monday, five more. And gauntlet-loop still needs its licence and an English translation. Now you have seen the list of what is wrong with it, so you will know if I quietly skip one.</p>

<section class="article-note note-correction">
<h2>Correction</h2>
<p>Corrected August 24, 2026. The first version of this article said I had published eight LinkedIn posts in a row in July. That number was wrong, and it was mine, not anybody else's. On August 24 I did the thing the last section of this article promised: I pulled my local humanizer from 2.5.1 to 2.11.2, then counted the posts one file at a time out of my own published record instead of out of my memory. Nineteen posts carried the staged pause. The longest unbroken run was twelve. The run started on July 25 and ended on August 12, so it was never a July problem, it was a July and August problem. My internal postmortem was wrong in the same place, with a different wrong answer: it recorded eight consecutive posts between August 6 and August 14. The corrected number is more than twice the number I published, which is the uncomfortable part and the reason it is written here rather than quietly fixed. The full count, the method and what I could not check are in edition two.</p>
</section>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>VERIFICATION NOTE, August 22, 2026.
Every number in this article was read by me on August 22, 2026, between 21:13 and 21:22 UTC.
Repository metadata came from the authenticated `gh` CLI, not the public unauthenticated API.
Every URL in the article was hit with `curl` in the same window and returned HTTP 200.
Counts described as counted were counted by me from the repository tree, not read off a badge.
Nothing here is recalled from memory. The five skills were NOT installed or executed on this
machine during the verification, and the article says so out loud in its own section.</p>
</section>
