# ONDE ESTA O DINHEIRO, DE VERDADE
Pesquisa do angulo DINHEIRO para nicetobuild.com
Sessao: 2026-08-23, iniciada 12:02 BRT (America/Sao_Paulo)
Regra: so entra aqui o que foi ABERTO e LIDO nesta sessao. Tudo com URL.

STATUS: rascunho parcial gravado 12:05 BRT. Sera completado abaixo.

---

## 1. A TABELA OFICIAL DO GOOGLE

URL aberta: https://adsense.google.com/start/calculator-data.json
Hora: 2026-08-23, 12:03 BRT. HTTP 200, 13.817 bytes, 75 linhas.

Estrutura de cada linha: `multiplier`, `category`, `region`, `region_tagging`, `category_tagging`.
ATENCAO AO ENQUADRAMENTO: o arquivo NAO tem regiao "North America". Tem tres regioes apenas:
`Americas`, `Asia and Pacific Countries`, `Europe, Middle East and Africa`.
Entao "America do Norte" nao existe nessa tabela. O numero que serve para publico dos EUA
e a linha `Americas`.

### Americas, as 25 categorias, do maior para o menor (numero cru do arquivo)

| # | multiplier | categoria (tag EN) |
|---|---|---|
| 1 | **13.37** | **Home & Garden** |
| 2 | 4.34 | Computers & Electronics |
| 3 | 3.41 | Health |
| 4 | 3.39 | Business & Industrial |
| 5 | 3.34 | Finance |
| 6 | 3.16 | Jobs & Education |
| 7 | 3.05 | Law & Government |
| 8 | 2.95 | Travel & Transportation |
| 9 | 2.82 | Shopping |
| 10 | 2.71 | Real Estate |
| 11 | 2.69 | Hobbies & Leisure |
| 12 | 2.68 | Internet & Telecom |
| 13 | 2.66 | Autos & Vehicles |
| 14 | 2.62 | Food & Drink |
| 15 | 2.55 | Beauty & Fitness |
| 16 | 2.48 | Pets & Animals |
| 17 | 2.40 | Reference |
| 18 | 2.36 | Science |
| 19 | 1.80 | Online Communities |
| 20 | 1.67 | People & Society |
| 21 | 1.57 | Arts & Entertainment |
| 22 | 1.28 | Books & Literature |
| 23 | 1.21 | Games |
| 24 | 1.05 | Sports |
| 25 | 0.89 | News |

### O achado que muda tudo

`Home & Garden / Americas = 13.37` e o MAIOR numero da tabela inteira. Das 75 linhas
(25 categorias x 3 regioes), nenhuma outra passa de 5.29.

Top 10 global das 75 linhas:
13.37 Home & Garden Americas | 5.29 Finance APAC | 5.16 Home & Garden EMEA |
4.81 Online Communities APAC | 4.39 Law & Government APAC | 4.34 Computers & Electronics Americas |
4.29 Finance EMEA | 4.11 Home & Garden APAC | 4.04 Computers & Electronics APAC | 3.41 Health Americas

Media das 75 linhas: 2.62. Menor: 0.81 (Books & Literature APAC).

Escala em cima do numero cru:
- Home & Garden Americas vale **3,08x** Computers & Electronics Americas (13.37 / 4.34)
- vale **4,00x** Finance Americas (13.37 / 3.34)
- vale **4,93x** Real Estate Americas (13.37 / 2.71)
- vale **5,10x** Media global da tabela (13.37 / 2.62)
- vale **15,02x** News Americas (13.37 / 0.89), que e o chao do mercado
- Home & Garden nas Americas vale **2,59x** Home & Garden na EMEA (13.37 / 5.16)
  e **3,25x** Home & Garden na APAC (13.37 / 4.11)

Ou seja: casa e reforma, publico das Americas, e o unico ponto onde a tabela do Google
sai da faixa e vira outra coisa. Nao e "um nicho bom". E o pico absoluto do arquivo.

---

## 2. O QUE O NUMERO 13.37 SIGNIFICA, EM DOLAR (formula extraida do codigo do Google)

Nao adivinhei. Baixei o JavaScript da propria calculadora e li a conta.

URLs abertas, 2026-08-23, 12:06 BRT:
- https://adsense.google.com/intl/en_us/start/ (pagina em ingles, HTTP 200, 58.574 bytes)
- https://adsense.google.com/start/static/revamp/index.min.js?cache=722cf4d (HTTP 200, 363.618 bytes)

Trecho literal do arquivo `index.min.js`, funcao `Calculator.prototype.displayResult`:

```js
var a = this.pageImpressionsSlider.value;              // page views POR MES
b = 100 * Math.floor(Number((Math.round(a/1E3 * this.multiplier * 12)/100).toFixed(2)));
c.innerText = b.toLocaleString();                       // "Your potential yearly earnings"
```

E do HTML da mesma pagina, literal:
- `<label for="page-view-slider" class="subtitle">Monthly page views</label>`
- slider: `min="50000"` `max="10000000"`
- `<h3 ...>Your potential yearly earnings</h3>` com `<span>$</span>` na frente

Traduzindo a conta:

```
ganho ANUAL em USD  =  (page views por mes / 1000) x multiplier x 12
```

Logo, **`multiplier` E o RPM em dolar: receita por 1.000 page views, por mes.**

**Home & Garden, Americas = US$ 13,37 de RPM.**

Verificacao extra: baixei o mesmo JSON com `Accept-Language: en-US`. Os 75 multiplicadores
sao identicos byte a byte aos da versao pt-BR. So os rotulos de categoria mudam de idioma.
O simbolo de moeda no HTML e `$` fixo. Entao 13,37 e dolar, nao real.

### Honestidade sobre esse numero (isto precisa ir escrito em qualquer pagina que o use)

Este e o numero de MARKETING do Google, na pagina que vende AdSense. O rodape da propria
pagina diz, literal: "There's no guarantee or commitment that you'll earn this amount.
Estimates are based on the content category and region you selected. Actual revenue is
dependent on many factors such as advertiser demand, user location, user device, content
vertical, seasonality, ad format & size, number of ads and currency exchange rates."

Ou seja: 13,37 e teto de vitrine, nao piso. Tratar como cenario otimista.
Nao publicar "voce vai ganhar X" em lugar nenhum. Isto e planejamento interno.

---

## 3. A CONTA ABERTA: QUANTAS VISITAS PARA 100, 500 E 2000 DOLARES POR MES

Base: RPM = US$ 13,37 por 1.000 page views (Home & Garden, Americas, tabela do Google).
Formula: `page views por mes = (alvo em USD / 13,37) x 1000`

| Alvo por mes | Conta | Page views / mes | Page views / dia (mes de 30,44 dias) |
|---|---|---|---|
| US$ 100 | 100 / 13,37 x 1000 | **7.479** | 246 |
| US$ 500 | 500 / 13,37 x 1000 | **37.397** | 1.229 |
| US$ 2.000 | 2000 / 13,37 x 1000 | **149.589** | 4.914 |

Conferindo pela formula do Google (anual): 149.589/1000 x 13,37 x 12 = US$ 24.000/ano = US$ 2.000/mes. Fecha.

### Page view nao e visita. A conversao muda o numero.

O input do Google e page views, nao sessoes. Se cada visita ve mais de uma pagina, precisa de
menos visitas. Cenarios (visitas/mes necessarias):

| paginas por sessao | US$ 100 | US$ 500 | US$ 2.000 |
|---|---|---|---|
| 1,0 (ferramenta pura, entra, usa, sai) | 7.479 | 37.397 | 149.589 |
| 1,15 | 6.504 | 32.519 | 130.077 |
| 1,6 | 4.675 | 23.373 | 93.493 |
| 2,5 (site que puxa a pessoa pra dentro) | 2.992 | 14.959 | 59.835 |

Ler assim: **cada 0,5 de pagina a mais por sessao vale tanto quanto uma leva inteira de trafego novo.**
Sair de 1,0 para 1,6 pagina por sessao corta o trafego necessario em 37%. Isso e arquitetura,
nao SEO. Guarde este numero, ele volta na secao 5.

### E se 13,37 for otimista? (cenario de desconto, porque provavelmente e)

Page views por mes necessarios, por RPM real:

| RPM real | US$ 100 | US$ 500 | US$ 2.000 |
|---|---|---|---|
| US$ 13,37 (tabela Google) | 7.479 | 37.397 | 149.589 |
| US$ 8,00 | 12.500 | 62.500 | 250.000 |
| US$ 5,00 | 20.000 | 100.000 | 400.000 |
| US$ 3,00 | 33.333 | 166.667 | 666.667 |

Faixa honesta de planejamento para os primeiros 12 meses: **entre 12 mil e 33 mil page views/mes
para o primeiro US$ 100**, e **entre 150 mil e 670 mil page views/mes para US$ 2.000**.
Nao existe versao dessa conta em que 500 visitas por mes viram dinheiro.

### Detalhe que quase ninguem nota, e ele e uma trava

O slider da propria calculadora do Google comeca em **50.000 page views por mes** (`min="50000"`
no HTML). O Google nao se da ao trabalho de estimar abaixo disso. Nos primeiros meses o site
vai estar duas ordens de grandeza abaixo do menor numero que o Google considera digno de conta.
Isso nao e motivo pra desistir, e motivo pra nao esperar dinheiro no semestre 1.
50.000 page views/mes x 13,37 / 1000 = **US$ 668/mes**, que e o primeiro degrau real de renda.

---

## 4. A PERGUNTA DO FORMATO: 40 SEGUNDOS OU 5 MINUTOS?

Esta e a pergunta que decide a arquitetura. Fui atras do MECANISMO de pagamento, nao de opiniao
de blog de SEO. Quatro fatos abertos e lidos nesta sessao, e eles se encaixam num modelo unico.

### Fato 1: o AdSense paga por IMPRESSAO, nao por minuto

URL: https://support.google.com/adsense/answer/14129646?hl=en (aberta 12:12 BRT)
Titulo: "FAQs about AdSense updating its revenue share structure"
Literal: "We are making two changes: updating AdSense's revenue-share structure and **moving to
paying publishers by impression**."

E a metrica base, URL https://support.google.com/adsense/answer/112030?hl=en (aberta 12:11 BRT):
"Page RPM = (Estimated earnings / Number of page views) * 1000". Exemplo do proprio Google na
pagina: US$ 0,15 em 25 page views = Page RPM de US$ 6,00.

O denominador e PAGE VIEW. Nao e minuto, nao e sessao, nao e scroll.

### Fato 2: o tempo na pagina NAO vira impressao extra. Recarregar anuncio e proibido

URL: https://support.google.com/adsense/answer/1346295?hl=en (aberta 12:12 BRT), secao
"Auto-refreshing ads". Literal: "Publishers are not permitted to refresh a page or an element
of a page without the user requesting a refresh. This includes placing ads on pages or in
placements that auto-refresh."

Consequencia direta e brutal: se a pessoa fica 5 minutos parada lendo a MESMA tela com O MESMO
anuncio, isso continua sendo uma impressao. O tempo so vira dinheiro se virar SCROLL passando
por outro bloco de anuncio, ou CLIQUE indo pra outra pagina.

Reforco: o Google esta aposentando as metricas de sessao. URL
https://support.google.com/adsense/answer/6373314?hl=en (aberta 12:11 BRT), literal:
"Note: We'll be retiring session-related metrics in AdSense from September 2025."
O Google esta desligando o vocabulario de "sessao". A unidade que sobra e impressao por page view.

### Fato 3: quantos anuncios cabem numa pagina e funcao da ALTURA do conteudo

Coalition for Better Ads (o padrao que o Chrome usa pra filtrar anuncio).
URLs abertas 12:14 BRT:
- https://www.betterads.org/standards/
- https://www.betterads.org/mobile-ad-density-higher-than-30/
- https://www.betterads.org/desktop-ad-density-above-30-percent-sticky-video

Literal (mobile): "Ads that take up more than 30% of the vertical height of a page. Ad density is
determined by **summing the heights of all ads within the main content portion of a mobile page,
then dividing by the total height of the main content portion of the page**."
Desktop: acima de 50%, e acima de 30% se combinado com sticky video.
E: "The main content portion of the page excludes headers, footers and site navigation."

Ou seja: **o inventario de anuncio de uma pagina e literalmente 30% da altura do texto dela.**
Pagina curta = pouco pixel = pouco anuncio. Isso e regra escrita, nao teoria.

### Fato 4: eu MEDI duas paginas reais, agora, com navegador

**Pagina de ferramenta.** https://www.calculator.net/tile-calculator.html
Aberta e medida por JavaScript no navegador, 12:08 BRT, viewport 1200px:
- altura do documento inteiro: **1.870 px**
- altura do conteudo principal (`#content`): **1.737 px**
- blocos de anuncio renderizados: **1** (Google Ad Manager, 336x280 = 280 px de altura)
- densidade real: 280 / 1.737 = **16,1%**

O maior site de calculadora dos Estados Unidos, com dominio antigo e trafego enorme, roda
**UM anuncio** numa pagina de ferramenta. Nao e falta de ganancia. E que nao cabe mais.
Teto pelo Better Ads: 30% de 1.737 px = 521 px = no maximo **2 blocos** de 250 px.

**Pagina de leitura.** https://www.bobvila.com/articles/kitchen-remodel-cost/
Aberta e medida, 12:10 BRT, mesmo viewport 1200px:
- palavras no `<article>`: **4.943**
- altura do `<article>`: **20.991 px**
- teto pelo Better Ads: 30% de 20.991 = 6.297 px = ate **25 blocos** de 250 px

(Os anuncios em si nao carregaram nesse navegador automatizado. Entao o numero de blocos REAIS
do bobvila e **nao verificado**. O que esta verificado e a altura e a contagem de palavras, e
com isso o TETO de inventario, que e o que interessa.)

**Razao de inventario, medida: 6.297 / 521 = 12,1 vezes.**
Uma pagina de leitura longa comporta 12x mais pixel de anuncio que uma pagina de ferramenta.
Por page view.

### Fato 5: mas o usuario nao le a pagina inteira. Isso corta o 12x

Contentsquare, 2026 Digital Experience Benchmark, 99 bilhoes de sessoes, 6.500 sites, 9 setores.
URL: https://contentsquare.com/guides/digital-experience-benchmark/engagement/ (aberta 12:15 BRT)
Numeros lidos la:
- tempo por sessao no desktop: **4:46**
- tempo por sessao no mobile: **2:20**
- scroll rate desktop: **50,5%** | scroll rate mobile: **45,2%**
- variacao ano a ano: tempo no site **-7%**, page views por sessao **-1%**, scroll rate **-2%**

Duas leituras que doem:

1. **"Cinco minutos na pagina" nao existe.** 4:46 e o tempo de uma SESSAO INTEIRA no desktop, e
   2:20 no celular. A pagina de leitura de 5 minutos e uma fantasia de quem nunca olhou o dado.
2. **O usuario medio ve metade da pagina.** Scroll rate ~45-50%. Entao dos 25 blocos possiveis,
   metade nunca aparece. E o Google paga por impressao renderizada e vista.

Modelo corrigido de impressoes por page view:
- pagina de ferramenta: 1 bloco, acima da dobra, quase 100% visto = **~1 impressao**
- pagina de leitura com 8 blocos e 50% de scroll = **~4 impressoes**

**Vantagem real da pagina de leitura: da ordem de 4x por page view, nao 12x.**

### Fato 6: o texto tambem decide QUAL anuncio aparece, e isso mexe no preco

URL: https://support.google.com/adsense/answer/9713?hl=en (aberta 12:16 BRT)
"How ads are targeted to your site", literal, sobre segmentacao contextual:
"Our technology uses such factors as **keyword analysis, word frequency, font size**, and the
overall link structure of the web, in order to determine what a webpage is about and precisely
match Google ads to each page."

Le de novo: **word frequency**. Frequencia de palavra.
Uma pagina que e so um formulario e um numero **nao tem palavra**. Ela nao entrega ao Google o
sinal contextual que puxa o anuncio caro de Home & Garden. E Home & Garden Americas e justamente
o RPM de 13,37, o maior da tabela inteira. Uma ferramenta muda tem grande chance de nao ser
classificada como Home & Garden coisa nenhuma, e cair no anuncio generico de sobra.

Isso NAO esta medido nesta sessao. Que a segmentacao usa frequencia de palavra, esta escrito na
documentacao do Google e verificado. Que uma calculadora sem texto ganha RPM menor por causa
disso, e inferencia minha a partir do mecanismo. Marcar como inferencia, nao como fato.

### VEREDITO DO ANGULO DINHEIRO

Pelo dinheiro puro, sem considerar trafego: **pagina de leitura ganha, por volta de 4x por page view.**

Mas essa nao e a pergunta certa, e por isso ela e uma armadilha. Porque:

- A pagina de leitura de 4.943 palavras sobre custo de cozinha JA EXISTE, e e do bobvila.com,
  com 20 anos de dominio. Dominio novo nao ganha essa briga em 2026.
- A pagina de ferramenta ganha link, ganha volta, ganha boca a boca. Mas rende 1 impressao.
- E, o mais importante pro objetivo unico do projeto: **uma pagina que e so um formulario e
  exatamente a definicao do "low value content" que ja reprovou o dono nove vezes.**

Escolher entre os dois e escolher entre nao ser aprovado e nao ter trafego.

---

## 5. O QUE A CONTA MANDA CONSTRUIR

A equacao inteira do dinheiro, montada com o que foi verificado acima:

```
receita  =  page views  x  impressoes por page view  x  eCPM
```

Tres alavancas. A escolha do formato mexe nas TRES ao mesmo tempo, e por isso ela decide tudo.

| alavanca | o que a manda pra cima | fonte verificada |
|---|---|---|
| page views | mais paginas por sessao (1,0 -> 1,6 corta 37% do trafego necessario) | aritmetica da secao 3 |
| impressoes por page view | ALTURA de texto (teto = 30% da altura do conteudo) x scroll de ~45-50% | betterads.org + Contentsquare |
| eCPM | PALAVRAS na pagina, porque a segmentacao usa "word frequency" | support.google.com/adsense/answer/9713 |

As tres alavancas apontam pro mesmo lugar, e nao e nem calculadora nem artigo:

> **A ferramenta certa e a que a pessoa PREENCHE em 40 segundos e cujo RESULTADO ela LE por
> cinco minutos.** Entrada de ferramenta. Saida de documento.

Isso nao e meio termo covarde. E a unica forma da conta fechar:
- **entrada curta** ganha o clique e o link, que e o que dominio novo precisa
- **saida longa** cria o pixel e a palavra, que e o que o AdSense paga
- **saida longa** e tambem o que demonstra valor pro revisor do AdSense em vez de afirmar valor
- e cada item da saida longa aponta pra uma pagina estatica explicando aquele item, o que
  entrega a segunda page view da sessao

### Como julgar candidato de ferramenta, pelo dinheiro

Tres perguntas. Se a resposta for nao em qualquer uma, a ferramenta nao paga o site.

1. **A saida e um DOCUMENTO ou e um NUMERO?** Numero rende 1 impressao. Documento rende 4.
2. **A ferramenta precisa de preco pra funcionar?** Se precisar, ela e uma divida: preco
   apodrece, e ja despublicou quatro artigos no outro site do dono. Ferramenta que so verifica
   PRESENCA e AUSENCIA de itens nao tem preco pra apodrecer.
3. **Cada linha da saida vira uma pagina estatica que ranqueia sozinha?** Se virar, o site tem
   superficie de busca sem precisar brigar de frente com bobvila e Home Depot pela palavra grande.

Aplicando as tres perguntas nas hipoteses que estavam na mesa:

| formato | saida e documento? | precisa de preco? | vira pagina estatica? | veredito do dinheiro |
|---|---|---|---|---|
| calculadora de metro quadrado | nao, e um numero | nao (usuario digita) | pouco | 1 impressao. mercado lotado. pior opcao |
| conferidor de orcamento (o que FALTA na proposta) | SIM, lista longa comentada | **nao**, so checa presenca | SIM, um item = uma pagina | **melhor dos tres eixos** |
| sequenciador de etapas da obra | SIM, lista ordenada com avisos | nao | SIM | forte |
| tradutor de jargao de obra | nao, e uma definicao | nao | SIM, otimo | fraco como ferramenta, otimo como biblioteca |
| guia de perguntas pro empreiteiro | SIM, lista impressa | nao | SIM | forte, e casa com a fala do dono |

### O encaixe com a fala do dono, que e o que importa

Ele disse o bloqueio com todas as letras: *"ninguem fala essas coisas antes da obra, voce sempre
tem que perguntar pro cara da obra que as vezes te engana."*

O que falta pra essa pessoa **nao e um numero. E um documento que ela nao tem.**
Ela nao quer saber quanto custa. Ela quer chegar na conversa sabendo o que perguntar, o que tem
que estar escrito no papel, e o que some do orcamento quando ninguem olha.

E aqui aparece a vantagem injusta, e ela e literal, nao metafora:

**Ulisses passou 14 anos produzindo exatamente esse objeto.** Ordem de dia, decoupagem, mapa de
diaria, lista de plano, orcamento de producao. Todo filme e uma obra: gente cara, prazo curto,
fornecedor que cobra a mais, e um documento de pre-producao que existe justamente pra ninguem ser
enganado. Ele nao vai inventar um formato novo. Ele vai **traduzir a ordem do dia de set para a
obra de uma casa**, e ele sabe fazer esse documento parecer serio e bonito, coisa que nenhum
site de calculadora sabe.

Reforma nao e assunto tecnico, e emocional, como o dono disse. O documento resolve a emocao:
a pessoa entra com medo de ser passada pra tras e sai com uma folha na mao.

### O primeiro degrau, em numero

- **US$ 100/mes**: 7.479 a 33.333 page views/mes conforme o RPM real. E o degrau que interessa
  porque US$ 100 e o valor que a propria pagina de pagamentos do Google usa de exemplo de limiar
  ("Let's say the payment threshold for your account is $100" -
  https://support.google.com/adsense/answer/1709858?hl=en). Antes disso o dinheiro nem sai.
- **US$ 668/mes**: e onde a calculadora do Google COMECA a estimar (50.000 page views/mes).
- **US$ 2.000/mes**: 149.589 page views/mes no cenario bom, ate 666.667 no cenario ruim.

Com 1,6 pagina por sessao, US$ 2.000/mes = **93.493 visitas por mes**. Esse e o alvo real.

---

## 6. O QUE EU **NAO** VERIFIQUEI (nao usar como fato)

1. **Quanto o RPM 13,37 vale na pratica para um site novo.** E numero da pagina de marketing do
   Google. Nao achei nesta sessao nenhum dado publico de RPM real de site de casa e reforma.
   Nao verificado.
2. **Quantos blocos de anuncio o bobvila.com realmente roda.** Os anuncios nao carregaram no
   navegador automatizado. Medi altura (20.991 px) e palavras (4.943). O numero de blocos e
   nao verificado. Usei o TETO do Better Ads, nao o real.
3. **Se pagina sem texto realmente ganha eCPM menor.** O mecanismo (segmentacao por
   "word frequency") esta na documentacao do Google e foi lido. A consequencia em dolar e
   inferencia minha. Nao verificado.
4. **O valor exato do payment threshold em USD.** A tabela de limiares por moeda em
   https://support.google.com/adsense/answer/1709871?hl=en nao renderizou no meu fetch (e
   carregada por JavaScript). Os US$ 100 que citei sao o EXEMPLO usado pelo Google na pagina
   1709858, nao a tabela oficial. Nao verificado.
5. **Volume de busca, sazonalidade e dificuldade de ranquear qualquer termo.** Fora do meu
   angulo e nao verificado por mim.
6. **Quanto tempo a pessoa fica numa pagina de ferramenta versus numa pagina de artigo,
   especificamente.** O Contentsquare da tempo por SESSAO e scroll rate agregados por
   dispositivo e setor, nao por tipo de pagina. Nao existe, nesta sessao, dado publico de
   "tempo em pagina de calculadora". Nao verificado.
7. **Pages per session especificas de site de reforma.** Os cenarios de 1,0 a 2,5 da secao 3
   sao cenarios que eu montei pra mostrar a sensibilidade, nao medicoes. Explicitamente
   hipoteticos.

---

## 7. LOG DE URLS ABERTAS NESTA SESSAO
Data: 2026-08-23. Fuso: America/Sao_Paulo (BRT). Sessao 12:02 as 12:20.

| hora | URL | o que tirei dali |
|---|---|---|
| 12:03 | https://adsense.google.com/start/calculator-data.json | 75 linhas, multiplicadores oficiais. Home & Garden Americas = 13.37 |
| 12:06 | https://adsense.google.com/intl/en_us/start/ | "Monthly page views", "Your potential yearly earnings", `$`, slider min 50.000 |
| 12:06 | https://adsense.google.com/start/static/revamp/index.min.js?cache=722cf4d | formula literal: `Math.round(a/1E3 * multiplier * 12)` |
| 12:07 | https://adsense.google.com/start/calculator-data.json (Accept-Language: en-US) | multiplicadores identicos ao pt-BR |
| 12:08 | https://www.calculator.net/tile-calculator.html | medido: conteudo 1.737 px, 1 bloco de anuncio 336x280, densidade 16,1% |
| 12:10 | https://www.bobvila.com/articles/kitchen-remodel-cost/ | medido: 4.943 palavras, `<article>` 20.991 px |
| 12:11 | https://support.google.com/adsense/answer/112030?hl=en | Page RPM = (earnings / page views) * 1000 |
| 12:11 | https://support.google.com/adsense/answer/6373314?hl=en | metricas de sessao aposentadas a partir de set/2025 |
| 12:12 | https://support.google.com/adsense/answer/14129646?hl=en | "moving to paying publishers by impression" |
| 12:12 | https://support.google.com/adsense/answer/1346295?hl=en | proibicao de auto-refresh de anuncio |
| 12:14 | https://www.betterads.org/standards/ | lista de experiencias abaixo do padrao, desktop e mobile |
| 12:14 | https://www.betterads.org/mobile-ad-density-higher-than-30/ | densidade > 30% = altura dos anuncios / altura do conteudo principal |
| 12:14 | https://www.betterads.org/desktop-ad-density-above-30-percent-sticky-video | desktop: 50%, ou 30% com sticky video |
| 12:15 | https://contentsquare.com/guides/digital-experience-benchmark/engagement/ | 99 bi de sessoes; desktop 4:46 e scroll 50,5%; mobile 2:20 e scroll 45,2% |
| 12:16 | https://support.google.com/adsense/answer/9713?hl=en | segmentacao contextual usa "keyword analysis, word frequency, font size" |
| 12:18 | https://support.google.com/adsense/answer/1709858?hl=en | exemplo de limiar de pagamento de US$ 100 |
| 12:18 | https://support.google.com/adsense/answer/1709871?hl=en | pagina de limiares; tabela por moeda nao renderizou |

Arquivo fechado 12:20 BRT de 2026-08-23.
