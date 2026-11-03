---
id: "art-076"
title: "How to Direct AI: Camera Vocabulary for Better Video"
description: "Dolly in, rack focus, motivated light: the set terms that make AI video look cinematic. The full list, a paste-ready prompt template, and when to stop typing."
pubDate: "2026-03-15"
updatedDate: "2026-11-03"
toolVersion: "2026-11"
category: "AI"
tags:
  - "Workflow"
  - "AI Video"
  - "Cinematography"
  - "Production Guide"
  - "Prompting"
  - "Director Tips"
heroImage: "https://images.unsplash.com/photo-1613488328514-e424950c0b0d?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxN3x8bmVvbiUyMGNpdHklMjBuaWdodCUyMHN0cmVldHxlbnwxfDB8fHwxNzc2NzI0MjcwfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "10 min read"
featured: true
---

<!-- Updated Nov 3, 2026. Corrected: model list (Runway and Sora 2 removed, Sora's API shut down on Sept 24; Kling 4.0 and Gemini Omni added), unverified "14 years" removed, client list cut to three, stray backslashes removed. Added a step by step, a prompt template and source links. No new generation was run for this update. -->

<p><strong>Update, November 3, 2026:</strong> the vocabulary below has not aged, because it is the language of a camera crew, not of a model. The list of models it was written against has. In March it named Runway Gen-4.5 and Sora 2. Sora's API <a href="/blog/sora-2-api-shuts-down-september-24-where-producers-go-next/">shut down on September 24</a>, and Runway is no longer in my stack. Since then <a href="https://www.globenewswire.com/news-release/2026/10/16/3382768/0/en/kling-ai-officially-launches-next-generation-kling-4-0-raising-the-bar-for-professional-grade-video-models.html" target="_blank" rel="noopener">Kling 4.0</a> shipped on October 15 with up to 10 keyframes, and Google's <a href="https://blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/" target="_blank" rel="noopener">Gemini Omni 1.1</a> added start and end frames in Flow. Keyframes and frame controls are camera direction by other means, which is the point of the new section at the end.</p>

<h2>The Prompt Problem Nobody Talks About</h2>
<p>Most people prompting AI video tools describe what they want to happen in a scene. "A person walking through a city street at night." "A product rotating on a white background." "Two people having a conversation at a table."</p>
<p>That is content description. It tells the model what the scene contains. It does not tell the model how to shoot it.</p>
<p>Directors and cinematographers speak differently on set. The same city street at night scene might be: "Low angle Dutch tilt, handheld with motivated camera shake, rack focus from background signage to foreground subject as they pass, practical neon lighting motivated left."</p>
<p>Years of directing commercials (Starbucks, Nestlé, Yamaha) made this vocabulary second nature. And the current AI video models understand it. Seedance 2.0 and 2.5, Kling 3.0 and 4.0, Veo 3.1 and Gemini Omni all respond to cinematography language in ways that change what comes back.</p>

<h2>Camera Movement Vocabulary That Works</h2>
<p>These terms translate consistently across the current generation of AI video models:</p>
<p><strong>Dolly in / dolly out</strong>: camera physically moving toward or away from subject. Creates a different feel than zooming, which changes focal length without moving the camera. AI models generally handle this correctly when specified explicitly.</p>
<p><strong>Tracking shot / follow shot</strong>: camera moves laterally to follow a subject. Specify direction: "left-to-right tracking shot following the subject."</p>
<p><strong>Crane up / crane down</strong>: vertical camera elevation. Useful for reveal shots. "Crane down from rooftop to street level, ending on protagonist."</p>
<p><strong>Handheld</strong>: camera movement with organic instability. "Handheld with motivated shake" specifies that the movement should feel like an operator making intentional choices, not random jitter. This distinction matters for tone.</p>
<p><strong>Steadicam / gimbal</strong>: smooth, floating camera movement. Useful for following action without the instability of handheld.</p>
<p><strong>Static / locked-off</strong>: no camera movement. Often the most powerful choice for emotional scenes. Specifying "static locked-off medium shot" prevents the model from adding unnecessary movement.</p>

<h2>Focus and Lens Vocabulary</h2>
<p><strong>Rack focus</strong>: shifting focus from one plane to another during a shot. "Rack focus from background subject to foreground object" is a classic reveal technique. AI models handle this well when the subjects are clearly positioned in the prompt.</p>
<p><strong>Shallow depth of field / wide open</strong>: blurred background, sharp foreground. Specify approximate focal length if you want a specific look: "85mm equivalent, wide open, shallow depth of field."</p>
<p><strong>Deep focus</strong>: both foreground and background in sharp focus simultaneously. Often associated with wide angle lenses.</p>
<p><strong>Anamorphic</strong>: the horizontal lens flare and bokeh shape associated with anamorphic lenses. Adding "anamorphic lens characteristics" to a prompt reliably produces that look in most current models.</p>

<h2>Framing and Composition Vocabulary</h2>
<p><strong>Dutch angle / canted angle</strong>: tilted horizon line. Communicates psychological unease or instability. Specify degree for more control: "15-degree Dutch tilt."</p>
<p><strong>Low angle</strong>: camera below subject eye level, shooting upward. Makes subjects feel powerful, imposing, or threatening depending on context.</p>
<p><strong>High angle / bird's eye</strong>: camera above subject. Can convey vulnerability, surveillance, or scale.</p>
<p><strong>Over the shoulder</strong>: framing one subject from behind the shoulder of another. Standard for dialogue scenes. Specify which shoulder for matching across cuts.</p>
<p><strong>Two-shot / three-shot</strong>: specifies how many subjects appear in frame.</p>

<h2>Lighting Vocabulary</h2>
<p><strong>Motivated lighting</strong>: light that appears to come from a source visible or implied in the scene. "Practical neon lighting motivated left" means the light looks like it is coming from the neon sign visible in the scene.</p>
<p><strong>Rembrandt lighting</strong>: specific portrait lighting with characteristic triangle of light on the shadowed side of the face. AI models trained on enough cinematography reference know this term.</p>
<p><strong>Golden hour / magic hour</strong>: warm directional light at low angles. More reliable than trying to describe the specific color temperatures.</p>
<p><strong>Hard light vs soft light</strong>: hard light creates defined shadows (direct sun, harsh fixtures), soft light wraps and fills (overcast, diffused).</p>

<h2>Putting It Together</h2>
<p>Compare these two prompts for the same scene:</p>
<p><em>Basic:</em> "A woman enters a dark room and finds something surprising."</p>
<p><em>With cinematography language:</em> "Low angle, static locked-off shot. Woman enters frame right into a dark interior. Practical single source light from practical lamp reveals her face in Rembrandt lighting. She stops. Rack focus from the doorframe to her face as she reacts. Shallow depth of field, 50mm equivalent."</p>
<p>The second prompt gives the model a directed scene with specific visual language. The output is not guaranteed to execute perfectly (these models still have inconsistencies), but the probability of getting usable, directed output is substantially higher than with content-only description.</p><p>Half of this vocabulary stops living in the prompt once a job grows past a handful of shots. On a client delivery I write the movement into the prompt for the first pass, look at what comes back, and then move the look out of the text and into the reference frame. Typing "50mm equivalent, wide open" on every shot of a sequence gets me a slightly different lens each time in Seedance 2.0, while one approved frame holds across all of them. With Kling 3.0 I stop describing the movement in words and hand it a motion control clip from a take I already approved, which is the only way I have found to get the same move twice.</p>
<h2>How to create cinematic video with AI, step by step</h2>
<p>Cinematic is not a style word you add at the end of a prompt. It is a sequence of decisions a director makes before the camera rolls, and the model needs them in the same order.</p>
<ol>
<li><strong>Decide the shot before the scene.</strong> Size, angle and lens first. "Medium close-up, low angle, 35mm" tells the model where it stands before it learns what it sees.</li>
<li><strong>Give the camera one move, with a start and an end.</strong> "Slow push in from medium to close-up" beats "dynamic camera". One move per shot. Two moves is how you get a drone in a kitchen.</li>
<li><strong>Motivate the light.</strong> Name the source inside the scene: window, practical lamp, neon sign. Unmotivated light is the fastest tell of a generated image.</li>
<li><strong>Write the action as behavior, not emotion.</strong> "She puts the cup down and does not look at him" plays. "She is sad" gives you a stock face.</li>
<li><strong>Approve one frame, then move the look into it.</strong> After the first good result, stop describing lens and grade in words and use the approved frame as the reference for every shot that follows.</li>
<li><strong>Use the tool's own control for movement.</strong> Keyframes in Kling 4.0, start and end frames in Flow, Motion Control in Kling 3.0 when you need the same move twice. Text describes a move. These controls repeat it.</li>
</ol>
<p>The template I would paste and fill, in this order:</p>
<pre><code>SHOT: [size], [angle], [lens look, e.g. 35mm / 85mm wide open]
MOVE: [one move, start to end, speed]
LIGHT: [motivated source, direction, hard or soft, time of day]
ACTION: [what the subject does, as behavior]
FOCUS: [deep focus / shallow, rack from X to Y if any]
SOUND: [room tone, one or two specific sounds]
REFERENCE: [approved frame for character, wardrobe and grade]
KEEP: everything not listed exactly as the reference.</code></pre>
<p>For how this plays out across a whole character, see <a href="/blog/ai-character-consistency-prep-problem-not-model-problem/">the character consistency prep</a>. For the Seedance side of prompting, <a href="/blog/how-to-use-seedance-2-5-director-prompting-method/">the Seedance 2.5 method</a>. For repeating a move, <a href="/blog/kling-3-0-motion-control-multi-shot-director-review/">Kling Motion Control</a>.</p>

<p>The craft of directing is knowing how to tell a story visually. That craft translates directly to prompting. If you have production experience, you already know this vocabulary. Use it.</p>

<p><em>Sources: <a href="https://www.globenewswire.com/news-release/2026/10/16/3382768/0/en/kling-ai-officially-launches-next-generation-kling-4-0-raising-the-bar-for-professional-grade-video-models.html" target="_blank" rel="noopener">Kuaishou: Kling 4.0 launch (Oct 16, 2026)</a> | <a href="https://blog.google/innovation-and-ai/models-and-research/google-labs/new-creative-controls-google-flow/" target="_blank" rel="noopener">Google: new creative controls in Google Flow (Aug 27, 2026)</a> | <a href="https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/" target="_blank" rel="noopener">Google: I/O 2026 announcements, Gemini Omni (May 19, 2026)</a></em></p>
