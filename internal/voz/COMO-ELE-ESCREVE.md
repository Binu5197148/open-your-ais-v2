# Como ele escreve, medido e nao adivinhado

Levantado em 2026-09-09 a pedido dele: "pega tambem da raiz, conversas de briefing
que fiz aqui direto no Claude, porque e ali que esta minha voz".

Duas fontes, as duas lidas nesta sessao:

1. **344 falas dele** extraidas dos 65 arquivos de sessao em
   `~/.claude/projects/-Volumes-MAC-SSD01-Projects-open-your-ais-v2/*.jsonl`.
   12.652 palavras. So mensagem humana, sem tool result e sem comando.
2. **Os 38 posts publicados** de `internal/pesquisa/corpus-linkedin-formula/`,
   que e o corpus da formula que morreu em julho.

## O que a medicao mostrou

**Como ele abre uma fala** (as 344): `eu` 30x, `e` 18, `o` 18, `mas` 17, `cara` 16,
`nao` 12, `so` 11, `ta` 11, `tem` 8, `sim` 8, `voce` 7, `seguinte` 6.
Primeira pessoa na frente, depois conectivo, depois vocativo.

**Tamanho de frase:** media de **11,7 palavras** em 1.023 frases. Ele escreve curto.

**Marcadores:** cara 64, porque 52, quero 57, ta 169, sabe 31, entendeu 29,
acho 24, entao 31, olha 15, claro 13.

**Palavras de conteudo:** site 86, tudo 58, precisa 47, agora 38, coisas 38,
falar 33, pessoas 29, adsense 26.

## A descoberta que muda a regra

**Os 38 posts que falharam abrem 21 vezes com data ou empresa.** Dezoito com
"Em [data], [empresa]..." e mais tres com "Ontem,". Cinquenta e cinco por cento do
corpus com a mesma porta de entrada. A media da primeira linha la e de **28,9
palavras**, quase tres vezes a frase natural dele.

Ou seja: **a formula de julho nao era a voz dele. Era o oposto dela.** Ele fala
curto e em primeira pessoa; os posts abriam longo e em terceira, com data de
noticia na frente. A tabela 3.1 da especificacao ja proibia essa abertura, mas
proibia como um vicio entre dez. Ela e a marca principal do corpus morto.

Os poucos daquele corpus que fogem do molde sao os que soam como ele:
"Cavalo e carruagem." / "Dois filmes. O mesmo epico de Homero." /
"Val Kilmer tinha uma das vozes mais reconheciveis do cinema." /
"Trabalho que nao otimiza facilmente e o unico que vale a pena defender."

E o post que ele aprovou em 09/09 abre assim: "Na sexta o cliente manda o logo em
PNG e pede o bumper animado para segunda." Cena concreta, presente, sem data e sem
empresa.

## Regras que saem disso, para escrever post dele

1. **Nunca abrir com data nem com nome de empresa.** Era a assinatura do corpus morto.
2. **Primeira pessoa e a abertura mais dele que existe**, e estava ausente da fila
   inteira antes desta revisao. Usar, com teto de 2 por fila para nao virar molde.
3. **Frase curta.** Alvo perto de 12 palavras, nao 29.
4. **Cena concreta no presente** e a abertura que ele mesmo validou.
5. `cara`, `mano`, `ta`, `entendeu` sao registro de conversa com o agente, **nao**
   de post publicado. Nao injetar isso no LinkedIn.

## Como conferir antes de agendar

```
node scripts/check-queue-repetition.mjs fila.json
```

Compara todos os posts da fila entre si, nao so o par LinkedIn/X da mesma entrega.
Reprova se uma classe de abertura passar de 2, se uma construcao retorica aparecer
em mais de 2 posts, ou se dois posts diferentes dividirem uma sequencia de 5
palavras fora de comando de instalacao e nome proprio.

Foi ele que pegou o problema desta fila: 6 dos 10 posts abriam com sintagma
nominal. Quatro foram reescritos.
