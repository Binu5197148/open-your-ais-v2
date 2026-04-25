# OYA — Auditoria de Conteúdo

**Data:** 2026-04-25
**Cron:** PARADO (`com.openai.scheduler` desligado; TikTok e Reels seguem vivos)
**Total de artigos:** 80 → proposta: 74 (delete 6) + 2 reescritos
**Como decidir:** marca ✅/❌/✏️ em cada cluster, ou só põe "OK" no fim do cluster pra aceitar minha proposta inteira.

---

## 🔧 BUG TÉCNICO — 2 artigos renderizando como bloco de código

Causa: 6 espaços de indentação no HTML embutido. Astro Markdown trata 4+ espaços como `<pre>`. Fix mecânico (1 sed por arquivo).

| # | Slug | Ação |
|---|---|---|
| 1 | `viral-video-playbook-60-seconds-ai-2026` | ✏️ Eu desindento + republico |
| 2 | `alibaba-qwen-35-seedance-20-china-ai-disruption` | ✏️ Eu desindento + republico |

**Decisão:** padrão é eu fazer. Diga "não toca" se preferir que eu não mexa.

---

## 🟥 CLUSTER 1 — VAL KILMER (4 artigos sobre o mesmo trailer)

Todos cobrem o mesmo evento (trailer de "As Deep as the Grave"), publicados em 4 dias (18-20/abr). Pior caso de canibalização SEO no site — Google não sabe qual rankear, divide autoridade por 4.

| Slug | Data | Recomendação | Motivo |
|---|---|---|---|
| `val-kilmer-ai-resurrection-filmmaking-ethics-soul` | 04-19 | **✅ FICA (campeão)** | Foco em "soul of performance" — ângulo mais cinéfilo, casa com sua voz |
| `ai-kilmer-resurrection-ethical-line-filmmaker-perspective` | 04-18 | ❌ DELETE → 301 pro campeão | Mesmo tema, ângulo mais raso |
| `ai-val-kilmer-digital-resurrection-ethics-filmmaking` | 04-19 | ❌ DELETE → 301 pro campeão | Tem `&apos;` e `&quot;` no description (HTML escapado errado) |
| `val-kilmer-ai-film-not-threat-new-horizon` | 04-20 | ❌ DELETE → 301 pro campeão | Conclusão genérica ("new horizon") |

**Decisão:** ___

---

## 🟥 CLUSTER 2 — MIDJOURNEY V7 (3 artigos)

| Slug | Data | Recomendação | Motivo |
|---|---|---|---|
| `midjourney-v7-honest-review-personalization-draft-mode-video` | 03-15 | **✅ FICA (campeão)** | Cobre tudo: personalization, draft, voice prompting, video |
| `midjourney-v7-commercial-concept-boards-visual-development-directors-guide` | 03-15 | ✅ FICA | Ângulo distinto: uso prático em pitch decks. Nicho diferente, vale manter |
| `midjourney-v7-release-2026-review` | 03-02 | ❌ DELETE → 301 pro campeão | Versão mais antiga e rasa, escrita 13 dias antes do honest review |

**Decisão:** ___

---

## 🟥 CLUSTER 3 — KLING 3 (2 artigos do mesmo dia)

| Slug | Data | Recomendação | Motivo |
|---|---|---|---|
| `kling-3-0-motion-control-multi-shot-director-review` | 03-15 | **✅ FICA (campeão)** | Tem benchmark vs Runway Act-Two (1,667% win rate), ângulo mais forte |
| `kling-3-native-4k-motion-control-production-assessment` | 03-15 | ❌ DELETE → 301 pro campeão | Mesmo tema, sem o gancho da comparação |

**Decisão:** ___

---

## 🟥 CLUSTER 4 — ADOBE PREMIERE (2 artigos do mesmo dia)

| Slug | Data | Recomendação | Motivo |
|---|---|---|---|
| `adobe-premiere-26-ai-object-mask-what-editors-actually-get` | 03-15 | **✅ FICA (campeão)** | Título mais específico, menciona Runway/Luma integration |
| `adobe-premiere-2026-ai-features-what-actually-changed` | 03-15 | ❌ DELETE → 301 pro campeão | Cobre os mesmos recursos, mais genérico |

**Decisão:** ___

---

## 🟨 CLUSTER 5 — NETFLIX / INTERPOSITIVE (3 artigos)

Tema sobreposto mas com ângulos distintos. Recomendo manter os 3 por enquanto e revisitar depois se SEO continuar dividindo.

| Slug | Data | Recomendação |
|---|---|---|
| `netflix-ai-footage-filmmaking-future` | 04-20 | ✅ FICA (mais recente, narrativa ampla) |
| `netflix-interpositive-ai-filmmaking-studio-director-take` | 03-09 | ✅ FICA (foco no Affleck/aquisição) |
| `reuters-netflix-interpositive-ai-film-tech-what-changes-on-set` | 03-11 | ✅ FICA (ponto de vista BR — diferenciador) |

**Decisão:** ___

---

## 🟩 CLUSTERS OK (manter como está)

- **ELEVENLABS (3)** — voice ID, dubbing v3, workflow → cada um cobre coisa distinta
- **FIREFLY (2)** — preço $10 vs 30 modelos integrados → narrativas diferentes
- **LTX VIDEO (2)** — review v2 + update v2.3 24h depois → narrativa de evolução, mantém os 2
- **CLAUDE (4)** — Cowork, Claude 4, Claude Design, comparativo de modelos → ângulos distintos
- **RUNWAY (3), KLING geral, VEO (várias menções)** — apareceram em comparativos, não duplicatas

---

## 📊 PROPOSTA FINAL

- **Deletar 6 artigos** (3 Val Kilmer + 1 Midjourney + 1 Kling + 1 Premiere)
- **Reescrever 2 artigos** (bug de indentação)
- **Adicionar 6 redirects 301** no `vercel.json` (cada slug deletado → seu campeão)
- **74 artigos restantes** + estrutura limpa

---

## 🔍 GARANTIA TÉCNICA DO SITE (verifico depois da limpeza)

- [ ] AdSense tag em `<head>` global
- [ ] GA `G-EBZ4F0ZXRY` carregando em todas as páginas
- [ ] `sitemap.xml` regerado com 74 URLs corretas
- [ ] `robots.txt` + `ads.txt` no ar
- [ ] Canonical + OG em cada artigo
- [ ] Todos os redirects do `vercel.json` testados via curl
- [ ] Build Astro local roda sem warning

---

## ▶️ Próximo passo

Você marca os clusters acima (✅/❌ ou só "OK pra propostas"), e eu executo:
1. Delete + redirects dos 6 artigos
2. Fix dos 2 com bug
3. Build + deploy
4. Checklist técnico
5. Te entrego URL por URL testada
