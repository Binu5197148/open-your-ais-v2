# A conta que a edicao 1 prometeu, feita

Snapshot desta apuracao: 2026-08-24, entre 23h04 e 23h30 UTC. Tudo abaixo foi lido nesta
execucao. Nada e de memoria.

A edicao 1 prometeu isto, em publico, no artigo e no post de LinkedIn:

> "Ate segunda eu atualizo minha copia, passo os oito posts de julho por ela e conto quantos
> dos trinta e cinco padroes ela acha. O numero vai na edicao 2, mesmo se for feio."

Hoje e essa segunda. O numero saiu, e a primeira coisa que ele derrubou foi a propria frase
acima.

---

## 1. A copia local foi atualizada

| Antes | Depois |
|---|---|
| versao 2.5.1 | versao 2.11.2 |
| 29 padroes numerados | 35 padroes numerados |
| ultimo commit 8b3a178, 2026-03-31 | ultimo commit e2e92e7, 2026-08-18 |

Metodo: `git pull --ff-only` em `~/.claude/skills/humanizer`, remote
`https://github.com/blader/humanizer.git`, branch main, arvore limpa antes do pull.
Contagem dos padroes por `grep -cE "^#+ *[0-9]+\."` no SKILL.md, antes e depois.

Numeros do repositorio lidos as 23h06 UTC de 2026-08-24 via `gh api repos/blader/humanizer`:
37.632 estrelas, 3.315 forks, 18 issues abertas, licenca MIT, ultimo push 2026-08-19 05h58 UTC,
repositorio criado 2026-01-18. Na edicao 1, dois dias antes, eram 37.209 estrelas e 3.289 forks.

---

## 2. O corpus, e onde a edicao 1 errou

Fonte: lista de posts publicados do Blotato, canal LinkedIn, lida as 23h10 UTC de 2026-08-24.
Janela pedida: 2026-07-01 a 2026-08-25. Nenhum cursor de paginacao voltou nas duas chamadas,
ou seja, a lista veio inteira.

Corpus montado: **38 posts**, de 2026-07-09 a 2026-08-12. O texto de cada um esta em
`internal/pesquisa/corpus-linkedin-formula/`, um arquivo por post, transcrito da resposta do
Blotato nesta sessao.

A edicao 1 diz: *"In July I published eight LinkedIn posts in a row that opened the same way
every time."* Contado agora, arquivo por arquivo:

| O que a edicao 1 afirmou | O que a contagem deu |
|---|---|
| oito posts | **19 posts** carregam "Minha reacao honesta", um por post |
| seguidos | a maior sequencia ininterrupta e de **12 posts**, de 25/07 a 03/08 |
| em julho | a serie vai de **25 de julho a 12 de agosto**, atravessa os dois meses |

A sequencia de 12 foi quebrada pelo post de 04/08, que nao usa a frase. Depois dele vem uma
segunda sequencia de 7, de 05/08 a 12/08, quando ele suspendeu tudo.

O postmortem interno tambem estava errado, e no mesmo lugar: ele registrava "8 posts
consecutivos, 6 a 14 de agosto". A serie comecou em 25 de julho, doze dias antes.

Outra imprecisao da mesma frase: "Minha reacao honesta" nao e a abertura. A abertura repetida
e "Em [data], [empresa] fez X", e ela aparece na primeira linha de **23 dos 38** posts.

---

## 3. Os outros marcadores da formula, contados

Busca literal, arquivo por arquivo, nos 38 posts.

| Marcador | Posts |
|---|---|
| "Minha reacao honesta" | 19 |
| Assinatura de credencial em linha isolada ("Dirigi...", "Fui...", "Fundei...") | 28 |
| Abertura "Em [data] / Ontem / No dia" | 23 |
| "Nao porque X ... Mas porque Y" | 15 |
| "A IA amplifica o que voce entrega" e variantes | 13 |
| Segmentacao do leitor, 2 ou mais "Para quem X: / Quem X:" no mesmo post | 10 |
| Fecho curto em aforismo, ultima linha com menos de 90 caracteres | 24 |
| "Human First continua sendo a linha" | 4 |
| "Tudo parte de voce" / "Tudo comeca no autor" | 3 |
| Travessao longo | 1 |
| Meia risca | 0 |
| Hashtag | 0 |

O unico travessao longo do corpus esta no post de 15/07, sobre o George Lucas. E o mesmo post
que carrega "Ronald Rios Talk Show, Comedy Central, MTV", ou seja, o unico travessao do periodo
divide paragrafo com a credencial falsa. Coincidencia, mas registrada.

---

## 4. Quantos dos 35 padroes aparecem

Este e o numero que a edicao 1 prometeu. Ele vem com um limite declarado antes do numero.

**Limite.** As listas de gatilho da humanizer sao em ingles e o corpus e em portugues. Nenhuma
busca literal pelas frases do SKILL.md acha nada num texto em portugues. Entao eu li a
definicao de cada um dos 35 padroes na 2.11.2 e escrevi a busca equivalente em portugues, uma
por padrao. Busca literal e piso, nunca teto: ela acha a frase, nao acha o comportamento.

**Confirmados por busca literal, com ocorrencia contada: 11 dos 35.**
Padroes 5, 7, 9, 10, 14, 21, 27, 32, 33, 34 e 35.

**Mais 4 confirmados por leitura, sem busca que os pegue: 15 dos 35.**
Padrao 1 (importancia inflada, "essa e a palavra que importa"), padrao 2 (nome de cliente
usado como prova de autoridade, em 28 posts), padrao 11 (mesma abertura de frase repetida
post apos post) e padrao 31 (fecho em fragmento dramatico, 24 posts).

**Nao se aplicam a post de texto puro: 4 dos 35.** Padroes 15, 16, 17 e 29, todos sobre
negrito, subtitulo e formatacao de artigo.

O padrao mais denso do corpus nao e o 33, que foi o que ele percebeu sozinho. E o **27**,
"pretending to reveal a deeper truth": "o que o release nunca responde", "o detalhe que quase
ninguem comenta", "o que o anuncio nao diz", "a parte que ninguem parou para ler". A frase muda,
o movimento e sempre o mesmo, e ele nao aparece em nenhuma das cinco travas que a especificacao
escreveu em julho. A formula tinha um sexto elemento que ninguem tinha nomeado.

---

## 5. O que eu NAO fiz

- **Nao rodei a skill como passagem de reescrita.** A humanizer e um prompt que manda um modelo
  reescrever o texto. Eu li os 35 padroes do SKILL.md 2.11.2 baixado hoje e conferi o corpus
  contra eles. Sao coisas diferentes e a diferenca importa: o numero acima e uma contagem minha
  contra a regra dela, nao um veredito dela.
- **Nao conferi se a lista do Blotato e a lista completa do LinkedIn.** Se algum post foi
  publicado direto na plataforma, fora do Blotato, ele nao esta neste corpus e os 38 sao piso.
- **Nao reli os posts no LinkedIn** para conferir se algum foi editado depois de publicado.
  O texto que eu contei e o que o Blotato guardou no momento do envio.
- **Nao medi engajamento.** Nenhum numero de visualizacao, like ou comentario entra aqui.
  A afirmacao "o engajamento morreu" continua sendo a leitura dele, nao um dado que eu abri.
