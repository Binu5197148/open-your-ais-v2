---
id: "art-055"
title: "Is Cursor AI Worth It Now? The Real Risks"
description: "Cursor now sells as one plan with Grok and X, Claude costs extra and OpenAI leaves on Nov 12. New prices, the $8 trap and a checklist before you switch."
pubDate: "2026-03-02"
updatedDate: "2026-10-14"
toolVersion: "2026-10"
category: "AI"
tags:
  - "Cursor"
  - "AI Coding"
  - "Development"
  - "Tools"
heroImage: "https://images.unsplash.com/photo-1570785910568-62040c41db1a?ixid=M3w5MzA3NTd8MHwxfHNlYXJjaHwxMHx8ZmlsbSUyMHJlZWwlMjAzNW1tJTIwYW5hbG9nfGVufDF8MHx8fDE3NzY3MjQyNjB8MA&ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85&sat=-100&con=10"
author: "Ulisses Balbino"
readTime: "6 min read"
---

<!-- Rewrite 2026-10-14 (guardiao): the March version described four first-person tests, a client job and a claim that this site was built in Cursor. None of that could be substantiated, so it was removed. The piece is now a documentary analysis of Cursor's current state, with sources linked. Pricing read on cursor.com/pricing on October 14, 2026. -->

<p><em>Updated October 14, 2026. This piece was rewritten. The earlier hands-on claims could not be substantiated and have been removed. This article is a documentary analysis of Cursor as it stands today, from its own pages and the reporting linked at the end. Two things changed this year that matter more than any feature: who owns Cursor, and how you pay for it.</em></p>

<h2>Cursor AI in October 2026: what changed</h2>
<p>Cursor is still the same idea it was in March: a code editor forked from VS Code, with agents that read your whole project and change several files at once. What changed is everything around it.</p>
<p>SpaceX agreed in June to buy Anysphere, the company behind Cursor, for 60 billion dollars, and the deal closed in August. On August 28, OpenAI told SpaceX it would wind down its contract and cut Cursor off from its models on November 12, 2026, saying it could not be confident its technology would be used within its terms. Cursor's CEO, Michael Truell, said OpenAI models were about 5 percent of user traffic, and that Anthropic, Google and Grok models stay available.</p>
<p>Then, this week, the price list stopped being a Cursor price list. On October 12 and 13, SpaceXAI launched one subscription that bundles Grok, Cursor and X Premium. The pricing page at cursor.com now sells that bundle.</p>

<h2>How much does Cursor cost now?</h2>
<p>Read on the official page on October 14, 2026:</p>
<ul>
<li><strong>Free, $0.</strong> Limited AI usage, including limited agent requests.</li>
<li><strong>Plus, $8 a month.</strong> A shared usage pool, but only Grok models.</li>
<li><strong>Premium, $30 a month.</strong> Four times the Plus usage, the latest Grok models, and third-party models in Cursor.</li>
<li><strong>Super, $100</strong> (15 times Plus) and <strong>Ultra, $200</strong> (50 times Plus).</li>
<li><strong>Teams</strong> from $30 per user, and Enterprise on request.</li>
</ul>
<p>Two lines on that page decide whether this is a good deal for you. First, the allowance is one pool shared across Cursor and Grok, and it refreshes weekly. Second, third-party models in Cursor are not included in the monthly price. They are billed separately, at the provider's API list price. If your habit was Cursor with Claude inside it, that is now a second bill on top of the subscription.</p>
<p>Existing Cursor subscribers do not have to switch. According to the coverage of the launch, the option to move appears gradually in billing settings, comes with a prorated refund, and is permanent once the accounts are unified. The old plans are closed to new sign-ups.</p>

<h2>Can you use Cursor AI for free?</h2>
<p>Yes, with a ceiling you cannot see in advance. The Free tier includes a starter allowance for Cursor's agents, but the page describes it only as limited, and usage costs vary by product, so it does not translate into a fixed number of prompts. Treat it as a trial of the workflow, not a way to run a project.</p>
<p>The cheapest paid tier is the trap to watch. Plus is 8 dollars and looks like the obvious upgrade, but it runs Grok models only. If the reason you want Cursor is a specific model, the real entry price is Premium, plus whatever that model costs at list price.</p>

<h2>What Cursor does well</h2>
<p>The documented strengths have not moved. Cursor indexes the project, so an instruction can touch every file it needs. Agent mode plans a multi-file change and shows you the diff before anything lands. Tab completion predicts from context, not from a generic pattern.</p>
<p>The recent changelog points in one direction, toward agents that work while you are not watching. September brought Cursor Projects, a beta in which one agent coordinates others on multi-month work, and a Security Review bot that flags exploitable bugs on pull requests. On October 6 Cursor added remote control of local agents from its iOS app. On October 13 its Origin product opened an app marketplace.</p>

<h2>Is Cursor AI worth it?</h2>
<p>That depends less on the editor than on your tolerance for one company owning the whole stack: the editor, the default model, and now the subscription that also sells you a social network. The tool did not get worse this year. The ground under it moved twice, and both moves were decided far from the people writing code.</p>
<p>I have written about this pattern from the film side, when <a href="/blog/sora-api-shutdown-platform-dependency-filmmakers/">Sora's API shut down and took people's pipelines with it</a>. The lesson transfers exactly. If a model switch, a price change or a contract dispute between two companies can stop your work, you do not own your workflow. You rent it.</p>
<p>That is the reason I build with tools I can swap. This site runs on Claude Code and Codex side by side, and the part that holds the work together is not either agent. It is the <a href="/blog/claude-code-agents-gauntlet-loop-verification/">verification loop that checks whatever the agent produced</a>. Swap the agent and the loop still catches the same mistakes.</p>
<p>The limits that every serious write-up of AI coding names still apply here, whichever model you pick. Agents invent API calls that sound right. They over-build simple requests. They write code that works before it is safe, so input validation and authentication are your job. None of that is specific to Cursor, and none of it is fixed by a bigger plan.</p>

<h2>Before you switch to the new plan: a checklist</h2>
<ol>
<li><strong>List the models you actually use.</strong> If any of them is from OpenAI, plan for November 12. If it is Claude or another third party, price it at API list rates, on top of the plan.</li>
<li><strong>Check your current plan before you unify.</strong> The switch is described as permanent. Compare your real monthly usage with the weekly pool, not the monthly price.</li>
<li><strong>Set a spending cap</strong> on third-party usage before you turn it on.</li>
<li><strong>Keep your project portable.</strong> Rules, prompts and skills in plain files in the repository move with you to any editor. Settings locked inside one product do not.</li>
<li><strong>Try the Free tier on a throwaway branch first,</strong> and read the diff of every agent change before you accept it.</li>
</ol>

<h2>Who should use it</h2>
<p>Cursor still makes sense for developers who want an editor first and an agent second, and who are comfortable with Grok as the house model or happy to pay list price for another. It makes less sense if your work depends on one specific outside model, or if a contract between two companies you do not control is a risk you cannot absorb.</p>
<p>The deciding question was never which editor writes code fastest. It is who is responsible for the code once it ships. That has always been the person reading the diff, and no subscription tier changes it.</p>

<p><em>Sources, checked October 14, 2026: <a href="https://cursor.com/pricing" target="_blank" rel="noopener">Cursor, pricing (plans, shared weekly pool, third-party models billed separately)</a> | <a href="https://cursor.com/changelog" target="_blank" rel="noopener">Cursor, changelog (Projects, Security Review, remote control, Origin marketplace)</a> | <a href="https://www.teslarati.com/spacex-just-combined-grok-cursor-and-x-into-one-mega-plan/" target="_blank" rel="noopener">Teslarati, the combined Grok, Cursor and X plan (October 13, 2026)</a> | <a href="https://www.freepressjournal.in/tech/x-launches-unified-subscription-bundling-grok-cursor-and-premium-all-details" target="_blank" rel="noopener">Free Press Journal, X unified subscription details (October 13, 2026)</a> | <a href="https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html" target="_blank" rel="noopener">CNBC, SpaceX to acquire Cursor for 60 billion dollars</a> | <a href="https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html" target="_blank" rel="noopener">CNBC, OpenAI to end model access to Cursor (August 29, 2026)</a></em></p>
