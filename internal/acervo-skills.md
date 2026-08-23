# Acervo de skills, catálogo para doação

Levantamento feito em 22/08/2026 nesta máquina.
Pastas varridas: `/Users/ulissesbalbino/.claude/skills` e todas as `.claude/skills` dentro de `/Volumes/MAC_SSD01/Projects/`.

## O que eu contei, olhando agora

| Número | Fato |
|---|---|
| 183 | skills válidas em `~/.claude/skills` |
| 1 | skill de projeto: `oya-write`, em `open-your-ais-v2/.claude/skills/` |
| **184** | **total no acervo** |
| 48 | dessas 183 são symlink para `~/.agents/skills` (loja compartilhada com outros agentes) |
| 137 | são pastas reais |
| 2 | pastas quebradas e vazias, criadas por um glob que expandiu errado (`adapt animate audit ...` e `brutalist-skill gpt-tasteskill ...`). Não contam como skill e podem ser apagadas |
| 0 | chaves de API encontradas em texto claro nas 20 skills autorais (varredura por `sk-`, `AIza`, `Bearer`, `xi-api-key`, `api_key=`) |

Uma ressalva de honestidade: só as 26 skills da primeira tabela foram lidas de verdade, arquivo por arquivo. As outras 158 eu li pela descrição do frontmatter e pelos marcadores de licença e autoria. Não afirmo nada sobre o conteúdo interno delas.

## Resumo da classificação

| Classe | Quantas | Leitura |
|---|---|---|
| **A, pode doar já** | 12 | Genéricas, sem cliente, sem chave, sem caminho local. Verificado por varredura |
| **B, precisa sanitizar** | 10 | Método bom, mas carrega dado privado ou direito de terceiro não confirmado |
| **C, não doar** | 162 | 6 são dele e específicas demais do negócio, 2 são de terceiros e já públicas, 154 são pacotes instalados que não são dele para doar |

---

## Tabela 1, as 26 skills lidas por inteiro

| Skill | O que faz de verdade | Classe | O que precisa antes de publicar |
|---|---|---|---|
| **gauntlet-loop** | Não executa nada. É um gerador de prompt. Pega um pedido qualquer e escreve um prompt em três pilares (tarefa com referência concreta, metodologia com um verificador severo por executor, critério de parada por deslumbre ou nota mínima). Detalhe na seção dedicada abaixo | **A** | Trocar "Ulisses" por "o usuário" em 5 lugares (descrição, fluxo, bloco "Regras da casa"). Creditar Matt Shumer no README. Decidir se sai em português ou traduzida |
| **scroll-world** | Landing page onde o scroll dirige uma câmera que voa de cena em cena sem corte. Gera N stills coesos, N clipes de mergulho e N-1 conectores no Higgsfield, e entrega um motor de scrub em JS vanilla. O ouro está na regra de emenda quadro a quadro | **A** | Nada obrigatório. Verificado: sem caminho local, sem cliente, sem chave. Opcional: trocar Higgsfield por um bloco genérico de provedor |
| **world-film** | Irmã da scroll-world. Mesma ciência de mundo contínuo, mas entrega MP4 em vez de site. Tabela de duração por número de cenas, orçamento calibrado antes de gastar crédito, montagem em ffmpeg | **A** | Nada obrigatório. Mesma varredura limpa |
| **vox-skill** | Fábrica de explainer estilo Vox, paper collage documental. Style block travado repetido verbatim, tipografia crítica em PIL com fonte real, aprovação textual antes de queimar crédito, onboarding de marca em BRAND.md | **A** | Nada. Já está anonimizada, a produção real de origem não aparece por nome |
| **vox-motion-graphics** | Pipeline de explainer narrado ponta a ponta pelo Higgsfield MCP: pesquisa de pauta, roteiro checado, style key travada, clipes, locução, MP4 montado. Dois looks de casa | **A** | Nada |
| **vox-motion-solution** | Praticamente a mesma coisa que a de cima, na versão self contained | **A** | Escolher uma das duas. Doar as duas quase idênticas confunde quem recebe |
| **dublagem** | Dubla vídeo para N idiomas com ElevenLabs Dubbing v2 via API REST. Clona a voz, pergunta os idiomas sempre, confirma custo antes de disparar. Motor alternativo Higgsfield com lipsync | **A** | Nada. Já vem com `license: MIT` no frontmatter e a chave é lida de env ou `~/.config`, nunca gravada |
| **roteiros-virais** | Framework de roteiro longo de YouTube, 8 a 15 minutos: 4 travas a derrubar antes de escrever, 5 tipos de gancho, 7 estruturas de história. Arquivo único, já em inglês | **A** | Nada |
| **higgsfield** | Manual operacional do CLI do Higgsfield: escolher modelo pelo `job_set_type`, ler os parâmetros com `model get` antes de chutar, checar saldo, subir mídia, esperar o job | **A** | Nada. Vale avisar que é documentação de um CLI de terceiro e envelhece rápido |
| **video-prompt-builder** | Converte um brief em prompt de vídeo plano a plano para Seedance 2.0, em quatro seções obrigatórias | **A** | Nada |
| **ugc-avatar-builder** | Prompt de imagem em seis camadas para avatar UGC ultrarrealista. O alvo declarado é sobreviver ao scroll rápido sem parecer produzido | **A** | Nada |
| **nanobanana-prompt-builder** | Prompt de imagem em seis camadas para Nano Banana Pro via Kie AI, saída padrão 9:16 2K | **A** | Uma linha só: apagar "Yum Bumps food-character series" da seção Project context |
| **thestoryteller** | O melhor método do acervo para peça de cinema com IA. Nove etapas com portão de aprovação em cada uma, regra fixa de anexar todos os sheets no frame, locks nascidos de erro real, três caminhos de voz, caixa de pós em ffmpeg. Fronteira clara com a novelty: 24fps e −23 LUFS aqui, 30fps e −14 LUFS lá | **B** | Três coisas. 1) `scripts/transcreve.sh` lê a chave do AssemblyAI de um PDF em `/Volumes/MAC_SSD01/PESSOAIS/ULISSES/API/ASSEMBLY/`, trocar por variável de ambiente. 2) `references/prompt.md` tem três caminhos absolutos da máquina dele. 3) A pasta `modelos/` são prompts do piloto Toninho Sagatiba, decidir se viram exemplos anônimos ou saem |
| **novelty** | A fábrica de vídeo social: clipagem, mini doc com tese, motivacional em crescendo, explainer animado, recorte de talking head, vídeo de produto de um site, UGC de IA, Vox. Oito formatos, cada um com receita | **B** | Sanitização pesada. Sai: IDs de conta do Blotato (28799, 31677, 39051), o voice ID do ElevenLabs, o caminho `/Users/ulissesbalbino/VersoDiario/.keys`, a tabela inteira de perfis de projeto (V3rso Diário, Arquivo 13, as 3 contas de TikTok Shop) e os nomes de terceiros usados como exemplo de corte |
| **video-director** | Diretor de vídeo com dois modos no mesmo esqueleto, cinematográfico e UGC. Ordem inegociável de conta, custo, roteiro no chat, assets, teste barato, aprovação, cenas. Receitas de câmera provadas | **B** | Sai o e-mail `ulisses@pichorrafilmes.com.br`, o bot do Telegram `@Fabricatik_bot` e o DM ID 6252276527, os caminhos de `human-output/product/...` e a referência aos dossiês do método Adil |
| **human-dna** | Constrói o DNA Criativo de uma marca. Protocolo de 52 perguntas, uma por mensagem, entrega `DNA.md` mais `DNA.pdf` diagramado mais um `CLAUDE.md` de projeto | **B** | Antes de qualquer edição: confirmar com ele se tem direito de redistribuir. `reference/inteligencias/10-Image-Generation-Engine.md` cita workshops da Human Academy. Não consegui verificar a licença. Se o direito existir, a sanitização é pequena |
| **human-image** | Direção de fotografia e render de imagem. Decide câmera, lente, luz, composição e textura, e gera pelo Higgsfield CLI ou Magnific MCP. Sete setups de iluminação | **B** | Mesma trava de direitos da human-dna. Fora isso está limpa |
| **human-cinematic** | Campanhas, product shots, roteiros, character sheets, frames por cena e vídeo. Regra chave: vídeo só depois de frame aprovado. Prompt final de Seedance nasce em chinês | **B** | Mesma trava de direitos |
| **human-motion** | Reels animados em duas etapas fixas: imagem estática com tudo dentro, aprovação, depois animação no Seedance. Pacing e beat matching | **B** | Mesma trava de direitos. `reference/CLAUDE.md` cita Human Academy |
| **human-social** | Desdobra uma pasta com texto e imagens em peças nativas de Instagram Feed, Stories e LinkedIn. Não é resize, gera imagem nova por plataforma | **B** | Mesma trava de direitos |
| **human-carrossel** | Carrossel de Instagram em escala, News to Carrossel. R1 caça notícia, R2 escreve e renderiza | **B** | Além da trava de direitos: `reference/01-Brand-Identity.md` traz a Human Academy como marca padrão, com tom de voz e regras de nomenclatura. Isso é identidade de terceiro e tem que sair inteiro |
| **human-team** | Squad criativa multiagente sobre o framework OpenSquad. Doze passos de pipeline, do brief ao handoff, com agentes nomeados | **B** | Trava de direitos mais decisão sobre o OpenSquad e as skills embutidas (blotato, instagram-publisher, resend, apify, canva) |
| **oya-write** | Escreve artigo do Open Your AIs na voz dele, dentro deste repo. Trava schema Zod, piso de 800 palavras, roda a humanizer no fim | **C** | Não doar. É o motor editorial do site: aponta para `src/content/blog/`, para o `CLAUDE.md` deste repo, para `auto-openai.ts` na máquina dele e traz a lista de clientes permitidos |
| **youtube-editor** | Roteador para o motor `claude-youtube-editor` do Hasan, instalado no Agent Lab. Pipeline de 6 passos, cut, visuais, voz, SFX, packaging, upload | **C** | Não doar. O motor é de terceiro, o caminho é absoluto e pessoal, e o texto lista quais chaves de API vivem no `.env` dele |
| **tiktok-shop-ugc** | Método fechado de UGC para TikTok Shop, com prompt mestre completo | **C** | Não doar. O próprio arquivo diz que é a transcrição de um tutorial comprado, mais uma extensão de um segundo tutorial (Clonio AI). Não é dele para republicar |
| **prompt-master** | Gerador de prompt multi modelo, no dialeto nativo de cada um, com oito camadas obrigatórias de densidade | **C** | Não doar como está. A descrição diz, com todas as letras, que é clone da ciência dos Labs da Human Academy (AcademyPass). Se ele quiser doar, tem que reescrever do zero com o conhecimento dele |
| **generate-a-video** | Roda um gerador automático de Shorts que vive numa pasta pessoal | **C** | Não doar. 65 linhas, caminho absoluto travado em `/Volumes/MAC_SSD01/PESSOAIS/ULISSES/TIKTOK GERMANY/`, sem valor fora daquela máquina |
| **echotik-api-assistant** | Stub que aponta para a skill canônica do repo privado dele de API da EchoTik | **C** | Não doar. É um ponteiro, não uma skill, e trata de fluxo autenticado numa API paga |

---

## Tabela 2, o resto do acervo, 158 skills

Nenhuma dessas foi escrita por ele. São pacotes instalados. Doar qualquer uma seria redistribuir código de outra pessoa.

| Grupo | Quantas | Origem que eu consegui verificar | Classe |
|---|---|---|---|
| Pacote de marketing e growth (`ab-test-setup`, `copywriting`, `seo-audit`, `page-cro`, `pricing-strategy` e afins) | 38 | Symlinks para `~/.agents/skills`, loja compartilhada | C |
| `ads` e `ads-*` | 20 | Frontmatter traz `license: MIT` | C |
| Pacote HyperFrames e vídeo (`hyperframes-*`, `media-use`, `talking-head-recut`, `music-to-video`, `pr-to-video`, `figma`, `slideshow` e afins) | 19 | Instalados em bloco em 18/07 | C |
| Verbos de design (`adapt`, `animate`, `polish`, `impeccable`, `harden`, `typeset` e afins) | 18 | `impeccable` declara Apache 2.0, baseada na skill frontend-design da Anthropic | C |
| `remotion-*` | 9 | Skills oficiais do Remotion | C |
| Pacote de taste e UI (`taste-skill`, `brutalist-skill`, `soft-skill`, `stitch-skill` e afins) | 9 | Pacote de terceiro | C |
| `v3-*` do claude-flow | 9 | claude-flow | C |
| `higgsfield-*` (brandkit, soul-id, thumbnail e afins) | 8 | Symlinks para a loja compartilhada | C |
| `agentdb-*` e `reasoningbank-*` | 7 | claude-flow | C |
| `github-*` | 5 | claude-flow | C |
| `sparc-methodology`, `swarm-*`, `hooks-automation`, `stream-chain`, `verification-quality`, `pair-programming`, `browser`, `skill-builder` | 8 | `sparc-methodology` traz `author: Claude Flow` | C |
| `humanizer` | 1 | MIT, com LICENSE e README no diretório | C |
| `watch` | 1 | `author: bradautomates`, MIT, repo público em github.com/bradautomates/claude-video | C |
| `video-use` | 1 | Symlink para um clone de github.com/browser-use/video-use. Commits assinados por gente da browser-use e da HeyGen | C |
| `ui-ux-pro-max`, `emil-design-eng`, `motion-framer` | 3 | Pacotes de terceiro | C |
| Duas pastas vazias criadas por glob quebrado | 2 | Lixo, apagar | n/a |

---

## A joia da coroa, gauntlet-loop lida por inteiro

Arquivo único, 156 linhas, sem pasta de referências, sem script. `/Users/ulissesbalbino/.claude/skills/gauntlet-loop/SKILL.md`.

Ela não executa nada. É um compilador de prompt. Entra um pedido em linguagem solta, sai um prompt pronto para colar, em inglês por padrão.

**O que ela sustenta como tese.** Existem três níveis de trabalho com agente. No primeiro, o humano pede e o humano verifica, e cansa. No segundo, um agente verifica outro, que é o que a Anthropic recomenda. No terceiro, um time faz e um time verifica, em loop, até todos aprovarem. A skill só escreve o terceiro. A analogia dela é a de técnico de futebol: escala o time, define posição, põe um auxiliar em cima de cada jogador e só entrega quando o diretor aprova.

**Os três pilares que todo prompt gerado tem, nessa ordem.**

1. A tarefa, com nível de qualidade nomeado e referência concreta de comparação. Nunca "faça um jogo", sempre "faça um FPS no nível do Call of Duty mais recente". A referência existe para dar régua objetiva ao verificador depois.
2. A metodologia. Fan out de sub-agentes, uma frente por agente, e um verificador independente por executor. O verificador tem que ser crítico severo, não torcedor. `/loop` em cada item.
3. O critério de parada. Não é "até funcionar". É não parar até cada verificador estar deslumbrado comparando lado a lado com a referência real e dizendo qual ficou melhor. Alternativa mensurável: nota de 0 a 100, só aceita acima de 85.

**As quatro melhorias que ele acrescentou por cima da técnica original.** É aqui que a skill deixa de ser resumo de tweet e vira método.

1. Verificação real, não revisão de código. Um verificador que só lê código aprova coisa quebrada. Ele tem que abrir o navegador, clicar, jogar. A skill manda usar Playwright MCP e, se não estiver instalado, instalar antes de verificar.
2. Julgamento às cegas. O verificador recebe só o resultado e os critérios, nunca o histórico de tentativas. Quem cozinha acha a própria comida boa.
3. Teto de rodadas e de custo. O loop é infinito por natureza. A skill manda fixar de 3 a 8 rodadas e orçamento de token quando fizer sentido.
4. Paralelismo de verdade. Dez entregas em fila custam dez vezes o tempo. Fan out não é enfeite, é o que torna a técnica viável.

**O que mais ninguém tem.** A seção de adaptação por domínio. A técnica sai do código e vai para vídeo (referência é uma peça comercial real, o verificador assiste o render e compara plano a plano), site (o verificador navega com Playwright e mede carregamento), campanha (o verificador julga gancho e CTA contra a peça que performou melhor) e documento (o verificador caça furo lógico e promessa sem evidência). Essa tabela é o olho de diretor aplicado a uma técnica de engenharia. É o que faz a skill ser dele e não uma cópia.

**Crédito e originalidade.** A técnica é do Matt Shumer, e a skill reproduz o prompt original dele palavra por palavra como referência canônica, o que é honesto e tem que continuar assim na versão pública. Procurei e não encontrei essa técnica empacotada como skill em lugar nenhum, mas registro o limite: não fiz busca na web nesta sessão, então não afirmo que é inédita no GitHub. Afirmo que é a peça mais original do acervo dele.

**Para publicar.** Trocar "Ulisses" por "o usuário" nos cinco pontos onde aparece, creditar Matt Shumer no README, e decidir entre manter em português ou traduzir. Nenhuma outra sanitização é necessária. Verificado: nenhum caminho local, nenhuma chave, nenhum nome de cliente.

---

## O que eu não verifiquei

- A licença real das skills `human-*`. Vi sinal de origem na Human Academy dentro de dois arquivos, não vi contrato nem termo. Ele precisa responder isso antes de qualquer publicação.
- O conteúdo interno das 158 skills de pacote. Classifiquei por metadado e origem, não por leitura.
- Se `gauntlet-loop` já existe publicada por outra pessoa. Não fiz busca na web.
- Estrelas, forks e datas de qualquer repositório. Não consultei o GitHub nesta sessão.
