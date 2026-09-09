---
id: "art-102"
title: "The Truth About Claude Skills: What You Need to Know"
description: "A skill is a folder holding a SKILL.md file. It became an open standard in December 2025, and rival tools now read the same file. What that changes."
pubDate: "2026-03-15"
updatedDate: "2026-09-09"
category: "Automation"
tags:
  - "Workflow"
  - "Anthropic"
  - "Agent Skills"
  - "Open Standard"
  - "Workflow Automation"
  - "Figma"
  - "Notion"
  - "Zapier"
  - "Production Stack"
heroImage: "https://images.unsplash.com/photo-1680695918112-2909e0fc8796?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwyOXx8bmVvbiUyMGNpdHklMjBuaWdodCUyMHN0cmVldHxlbnwxfDB8fHwxNzc2NzI0MjcwfDA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "9 min read"
---

<h2>The Infrastructure Shift You Haven't Noticed Yet</h2>
<p>Anthropic introduced Agent Skills in October 2025 and published the framework as an open standard on 18 December 2025, and the partner adoption since then has been quiet but significant. As of February 2026, Figma, Canva, Notion, Zapier, Atlassian, and Stripe have all built Skills that work natively inside Claude. Microsoft and OpenAI adopted the standard. Anthropic is not charging extra: Skills are included in Pro, Team, and Enterprise plans at standard pricing.</p>
<p>This doesn't sound dramatic until you understand what it means operationally. Agent Skills is the mechanism by which an AI assistant can reach into your actual tools, not via a clunky third-party integration, but as a native capability the AI invokes mid-conversation. You ask Claude to review the Figma mockup for the project, summarize the Notion brief linked in the thread, draft a response to the client, and schedule a follow-up. All of that happens in one workflow, without context-switching, because Claude has the skills to reach directly into those environments.</p>
<p>For anyone who has spent years managing production workflows where the friction lives at the handoff between tools, this architecture is worth understanding in detail.</p>

<h2>What Agent Skills Is, Precisely</h2>
<p>At the technical level, Agent Skills is a standardized format for teaching an AI how to perform specific, specialized tasks using external tools. A Skill is a packaged set of instructions that tells Claude what the tool can do, what inputs to provide, what outputs to expect, and how to use those outputs in context.</p>
<p>The key difference from previous integration models is that Skills are invoked by the AI itself based on context, not triggered manually by the user. When you're working in Claude and reference a Notion page, Claude can pull that content and use it in the response without you explicitly saying "go get the Notion page." The AI reads context, determines what tool access is relevant, and uses it.</p>
<p>The open standard part means any developer can build a Skill that works the same way. Anthropic set the specification, published it publicly, and the ecosystem builds on top of it. The result is that Skills built for Claude's ecosystem become interoperable with any platform that adopts the standard, which is why Microsoft and OpenAI signing on matters. Build once, works everywhere the standard is implemented.</p>

<h2>The Partner Ecosystem and What It Covers</h2>
<p>For creators and production operators, the practical question is which tools are available. The current directory as of February 2026 includes:</p>
<p><strong>Figma:</strong> Design review, asset inspection, component listing, annotation reading. For production work involving visual assets, Claude can directly examine the design file rather than you copying screenshots into a chat.</p>
<p><strong>Canva:</strong> Template access, brand kit integration, export workflows. For content operations producing regular branded assets, Canva Skills allow AI-assisted production that stays inside brand parameters.</p>
<p><strong>Notion:</strong> Page reading, database querying, document creation, link dereferencing. If your production briefs, client notes, and project tracking live in Notion, Claude can navigate that directly without you copying and pasting context.</p>
<p><strong>Zapier:</strong> Automation trigger access, meaning Claude can initiate automated workflows from within a conversation. This is the integration that connects AI reasoning to multi-step system automation without separate orchestration tools.</p>
<p><strong>Atlassian (Jira/Confluence):</strong> Ticket reading, sprint status, documentation access. Relevant for any structured project management workflow.</p>
<p><strong>Stripe:</strong> Payment status, subscription lookup, billing data access. Directly useful for any creator or small business managing recurring client relationships or digital product sales.</p>

<h2>The Enterprise Management Layer</h2>
<p>For teams rather than individuals, Anthropic added enterprise management tools alongside the Skills directory. Administrators on Team and Enterprise plans can provision Skills centrally, controlling which tools Claude can access, setting permission levels across the organization, while allowing individuals to customize within the allowed set.</p>
<p>This is the layer that makes Agent Skills viable for production companies with multiple collaborators. The company controls the tools the AI can reach. Individuals control how they use those tools within the permitted set. The security requirements that slow enterprise tool adoption are built into the access model rather than added afterward.</p>
<p>For a small production operation, this means setting up the Skills relevant to your workflow (Notion for project briefs, Figma for asset review, Zapier for pipeline automation), and having a team AI environment where everyone works with the same connected toolset without each person setting up their own integrations.</p>

<h2>What This Changes for Production Workflows Right Now</h2>
<p>The honest practical answer: Agent Skills is most powerful if your team already uses the supported tools. If you're already in Notion for project management, Figma for design review, and Zapier for automation, the Skills ecosystem connects them through AI in a way that eliminates significant context-switching and coordination overhead.</p>
<p>If you're not in those tools yet, the standard itself is the longer-term story. Open standards matter because they create ecosystems. The more developers build Skills, the more tools become available. The more tools become available, the more of your actual stack can be accessed by AI natively. The transition from "AI as a tool you open separately" to "AI as the connective layer across everything you already use": that's what Agent Skills is the infrastructure for. That transition is happening now.</p>
<p>After 14 years building production pipelines where every new tool meant another integration to maintain, the model of one AI layer that reaches into everything else through an open standard is the architecture that actually makes sense for how creative operations work. The question isn't whether to pay attention. It's how quickly your current stack maps onto it, and where to start.</p>
<h2>What Changed Since This Was Written</h2>
<p>Updated 9 September 2026. The part of this article that aged is the framing, not the facts about the partners. In March the story was which companies had built Skills for Claude. That is no longer the interesting part.</p>
<p>The interesting part is that the format left the building. Anthropic introduced Agent Skills in October 2025 and published it as an open standard that December, and the competition picked it up rather than fighting it. OpenAI shipped the same folder-with-a-markdown-file pattern in the Codex CLI and in ChatGPT. Microsoft brought it into VS Code and GitHub. Cursor, Goose, Amp and OpenCode read it too.</p>
<p>So the practical consequence, and the reason this matters to anyone who is not a developer: a skill you write once is not a bet on one company. The folder you build for Claude is largely the same folder those other tools expect. If you leave, your process leaves with you. That is rare enough in this industry to be worth saying plainly.</p>
<p>I write skills for my own production work, and this is the honest reason I keep doing it. The skill is where the judgement lives. The model changes every few months and the folder does not.</p>
<h2>How Do You Actually Build One?</h2>
<p>Lower than people expect. A skill is a folder with a file called SKILL.md inside it. The file opens with YAML metadata carrying a name and a description, and everything under that is plain instructions written for a reader who knows nothing about your job.</p>
<p>Here is a complete one. Copy it, change the words, put it in your skills folder, and it works.</p>
<pre><code>---
name: client-delivery-check
description: Run before sending any cut to a client. Checks
  format, captions, loudness and file naming.
---

# Client delivery check

Before a cut goes out, verify each item and report what fails.

1. Format matches the brief. If the brief says 9:16, a 16:9
   export is a fail, not a note.
2. Captions burned in for social, separate SRT for broadcast.
3. Loudness at the platform target. Say the measured number.
4. Filename carries client, project, version and date.
5. First frame is not black and last frame is not a cut to black
   unless the brief asked for it.

Report as a short list. Say PASS or FAIL per item, then the one
thing you would fix first.
</code></pre>
<p>That is not a toy. It is the shape of every skill I run: a name, a description precise enough that the assistant knows when to reach for it, and steps written the way you would brief a competent freelancer who has never worked with you before.</p>
<p>The description line does most of the work. Vague descriptions are why skills sit unused, because the assistant never figures out when they apply.</p>
<p>The skills I actually use in production are listed on <a href="/skills">the skills page</a>, and the official format documentation is in <a href="https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills" target="_blank" rel="noopener">Anthropic's engineering post on Agent Skills</a>.</p>

<p><em>Sources: <a href="https://techcrunch.com/2026/02/24/anthropic-launches-new-push-for-enterprise-agents-with-plugins-for-finance-engineering-and-design/" target="_blank" rel="noopener">TechCrunch, Anthropic Launches New Enterprise Agents Push, February 24, 2026</a> | <a href="https://venturebeat.com/ai/anthropic-launches-enterprise-agent-skills-and-opens-the-standard" target="_blank" rel="noopener">VentureBeat, Anthropic Launches Enterprise Agent Skills</a> | <a href="https://the-decoder.com/anthropic-publishes-agent-skills-as-an-open-standard-for-ai-platforms/" target="_blank" rel="noopener">The Decoder, Anthropic Publishes Agent Skills as Open Standard</a></em></p>
