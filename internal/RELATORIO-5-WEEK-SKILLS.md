# RELATORIO 5 WEEK SKILLS, edicao 1

Escrito em 22/08/2026. Para o Ulisses ler antes de autorizar qualquer publicacao.

Resumo em tres linhas: a edicao 1 esta escrita e verificada, a pagina `/skills` esta no ar com
10 zips limpos, e a especificacao do formato foi reprovada por um verificador de fora com nota 68.
Nada foi publicado. Nada vai ser publicado sem as suas respostas da secao 6.

---

## 1. As cinco skills da edicao 1, e por que cada uma entrou

Snapshot unico, 22/08/2026 entre 21h13 e 21h22 UTC. Todo numero foi lido pelo `gh` CLI
autenticado, nao pela API publica (que estava devolvendo HTTP 403 por limite de taxa neste IP
mais cedo no mesmo dia). Toda URL foi aberta com `curl` na mesma janela e respondeu HTTP 200.

### 1. video-shotcraft
`https://github.com/Vincentwei1021/video-shotcraft`
6.052 estrelas, 521 forks, 3 issues abertas, Apache-2.0, push no mesmo dia as 18h38 UTC.

**Por que entrou.** E a unica das cinco que entrega filme pronto, e o publico da coluna e
audiovisual. Sao 152 shot recipe cards (contados pasta por pasta, nao lidos do README: camera 10,
data 11, effects 17, interaction 15, opening 10, outro 7, rhythm 11, transition 19, typography 25,
ui-entrance 27), 209 previews de movimento e um template completo, o Ink Press, de 36,2 segundos
em 1920x1080 a 30fps com 10 planos. A galeria publica esta no ar, entao o leitor julga o material
antes de instalar. Instala em um comando.

**O que o artigo diz e o README esconde.** O Remotion tem licenca propria, gratis para individuo e
time pequeno, empresa pode precisar pagar. A exportacao e para JianYing (CapCut CN), nao o CapCut
internacional. As tres solucoes de render headless sao problema de Linux, nao do Mac dele.

### 2. humanizer
`https://github.com/blader/humanizer`
37.209 estrelas, 3.289 forks, 16 issues abertas, MIT, push em 19/08 as 05h58 UTC.

**Por que entrou.** E o gancho editorial da semana e ele e verificavel linha por linha. Sao 35
padroes numerados, e o padrao 14 e travessao longo e meia risca, com instrucao de buscar os dois
caracteres no texto final antes de devolver. A regra permanente da casa dele virou ferramenta de
terceiro.

**O fato pessoal que abre o artigo.** Ele JA tem a humanizer instalada em
`~/.claude/skills/humanizer`. A copia dele parou em 31/03/2026, versao 2.5.1, com 29 padroes. O
upstream esta em 2.11.2, com 35. Os seis que faltam sao os de numero 30 a 35, e o 33
("fake-candid openings") tem na lista de gatilhos exatamente "Honestly?" e "Let's be honest", que
e o tique que matou os oito posts de julho. Esse e o material que faz o artigo valer.

**A pegadinha do proprio projeto.** Se voce der uma amostra da sua escrita antiga, a amostra manda
mais que a regra padrao, inclusive sobre o padrao 14. A ferramenta obedece quem a treina.

### 3. html-anything
`https://github.com/nexu-io/html-anything`
8.409 estrelas, 832 forks, 59 issues abertas, Apache-2.0, push em 18/08. Sem release publicada.

**Por que entrou.** Resolve a peca que um diretor entrega toda semana e odeia montar: tratamento,
one pager, deck, poster. Sao 75 templates em 9 superficies de entrega, cada um com um
`example.html` que abre direto do repositorio sem login. E o "zero API key" e real: reaproveita a
sessao que voce ja tem logada no CLI.

**Custo real, escrito no artigo.** E a mais cara de instalar das cinco. Nao e `npx skills add`,
e clone mais `pnpm install` mais `pnpm -F @html-anything/next dev` e abrir localhost:3000.

**Aviso de seguranca que vai publicado junto.** O app roda o seu CLI de agente com flags
permissivas: `gemini --yolo`, `cursor-agent --force --trust`, `codex exec --sandbox
workspace-write`. Eles tratam como app de um operador so, numa maquina so, com rotas travadas por
allowlist de Host header. Ainda assim, e o seu agente em modo aprova tudo. Nota menor registrada:
o README diz 9 CLIs no topo e a tabela diz 8.

### 4. planning-with-files
`https://github.com/OthmanAdi/planning-with-files`
26.287 estrelas, 2.203 forks, 7 issues abertas, MIT, push no mesmo dia as 11h09 UTC, release
v3.11.2 publicada as 11h10 UTC.

**Por que entrou.** E a unica das cinco com numero de avaliacao publicado e auditavel. O
`docs/evals.md` registra 96,7% de assercoes passando (29 de 30) contra 6,7% (2 de 30) sem a skill,
mais 3 vitorias em 3 comparacoes A/B as cegas. Abri o documento e li os dois numeros.

**Os quatro contras, todos no artigo.** Custa cerca de 68% mais tokens e 17% mais tempo, declarado
por eles. O 96,7% e de 06/03/2026, modelo claude-sonnet-4-6, versao 2.21.0 na tabela de ambiente
(a abertura do mesmo documento diz 2.22.0, contradicao interna que anotei e nao consigo resolver
de fora), enquanto a release de hoje e a v3.11.2. O benchmark competitivo deles contra seis
metodos e declarado pelos proprios autores como v1 interno. E o que morde de verdade: as rotas
baratas de instalacao podem deixar voce sem hook registrado, e o hook e o mecanismo inteiro.

**O detalhe que convenceu mais que as 26 mil estrelas.** Em marco eles auditaram o proprio hook,
acharam um vetor de amplificacao de prompt injection (conteudo web chegava ao `task_plan.md` e era
reinjetado a cada tool call), removeram WebFetch e WebSearch do `allowed-tools` e publicaram o que
aconteceu. Projeto que audita a propria melhor feature e publica o buraco merece link.

### 5. gauntlet-loop, a sua
Sem link publico. E de proposito.

**Por que entrou assim.** O artigo diz ao leitor que ela nao esta pronta, lista os cinco motivos
contados no arquivo hoje a noite, e marca a data de publicacao dela para a edicao 5, em 21/09.
Isso e mais util para o leitor que fingir que a agenda foi instinto editorial.

**Os cinco pendentes, contados no arquivo.** Nao existe campo `license:` no frontmatter (as outras
quatro skills da lista declaram licenca). Esta em portugues e o site e em ingles. O SKILL.md tem
oito travessoes longos, e a propria skill carrega a regra da casa contra eles. A pasta
`references/` esta vazia. E o prompt original do Matt Shumer esta reproduzido dentro dela, palavra
por palavra, creditado, e falta a sua decisao sobre carregar o texto inteiro ou apontar a fonte.

Arquivo de origem: `~/.claude/skills/gauntlet-loop/SKILL.md`, 156 linhas, 9.115 bytes, modificado
em 12/08/2026. Seu nome aparece tres vezes, nas linhas 3, 103 e 152. Shumer aparece creditado duas
vezes, nas linhas 3 e 54.

---

## 2. Onde ficou cada arquivo

Tudo com caminho absoluto, a partir de `/Volumes/MAC_SSD01/Projects/open-your-ais-v2/`.

| Arquivo | O que e | Estado |
|---|---|---|
| `internal/edicao-01.md` | A edicao 1 inteira, em ingles, com frontmatter pronto (id `art-172`, pubDate 24/08) | Escrita e verificada. **Ainda nao esta em `src/content/blog/`** |
| `internal/posts-edicao-01.md` | Post do LinkedIn em portugues (formato P4, 1.445 caracteres com URL) e post do X em ingles (P11, 713 caracteres com URL), mais uma versao 2B encadeada de reserva | Escritos. Nao publicados |
| `internal/formato-5-week-skills.md` | A especificacao do formato: estrutura da ficha, vicios banidos com teto, repertorio de aberturas, fechos e formatos de post, travas anti repeticao, kill switch, checklist de publicacao | Escrita, corrigida em sete pontos de numero, **reprovada com nota 68** |
| `internal/5ws-ledger.md` | O ledger obrigatorio. Uma linha por peca publicada. Ja tem as tres linhas semente da edicao 1 e a leitura das travas para a edicao 2 | Criado. Datas ainda sao planejadas, nao reais |
| `internal/acervo-skills.md` | Catalogo do acervo local, 184 skills classificadas em A, B e C | Pronto |
| `internal/withheld/gauntlet-loop.zip` | O zip da gauntlet-loop, retido | Fora de `public/skills/` de proposito. Ver `internal/withheld/README.md` |
| `internal/RETOMAR-5-WEEK-SKILLS.md` | Como retomar o workflow, com as travas que nao podem ser afrouxadas | Pronto |
| `src/pages/skills.astro` | A pagina `/skills` com os cards e downloads | No ar no build. `npm run build` passou, 117 paginas, `/skills/index.html` gerado |
| `public/skills/*.zip` | 10 zips do acervo dele, prontos para download | 43 arquivos no total, 32 de trabalho mais 11 READMEs. Zero travessao longo, zero meia risca, conferido descompactando |
| `src/content/blog/static-content-ai-eats-interactive-tools-it-recommends.md` | O artigo da tese (`art-171`, 22/08), o que explica por que ferramenta sobrevive e conteudo estatico nao | Ja esta em `src/content/blog/`, com heroImage real. **Passou com 92** |

Os 10 zips servidos: `dublagem`, `higgsfield`, `nanobanana-prompt-builder`, `roteiros-virais`,
`scroll-world`, `ugc-avatar-builder`, `video-prompt-builder`, `vox-motion-graphics`, `vox-skill`,
`world-film`.

---

## 3. Quanto do seu acervo pode ser doado

184 skills no total: 183 em `~/.claude/skills` mais a `oya-write` neste projeto. Dessas 183, 48
sao symlink para `~/.agents/skills`, 137 sao pastas reais e 2 sao pastas vazias criadas por um
glob quebrado (lixo, pode apagar).

| Classe | Quantas | O que significa |
|---|---|---|
| A, pode doar ja | 12 | Genericas, sem cliente, sem chave, sem caminho local |
| B, precisa sanitizar | 10 | Metodo bom, mas carrega dado privado ou direito de terceiro nao confirmado |
| C, nao doar | 162 | 6 sao suas e especificas demais do negocio, 2 sao de terceiros e ja publicas, 154 sao pacotes instalados que nao sao seus para doar |

Ressalva de honestidade: so 26 skills foram lidas arquivo por arquivo. As outras 158 foram
classificadas por frontmatter, licenca e origem. Nao afirmo nada sobre o conteudo interno delas.
Varredura por credencial (`sk-`, `AIza`, `Bearer`, `xi-api-key`, `api_key=`) nas 20 autorais:
zero chave em texto claro.

### As melhores para doar

1. **gauntlet-loop.** A joia. Compilador de prompt em tres pilares, mais quatro melhorias suas por
   cima do Matt Shumer: verificacao como usuario final via Playwright, julgamento as cegas, teto
   de rodadas e custo, paralelismo real. O que ninguem tem e a tabela de adaptacao por dominio
   (video, site, campanha, documento). Falta: licenca, ingles, `references/`, trocar seu nome por
   "o usuario" em cinco pontos, decidir sobre o texto do Shumer, tirar os oito travessoes.
2. **scroll-world.** Landing page onde o scroll dirige uma camera continua sem corte. O valor e a
   regra de emenda quadro a quadro, nao o framework. Zero sanitizacao. Ja esta no ar.
3. **world-film.** A irma dela, mesmo mundo continuo mas entrega MP4. Zero sanitizacao. Ja no ar.
4. **dublagem.** ElevenLabs Dubbing v2 via API REST, ja com `license: MIT` no frontmatter e chave
   lida de env. Saiu como estava. Ja no ar.
5. **vox-skill.** Fabrica de explainer paper collage, com style block travado e tipografia critica
   em PIL. Ja anonimizada. Ja no ar.

Reserva: **roteiros-virais** (4 travas, 5 gancho, 7 estruturas), arquivo unico, ja em ingles,
zero friccao. Tambem ja esta no ar.

### Dois avisos que mudam o plano

**As sete skills `human-*` estao na classe B por trava de DIREITOS, nao de sanitizacao.**
`human-carrossel/reference/01-Brand-Identity.md` traz a Human Academy como marca padrao, com tom
de voz e regras de nomenclatura. `human-dna` cita workshops da Human Academy. A `prompt-master`
diz na propria descricao que e clone da ciencia dos Labs da Human Academy (AcademyPass). Nao vi
contrato nem termo de licenca em lugar nenhum. Voce precisa responder se pode redistribuir antes
de qualquer publicacao. A `prompt-master` foi para C por causa disso.

**Tres skills que parecem suas e nao sao.** `watch` e do bradautomates (MIT, ja publica em
github.com/bradautomates/claude-video). `video-use` e clone de github.com/browser-use/video-use,
com commits de gente da browser-use e da HeyGen. `tiktok-shop-ugc` diz no proprio texto que e
transcricao de um tutorial comprado. Nenhuma das tres pode sair com seu nome.

---

## 4. A fonte semanal, que e o que faz a serie durar

Esta e a secao para reler toda segunda. Sem ela, a edicao 2 vira improviso.

### Regra zero: a API publica do GitHub nao serve

A API publica anonima devolveu HTTP 403 por limite de taxa neste IP no meio do garimpo. Use
sempre o `gh` CLI autenticado, que da 5.000 requisicoes por hora. Um numero lido de fonte
limitada por taxa nao e um numero verificado.

### A rotina, na ordem que funcionou

**Passo 1, busca ampla na API do GitHub.** Quatro consultas, sempre com `sort=stars`:

```
gh api -X GET search/repositories -f q='claude skills in:name,description,readme' -f sort=stars
gh api -X GET search/repositories -f q='awesome claude skills in:name' -f sort=stars
gh api -X GET search/repositories -f q='topic:claude-skills' -f sort=stars
```

**Passo 2, buscas tematicas.** E daqui que sai a skill audiovisual da semana, que nunca aparece
na busca generica. As que renderam: `claude skill video editing ffmpeg`, `agent skill subtitles
captions`, `claude skill presentation slides deck`, `claude code skill obsidian notes`,
`claude skill spreadsheet excel`.

**Passo 3, as listas awesome, por ordem de utilidade real:**

| Lista | Numeros em 22/08 | Veredito |
|---|---|---|
| `https://github.com/VoltAgent/awesome-agent-skills` | 30.923 estrelas, MIT, push 21/08 | **A melhor.** README de 1.984 linhas, secoes Official Skills e Community Skills. Foi de onde sairam creative-director-skill, humanizer, last30days, xberg e youtube-fetcher |
| `https://github.com/ComposioHQ/awesome-claude-skills` | 73.027 estrelas, sem licenca, push 10/08 | Serve para descobrir, nao como fonte final |
| `https://github.com/karanb192/awesome-claude-skills` | 496 estrelas, MIT, push 05/08 | Pequena, mas com licenca. Vale a passada |
| `https://github.com/travisvn/awesome-claude-skills` | 14.773 estrelas, sem licenca, push 28/04 | Defasada, quase quatro meses parada. Tratar como historico |

**Passo 4, Hacker News pela API do Algolia.** `https://hn.algolia.com/api/v1`, por `curl`, com
filtro numerico de 60 dias. O ganho esta em buscar em **comments**, nao em stories: comentario e
onde mora o relato de uso real ("venho usando isso ha semanas"), enquanto story e so lancamento.

**Passo 5, teste de vida.** Nao basta olhar data de push. Abra as issues recentes de cada
candidato e veja se tem resposta de mantenedor, e olhe se os pull requests recentes estao com
merge ou empilhados sem merge. Foi esse passo que cortou o candidato mais obvio da semana.

**Passo 6, artigos de curadoria, so como pista.** Nunca como fonte de numero. Todo dado desses
artigos foi reverificado na API antes de entrar na lista. Os que funcionaram:
`https://welcomedeveloper.com/posts/the-10-claude-code-skills`,
`https://dev.to/composiodev/10-claude-skills-that-actually-changed-how-i-work`,
`https://humanlayer.com/blog/show-me-skill` e a curadoria da firecrawl.dev.

### O que NAO funcionou, para nao perder tempo de novo

**Reddit esta fechado para este ambiente.** A API JSON publica devolveu HTTP 302 e uma pagina
"Blocked", e a WebSearch nao retornou nenhuma thread de r/ClaudeAI nem de r/ClaudeCode. Nenhuma
evidencia da edicao 1 vem do Reddit. **Nunca escreva no artigo que houve verificacao no Reddit.**
Toda evidencia de conversa e do Hacker News, com autor e data.

### Cortes que viram regra permanente

- **`anthropics/skills`** (171.004 estrelas, push 21/08) ficou de fora e vai continuar fora como
  recomendacao de download. Nao tem arquivo LICENSE na raiz, a API devolve licenca nula, e o
  `skills/pdf/LICENSE.txt` diz que o uso e regido pelos termos da Anthropic e que o usuario nao
  pode extrair o material dos Servicos, reter copias fora deles nem criar obras derivadas. Serve
  como fonte de descoberta. Se citar, cite como referencia oficial, e nao afirme que e open source.
- **`tikalk/adlc-team-skills`** foi cortada por seguranca e nao pode voltar. Tinha bom sinal na
  superficie (130 estrelas, MIT, push 20/08, thread no HN em 04/08 com 75 pontos e 38
  comentarios). Mas dois comentaristas da propria thread questionaram um commit, e a issue #1 do
  repositorio, aberta em 04/08, se chama "Shai Hulud Malware Commited" e aponta o commit
  `74f317d63ade1329e35c4641606ff41cc694133b`. A issue foi fechada sem nenhuma explicacao publica.
  **Nao recomende esse repositorio.**
- **`browser-use/video-use`** (21.255 estrelas, MIT, "edit videos with coding agents") era o
  candidato mais na mosca para o tema audiovisual, e foi cortado por estar morto: ultimo commit na
  branch principal em 01/07, 52 dias antes, e os PRs de 16/08, 12/08, 28/07 e 17/07 todos com
  `merged=false`, empilhados. Issues abertas com zero comentario. Muita estrela, pouca vida.
- Skills de **fal.ai, OpenAI, Venice e SupercmoHQ** aparecem nas listas awesome mas dependem de
  chave de API paga. Reprovam no criterio 3.
- **Sem arquivo de licenca, nao entra.** Cortou `robonuggets/marp-slides` (292 estrelas) e
  `op7418/NanoBanana-PPT-Skills` (3.216 estrelas).
- **Parada ha mais de seis meses, nao entra.** Cortou `op7418/Youtube-clipper-skill` (2.154
  estrelas, MIT), ultimo push em 22/01/2026.

---

## 5. O que ficou fraco. Sem vender o resultado

### As notas, como sairam

| Frente | Nota | Passou |
|---|---|---|
| Artigo da tese (`art-171`, ja no blog) | 92 | Sim |
| Pagina `/skills` | 89 | Sim |
| **Especificacao do formato** | **68** | **Nao** |
| Curadoria da edicao 1 | sem nota | **Nao foi avaliada por verificador independente** |

Duas coisas para encarar aqui. A especificacao, que e o documento que deveria garantir que a serie
nao repita o erro de julho, foi a unica peca reprovada. E a curadoria, que e o conteudo em si, nao
recebeu nota de ninguem de fora. As tres notas cobrem tres frentes, nao quatro.

### O erro mais feio da sessao

Onze zips ficaram prontos para publicar carregando **757 travessoes longos e 74 meias riscas**
dentro deles. A regra e permanente e esta na sua memoria desde sempre. Nenhuma checklist pegou,
porque todas conferiam o texto da tela e nenhuma descompactava o zip. Um checador de fora
descompactou e contou. Corrigido: os 11 zips estao com contagem zero agora, conferido por mim
descompactando os arquivos ha poucos minutos. A checklist da secao 8 da especificacao agora tem o
script de conferencia dentro dela.

### A especificacao mentiu sobre o proprio projeto

O documento afirmava que a pagina `/skills` nao existia. A pagina foi construida na mesma tarde em
que o documento foi escrito e ninguem voltou para corrigir a linha. A frase ja estava falsa quando
a primeira pessoa leu. Corrigida na terceira passagem.

### O que continua aberto e nao foi resolvido

- **Nenhum zip carrega arquivo de licenca.** A pagina resolve com uma frase de permissao no
  rodape, o que nao e a mesma coisa que um `LICENSE` dentro da pasta. Quem baixar depende de ter
  lido o rodape.
- **Nao existe metrica de engajamento automatica.** O kill switch da secao 4.5 (parar se duas
  edicoes consecutivas ficarem abaixo da mediana das seis anteriores) depende de alguem olhar os
  numeros toda semana na mao. Enquanto for manual, ele vai falhar.
- **Nao ha revisor humano definido.** A coluna verifica ferramentas de terceiros e ninguem
  verifica a coluna.
- **158 das 184 skills do acervo foram classificadas por metadado**, nao por leitura.
- **A licenca real das `human-*` continua desconhecida.** Ver secao 6.
- **Nao houve busca web** para saber se ja existe uma gauntlet-loop publicada por outra pessoa.
- **As estrelas sao fotografia, nao fato.** Na video-shotcraft o contador subiu de 6.050 para
  6.051 entre duas leituras da mesma sessao, e fechou em 6.052. Por isso todo numero no artigo
  carrega hora UTC. Se passarem mais de 48 horas ate a publicacao, reconfira ou troque a frase
  para nomear a data do snapshot.
- **Nenhuma das cinco skills foi instalada ou executada.** O artigo diz isso em voz alta, na
  secao "What I did not verify", que e permanente e nao pode ficar vazia. Nenhum "o que economiza"
  e benchmark meu. Onde esta escrito "not measured", e literal.

### O que a serie ainda nao provou

Ela nao publicou nada. Toda a estrutura (repertorio, travas, ledger, kill switch) foi desenhada
contra um erro real de julho, mas nao passou por nenhum ciclo de publicacao. A primeira leitura
honesta das travas so vai existir depois da edicao 2.

---

## 6. O que voce precisa aprovar ou fazer antes de publicar

### Decisoes que so voce pode tomar

1. **Direitos das `human-*`.** Voce pode redistribuir `human-carrossel`, `human-dna`,
   `human-cinematic`, `human-image`, `human-motion`, `human-social`, `human-team` e a
   `prompt-master`, que declaram origem na Human Academy e no AcademyPass? Sem essa resposta,
   nenhuma das oito sai, nunca. Hoje nenhuma esta em `public/skills/`.
2. **O prompt do Matt Shumer dentro da gauntlet-loop.** Carregar o texto integral, creditado, ou
   apontar para a fonte? A decisao tem que ser deliberada, nao por omissao. Sem ela a skill nao
   sai na edicao 5.
3. **Qual licenca vai nos zips.** Hoje nenhum tem arquivo `LICENSE`. Escolha uma (MIT resolve) e
   ela entra dentro de cada pasta antes do proximo empacotamento.

### Tarefas antes de a edicao 1 subir

4. **Hero image da edicao 1.** O `heroImage` esta com o placeholder
   `HOLD_DO_NOT_PUBLISH_WITHOUT_HERO`. O schema do Astro exige URL valida e **o build vai quebrar
   assim que o arquivo entrar em `src/content/blog/`**. Gerar com `fetch-heroes.mjs --pick` e
   olhar o resultado por olho antes de commitar. Nunca reutilizar hero que ja esta no site.
5. **Confirmar o id `art-172`.** Era o proximo livre no momento da escrita, com o mais alto sendo
   `art-171` entre 107 arquivos.
6. **Confirmar a pubDate.** O artigo foi escrito para segunda, 24/08/2026.
7. **Mover `internal/edicao-01.md` para `src/content/blog/`** com o slug
   `5-week-skills-01-five-claude-skills-checked-by-hand`, rodar o build e **abrir a URL final e
   confirmar HTTP 200 antes de publicar qualquer post**. Os dois posts tem `[URL DO ARTIGO]` como
   placeholder. Substituir, nunca adivinhar.
8. **Reconferir estrelas, forks e datas** na manha da publicacao se tiverem passado mais de 48
   horas do snapshot das 21h13 UTC de 22/08.

### Publicacao social

9. Voce ja autorizou publicar os posts quando ficassem prontos, LinkedIn accountId 13743 e X
   accountId 13071 via Blotato. O que falta e sua confirmacao da janela: LinkedIn segunda 24/08 as
   08h30 e X terca 25/08 as 09h00, um dia de intervalo de proposito, para quem segue os dois nao
   receber a mesma coisa duas vezes. **Nada foi agendado nem enviado ate agora.**
10. Depois de publicar, preencher `internal/5ws-ledger.md` com as datas reais e refazer a leitura
    das travas. A especificacao proibe escrever a edicao 2 com o ledger vazio, e as travas da
    secao 4.4 sao todas por janela deslizante, impossiveis de conferir de cabeca.

### Limpeza opcional

11. Duas pastas vazias em `~/.claude/skills`, criadas por um glob que expandiu errado
    (`adapt animate audit ...` e `brutalist-skill gpt-tasteskill ...`). Nao sao skills e podem ser
    apagadas.

### O que fica retido, e nao pode voltar sozinho

12. `internal/withheld/gauntlet-loop.zip` fica fora de `public/skills/` enquanto o artigo disser
    ao leitor que a skill nao da para instalar. Se ela ficar pronta antes da edicao 5, **quem muda
    primeiro e o artigo, nunca o site sozinho.** Ao devolver o zip, dois numeros da pagina mudam
    junto: "Ten are mine" volta para "Eleven" e "the 32 working files" volta para 33.

---

## Compromisso publico ja assumido dentro do artigo

O artigo termina prometendo uma coisa verificavel: entre agora e a proxima segunda, atualizar a
humanizer local de 2.5.1 para a atual, passar os oito posts de julho por ela e contar quantos dos
35 padroes ela acha. O numero vai na edicao 2, em 31/08, mesmo se for feio. E o artigo tambem diz
que a gauntlet-loop ganha licenca, ingles e URL ate a edicao 5, em 21/09, com a lista de defeitos
publicada. O leitor vai saber se algum item for pulado em silencio.
