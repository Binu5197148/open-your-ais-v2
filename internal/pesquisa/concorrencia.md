# Concorrencia: o que ja existe, e onde eles falham
Angulo: mapa do que ja atende quem quer reformar a casa nos EUA, e onde a categoria deixa buraco.
Sessao iniciada 2026-08-23 12:02 (-03). Registro em progresso, atualizado ao longo da sessao.
Regra: so entra aqui o que foi ABERTO e LIDO nesta sessao. O que nao abriu esta marcado "nao verificado".

## STATUS PARCIAL (12:05) - primeira rodada de fetch cru

Metodo: curl com user-agent de Chrome, HTML cru salvo em disco, e grep literal por
`pagead2.googlesyndication.com`, `adsbygoogle`, `ca-pub-`. Nao e chute: e o script na pagina.

| Site | HTTP | AdSense no HTML da home | Publisher ID |
|---|---|---|---|
| homeprojectcalculator.com | 200 | SIM | ca-pub-5329983017687711 |
| plantingcalc.com | 200 | SIM | ca-pub-7557739369186741 |
| inchcalculator.com | 200 | nao (usa AdThrive/Raptive) | - |
| diydigits.com | 200 | nao no HTML da home | - |
| calculator.net | 200 (11 KB, shell) | nao no HTML da home | - |
| homewyse.com | 200 (13 KB, shell) | nao no HTML da home | - |
| remodelcalculators.com | 429 rate limit | pendente | - |
| angi.com | 403 bot block | pendente | - |
| thumbtack.com | 202 corpo vazio | pendente | - |
| houzz.com | 403 bot block | pendente | - |

RESPOSTA PRELIMINAR A PERGUNTA CRITICA: e falso que nenhum site pequeno do mercado mostra AdSense.
Dois dos alvos pequenos servem AdSense hoje. Detalhamento e evidencia abaixo.

## RODADA 2 (12:10) - browser real (Chromium headless proprio, requests de rede observados)

Script: check.mjs, Playwright + Chromium, UA de Chrome desktop, espera 7s apos DOMContentLoaded,
lista TODAS as requisicoes de rede e faz regex nelas. Isso pega ad script injetado por JS.

- remodelcalculators.com -> NAO tem AdSense. Tem MEDIAVINE JOURNEY.
  Evidencia (requests): https://scripts.journeymv.com/tags/prebid/7c8d32c19734aab19e9a.min.js
  https://metrics.rapidedge.io/gamera.js?...&partner=mediavine
  https://client-rapi-mediavine.recombee.com/mediavine-prod/...
  Mais GPT: https://securepubads.g.doubleclick.net/tag/js/gpt.js
- diydigits.com -> ZERO rede de anuncio. Nenhuma. Nao monetiza (ainda).
- homewyse.com -> TEM Google ads. Request observado:
  https://pagead2.googlesyndication.com/bg/WRsEFSCOXIsbOfJRE6gkAGug7LkWTNDxKaaIM3wsywU.js
  e slot GAM /169746/web
- calculator.net -> Google Ad Manager direto, network 1057446.
  Evidencia no HTML de https://www.calculator.net/square-footage-calculator.html :
  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js">
  googletag.defineSlot('/1057446/Calculator-Top-Right-Desktop', [[300,250],[336,280]], ...)

## RODADA 3 (12:15) - AdSense confirmado com publisher ID, autor, data e fonte

Todas as linhas abaixo vem de requisicao de rede observada ou de texto lido na pagina.

### homewyse.com/costs/cost_of_interior_painting.html
(a URL exata retornou pagina de erro do proprio site, "User Input Error - Page Not Found",
mas a pagina de erro JA carrega a pilha de anuncio completa, o que prova a monetizacao)
- ADSENSE: pagead2.googlesyndication.com/pagead/js/adsbygoogle.js  -> SIM
- Publisher ID no request: client=ca-pub-3475708421687548
- 6 elementos <ins class="adsbygoogle"> na pagina
- Ou seja: Homewyse, o site mais conhecido de custo de reforma dos EUA, roda AdSense.

### homeprojectcalculator.com
- ADSENSE: adsbygoogle.js?client=ca-pub-5329983017687711 -> SIM, 3 unidades <ins>
- Copy da home: "Free construction and material calculators for concrete, asphalt, roofing,
  drywall, sand, gravel, and 60+ home improvement projects - built on proven formulas"
- Assina "Built for DIYers and pros" com cinco estrelas decorativas. Autoridade ASSERTADA.
- /calculators/drywall-calculator -> 404 do LiteSpeed. URL de calculadora individual nao segue
  esse padrao, ou o site tem link quebrado.

### plantingcalc.com
- ADSENSE: adsbygoogle.js?client=ca-pub-7557739369186741 -> SIM, 1 unidade <ins>
- Ironia registrada: a propria home diz "No wizard, no signup, no ads in the way" enquanto
  serve AdSense.
- Modelo de dado que interessa: "Live 14-day forecast, 30 years of NOAA frost history, your
  USDA zone". Fonte publica, aberta, citada no rosto do produto. Nao e jardinagem por acaso:
  e o mesmo padrao que a regra ZERO MENTIRA exige.

### inchcalculator.com/drywall-calculator/
- NAO e AdSense. E ADTHRIVE / RAPTIVE:
  https://ads.adthrive.com/sites/6027f27d0df047211a4d6af9/ads.min.js
  https://bd.raptivecdn.com/cf/bd.json
  mais GPT securepubads.
- TEM AUTOR COM NOME: "By Joe Sexton" e "Reviewed by Sarabeth Asaff South".
- Tem botao "Cite" (citacao da propria pagina).
- JSON-LD: apenas Organization. Sem author nem datePublished no schema.
- Nao achei link de citacao para fonte .gov/.edu nessa pagina.

### diydigits.com/paint-calculator/
- ZERO anuncio. Nenhuma rede. Nao monetizado hoje.
- MAS: e o concorrente mais bem executado que abri.
  "Last updated August 5, 2026 by our expert review team"
  "WRITTEN AND REVIEWED BY CREATOR Cherry Jane Limbago, Licensed Civil Engineer & Master Plumber"
  JSON-LD com BreadcrumbList, WebPage, FAQPage e dateModified.
  Cita fonte publica de verdade:
  https://www.epa.gov/indoor-air-quality-iaq/volatile-organic-compounds-impact-indoor-air-quality
  Mostra a formula aberta: "wall area = (height x perimeter - doors x 20 sq ft - windows ...)"
  Mostra tabela comparando spread rate por superficie (Smooth 375, Textured 300, Bare wood 300).
- Home dele, porem, ASSERTA: "#1 DIY Calculator Platform" e "Trusted by 50,000+ DIYers".

### thumbtack.com/p/kitchen-remodel-cost
- Sem AdSense, sem GAM, sem rede de anuncio. Modelo e lead gen, nao publicidade.
- TEM autor com nome: "By Evan Crowther". TEM data: "Last updated Tue, Aug 12" (sem ano).
- CITA FONTE de dado: "according to data provided to Thumbtack by Xactware".
- Numero publicado: kitchen remodel $28,696 - $90,397 national average.

### angi.com -> NAO VERIFICADO
Cloudflare "Performing security verification" bloqueou nas duas tentativas
(home e /articles/how-much-does-it-cost-remodel-kitchen.htm), inclusive com Chromium real e
12 s de espera. Ray ID a2fb0700ccff209e. Nao afirmo nada sobre a pilha de anuncio da Angi.

## RODADA 4 (12:22) - A PREMISSA "ELES NAO TEM AUTOR NEM FONTE" ESTA PARCIALMENTE ERRADA

Isto e o achado mais desconfortavel da sessao e precisa ser dito antes de qualquer plano.

### remodelcalculators.com tem autor com nome, LinkedIn e historia pessoal
JSON-LD lido na pagina https://remodelcalculators.com/drywall-calculator :
{"@type":"Person","@id":"https://modernsitebuilders.com/#david-miles","name":"David Miles",
 "url":"https://modernsitebuilders.com/author/david-miles",
 "sameAs":["https://www.linkedin.com/in/dave-miles-webdev/"]}

Texto lido em https://remodelcalculators.com/about :
"Hi, I'm David. I'm David Miles, the person behind Remodel Calculators. I built this site after
watching friends and family - homeowners and tradespeople alike - get burned by bad material
estimates. Too much drywall sitting in the garage. A second trip to the supply house mid-job.
A contractor quote that didn't add up because nobody actually ran the math against published
coverage rates."

Ou seja: a dor exata que o dono descreveu ("voce sempre tem que perguntar pro cara da obra que
as vezes te engana") JA esta escrita, em ingles, na pagina About de um concorrente vivo.

### E ele cita fonte de norma, com link, na pagina
Links externos observados em /drywall-calculator :
  https://www.astm.org/c0840-20.html
  https://www.astm.org/c1396_c1396m-17.html
  https://store.astm.org/c0036_c0036m-01.html
  https://codes.iccsafe.org/s/IRC2021P3/chapter-7-wall-covering/IRC2021P3-Pt03-Ch07-SecR702.1
Texto na pagina: "Industry-standard calculations per ASTM C840 & USG specifications."
E "Includes GA-216 waste factors".
JSON-LD tipos: Organization, WebSite, Person, WebApplication, BreadcrumbList, HowTo, FAQPage.

### E ele ja tem a vantagem visual tambem
https://remodelcalculators.com/construction-diagrams
"A free, browsable reference of 331 technical construction diagrams - cross-sections, assemblies,
spacing schedules, and estimating figures drawn for our 119 calculators. Every diagram is grounded
in building code and industry standards (IRC, IECC, TCNA, NWFA, ASTM, ACI and more)"
Pagina tem 119.129 caracteres de texto. Diagramas sao EMBEDAVEIS: "Embed this diagram - free"
(isso e uma maquina de backlink, nao so um enfeite).
E a home diz 131 calculadoras no /about e 119 no /construction-diagrams. Cresce rapido.

CONSEQUENCIA DIRETA: "ser o unico com autor, data e fonte" NAO e mais um fosso.
E o preco de entrada. O fosso tem que estar em outro lugar.

### homewyse.com cita fonte publica de verdade e tem data, mas nao tem autor
Lido em https://www.homewyse.com/services/cost_to_install_dishwasher.html
Titulo: "Cost to Install Dishwasher - 2026 Cost Calculator (Customizable)". Carimbo "May 2026".
Links de referencia externos observados na pagina:
  https://www.bls.gov/oes/            (Occupational Employment Statistics)
  https://www.bls.gov/news.release/ecec.toc.htm  (Employer Costs for Employee Compensation)
  https://www.huduser.gov/portal/publications/destech/hvac.html
  https://www.jchs.harvard.edu/iah-2021-expenditures-project-type
AdSense: ca-pub-3475708421687548, 8 unidades <ins class="adsbygoogle"> nessa unica pagina.
Nenhum autor com nome encontrado. Zero JSON-LD.
Publica preco em dolar que apodrece: "Dishwasher Cost ... 1 EA $596 $1,306".

## RODADA 5 (12:28) - o "Review Board" existe, tem nome, e NAO tem como conferir

https://homeprojectcalculator.com/review-board/  (lido, "Page last updated: 15 Apr 2026")
Contraria em parte a suposicao do briefing: a pagina NOMEIA gente.
Texto lido: "Maria Ramirez, PE - Civil Engineer - Residential concrete design & inspection.
Last reviewed: Sep 2025. Maria is a licensed civil engineer with 12+ years in residential
foundations and flatwork."
Politica escrita: "Independence: Reviewers are experienced practitioners. Conflicts of interest
must be disclosed before review." "Cadence: Calculators are reviewed at least annually."

O QUE FALTA, e e aqui que mora a brecha real:
- Nenhum link externo para essa pessoa. Sem LinkedIn, sem numero de licenca PE, sem site,
  sem foto atribuida, sem perfil em conselho estadual. O nome nao sai da propria pagina.
- A pagina tem 3 URLs internas prometidas no /about ("Methodology page", "Data Sources") que
  eu nao abri nesta sessao. NAO VERIFICADO se existem.
- Data do review (Sep 2025) e mais velha que a data da pagina do board (15 Apr 2026).

E ESSE SITE E APROVADO NO ADSENSE (ca-pub-5329983017687711, 3 unidades servindo).
Conclusao operacional: o AdSense nao esta exigindo autoridade verificavel nessa categoria.
Ele esta aceitando o APARATO de autoridade. A diferenca entre asserta e demonstra continua
sendo o problema do dono, nao do Google.

### modernsitebuilders.com (a "casa" do David Miles)
https://www.modernsitebuilders.com/ lido. Titulo: "Modern Site Builders | Building useful
internet businesses in public". Texto: "I'm David Miles. I design, build, and operate a small
portfolio of production websites and interactive tools" e "Most people have one project. I have
a portfolio - a growing set of niche, useful sites I run as independent businesses."
"Utility over fluff - I build interactive tools and calculators people actually searc[h]"
O proprio site NAO tem anuncio nenhum.
/build-logs e /projects retornaram 404 (URL adivinhada por mim, nao pelo menu). NAO VERIFICADO
o conteudo dos build logs.

## RODADA 6 (12:40) - IDADE DOS DOMINIOS (whois, lido no terminal nesta sessao)

Isto responde a PERGUNTA CRITICA melhor do que qualquer opiniao.

| Dominio | Creation Date (whois) | Idade em 23/08/2026 | Monetizacao observada por mim hoje |
|---|---|---|---|
| plantingcalc.com | 2026-03-21T21:02:59Z | ~5 meses | ADSENSE ativo, ca-pub-7557739369186741 |
| homeprojectcalculator.com | 2025-05-16T08:39:24Z | ~15 meses | ADSENSE ativo, ca-pub-5329983017687711 |
| remodelcalculators.com | 2025-12-19T20:22:37Z | ~8 meses | Mediavine Journey + GPT |
| diydigits.com | 2025-04-14T20:33:36Z | ~16 meses | nenhuma |
| buildcost.io | 2026-05-07T21:15:49Z | ~3,5 meses | declara AdSense no proprio banner de cookie |
| quotecheckus.com | 2026-08-19T19:54:59Z | 4 DIAS | nenhuma |
| nicetobuild.com | 2026-08-23T14:12:02Z | hoje | - |

## RESPOSTA A PERGUNTA CRITICA (a que pode cancelar o projeto)

A pergunta era: se nenhum site pequeno desse mercado mostra AdSense, isso e escolha de
monetizacao ou a categoria inteira nao esta sendo aprovada?

A PREMISSA DA PERGUNTA ESTA ERRADA. Sites pequenos desse mercado MOSTRAM AdSense.
A categoria esta sendo aprovada. Prova, com o que eu abri nesta sessao:

EVIDENCIA A FAVOR DE "a categoria e aprovavel":
1. plantingcalc.com. Dominio de 21/03/2026, cinco meses de vida. Site de ferramenta pura
   (uma calculadora de calendario de plantio por ZIP). Serve AdSense agora, com
   ca-pub-7557739369186741 e uma unidade <ins class="adsbygoogle"> renderizada.
   Este e o contra-exemplo mais forte possivel: novo, pequeno, tool-first, aprovado.
2. homeprojectcalculator.com. Dominio de 16/05/2025. Biblioteca de calculadoras de construcao,
   sem marca, sem trafego evidente, com Review Board cujos nomes nao dao para conferir.
   Serve AdSense com 3 unidades, ca-pub-5329983017687711.
3. homewyse.com, o site de custo de reforma mais citado dos EUA, serve AdSense com 8 unidades
   por pagina, ca-pub-3475708421687548. Categoria "custo de reforma" nao e restrita.
4. buildcost.io, dominio de 07/05/2026 (3 meses e meio), declara no proprio banner:
   "We use cookies and similar technologies - including Google Analytics and Google AdSense -
   to analyze site usage and serve relevant ads."
   (Nao clicquei em aceitar, entao nao vi o script carregar. A declaracao e a evidencia.)
5. Politica do proprio Google, lida em
   https://support.google.com/adsense/answer/9335564 :
   nao existe uma unica mencao a home improvement, construcao, calculadora ou ferramenta como
   categoria restrita ou proibida. O que existe e a regra de INVENTARIO:
   sao proibidas "screens without publisher-content or with low-value content, that are under
   construction, that are used for alerts, navigation or other behavioral purposes."
   Isto e sobre a TELA, nao sobre o assunto.

EVIDENCIA A FAVOR DE "cuidado, tem risco real e especifico":
1. Quem NAO monetiza no meu recorte tambem existe e nao e pouco: diydigits.com (16 meses,
   zero anuncio), quotecheckus.com, quotsey.com, modernsitebuilders.com.
   Nao consegui saber se e escolha ou reprovacao. NAO VERIFICADO.
2. remodelcalculators.com, o mais forte tecnicamente, esta em Mediavine Journey e nao em
   AdSense. Isso pode ser escolha (RPM maior) ou pode ser saida de um "nao" do AdSense.
   NAO VERIFICADO qual dos dois.
3. Busca na web (nao abri os artigos, e leitura de resultado de busca, entao trato como
   indicio e nao como prova) aponta consenso de que site so-de-ferramenta e reprovado com
   frequencia por dar pouco texto editorial para o Google avaliar. Resultados vistos:
   adsenseaudit.net/adSense-tool-websites, toolpod.dev/blog/adsense-rejection-low-value-content,
   support.google.com/adsense/community-guide/241032356.
   O padrao descrito bate com a causa raiz que o dono ja tem diagnosticada.

VEREDITO HONESTO: a categoria nao e o problema. O FORMATO DE PAGINA e.
A prova disso e que plantingcalc.com e homeprojectcalculator.com passaram sendo pequenos, e
os dois envolvem a ferramenta em texto explicativo proprio, com fonte nomeada (NOAA e USDA no
primeiro, aparato de review board no segundo). O que reprova nao e "calculadora", e
"tela com widget e tres frases".

## RODADA 7 (12:50) - ALEM DA CALCULADORA: o que existe, e o buraco que sobra

### O conferidor de orcamento JA ESTA LOTADO, e esta enchendo esta semana
Busca feita e paginas abertas:
- https://quotecheckus.com/ "Is your contractor quote fair? Paste a quote, snap a photo, or upload
  a PDF. Get a line-by-line read on what's fair, what's inflated, and exactly what to say back."
  DOMINIO REGISTRADO EM 19/08/2026. Quatro dias antes desta pesquisa. Sem anuncio.
- https://buildcost.io/quote-checker "Is Your Contractor Quote Fair?" com Calculator, Cost Guides,
  Material Calculators, Blog, Quote Checker, Budget Planner, My Estimates. Dominio de 07/05/2026.
  Declara AdSense no banner.
- https://www.quotsey.com/quote-check/ "Pick a project, get a cost estimate backed by thousands of
  real contractor bids. No phone number, no spam." Tem Contractor Portal, ou seja e lead gen.
- Tambem apareceram na busca, NAO ABERTOS, portanto NAO VERIFICADOS: veriquotes.com (o dominio
  nem resolveu DNS quando tentei), homemd.ai, keystoneconnect.us, renocanvas.
Leitura: escolher "conferidor de orcamento" como formato e entrar numa briga de novos contra
novos, todos com a mesma ideia, no mesmo mes. E o formato mais obvio, logo o mais disputado.
Alem disso, quase todos dependem de banco de precos, que e exatamente a divida que a regra
ZERO MENTIRA proibe.

### O planejador visual existe e e bom, mas nao monetiza
https://smartersquares.com/tools/kitchen-planner (dominio 06/06/2026, ~2,5 meses)
"Free Kitchen Remodel Planner ... 100% free, no sign-up, Standard US sizes, Plan & elevation
views, DXF / PNG / print export". Editor de planta no navegador com armarios base 9" a 48".
Schema SoftwareApplication + HowTo + FAQPage. Tem "Editorial Policy". Operado por Focalplex Inc.
Zero anuncio observado.

### O SEQUENCIADOR DE OBRA NAO EXISTE COMO FERRAMENTA
Busquei "renovation order of operations" e "free renovation timeline planner interactive".
Tudo que voltou foi:
(a) blog de empreiteiro: designbuildremodel.com, isiconstruction.com, tixanconstruction.com,
    blbdesignbuild.com, freedomconstructionanddesign.com
(b) template generico de Gantt: tomsplanner.com/templates/kitchen-remodel-project-plan
(c) planta 3D: foyr.com, arcadium3d.com, blockrenovation.com
Nenhuma ferramenta feita para o morador responder "o que acontece na minha casa, em que ordem,
e o que eu nao posso fazer antes de que". A informacao existe so em prosa, e so na voz de quem
vende a obra.

### O DETECTOR DE ITEM ESCONDIDO SO EXISTE NA VOZ DE QUEM PODE TE ENGANAR
Este e o achado que mais bate na tese do dono. Abri e li:
https://flatfeeconstructionnw.com/blog/home-renovation-hidden-costs-guide/
Titulo: "Hidden Renovation Costs: What Contractors Don't Say".
Assinatura lida no rodape do artigo, literal:
"WRITTEN BY Lora Ramirez - Crime Scene Cleanup & Biohazard Decontamination Specialist"
O guia definitivo de "o que o empreiteiro nao te conta" esta assinado por uma especialista em
limpeza de cena de crime, publicado no site de um empreiteiro, com telefone no cabecalho
((971) 801-8343) e CTA para agendar consultoria.
Caso concreto citado no texto: um orcamento de $28,000 para banheiro que fechou em $34,500,
"driven by a $1,200 permit fee not included in the original".

Ou seja: a resposta para "estao me enganando?" na internet americana hoje e escrita por quem
lucra com a resposta, as vezes por alguem da area errada. A frase do dono
("voce sempre tem que perguntar pro cara da obra que as vezes te engana")
tem prova documental, aberta e datavel.

## O QUE ISSO SUGERE DE FERRAMENTA (julgado pelo trabalho, nao pelo formato)

1. NAO REPETIR A GUERRA DE QUANTIDADE DE MATERIAL. remodelcalculators.com tem 131 calculadoras
   e 331 diagramas com citacao de ASTM, IRC e GA-216, feito por uma pessoa so, em 8 meses.
   Entrar ali com dominio de hoje e entregar a briga.
2. O TRABALHO REAL nao e "quantos sacos de cimento". E: descobrir, sozinho, antes de falar com
   alguem, o que vai acontecer, em que ordem, e o que costuma sumir da conta.
3. Formato com espaco verificado nesta sessao: SEQUENCIADOR + O QUE FALTA NA CONTA.
   Nao publica preco. Publica ORDEM, DEPENDENCIA e OMISSAO. Nada disso apodrece com inflacao.
   Ordem de obra e amarrada em codigo de construcao e inspecao, nao em preco: rough-in antes de
   drywall porque tem inspecao no meio. Isso e citavel em fonte publica (ICC, IRC) e estavel.
4. A vantagem do Ulisses cabe aqui, e nao cabe numa calculadora. O concorrente ja tem diagrama,
   mas o diagrama dele e manual de campo: corte, espacamento, tabela. Ninguem fez a versao para
   quem assiste programa de reforma e quer ver a casa mudando. Direcao de arte, imagem e
   narrativa de transformacao sao exatamente o que a categoria nao tem e ele tem.
5. Sobre AdSense, o modelo a copiar e o do plantingcalc, nao o do homewyse:
   pagina de ferramenta pode ser curta (a /frost-probability tem 2.179 caracteres) DESDE QUE
   o site carregue uma camada de metodologia de verdade. A /methodology deles tem 6.391
   caracteres, data ("Last updated: April 2026"), e nomeia fonte por fonte com link vivo
   (phzmapi.org, NOAA 30-year normals, extensoes de Cornell, UMass, UF/IFAS, Oregon State).
   E o "Who We Are" deles nem tem nome de pessoa: "PlantingCalc is built by home gardeners who
   got tired of guessing". Passou assim mesmo, com 5 meses de dominio.
   Traducao: o AdSense nao esta pedindo celebridade. Esta pedindo que a pagina MOSTRE de onde
   vem o numero. Que e, por acaso, a mesma coisa que a regra ZERO MENTIRA ja obriga.

## O QUE EU NAO CONSEGUI VERIFICAR (nao preencher com chute)
- angi.com: Cloudflare bloqueou home e artigo de custo de cozinha, duas tentativas, com Chromium
  real e 12 s de espera. Ray IDs a2fb05ef5cb879d1 e a2fb0700ccff209e. Pilha de anuncio da Angi:
  NAO VERIFICADO.
- houzz.com: retorna 403 "our services are currently not available in your region" a partir daqui.
  NAO VERIFICADO.
- POR QUE diydigits.com (16 meses, autor com credencial, cita EPA) nao tem anuncio nenhum.
  Pode ser escolha, pode ser reprovacao. NAO VERIFICADO. E a duvida mais util que sobrou.
- POR QUE remodelcalculators.com esta em Mediavine Journey e nao em AdSense. NAO VERIFICADO.
- Se "Maria Ramirez, PE" do review board de homeprojectcalculator.com e uma pessoa real.
  Nao existe link externo nenhum para ela na pagina. NAO VERIFICADO.
- Trafego de qualquer um destes sites. Nao abri nenhuma ferramenta de trafego. NAO VERIFICADO.
- /methodology e /data-sources prometidos no /about do homeprojectcalculator: NAO ABERTOS.

## URLs QUE EU ABRI NESTA SESSAO (23/08/2026, entre 12:02 e 12:52, horario -03)
https://homeprojectcalculator.com/ , /about , /review-board/ , /calculators/drywall-calculator (404)
https://remodelcalculators.com/ , /drywall-calculator , /construction-diagrams , /about
https://diydigits.com/ , https://diydigits.com/paint-calculator/
https://plantingcalc.com/ , /methodology , /about , /frost-probability
https://www.calculator.net/ , https://www.calculator.net/square-footage-calculator.html
https://www.inchcalculator.com/ , https://www.inchcalculator.com/drywall-calculator/
https://homewyse.com/ , https://www.homewyse.com/services/index.html ,
  https://www.homewyse.com/services/cost_to_install_dishwasher.html ,
  https://www.homewyse.com/costs/cost_of_interior_painting.html (pagina de erro do site)
https://www.angi.com/ (bloqueado) , https://www.angi.com/articles/how-much-does-it-cost-remodel-kitchen.htm (bloqueado)
https://thumbtack.com/ , https://www.thumbtack.com/p/kitchen-remodel-cost
https://houzz.com/ , https://www.houzz.com/ (403 por regiao)
https://www.modernsitebuilders.com/ (e /build-logs, /projects, ambos 404)
https://quotecheckus.com/ , https://buildcost.io/quote-checker , https://www.quotsey.com/quote-check/
https://www.veriquotes.com/ (DNS nao resolveu)
https://smartersquares.com/tools/kitchen-planner
https://flatfeeconstructionnw.com/blog/home-renovation-hidden-costs-guide/
https://support.google.com/adsense/answer/9335564
https://developers.google.com/search/docs/essentials/spam-policies
whois: homeprojectcalculator.com, remodelcalculators.com, diydigits.com, buildcost.io,
quotecheckus.com, nicetobuild.com, plantingcalc.com, smartersquares.com
