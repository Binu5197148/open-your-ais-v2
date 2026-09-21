# Posts da edicao 5, escritos em 2026-09-21

Artigo publicado: https://openyourais.com/blog/5-week-skills-05-the-check-the-install-skips/

Nada foi publicado. Os dois textos abaixo esperam o OK dele.
Quando ele liberar: LinkedIn accountId 13743, X accountId 13071, pelo Blotato.

Travas conferidas antes de escrever, lendo internal/5ws-ledger.md:

- Trava 5, a divida mais urgente do ledger: o LinkedIn ainda devia um post sem
  link nenhum e so restavam as edicoes 4 e 5. O da edicao 4 esta na fila sem
  aprovacao. Este paga a divida de qualquer jeito, em P9.
- Trava 3: formatos diferentes nos dois canais (P9 no LinkedIn, P10 no X) e
  assuntos de entrada diferentes (o numero da NVIDIA la, o habito de instalar aqui).
- Trava 7: o LinkedIn da edicao 4 abre com pergunta, este abre com numeral. O X
  da edicao 4 abre com numeral, este abre com imperativo.
- Nenhum vicio da tabela 3.1 gasto nos dois posts.
- Zero travessao longo, zero meia risca, zero hashtag, conferido no arquivo.
- Regra de trafego: o post do X leva exatamente 1 link e ele e do openyourais.com.
  O do LinkedIn nao leva link nenhum, que e o que a trava 5 exige. Se ele quiser
  trafego, o lugar do link e o primeiro comentario, que o formato P9 permite.

---

## LINKEDIN, portugues, formato P9, sem link nenhum

26,1 por cento das skills que a NVIDIA analisou tem pelo menos uma vulnerabilidade. 5,2 por cento parecem ter ma intencao. Sao 31.132 skills lidas, de um conjunto de 42.447.

Abri o scanner deles hoje de manha para checar as cinco skills da coluna desta semana. O numero esta na primeira linha do README. Continuei lendo ate o fim, que e onde quase ninguem chega.

La embaixo, na secao de limitacoes, esta escrito que a ferramenta pode nao pegar padroes escritos em outros idiomas que nao o ingles.

Eu escrevo as minhas skills em portugues. Metade do que eu instalo vem de repositorio chines, coreano, japones.

Entao os 26,1 por cento cobrem o que, exatamente? Nao sei. E o README tambem nao diz por que 11.315 skills do conjunto ficaram de fora da analise.

Isto nao e critica a ferramenta. Ela e gratuita, e aberta, roda sem conexao se voce pedir, e hoje e a melhor coisa que existe para olhar uma skill antes de instalar.

E que scan limpo e uma promessa menor do que scan sujo. E para quem trabalha em portugues, menor por um tanto que ninguem publicou ainda.

O habito que eu passei a ter, e leva dez segundos: rodar com a flag que mantem tudo local quando a skill e minha, e rodar completo quando a skill e de outra pessoa. No modo padrao o conteudo dos arquivos vai para o provedor de modelo que voce configurou. Na skill de um estranho, tudo bem. Na sua, com nome de cliente dentro, nao.

---

## X, ingles, formato P10, um link, o do artigo

Run this the next time you install a skill. It costs one second.

Before:
npx skills add <name>
"Installed."

After:
npx skills add <name>
ls ~/.claude/skills/<name>/

One file? That is not the skill. That is its table of contents.

One of the five in this week's column is 191 files across four folders. A bug in an older installer shipped only the top one, silently. The agent reads it, cannot find the recipes it names, and answers anyway.

https://openyourais.com/blog/5-week-skills-05-the-check-the-install-skips/
