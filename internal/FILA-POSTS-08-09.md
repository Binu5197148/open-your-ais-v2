# Estado da fila de posts, 2026-09-08

Aprovado por ele em 08/09: edicao 3 sai na hora, o resto agendado espacado.
Revalidado antes de publicar, as 12h41 UTC. Dois numeros tinham envelhecido e
foram corrigidos (Remotion 11 -> 12 skills, OpenMontage 43.842 -> 44.402 bytes).
Os textos foram desdobrados (o arquivo tinha quebra de linha rigida, que sairia
truncada no feed) e receberam acentuacao. Nenhuma palavra de conteudo mudou.

## PUBLICADO

| peca | canal | quando | url |
|---|---|---|---|
| Edicao 3, draw-your-font | X | 2026-09-08 12:47 UTC | https://x.com/ulissesbalbino/status/2097305943562236369 |

## AGENDADO NO BLOTATO

| peca | canal | quando (UTC) | id |
|---|---|---|---|
| Metodo Remotion | X | 2026-09-09 17:00 | c6e73fd3-6452-48ed-bb88-1c65ade2ad3b |
| Checklist dublagem YouTube | X | 2026-09-10 17:00 | 3ea6f26e-bc6f-440a-848a-af86b04f0b29 |
| Edicao 2, last30days | X | 2026-09-11 17:00 | 536b63ad-dd35-41f0-a711-3dc559dbce15 |

## BLOQUEADO, LINKEDIN COM CONEXAO EXPIRADA

O Blotato recusou publicacao imediata E agendamento na conta 13743 com
"Account connection has expired. Please reconnect your account."
Testado duas vezes, as 12h46 e as 12h48 UTC de 08/09. Nao e problema de texto.

Ele precisa reconectar o LinkedIn no Blotato. Depois disso estes quatro saem,
nesta ordem e nestes horarios, para nao repetir o bloco de julho:

| peca | quando propor |
|---|---|
| Edicao 3, Pixel2Motion | assim que reconectar |
| Checklist dublagem YouTube | dia seguinte, 08h30 BRT |
| Metodo Remotion | dois dias depois, 08h30 BRT |
| Edicao 2, OpenMontage | tres dias depois, 08h30 BRT |

## OS DOIS POSTS DE X FORAM REESCRITOS EM 08/09

Os pares do Remotion e da dublagem do YouTube abriam com a mesma frase nos dois
canais. Isso quebra a trava 3 da especificacao e nao vai ao ar assim. Reescrevi
so a versao de X dos dois, mudando a porta de entrada, e reagendei:

| entrega | X entrava por | X passa a entrar por |
|---|---|---|
| Metodo Remotion | a mesma lista de formatos do LinkedIn | as quarenta entregas, e o que muda entre gerar e parametrizar |
| Dublagem YouTube | a mesma frase de abertura do LinkedIn | a decisao errada, canal inteiro em vez de video a video |

O LinkedIn dos dois ficou intacto. Nenhum dado mudou, so a retorica de entrada.

Para isso nao depender de eu lembrar, escrevi `scripts/check-post-overlap.mjs`.
Ele compara os dois textos de um par por sequencias de 6 palavras, ignorando URL
e comando de instalacao (comando e carga util, tem que repetir mesmo), e falha se
a abertura for igual ou se sobrar qualquer frase em comum. Rodar antes de agendar
qualquer par. Os quatro pares de hoje passam.

---

# Textos finais, exatamente como foram para o ar

## Edicao 3, LinkedIn, P7 (contra-post), BLOQUEADO

1426 caracteres.

```
Na sexta o cliente manda o logo em PNG e pede o bumper animado para segunda.

Foi exatamente para essa situação que eu abri o Pixel2Motion esta semana. É uma skill de animação de logo, e a parte difícil ela faz muito bem: refaz o raster como vetor limpo, com marca, ponto e lettering nomeados separadamente, e rejeita um traço matematicamente mais justo quando uma curva mais simples explica melhor o desenho. Isso é olho de designer escrito em código.

Aí eu fui ver o que sai no fim.

Nove arquivos. Um SVG, um CSS, uma página HTML, um documento de motion e cinco PNGs de verificação. Nenhum GIF. Nenhum vídeo. O logo animado que a primeira linha do repositório promete é uma página web.

Existe um exportador de vídeo lá dentro. Faz 4K a 120 quadros por segundo e ainda exporta com alfa, o que é mais do que quase todo mundo entrega. Só que ele está preso aos cinco logos de demonstração do próprio autor, na página de demonstração do próprio autor, com o caminho do Chrome do macOS escrito à mão. E não aparece uma única vez em nenhum dos dois manuais. Eu procurei nos dois, com grep, e contei zero.

Então essa é a que eu não recomendo para você, se o que você precisa é um arquivo para arrastar na timeline. Para vetorizar logo de cliente, instala hoje.

As outras quatro da semana, e o que cada uma entrega de verdade quando o comando termina:
https://openyourais.com/blog/5-week-skills-03-the-file-that-actually-lands/
```

---

## Edicao 3, X, P9 sem link, PUBLICADO 08/09

178 caracteres.

```
Can you write "ação" in a font made from your own handwriting?

Not from the printable template. draw-your-font ships two charsets, minimal and spanish. Neither prints ã, õ or ç.
```

---

## Checklist dublagem YouTube, LinkedIn, BLOQUEADO

1928 caracteres.

```
O YouTube está dublando o seu canal agora e provavelmente você não ligou isso.

Desde 4 de fevereiro a dublagem automática está liberada para todo mundo, sem fila e sem inscrição, em 27 idiomas. Vem ativada por padrão para quem é elegível. Em dezembro o YouTube teve mais de 6 milhões de espectadores por dia assistindo pelo menos dez minutos de conteúdo dublado por IA.

Até aqui é presente, e eu não desligaria. Mas tem uma frase na documentação do próprio Google que muda tudo: você não pode editar uma dublagem automática.

Não é "a edição é limitada". É não pode. Se a máquina errar a única linha que carrega a piada, a sua opção é trocar o idioma original do vídeo e mandar gerar tudo de novo torcendo.

Quem entrega trabalho pago sabe o que isso significa, porque a nota sempre volta. E nunca é a dublagem inteira. É a linha 14. O cliente ouviu a linha 14, ela caiu errada no mercado dele, e ele quer aquilo mudado na quinta. Em ferramenta sem edição não existe quinta.

Aí está a diferença inteira, e ela não é de qualidade de modelo. Uma coisa é transmissão, outra é entrega. Entrega é aquilo que pode ser pedido para mudar.

Escrevi o checklist de cinco passos para você decidir isso no seu canal ainda hoje, incluindo onde achar o botão no YouTube Studio, qual é o único controle que você realmente tem, e por que decidir vídeo a vídeo é melhor do que decidir canal inteiro.

O que o YouTube não entrega a preço nenhum é a voz clonada. Não uma voz profissional, a voz da própria pessoa falando um idioma que ela não fala. É isso que o cliente está comprando quando paga por localização.

A máquina ficou com a tarefa diária. Ficou bem com ela. O que ela não pegou foi o julgamento de qual linha importa, e o som específico de uma pessoa específica.

O checklist inteiro e a divisão entre o que vale de graça e o que vale pago estão aqui: https://openyourais.com/blog/youtube-ai-dubbing-27-languages-what-it-cannot-do/
```

---

## Checklist dublagem YouTube, X, AGENDADO 10/09

630 caracteres.

```
Decidir dublagem automática no canal inteiro é o erro. A decisão é vídeo a vídeo.

O YouTube já ligou isso por você: 27 idiomas, por padrão, desde fevereiro. E a documentação do Google diz que dublagem automática não se edita.

Num vídeo institucional, ótimo, deixa ligado. Numa peça que você entregou para um cliente, uma linha errada não tem conserto, e ele vai pedir o conserto que não existe.

Onde fica o botão e os 5 passos: https://openyourais.com/blog/youtube-ai-dubbing-27-languages-what-it-cannot-do/
```

---

## Metodo Remotion, LinkedIn, BLOQUEADO

1607 caracteres.

```
A campanha é aprovada como um filme. Depois o cliente pede em 9:16, em 1:1, em três idiomas, com o preço trocado em seis mercados e a linha legal atualizada porque alguém do jurídico acordou.

Se a peça foi gerada por um modelo, você não re-renderiza. Você regenera. E regenerar devolve outro filme: a luz muda, o rosto escorrega, o produto perde o rótulo.

Escrevi o método completo que eu uso para resolver isso, com os comandos de instalação prontos para copiar.

A ferramenta é o Remotion. Ele monta vídeo a partir de código React, então não existe modelo nenhum decidindo o que aparece na tela. O mesmo input devolve o mesmo frame na terça e na segunda. O preço vira um parâmetro. O idioma vira um parâmetro. Você troca o dado, renderiza de novo, e cada frame que foi aprovado continua exatamente como foi aprovado.

Quem dirige isso hoje é o Claude Code. São 12 skills oficiais que ensinam o agente a trabalhar dentro de um projeto Remotion, e a instalação inteira é isto:

npx remotion skills add
npx remotion skills update

O segundo comando é o que todo mundo esquece. O framework publica quase todo dia, então uma instalação de três meses atrás está ensinando padrão velho para o seu agente.

Eu não abandonei vídeo generativo, uso Kling e Seedance toda semana em job pago. O que eu parei de fazer foi pedir para uma máquina de dados aleatórios entregar consistência. Modelo generativo é caça níquel. Remotion é gráfica.

O método inteiro, o que cobrar por ele e por onde começar sem perder uma semana estão aqui: https://openyourais.com/blog/remotion-claude-code-video-variations-director-method/
```

---

## Metodo Remotion, X, AGENDADO 09/09

541 caracteres.

```
Uma campanha aprovada vira quarenta entregas: formatos, mercados, idiomas, preço trocado, linha legal nova.

Com modelo generativo, quarenta entregas são quarenta filmes diferentes. Com Remotion são o mesmo filme e quarenta parâmetros, porque a peça é montada por código e não sorteada.

12 skills oficiais colocam o agente para trabalhar dentro do projeto:

npx remotion skills add
npx remotion skills update

Método completo: https://openyourais.com/blog/remotion-claude-code-video-variations-director-method/
```

---

## Edicao 2, LinkedIn, P2 (tres linhas), BLOQUEADO

249 caracteres.

```
A palavra "direitos" aparece zero vez no README de um sistema que monta vídeo com material dos outros.

Contei em 08/09: 44.402 bytes, nenhuma.

As outras quatro:
https://openyourais.com/blog/5-week-skills-02-the-readme-line-that-changes-the-answer/
```

---

## Edicao 2, X, P6 (uma skill so), AGENDADO 11/09

694 caracteres.

```
There is a research skill that will search X for you, and the way it reaches X is your own logged in browser session.

Log in, and the account doing the scraping is yours.

I did not infer that. Their own evaluation script strips the browser cookie path out of the environment before it runs, and says why: to keep test runs on what they call the popup free path.

They route around it for their own testing.

The same repo ships a publish flag with no private setting on the other side of it. A brief titled with a client name becomes a public page about that client.

Four more skills, opened and counted:
https://openyourais.com/blog/5-week-skills-02-the-readme-line-that-changes-the-answer/
```

---

