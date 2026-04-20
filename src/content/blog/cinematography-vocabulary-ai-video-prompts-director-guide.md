---
id: "art-076"
title: "14 Years on Set Taught Me This: AI Video Models Respond to DP Language. Here's How to Use It."
description: "AI video generators in 2026 understand dolly moves, rack focus, Dutch angles, and crane reveals — the same vocabulary a real cinematographer uses. If you are prompting in plain English, you are leaving quality on the table."
pubDate: "2026-03-15"
category: "AI"
tags:
  - "AI Video"
  - "Cinematography"
  - "Production Guide"
  - "Prompting"
  - "Director Tips"
heroImage: "https://images.unsplash.com/photo-1613488328514-e424950c0b0d?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxN3x8bmVvbiUyMGNpdHklMjBuaWdodCUyMHN0cmVldHxlbnwxfDB8fHwxNzc2NzI0MjcwfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85"
author: "Ulisses Balbino"
readTime: "10 min read"
featured: true
---

<h2>The Prompt Problem Nobody Talks About</h2>
<p>Most people prompting AI video tools describe what they want to happen in a scene. &quot;A person walking through a city street at night.&quot; &quot;A product rotating on a white background.&quot; &quot;Two people having a conversation at a table.&quot;</p>
<p>That is content description. It tells the model what the scene contains. It does not tell the model how to shoot it.</p>
<p>Directors and cinematographers speak differently on set. The same city street at night scene might be: &quot;Low angle Dutch tilt, handheld with motivated camera shake, rack focus from background signage to foreground subject as they pass, practical neon lighting motivated left.&quot;</p>
<p>After 14 years directing commercial productions — Starbucks, Nestlé, Yamaha, Carrefour, Benefit — this is the vocabulary that became second nature. And in 2026, the major AI video models understand it. Runway Gen-4.5, Kling 3.0, Sora 2, and Veo 3.1 all respond to cinematography language in ways that meaningfully change output quality.</p>

<h2>Camera Movement Vocabulary That Works</h2>
<p>These terms translate consistently across the current generation of AI video models:</p>
<p><strong>Dolly in / dolly out</strong> — camera physically moving toward or away from subject. Creates a different feel than zooming, which changes focal length without moving the camera. AI models generally handle this correctly when specified explicitly.</p>
<p><strong>Tracking shot / follow shot</strong> — camera moves laterally to follow a subject. Specify direction: &quot;left-to-right tracking shot following the subject.&quot;</p>
<p><strong>Crane up / crane down</strong> — vertical camera elevation. Useful for reveal shots. &quot;Crane down from rooftop to street level, ending on protagonist.&quot;</p>
<p><strong>Handheld</strong> — camera movement with organic instability. &quot;Handheld with motivated shake&quot; specifies that the movement should feel like an operator making intentional choices, not random jitter. This distinction matters for tone.</p>
<p><strong>Steadicam / gimbal</strong> — smooth, floating camera movement. Useful for following action without the instability of handheld.</p>
<p><strong>Static / locked-off</strong> — no camera movement. Often the most powerful choice for emotional scenes. Specifying &quot;static locked-off medium shot&quot; prevents the model from adding unnecessary movement.</p>

<h2>Focus and Lens Vocabulary</h2>
<p><strong>Rack focus</strong> — shifting focus from one plane to another during a shot. &quot;Rack focus from background subject to foreground object&quot; is a classic reveal technique. AI models handle this well when the subjects are clearly positioned in the prompt.</p>
<p><strong>Shallow depth of field / wide open</strong> — blurred background, sharp foreground. Specify approximate focal length if you want a specific look: &quot;85mm equivalent, wide open, shallow depth of field.&quot;</p>
<p><strong>Deep focus</strong> — both foreground and background in sharp focus simultaneously. Often associated with wide angle lenses.</p>
<p><strong>Anamorphic</strong> — the horizontal lens flare and bokeh shape associated with anamorphic lenses. Adding &quot;anamorphic lens characteristics&quot; to a prompt reliably produces that look in most current models.</p>

<h2>Framing and Composition Vocabulary</h2>
<p><strong>Dutch angle / canted angle</strong> — tilted horizon line. Communicates psychological unease or instability. Specify degree for more control: &quot;15-degree Dutch tilt.&quot;</p>
<p><strong>Low angle</strong> — camera below subject eye level, shooting upward. Makes subjects feel powerful, imposing, or threatening depending on context.</p>
<p><strong>High angle / bird&apos;s eye</strong> — camera above subject. Can convey vulnerability, surveillance, or scale.</p>
<p><strong>Over the shoulder</strong> — framing one subject from behind the shoulder of another. Standard for dialogue scenes. Specify which shoulder for matching across cuts.</p>
<p><strong>Two-shot / three-shot</strong> — specifies how many subjects appear in frame.</p>

<h2>Lighting Vocabulary</h2>
<p><strong>Motivated lighting</strong> — light that appears to come from a source visible or implied in the scene. &quot;Practical neon lighting motivated left&quot; means the light looks like it is coming from the neon sign visible in the scene.</p>
<p><strong>Rembrandt lighting</strong> — specific portrait lighting with characteristic triangle of light on the shadowed side of the face. AI models trained on enough cinematography reference know this term.</p>
<p><strong>Golden hour / magic hour</strong> — warm directional light at low angles. More reliable than trying to describe the specific color temperatures.</p>
<p><strong>Hard light vs soft light</strong> — hard light creates defined shadows (direct sun, harsh fixtures), soft light wraps and fills (overcast, diffused).</p>

<h2>Putting It Together</h2>
<p>Compare these two prompts for the same scene:</p>
<p><em>Basic:</em> &quot;A woman enters a dark room and finds something surprising.&quot;</p>
<p><em>With cinematography language:</em> &quot;Low angle, static locked-off shot. Woman enters frame right into a dark interior. Practical single source light from practical lamp reveals her face in Rembrandt lighting. She stops. Rack focus from the doorframe to her face as she reacts. Shallow depth of field, 50mm equivalent.&quot;</p>
<p>The second prompt gives the model a directed scene with specific visual language. The output is not guaranteed to execute perfectly — these models still have inconsistencies — but the probability of getting usable, directed output is substantially higher than with content-only description.</p>
<p>The craft of directing is knowing how to tell a story visually. That craft translates directly to prompting. If you have production experience, you already know this vocabulary. Use it.</p>
