---
id: "art-171"
title: "Static Content Gets Eaten. Interactive Tools Get Recommended"
description: "When the answer is a number, the chatbot says it on its own screen and nobody clicks. So I stopped writing pages that answer and built one that makes you decide: a video storage calculator where every data rate traces back to a published document. What AI eats is what requires information. What survives is what requires a decision."
pubDate: "2026-08-22"
toolVersion: "2026-08"
category: "AI"
tags:
  - "AI Search"
  - "Tools"
  - "Workflow"
  - "Craft"
  - "Case"
heroImage: "https://images.unsplash.com/photo-1771911655658-7420dae0322a?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwzfHxjaW5lbWElMjBoYWxsJTIwZW1wdHl8ZW58MXwwfHx8MTc4NzQwOTgwMXww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "8 min read"
---

<!-- Verification note, August 22, 2026. Every factual claim about axenworks.com in this article was read directly off the live site on August 22, 2026 (HTTP 200, served from Vercel), not recalled: the seven calculators; the sources page listing the Apple ProRes white paper of April 2022, document 028-00500-A, with the Target Data Rates appendix on pages 19 to 21; the on-page line "All 58 rows and 348 cells of the target data rate table from the Apple ProRes white paper, April 2022"; the BRAW derivation and its stated agreement within two percent of the Blackmagic RAW data rate calculator on every setting tested; the twelve bits per photosite figure exposed as a user input; the GoPro Support HERO13 Black SD card capacity article dated 04/09/2024, shipped unmodified and scaled linearly, with implied data rates labelled as arithmetic on GoPro's numbers rather than GoPro published rates; SMPTE ST 12-1 cited rather than quoted because it is a paid standard; the SD Association capacity overview; and the refusal list (no camera model bitrate tables, no Instagram recommended bitrate, no constant quality BRAW file size). NO claim is made in this article about traffic, rankings, citation share, click-through rates, or how any specific model chooses sources, because the site is days old and I have measured none of it. The argument about cited sources is stated as a bet and labelled as one. -->

<p>I put a calculator online this week. It is at <a href="https://axenworks.com" target="_blank" rel="noopener">axenworks.com</a>, it works out how much video fits on a card and how long you can record before it fills, and the part I care about is not the arithmetic. It is that every data rate inside it comes from a document somebody published, and the site names the document.</p>

<p>That single decision is the whole article. I will explain why I made it, what it cost, and what I cannot prove yet.</p>

<h2>The pages that are being eaten</h2>

<p>Start with the behaviour, because it is not controversial and everyone reading this has done it.</p>

<p>You want to know how many gigabytes an hour of ProRes 422 HQ takes at 4K. You ask a chatbot. It answers on its own screen. You never click anything. The blog post that used to hold that answer, the one wrapped in eight hundred words of introduction about why storage planning matters, does not get the visit, does not get the ad impression, does not get you.</p>

<p>I am not citing a study here, and I am not going to invent a percentage. I am describing a habit I watched change in myself, and then in everybody around me. The informational blog post is not dying because Google punished it. It is dying because the thing it was for now happens somewhere else, in a window that has no link in it.</p>

<p>I wrote about the flood of machine written pages back when <a href="/blog/ai-content-flood-google-search-2026/">Google moved against it</a>, and about <a href="/blog/perplexity-vs-google-search-2026/">what replaced my own research habit</a>. Both of those were about quality. This is a different problem, and quality does not solve it. A brilliant page that answers a question is still a page that answers a question, and the answer now arrives without it.</p>

<h2>The thing a model will not do for you</h2>

<p>Now watch what happens when the question stops having one answer.</p>

<p>Ask how long you can record. The honest reply is a set of questions. Which codec. Which frame size. Which frame rate. How big is the card. Are you shooting handheld pickups or a locked interview that runs forty minutes without stopping. Six variables, and the person asking has to supply them, look at the result, change one, and look again.</p>

<p>That loop is not an answer. That is a decision being made, and it happens in the user's head with something under their hands. You do not know what you think until you have seen three results sitting next to each other and felt one of them be wrong.</p>

<p>A model can describe that loop. It can run one pass of it for you. What it cannot be is the surface you run the loop on. So it does the sensible thing and points at the surface.</p>

<p>This is a light meter. The meter gives you a reading. It has never once told anybody where to put the light.</p>

<h2>Why the cited source is the whole advantage</h2>

<p>Here is the part I understood only by building the thing, and here is where I have to be careful about what I claim.</p>

<p>A system that answers questions carries one problem above all others. It has to stand behind a number. A page that says ProRes 422 HQ at 4K is roughly this much is a liability to lean on. A page that says this figure is printed in the Target Data Rates appendix of Apple's ProRes white paper, April 2022, document 028-00500-A, pages 19 to 21, is something you can safely repeat, because the attribution travels with it.</p>

<p>That is my reasoning, and I want to be exact about its status. It is a bet. It is not a measurement. The site is days old. I have no ranking data, no referral data, no citation data, nothing. Anyone who tells you they have proven how these systems pick their sources should be asked to show you the experiment before you rearrange your work around their answer.</p>

<p>But I built it that way, and building it that way is what taught me the real lesson, which turned out not to be about search at all.</p>

<h2>What citing the source actually costs</h2>

<p>The ProRes tables are not derived and not rounded into friendlier numbers. All 58 rows and 348 cells of the target data rate table were carried across from the white paper, and the calculator reads from that table and nothing else.</p>

<p>Blackmagic does not publish a rate table. It publishes compression ratios. So the site derives the rate from the ratio and prints the working on the page, and it lands within two percent of Blackmagic's own data rate calculator on every setting tested. The assumption of twelve bits per photosite sits on the page as an input you can change, rather than as a constant hidden in the code where nobody can argue with it.</p>

<p>GoPro's HERO13 Black capacity chart, from a support article dated 04/09/2024, ships unmodified and scales linearly, because that is the method GoPro itself recommends. Where the site shows an implied data rate next to those times, every page carrying that number says out loud that it is arithmetic done on GoPro's published recording times and not a rate GoPro ever published.</p>

<p>SMPTE ST 12-1 defines the drop frame rules. It is a paid standard, so it gets cited and not quoted.</p>

<p>Then there are the refusals, which took longer than any of the tables. No list of camera models with bitrates, because manufacturers mostly do not publish them and the tables circulating online have been copied off each other for years. No Instagram recommended bitrate, because Instagram does not publish one. No file size for constant quality BRAW, because that mode is unpredictable by design and a number there would be a lie with a decimal point on it.</p>

<p>The site states plainly that it will not show you a table of camera models with invented bitrates. That sentence was the most expensive thing on the whole build, because writing it meant deleting the page with the most obvious search demand.</p>

<p>Which is the point. The citation is not decoration on the product. The citation is the product. Everything else is a formula a competent person could write in an afternoon.</p>

<h2>The same rule in the edit room</h2>

<p>Now the part that matters more to me, because I have spent fourteen years directing commercial film in São Paulo and I now spend my days building automation.</p>

<p>What AI eats is what requires information. What survives is what requires a decision. That is the same sentence in both halves of my week.</p>

<p>A model renders forty versions of a frame in the time it used to take to brief the illustrator. That is information, and it has been absorbed, permanently, and I am not mourning it. Which of the forty carries the client's story, and which beautiful one I kill because it is beautiful and wrong, is a decision. Nothing has moved that job by an inch.</p>

<p>On the <a href="/blog/scroll-animation-website-ai-video-case-study/">scroll site I built for a labor lawyer in Santos</a>, the generation was the cheap half. Choosing to fly the camera through a port at night instead of through marble columns and gavels was the entire film. The machine would have rendered the columns beautifully. It had no opinion about who was going to be reading that page on the bus home from a shift.</p>

<p>The tools amplify what you hand them. That has been the argument of this site since <a href="/blog/why-open-your-ais-exists/">the first thing I published here</a>, and a calculator is a strange place to find it confirmed, but there it is. The arithmetic was free. Deciding which numbers were allowed in the building was the work.</p>

<h2>Where this could be wrong</h2>

<p>Three limits, and I would rather state them than have them found.</p>

<p>Not every subject has a tool hidden inside it. Some things are genuinely one answer, and the page that used to hold that answer is gone, and no amount of interface design brings it back. Pretending otherwise is nostalgia with a business plan attached.</p>

<p>The tool has to be worth the trip. A thin wrapper around a sum anybody can do in their head is not a moat, it is a landing page with a text field. The reason mine has any claim on your attention is the sourcing underneath, and the sourcing is the slow part by a wide margin.</p>

<p>And these systems change. What gets surfaced and cited this month is not a law of physics. I have watched enough platform behaviour shift under a finished job to know better than to build a career on one assumption about how a model picks its sources.</p>

<h2>What I would do on Monday</h2>

<p>Take your archive and sort it into two piles. Posts that answer a question, and posts that make somebody decide something.</p>

<p>The first pile is already being eaten, whether or not your analytics have caught up. The second pile is the raw material for something with inputs in it.</p>

<p>Then show your sources, and not as a trust badge in the footer. As the actual thing you are selling. In a period when anybody can generate a confident number in four seconds, the number that can be traced back to a document is worth more than the number that sounds right, and that is true for a data rate table and it is true for the claim you are about to make to a client.</p>

<p>I said the same thing in a different key when <a href="/blog/ai-replacing-jobs-nobel-economists-letter-directors-answer/">the economists wrote their letter about jobs</a>. The machine is extraordinary at handing you information. It has not once decided anything for me. That is not a limitation of the current models that some future version will patch out. That is the job description, and it did not change.</p>
