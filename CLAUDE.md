# CLAUDE.md — Open Your AIs (openyourais.com)

Single source of truth for all AI agents, skills, and pipelines that generate content for this site.
Update this file whenever the tool stack changes. Always include the date.

---

## ULISSES BALBINO — CURRENT TOOL STACK
`Last updated: 2026-08-27`

Any article, tweet, or post that mentions tools MUST draw from this block.
Do not reference a tool that is not listed here as "current". If writing about a past tool, frame it explicitly as historical ("used to", "in 2024", etc.).

### Models
| Model | Use |
|---|---|
| Claude Fable 5 (`claude-fable-5`) | Primary — daily work. **O Claude é o orquestrador principal dele hoje**: roteiro, sheets, storyboard, direção das gerações e motion passam por ele |
| GPT-5.6 Sol | Complex reasoning, demanding tasks |
| GPT-5.6 Terra | Balanced, everyday tasks |
| GPT-5.6 Luna | Fast, lightweight tasks |

### Hubs / Platforms
| Tool | Role |
|---|---|
| **Higgsfield** | Primary hub — MCP CLI connects directly to Claude; all models below run here |
| **Magnific** | **Hub de IAs, igual ao Higgsfield.** Ele usa um OU o outro, não os dois em papéis diferentes. Nunca descrever Magnific só como "upscale" |
| **Midjourney** | Still image generation (standalone, confirmed still in use 2026-08-17) |
| **ElevenLabs** | Trilha, locução, dubbing e **clone de voz**, que ele usa muito. Não é avatar |
| **HeyGen** | Avatar-led video |
| **ComfyUI / Comfy Cloud** | Node-level control; runs on Comfy Cloud, not local |
| **Postiz** and **Blotato** | Scheduling and automating social publishing |
| **Remotion** | Programmatic motion rendered from code, driven by Claude. Used when a piece needs variations re-rendered instead of regenerated |
| **Topaz Labs** | Upscale (confirmed in use 2026-08-27, on the Toninho Sagatiba pilot) |

### Inside Higgsfield (models accessed via MCP CLI)
| Tool | Specialty |
|---|---|
| **GPT Image (GPT 2.0 in Higgsfield)** | Images with text — best-in-class text rendering inside images |
| **Nano Banana Pro** | Subject/character consistency across generations |
| **Nano Banana 2** | Image generation (used alongside Pro) |
| **Kling 3.0** | Continua ótimo. Hoje o uso principal é o **Motion Control**, que repete um movimento e por isso permite trocar cenário e objetos, ou refazer cenas com movimento complexo. Também image-to-video e start/end frame |
| **Seedance 2.0** | **O cavalo de batalha.** Super consistente, multi-cena, faz motion e muito mais. Inferior ao 2.5, mas suficiente, e ele usa para praticamente tudo |
| **Seedance 2.5** | 1080p, mas **caríssimo**. Na prática ele roda em 720p e faz upscale depois |
| **Gemini Omni** (Google) | Motion, e salvar cena que ficou parada demais partindo de uma imagem só. Faz a câmera voar por qualquer cenário. **Não é muito consistente**, mas quando acerta é incrível |

### Agents
| Agent | Role |
|---|---|
| **Claude Cowork** | Project organization, orchestration |
| **Claude Code** | Hands-on implementation, automation, pipeline work |
| **GPT-5.6 agent** | Browser access, end-to-end task execution |
| **Codex** | Second coding agent, used alongside Claude Code |

### Traditional / Editing Suite
| Tool | Role |
|---|---|
| Adobe Premiere Pro | Primary NLE — latest AI features active |
| Adobe After Effects | Motion graphics + AI features |
| Adobe Photoshop | Retouching + latest AI tools |
| DaVinci Resolve | Color, audio — follows AI advances, less active than previously |

### Skills (built over time)
Ulisses has built a library of custom Claude skills that form an efficient production pipeline. See `.claude/skills/` for the current set.

---

## BANNED CLAIMS
These were personally banned by Ulisses. Never write them in any content, tweet, or skill prompt.

| Claim | Banned since | Reason |
|---|---|---|
| Stand-up comedy ("stand-up taught me", "comedian") | 2026-07-15 | Never happened — invented by a routine |
| Based in / between / travels to Los Angeles | 2026-07-15 | Never true — he is São Paulo only |
| Runway as a current tool | 2026-07-17 | No longer in use |
| Any Claude model before Fable 5 as "current" | 2026-07-17 | Outdated |
| Any GPT model before 5.6 as "current" | 2026-07-17 | Outdated |
| DALL-E as a tool he uses | 2026-08-17 | Never used it. His words: "nunca foi, é patética" |
| Lovable as a current tool | 2026-08-17 | Built openyourais v1; fully migrated to Claude Code and Codex |
| Directing or producing the Ronald Rios Talk Show | 2026-08-13 | He was **actor and writer** on it, never director nor producer. Published by mistake on 10/08, flagged by him on 13/08. Correct framing only: acted and wrote on the show |
| MTV Brasil (or Viacom/Paramount) as an employer | 2026-08-17 | Never on their payroll. His sketch series was selected into MTV's national programming and produced inside MTV's facilities. Correct framing only: the series ran on MTV and used their structure |

---

## FRESHNESS RULE
Workflow articles (articles that mention specific tools, models, or pipelines) go stale fast.

**Rules:**
1. Every workflow article must have `toolVersion: "YYYY-MM"` in the frontmatter (month of last verification).
2. Before publishing any workflow article, verify every tool mentioned exists in the CURRENT TOOL STACK above. If it does not, either remove it or explicitly frame it as historical.
3. The X amplification agent must not tweet workflow articles where `toolVersion` is more than 90 days old without flagging it first.
4. "Yesterday's news interests nobody." — news hooks in articles must be from the current week. Verify dates before publishing.

---

## PERSONA PALETTE (rotate; never fabricate beyond these)
- **Roles**: composer, actor, editor, writer, director
- **Comedy/TV**: **actor and writer** on the Ronald Rios Talk Show (NEVER director or producer, corrigido por ele em 2026-08-13); Pichorra Filmes (São Paulo, 2012, with Lisandra Barros)
- **Agency**: Pichorra produced for WMcCann as a production company (NOT as staff). Directed Forno de Minas "Combina com tudo" (stop-motion manifesto + short films, with Estudio Fue)
- **Clients** (rotate 0–3, never the full list): Disney, Nestlé, Yamaha, Carrefour, Starbucks, Kopenhagen, Benefit Cosmetics, **Outback** (cliente ATUAL, confirmado 2026-08-27)
- **Mobile Film Festival 2015 (Paris, COP21): FINALISTA**, confirmado por ele em 2026-08-27. Pode escrever "finalist". A dúvida antiga entre finalista e selecionado está resolvida
- **Location**: São Paulo only
- **Now**: builds AI automation (Open Your AIs, Soul Symple); uses Kling, Seedance, Gemini Omni on real jobs
- **Craft lens**: cinema, photography, theater, Tarkovsky, Benjamin

**FORBIDDEN**: invented budgets, crew sizes, shoot durations, or years tied to a named client. LA. Stand-up comedy.
