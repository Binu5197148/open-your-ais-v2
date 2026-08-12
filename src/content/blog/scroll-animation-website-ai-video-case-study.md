---
id: "art-164"
title: "Scroll Animation Website: How I Built One With AI Video"
description: "A scroll animation website where the camera flies through an isometric world, built with AI-generated video for a real client. The technique, the one rule that breaks it, and what shipped."
pubDate: "2026-08-12"
category: "AI"
tags:
  - "Case"
  - "Workflow"
  - "Scroll Animation"
  - "Web Design"
  - "AI Video"
heroImage: "https://images.unsplash.com/photo-1532800783378-1bed60adaf58?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHw4fHxmaWxtJTIwc2V0JTIwY2luZW1hdG9ncmFwaHl8ZW58MXwwfHx8MTc4NjUzNjkyN3ww&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "7 min read"
---

<p>The site is live, so start there: <a href="https://www.danielferreira.adv.br/" target="_blank" rel="noopener">danielferreira.adv.br</a>. Scroll it on a desktop and watch what happens around the middle of the page. The camera descends into a port at night, cranes and containers laid out like a model on a table, then travels on to a logistics warehouse, then to the road. You are not scrolling past pictures. You are flying a camera, and your scroll wheel is the dolly grip.</p>

<p>It is a labor lawyer's website. Daniel Ferreira works in Santos, the largest port city in Brazil, and his clients are dock workers, truck drivers, warehouse crews, people who spend their lives inside those exact spaces. That is the whole reason the technique earns its place, and I will come back to it.</p>

<h2>What a scroll animation website actually is</h2>

<p>The effect people call scroll animation usually means one of two very different things. The common one is CSS: elements fade in, slide, parallax as they enter the viewport. Cheap, fast, and everywhere, which is exactly why nobody notices it anymore.</p>

<p>The other one is scroll scrubbing, and it is closer to editing than to web design. You pre render a single continuous camera move as a video file, then you stop letting the video play on its own. Scroll position becomes the playhead. Scroll down, time moves forward. Stop, the camera freezes mid flight. Scroll up, the camera reverses. Apple has used this for years on product pages, and most visitors never realize they are watching a video at all.</p>

<p>On Daniel's site the file is one 47 second flight. Eleven sections of page, thirteen thousand pixels of scroll, and underneath the middle of it, a single continuous shot that never cuts.</p>

<h2>How the flight gets built</h2>

<p>The pipeline has four stages, and only the last one is web development.</p>

<p><strong>First, the scenes as stills.</strong> Each beat of the story gets one image: the port, the warehouse, the road. I generate them as isometric dioramas, everything lit like a model shot on a black table, so the world reads as a single physical object rather than three unrelated illustrations. Consistency here is the entire budget. If the three scenes do not look like they were built by the same hands, no amount of camera work saves it.</p>

<p><strong>Second, the dive in clips.</strong> Each still becomes a camera move that starts outside the scene and descends into its interior. This is where a director earns the fee: the descent has to arrive at the exact framing where the headline will sit, because the text is not floating over decoration, it is landing on a mark.</p>

<p><strong>Third, the connectors.</strong> Between scene one and scene two there is a clip that flies out of the first world and into the second. Same for two to three. These are the shots nobody notices when they work and everybody notices when they fail.</p>

<p><strong>Fourth, the scrub engine.</strong> A small piece of code that maps scroll position to video time. That part is genuinely simple. The illusion is not built in the browser, it is built upstream, in the generation.</p>

<h2>The one rule that breaks everything</h2>

<p>The seams have to be frame identical. The last frame of the dive into the port and the first frame of the connector leaving the port must be the same image, pixel for pixel, or the visitor sees a jump cut in what is supposed to be one unbroken flight.</p>

<p>This is the single most common failure in the whole technique, and it is unforgiving in a way that will be familiar to anyone who has ever cut picture. A model that generates a beautiful clip starting one frame off is worse than useless, because it looks almost right, which is the worst thing a shot can look. You extract the exact last frame, you feed it as the first frame of the next generation, and you check it by eye before building anything on top.</p>

<p>Every hour I have lost on this technique was lost at a seam. Not one was lost in the code.</p>

<h2>The decision that is not technical</h2>

<p>Here is the part that has nothing to do with AI, and everything to do with why the page works.</p>

<p>A lawyer's website could have flown through anything. Marble columns, gavels, a courthouse, the stock imagery of the profession. We flew through a port at night, a warehouse, a truck on a road at the hour when the shift ends.</p>

<p>Those are not the lawyer's spaces. They are his clients' spaces. A dock worker landing on that page sees his own gate, his own containers, his own night. Before reading a single word about periculosity or overtime, he has already been told the thing that matters: this person knows where I work.</p>

<p>Not because the animation is impressive. Because the animation is about the reader instead of about the firm. The tool decided nothing there. A model can render a thousand worlds; choosing which one the visitor lives inside is the job, and it is the same job I have been doing on sets for fourteen years, just with a different machine at the end of the arm.</p>

<h2>What mobile taught me</h2>

<p>On phones, the flight does not load at all. The video element sits there with preload off, display none, and a poster frame in its place.</p>

<p>That was deliberate, and it is the least glamorous decision in the project. Scroll scrubbing a video on a mid range phone over mobile data is a bad experience: heavy download, stuttering scrub, hot battery. The people this site is built for are frequently reading it on the phone, on the way home from a shift. So the desktop gets the cinema and the phone gets a fast, still, perfectly legible page that loads in about a second.</p>

<p>Ship the version that serves the person, not the version that serves the demo reel. I wrote about that same tension when <a href="/blog/ai-replacing-jobs-nobel-economists-letter-directors-answer/">the economists warned about AI and jobs</a>: the tools are getting extraordinary, and the judgment about where to point them is still the entire value.</p>

<h2>What it takes to do this yourself</h2>

<p>The honest list, in order of how much they matter:</p>

<ul>
<li>A story with real beats. Three worlds your visitor recognizes beat ten worlds that look expensive. Write the beats before generating anything.</li>
<li>Ruthless scene consistency. One art direction, one light, one scale. I build the first still until it is undeniable, then everything else inherits from it.</li>
<li>Frame identical seams. Extract, feed forward, verify by eye. No exceptions.</li>
<li>A fallback you are not ashamed of. Half your traffic will never see the flight, and that half still has to convert.</li>
</ul>

<p>The generation runs on the same stack I use for client film work, Higgsfield driving the image and video models, and the page itself is plain code that any framework can host. There is no plugin to buy. There is a method, and the method is mostly discipline about seams and taste about worlds.</p>

<p>This is the first entry in a section I am opening for finished work: what shipped, what it took, and what broke on the way. The next one is a film, and it has a client logo on it. For the tool level version of these pipelines, the <a href="/workflows/">workflows section</a> has the guides.</p>
