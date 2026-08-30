# A PRÓXIMA CALCULADORA: VEREDITO FINAL

Escrito em 2026-08-23. Minha janela de verificação própria: **05:20 a 05:37 UTC (02:20 a 02:37 BRT)**.
Tudo que está marcado como verificado abaixo, eu abri, baixei ou parseei nesta janela. O que não
verifiquei está dito com essas palavras.

---

## 0. VEREDITO EM UMA LINHA

**Nenhuma das cinco finalistas bate o axenworks, e a resposta certa é a chata: não abrir site
novo nenhum agora, construir a próxima ferramenta DENTRO do axenworks, e só voltar a garimpar
domínio quando o axenworks estiver indexado, aprovado no AdSense e com dado real no Search
Console.**

Isso não é covardia. É o que os números dizem, e um deles é decisivo: eu rodei
`site:axenworks.com` às 05:26 UTC de hoje e **o Google não devolve uma única página**. O site
subiu ontem. Ele não está no índice. Não está no Search Console. Não foi submetido ao AdSense.

Você está escolhendo a segunda propriedade antes de a primeira ter produzido um único dado.

---

## 1. A ESCOLHIDA, EM UMA FRASE

**A escolhida é o próprio axenworks.com, expandido de 20 para 30 e poucas páginas dentro da mesma
família de busca que já venceu, e a próxima ferramenta é a que converte a taxa de dados que o
motor dele já calcula na classe de cartão que a pessoa precisa comprar (V30, V60, V90, UHS-II,
CFexpress).**

### Por que ela é melhor que o axenworks

Ela **é** o axenworks. E é melhor do que qualquer candidata do garimpo por quatro razões que eu
verifiquei hoje, uma por uma:

**1. A categoria. Este é o número que fecha o assunto.**
Baixei `https://adsense.google.com/start/calculator-data.json` às 05:29 UTC, HTTP 200,
13.817 bytes, 75 linhas, 25 categorias, 3 regiões. É o RPM em dólares por 1.000 pageviews
publicado pelo próprio Google. Tabela completa das Américas, ordenada:

| Categoria | Américas | APAC | EMEA |
|---|---|---|---|
| **Home & Garden** | **13,37** | 4,11 | 5,16 |
| **Computers & Electronics (axenworks)** | **4,34** | 4,04 | 2,60 |
| Health | 3,41 | 3,23 | 3,25 |
| Business & Industrial (pallets) | 3,39 | 3,28 | 2,32 |
| Finance (dia bancário) | 3,34 | 5,29 | 4,29 |
| Jobs & Education | 3,16 | 1,69 | 1,86 |
| Law & Government (visto) | 3,05 | 4,39 | 2,59 |
| Travel & Transportation (pontos) | 2,95 | 2,08 | 3,25 |
| Shopping | 2,82 | 2,63 | 2,88 |
| Real Estate | 2,71 | 2,99 | 2,03 |
| Hobbies & Leisure | 2,69 | 2,36 | 2,81 |
| **Internet & Telecom (banda)** | **2,68** | 3,09 | 2,44 |
| Autos & Vehicles | 2,66 | 2,18 | 2,28 |
| Food & Drink | 2,62 | 1,90 | 1,94 |
| Beauty & Fitness | 2,55 | 2,15 | 3,01 |
| Pets & Animals | 2,48 | 2,51 | 2,29 |
| Reference | 2,40 | 1,73 | 1,97 |
| Science | 2,36 | 2,02 | 1,78 |
| Online Communities | 1,80 | 4,81 | 1,79 |
| People & Society | 1,67 | 1,61 | 1,48 |
| Arts & Entertainment | 1,57 | 1,80 | 1,52 |
| Books & Literature | 1,28 | 0,81 | 1,07 |
| Games | 1,21 | 1,55 | 1,80 |
| Sports | 1,05 | 1,63 | 1,08 |
| News | 0,89 | 1,66 | 0,84 |

Leia a coluna das Américas de cima para baixo. **Computers & Electronics é a segunda melhor
categoria de vinte e cinco.** Só perde para Home & Garden. Toda finalista do garimpo, sem
exceção, te move para uma categoria que paga menos do que a que você já tem:
Finanças 0,77x, Business 0,78x, Internet e Telecom 0,62x. Você estava prestes a trocar o
segundo lugar do pódio por uma posição no meio da tabela.

**2. A vantagem de composição.** Domínio novo sem backlink não ranqueia por autoridade, ranqueia
por profundidade tópica e link interno. Vinte páginas sobre armazenamento de vídeo num domínio
valem mais do que vinte páginas de vídeo num domínio mais vinte páginas de folha de pagamento em
outro. Somar a página 21 no axenworks é barato. A página 1 de um site novo custa DNS, deploy,
sitemap, política de privacidade, termos, sobre, contato, design, testes, e uma nova submissão ao
AdSense. Você tem três horas por semana. Esse custo fixo come um mês inteiro.

**3. O risco de AdSense.** Sua memória de rejeição é do openyourais, e a estratégia acordada foi
"ganhar uma aprovação limpa num site-ferramenta e depois pendurar os outros domínios na mesma
conta". Abrir a segunda propriedade **antes** da primeira aprovação inverte exatamente essa
estratégia e dobra a superfície de rejeição.

**4. A honestidade do produto.** O axenworks tem os 58 formatos do white paper da Apple lidos por
máquina em `js/data-prores.js`. Nenhuma candidata do garimpo chegou perto disso. A número 3
(pallets) não conseguiu verificar nem a dimensão do pallet americano.

---

### E aqui está o motivo real, o que ninguém no garimpo viu

Peguei a idade de registro de oito domínios de calculadora que apareceram nos SERPs desta
investigação. RDAP, 05:33 UTC:

| Domínio | Registrado | Idade hoje | Onde apareceu |
|---|---|---|---|
| ourdailycalc.com | 2026-06-06 | **78 dias** | SSD / TBW |
| next-payday.com | 2026-01-31 | 204 dias | dia bancário |
| systemrequirements.net | 2026-01-10 | 225 dias | **SSD e armazenamento de vídeo** |
| workcalcs.com | 2026-01-07 | 228 dias | dia bancário |
| brawcalculator.com | 2025-11-23 | 273 dias | **BRAW e DNxHR, o seu quintal** |
| sdcardchecker.com | 2025-11-11 | 285 dias | **cartão de vídeo, o seu quintal** |
| starlighttools.org | 2025-06-11 | 438 dias | **ProRes, H.264, H.265, DNxHR, BRAW, REDCODE** |
| agentcalc.com | 2025-03-30 | 511 dias | SSD / TBW |

**Seis dos oito nasceram nos últimos doze meses. Quatro nasceram em 2026.** E eles não estão
concentrados num nicho, estão em todos: folha de pagamento, SSD, e o seu.

A conclusão é desconfortável e é a mais importante deste documento: **a jogada "achar palavra-chave
livre e plantar site de calculadora" está sendo industrializada em 2026, num ritmo que um homem
com três horas por semana não acompanha.** A premissa do garimpo (encontrar a porta aberta e
entrar primeiro) está correndo contra fazendas programáticas que abrem 149 URLs por domínio.

Você não ganha a corrida por terreno. Você ganha na única coisa que a fazenda não consegue copiar:
**um nome real com 14 anos de crédito verificável na página Sobre, em cima de dado de fonte
primária, concentrado num assunto só.** starlighttools.org não tem o white paper da Apple parseado.
sdcardchecker.com não tem um diretor que gravou em ProRes.

O ativo não é a calculadora. O ativo é você atrás dela. Isso não escala por domínio, escala por
profundidade.

---

## 2. A CONSULTA PRINCIPAL E AS CONSULTAS SATÉLITE

Regra que vem do que eu verifiquei hoje, e que o Cético do Ranqueamento provou primeiro:
**o Google separa fatia de artigo de fatia de ferramenta, e a mesma pergunta em forma diferente
cai em fatia diferente.** Duas leituras minhas de hoje, lado a lado:

- Pergunta em forma de pergunta, `how long can a 128gb sd card record 4k video sony a7 iv`
  (05:34 UTC): **zero calculadoras.** Só editorial e varejo (alikgriffin.com, havecamerawilltravel,
  4kshooters, alphashooters, droneandcam, Adorama, Walmart).
- A mesma coisa em forma de ferramenta, `camera recording time calculator memory card by camera
  model` (05:36 UTC): **calculadora em quase tudo.** CVP.com com calculadora por modelo de câmera,
  alikgriffin.com com conversor de bitrate e tempo de gravação, vmedia.digital com banco de dados
  de compatibilidade.

Ou seja: a fatia de ferramenta existe nessa família (diferente do caso do dia bancário, onde não
existia), mas ela já tem gente forte. A fatia de pergunta está livre. **Por isso a página tem que
ser uma resposta que contém a calculadora, não uma calculadora.** É exatamente o formato de
`/how-many-hours-of-video-can-128gb-hold/`, que é o formato que já venceu.

### Consulta principal proposta

```
what speed memory card do i need for 4k 120fps
```

Forma de pergunta, intenção de compra, categoria Computers & Electronics (4,34), padrão fechado e
publicado, e ela é a saída natural do motor que o axenworks já tem: ele já calcula Mb/s, e o que
falta é traduzir Mb/s em classe de cartão.

**NÃO VERIFIQUEI o SERP desta consulta.** Não vou fingir que verifiquei. O teste está na seção 8 e
leva 20 minutos.

### Satélites que viram página própria

Cada uma é uma URL, no mesmo template das sete páginas de capacidade que já existem:

| Consulta | Vira a página |
|---|---|
| `what is v30 v60 v90 sd card speed class` | `/sd-card-speed-class-explained/` |
| `do i need v90 for 4k 60fps` | `/do-i-need-v90-for-4k/` |
| `minimum card speed for prores 422 hq` | `/card-speed-for-prores/` |
| `cfexpress type a vs type b for video` | `/cfexpress-type-a-vs-type-b/` |
| `what sd card do i need for 8k` | `/card-speed-for-8k/` |
| `uhs-i vs uhs-ii recording video` | `/uhs-i-vs-uhs-ii-for-video/` |

E o hub acima delas, no padrão do `/hours-per-card/` que já existe: `/card-speed/`, com a tabela
cruzando codec por resolução por fps contra a classe mínima exigida.

### As duas famílias alternativas, se o teste de 20 minutos reprovar essa

**Alternativa A: fotos em vez de vídeo.** `how many photos can 128gb hold`. Mesma categoria, mesma
matemática, mesmo template, público adjacente. Não verifiquei o SERP.

**Alternativa B: tempo de gravação por câmera.** `how long can a 128gb card record on [modelo]`.
Verifiquei que a forma de pergunta está sem calculadora (05:34 UTC), mas te aviso do risco:
alikgriffin.com está registrado desde **2008-05-29** (verificado, RDAP 05:36 UTC) e publica teste
de buffer real. Contra ele, escolha câmeras que os reviewers grandes pulam, não a A7 IV.

**Uma família que eu testei e reprovo: DNxHR.** Busca de 05:35 UTC devolve brawcalculator.com com
calculadora DNxHD/DNxHR pronta, a tabela oficial publicada pela Atomos, o white paper da Avid, e a
lista completa na Wikipedia. Ocupado por todo lado, e o dado é gratuito para todo mundo. Não gaste
três horas ali.

---

## 3. DE ONDE VEM CADA DADO, COM A FONTE PÚBLICA NOMEADA

Regra do axenworks, que não muda: número sem fonte primária citada não entra na página.

| Dado | Fonte primária pública | Estado |
|---|---|---|
| Classes de velocidade V6, V10, V30, V60, V90 e o mínimo sustentado em MB/s | **SD Association**, especificação de Video Speed Class, `sdcard.org/developers/sd-standard-overview/speed-class/` | **NÃO VERIFICADO por mim.** Abrir antes de escrever a página |
| Classes UHS-I, UHS-II, UHS-III e barramento | **SD Association**, mesma família de páginas | NÃO VERIFICADO |
| Taxa de dados alvo de cada formato ProRes, 58 formatos | **Apple ProRes White Paper**, já baixado em `_research/Apple_ProRes.pdf` e parseado em `js/data-prores.js` | **JÁ NO PROJETO** |
| Taxas BRAW | Blackmagic, já em `_research/braw_manual_excerpt.txt` | **JÁ NO PROJETO** |
| Bitrates dos modos de gravação por câmera | Help Guide oficial do fabricante (Sony `helpguide.sony.net`, Canon, Panasonic, Blackmagic) | NÃO VERIFICADO. Eu chutei uma URL da Sony às 05:36 UTC e tomei **404**. Achar a certa antes de citar |
| CFexpress Type A e Type B, banda do barramento | **CompactFlash Association**, especificação CFexpress | NÃO VERIFICADO |
| Taxas ProRes e DNx de referência cruzada | Atomos, `support.atomos.com`, artigo "ProRes and DNx Target Data Rates" | Visto no SERP às 05:35 UTC, conteúdo não aberto |

Um aviso jurídico que vale a pena carregar para sempre, e que veio do Cético da Construção: ele
leu `frbservices.org/terms` às 05:19 UTC e os Termos de Uso do Federal Reserve **proíbem por
escrito reproduzir, publicar ou criar obra derivada** do conteúdo deles, e a única licença de
reprint que existe é restrita a uso "nonprofit and noncommercial". Site com AdSense é comercial.
Antes de embutir a tabela de qualquer fonte nova, leia os termos dela. Apple e SD Association
publicam especificação técnica para implementação, o que é um caso diferente, mas confira mesmo
assim.

---

## 4. QUAL DOMÍNIO USAR

**Nenhum dos nove. Use axenworks.com.**

Lista completa e por que cada um fica na gaveta agora:

| Domínio | Situação |
|---|---|
| ulioli.com | Registrado 2025-11-11 (verificado, RDAP 05:37 UTC). **É o melhor da lista para o futuro**: curto, neutro, sem carga semântica, funciona em inglês, não te compromete com categoria nenhuma antes da hora |
| beezoostudio.com, hollystudio.store, hollystudio.com.br, beezoo.co.uk | "studio" e "store" já dizem ao Google o que o site é, e não é ferramenta de cálculo |
| quantumwork.co, quantumjobs.com.br | Semântica de trabalho e emprego. Jobs & Education paga **3,16** nas Américas, abaixo dos 4,34 que você já tem. Você estaria batizando o site com a categoria errada |
| aiwannabe.co.uk | `.co.uk` sinaliza Reino Unido. EMEA paga menos que Américas em quase tudo (Computers cai de 4,34 para 2,60) |
| yolooficial.com | "oficial" em português. Marca errada para tráfego americano |

**Quando abrir o segundo site, e com o quê:** só depois de o axenworks estar aprovado no AdSense e
com pelo menos 60 dias de dado no Search Console. E aí a caça começa pela **tabela de categoria, não
pela palavra-chave**. O número mais alto do arquivo do Google é Home & Garden nas Américas, **13,37**,
que é **3,08 vezes** Computers & Electronics e **4 vezes** Finanças. Nenhuma das 31 candidatas do
garimpo estava nessa categoria. Isso é um erro de partida do garimpo inteiro, não de uma candidata.
Domínio para essa hipótese: **ulioli.com**. Demanda em Home & Garden: **não verificada**, e é a
primeira coisa a testar da próxima vez.

---

## 5. O QUE OS CÉTICOS DERRUBARAM

### Sim, derrubaram a própria escolhida. A primeira colocada está morta, três vezes.

A calculadora de dia bancário tinha 9,04 e caiu inteira. Não é rebaixamento, é abate. Os três
ataques são independentes e qualquer um sozinho já bastaria.

**Abate 1, do Cético do Ranqueamento: o Google já entrega o produto de graça, acima da dobra.**
Ele abriu o Google real com JavaScript, o que o corte anterior não fez (leu Startpage de IP
brasileiro). Na consulta de cabeça, às 05:24:07Z, tem AI Overview no topo respondendo a pergunta
inteira: paga na sexta anterior, ou na segunda seguinte se o processamento atrasar. Na cauda que o
corte chamou de aberta, `if payday is july 4 when do i get paid`, às 05:29:18Z, a AI Overview é
ainda mais completa. **Isso é a saída da ferramenta proposta, palavra por palavra, antes de
qualquer clique.** A contraprova que ele mesmo fez é honesta e é o que salva o axenworks: a AI
Overview da consulta do 128GB devolve uma **faixa** ("2 to 30 hours, depends on quality, frame
rate and compression"), o que deixa cálculo residual. A do payday devolve a **resposta fechada**.
Não sobra nada para calcular.

**Abate 2, do mesmo cético: nessa intenção o Google não dá fatia de ferramenta. Nenhuma.**
Ele buscou `payday calculator bank holiday weekend direct deposit date`, com a palavra "calculator"
dentro da consulta, às 05:25:33Z. Os nove orgânicos: patriotsoftware, surepayroll, onpay, paydayhcm,
quickbooks, apspayroll, namely, eddy, experian. **Nove de nove são blog de SaaS de folha. Zero
calculadoras.** O controle, `business days calculator federal holidays` às 05:24:43Z: **nove de nove
são calculadoras.** Conclusão: "zero ferramentas em 50 resultados" não era porta aberta, era porta
que não existe.

**Abate 3, e este eu confirmei com as minhas próprias mãos: os concorrentes já existem, com AdSense
rodando.** Baixei os dois às 05:31 UTC:

- `workcalcs.com/pay-period-calculator/`: HTTP 200, 61.130 bytes, título "Pay Period Calculator,
  Payday Dates & Payroll Cutoffs | WorkCalcs", **ca-pub-4455943360752685** no HTML. Domínio
  registrado 2026-01-07.
- `next-payday.com/pay-dates-on-holidays-2026`: HTTP 200, 15.495 bytes, título "2026 Pay Dates That
  Fall on Holidays, What To Expect | NextPayday", **ca-pub-2073265913083686** no HTML. Domínio
  registrado 2026-01-31.

A segunda URL é literalmente a página que você ia construir, publicada há sete meses, monetizada.

**Abate 4, do Cético da Construção, o mais elegante:** a tabela de horário de corte do FedACH, que
era "o melhor achado da execução", cobre **um ano só**. Ele contou as ocorrências de "2027" na
página inteira: **uma**, e é cabeçalho de coluna. Datou a virada no archive.org: em 04/01/2026 a
página ainda mostrava 2025, e virou entre 04/01 e 01/02. Ou seja, o dado morre em 1º de janeiro e
renasce num dia de janeiro que o Fed decide, **que é exatamente o mês de pico da busca**. E ele
tentou derivar a regra por fórmula: acertou 21 de 22 valores, e o único que errou foi o
Independence Day 2026, o **único feriado de fim de semana do ano**, que é o único caso em que a
pergunta interessa. Mais os Termos de Uso que proíbem uso comercial.

**Abate 5, do Cético do RPM:** a geografia se contradiz. Ou o tráfego é majoritariamente americano
(e o RPM é 3,34, o pior dos três números de Finanças), ou é liderado por Nova Zelândia, Austrália e
Reino Unido (e aí o dado do Federal Reserve não serve para 3 dos 5 primeiros colocados). E ele
apontou o duplo padrão do corte: esse é exatamente o defeito pelo qual a candidata do PC foi
rebaixada para 4º.

### Não parei na primeira colocada. As outras quatro também não sobrevivem

| # | Candidata | Por que morre |
|---|---|---|
| 2 | Banda para escritório | Cauda já ocupada (WiredScore em 3º, Cloudswitched em 5º), a consulta de ferramenta é 10/10 calculadora **com Spectrum e Verizon**, que são donos do dinheiro e já dão a ferramenta de graça. Categoria Internet & Telecom paga **2,68**, a segunda pior das Américas, **0,62x** do que você já tem |
| 3 | Pallets em container | riverstatespallets já em 6º com widget embutível, SeaRates e Pier2Pier com calculadora 3D de estufagem. Geografia lidera com África do Sul. E o mais grave: **nenhuma dimensão foi verificada em fonte primária** (one-line.com deu 404, hapag-lloyd deu 403, e o pallet de 48x40 nunca foi conferido). Sem isso não existe página no padrão axenworks |
| 4 | Custo de PC ligado 24h | Categoria certa (4,34), mas a cauda está sendo tomada agora por fazendas de 2026 (techcompare.app, appliancerunningcost.com, runwatts.com), e o público número um é britânico enquanto a fonte é a EIA americana. Além disso a EIA republica todo mês, então a página precisa de manutenção mensal, coisa que o axenworks não precisa |
| 5 | Vida útil de SSD por TBW | **Eu matei esta hoje.** Busquei `how long will my ssd last tbw calculator` às 05:27 UTC: storagemath.org, systemrequirements.net, agentcalc.com, ourdailycalc.com, graphicscardhub.com, mais a Lexar que é dona do dado. **Oito de oito são calculadora dedicada ou o fabricante.** Três desses domínios nasceram nos últimos 8 meses. Saturado por fazenda programática |

### O que eu derrubei que o dossiê nem tinha visto

Busquei `how much storage do i need for 4k video editing project calculator` às 05:32 UTC, que é o
quintal do axenworks. Resultado: starlighttools.org com "Footage Storage Calculator: ProRes, H.264,
H.265, DNxHR, BRAW, REDCODE, DCP", systemrequirements.net, storedbits.com, sdcardchecker.com,
videoediting.tips, videoproc, omnicalculator. **A categoria do axenworks também tem fazenda dentro.**

Isso não invalida o axenworks: a consulta que ele ganhou é a de pergunta, não a de ferramenta, e
essa distinção é a linha inteira entre viver e morrer. Mas mata de vez a fantasia de "achar o nicho
onde ninguém está". Não existe mais nicho vazio. Existe nicho onde você é o único com nome e fonte.

---

## 6. AS QUATRO IDEIAS DELE

Antes do veredito, uma coisa que eu não vou esconder: **o material que chegou até mim continha as
ideias 1 e 2 por inteiro, marcava uma terceira como "Viagem, pontos" na tabela de RPM, e a ideia 4
nunca chegou.** O payload veio truncado. Julgo as três que tenho e te dou o filtro para você mesmo
rodar na quarta em dez minutos.

### Ideia 1: visto americano, chance de aprovação. **NÃO VALE.**

Três tiros, cada um fatal.

**O SERP está lotado com exatamente o produto.** Dez de dez resultados em `us visa approval chances
calculator` são a ferramenta descrita: visabeat, visacalculation, afnovisaguide, visank, getvisaodds
(duas vezes), permito.ai, timesofvisa, visascoring, visascore.co. Domínio de correspondência exata,
títulos do tipo "AI Visa Approval Probability Predictor".

**A versão honesta é impossível.** A decisão consular é discricionária sob a INA 214(b) e depende de
entrevista. Não existe função pública que mapeie currículo em probabilidade. Qualquer número que
você mostre é inventado, e isso quebra a sua regra número um.

**A versão honesta que existe responde uma pergunta que ninguém digita.** A taxa de recusa ajustada
por nacionalidade está publicada no travel.state.gov com a fórmula literal e 20 PDFs de FY2006 a
FY2025. É lindo tecnicamente. E o getvisaodds.com já usa isso como isca para a adivinhação, com o
título "Visa Approval Odds Calculator, Free Check + Official Refusal Rates". Você entraria num
mercado saturado oferecendo justamente a metade que o mercado não pediu.

**E a categoria:** Law & Government nas Américas paga **3,05**, ou 0,70x do que você já tem.

**Existe recorte que salva?** Não para AdSense. Existe para outra coisa: você está com processo de
O-1 rodando. Uma página honesta sobre taxa de recusa por nacionalidade é um bom ativo pessoal e um
bom post. Não é um negócio.

### Ideia 2: imposto de renda brasileiro. **NÃO VALE.**

E o motivo não é honestidade, é que essa é a única das ideias que passa limpo no teste de dado, o
que a torna a mais cruel de recusar.

**O dado é excelente.** A Lei 15.270 traz a fórmula fechada com constante no Art. 3º-A (até
R$ 5.000,00, redução de até R$ 312,89; de R$ 5.000,01 a R$ 7.350,00, redução de
`R$ 978,62 - (0,133145 × rendimento)`), e o Art. 16-A cria a tributação mínima de altas rendas com
alíquota `(REND/60.000) - 10` entre R$ 600 mil e R$ 1,2 milhão. Isso é o padrão axenworks
perfeito: fórmula pública, fechada, verificável no Planalto.

**O que mata:**

1. **Você competiria com a Receita Federal pelo cálculo do imposto da Receita Federal.** O
   `www27.receita.fazenda.gov.br` aparece em 1º e em 10º com o simulador oficial. Na busca de
   restituição, gov.br em 1º e 2º.
2. **Sessenta e oito dias de ano.** O prazo do IRPF 2026 foi de 23/03 a 29/05. Construir em agosto
   para ter tráfego em março de 2027 é sete meses de silêncio, e você tem três horas por semana.
3. **O recorte "salvador" já foi tomado.** Dez de dez resultados de IRPFM já são simuladores
   prontos, publicados por escritórios de advocacia e entidades contábeis. Para eles a calculadora é
   isca de cliente de R$ 30 mil. Para você seria AdSense. **Você não ganha uma briga onde o ROI por
   página do concorrente é mil vezes o seu.**
4. **Tráfego brasileiro.** A menor granularidade que o Google publica é "Américas", que junta Brasil
   e Estados Unidos no mesmo balde. Isso significa que o número 3,34 de Finanças nas Américas é
   puxado pelos EUA, e o RPM real de tráfego brasileiro fica bem abaixo. Isso é limitação da fonte,
   não estimativa minha, mas a direção não tem dúvida.

**Existe recorte que salva?** Sim, mas não é este negócio. A calculadora de IRPFM é uma **isca de
consultoria**, não um ativo de AdSense. Se algum dia você quiser vender serviço no Brasil, ela é
ótima. Como fonte de receita publicitária, não.

### Ideia 3: pontos e milhas de viagem. **NÃO VALE, e reprovo pela estrutura, não pela demanda.**

Ressalva honesta: **não recebi o texto desta ideia nem verifiquei nenhum SERP dela.** O que eu tenho
é a categoria marcada na tabela e o número. Mas o número e a estrutura já bastam para decidir.

**A categoria:** Travel & Transportation nas Américas paga **2,95**, ou **0,68x** do que você já
tem. Você trocaria a segunda melhor categoria de vinte e cinco por uma no meio da tabela.

**A estrutura falha nos dois testes que o axenworks passa:**

1. **Não existe fórmula pública e fechada.** O valor de um ponto Livelo, Smiles ou Amex não é um
   número publicado por uma autoridade. É opinião de blog, ou uma cotação que muda. Não existe o
   equivalente do white paper da Apple aqui.
2. **Não passa no teste da versão.** Bônus de transferência mudam todo mês, às vezes toda semana. A
   página nasce desatualizada e exige manutenção permanente. O axenworks não pede uma hora de
   manutenção por ano: 128 GB continua sendo 128 GB em 2030.

É o mesmo defeito que matou a tabela do FedACH, só que pior, porque lá o dado ao menos existia por
doze meses.

### Ideia 4: nunca chegou até mim

Não vou inventar um veredito. Rode você mesmo, em dez minutos, este filtro. **Ela precisa passar em
todos os cinco. Um "não" reprova.**

1. **Categoria:** na tabela da seção 1, ela cai numa categoria que paga **mais de 4,34 nas
   Américas**? Só Home & Garden passa. Se cair abaixo, ela precisa ser espetacular nos outros quatro
   para compensar, e provavelmente não é.
2. **Fatia de ferramenta:** busque a consulta com a palavra "calculator" dentro. Se os dez orgânicos
   forem artigo, o Google não dá vaga de ferramenta nessa intenção e a página nunca vai ranquear.
   Se os dez forem calculadora, a vaga existe mas está ocupada. **Você quer o caso raro: mistura.**
3. **AI Overview:** busque a pergunta em forma de pergunta, no Google real, em inglês. Se a AI
   Overview devolver a resposta **fechada**, morreu. Se devolver uma **faixa** que ainda pede
   cálculo, sobrevive.
4. **Fonte primária:** existe um documento público, de uma autoridade, com o número dentro, que
   você consegue abrir agora e cujos termos de uso permitem uso comercial? Se a resposta for "dá
   para estimar", morreu.
5. **Teste da versão:** esse número vai ser o mesmo em 2030? Se alguma empresa ou órgão republica
   ele todo mês, morreu.

Se ela passar nos cinco, me manda que eu construo o dossiê inteiro dela.

---

## 7. A CONTA DE RECEITA REALISTA PARA 12 MESES

**Premissas, escritas na frente, todas verificáveis:**

1. RPM de Computers & Electronics nas Américas é **4,34** dólares por 1.000 pageviews. Verificado
   hoje no arquivo do próprio Google. **Mas isso é um número de página de marketing do AdSense,
   feito para atrair publisher, não uma garantia.** Trabalho com uma faixa de **2,50 a 4,34**.
2. Nem todo tráfego é das Américas. Tráfego EMEA na mesma categoria paga 2,60, quase 40% a menos.
3. O axenworks tem **20 URLs** no sitemap (verificado, 05:26 UTC).
4. O site **não está indexado hoje**. `site:axenworks.com` devolve zero. Ele subiu ontem.
5. Domínio novo, zero backlink. Indexação completa do sitemap: **2 a 8 semanas**. Posição relevante
   em cauda longa comercial: **4 a 12 meses**. Não prometo mais rápido, e desconfie de quem promete.
6. Aprovação no AdSense: o openyourais foi reprovado várias vezes, então a taxa base **dele** não é
   100% na primeira. Assumo **1 a 2 tentativas**, com 2 a 6 semanas entre elas.
7. **Eu não tenho volume de busca de nenhuma consulta.** O dossiê inteiro nunca produziu um número
   de volume. Então eu **não vou fingir uma previsão de tráfego.** Vou virar a conta ao contrário e
   te dizer quanto tráfego é necessário. Isso é honesto e é mais útil.

### A conta ao contrário: quanto tráfego para quanto dinheiro

| Meta mensal | Pageviews/mês a RPM 4,34 | Pageviews/mês a RPM 2,50 | Por página, com 20 páginas | Por página, com 40 páginas |
|---|---|---|---|---|
| USD 10 | 2.300 | 4.000 | 115 a 200 / mês | 58 a 100 / mês |
| USD 50 | 11.500 | 20.000 | 575 a 1.000 / mês | 288 a 500 / mês |
| **USD 100** | **23.000** | **40.000** | 1.150 a 2.000 / mês | 575 a 1.000 / mês |
| USD 500 | 115.000 | 200.000 | 5.750 a 10.000 / mês | 2.875 a 5.000 / mês |

Traduzindo a linha de USD 100 com 40 páginas: **cada página precisa de 19 a 33 visitas por dia,
todo dia.** Isso é atingível em cauda longa, e é bem mais do que a maioria dos sites de um homem só
consegue no primeiro ano.

### Os três cenários para 12 meses, a partir de hoje

| Cenário | O que acontece | Receita no mês 12 | Acumulado em 12 meses |
|---|---|---|---|
| **Ruim** | Reprovado no AdSense duas vezes, aprovado só em nov/dez, indexação lenta, páginas na segunda e terceira página do Google | **USD 0 a 15 / mês** | **abaixo de USD 100** |
| **Central** | Indexado até out/2026, aprovado até nov/2026, 35 a 40 páginas até jan/2027, cauda longa começa a pegar em mar/abr/2027, 5.000 a 15.000 pv/mês no mês 12 | **USD 15 a 60 / mês** | **USD 150 a 400** |
| **Bom** | Uma página entra no top 3 de uma consulta de volume real, 40.000 pv/mês no mês 12 | **USD 130 a 175 / mês** | **USD 600 a 1.000** |

### A conta do site novo, para comparação direta

Abrir a segunda propriedade agora custa, do seu orçamento de 3 horas por semana: **entre 10 e 15
horas de custo fixo** (DNS, Vercel, design, políticas, testes, sitemap, submissão) antes da primeira
página valer alguma coisa. Isso é **um mês inteiro** do seu tempo. Em troca, você **atrasa o
axenworks em um mês** e **começa um segundo relógio de 12 meses do zero**.

Duas propriedades com metade do esforço não produzem duas meias curvas. Produzem duas curvas que
nenhuma das duas atinge a massa crítica de páginas necessária para o primeiro dólar. **A conta do
site novo em 12 meses é pior que a do cenário Ruim acima, nos dois sites somados.**

### A frase que você precisa ouvir

Nesses números, **AdSense em site-ferramenta não é estratégia de renda para quem ganha USD 2.400
por mês e quer um cargo remoto americano melhor pago.** Você não vai fechar o gap com isso em 12
meses. Não perto.

O valor real do axenworks é outro, e é grande:

1. **Ele destrava a conta.** A barreira difícil é a primeira aprovação. Ganha essa e os outros
   domínios penduram na mesma conta sem passar de novo pelo inferno.
2. **Ele é peça de portfólio.** Um diretor de cinema publicitário com 14 anos que também entrega um
   site estático de 20 páginas, com o white paper da Apple parseado por máquina, suíte de testes
   própria e verificador de produção, é uma história de contratação muito melhor do que a receita
   de AdSense que ele gera. Sua própria memória registra isso: o site nunca foi aprovado, e trouxe
   uma carreira em vez disso.

Trate a receita como termômetro, não como salário. O termômetro ainda vale, porque a aprovação é
o portão.

---

## 8. A PRIMEIRA SEMANA, DENTRO DE 3 HORAS

Ordem exata. Não pule o bloco 1 para ir construir, porque o bloco 1 é o gargalo real e é a única
parte que **só você** pode fazer.

### Bloco 1: destravar a indexação, 40 minutos

- [ ] Rodar `node tools/verify-live.js` na pasta `/Volumes/MAC_SSD01/Projects/adsense-tool-01`.
      Ele checa como Googlebot exatamente o que costuma quebrar. **Só siga se ele sair com código
      zero.** (Eu já conferi as três coisas mais graves às 05:24 UTC e estão certas: home real com
      HTTP 200, `robots` em `index,follow,max-image-preview:large`, canonical no apex, robots.txt
      é o arquivo do projeto, sitemap com 20 `<loc>`.)
- [ ] Search Console: adicionar `axenworks.com` como propriedade de domínio, verificar por DNS.
- [ ] Submeter `https://axenworks.com/sitemap.xml`.
- [ ] Inspecionar e pedir indexação, uma por uma, das cinco que mais importam:
      `/`, `/how-many-hours-of-video-can-128gb-hold/`, `/hours-per-card/`,
      `/prores-file-size-calculator/`, `/video-bitrate-calculator/`.
- [ ] Bing Webmaster Tools também. É grátis, leva 5 minutos, e alimenta o ChatGPT.

### Bloco 2: o teste de 20 minutos que decide a página nova

Não construa antes de fazer isto. Três buscas, no Google real, em inglês, e você anota o que vê:

1. `what speed memory card do i need for 4k 120fps`
   → tem AI Overview? Ela devolve resposta fechada ou uma faixa? Quantos dos 10 orgânicos são
   calculadora?
2. `sd card speed calculator video bitrate`
   → quantos dos 10 são calculadora? (Se for 10 de 10, a vaga existe mas está lotada. Se for 0 de
   10, o Google não dá vaga de ferramenta nessa intenção e você não constrói.)
3. `what is v90 sd card`
   → quem é dono? Se for só a SD Association e fabricante, é editorial e você entra pela resposta.

**Critério de decisão, escrito antes de olhar:** constrói se a busca 1 tiver AI Overview de faixa
(ou nenhuma) e **no máximo 3 calculadoras** nos 10 orgânicos. Se reprovar, roda o mesmo teste na
Alternativa A (`how many photos can 128gb hold`). Se reprovar de novo, **não constrói nada esta
semana** e usa as horas restantes no bloco 4.

### Bloco 3: construir uma página só, 100 minutos

Se o bloco 2 aprovou:

- [ ] Abrir a especificação de Video Speed Class no site da SD Association e **copiar os mínimos em
      MB/s de cada classe para um arquivo novo**, `js/data-cardspeed.js`, no mesmo padrão de
      `js/data-prores.js`. Anotar a URL exata e a data de leitura dentro do arquivo, como comentário.
- [ ] Criar `/card-speed/` reaproveitando `js/engine.js` sem tocar nele. A entrada é codec,
      resolução e fps (dados que o motor já tem). A saída é Mb/s, MB/s, e a classe mínima exigida.
- [ ] A página é **resposta primeiro, ferramenta depois**: parágrafo de abertura que responde a
      pergunta em texto, calculadora, tabela completa, e a linha de fonte com o link para a SD
      Association.
- [ ] Adicionar ao `sitemap.xml`, ao menu em `js/nav.js`, e ao `llms.txt`.
- [ ] Rodar as três suítes: `node tests/run.js`, `node tests/site.js`, `node tests/nav.js`. Nenhuma
      pode reprovar.
- [ ] Deploy, e pedir indexação da URL nova no Search Console.

### Bloco 4: o que fazer com o tempo que sobrar, ou se o bloco 2 reprovar

Nesta ordem de prioridade:

1. **Escrever a página `/about/` de verdade**, com o seu nome, os 14 anos, e o que você dirigiu.
   Isso é a única coisa do site que fazenda nenhuma consegue copiar, e é literalmente o que o
   revisor do AdSense lê. Sem inventar cliente, sem orçamento, sem LA, sem stand-up. Só o que é
   verdade e está no CLAUDE.md.
2. **Revisar `/sources/`** para que cada número do site tenha o documento linkado ao lado.
3. **Não submeter ao AdSense ainda.** Submeta só quando o Search Console mostrar as 20 páginas
   indexadas. Submeter site não indexado é como você compra uma reprovação.

### O que NÃO fazer nesta semana

- Não registrar nem apontar nenhum dos nove domínios.
- Não começar nenhuma das cinco finalistas.
- Não fazer novo garimpo de palavra-chave. Você vai ter dado de verdade no Search Console em umas
  seis semanas, e esse dado vale mais que qualquer garimpo, inclusive este.

---

## APÊNDICE: O QUE EU VERIFIQUEI NESTA EXECUÇÃO

| Hora (UTC) | O que | Resultado |
|---|---|---|
| 05:24 | `axenworks.com` como Googlebot | HTTP 200, title "Video Storage and Recording Time Calculator", canonical no apex, `index,follow`, robots.txt do projeto |
| 05:26 | `axenworks.com/sitemap.xml` | 20 `<loc>` |
| 05:26 | `site:axenworks.com` | **zero resultados. Não indexado** |
| 05:27 | SERP `how long will my ssd last tbw calculator` | 8/8 calculadora dedicada ou fabricante |
| 05:29 | `adsense.google.com/start/calculator-data.json` | HTTP 200, 13.817 bytes, 75 linhas, 25 categorias, 3 regiões. Tabela completa na seção 1 |
| 05:31 | `workcalcs.com/pay-period-calculator/` | HTTP 200, 61.130 bytes, AdSense ca-pub-4455943360752685 |
| 05:31 | `next-payday.com/pay-dates-on-holidays-2026` | HTTP 200, 15.495 bytes, AdSense ca-pub-2073265913083686 |
| 05:32 | SERP `how much storage do i need for 4k video editing` | 7/7 calculadora. A categoria do axenworks tem fazenda dentro |
| 05:33 | RDAP de 8 domínios de calculadora | 6 dos 8 registrados nos últimos 12 meses, 4 em 2026 |
| 05:34 | SERP `how long can a 128gb sd card record 4k video sony a7 iv` | zero calculadoras, só editorial e varejo |
| 05:35 | SERP `DNxHR data rate calculator file size chart` | brawcalculator.com, Atomos, Avid KB, Digital Rebellion. Ocupado |
| 05:36 | SERP `camera recording time calculator memory card by camera model` | CVP.com, alikgriffin.com, vmedia.digital. Ocupado |
| 05:36 | RDAP alikgriffin.com | 2008-05-29 |
| 05:36 | Help Guide da Sony, URL chutada | **404. Não usei** |
| 05:37 | RDAP ulioli.com | 2025-11-11 |

**Não verificado por mim e não usado como fato:** volume de busca de qualquer consulta; o SERP da
consulta principal proposta na seção 2; a especificação da SD Association; as leituras do
Google Trends citadas no corte; as leituras dos três céticos, que eu confirmei por amostragem
(os dois concorrentes de payday) mas não integralmente.
