---
id: "art-078"
title: "DaVinci Resolve: What AI Magic Mask Gets Wrong"
description: "AI color grading in DaVinci Resolve: where Magic Mask 2 tracks clean, where hair breaks it, why it is Studio only, and what Colourlab Ai 4 matches for you."
pubDate: "2026-03-15"
updatedDate: "2026-10-26"
toolVersion: "2026-10"
category: "AI"
tags:
  - "Workflow"
  - "Color Grading"
  - "DaVinci Resolve"
  - "Post Production"
  - "AI Tools"
  - "Colourlab"
heroImage: "https://images.unsplash.com/photo-1652642731490-fd9a7153b3b2?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxN3x8dXJiYW4lMjBjaW5lbWF0aWMlMjBuaWdodHxlbnwxfDB8fHwxNzg3NjEyNDE0fDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "9 min read"
---

<p><em>Updated October 26, 2026. This is a documentary analysis of published documentation and independent reviews, not a hands-on test. Since March the state moved: DaVinci Resolve is on version 21, with 21.1 released in September; Magic Mask is in its second generation and runs only in Resolve Studio; and Colourlab is on version 4, which connects to Resolve through OpenTimelineIO rather than the OFX plugin this piece first described. Corrections are marked below, and a step-by-step for Magic Mask 2 was added.</em></p>

<h2>The Color Suite Has Changed More Than Most People Realize</h2>
<p>Color grading used to be the part of post-production most resistant to automation. It requires taste, knowledge of the emotional intent of a scene, understanding of how color interacts with performance, and the ability to make consistent decisions across hundreds of shots. No algorithm was going to replicate that.</p>
<p>The current generation of AI color tools is not trying to replicate it. They are doing something more specific: handling the technical baseline work so that the colorist can spend more time on the creative work. That distinction matters and it is why these tools are genuinely useful rather than a threat to the craft.</p>
<!-- Correction 2026-10-26: removed a first-person claim of a year of hands-on use that is not documented. --><p>What follows is built from Blackmagic's and Colourlab's own pages and from an independent masking comparison, so you can check every claim yourself.</p>

<!-- Correction 2026-10-26: this section described a Resolve 20 feature called "Magic Color". Blackmagic's What's New page does not list a feature by that name and no independent source confirms it, so the claim was removed. The one-click technical balance it described is documented in Colourlab Ai 4 (see below). -->
<h2>DaVinci Resolve 21: what Magic Mask does, and what it gets wrong</h2>
<p>Magic Mask is the AI feature in Resolve that matters most for color, and it is now in its second generation. You click on the subject in the viewer, each click adds a point, and the Neural Engine isolates that subject and tracks it through the clip. This enables secondary color work (adjusting only skin tone, or pulling the exposure on a background without affecting the foreground subject) without the manual rotoscoping that used to make secondary corrections expensive.</p>
<p>Where it gets things wrong is consistent across reviews. Hair is the weak point: in <a href="https://larryjordan.com/articles/compare-ai-assisted-masking-in-final-cut-premiere-resolve/" target="_blank" rel="noopener">Larry Jordan's April 2026 comparison</a> of masking in Final Cut, Premiere and Resolve, Resolve tracked a complex subject best of the three, yet hair still needed a second pass with higher quality and edge settings, and a reader still spotted a halo. Tracking was also about twice as slow as the other two apps. Complex movement and subjects close in color to the background need the same supervision.</p>
<p>The other thing it gets wrong is the assumption that it is free. Magic Mask 2 does not run in the free version of Resolve at all, as the same comparison states and as <a href="https://www.blackmagicdesign.com/products/davinciresolve/studio" target="_blank" rel="noopener">Blackmagic's Studio page</a> implies when it says Studio adds the Neural Engine for automatic AI region tracking.</p>

<h2>How to use AI Magic Mask in DaVinci Resolve</h2>
<p>The sequence documented in that comparison, in Resolve Studio:</p>
<ol>
<li>Go to the Color page and select the clip.</li>
<li>Click the Magic Mask icon to open the tool.</li>
<li>In the viewer, click on the subject. Each click adds a point. Use as few as possible, and split a person into areas (face, hair, clothing) rather than clicking everywhere.</li>
<li>Track in both directions and wait. Expect it to take longer than in Premiere or Final Cut.</li>
<li>Scrub the clip and look at the edges, hair first.</li>
<li>If the edge breaks, raise Quality to Better, adjust Radius, Blur Radius and Clean Black, and track again.</li>
<li>Grade inside that node, so the correction applies only to the isolated subject, or connect the matte to an alpha output if you are compositing.</li>
</ol>
<p>The author of that comparison notes the Resolve manual does not explain the alpha connection well, so if the matte does not behave, the problem is more likely the node wiring than the mask.</p>

<h2>Colourlab AI: The Third-Party Integration Worth Knowing</h2>
<!-- Correction 2026-10-26: the OFX plugin and "22 times faster" figures described Colourlab Ai 3. The current version is Colourlab Ai 4, which connects to Resolve through OpenTimelineIO. --><p>The current version is <a href="https://4.colourlab.ai/" target="_blank" rel="noopener">Colourlab Ai 4</a>, which works with DaVinci Resolve through OpenTimelineIO, supports Resolve multicam timelines and runs its analysis on the Mac. Its Balance tool applies a neutral first grade (exposure, white balance, contrast) in one click, and Match with SMH matches shadows, midtones and highlights independently. <a href="https://colourlab.ai/pricing/" target="_blank" rel="noopener">Pricing</a>, read on October 26, 2026: US$49 a month, US$399 a year, or US$799 perpetual. The version 4 page lists Apple Silicon as a requirement.</p>
<p>The practical use case is matching. On a commercial shoot where coverage spans multiple lighting setups, camera angles, or even different days, achieving shot-to-shot consistency is time-consuming manual work. Colourlab AI reads a graded hero shot and applies that grade (matching luminance, color balance, and tone) across all the coverage efficiently.</p>
<p>This is not replacing the colorist's decisions. It is executing those decisions consistently at scale. The colorist grades one representative shot per scene, and the tool propagates that intent across the remaining material. The result needs review and refinement, but the volume of manual work is substantially reduced.</p>
<!-- Correction 2026-10-26: the current Colourlab pages no longer cite Dune or The Batman; the line was removed. --><p>The company says its work has touched more than 10,000 films and episodes across Netflix, Amazon and Warner Bros. productions. That is the vendor's own claim, and no workflow detail for any title is public.</p>

<h2>What These Tools Do Not Replace</h2>
<p>I want to be specific about the limits, because the marketing tends to overstate what automation handles.</p>
<p>Creative decisions remain human. The choice of how to render a specific scene emotionally (whether a memory feels warm and safe or cold and distant, whether a confrontation scene pushes into high contrast or stays naturalistic) is a directorial and colorist decision that requires understanding the story. No tool makes that judgment.</p>
<p>Complex secondary work on highly stylized material still requires manual precision. When you need to pull a specific hue in a specific region of a specific frame without affecting anything else, the manual tools in Resolve remain the right choice.</p>
<p>The AI tools handle the repeatable, systematic part of the workflow. The interpretive, creative part is still yours.</p>

<h2>The Practical Impact on Post-Production Budgets</h2>
<p>Commercial post-production color typically runs at day rates for a senior colorist. The value of AI-assisted tools is not eliminating that cost. Good color requires good colorists. The value is in compressing the technical preparation time so that the colorist's hours are spent on the creative grade rather than cleanup.</p>
<!-- Correction 2026-10-26: removed an unsourced 40-60% time saving figure. --><p>No vendor publishes a verifiable time saving, so do not quote one to a client. The logic is simpler: the more inconsistent the footage, the more manual normalization there is, and that normalization is exactly the part these tools take.</p>
<p>For independent producers on tight post budgets, the honest math starts with the license: Magic Mask needs Resolve Studio, and Colourlab Ai 4 is a separate subscription. If both are already paid for, they take real hours out of the technical pass. If not, the free version of Resolve still grades, it just does not isolate subjects for you. For more on which Resolve AI tools sit behind the Studio license, see <a href="/blog/davinci-resolve-20-ai-features-production-workflow-breakdown/">the Resolve Studio vs free breakdown</a>.</p>
<p><em>Sources, read October 26, 2026: <a href="https://www.blackmagicdesign.com/products/davinciresolve/whatsnew" target="_blank" rel="noopener">Blackmagic Design: DaVinci Resolve What's New</a> | <a href="https://www.blackmagicdesign.com/products/davinciresolve/studio" target="_blank" rel="noopener">Blackmagic Design: DaVinci Resolve Studio</a> | <a href="https://larryjordan.com/articles/compare-ai-assisted-masking-in-final-cut-premiere-resolve/" target="_blank" rel="noopener">Larry Jordan: Compare AI-assisted masking in Final Cut, Premiere and Resolve, April 29, 2026</a> | <a href="https://4.colourlab.ai/" target="_blank" rel="noopener">Colourlab Ai 4</a> | <a href="https://colourlab.ai/pricing/" target="_blank" rel="noopener">Colourlab pricing</a> | <a href="https://www.sportsvideo.org/2026/09/09/ibc-2026-blackmagic-design-releases-davinci-resolve-21-1/" target="_blank" rel="noopener">Sports Video Group: Blackmagic releases DaVinci Resolve 21.1, September 2026</a></em></p>
