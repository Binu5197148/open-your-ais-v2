# Posts de divulgacao, 5 Week Skills edicao 01

Escrito em 2026-08-22. Todos os numeros dentro dos posts foram lidos por mim entre 21h13 e
21h22 UTC de 22/08/2026, via `gh` CLI autenticado e `curl`. Nenhum e de memoria.

## Antes de colar, tres coisas

1. **O link do artigo ainda nao existe.** A edicao 1 esta em `internal/edicao-01.md` e ainda nao
   foi para `src/content/blog/`. O slug sugerido e
   `5-week-skills-01-five-claude-skills-checked-by-hand`, o que produz
   `https://openyourais.com/blog/5-week-skills-01-five-claude-skills-checked-by-hand/`.
   **Abra essa URL e confirme HTTP 200 antes de publicar qualquer um dos dois posts.**
   Nos blocos abaixo o lugar dele esta marcado como `[URL DO ARTIGO]`. Substituir, nao adivinhar.
2. **Zero hashtag e zero travessao longo nos dois.** Conferido com busca no arquivo, resultado zero.
3. **Os dois foram escritos para serem diferentes um do outro**, conforme a trava 3 da secao 4.4
   da especificacao. Comparativo no fim deste arquivo.

Publicacao, conforme a secao 1 da especificacao: LinkedIn na segunda 24/08 as 08h30
(Blotato, accountId 13743), X na terca 25/08 as 09h00 (Blotato, accountId 13071).
Um dia de intervalo, de proposito: quem segue os dois nao recebe a mesma coisa duas vezes.

---

## BLOCO 1, LinkedIn, em portugues

Formato P4, "o erro que eu cometi". 1.379 caracteres como esta abaixo, 1.445 depois de trocar o
placeholder pela URL real. Contado, nao estimado. Bem dentro do limite de 3.000 do LinkedIn.
Link no fim.

```
Tem uma pasta nesta maquina chamada humanizer. Eu instalei, eu uso, e ate ontem a noite eu nunca tinha olhado em que versao ela estava.

2.5.1. Ultimo commit, 31 de marco. Vinte e nove padroes numerados.

A versao que esta no GitHub hoje e a 2.11.2. Trinta e cinco padroes. Contei os dois.

Os seis que faltam na minha copia sao os de numero 30 a 35. O 31 se chama "forced punchlines and dramatic fragments". O 32, "formulaic sayings". O 33, "fake-candid openings", e a lista de gatilhos dele inclui "Honestly?" e "Let's be honest".

Em julho eu publiquei oito posts seguidos aqui que abriam do mesmo jeito, com a mesma pausa encenada antes de um ponto comum. O engajamento morreu. Suspendi tudo no dia 13 de agosto.

A ferramenta que nomeia esse erro exato, por numero, estava no meu HD ha cinco meses, numa versao que nao tem esse numero.

O projeto nao tem nada com isso. O erro e meu. Skill que voce instalou uma vez nao e skill que voce tem.

Comecei uma coluna semanal por causa disso. Cinco skills do Claude por semana, conferidas por mim, com a linha do README que quase ninguem le. A primeira saiu hoje e abre com esse erro, porque comecar mentindo seria um jeito ruim de comecar.

Ate segunda eu atualizo minha copia, passo os oito posts de julho por ela e conto quantos dos trinta e cinco padroes ela acha. O numero vai na edicao 2, mesmo se for feio.

[URL DO ARTIGO]
```

---

## BLOCO 2, X, em ingles

Formato P11, "a traducao do README". 647 caracteres como esta abaixo, 713 depois de trocar o
placeholder pela URL real. Link no fim.
Assunto de entrada diferente do LinkedIn: seguranca da html-anything, nao a humanizer.

**Atencao ao limite do X.** 713 caracteres so cabe em post longo, ou seja, conta com assinatura
paga. Se a conta que vai publicar (accountId 13071) estiver no limite de 280, este bloco NAO
sobe inteiro e o Blotato provavelmente vai truncar ou recusar. Confira antes. Se for 280,
use o bloco 2B logo abaixo, que foi escrito para caber, com o link em resposta.

```
From the html-anything README, the flags it uses to run your coding agent:

codex exec --sandbox workspace-write
cursor-agent --force --trust
gemini --yolo
opencode run --dangerously-skip-permissions

Translated: it spawns the agent you are already logged into, in approve-everything mode, on the machine that has your client work on it.

They document this themselves. Single operator, single machine, Host header allowlist against DNS rebinding. Real mitigation, stated plainly.

Worth reading before the four install commands, not after.

8,410 stars, Apache-2.0, read at 21:13 UTC today.

Four more skills checked the same way:
[URL DO ARTIGO]
```

---

## BLOCO 2B, X, em ingles, versao que cabe em 280

So use este se a conta estiver no limite de 280 caracteres. Mesmo formato P11, mesmo assunto,
mesma abertura por bloco de comando. Sao dois tweets: o primeiro tem 258 caracteres, a resposta
tem 132 mais a URL, que o X conta como 23. Total da resposta, 156.

Tweet 1, 258 caracteres:

```
html-anything runs your coding agent with these flags. Straight from its own README:

codex --sandbox workspace-write
cursor-agent --force --trust
gemini --yolo

Translated: your logged-in agent, approve-everything mode, on the machine with your client work.
```

Resposta ao tweet 1, 132 caracteres mais o link:

```
Read that before the four install commands, not after. Full check of it and four other skills, every number read today at 21:13 UTC:
[URL DO ARTIGO]
```

As flags do 2B estao abreviadas mais ainda que as do bloco 2, por causa do espaco. As linhas
completas do repositorio estao no fim deste arquivo. Se alguem apontar a abreviacao, colar a
linha completa e agradecer, nunca discutir.

---

## Por que os dois sao diferentes

Conferencia contra a trava 3 da secao 4.4 da especificacao, que proibe LinkedIn e X de usarem
o mesmo formato e o mesmo assunto de entrada na mesma semana.

| | LinkedIn | X |
|---|---|---|
| Idioma | Portugues | Ingles |
| Formato | P4, o erro que eu cometi | P11, a traducao do README |
| Assunto de entrada | A copia parada da humanizer, dele | As flags permissivas da html-anything |
| Abertura | Verbo, cena, uma pasta no disco | Citacao tecnica, bloco de comando |
| Pessoa | Primeira pessoa o tempo todo | Terceira pessoa ate o final |
| Tamanho | 1.445 caracteres com a URL | 713, ou 258 mais 156 na versao 2B |
| Emocao | Confissao | Aviso |
| Fecho | Uma promessa com data | Um link, sem moral da historia |

Nenhum dos vicios com teto da secao 3.1 foi usado em nenhum dos dois. O teto dos nove continua
inteiro para as proximas quatro edicoes.

Checagem extra, feita a mao: nenhum dos dois contem "minha reacao honesta", "tudo parte de voce",
"nao porque X porque Y", "para quem A para quem B", nem abertura no formato "Em [data],
[empresa]".

Uma ressalva de contagem, para o ledger ficar certo. O post de LinkedIn contem as palavras
"Honestly?" e "Let's be honest", mas entre aspas, como nome de gatilho do padrao 33 da humanizer.
E citacao da ferramenta, nao uso do tique. Ainda assim vale anotar no ledger, porque a trava 6 da
secao 4.4 conta ocorrencia da palavra e nao intencao, e nao quero que a proxima edicao herde a
palavra achando que ela nao foi usada.

---

## Numeros usados nos posts, e onde eu li cada um

Se alguem contestar nos comentarios, a resposta esta aqui.

| Numero no post | Onde eu li | Quando |
|---|---|---|
| humanizer local na versao 2.5.1 | `~/.claude/skills/humanizer/SKILL.md`, campo `version` no frontmatter | 22/08/2026, 21h15 UTC |
| Ultimo commit local em 31 de marco | `git log -1` na mesma pasta, commit 8b3a178, data 2026-03-31 22:09:57 -0700 | 22/08/2026, 21h15 UTC |
| 29 padroes na copia local | Contagem de cabecalhos numerados no SKILL.md local | 22/08/2026, 21h15 UTC |
| humanizer upstream na 2.11.2 | `metadata.version` no SKILL.md de blader/humanizer, baixado via `gh api` | 22/08/2026, 21h15 UTC |
| 35 padroes upstream | Contagem de cabecalhos numerados no mesmo arquivo | 22/08/2026, 21h15 UTC |
| Nomes dos padroes 31, 32 e 33 | Cabecalhos do SKILL.md upstream, em ingles, copiados sem traduzir | 22/08/2026, 21h15 UTC |
| "Honestly?" e "Let's be honest" como gatilhos do padrao 33 | Linha "Phrases to watch" do proprio padrao 33 | 22/08/2026, 21h15 UTC |
| As quatro flags da html-anything | Tabela "Agent / Detection binary / Invocation" no README do repositorio | 22/08/2026, 21h17 UTC |
| Host header allowlist contra DNS rebinding | Secao de seguranca do mesmo README, que aponta para `next/src/middleware.ts` | 22/08/2026, 21h17 UTC |
| 8.410 estrelas e Apache-2.0 | `gh api repos/nexu-io/html-anything` | 22/08/2026, 21h13 UTC |

Uma ressalva que vale repetir se alguem perguntar: eu li a descricao da allowlist no README.
Nao abri o `middleware.ts`. Se a pergunta no comentario for sobre o codigo, a resposta certa e
"nao verifiquei o codigo, verifiquei a documentacao", e nao uma opiniao.

Duas das quatro flags citadas no post de X foram abreviadas para caber. As linhas completas na
tabela do repositorio sao `codex exec --json --sandbox workspace-write`,
`cursor-agent --print --output-format stream-json --force --trust`,
`gemini --output-format stream-json --yolo` e
`opencode run --format json --dangerously-skip-permissions -`. Nenhuma flag foi acrescentada.
Se alguem apontar isso, o post inteiro esta correto e a resposta e colar a linha completa.

---

## Depois de publicar

Preencher `internal/5ws-ledger.md` com as tres linhas da edicao 1 antes de comecar a edicao 2.
Sem ledger, as travas da secao 4.4 nao tem como ser conferidas e a serie volta a virar formula
sem ninguem perceber. Foi assim da ultima vez.
