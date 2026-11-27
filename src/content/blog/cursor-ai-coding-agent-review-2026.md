---
id: "art-055"
title: "Don't Switch to Cursor AI Until You Read This"
description: "Cursor now ships inside one Grok and X plan, Claude costs extra and OpenAI got a reprieve. Current prices, the $8 trap, how to use it and a switch checklist."
pubDate: "2026-03-02"
updatedDate: "2026-11-27"
toolVersion: "2026-11"
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

<!-- Update 2026-11-27 (guardiao): OpenAI page updated Nov 12 says access was temporarily extended beyond Nov 12; OpenAI help center lists own API key, Codex extension and gateways; cursor.com/docs/models still lists GPT-5.6 Sol, Terra and Luna; pricing page reread, unchanged; changelog Nov 5 live apps, Nov 6 voice chat. -->

<p><em>Update, November 27, 2026: the OpenAI cutoff did not happen on schedule. On November 12, OpenAI updated its own announcement to say it had temporarily extended Cursor's access to its models beyond that date, with no new end date. Cursor's model docs still list GPT-5.6 Sol, Terra and Luna today. Prices on cursor.com are unchanged since October. This piece now adds a step-by-step section on how to use Cursor AI and two November features.</em></p>

<p><em>Updated October 14, 2026. This piece was rewritten. The earlier hands-on claims could not be substantiated and have been removed. This article is a documentary analysis of Cursor as it stands today, from its own pages and the reporting linked at the end. Two things changed this year that matter more than any feature: who owns Cursor, and how you pay for it.</em></p>

<h2>Cursor AI in November 2026: what changed</h2>
<p>Cursor is still the same idea it was in March: a code editor forked from VS Code, with agents that read your whole project and change several files at once. What changed is everything around it.</p>
<p>SpaceX agreed in June to buy Anysphere, the company behind Cursor, for 60 billion dollars, and the deal closed in August. On August 28, OpenAI told SpaceX it would wind down its contract and cut Cursor off from its models on November 12, 2026, saying it could not be confident its technology would be used within its terms. Cursor's CEO, Michael Truell, said OpenAI models were about 5 percent of user traffic, and that Anthropic, Google and Grok models stay available.</p>
<p>November 12 came and went without the cut. OpenAI added a line to its announcement that day saying it had temporarily extended Cursor's access beyond November 12 and would share updates. So the risk did not go away, it lost its date. OpenAI's help center lists three ways to keep its models in Cursor whatever happens: your own OpenAI API key in local Chat and Agent, billed at API prices, the Codex extension inside the editor, or a gateway such as Amazon Bedrock or Azure.</p>
<p>Then, this week, the price list stopped being a Cursor price list. On October 12 and 13, SpaceXAI launched one subscription that bundles Grok, Cursor and X Premium. The pricing page at cursor.com now sells that bundle.</p>

<h2>How much does Cursor cost now?</h2>
<p>Read on the official page on October 14, 2026, and reread on November 27 with no change:</p>
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
<p>The cheapest paid tier is the trap to watch. Plus is 8 dollars and looks like the obvious upgrade, but it runs Grok models only. If the reason you want Cursor is a specific model, the real entry price is Premium, plus whatever that model costs at list price. Cursor's docs add one more line for Plus: no third-party models and no API keys of your own, so the bring-your-own-key route for OpenAI does not work on the $8 tier either.</p>

<h2>What Cursor does well</h2>
<p>The documented strengths have not moved. Cursor indexes the project, so an instruction can touch every file it needs. Agent mode plans a multi-file change and shows you the diff before anything lands. Tab completion predicts from context, not from a generic pattern.</p>
<p>The recent changelog points in one direction, toward agents that work while you are not watching. September brought Cursor Projects, a beta in which one agent coordinates others on multi-month work, and a Security Review bot that flags exploitable bugs on pull requests. On October 6 Cursor added remote control of local agents from its iOS app. On October 13 its Origin product opened an app marketplace. In November it went further: on November 5 cloud agents started building and deploying live apps, with a database, login and a shareable link, and on November 6 Cursor added voice chat with agents, running on Grok Voice, so you can describe a change out loud and hear progress while the agent works.</p>

<h2>How do you use Cursor AI?</h2>
<p>The most searched question about Cursor is the simplest one. This is the order that keeps the first week cheap and the code reviewable, based on Cursor's own docs:</p>
<ol>
<li><strong>Install Cursor and open an existing project,</strong> not an empty folder. The agent is only as useful as the context it can index, and VS Code settings and extensions import on first launch.</li>
<li><strong>Write the rules before the first prompt.</strong> Put your stack, folder conventions and the commands that run tests in a rules file inside the repository, so every agent reads the same instructions and they travel with the project.</li>
<li><strong>Start in Ask or Plan, not Agent.</strong> Ask it to explain how the project is wired and to propose a plan for the change. Correct the plan, then let it write.</li>
<li><strong>Give one task per chat.</strong> "Add a contact form that saves to the existing database and shows an error state" beats "improve the site". Small scope, small diff.</li>
<li><strong>Read every diff before you accept it,</strong> and run the tests yourself. The agent can say the work is done before it is.</li>
<li><strong>Pick the model on purpose.</strong> On Plus you only get Grok. On Premium and above, every Claude, Gemini or GPT call is billed at API list price on top of the plan, so set a spending cap first.</li>
<li><strong>Commit after each accepted change,</strong> so a bad agent run is one revert away.</li>
</ol>
<p>If what you want is a website, the second most searched question, the same order applies: describe the pages, let the agent scaffold, and review before you publish. The new live apps feature can host it for you, which is convenient and is also one more piece of your work living inside one company's subscription.</p>

<h2>Is Cursor AI worth it?</h2>
<p>That depends less on the editor than on your tolerance for one company owning the whole stack: the editor, the default model, and now the subscription that also sells you a social network. The tool did not get worse this year. The ground under it moved twice, and both moves were decided far from the people writing code.</p>
<p>I have written about this pattern from the film side, when <a href="/blog/sora-api-shutdown-platform-dependency-filmmakers/">Sora's API shut down and took people's pipelines with it</a>. The lesson transfers exactly. If a model switch, a price change or a contract dispute between two companies can stop your work, you do not own your workflow. You rent it.</p>
<p>That is the reason I build with tools I can swap. This site runs on Claude Code and Codex side by side, and the part that holds the work together is not either agent. It is the <a href="/blog/claude-code-agents-gauntlet-loop-verification/">verification loop that checks whatever the agent produced</a>. Swap the agent and the loop still catches the same mistakes.</p>
<p>The limits that every serious write-up of AI coding names still apply here, whichever model you pick. Agents invent API calls that sound right. They over-build simple requests. They write code that works before it is safe, so input validation and authentication are your job. None of that is specific to Cursor, and none of it is fixed by a bigger plan.</p>

<h2>Before you switch to the new plan: a checklist</h2>
<ol>
<li><strong>List the models you use every week.</strong> If any of them is from OpenAI, the November 12 date was extended with no new end date, so set up your own API key or the Codex extension now instead of waiting for the notice. If it is Claude or another third party, price it at API list rates, on top of the plan.</li>
<li><strong>Check your current plan before you unify.</strong> The switch is described as permanent. Compare your real monthly usage with the weekly pool, not the monthly price.</li>
<li><strong>Set a spending cap</strong> on third-party usage before you turn it on.</li>
<li><strong>Keep your project portable.</strong> Rules, prompts and skills in plain files in the repository move with you to any editor. Settings locked inside one product do not.</li>
<li><strong>Try the Free tier on a throwaway branch first,</strong> and read the diff of every agent change before you accept it.</li>
</ol>

<h2>Who should use it</h2>
<p>Cursor still makes sense for developers who want an editor first and an agent second, and who are comfortable with Grok as the house model or happy to pay list price for another. It makes less sense if your work depends on one specific outside model, or if a contract between two companies you do not control is a risk you cannot absorb.</p>
<p>The deciding question was never which editor writes code fastest. It is who is responsible for the code once it ships. That has always been the person reading the diff, and no subscription tier changes it.</p>

<p><em>Sources added November 27, 2026: <a href="https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/" target="_blank" rel="noopener">OpenAI, our decision on Cursor (update of November 12: access temporarily extended)</a> | <a href="https://help.openai.com/en/articles/20001506" target="_blank" rel="noopener">OpenAI Help Center, using OpenAI models in Cursor</a> | <a href="https://cursor.com/docs/models" target="_blank" rel="noopener">Cursor docs, models and plans (GPT-5.6 still listed, Plus without own API keys)</a></em></p>

<p><em>Sources, checked October 14, 2026: <a href="https://cursor.com/pricing" target="_blank" rel="noopener">Cursor, pricing (plans, shared weekly pool, third-party models billed separately)</a> | <a href="https://cursor.com/changelog" target="_blank" rel="noopener">Cursor, changelog (Projects, Security Review, remote control, Origin marketplace)</a> | <a href="https://www.teslarati.com/spacex-just-combined-grok-cursor-and-x-into-one-mega-plan/" target="_blank" rel="noopener">Teslarati, the combined Grok, Cursor and X plan (October 13, 2026)</a> | <a href="https://www.freepressjournal.in/tech/x-launches-unified-subscription-bundling-grok-cursor-and-premium-all-details" target="_blank" rel="noopener">Free Press Journal, X unified subscription details (October 13, 2026)</a> | <a href="https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html" target="_blank" rel="noopener">CNBC, SpaceX to acquire Cursor for 60 billion dollars</a> | <a href="https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html" target="_blank" rel="noopener">CNBC, OpenAI to end model access to Cursor (August 29, 2026)</a></em></p>
