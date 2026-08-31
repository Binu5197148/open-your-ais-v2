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
```

Pecas da edicao 2 ainda nao publicadas, escritas e travadas em
`internal/posts-edicao-02.md`, esperando o OK dele. Nao entram na tabela acima ate irem ao ar.
Quando forem, as linhas sao estas, com a data real no lugar da planejada:

```
| 02 | linkedin | AAAA-MM-DD | -  | -  | P2  | 245   | sim         | nenhum |
| 02 | x        | AAAA-MM-DD | -  | -  | P6  | 707   | sim         | nenhum |
```

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

## Leitura das travas para a edicao 3

Calculado a partir das linhas acima, em 2026-08-31. Vale para o artigo ja; para os posts, vale
so depois que os da edicao 2 forem publicados.

- **A10** (a correcao) fica fora ate a edicao 6. **A2** fica fora ate a edicao 5. A abertura da
  edicao 3 sai de A1, A3, A4, A5, A6, A7, A8 ou A9.
- **A9** (a entrada fria) precisa aparecer pelo menos uma vez a cada 6 edicoes. Ainda nao
  apareceu. Restam as edicoes 3, 4, 5 e 6. Quanto antes, melhor.
- **F4** fica fora ate a edicao 5. **F2** fica fora ate a edicao 4. O fecho da edicao 3 sai de
  F1, F3, F5 ou F6.
- **P4** e **P11** ficam fora ate a edicao 4. **P2** e **P6** ficam fora ate a edicao 5, contados
  a partir do dia em que forem publicados. LinkedIn e X continuam proibidos de usar o mesmo
  formato e o mesmo assunto de entrada na mesma semana.
- **Nenhum vicio da tabela 3.1 foi gasto em duas edicoes.** Os tetos estao todos cheios,
  incluindo a linha nova do padrao 27.
- **Trava 4, LinkedIn: cumprida nas duas pontas.** 1.450 caracteres na edicao 1, acima do piso
  de 1.200, e 245 na edicao 2, abaixo do teto de 400. Nada devido ate a edicao 5.
- **Trava 4, X: ainda falta um post abaixo de 200 caracteres.** As duas primeiras edicoes deram
  718 e 707. Restam as edicoes 3, 4 e 5.
- **Trava 5: ainda falta um post sem link nenhum**, em P3 ou P9, em cada canal. Nem a edicao 1
  nem a 2 tiveram. Restam as edicoes 3, 4 e 5, entao isso agora e urgente e nao mais opcional.
- **Trava 7.** No LinkedIn as aberturas gastas sao verbo (edicao 1) e sintagma nominal
  (edicao 2). No X sao bloco de comando (edicao 1) e oracao declarativa (edicao 2). A edicao 3
  precisa de uma terceira classe em cada canal.
- **Gatilho de cooldown da secao 3.1.** Nada apareceu em tres edicoes seguidas ainda. O primeiro
  candidato a vigiar e o proprio bloco "Como eu checei", que e da espinha fixa do artigo e por
  isso nao conta, e a frase "Not measured", que apareceu nas cinco fichas das duas edicoes. Se
  aparecer de novo em todas as cinco fichas da edicao 3, ela vira formula e precisa de variacao,
  mesmo sendo verdade.

---

## Como preencher depois de publicar

1. Copiar a linha para a tabela acima com a data real, nao a planejada.
2. Contar os caracteres no texto que de fato subiu, com a URL final dentro. Contar a URL, nao
   estimar: a da edicao 1 tinha 86 caracteres e a estimativa dizia 81.
3. Anotar os vicios da 3.1 que a peca gastou, mesmo os gastos entre aspas.
4. Rodar a leitura das travas de novo para a edicao seguinte, e reescrever a secao acima.
5. So entao comecar a escrever a proxima edicao.
