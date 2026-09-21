# 5 Week Skills, ledger

Uma linha por peca publicada. Sem este arquivo preenchido, a edicao seguinte nao pode ser
escrita: as travas da secao 4.4 de `internal/formato-5-week-skills.md` sao todas por janela
deslizante e nao tem como serem conferidas de cabeca.

Criado em 2026-08-22 com tres linhas semente. **Fechado com dados reais em 2026-08-24**, depois
de abrir a lista de posts publicados do Blotato e a URL do artigo em producao. As linhas semente
tinham data planejada e contagem estimada nos dois posts. As duas coisas estavam erradas e foram
substituidas. Detalhe nas notas.

Formato da linha, igual ao da secao 5 da especificacao:

```
| ed | canal | data | A? | F? | P? | chars | link? | vicios usados |
```

Legenda das colunas: `A` e a abertura do artigo (tabela 4.1), `F` o fecho do artigo (4.2), `P` o
formato do post (4.3). `chars` e contagem real do texto final, com a URL ja no lugar do
placeholder, nunca estimativa. `vicios usados` lista os itens da tabela 3.1 que a peca gastou.

---

## Linhas

```
| 01 | artigo   | 2026-08-22 | A2 | F2 | -   | -     | 1 axenworks | nenhum |
| 01 | linkedin | 2026-08-22 | -  | -  | P4  | 1450  | sim         | nenhum |
| 01 | x        | 2026-08-22 | -  | -  | P11 | 718   | sim         | nenhum |
| 02 | artigo   | 2026-08-31 | A10| F4 | -   | -     | 0 axenworks | nenhum |
| 03 | artigo   | 2026-09-07 | A9 | F1 | -   | -     | 1 axenworks | nenhum |
| 04 | artigo   | 2026-09-17 | A3 | F3 | -   | -     | 1 axenworks | nenhum |
| 05 | artigo   | 2026-09-21 | A4 | F4 | -   | -     | 1 axenworks | nao X mas Y (1x, fecho) |
```

Pecas da edicao 4 escritas e travadas em `internal/posts-edicao-04.md`, esperando
o OK dele. Linhas previstas, com contagem a fazer no texto que de fato subir:

```
| 04 | linkedin | AAAA-MM-DD | -  | -  | P3  | 476   | NAO         | nenhum |
| 04 | x        | AAAA-MM-DD | -  | -  | P8  | 442   | sim         | nenhum |
```

Pecas da edicao 2 ainda nao publicadas, escritas e travadas em
`internal/posts-edicao-02.md`, esperando o OK dele. Nao entram na tabela acima ate irem ao ar.
Quando forem, as linhas sao estas, com a data real no lugar da planejada:

```
| 02 | linkedin | AAAA-MM-DD | -  | -  | P2  | 245   | sim         | nenhum |
| 02 | x        | AAAA-MM-DD | -  | -  | P6  | 694   | sim         | nenhum |
| 02 | x        | 2026-09-11 | -  | -  | P6  | 694   | sim         | nenhum | PUBLICADO, conferido 21/09
| 03 | linkedin | AAAA-MM-DD | -  | -  | P7  | 1426  | sim         | segmentacao do leitor | BLOQUEADO
```

**Atualizado em 2026-09-08.** Ele aprovou a fila neste dia. O que de fato
aconteceu, e o ledger so registra o que aconteceu:

```
| 03 | x        | 2026-09-08 | -  | -  | P9  | 178   | NAO         | nenhum |
```

Publicado as 12h47 UTC, URL confirmada 200:
https://x.com/ulissesbalbino/status/2097305943562236369

O post de X da edicao 2 ficou agendado para 2026-09-11 as 17h00 UTC, com 694
caracteres depois da acentuacao e do desdobramento das linhas (o arquivo dizia
707 porque contava a versao sem acento e com quebra rigida). Entra na tabela
quando sair.

**Os dois posts de LinkedIn das edicoes 2 e 3 nao sairam.** A conta 13743 esta
com a conexao expirada no Blotato e recusou tanto publicacao imediata quanto
agendamento, testado duas vezes em 08/09. Nao e problema de texto. Estado
completo da fila, com os textos finais, em `internal/FILA-POSTS-08-09.md`.

Consequencia para as travas, e ela e chata: a **trava 5 continua devendo o post
de LinkedIn sem link**, e agora com uma edicao a menos de folga. O X pagou a
dele hoje. A **trava 4 do X esta paga** com os 178 caracteres.

As duas linhas da edicao 3 estao em `internal/posts-edicao-03.md`, tambem
esperando o OK dele. Contagem feita no texto final: o LinkedIn leva a URL real
dentro dos 1.426 caracteres, o X nao leva link nenhum.

Notas da edicao 1, escritas em 2026-08-24 com as pecas ja no ar:

- **As tres pecas sairam no mesmo dia, 22/08, e nao no calendario planejado.** O artigo tem
  `pubDate: 2026-08-22`. O post de LinkedIn foi publicado as 22h52m18s UTC e o de X as 22h52m38s
  UTC do mesmo dia. Lido na lista de posts publicados do Blotato as 23h10 UTC de 2026-08-24.
- **Vinte segundos de intervalo entre os dois posts.** A secao 1 da especificacao pede LinkedIn na
  segunda e X na terca, e o arquivo `internal/posts-edicao-01.md` explica o porque: quem segue os
  dois canais nao deve receber a mesma coisa duas vezes. Isso nao foi cumprido. A trava 3 da
  secao 4.4 foi cumprida (formatos e assuntos diferentes), a separacao de dia nao foi.
- **Contagem de caracteres corrigida.** As linhas semente diziam 1.445 e 713. O erro estava numa
  premissa: a semente assumia uma URL final de 81 caracteres. A URL real tem 86. Os numeros
  certos, contados no texto exato que subiu, sao **1.450** e **718**. Travessao longo, meia risca
  e hashtag: zero nos dois, conferido no texto publicado.
- O X publicou o BLOCO 2 inteiro, de 718 caracteres, e nao a versao 2B de 280. Nao houve resposta
  encadeada. A leitura da trava 4 usa 718.
- O artigo leva um unico link para axenworks.com, dentro da ficha 1, conforme a secao 6.
  Nem o LinkedIn nem o X levam esse link. Conferido no texto dos dois.
- Ressalva de contagem para a trava 6: o post de LinkedIn contem "Honestly?" e "Let's be honest",
  entre aspas, como nome dos gatilhos do padrao 33 da humanizer. E citacao da ferramenta, nao uso
  do tique, mas a trava conta ocorrencia e nao intencao. Vale como gasto.
- **O artigo recebeu correcao publica em 2026-08-24**, com `updatedDate` e nota de correcao no
  fim. Ver a secao seguinte, porque isso muda a abertura obrigatoria da edicao 2.

---

## O erro da edicao 1, corrigido em publico em 2026-08-24

O artigo e o post de LinkedIn afirmavam: *"oito posts seguidos, em julho"*. A conta foi feita em
24/08, arquivo por arquivo, sobre a lista de posts publicados do Blotato. Deu outra coisa:

- **19 posts** carregam "Minha reacao honesta", nao oito.
- A maior sequencia ininterrupta e de **12 posts**, de 25/07 a 03/08.
- A serie vai de **25 de julho a 12 de agosto**, e nao cabe dentro de julho.
- O postmortem interno tambem estava errado, com uma terceira resposta: "8 posts consecutivos,
  6 a 14 de agosto".

Apuracao completa, com metodo e limites, em `internal/pesquisa/humanizer-auditoria-corpus.md`.
Corpus em `internal/pesquisa/corpus-linkedin-formula/`, 38 arquivos.

---

## Notas da edicao 2, escritas em 2026-08-31

- **O artigo saiu no dia certo**, 31/08, e nao no mesmo dia do anterior como aconteceu na
  edicao 1. URL confirmada em producao com HTTP 200 as 12h26 UTC.
- **Abertura A10, obrigatoria**, e ela pagou a divida em publico: a edicao 1 prometeu contar
  quantos dos 35 padroes da humanizer aparecem no corpus de julho, e a conta entrou no primeiro
  bloco do artigo. Quinze de 35, com o limite do metodo declarado antes do numero.
- **Nenhum link para axenworks nesta edicao, e isso foi decisao, nao esquecimento.** Nenhuma das
  cinco skills cria a pergunta que uma das calculadoras responde. A unica que chegou perto foi a
  OpenMontage, e o encaixe seria o mesmo `prores-file-size-calculator` com a mesma frase da
  edicao 1, duas edicoes seguidas. A secao 6 da especificacao diz que zero e um numero valido e
  que forcar uma vez e o comeco de virar propaganda. Ficou zero.
- **Nenhum vicio da tabela 3.1 foi gasto.** Os nove tetos continuam inteiros depois de duas
  edicoes.
- Snapshot unico do artigo: 2026-08-31, entre 12h17 e 12h22 UTC, `gh` CLI autenticado e `curl`.
- Tom das cinco pegadinhas, para a trava 8: licenca (OpenMontage), contradicao interna entre
  duas secoes do mesmo README (book-to-skill), risco de conta e de sigilo do cliente
  (last30days), limite de capacidade declarado (Archify) e default permissivo mais aritmetica de
  custo (dublagem). Cinco tons diferentes, nenhum repetido.

---

## Decisao pendente da edicao 1, resolvida

A edicao 1 deixou uma pergunta em aberto: se o padrao 27 da humanizer, "pretending to reveal a
deeper truth", entra na tabela 3.1 com teto proprio. **Entra.** Foi o padrao mais denso do corpus
de julho, mais denso que o 33, que era o unico que ele tinha percebido sozinho, e nenhuma das
cinco travas escritas em julho o nomeava. Uma formula com seis elementos vigiada por cinco travas
volta pelo elemento que ninguem contou. Linha acrescentada a secao 3.1 da especificacao em
2026-08-31, com teto de 1 a cada 5 posts.

---

## Notas da edicao 3, escritas em 2026-09-07

- **O artigo saiu no dia certo**, 07/09, o terceiro do calendario da secao 1.
  URL confirmada em producao com HTTP 200 as 15h21 UTC, no segundo teste
  (o primeiro, as 15h21m13s, ainda deu 404 porque o deploy nao tinha terminado).
- **Abertura A9, a entrada fria, e ela estava vencendo.** A especificacao pede
  A9 pelo menos uma vez a cada 6 edicoes e ela nao tinha aparecido. Sai agora,
  na 3, com tres linhas antes do bloco "Como eu checei". Fecho F1, a duvida que
  ficou, sobre o exportador de video do Pixel2Motion.
- **Um link para axenworks nesta edicao**, dentro da ficha 5, na
  `video-bitrate-calculator`. A pergunta e real e nasce da propria skill: o
  scroll-world entrega 2N-1 clipes de video que o navegador do visitante baixa
  antes do heroi se mexer, e a aritmetica de peso e a que a calculadora resolve.
  Pagina diferente da usada na edicao 1, que foi a de ProRes. A frase descreve o
  problema e nao a ferramenta, como manda a regra 4 da secao 6, e nao ha
  autobiografia de "ferramenta que eu construi" em lugar nenhum do artigo.
- **Nenhum vicio da tabela 3.1 foi gasto no artigo.** No LinkedIn foi gasto um,
  a segmentacao do leitor, que e a forma natural do formato P7. Primeiro gasto
  em tres edicoes.
- Snapshot unico do artigo: 2026-09-07, entre 15h16 e 15h17 UTC, `gh` CLI
  autenticado e `curl`. As oito URLs do artigo responderam 200 as 15h16m16s.
- **Indexacao solicitada no Search Console** as 15h27 UTC, propriedade
  `sc-domain:openyourais.com`, e confirmada: o painel passou a exibir
  "Indexacao solicitada" com o botao "Solicitar novamente" ao lado. Uma
  solicitacao gasta do limite diario da propriedade.
- Tom das cinco pegadinhas, para a trava 8: entregavel que nao existe no manual
  (Pixel2Motion), lacuna de capacidade declarada e um conjunto de caracteres que
  nao cobre o portugues (draw-your-font), procedencia e atribuicao das
  referencias visuais (mono-color), permissao desligada num agente agendado mais
  gasto sem teto (obsidian-second-brain) e peso do que o visitante baixa
  (scroll-world). Cinco tons diferentes, nenhum repetido dentro da edicao e
  nenhum repetido das edicoes 1 e 2.
- **Regra do contador, nesta edicao ela bateu tres vezes e desmentiu uma.**
  Contei o `commands/` da obsidian-second-brain: 47 arquivos markdown, igual ao
  que o README afirma em tres pontos, contra os 45 da descricao do repositorio
  no GitHub. O README esta certo e a vitrine e que envelheceu. Contei as doze
  linhas de `REFERENCES.md` da mono-color e as tres marcadas como sem origem
  preservada. E contei zero ocorrencias de `export_claude` e de `ffmpeg` no
  README da Pixel2Motion, e zero de gif, mp4, webm, video e ffmpeg no
  `SKILL.md` dela, que e a pegadinha da ficha 1 inteira.
- **A frase "Not measured" saiu de circulacao.** O ledger da edicao 2 avisou que
  ela tinha aparecido nas cinco fichas de duas edicoes seguidas e viraria formula
  se aparecesse de novo nas cinco. Nesta edicao as cinco linhas de "What it
  saves" estao escritas de cinco formas diferentes e nenhuma usa a expressao.
  O gatilho de cooldown da secao 3.1 foi evitado por um fio.

---

## Uma divergencia de arquivo, aberta e nao resolvida nesta sessao

A secao 9 da especificacao diz que a `gauntlet-loop` **nao esta** em
`public/skills/` nem na pagina `/skills`, de proposito, e que so sai na edicao 5.
Ela esta nos dois: `public/skills/gauntlet-loop.zip` existe desde 22/08 e
`src/pages/skills.astro` traz o cartao dela. O artigo da edicao 1 tambem nao diz
que ela e ininstalavel, diz que ela ainda precisa de licenca e de traducao.

Ou seja, quem esta desatualizada e a especificacao, nao o site. Nada foi mudado
nesta sessao porque a edicao 3 nao cita a gauntlet-loop em lugar nenhum e o
checklist so proibe artigo e site dizerem coisas opostas **sobre a mesma skill
na mesma semana**. Fica registrado para quem escrever a edicao 4: ou a secao 9
da especificacao e corrigida, ou a promessa da edicao 5 e revista.

---

## Leitura das travas para a edicao 4

Calculado a partir das linhas acima, em 2026-09-07. Vale para o artigo ja; para
os posts, vale so depois que os das edicoes 2 e 3 forem publicados.

- **A9** acabou de ser gasta e fica fora ate a edicao 7. **A10** fica fora ate a
  edicao 6, **A2** ate a edicao 5. A abertura da edicao 4 sai de A1, A3, A4, A5,
  A6, A7 ou A8. A obrigacao das 6 edicoes de A9 esta cumprida e zera aqui.
- **F1** acabou de ser gasto e fica fora ate a edicao 6. **F4** fica fora ate a
  edicao 5. **F2** esta liberado de novo a partir desta edicao. O fecho da
  edicao 4 sai de F2, F3, F5 ou F6. Se sair F5, gasta o teto de aforismo.
- **P7** e **P9** ficam fora ate a edicao 6, contados a partir do dia em que
  forem publicados. **P2** e **P6** ficam fora ate a edicao 5. **P4** e **P11**
  voltam a ficar livres na edicao 4. Formatos disponiveis para a 4: P1, P3, P4,
  P5, P8, P10, P11, P12.
- **Vicios da 3.1.** Um unico gasto em tres edicoes: a segmentacao do leitor, no
  LinkedIn da edicao 3, teto de 1 a cada 5 posts. Ela fica fora do LinkedIn ate
  a edicao 8 (quinto post do canal contado a partir dela). Todos os outros nove
  tetos continuam inteiros.
- **Trava 4, LinkedIn: nada devido.** 1.450 na edicao 1, 245 na 2 e 1.426 na 3,
  as duas pontas cumpridas. A janela recomeca na edicao 6.
- **Trava 4, X: paga.** 178 caracteres na edicao 3, abaixo do teto de 200, depois
  de 718 e 707. Nada devido ate a edicao 8.
- **Trava 5: metade paga.** O X da edicao 3 sai em P9, sem link nenhum, e e o
  primeiro da serie. **O LinkedIn ainda deve um post sem link**, em P3 ou P9, e
  so restam as edicoes 4 e 5. Isso agora e a divida mais urgente do ledger.
- **Trava 7.** No LinkedIn as aberturas gastas sao verbo (ed 1), sintagma nominal
  (ed 2) e sintagma preposicionado (ed 3). No X sao bloco de comando (ed 1),
  oracao declarativa (ed 2) e pergunta (ed 3). A edicao 4 precisa de uma quarta
  classe em cada canal.
- **Gatilho de cooldown da secao 3.1.** Nada estrutural apareceu em tres edicoes
  seguidas. O candidato que estava sob vigilancia, o "Not measured" nas cinco
  fichas, foi quebrado nesta edicao e sai da lista. O novo candidato a vigiar e o
  proprio bloco de contagem com `grep` dentro da pegadinha: apareceu como prova
  central na edicao 2 (OpenMontage) e na edicao 3 (Pixel2Motion). Se a edicao 4
  fechar a pegadinha principal com contagem de ocorrencias de novo, sao tres
  seguidas e entra em cooldown de cinco edicoes, mesmo sendo verdade.

---

## Como preencher depois de publicar

1. Copiar a linha para a tabela acima com a data real, nao a planejada.
2. Contar os caracteres no texto que de fato subiu, com a URL final dentro. Contar a URL, nao
   estimar: a da edicao 1 tinha 86 caracteres e a estimativa dizia 81.
3. Anotar os vicios da 3.1 que a peca gastou, mesmo os gastos entre aspas.
4. Rodar a leitura das travas de novo para a edicao seguinte, e reescrever a secao acima.
5. So entao comecar a escrever a proxima edicao.

---

## Notas da edicao 4, escritas em 2026-09-17

- **O artigo saiu tres dias depois do calendario** (planejado 14/09, publicado
  17/09, quinta). A rotina agendada rodou neste dia. URL confirmada em producao
  com HTTP 200 as 13h33m49s UTC, no primeiro teste.
- **Abertura A3, o numero que eu conferi**: o 503 do `source.unsplash.com`, nove
  requisicoes em tres rodadas entre 13h25m07s e 13h25m49s UTC. Fecho **F3**, sem
  fecho: a ultima ficha termina, vem o bloco "What I did not verify" e a linha de
  semana que vem.
- **As cinco skills**: Hallmark (web), wjs-syncing-multicam + wjs-editing-multicam
  com o motor polysync (video, automacao), Frontend Slides (documento, deck de
  tratamento), shuohao-skills (pre producao de microdrama) e world-film (acervo).
- **Um link para axenworks**, na ficha 2, pagina
  `how-many-hours-of-video-can-1tb-hold`. Pagina diferente das edicoes 1 (ProRes)
  e 3 (bitrate). A pergunta nasce da skill: o SKILL.md diz que 75 minutos de 4K
  em tres cameras sao "60+ GB" e o README do polysync, mesmo autor, diz "250+ GB".
- **Nenhum vicio da 3.1 gasto no artigo nem nos posts.**
- Snapshot unico: 2026-09-17, 13h30m22s a 13h30m40s UTC, `gh` autenticado e `curl`.
- **Indexacao solicitada no Search Console** entre 13h34 e 13h36 UTC, propriedade
  `sc-domain:openyourais.com`. O painel exibiu "Indexacao solicitada". Uma
  solicitacao gasta do limite diario.
- Tom das cinco pegadinhas, para a trava 8: dependencia externa fora do ar
  (Hallmark), modo padrao que contradiz a primeira linha, com duracao de plano
  sorteada (multicam), o que "compartilhar" significa, URL publica e PDF feito de
  prints (Frontend Slides), galeria feita com outro agente, codex, e prompt preso
  a um modelo, MiniMax H3 (shuohao), regras da casa e handoff para skill privada
  dentro do zip (world-film). Cinco tons diferentes.
- **Gatilho de cooldown do grep: evitado.** Nenhuma pegadinha principal desta
  edicao fecha com contagem de ocorrencias. As provas centrais sao um `curl` ao
  vivo, a leitura de um `default=` no codigo, dois scripts lidos e flags de CLI.
- **Candidato novo a vigiar:** a palavra "default" / "padrao" como eixo da semana.
  O dublagem da edicao 2 ja teve pegadinha de default. Se a edicao 5 fizer do
  padrao o angulo de novo, sao duas proximas e a terceira dispara o cooldown.
- **Trava 5 do LinkedIn: paga, se ele aprovar o P3 sem link.** Se ele recusar, a
  divida vai inteira para a edicao 5.

### Problema de direitos achado no acervo publicado, NAO resolvido nesta sessao

Ao escolher a skill do acervo, abri os zips de `public/skills/`:

- **`video-prompt-builder`**: existe no GitHub `sheldonivish/video-prompt-builder`,
  criado em 2026-05-16, com a mesma estrutura de quatro secoes, o mesmo
  `references/effects-breakdown-reference.txt` (Hoka, 21,2 s) e tamanhos quase
  iguais (SKILL.md 7.317 contra 7.257 bytes, referencia 7.172 contra 6.995). A
  busca de codigo por "EFFECTS DENSITY MAP" devolve 59 resultados em outros repos.
  O zip publicado diz "From the working skill library of Ulisses Balbino" e "What
  changed before release: Nothing". Nao sei quem copiou de quem; o repositorio de
  terceiro e anterior ao lancamento no site (22/08). **Decisao dele.** Nada foi
  mexido no site, que e mantido pelo Codex.
- **`roteiros-virais`**: o proprio SKILL.md diz que e baseado na metodologia "4
  blockers + 5 hooks + 7 winning story structures", sem dizer de quem. Pela regra
  da ETAPA 2, tecnica de outra pessoa exige credito no README, no SKILL.md e na
  ficha. Nao encontrei o autor nesta sessao.

### Divergencia da secao 9, ainda aberta

A secao 9 da especificacao continua dizendo que a gauntlet-loop nao esta no site.
Ela esta. Nao corrigi a especificacao nesta sessao.

---

## Leitura das travas para a edicao 5

- **Aberturas.** A3 acabou de ser gasta: fora ate a edicao 8, e nunca duas
  seguidas. A9 fora ate a 7, A10 ate a 6. **A2 volta na edicao 5.** A abertura da
  5 sai de A1, A2, A4, A5, A6, A7 ou A8.
- **Fechos.** F3 fora ate a edicao 7, F1 ate a 6. F4 e F2 livres na 5. A 5 sai de
  F2, F4, F5 ou F6.
- **Formatos de post** (contados a partir do dia em que forem publicados): P3 e P8
  fora ate a edicao 7 se sairem. P7 e P9 fora ate a 6. P2 e P6 voltam na 5.
- **Trava 4, X:** 442 nesta edicao, nada devido.
- **Trava 7:** LinkedIn gastou pergunta, X gastou numeral. A edicao 5 precisa de
  classe diferente da edicao 4 em cada canal.
- **Travas dependem dos posts das edicoes 2 a 4 irem ao ar.** O LinkedIn 13743
  estava com conexao expirada no Blotato em 08/09; nao testei de novo hoje porque
  nada foi publicado.

---

## Correcao de 2026-09-21: a conexao do LinkedIn NAO esta expirada

Lido na lista de posts publicados do Blotato em 21/09, com `blotato_list_posts`
filtrando linkedin e twitter desde 05/09. As afirmacoes de 08/09 nas secoes
acima estao superadas. O que de fato foi publicado, com URL confirmada na
resposta da API:

```
| 03 | linkedin | 2026-09-09 | -  | -  | ?   | ?     | sim | ? | PUBLICADO 13h14 UTC
| 02 | x        | 2026-09-11 | -  | -  | P6  | 694   | sim | nenhum | PUBLICADO 17h00 UTC
| 02 | linkedin | 2026-09-13 | -  | -  | ?   | ?     | sim | ? | PUBLICADO 11h30 UTC
```

- Edicao 3, LinkedIn: o post do Pixel2Motion, leva a URL de
  `5-week-skills-03-the-file-that-actually-lands`.
  https://linkedin.com/feed/update/urn:li:share:7503440652781772801
- Edicao 2, X: o post da skill de pesquisa que usa a sessao do navegador, leva a
  URL de `5-week-skills-02-the-readme-line-that-changes-the-answer`.
  https://x.com/ulissesbalbino/status/2098456539539370017
- Edicao 2, LinkedIn: o post do "direitos aparece zero vez no README", mesma URL
  da edicao 2. https://linkedin.com/feed/update/urn:li:share:7504863955899551744

**A conta 13743 publicou seis vezes entre 09/09 e 14/09.** O ultimo post de
LinkedIn e de 14/09 as 11h30 UTC, e o ultimo de X e de 13/09 as 17h00 UTC.
A recusa testada em 08/09 era real naquele dia e deixou de valer depois.
Confirmado por ele em 21/09: "ta conectado o blotato".

**Consequencia para as travas:** as colunas A, F, P, chars e vicios das tres
linhas acima ficam com `?` de proposito. Eu tenho o texto publicado e a data,
mas classificar formato contra a tabela 4.3 e contar vicios exige a leitura da
especificacao peca por peca, e inventar codigo de formato aqui estragaria a
janela deslizante inteira. Isso precisa ser fechado antes da edicao 5.

**O que eu errei, registrado para nao repetir:** no relatorio de 21/09 eu disse
que a conexao estava vencida e que isso travava a fila. Eu li esta nota de 08/09
como se fosse estado atual em vez de checar a API. A regra do Portao 2 vale para
arquivo interno tambem, nao so para ferramenta de fora.

---

## Notas da edicao 5, escritas em 2026-09-21

- **O artigo saiu no dia do calendario**, 21/09, o quinto da secao 1. URL
  confirmada em producao com HTTP 200 as 14h28m17s UTC, no segundo teste (o
  primeiro, as 14h27m52s, deu 404 porque o deploy ainda nao tinha terminado).
  https://openyourais.com/blog/5-week-skills-05-the-check-the-install-skips/
- **Abertura A4, a pergunta sem resposta**, liberada e ainda nao gasta em quatro
  edicoes: o que o numero de vulnerabilidade da NVIDIA cobre de uma skill escrita
  em portugues, sendo que a secao de limitacoes do proprio scanner diz que ele
  pode nao pegar padroes fora do ingles. Ele nao sabe, e o artigo termina sem
  saber. Fecho **F4**, a regra pratica: listar o diretorio e contar os arquivos
  depois de instalar.
- **As cinco skills**: huashu-design (web e design), reference-video-director
  (video), SkillSpector da NVIDIA (automacao e seguranca), Distilly (organizacao)
  e ugc-avatar-builder (acervo, prompt de imagem). Cinco tipos diferentes, e a do
  acervo fecha a edicao como manda a secao 7.
- **Um link para axenworks**, na ficha 2, pagina `hours-per-card`. Quarta pagina
  diferente em cinco edicoes, depois de ProRes (1), bitrate (3) e 1tb-hold (4). A
  pergunta nasce da skill: antes de rodar o FFmpeg, ela copia o arquivo de origem
  inteiro para um diretorio de staging, com teto de 8 GiB e quatro horas, entao a
  pergunta real e quanto pesa uma hora do seu formato. Nenhuma autobiografia de
  "ferramenta que eu construi" no artigo.
- **Um vicio da 3.1 gasto no artigo**, e esta registrado: a construcao "nao X,
  X" do padrao 9, uma vez, no fecho ("voce nao instalou a skill, instalou o
  indice dela"). Teto de 1 a cada 5, e era o primeiro gasto do artigo em cinco
  edicoes. Nenhum vicio nos dois posts.
- Snapshot unico: 2026-09-21, de 13h02m56s a 14h22m13s UTC, `gh` autenticado e
  `curl`. As nove URLs testadas responderam 200 as 14h21m55s, sem excecao nesta
  semana.
- **Indexacao solicitada no Search Console** as 14h31 UTC, propriedade
  `sc-domain:openyourais.com`, pelo Chrome logado. O painel confirmou
  "Indexacao solicitada". Uma solicitacao gasta do limite diario.
- Tom das cinco pegadinhas, para a trava 8: instalacao que chega incompleta sem
  dar erro, por bug de versao do instalador (huashu-design), o que fica no disco,
  uma copia inteira do material de origem mais o diretorio orfao depois de um
  crash (reference-video-director), o ponto cego do proprio verificador, idioma
  fora do ingles, mais o envio do conteudo dos arquivos no modo padrao
  (SkillSpector), a fonte que depende de admin de outra pessoa e de uma janela de
  90 dias de retencao (Distilly) e a ausencia total de qualquer orientacao de
  rotulagem numa skill desenhada para nao parecer IA (ugc-avatar-builder). Cinco
  tons diferentes, e nenhum repetido das edicoes 1 a 4.
- **Regra do contador, duas vezes.** Bateu na SkillSpector: o README promete 71
  padroes em 17 categorias, contei 17 cabecalhos exatos e 72 linhas de tabela,
  com a unica diferenca na categoria escrita como "9+" que lista 8. Nao bateu na
  huashu-design: o README diz 99 recipes, scripts e assets referenciados nos
  quatro subdiretorios, e tres contagens deram 181 arquivos na arvore, 64 caminhos
  distintos citados no SKILL.md, 58 deles existindo mesmo, e 138 mencoes brutas.
  Nenhuma e 99 e o README nao define a unidade. O metodo foi publicado, nao a
  acusacao.
- **Gatilho de cooldown do grep: evitado de novo.** A contagem de ocorrencias
  aparece uma vez, na ficha 5, e nao e a pegadinha principal de nenhuma das
  cinco. As provas centrais sao um bloco citado do README, uma secao de nota de
  dados locais, uma secao de limitacoes e uma celula de tabela.
- **Candidato a vigiar que sai da lista:** "default" / "padrao" como eixo da
  semana. A edicao 5 nao fez do padrao o angulo, entao a sequencia parou em uma.
- **Candidato novo a vigiar:** o verbo "check" como palavra-eixo do titulo e do
  fecho. Apareceu no titulo da edicao 3 ("check this file") e agora no da 5
  ("the check the install command skips"). Se a edicao 6 puser check no titulo de
  novo, sao tres e entra em cooldown de cinco edicoes.

### Travas dos posts, e uma divida paga

Os posts das edicoes 2, 3 e 4 continuam sem sair, entao os cooldowns de formato
que contam a partir da publicacao nao correram. No LinkedIn, o unico post
publicado da serie continua sendo o da edicao 1, em P4, com link.

```
| 05 | linkedin | AAAA-MM-DD | -  | -  | P9  | 1397  | NAO         | nenhum |
| 05 | x        | AAAA-MM-DD | -  | -  | P10 | 518   | sim         | nenhum |
```

- **Trava 5, paga no LinkedIn.** Era a divida mais urgente do ledger e so restava
  esta edicao. O post de LinkedIn da 5 sai em P9, sem link nenhum. Se ele quiser
  trafego, o lugar do link e o primeiro comentario, que o formato permite.
- **Trava 3 cumprida.** P9 num canal e P10 no outro, e assuntos de entrada
  diferentes: o numero da NVIDIA e o ponto cego de idioma no LinkedIn, o habito de
  conferir o diretorio depois de instalar no X.
- **Trava 7 cumprida.** LinkedIn: verbo (1), sintagma nominal (2), sintagma
  preposicionado (3), pergunta (4), numeral (5). X: bloco de comando (1), oracao
  declarativa (2), pergunta (3), numeral (4), imperativo (5).
- **Trava 4.** Nada devido nos dois canais. Os 1.397 do LinkedIn ficam acima do
  piso de 1.200 e os 518 do X nao precisam de nada nesta janela.
- Textos completos em `internal/posts-edicao-05.md`.

### Divergencia da secao 9, ainda aberta na terceira edicao seguida

A secao 9 da especificacao continua dizendo que a gauntlet-loop nao esta em
`public/skills/` nem na pagina `/skills`. Ela esta nos dois, e esta desde 22/08.
Registrado na edicao 3, repetido na 4, nao corrigido aqui tambem, porque a
edicao 5 nao cita a gauntlet-loop e o site e mantido pelo Codex desde 11/09.
Quem escrever a edicao 6 corrige a especificacao ou o assunto some do registro.

### Problema de direitos do acervo, ainda aberto

As duas pendencias abertas pela edicao 4 continuam de pe e por isso nenhuma das
duas skills foi considerada para a ficha do acervo desta semana:
`video-prompt-builder`, pela existencia de um repositorio de terceiro anterior ao
lancamento com a mesma estrutura, e `roteiros-virais`, pela metodologia de autor
nao identificado. Decisao dele.

### O que ficou sem verificar nesta edicao

- Nenhuma das quatro skills do GitHub foi instalada ou executada.
- O check da humanizer da secao 3.3 nao foi rodado. A copia local continua na
  2.5.1, que e a versao que nao pega quatro dos vicios da tabela, e atualizar a
  pasta de skills da maquina dele nao cabe numa rotina agendada sem ele por
  perto. Conferencia feita a mao contra a tabela 3.1, com um gasto registrado.
- Os zips de `public/skills/` foram varridos por travessao e meia risca, os doze,
  resultado zero em todos. Nenhum zip foi alterado nesta sessao.

---

## Leitura das travas para a edicao 6

- **Aberturas.** A4 acabou de ser gasta: fora ate a edicao 9. A3 fora ate a 8, A9
  ate a 7, A10 ate a 6, e A2 continua livre porque voltou na 5 e nao foi usada. A
  abertura da 6 sai de A1, A2, A5, A6, A7 ou A8.
- **Fechos.** F4 acabou de ser gasto: fora ate a edicao 8. F3 fora ate a 7, F1 ate
  a 6. O fecho da 6 sai de F1, F2, F5 ou F6. Se sair F5, gasta o teto de aforismo.
- **Formatos de post.** Contados a partir do dia em que cada um for publicado. Se
  os da edicao 5 sairem: P9 e P10 fora ate a edicao 8, P3 e P8 da edicao 4 fora
  ate a 7, P7 fora ate a 6. Livres para a 6: P1, P2, P4, P5, P6, P11, P12.
- **Trava 5 zerada.** O LinkedIn pagou o post sem link na edicao 5 e o X pagou o
  dele na 3. A janela recomeca, e a proxima cobranca cai na edicao 10.
- **Trava 4.** Janela nova a partir da edicao 6 nos dois canais. Faltam de novo um
  LinkedIn abaixo de 400 e um X abaixo de 200 dentro das cinco proximas.
- **Trava 7.** A edicao 6 precisa de uma classe gramatical de abertura diferente de
  numeral no LinkedIn e diferente de imperativo no X.
- **Vicios da 3.1.** Dois gastos em cinco edicoes: a segmentacao do leitor, no
  LinkedIn da edicao 3, fora daquele canal ate a edicao 8, e o "nao X, X" do
  padrao 9, no artigo da edicao 5, fora ate a edicao 10. Os outros oito tetos
  continuam inteiros.
- **Cooldown em vigilancia.** O verbo "check" no titulo, duas edicoes de cinco.
  Terceira dispara.
