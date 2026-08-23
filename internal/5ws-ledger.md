# 5 Week Skills, ledger

Uma linha por peca publicada. Sem este arquivo preenchido, a edicao seguinte nao pode ser
escrita: as travas da secao 4.4 de `internal/formato-5-week-skills.md` sao todas por janela
deslizante e nao tem como serem conferidas de cabeca.

Criado em 2026-08-22 com as tres linhas semente da edicao 1. Ate essa data o arquivo nao existia,
e a especificacao exigia um ledger que ninguem tinha escrito, o que bloqueava a edicao 2 pela
regra da propria especificacao.

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
| 01 | artigo   | 2026-08-24 | A2 | F2 | -   | -     | 1 axenworks | nenhum |
| 01 | linkedin | 2026-08-24 | -  | -  | P4  | 1445  | sim         | nenhum |
| 01 | x        | 2026-08-25 | -  | -  | P11 | 713   | sim         | nenhum |
```

Notas da edicao 1, escritas no dia em que as pecas foram fechadas:

- As tres linhas sao semente. **Confirmar as datas no dia da publicacao** e trocar se escorregar.
  As pecas estao em `internal/edicao-01.md` e `internal/posts-edicao-01.md` e ainda nao foram
  movidas para `src/content/blog/`.
- Os 1.445 do LinkedIn foram contados no arquivo: 1.379 caracteres como o bloco esta escrito,
  mais 66 da troca de `[URL DO ARTIGO]` pela URL final de 81 caracteres. Mesmo metodo nos 713 do X:
  647 no bloco, mais 66.
- Se o X publicar a versao 2B em vez do bloco 2, trocar 713 por 258 e anotar que houve resposta
  encadeada. Isso muda a leitura da trava 4, que conta o tamanho de cada peca isolada.
- O artigo leva um unico link para axenworks.com, dentro da ficha 1, conforme a secao 6.
  Nem o LinkedIn nem o X levam esse link.
- Ressalva de contagem para a trava 6: o post de LinkedIn contem as palavras "Honestly?" e
  "Let's be honest", entre aspas, como nome dos gatilhos do padrao 33 da humanizer. E citacao da
  ferramenta, nao uso do tique, mas a trava conta ocorrencia e nao intencao. Vale como gasto.

---

## Leitura das travas para a edicao 2

Calculado a partir das linhas acima. Reconferir depois de publicar, nao antes.

- **A2** (a confissao) fica fora ate a edicao 5. A abertura da 2 sai de A1, A3, A4, A5, A6, A7,
  A8, A9 ou A10.
- **F2** (o proximo teste) fica fora ate a edicao 4.
- **P4** e **P11** ficam fora ate a edicao 4. LinkedIn e X continuam proibidos de usar o mesmo
  formato na mesma semana.
- **Nenhum vicio da tabela 3.1 foi gasto na edicao 1.** Os nove tetos estao inteiros.
- **Trava 5.** A edicao 1 nao teve post sem link. Um dos quatro proximos posts de cada canal
  precisa sair sem link nenhum, em P3 ou P9.
- **Trava 4, LinkedIn.** A metade de cima ja esta cumprida: 1.445 caracteres, acima do piso de
  1.200. Falta um post de LinkedIn abaixo de 400 caracteres dentro das cinco primeiras edicoes.
- **Trava 4, X.** Falta um post abaixo de 200 caracteres.
- **Trava 7.** A edicao 1 abriu o LinkedIn com verbo e o X com citacao tecnica. A edicao 2 nao
  pode repetir a classe gramatical de abertura do mesmo canal duas vezes seguidas.
- **Obrigacao de A10.** A edicao 1 nao publicou erro corrigido em publico, mas a especificacao foi
  reprovada e corrigida em 2026-08-22, antes de qualquer peca sair. Se algum desses erros
  sobreviver ate a publicacao e for encontrado depois, a edicao seguinte abre em A10 e ignora o
  cooldown.

---

## Como preencher depois de publicar

1. Copiar a linha para a tabela acima com a data real, nao a planejada.
2. Contar os caracteres no texto que de fato subiu, com a URL final dentro.
3. Anotar os vicios da 3.1 que a peca gastou, mesmo os gastos entre aspas.
4. Rodar a leitura das travas de novo para a edicao seguinte, e reescrever a secao acima.
5. So entao comecar a escrever a proxima edicao.
