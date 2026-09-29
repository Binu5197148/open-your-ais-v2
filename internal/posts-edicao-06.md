# Posts da edicao 6, escritos em 2026-09-28, revisados em 2026-09-29 contra o artigo final

Artigo: https://openyourais.com/blog/5-week-skills-06-what-they-take-for-granted/
(ainda NAO no ar: esta no branch `5ws-edicao-06`, esperando revisao do PR antes do merge)

NAO PUBLICAR sem o OK dele. Quando ele liberar: LinkedIn accountId 13743, X accountId 13071, pelo Blotato.
E so depois do merge e da URL responder 200.

Travas conferidas antes de escrever, lendo internal/5ws-ledger.md:

- Trava 1: P6 no LinkedIn e P2 no X. Nenhum dos dois esta nas edicoes 3 a 5 publicadas
  (P9 e P10 da 5 ficam fora ate a 8).
- Trava 3: formatos diferentes e assuntos de entrada diferentes (o master token da
  notebooklm-py no LinkedIn, o "no undo" da docx-cli no X).
- Trava 4: janela nova. O X sai com 245, ainda acima de 200: o X continua devendo um post
  abaixo de 200 ate a edicao 10. O LinkedIn sai com 1.123, entre as duas pontas.
- Trava 7: LinkedIn abre com conjuncao subordinativa ("Quando..."), diferente do numeral da 5.
  X abre com oracao existencial ("There is..."), diferente do imperativo da 5.
- Nenhum vicio da tabela 3.1 gasto. "Honesta" nao aparece.
- Zero travessao longo, zero meia risca, zero hashtag, conferido no arquivo.
- Regra de trafego: cada post leva exatamente 1 link, o do artigo, com UTM conforme
  internal/OPERACAO-EDITORIAL.md (utm_source=linkedin ou x, utm_medium=social,
  utm_campaign=5ws-06).
- Revisao 29/09: LinkedIn atribui ao autor do repositorio a descricao do token
  (observacao 2 da REVISAO-PR-2). O X nao mudou de fato: docx-cli continua igual no artigo.

---

## LINKEDIN, portugues, formato P6 (uma skill so)

Quando uma skill manda o agente preferir uma credencial, vale ler o arquivo até o fim.

Esta semana abri a notebooklm-py, que deixa o Claude conduzir o NotebookLM: carregar quarenta transcrições de entrevista, perguntar e receber a resposta com a fonte citada. Para pesquisa de documentário, resolve um problema real.

Na linha 27 do arquivo de instruções, o agente é orientado a preferir, para trabalho sem supervisão, um master token do Google.

Na linha 64 do mesmo arquivo, o próprio autor descreve o token: uma credencial da conta inteira, durável, que continua valendo depois que você troca a senha. E recomenda usar uma conta separada.

Só que a conta que o produtor quer conectar é a principal, onde estão o Drive, os decks dos clientes, a pesquisa. Justamente a que o autor diz para não usar.

O que eu faria: uma conta Google só para isso, só com as fontes daquele projeto, e login pelo navegador até ler o documento de decisão em que o autor explica o token.

As outras quatro skills da coluna, e o que cada uma assume sem perguntar:
https://openyourais.com/blog/5-week-skills-06-what-they-take-for-granted/?utm_source=linkedin&utm_medium=social&utm_campaign=5ws-06

---

## X, ingles, formato P2 (tres linhas)

There is a Word skill for agents that redlines a client script cleanly.
Its own example starts: make a copy first, there's no undo.
Your script in Downloads is not in git.
https://openyourais.com/blog/5-week-skills-06-what-they-take-for-granted/?utm_source=x&utm_medium=social&utm_campaign=5ws-06
