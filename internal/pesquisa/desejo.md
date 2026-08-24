# Angulo DESEJO: o que as pessoas assistem, o que elas sentem, e onde elas quebram

Sessao aberta 2026-08-23, 12:02 BRT (UTC-3). Agente sozinho, angulo unico.
REGRA APLICADA: so entra aqui o que foi ABERTO e LIDO nesta sessao. Cada numero com URL.

Nota tecnica de acesso: `jchs.harvard.edu` devolve 403 para curl e para WebFetch.
Tudo do Harvard foi lido dentro do navegador (Playwright), com `fetch` na propria
origem jchs.harvard.edu, status 200 confirmado. Google Search tambem devolve 403
para automacao; onde precisei de SERP usei Bing e Pinterest Trends.

STATUS: COMPLETO.

---

## 1. O MERCADO EXISTE E E ENORME. Harvard JCHS, lido hoje

### 1.1 O salto da pandemia, na fonte mais recente do Harvard
Post do JCHS de **20 de agosto de 2026** (tres dias atras), "Bigger Market, More
Players: What 20 Years of Data Reveal About the Remodeling Industry":

> "In 2023, property owners spent over $600 billion annually making improvements,
> replacing broken systems, repairing damage, or conducting routine maintenance on
> their properties, up from just $400 billion in 2019."

E, sobre a industria em si:

> "A surge in activity drove the creation of tens of thousands of new remodeling
> contractor establishments and doubled their receipts between 2012 and 2022."

URL: https://www.jchs.harvard.edu/blog/bigger-market-more-players-what-20-years-data-reveal-about-remodeling-industry
Data na pagina: August 20, 2026. Lido 2026-08-23 ~12:04 BRT.

Isso confirma a tese do dono com numero do Harvard: de 400 para 600 bilhoes de
dolares por ano, e o proprio Harvard atribui o salto a Covid-19.

### 1.2 O indice LIRA, estado atual (o mercado esfriou, mas nao encolheu)
LIRA mais recente lida: post de **23 de julho de 2026**, "Remodeling Spending
Poised for Further Slowdown":

> "Year-over-year growth in renovation and repair spending is expected to slow to
> just 0.5 percent in the second quarter of 2027."
> "spending projected to be $519 billion through mid-2027"

URL: https://www.jchs.harvard.edu/blog/remodeling-spending-poised-further-slowdown

LIRA anterior, press release de **abril de 2026** (o proximo release foi 23/07/2026),
"Remodeling Growth to Slow Sharply in Early 2027", com falas nomeadas:

> Rachel Bogardus Drew, Director of the Remodeling Futures Program: "Growth in
> remodeling permits and retail spending on building products has been flat
> recently, signaling stagnant interest in home improvement... total improvement
> and repair expenditures edging up modestly to $523 billion in early 2027."
> Chris Herbert, Managing Director: "Remodeling follows the overall housing market."

URL: https://www.jchs.harvard.edu/press-releases/remodeling-growth-slow-sharply-early-2027

LIRA de janeiro de 2026 (revisado em 15/04/2026, porque o release original tinha
erro de formula que inflava o crescimento):

> "year-over-year growth in home renovation and repair spending will be 2.1 percent
> in the middle of this year before easing to 1.6 percent growth by the end of the year"
> "overall annual homeowner spending on improvements is expected to reach $518
> billion by the end of 2026" (Rachel Bogardus Drew)

URL: https://www.jchs.harvard.edu/press-releases/remodeling-growth-set-downshift-late-2026
Data na pagina: January 26, 2026, Revised April 15, 2026.

**LEITURA IMPORTANTE PARA A FERRAMENTA**: o mercado esfriou em CRESCIMENTO mas o
patamar segue em ~520 bilhoes por ano. E o proprio Harvard diz por que esfriou:
juros, vendas de casa fracas, e "retail spending on building products has been flat".
Ou seja: as pessoas NAO pararam de querer. Elas pararam de GASTAR. Quem quer e nao
gasta e exatamente quem pesquisa. O publico da ferramenta e maior num mercado que
esfria, nao menor.

---

## 2. O BLOQUEIO TEM NUMERO DO HARVARD, E ELE E DE DINHEIRO E DE IDADE DA CASA

Post do JCHS "Many Owners Cannot Afford to Maintain Aging Homes":

> "In 2023, the housing stock reached a median age of 44 years, up from 39 years in
> 2013, and 28 years in 1993."
> "In 2023, one in four homeowners (22 million households) lived in a home built
> before 1960."
> "In 2023, owners living in homes built before 1960 spent an average of $6,000 on
> improvements and maintenance, about 35 percent more than the $4,500 average for
> homes built in 2010 or later."
> "Among homeowners living in pre-1960 homes, owners in the highest income quintile
> spent an average of $12,700 on improvements and repairs in 2023, three times the
> $3,400 average for owners in the lowest income quintile."

Composicao do gasto por idade da casa (mesma fonte, tabulacoes do AHS 2023 do HUD):
- Casas pre-1960: manutencao 22% do gasto; substituicoes (telhado, siding, janelas,
  isolamento, HVAC) 39%; melhorias externas (cerca, paisagismo, galpao, piscina) 10%;
  ampliacoes e varandas 8%.
- Casas de 2010 em diante: manutencao 16%; substituicoes 24%; melhorias externas 33%;
  ampliacoes e varandas 15%.

URL: https://www.jchs.harvard.edu/blog/many-owners-cannot-afford-maintain-aging-homes
Fonte citada na propria pagina: JCHS tabulations of HUD, 2023 American Housing Survey.

**LEITURA PARA A FERRAMENTA**: 22 milhoes de domicilios americanos moram em casa
anterior a 1960. Essas casas nao pedem "cozinha bonita" primeiro. Elas pedem
substituicao: telhado, janela, HVAC, isolamento. 39% do gasto. E justamente a
categoria onde a pessoa mais depende do empreiteiro para saber qualquer coisa, e
onde o orcamento tem mais item invisivel. O sonho e cozinha. A conta e telhado.


---

## 3. QUANTO ELA PLANEJA GASTAR EM 2026. Houzz & Home 2026

Nao consegui abrir houzz.com (403 para curl, 403 para WebFetch, e "Access Restricted"
para o Playwright). Abri a cobertura da Forbes, que reporta o estudo com numeros.

Forbes, Terri Williams, **22 de abril de 2026**, sobre o Houzz & Home 2026
(mais de 20.000 respondentes nos EUA):

| Projeto | % reformando ou planejando | Gasto mediano |
|---|---|---|
| Cozinha | 26% | US$ 24.000 (subiu de 22.000) |
| Banheiro de visita | 25% | US$ 7.000 (subiu de 6.000) |
| Banheiro principal | 23% | US$ 15.000 (subiu de 13.000) |
| Telhado | 22% | US$ 13.000 |
| Janelas e claraboias | 20% | US$ 7.000 |
| Pintura externa | 19% | US$ 2.500 |
| Calhas | 19% | US$ 2.000 |
| Sala de estar | 18% | US$ 5.000 |
| Portas externas | 17% | US$ 3.000 |
| Quarto de visita | 15% | US$ 1.500 |
| Quarto principal | 14% | US$ 1.700 |

URL: https://www.forbes.com/sites/terriwilliams/2026/04/22/houzz--reveals-most-popular-interiorexterior-home-renovation-trends/

### O GATILHO DA REFORMA, e ele NAO e inspiracao
Mesma fonte, motivos declarados:

- **40%** dizem que "finalmente tem tempo"
- **40%** dizem que estao "financeiramente prontos"
- **20%** compraram a casa recentemente
- **19%** estao lidando com dano por idade da casa
- **16%** estao se adaptando a mudanca de vida

**Nenhum desses motivos e "vi uma coisa bonita".** Guarde isso. E o eixo da resposta.

---

## 4. O NUCLEO DO MEU ANGULO: O SONHO E A BUSCA SAO DUAS SESSOES DIFERENTES

Testei isso de forma direta, hoje, na mesma plataforma, no mesmo pais, na mesma hora.

### 4.1 O que ela ASSISTE (YouTube, busca US/EN, lida 2026-08-23 ~12:12 BRT)
Busca: `home renovation before and after`
(https://www.youtube.com/results?search_query=home+renovation+before+and+after&gl=US&hl=en)

Contagens de views lidas na propria SERP:

| Views | Titulo |
|---|---|
| 29.019.964 | Couple Transforms $1.5M Burned Mansion Into a Luxury Dream Home |
| 8.440.885 | I BOUGHT an ABANDONED HOUSE & RENOVATED IT IN ONE YEAR |
| 8.097.903 | 365 DAYS HOUSE RENOVATION TIMELAPSE |
| 7.670.185 | ABANDONED Mansion To Luxury Home, 5 years in 30 minutes |
| 1.948.096 | Abandoned House Turned Into a Dream Home, Full Transformation |
| 1.513.080 | Stunning Modern Home Renovation, Before and After House Tour |
| 1.285.109 | Ugly House To Lovely House With George Clarke |
| 1.036.271 | Watch the BEST Renovations of Historic Homes, HGTV |
| 853.630 | I Spent Three Years Renovating My House (Before & After) |
| 777.037 | Property Brothers, Turn Outdated Homes into Dream Homes |

A tese do dono esta certa e tem numero: **29 milhoes de views num video so.**
E note o formato que ganha: casa abandonada, casa queimada, timelapse de 365 dias,
"5 anos em 30 minutos". Nao e tutorial. E redencao. A pessoa assiste uma ruina virar
lar. O vicio nao e por reforma, e por transformacao com final feliz.

### 4.2 O que ela BUSCA (mesma plataforma, mesmo dia)
Busca: `how to read a contractor estimate`

| Views | Titulo |
|---|---|
| **8** | **How to Read a Contractor Estimate (And Spot Red Flags)** |
| 21 | How to read a construction estimate before you sign anything |
| 39 | Intro |
| 1.661.051 | How To: Reading Construction Blueprints & Plans (para profissional) |
| 426.675 | How to Estimate Construction Projects as a General Contractor (para profissional) |

Busca: `what order to renovate a house`

| Views | Titulo |
|---|---|
| 45 | What Is the Correct Order to Renovate Your House? |
| 1.882 | What Are the Right Home Renovation Orders |
| 15.396 | 5 renovation steps to prevent thousands in mistakes |
| 191.909 | My 20 Steps To A Perfect Renovation |
| 371.141 | 5 Things I Wish I Knew Before Renovating My House + Cost Breakdown |

Busca: `questions to ask a contractor before hiring`

| Views | Titulo |
|---|---|
| 361 | Introduction |
| 1.198 | Important Questions to Ask Before Hiring a Contractor |
| 3.525 | How To Choose A General Contractor |
| 147.562 | A Guide to Hiring the BEST Contractor |
| 621.376 | 7 Ways Roofing Contractors Cut Corners (formato "denuncia", nao "guia") |

### 4.3 A prova em autocomplete
Puxei o autocomplete ao vivo do Google e do YouTube, geo US, ingles,
endpoint publico `suggestqueries.google.com/complete/search`, em 2026-08-23 ~12:10 BRT.

- **YouTube**, semente `what order to renovate` devolve **1** sugestao.
- **Google**, semente `what order to renovate a` devolve **10**:
  house, room, bathroom, house uk, kitchen, bedroom, remodel a house,
  restore a car, remodel a room, remodel a bathroom.

- **YouTube**, semente `questions to ask contractor` derrapa para `questions to ask interviewer`.
- **Google**, semente `what questions to ask a contractor` devolve **10**, uma por oficio:
  before hiring, roofing, general, painting, building, siding, bathroom, concrete, kitchen.

### 4.4 CONCLUSAO DO ANGULO
**O video cria o desejo e NAO cria a busca. Ele cria humor.**
A pessoa assiste 29 milhoes de vezes a redencao de uma casa e nao digita nada.
Ela digita quando **um NUMERO entra na historia dela**.

O momento exato, e ele tem tres portas de entrada, todas confirmadas pelo Houzz:
1. **O orcamento chegou.** Um empreiteiro mandou um PDF e ela nao sabe le-lo.
2. **Algo quebrou.** 19% citam dano por idade da casa. Nao ha sonho aqui, ha urgencia.
3. **Ela decidiu que pode.** 40% "financeiramente prontos", 40% "finalmente tem tempo",
   20% acabaram de comprar a casa.

Entre a porta 1/2/3 e o empreiteiro existe uma noite. E nessa noite que ela digita.
A ferramenta precisa estar ali. Nao no feed. Na busca.

---

## 5. O QUE ELA DIGITA NESSE MOMENTO (autocomplete ao vivo, Google, geo US)

Fonte: `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=SEMENTE`
Endpoint publico, sem chave, sem login. Puxado 2026-08-23 entre 12:09 e 12:12 BRT.
Autocomplete profundo (10 sugestoes) indica volume real. Sugestao vazia indica que
ninguem digita aquilo. Isso e um instrumento de medida, nao uma impressao.

### CLUSTER A. ORDEM E SEQUENCIA (autocomplete cheio, 10/10)
```
what order to renovate a house / a room / a bathroom / a kitchen / a bedroom
what order should i renovate my house / my kitchen / my bathroom
in what order should i renovate a room
renovation order of operations
kitchen renovation order of operations
bathroom renovation order of operations
home renovation order of operations
what order should renovations be done in
```
Ela nao esta perguntando quanto custa. Esta perguntando **por onde comeco sem me ferrar**.

### CLUSTER B. PRAZO E CRONOGRAMA, e ela quer um OBJETO
```
remodel timeline
remodel timeline template
remodeling timeline chart
kitchen remodel timeline template
bathroom remodel timeline
home remodel timeline
basement remodel timeline
how long does a kitchen remodel take / usually take / take reddit
```
As palavras `template`, `chart`, `pdf`, `excel` aparecem coladas. Ela quer sair da
pagina com uma COISA na mao, nao com um paragrafo.

### CLUSTER C. CHECKLIST, mesmo padrao de objeto
```
renovation checklist template
renovation checklist by room pdf
renovation checklist template excel
renovation checklist pdf
what to do before renovating a house
what to know before renovating an old house
```

### CLUSTER D. O QUE PERGUNTAR AO EMPREITEIRO, uma por oficio
```
what questions to ask a contractor before hiring
what questions to ask a roofing contractor
what questions to ask a general contractor
what questions to ask a painting contractor
what questions to ask a building contractor
what questions to ask a siding contractor
what questions to ask a bathroom contractor
what questions to ask a concrete contractor
what questions to ask a kitchen contractor
```
Isso e literalmente a frase do dono: "ninguem fala isso antes da obra".

### CLUSTER E. LER O ORCAMENTO (o momento exato do PDF na caixa de entrada)
```
what should a contractor's estimate include
what should a construction quote include
what does a contractor quote look like
do contractor quotes include materials
do contractors charge for quotes
how long should it take for a contractor to provide an estimate
contractor estimate too high
how to turn down a contractor quote
what is a change order in construction
```

### CLUSTER F. ARREPENDIMENTO E DESCONFIANCA
```
kitchen remodel regrets / bathroom remodel regrets / biggest kitchen remodel regrets
renovation mistakes to avoid
contractor red flags / contractor red flags to watch out for
can't afford to renovate my house
should i renovate or move
```

### O ACHADO MAIS IMPORTANTE DESTE BLOCO: o sufixo "reddit"
O proprio autocomplete do Google, nos EUA, hoje, sugere:
```
kitchen remodel cost reddit
kitchen remodel regrets reddit
bathroom remodel regrets reddit
how long does a kitchen remodel take reddit
contractor red flags reddit
renovation mistakes reddit
```
Seis clusters diferentes, o mesmo sufixo. **Ela ja decidiu que a web comercial mente
para ela e esta buscando gente real de proposito.** Isso e a tese do dono
("as vezes te engana") confirmada pelo autocomplete do proprio Google.

**Consequencia direta para o projeto:** um site novo que soar como marca, como folheto,
ou como "Meet the Review Board", perde para uma thread de Reddit. So ganha quem soar
como uma pessoa que ja passou por isso e mostra a conta. Isso e exatamente o que o
AdSense chama de demonstrar em vez de afirmar. As duas exigencias apontam para o
mesmo lugar. Isso e sorte e deve ser usada.

---

## 6. QUEM JA ESTA LA, e o estado real da vizinhanca (SERP US-EN, hoje)

Metodo: `html.duckduckgo.com/html/` com `kl=us-en`, um resultado por dominio.
Google Search devolve 403 para automacao e Bing mudou o HTML, por isso DDG.

### 6.1 "what order to renovate a house": GRANDE MIDIA, mas so ARTIGO
```
unfinishedman.com | renoplanner.ai | marthastewart.com | housebeautiful.com
housedigest.com | redfin.com | thespruce.com | renovate.com
freedomconstructionanddesign.com | yourhomeremodeled.com
```
Martha Stewart, House Beautiful, The Spruce, Redfin. Briga dura de autoridade.
**Mas todos os dez sao TEXTO.** Nenhum devolve a sequencia DELA para a obra DELA.
Um gerador nao compete com artigo pelo mesmo objeto de SERP.

### 6.2 "renovation timeline template": SERP MOLE, e por um motivo bom
```
smartsheet.com | lucensoftware.com | xlstemplate.com | templatelab.com
tomsplanner.com | repsona.com | designxcore.com | template.net
teamgantt.com | clickup.com
```
Dez resultados, dez empresas de software de projeto vendendo assinatura.
Todos pedem download de .xlsx ou cadastro. **Nenhum responde na propria pagina.**
Quem responde na hora, de graca, sem login, e imprimivel, ganha essa intencao.

### 6.3 "what should a contractor estimate include": O BURACO NOMEAVEL
```
eano.com | ezcontractpro.com | blazeestimating.com | build-folio.com
procore.com | northerndetailsllc.com | contractorquotechecker.com | estimationpro.ai
```
Olhe com atencao. `ezcontractpro`, `blazeestimating`, `procore`, `estimationpro.ai`,
`eano` sao software PARA EMPREITEIRO. Sao paginas que ensinam o empreiteiro a
ESCREVER um orcamento.

**A dona da casa que digita "what should a contractor estimate include" cai numa
pagina escrita para treinar o lado de la da mesa.** Ela procura defesa e recebe o
manual do outro time. Esse e o buraco mais limpo que encontrei na sessao inteira.

### 6.4 A vizinhanca "AI renovation planner" e uma FAVELA. Nao entre por ali.
Busca `renovation sequence generator free tool`:
```
blockrenovation.com | magica.com | homegpt.app | remodelai.io
planner5d.com | boardlab.ai | xlstemplate.com | 3dhouseplanner.com
```
Busca `home renovation order planner interactive`:
```
blockrenovation.com | houzz.com | roomylab.com | decorezz.com | planner5d.com
roomsketcher.com | livehome3d.com | scoperedi.com | renovaitor.com
```
Abri o segundo colocado, `magica.com/tools/free-ai-home-repair-sequence-generator`,
que ranqueia com o titulo "Free AI Home Repair Sequence Generator (No Login Required)".
HTTP 200, 147 KB, e o conteudo renderizado inteiro e:

> "Loading workspace Tool Not Found | Magica"

**Sete palavras. A ferramenta nao existe. E uma casca de SEO ranqueando.**
Entrar nesse bairro como "mais um planejador de reforma com IA" e se sentar ao lado
de paginas 404 e pedir para o Google e o AdSense te classificarem junto. Nao faca.

### 6.5 Os concorrentes nao tem autor, e um deles publica numero inventado
Abri tres e medi:

| Dominio | Palavras | Assinatura | Data | Fontes | Metodologia |
|---|---|---|---|---|---|
| magica.com (tool page) | 7 | nao | nao | nao | nao |
| scopegenerator.com | 957 | **nao** | **nao** | **nao** | **nao** |
| contractorquotechecker.com | 1009 | sim, "by Jake McEwen" | nao | nao | sim, pagina Methodology |

O scopegenerator.com abre a home com esta frase, copiada literalmente da pagina:

> "Stop Overpaying for Home Repairs. 73% of homeowners overpay because they don't
> know the real cost. Snap a photo, get the fair price for your area in 10 seconds."

Sem fonte, sem data, sem autor. E logo abaixo publica preco cru com CEP:
"Faucet replacement 1 EA $175 - $350, Plumbing 77007 Houston, TX".
URL: https://scopegenerator.com/ (lida 2026-08-23 ~12:16 BRT)

**Isso e exatamente a divida que o brief proibe.** Preco publicado que apodrece,
mais estatistica sem fonte. E o modelo que ja obrigou a despublicar quatro artigos.
Anotado aqui como o que NAO fazer, com endereco.

Ressalva honesta: `contractorquotechecker.com` tem assinatura e pagina de metodologia.
E o concorrente serio da faixa "confira seu orcamento". Nao esta vazio ali.

---

## 7. O QUE ISSO SUGERE DE FERRAMENTA

Julguei pelo trabalho que ela esta tentando fazer, nao pelo formato.
Nao assumi calculadora. Na verdade, o que encontrei desaconselha calculadora.

### 7.1 Por que calculadora de custo e a PIOR das opcoes verificadas
- Ela exige publicar preco, e preco apodrece. O scopegenerator.com esta fazendo isso
  agora e e o exemplo do problema, nao da solucao.
- O cluster de custo e o mais disputado: `kitchen remodel cost calculator`,
  `cost estimator`, `cost per square foot`, `cost 2026` sao todos autocomplete cheio,
  ou seja, todo mundo ja mora la.
- E, decisivo: o proprio autocomplete mostra que ela desconfia do numero
  (`kitchen remodel cost reddit`). Dar mais um numero sem rosto nao resolve a dor dela.

### 7.2 A recomendacao primaria: DECODIFICADOR DE ORCAMENTO, do lado DELA
Nome de trabalho: o que esse orcamento realmente diz.

A pessoa cola ou digita as linhas do orcamento QUE ELA RECEBEU. O site nao publica
preco nenhum. Ele devolve:
- o que cada linha significa em ingles humano (tradutor de jargao)
- o que esta FALTANDO ali que quase sempre volta como custo extra depois
- as perguntas exatas para mandar de volta ao empreiteiro, por escrito
- onde a linguagem abre espaco para change order

Por que essa e a mais forte:
1. **Zero preco publicado. Nada apodrece.** Ela digita o numero da etiqueta dela.
   Cumpre a restricao mais dura do brief sem esforco.
2. **Ataca o buraco de 6.3**, que e o mais limpo que achei: a SERP inteira dessa
   intencao e escrita para o empreiteiro.
3. **E o momento exato** que o brief pediu para eu encontrar: o PDF na caixa de entrada,
   as 23h, antes de responder.
4. E a frase do dono virada em produto: "voce sempre tem que perguntar pro cara da obra
   que as vezes te engana." Aqui ela pergunta antes, e para outra pessoa.

Risco honesto: `contractorquotechecker.com` ja esta ali, com autor e metodologia.
Nao e terreno vazio.

### 7.3 A recomendacao secundaria, e para dominio de autoridade zero ela pode ser melhor:
### SEQUENCIADOR DE OBRA que devolve um plano imprimivel
Nome de trabalho: em que ordem, e por que nessa ordem.

Ela marca os comodos e os itens, e recebe a SEQUENCIA da obra dela, com a razao de
cada precedencia, numa pagina que imprime. Sem preco. Sem login. Sem download.

Por que:
1. Cluster A e o autocomplete mais profundo e mais variado que encontrei.
2. A SERP de 6.2 e mole por uma razao aproveitavel: dez empresas de SaaS pedindo
   download de planilha. Resposta instantanea na pagina vence isso.
3. Sequencia nao apodrece. Encanamento vem antes do piso hoje, ano que vem tambem.
   E o unico tipo de conteudo util em reforma com prazo de validade infinito.
4. `template`, `chart`, `pdf` no autocomplete significam que ela quer um OBJETO.
   HTML e CSS imprimem. Isso e de graca e nenhum SaaS entrega sem cadastro.

### 7.4 A ponte com a vantagem do dono, e sem ela nada disso e fosso
Todo concorrente que abri hoje nao tem autor, nao tem data e nao tem fonte.
O melhor deles tem um nome e uma pagina de metodologia. Nenhum tem IMAGEM propria.

Ulisses dirige ha 14 anos e fez campanha nacional para Starbucks, Disney, Nestle,
Yamaha e Carrefour. O que ele tem e a coisa que a categoria inteira nao tem:
**ele sabe mostrar uma sequencia visualmente.**

O sequenciador e o formato que usa isso. A ordem de uma obra e literalmente uma
decupagem: o que entra em cada etapa, e por que essa vem antes daquela. E um
storyboard de obra. Um site de template nunca vai desenhar isso. Um SaaS de Gantt
tambem nao.

E ha um encaixe que vale registrar: o video prova (secao 4.1) que o formato que a
America assiste 29 milhoes de vezes e **transformacao com passagem de tempo**,
timelapse de 365 dias, "5 anos em 30 minutos". O sequenciador e a versao util
e estatica dessa mesma emocao. E o timelapse que ela pode aplicar na propria casa.
O desejo que o YouTube criou tem, pela primeira vez, um lugar para ir.

### 7.5 Um formato que eu descartaria, e por que
"Mais um planejador de reforma com IA". Ver 6.4. A vizinhanca esta ocupada por
cascas de SEO, incluindo uma pagina que ranqueia e devolve "Tool Not Found".
Para um dominio comprado ontem, sentar ali e risco de classificacao, nao atalho.

---

## 8. A SURPRESA DA SESSAO

Um video no YouTube chamado **"How to Read a Contractor Estimate (And Spot Red Flags)"**
tem **8 views**.

Na mesma plataforma, no mesmo pais, no mesmo dia, um video de casa queimada virando
mansao tem **29.019.964 views**.

Razao entre os dois: cerca de tres milhoes e meio para um.

A dor que o dono descreve, com todas as letras, e exatamente o titulo do video de 8 views.
O que isso significa nao e que a dor nao existe. O Houzz mostra 26% dos americanos
mexendo na cozinha, e o Harvard mostra 520 bilhoes de dolares por ano.

Significa que **essa dor nao e assistivel.**
Ninguem se senta no sofa com a familia para assistir alguem ler um orcamento.
Ela e vivida sozinha, com um PDF aberto, tarde da noite, com raiva e vergonha de
nao entender. E entao ela nao abre o YouTube. Ela abre a busca e digita
"what should a contractor's estimate include" e, se ainda desconfiar, acrescenta
"reddit" no final.

Foi por isso que a pergunta do brief tinha resposta.
**O programa de reforma nao e o funil. E o clima.**
O funil e a noite depois que o numero chega.

---

## 9. NAO VERIFICADO. Coisas que eu NAO consegui abrir e que ninguem deve escrever

- **houzz.com direto.** 403 para curl, 403 para WebFetch, "Access Restricted" para
  Playwright. Os numeros do Houzz & Home 2026 na secao 3 vem da cobertura da Forbes
  de 22/04/2026, nao do relatorio original. Nao afirme "segundo o Houzz" citando a
  Houzz. Cite a Forbes, ou consiga o PDF original antes de publicar.
- **Sem numero de TikTok, Instagram ou Pinterest verificado por mim.** Vi resultados de
  busca com estatisticas de engajamento (Dash Social, benchmarks de 2026), mas
  dashsocial.com devolveu 403 e eu NAO abri a pagina. Nao use nenhum desses numeros.
  O unico dado de Pinterest que eu li de verdade foi a pagina publica trends.pinterest.com
  com pais US, em 2026-08-23 ~12:07 BRT, onde a tendencia numero 3 em destaque era
  "Apartment Rooms, 300% mensal, popular em Decoracao". So isso.
- **Improving America's Housing 2025, o PDF do press release.** O fetch devolveu 200 e
  106 KB, mas e PDF binario e eu nao extrai o texto. Os numeros de 400 para 600 bilhoes
  que estao na secao 1.1 NAO vem desse PDF, vem do post do JCHS de 20/08/2026, que eu li.
  Use a URL do post.
- **Volume absoluto de busca.** Autocomplete mede que a consulta existe e e frequente
  o bastante para ser sugerida. **Nao mede quantas buscas por mes.** Nao converta
  profundidade de autocomplete em numero de buscas. Nao publique volume estimado.
- **Ranking no Google.** Usei DuckDuckGo com kl=us-en porque o Google devolve 403 para
  automacao. A ordem no Google e diferente. Trate a secao 6 como mapa de quem existe
  na vizinhanca, nao como posicao no Google.
- **Nao li nenhuma thread do Reddit nesta sessao.** O sufixo "reddit" e um achado do
  autocomplete do Google, nao uma leitura do Reddit. Nao cite post nenhum.
- **A pagina do contractorquotechecker.com** eu medi por regex, nao li com atencao.
  Antes de decidir a ferramenta 7.2, alguem precisa abrir e ler esse concorrente
  de verdade.

---

## 10. FONTES ABERTAS NESTA SESSAO (2026-08-23, 12:02 a 12:20 BRT, UTC-3)

Harvard Joint Center for Housing Studies, via Playwright, status 200:
1. https://www.jchs.harvard.edu/blog/bigger-market-more-players-what-20-years-data-reveal-about-remodeling-industry (data na pagina: 20/08/2026)
2. https://www.jchs.harvard.edu/blog/remodeling-spending-poised-further-slowdown (23/07/2026)
3. https://www.jchs.harvard.edu/press-releases/remodeling-growth-slow-sharply-early-2027
4. https://www.jchs.harvard.edu/press-releases/remodeling-growth-set-downshift-late-2026 (26/01/2026, revisado 15/04/2026)
5. https://www.jchs.harvard.edu/blog/many-owners-cannot-afford-maintain-aging-homes
6. https://www.jchs.harvard.edu/research-areas/remodeling
7. https://www.jchs.harvard.edu/research

Imprensa:
8. https://www.forbes.com/sites/terriwilliams/2026/04/22/houzz--reveals-most-popular-interiorexterior-home-renovation-trends/ (22/04/2026)

Comportamento e busca:
9. https://www.youtube.com/results?search_query=home+renovation+before+and+after&gl=US&hl=en
10. YouTube, mesma SERP, para "what order to renovate a house", "questions to ask a contractor before hiring", "how to read a contractor estimate"
11. https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=... (30+ sementes, Google e YouTube, ds=yt)
12. https://trends.pinterest.com/?country=US

SERP US-EN via https://html.duckduckgo.com/html/ com kl=us-en:
13. "what order to renovate a house"
14. "renovation timeline template"
15. "what should a contractor estimate include"
16. "renovation sequence generator free tool"
17. "home renovation order planner interactive"
18. "how to tell if a contractor is overcharging you homeowner"

Concorrentes abertos e medidos:
19. https://magica.com/tools/free-ai-home-repair-sequence-generator (200, mas renderiza "Tool Not Found")
20. https://scopegenerator.com/
21. https://www.contractorquotechecker.com/

Bloqueados, e por isso NAO usados como fonte:
- houzz.com (403 / Access Restricted)
- dashsocial.com (403)
- reddit.com via curl (403, bloqueio de rede)
- google.com/search (403 para automacao)
- jchs.harvard.edu via curl e WebFetch (403; resolvido dentro do navegador)

Arquivos brutos do autocomplete, para conferencia:
/private/tmp/claude-501/-Volumes-MAC-SSD01-Projects-open-your-ais-v2/1553a92f-b1b5-4d01-864a-e5ee6d618465/scratchpad/google_suggest_raw.txt
/private/tmp/claude-501/-Volumes-MAC-SSD01-Projects-open-your-ais-v2/1553a92f-b1b5-4d01-864a-e5ee6d618465/scratchpad/sweep2.txt
/private/tmp/claude-501/-Volumes-MAC-SSD01-Projects-open-your-ais-v2/1553a92f-b1b5-4d01-864a-e5ee6d618465/scratchpad/yt_sweep.txt

FIM. Gravado 2026-08-23 ~12:21 BRT.
