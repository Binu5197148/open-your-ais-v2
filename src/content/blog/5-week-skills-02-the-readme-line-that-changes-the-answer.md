---
id: "art-177"
title: "Claude Skills Weekly: The README Line That Changed My Answer"
description: "Five Claude skills opened and counted on August 31, plus the number I promised and did not want: fifteen of thirty five patterns were in my own posts."
pubDate: "2026-08-31"
toolVersion: "2026-08"
category: "AI"
tags:
  - "AI Tools"
  - "Workflow"
  - "Craft"
  - "Skills"
  - "5 Week Skills"
heroImage: "https://images.unsplash.com/photo-1589872307379-0ffdf9829123?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwyfHxjaW5lbWElMjBjYW1lcmElMjBjbG9zZXVwfGVufDF8MHx8fDE3ODgwNjMyNTV8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "13 min read"
featured: true
---

<p>Last week I published a number I had not counted. I wrote that I had put out eight LinkedIn posts in a row in July that all opened the same way. It was eight because eight was what I remembered.</p>

<p>On August 24 I did the count properly, one file at a time, out of my own published record. Nineteen posts carried the staged pause. The longest unbroken run was twelve. The run started on July 25 and ended on August 12, so it was never a July problem. My own internal postmortem had a third wrong answer sitting in it: eight consecutive posts, August 6 to August 14. Three numbers, three sources, one of them me, and none of them from counting.</p>

<p>I also promised a second number for today. I said I would pull my local humanizer from 2.5.1 up to current, run my July posts against the thirty five patterns, and publish the result even if it embarrassed me.</p>

<p>Here it is. Fifteen of the thirty five patterns are in that corpus. Eleven of them I confirmed by literal search with the occurrences counted, four more by reading, because no search catches a behaviour. Four of the thirty five do not apply to plain text posts at all, since they are about bold, subheads and article formatting.</p>

<p>The uncomfortable part is not fifteen. It is which one was densest. Not pattern 33, the fake-candid opening, which is the one I noticed on my own. It was pattern 27, pretending to reveal a deeper truth. "What the release never answers." "The detail almost nobody comments on." "The part nobody stopped to read." The phrase changes every time and the move never does, and it was in more posts than the tic I had already caught. It appeared in none of the five traps I wrote for myself in July, because I did not know it had a name.</p>

<p>That is the whole angle of this edition. A tool tells you what you fed it. The line that decides whether that is safe is in the README, below the fold, in a section people scroll past. Five of them this week, with that line pulled up to the top.</p>

<h2>How I checked</h2>

<p>One snapshot, August 31, 2026, between 12:17 and 12:22 UTC.</p>

<p>Repository numbers came from the authenticated <code>gh</code> CLI, not the public API, which was rate limiting this machine at 403 the last time I trusted it. Every URL below was hit with <code>curl</code> in the same window and answered 200. Where a README announces a number about itself, I counted it, and this week the counting produced two of the five catches on its own.</p>

<p>What I did not do: I did not install or run any of these during the verification. Nothing below is a benchmark I produced.</p>

<h2>1. OpenMontage</h2>

<p>An agentic video production system that turns your coding assistant into a studio, and that will cut a real documentary out of real archive footage without a single paid key.</p>

<p><strong>Link.</strong> <a href="https://github.com/calesthio/OpenMontage" target="_blank" rel="noopener">github.com/calesthio/OpenMontage</a></p>

<p><strong>What it does.</strong> You describe the piece in plain language and the agent runs the whole chain: research, script, voice direction, asset generation, edit, composition, render. It picks between Remotion and HyperFrames at proposal time depending on the brief. The part worth stopping on is the free path, and the README is specific about it: with zero API keys you get Piper for offline narration, Archive.org and NASA and Wikimedia Commons for open footage, Pexels and Unsplash and Pixabay for stock, FFmpeg for post, and word level subtitles. Ask for a documentary montage and say "use real footage only" and it builds a searchable corpus out of those archives and cuts actual motion clips into a timeline. That is not stills with a Ken Burns move on them.</p>

<p><strong>Who it is for.</strong> The editor who has to show a client a moving reference on Wednesday and has no shoot, no budget and no stock subscription.</p>

<p><strong>What it saves.</strong> Not measured by me. What the project publishes is cost, not time, and it publishes it per piece: a sixty second animated short at 1.33 dollars, a fifty second vertical film at about four dollars, a seven world showcase at about five. Those are their figures on their own videos, and they are generation costs, not your hours.</p>

<p><strong>Cost to install.</strong> Three commands, and four things that have to already be on the machine: Python 3.10 or newer, FFmpeg, Node 18 or newer, and an agent CLI.</p>

<pre><code>git clone https://github.com/calesthio/OpenMontage.git
cd OpenMontage
make setup</code></pre>

<p><strong>The catch.</strong> Two, and both came out of counting rather than reading.</p>

<p>The licence is AGPL-3.0, and the README states it twice: once as a badge near the top, once as a two word License section at the bottom that links to the file. Not MIT, not Apache. If you wrap this in something you offer to other people over a network, that licence family asks for your modified source back. For a production company building an internal service on top of it, that is the sentence that changes the meeting, and it is the shortest section in a 780 line README.</p>

<p>The second one is what the README does not say. I searched the whole file, all 43,842 bytes of it. The word "rights" appears zero times. "Copyright", zero. "Attribution", zero. "Public domain", zero. This is a system whose free path is built on pulling other people's footage out of Archive.org, Wikimedia Commons, Pexels, Unsplash and Pixabay and assembling it into your video, and it never once tells you that those sources carry different licences from each other and that some of them are not clear for a paying client. It is not dishonest. Nobody wrote the paragraph. Which means the person who has to know is you, on the day the client asks where the footage came from.</p>

<p><strong>Verified.</strong> August 31, 2026, 12:17 UTC. 54,858 stars, 6,847 forks, 276 open issues, AGPL-3.0, last push August 22 at 18:22 UTC, repository created March 29, 2026, not archived. The project site at <code>openmontage.video</code> answered 200 and the README embeds finished films you can watch before installing anything. The word counts above are mine, made with <code>grep</code> against the README as served by the GitHub API in that window.</p>

<h2>2. book-to-skill</h2>

<p>Points at a PDF, an EPUB or a whole folder and turns it into a skill your agent loads a chapter at a time instead of swallowing whole.</p>

<p><strong>Link.</strong> <a href="https://github.com/virgiliojr94/book-to-skill" target="_blank" rel="noopener">github.com/virgiliojr94/book-to-skill</a></p>

<p><strong>What it does.</strong> A deterministic Python extractor turns the document into clean text, then the agent follows a spec to build a structured skill: frameworks, decision rules, anti-patterns, one file per chapter. Then you ask <code>/your-book-slug</code> a question and it opens the right chapter instead of guessing. The README is honest that the name undersells it, and the example that matters for anyone in an agency is in its own section: a brand book. Sixty pages of tone of voice and component principles that nobody on the team has read since onboarding becomes something the agent can be asked.</p>

<p><strong>Who it is for.</strong> The art director who inherits a client's brand manual and has to write forty pieces of copy that sound like the client.</p>

<p><strong>What it saves.</strong> Not measured by me. Their published figure is tokens, not hours: 24 to 51 times fewer than dumping the book into context to answer one question, with the methodology in a separate document. They call the thing they are removing the discovery loop tax, which is the agent re-fetching and re-navigating the same table of contents on every turn.</p>

<p><strong>Cost to install.</strong> One command.</p>

<pre><code>npx skills add virgiliojr94/book-to-skill</code></pre>

<p><strong>The catch.</strong> Two lines in the same README that point in opposite directions, and they are 119 lines apart.</p>

<p>Line 121, in Usage, in passing, in the middle of a sentence about modes: after a conversion, the converter can publish the skill to GitHub, private by default, so any host installs it with <code>npx skills add</code>.</p>

<p>Line 240, in a Copyright and fair use section near the bottom that you reach only if you keep scrolling past the FAQ: do not redistribute, publishing or sharing a generated skill of a copyrighted work can infringe the rights holder, keep skills of third party books private.</p>

<p>Both are true and the project wrote both of them itself, which is more than most do. But the feature is one flag and the warning is a section, and "private by default" is a default, which is a thing you can change without meaning to. If the book is a client's brand manual under NDA rather than a book you bought, that distance between line 121 and line 240 is the whole risk. Read the second one before you use the first.</p>

<p><strong>Verified.</strong> August 31, 2026, 12:19 UTC. 27,477 stars, 2,844 forks, 16 open issues, MIT, last push the same morning at 11:41 UTC, repository created May 1, 2026, not archived. The README is 258 lines and I read all of them; the two line numbers above are counted in that file. The companion repository of use cases answered 200, so there is material to judge before installing.</p>

<h2>3. last30days</h2>

<p>Searches Reddit, Hacker News, X, YouTube, TikTok, GitHub and prediction markets in parallel and ranks what it finds by what people actually engaged with, then writes one brief.</p>

<p><strong>Link.</strong> <a href="https://github.com/mvanhorn/last30days-skill" target="_blank" rel="noopener">github.com/mvanhorn/last30days-skill</a></p>

<p><strong>What it does.</strong> You give it a topic, a person, a company, an "X versus Y". It resolves who matters for that topic, which subreddits, which handles, which repositories, then searches them at the same time and merges the same story told in three places into one cluster instead of three items. It pulls full YouTube transcripts and top Reddit comments with their upvote counts, not just titles and links. Reddit, Hacker News, Polymarket and GitHub work with no keys at all.</p>

<p><strong>Who it is for.</strong> The producer with a new business call on Thursday who needs to know what the last month actually said about that client, and not what their site says about themselves.</p>

<p><strong>What it saves.</strong> Not measured, and here I have to be careful, because the loudest numbers on that page are testimonials. Someone in the README says it removed ninety minutes of tab by tab searching. That is their claim, quoted by the project, not a measurement. The substitution is the honest version: it replaces the hour you spend opening Reddit threads and YouTube transcripts by hand before you write anything.</p>

<p><strong>Cost to install.</strong> One command, or two if you want the auto updating plugin route.</p>

<pre><code>npx skills add mvanhorn/last30days-skill -g</code></pre>

<p><strong>The catch.</strong> The X route runs on your own logged in browser session. The source table puts it plainly: log into x.com in any browser, or set a key. Cookies are the free option, and the free option means the account doing the scraping is yours. Their own evaluation document is the confirmation, because it says the eval deliberately does not pass browser cookie auth so that runs stay on what they call the popup free path, and it strips the local cookie config out of the environment as well. They route around it for their own testing. That is worth knowing before you point it at forty topics on a client account.</p>

<p>There is a second one, smaller and easier to trip. There is a <code>--publish</code> flag that turns your saved briefs into a hosted index and, in the README's own words, publishing is explicit opt in and public by default. There is no private setting on the other side of that flag. A brief titled with a client's name is a public page about that client the moment you use it.</p>

<p>The good news is that the same project gives you the way to check first. Run it with <code>--preflight</code> and it prints the config source, the browser cookie plan and every file it intends to write, without reading a cookie or writing anything.</p>

<p><strong>Verified.</strong> August 31, 2026, 12:17 UTC. 60,748 stars, 5,307 forks, 183 open issues, MIT, last push August 30 at 18:45 UTC, repository created January 23, 2026, not archived. The cookie line is in the README source table; the eval behaviour is in <code>docs/search-quality-eval.md</code>, which I opened and read in the same window. That document also says its own Jaccard and retention numbers are regression guards and not truth metrics, and that its precision figures are only as good as the judged pool, which is a project describing the limits of its own evidence before anybody asked.</p>

<h2>4. Archify</h2>

<p>Turns a system, a pipeline or a plain description into a self contained interactive diagram you can send as one HTML file.</p>

<p><strong>Link.</strong> <a href="https://github.com/tt-a1i/archify" target="_blank" rel="noopener">github.com/tt-a1i/archify</a></p>

<p><strong>What it does.</strong> The agent writes typed JSON, and a Node renderer compiles that deterministically into HTML and SVG after checking it. Five diagram types, four visual presets, dark and light, plus PNG, SVG, WebM and a 1200 by 630 share card out of the same source. You can search the nodes, trace what reaches what, and play a named chapter of the diagram as a guided story. It does not need a repository: you can describe the thing in chat and get a map of it.</p>

<p><strong>Who it is for.</strong> The post supervisor who has to explain a delivery chain to a client who does not know what a conform is, and does not want to do it in a screenshot of a whiteboard.</p>

<p><strong>What it saves.</strong> Not measured. The substitution is the diagram you would have drawn by hand in Figma and would then have to redraw every time the pipeline changed, because a hand drawn diagram has no source.</p>

<p><strong>Cost to install.</strong> One command.</p>

<pre><code>npx skills add tt-a1i/archify -g</code></pre>

<p><strong>The catch.</strong> One line, near the bottom, in a section called Reference and scope, and it is the most useful sentence in the README precisely because it is a list of refusals: automatic Mermaid parsing, general purpose auto layout, hosted sharing and WYSIWYG editing are intentionally outside the current scope.</p>

<p>Read that as four separate facts. You cannot paste in a Mermaid diagram you already have. There is no auto layout, so the arrangement is authored, not solved for you. There is no hosted sharing, so distribution is you sending a file. And there is no canvas, so when the client says move that box to the left, you do not drag it, you go back to the JSON and the agent. For anyone whose instinct is Figma or Miro, that last one is the whole decision, and it is one sentence in a 18,697 byte README that most people close after the gallery.</p>

<p><strong>Verified.</strong> August 31, 2026, 12:19 UTC. 36,878 stars, 2,363 forks, 85 open issues, MIT, last push the same day at 04:41 UTC, repository created April 15, 2026, not archived. Stated stable version 2.16.0. The Proof Lab gallery at <code>tt-a1i.github.io/archify/gallery.html</code> answered 200 and holds eleven checked in scenarios with their JSON sources, so this is one you can reject in a minute without installing it.</p>

<h2>5. dublagem</h2>

<p>Mine. Dubs a video into as many languages as you ask for through the ElevenLabs Dubbing v2 REST API, one job per language, and stops to confirm the cost before it spends anything.</p>

<p><strong>Link.</strong> <a href="https://openyourais.com/skills/">openyourais.com/skills</a></p>

<p><strong>What it does.</strong> You give it a local file or a URL. It never assumes a target language, it asks every single run. Then it makes one dubbing job per language, waits for each to finish, downloads a file per language into a dated folder, and writes a metadata file recording the engine, the source, the languages, the job identifiers, the duration and the credit balance before and after. There is an optional second engine, Higgsfield, which adds lip sync on the picture, and it only runs if you ask for it by name.</p>

<p><strong>Who it is for.</strong> Anyone who has to deliver the same thirty second film in Portuguese, English and Spanish by Friday and has been quoted three separate studio bookings for it.</p>

<p><strong>What it saves.</strong> Not measured, and the substitution here is a booking rather than an afternoon: it replaces the session where you record a second voice track. Whether that is a saving or a loss depends entirely on whether the second voice was supposed to be a performance.</p>

<p><strong>Cost to install.</strong> One command, plus an ElevenLabs key it reads from your environment and never stores in the file.</p>

<pre><code>unzip dublagem.zip -d ~/.claude/skills/</code></pre>

<p><strong>The catch.</strong> The default clones the voice.</p>

<p>The parameter is <code>disable_voice_cloning</code>, it ships as false, and the skill says so in its own text. So the ordinary path, the one you get by typing "dub this into Spanish" and pressing return, takes the actual voice of whoever is speaking in your source and reproduces it saying words they never said, in a language they may not speak. There is a documented flag that switches to a library voice instead, and almost nobody will ever set it, because you have to know it exists to want it.</p>

<p>Whose voice that is, and whether the release they signed covers this, is not something the tool can know or check. It is an API parameter. It is on you, and it is on you at the exact moment when it is easiest not to think about it, which is when the job is already running.</p>

<p>The second thing is arithmetic, and it is the kind you should do before rather than after. Dubbing bills per minute of media multiplied by the number of languages. A ninety minute film into five languages is four hundred and fifty billed minutes, not ninety. That is why the skill has a mandatory stop before it fires anything: it tells you the duration and the language count and waits for an explicit yes. I put that gate in after a run I did not want to pay for.</p>

<p><strong>Verified.</strong> August 31, 2026, 12:22 UTC. Read out of the published zip at <code>openyourais.com/skills</code>, which answered 200. Five files, 9,982 bytes unpacked: a README, a SKILL.md of 6,764 bytes, and one reference document. Licence MIT, declared in the skill's own frontmatter, which is the field last week's skill did not have. The instructions inside are in Portuguese, which is the honest state of it today.</p>

<h2>What I did not verify</h2>

<p>This section is permanent. If it is ever empty, the checking was lazy.</p>

<p>I did not install or run any of the four GitHub skills. Nothing above is a benchmark I produced.</p>

<p>I did not reproduce OpenMontage's per video costs. Those are the project's figures on the project's own films, and generation prices move.</p>

<p>I did not read the AGPL-3.0 file in the OpenMontage repository. I read the badge and the License section that points at it, and I am not a lawyer. If this is going into a company, that is a conversation with someone who is.</p>

<p>I did not re-run book-to-skill's token measurements. I read the claim and where the methodology lives, and I did not open the per book tables.</p>

<p>I did not test whether last30days actually reads browser cookies. I read the source table that offers it and the evaluation document that routes around it, and I am reporting both descriptions, not an audit of the code.</p>

<p>I did not open all eleven Archify scenarios. I confirmed the gallery answers 200 and that the scenarios and their sources are checked into the repository.</p>

<p>On my own count from the top of this article: the fifteen out of thirty five is a count I made by reading each of the thirty five pattern definitions and writing an equivalent Portuguese search for each one, because the humanizer's trigger phrases are in English and my posts are not. A literal search is a floor, never a ceiling. It finds the phrase. It does not find the behaviour. The real number is at least fifteen and I cannot tell you how much more.</p>

<p>And the star counts are a photograph, not a fact. Every one of them above has a timestamp for exactly that reason.</p>

<h2>The rule</h2>

<p>Before you install anything this week, open the README and search it for the words the project chose not to use. Five minutes with <code>grep</code> found two of this edition's five catches, and neither of them was hiding. One was a licence stated twice in a file of 780 lines. The other was a word that appeared zero times in a tool built entirely on other people's footage.</p>

<p>Next Monday, five more.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>VERIFICATION NOTE, August 31, 2026.
Every repository number in this article was read by me on August 31, 2026, between 12:17 and 12:22 UTC.
Repository metadata came from the authenticated `gh` CLI, not the public unauthenticated API.
Every URL in the article was hit with `curl` in the same window and returned HTTP 200.
Counts described as counted were counted by me, with `grep` or `wc`, against the file as served in that window, not read off a badge.
Nothing here is recalled from memory. The four GitHub skills were NOT installed or executed on this
machine during the verification, and the article says so out loud in its own section.
The humanizer figures at the top come from a count made on August 24, 2026, between 23:04 and 23:30 UTC,
against a corpus of 38 posts read from my own published record.</p>
</section>
