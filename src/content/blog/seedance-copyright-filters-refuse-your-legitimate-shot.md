---
id: "art-170"
title: "Seedance Copyright Filters: They Fail the Wrong People"
description: "ByteDance signed with the MPA and the guardrails are output filters. They rarely stop the person copying Iron Man. They stop the shot due on Friday."
pubDate: "2026-08-22"
toolVersion: "2026-08"
category: "AI"
tags:
  - "Seedance"
  - "Copyright"
  - "AI Video"
  - "Production"
  - "Workflow"
  - "Craft"
heroImage: "https://images.unsplash.com/photo-1609039504401-47ac3940f378?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw2fHx0aGVhdGVyJTIwc3RhZ2UlMjBkcmFtYXRpYyUyMGxpZ2h0aW5nfGVufDF8MHx8fDE3ODczMTc1MTB8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<p>On August 17, 2026, ByteDance signed a memorandum of understanding with Hollywood's Motion Picture Association covering Seedance and Seedream, the video and image models behind the AI features in TikTok, CapCut and Dreamina. The Seedance copyright question that had been sitting open since February, when Disney and other studios objected to the tools generating recognizable characters and celebrity likenesses, got its first formal answer.</p>

<p>The coverage read it one way. Hollywood pushed, ByteDance moved, the guardrails go up. The MPA said the agreement reflects a determination to "further fortify those guardrails" on the platforms.</p>

<p>I use Seedance 2.0 and 2.5 on paid jobs, through Higgsfield, in São Paulo. So I read that sentence differently, and I think most of the people writing about it have never had a generation refused with a client on the call.</p>

<h2>What the Seedance copyright deal actually changes</h2>

<p>Read what the agreement is and what it is not, because the gap between those two things is the whole story.</p>

<p>It is a memorandum of understanding. It addresses outputs. The mechanism, as far as anyone outside the two organizations can tell, is filtering: the model gets better at not producing a recognizable copyrighted character or a recognizable celebrity face.</p>

<p>It is not a licensing deal. No studio is being paid for the use of its catalogue under this framework. And it does not resolve the question underneath everything, which is whether training the models on those catalogues in the first place was infringement. That question is still open. Nothing signed on August 17 closes it.</p>

<p>So the thing that got settled is the cheap half. Output filtering is the part you can ship in a model update and announce in a press release. Whether the library was scraped to teach the model what a superhero looks like is the expensive half, and the expensive half is exactly the half that was left out. That was already the open question when <a href="/blog/seedance-2-0-bytedance-ai-video-capabilities-copyright-controversy/">Seedance 2.0 arrived with the controversy attached</a>, and it is still the open question now, with a signature next to it.</p>

<h2>Who actually pays for an output filter?</h2>

<p>Here is the part nobody is saying, and it is not complicated once you have been on the receiving end of a content filter.</p>

<p>A filter tuned to refuse is a filter that refuses. It does not have a special sense for intent. It does not know that you are not trying to make Iron Man. It knows that something in your prompt, or something in your reference image, or something in the shape of the face it just rendered, crossed a threshold.</p>

<p>The person genuinely trying to generate a copyrighted character will iterate. They have time, they have no deadline, and defeating a filter is a hobby with a large and enthusiastic community around it. They will get there or they will go elsewhere.</p>

<p>The person who eats the refusal is the working one. It is the director who fed a reference of an actor the client hired, wearing a costume the client approved, and got a block. It is the shot where the product happens to sit next to something the classifier reads as a protected mark. It is the fourth revision at eleven at night with a delivery in the morning.</p>

<p>Filters are asymmetric. They cost the compliant user real time and cost the determined user an afternoon. That is not an argument against having them. It is an argument for knowing who is holding the bill, and in this case the bill goes to production.</p>

<h2>The version problem underneath it</h2>

<p>ByteDance has said newer versions of the models already carry stronger intellectual-property safeguards. It has not said what they are, what they refuse, or how the refusal is triggered. Neither party has published enforcement detail.</p>

<p>Sit with that for a second in the context of an actual pipeline. You built a look on a version of a model. You tested it. You showed the client the test. You booked the job on the strength of that test. Then the model updates, quietly, the way models do, and the thing you sold now returns a refusal on a prompt that worked last week.</p>

<p>That is not a hypothetical failure mode. That is the ordinary behaviour of a hosted model, and the only new thing here is that there is now a signed agreement giving the vendor an outside reason to tighten. I wrote about the same structural problem when <a href="/blog/seedance-2-5-1080p-what-the-resolution-upgrade-costs/">1080p arrived with a shorter clip attached</a>. The specification you were sold and the specification you get on delivery day are two different documents, and nobody sends you the diff.</p>

<h2>What this means for the file you deliver</h2>

<p>None of this transfers liability. That is the piece that gets lost when a big agreement is announced, because a signed pact feels like protection and it is not protection for you.</p>

<p>The MOU is between ByteDance and the MPA. You are not a party to it. If a filter lets something through, the exposure sits where it always sat, with the production company and the client whose name is on the film. The guardrail is a product feature, not an indemnity.</p>

<p>This is the same shape as the provenance problem I went through when <a href="/blog/ai-video-watermark-rules-what-your-export-deletes/">the watermark rules went live</a>. The vendors solved their half upstream and the coverage treated that as the end of it, when the half that leaves the building with your name attached was still entirely yours. Same pattern here. The tool got safer. Your obligation did not get smaller.</p>

<p>Pichorra produced for WMcCann as a production company, so I have sat through the clearance rounds where legal goes through a board frame by frame asking what that logo is, whose face that is, and where the music came from. Nobody in that room ever accepted "the software would have stopped me" as an answer. They should not start now.</p>

<h2>What I would actually change on Monday</h2>

<p>Three things, and they are boring, which is usually the sign that they are the real ones.</p>

<p>Test the refusal before you sell the look, not after. If a campaign depends on a face, a costume, a car, a mark, or anything else a classifier might read as protected, run those generations during the pitch, not during the delivery week. A refusal discovered in a pitch is a creative note. The same refusal discovered on the Thursday is a crisis.</p>

<p>Keep a fallback path that does not go through the same filter. Different model, different vendor, or the old answer, which is a camera. The point is not that Seedance is unreliable. The point is that a single hosted dependency with an undisclosed and now externally motivated refusal policy is not a pipeline, it is a bet. I use Kling for image to video and Gemini Omni for complex camera moves for reasons that have nothing to do with this, and the side effect is that no one refusal stops the job.</p>

<p>Write the clearance step into the schedule as a line item with hours attached. Not as something you do at the end if there is time. The industry got very good at treating AI generation as the step that removes production overhead, and this agreement is a reminder that it also adds a category of overhead that did not exist before, which is proving that the machine did not hand you something you are not allowed to use. That work is real, it takes time, and somebody is paying for it whether or not it appears on the budget.</p>

<h2>The honest read</h2>

<p>The MPA got a framework. ByteDance got to stop being the defendant in the story. Both of those are real outcomes and neither of them is bad.</p>

<p>What did not happen is the thing that would actually matter to anyone who makes a living from this, which is a licensing structure that pays for the catalogues and settles the training question. That is still open, and until it closes, every one of these agreements is a filter update with a signature on it.</p>

<p>The guardrail went up. Check who it is standing in front of. In my experience it is rarely the person it was built for, and it is almost always the person carrying the delivery.</p>

<section class="article-note note-sources">
<h2>Sources and verification</h2>
<p>Facts verified August 22, 2026 against two or more independent sources per claim.</p>
<ol>
<li>Date and existence of the agreement: ByteDance and the Motion Picture Association signed a memorandum of understanding announced Monday, August 17, 2026. Sources: The Next Web, "ByteDance signs a copyright pact with Hollywood's MPA to rein in its Seedance AI video tool" (states August 17, 2026), and Variety, "MPA Strikes Deal with ByteDance for IP Protections in AI Models". Corroborated by NBC News ("ByteDance signs AI copyright pact with Hollywood Motion Picture Association"), The Hollywood Reporter ("MPA Inks AI Video IP Protection Deal with TikTok Owner ByteDance") and PetaPixel (published August 18, 2026). Note: PetaPixel's copy reads "Monday, August 18"; August 17 is the Monday, and two independent sources give August 17 as the announcement date, so August 17 is used here.</li>
<li>Scope: the MOU covers the Seedance video model and the Seedream image model as they appear in TikTok, the TikTok USDS joint venture, CapCut and Dreamina: The Hollywood Reporter and The Next Web (independent).</li>
<li>Nature of the safeguards: the deal addresses output safeguards, that is preventing generation of recognizable copyrighted characters and celebrity likenesses, rather than training data: The Next Web, corroborated by Variety and technosports.co.in.</li>
<li>What it does not cover: it is not a licensing deal, studios are not being paid for use of their catalogues, and it does not resolve whether training on copyrighted material constituted infringement: Variety and The Next Web (independent).</li>
<li>Background: the MPA sent ByteDance a cease-and-desist letter earlier in 2026, and Disney and other studios raised concerns in February 2026 that the tools could generate copyrighted characters and celebrity likenesses without authorization: Variety and The Next Web.</li>
<li>MPA framing, short quote "further fortify those guardrails": PetaPixel, quoting the MPA statement.</li>
<li>ByteDance position that newer model versions already carry stronger intellectual-property safeguards, with specifics undisclosed, and no public detail from either party on enforcement mechanisms: The Hollywood Reporter and The Next Web. No claim is made here about what any specific Seedance version refuses today, because refusal behaviour is not published, changes without notice, and has to be tested per job. No false-positive rate is claimed, because none has been published by either party.</li>
</ol>
</section>
