# Como retomar o 5 Week Skills

Escrito em 2026-08-22 porque o limite de 5 horas ia bater com o workflow rodando.

## O que e

Serie semanal para openyourais.com: cinco skills do Claude por semana, uma delas exclusiva do
acervo do Ulisses e quatro garimpadas do GitHub. Objetivo: fazer as pessoas voltarem ao site toda
semana, divulgar o axenworks.com junto, e reabrir as rotinas de post com conteudo util em vez da
formula que matou o engajamento em agosto.

## Estado quando a sessao acabou

- Garimpo concluido: 29 skills encontradas por tres agentes com angulos diferentes
  (GitHub direto por estrelas, comunidade viva nos ultimos 60 dias, oficial e producao seria)
- Acervo local catalogado em `internal/acervo-skills.md` (16 KB), classificando as skills dele em
  PODE DOAR, PRECISA SANITIZAR e NAO DOAR
- Faltava, naquele momento: curadoria da edicao 1, o artigo da tese, a especificacao do formato
  semanal, a pagina /skills com os downloads, e toda a verificacao

**Atualizacao de 22/08/2026, depois de um checador de fora reprovar a especificacao.** A pagina
`/skills` existe e serve 10 zips. O ledger existe em `internal/5ws-ledger.md` com as tres linhas
semente da edicao 1. A especificacao e a edicao 1 foram corrigidas em sete pontos de numero.
Os travessoes de dentro dos zips foram removidos. A gauntlet-loop saiu de `public/skills/` e
esta em `internal/withheld/` ate a edicao 5, para nao contradizer o que o artigo diz dela.

## Como retomar

Workflow({
  scriptPath: "/Users/ulissesbalbino/.claude/projects/-Volumes-MAC-SSD01-Projects-open-your-ais-v2/1553a92f-b1b5-4d01-864a-e5ee6d618465/workflows/scripts/five-week-skills-wf_fcaa0e0e-127.js",
  resumeFromRunId: "wf_fcaa0e0e-127"
})

Os 4 agentes concluidos voltam do cache instantaneamente. Se o workflow ainda estiver rodando,
pare antes com TaskStop({taskId: "wa3wl1mtw"}).

## Travas que NAO podem ser afrouxadas

1. **O POST** precisa ser REPERTORIO com anti repeticao, nunca checklist de elementos
   obrigatorios em ordem fixa. Isso ja destruiu o engajamento dele uma vez, em julho de 2026.
   Ver [[linkedin-formula-failure-postmortem]] na memoria. O artigo e o contrario, de proposito:
   espinha fixa e ficha de oito campos toda semana, porque coluna precisa ser reconhecivel.
   A separacao esta escrita no topo de `internal/formato-5-week-skills.md`. Nao juntar os dois
   de novo: em 22/08/2026 a lei estava escrita larga demais e se contradizia duas paginas depois.
2. Vicios banidos com teto: "Minha reacao honesta" no maximo 1 a cada 5 posts, e o mesmo para
   "Tudo parte de voce", "Nao porque X. Porque Y.", "Para quem A / Para quem B" e a abertura
   "Em [data], [empresa]".
3. Todo numero de estrela e todo link de repositorio precisa ser aberto e verificado na hora.
4. Sem travessao longo, sem hashtag. **Isso vale dentro dos zips tambem**, nao so no que aparece
   na tela. Em 22/08/2026 os 11 zips prontos para publicar carregavam 757 travessoes longos e
   74 meias riscas, e nenhuma checklist tinha pego.
5. Antes de zipar qualquer skill do acervo para download: remover caminho local, chave de API,
   nome de cliente **e todo travessao longo e meia risca**, arquivo por arquivo.
6. Skill que o artigo da semana declara como nao pronta nao pode estar em `public/skills/`.
   A gauntlet-loop esta retida em `internal/withheld/` ate a edicao 5. Ver o README de la.

## Onde vai cada coisa

- Artigo da tese: `src/content/blog/` (ingles, frontmatter igual aos outros, heroImage novo em P&B)
- Especificacao e edicao 1: `internal/formato-5-week-skills.md` e `internal/edicao-01.md`
- Posts de divulgacao: `internal/posts-edicao-01.md` (LinkedIn em portugues, X em ingles)
- Pagina de download: `src/pages/skills.astro`, zips em `public/skills/`
- Relatorio final: `internal/RELATORIO-5-WEEK-SKILLS.md`

## Ele ja autorizou

Publicar os posts quando ficarem prontos. LinkedIn accountId 13743, X accountId 13071, via Blotato.
