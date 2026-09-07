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
```

Pecas da edicao 2 ainda nao publicadas, escritas e travadas em
`internal/posts-edicao-02.md`, esperando o OK dele. Nao entram na tabela acima ate irem ao ar.
Quando forem, as linhas sao estas, com a data real no lugar da planejada:

```
| 02 | linkedin | AAAA-MM-DD | -  | -  | P2  | 245   | sim         | nenhum |
| 02 | x        | AAAA-MM-DD | -  | -  | P6  | 707   | sim         | nenhum |
| 03 | linkedin | AAAA-MM-DD | -  | -  | P7  | 1426  | sim         | segmentacao do leitor |
| 03 | x        | AAAA-MM-DD | -  | -  | P9  | 178   | NAO         | nenhum |
```

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
