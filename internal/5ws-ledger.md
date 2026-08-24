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

## Leitura das travas para a edicao 2

Calculado a partir das linhas acima, em 2026-08-24.

- **A10 e obrigatoria na edicao 2, e ignora cooldown.** A regra esta na secao 4.1: A10 e
  obrigatoria na edicao seguinte a qualquer erro encontrado. O erro foi encontrado e corrigido em
  publico em 24/08. A edicao 2 abre pela correcao, com o numero certo na frente.
- **A2** (a confissao) fica fora ate a edicao 5.
- **F2** (o proximo teste) fica fora ate a edicao 4. O fecho da 2 sai de F1, F3, F4, F5 ou F6.
- **P4** e **P11** ficam fora ate a edicao 4. LinkedIn e X continuam proibidos de usar o mesmo
  formato na mesma semana, e desta vez com um dia de intervalo de verdade.
- **Nenhum vicio da tabela 3.1 foi gasto na edicao 1.** Os nove tetos estao inteiros.
- **Trava 5.** A edicao 1 nao teve post sem link. Um dos quatro proximos posts de cada canal
  precisa sair sem link nenhum, em P3 ou P9.
- **Trava 4, LinkedIn.** A metade de cima esta cumprida: 1.450 caracteres, acima do piso de 1.200.
  Falta um post de LinkedIn abaixo de 400 caracteres dentro das cinco primeiras edicoes.
- **Trava 4, X.** Falta um post abaixo de 200 caracteres.
- **Trava 7.** A edicao 1 abriu o LinkedIn com verbo ("Tem uma pasta") e o X com citacao tecnica
  (bloco de comando). A edicao 2 nao pode repetir a classe gramatical de abertura do mesmo canal.
- **Candidato a vicio novo, para a tabela 3.1.** A apuracao de 24/08 achou um sexto elemento da
  formula de julho que nenhuma das cinco travas nomeia: o padrao 27 da humanizer, "pretending to
  reveal a deeper truth", no formato "o que o release nunca responde", "o detalhe que quase
  ninguem comenta", "o que o anuncio nao diz". Era o padrao mais denso do corpus. Decidir na
  edicao 2 se entra na tabela com teto proprio.

---

## Como preencher depois de publicar

1. Copiar a linha para a tabela acima com a data real, nao a planejada.
2. Contar os caracteres no texto que de fato subiu, com a URL final dentro. Contar a URL, nao
   estimar: a da edicao 1 tinha 86 caracteres e a estimativa dizia 81.
3. Anotar os vicios da 3.1 que a peca gastou, mesmo os gastos entre aspas.
4. Rodar a leitura das travas de novo para a edicao seguinte, e reescrever a secao acima.
5. So entao comecar a escrever a proxima edicao.
