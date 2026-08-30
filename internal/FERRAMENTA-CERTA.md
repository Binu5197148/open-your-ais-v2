# A FERRAMENTA CERTA PARA nicetobuild.com

Decisão escrita em 23 de agosto de 2026, depois de ler as cinco pesquisas de campo
(238 páginas abertas, 52 posts do Reddit lidos inteiros, 140 comentários, a tabela oficial
de RPM do Google) e o ataque dos três céticos.

---

## 1. A RESPOSTA

**Construa um site que responde uma pergunta só: em que ordem a obra acontece, e quem precisa
dizer sim entre um passo e o outro. Chama Build Order, mora em nicetobuild.com, e a parte
interativa é só a porta de entrada. O produto de verdade são as páginas de texto.**

Em uma frase para a sua mãe: é o site que conta, antes da obra começar, o que vem primeiro,
o que trava o que, quando o fiscal da prefeitura tem que entrar, e o que sempre aparece no meio
do caminho sem estar em orçamento nenhum. Sem falar um preço. Nunca.

E vou ser direto sobre uma coisa antes de qualquer outra: **a ferramenta interativa não é o
produto.** Você responde cinco perguntas tocando com o dedo e ela te mostra a sua sequência.
Bonito. Mas o Google não clica, o revisor do AdSense não clica, e nenhum dos dois vê o que sai
depois do clique. O que eles veem são as vinte páginas escritas. É lá que mora o site.

---

## 2. A TELA, os primeiros cinco segundos

**Na raiz (nicetobuild.com) a pessoa NÃO cai na ferramenta.** Ela cai num documento assinado.

Fundo claro. Uma coluna. Tipografia grande, como uma página de livro, não como uma landing page.

Primeira coisa que ela lê, em corpo enorme:

> **What order does a renovation actually happen in?**

Abaixo, três linhas na sua voz, sem marketing:
ninguém te conta isso antes da obra começar, então você acaba perguntando pra pessoa que está
fazendo a obra, e às vezes essa pessoa tem motivo pra não te contar.

Abaixo disso, e isso é raro na internet inteira, **um parágrafo dizendo o que o site se recusa
a fazer**: não fala preço, não fala quantos dias, não vende nada, não pede email, não tem
cadastro. E diz por quê, em uma frase cada.

Depois, três links grandes, do tamanho de botão, cada um levando pra uma página de leitura:
"O que é uma inspeção de rough-in", "O que aparece e não está no orçamento", "Onde dois bons
empreiteiros discordam".

E só então, mais abaixo, o convite: "Ou responda cinco perguntas e veja a sequência da sua obra".

No rodapé, em toda página do site: seu nome, seu rosto, e a data em que as fontes foram
conferidas. Em corpo de texto normal, nunca em letra miúda.

**Na página da ferramenta (/build-order/)** a pessoa também não cai num formulário vazio. Ela
cai num exemplo inteiro já montado e escrito em HTML fixo: um banheiro, casa de 1968, morando
dentro da obra. Seis fases, três paradas de inspeção, o ponto sem volta, as surpresas, e a lista
de perguntas pra mandar. Tudo visível no carregamento, sem tocar em nada. A ferramenta fica
embaixo, e substitui esse bloco quando ela responde.

Isso não é detalhe de layout. É a diferença entre aprovado e reprovado, e explico no item 3.

---

## 3. POR QUE ESTA, E NÃO AS OUTRAS DUAS

### O placar de verdade

O placar automático marcou 1 a 1 a 1, mas ele contou errado, porque os dois primeiros céticos
escreveram o mesmo vencedor com palavras diferentes. O placar real é:

**Build Order 2, Estimate Decoder 1, The Storyboard 0.**

E os três concordaram em uma coisa antes de discordar no resto: **The Storyboard está morto.**

### O que cada um disse

**O revisor do AdSense (escolheu Build Order).**
Ele abre o site sem clicar em nada e pergunta: se eu tirar a ferramenta, sobra um site? No Build
Order sobra. Ele abre /stops/rough-in/ e encontra três prefeituras de três estados diferentes
(Philadelphia, Rowan County na Carolina do Norte, Republic no Missouri) dizendo a mesma frase,
transcritas dentro da página, cada uma com a data. Isso não é conteúdo remendado, é o valor
acrescentado: alguém juntou três fontes que ninguém tinha juntado. Ele abre /disagreements/ e
encontra um pintor profissional defendendo uma ordem no trabalho de cliente e a ordem inversa
na própria casa, os dois lados publicados. Isso é impossível de gerar em escala. E ele abre
/sources/ e o site conta o que não conseguiu abrir. Frase dele: um site que se recusa a publicar
o dado que venderia melhor é um site que eu não consigo reprovar sem mentir no meu relatório.

**O cético de mercado (escolheu Build Order, mas como biblioteca, não como ferramenta).**
Ele foi conferir os três na busca antes de opinar, e o Estimate Decoder voltou lotado. Achou
**oito** conferidores de orçamento vivos numa única busca, não três. E abriu o quotechecker.ai
com atenção: aquele site **já verifica estrutura**, com estas palavras na própria página, "Missing
permit language", "Front-loaded deposits", "Open-ended change orders", "Vague scope". E já entrega
as perguntas prontas pro empreiteiro. Ou seja, quatro dos cinco pilares do Decoder já estão
publicados e já ranqueiam. Já o Build Order voltou limpo: buscou ferramenta interativa de ordem
de obra e não existe. O que existe é blog de empreiteiro com telefone no cabeçalho, Gantt genérico
de SaaS, e um canadense que faz três perguntas e devolve estimativa de custo pra captar
empreiteiro. E ele respondeu a pergunta que importa, por que ninguém fez: **porque quem sabe a
ordem da obra é o empreiteiro, e o negócio dele é agendar visita, não entregar uma ferramenta
grátis que termina sem formulário.** A informação existe e o dono dela tem um negócio melhor que
anúncio. Isso é vaga aberta de verdade, e ela só fecha pra quem tem custo de produção perto de
zero. Que é você, com agentes.

**O construtor (escolheu Estimate Decoder, e o argumento dele é o melhor dos três).**
Ele não opinou, testou. Escreveu o parser do Decoder e jogou cinco formatos reais de orçamento
dentro. Resultado: acertou 3 de 4 linhas no formato Xactimate, e **zero** em orçamento de
empreiteiro pequeno, zero em orçamento escrito em prosa, zero em colagem de PDF, zero em
transcrição de foto. O motor só funciona numa família de documento. Mas a camada de "o que está
faltando", que é busca de palavra em texto cru, funcionou em todos. E ele achou uma coisa
desconfortável: **R&R, LF, EA e labor minimum não são vocabulário de orçamento de reforma, são
vocabulário do Xactimate, software usado principalmente em sinistro de seguro.** A prova está na
própria bibliografia do desenho: o glossário é do programa de recuperação do furacão Ida em
New Jersey, e o manual de labor minimum é da fabricante do software. Ou seja, as dezessete
páginas de termo do Decoder servem uma população bem menor do que parecia.

### Por que eu fico com o Build Order, apesar do construtor

Três razões, em ordem de peso.

**Primeira: o Estimate Decoder tem oito concorrentes vivos e um deles já ocupou o fosso.**
Um domínio comprado ontem entrando por último numa briga de oito, todos com resposta mais rápida
que a sua, e o diferencial sendo "eu cito lei estadual com data" (que é uma diferença editorial,
invisível dentro do resultado da busca). Na busca, resposta ganha de honestidade. O Build Order
tem zero concorrentes fazendo o mesmo trabalho.

**Segunda: as fontes do Build Order cobrem os cinquenta estados, as do Decoder cobrem quatro.**
O Decoder verifica California, Maryland, Oregon e Connecticut. A pessoa de Ohio chega, lê
"ainda não conferimos o seu estado", e volta pro Reddit. Isso é 46 estados de taxa de rejeição.
O Build Order se apoia em regra **federal** (EPA para tinta com chumbo e amianto, FTC para
alvará e contrato) e em uma sequência de obra que três prefeituras de três estados descrevem
com as mesmas palavras. Isso vale pro país inteiro.

**Terceira: as páginas do Decoder são o padrão exato que já te reprovou nove vezes.**
Dezessete páginas /terms/ com o mesmo esqueleto e duas letras trocadas (LF, SF, EA, SQ), mais
dezesseis páginas /checks/ que o próprio desenho chama de "dezesseis páginas nesse molde".
Trinta e três páginas de molde publicadas juntas num domínio de um dia. O revisor abre quatro
delas lado a lado e reprova sem ler o resto.

**E o que eu roubo do Decoder antes de enterrar ele, porque é bom demais pra perder:**
a folha impressa. Uma página, formato ordem do dia de set, com fase, porta, quem chama a
inspeção, e as perguntas pra mandar. Nenhum concorrente de LLM entrega isso, porque veredito
na tela não vira papel que uma pessoa assustada aceita levar pra dentro de uma conversa.

### Por que o The Storyboard morreu, e ele morreu feio

Os três mataram, e um deles disse que é o único dos três que pode custar **mais caro que um não**.

Ele depende de onze fotografias de uma obra americana real, mesma posição de tripé, onze dias,
com a legenda "Fotografado por Ulisses Balbino". Essa obra não existe. Você está em São Paulo,
o público é americano, e a regra ZERO MENTIRA não deixa assinar o que não foi feito. Gerar as
onze imagens com Nano Banana e escrever "fotografado por" embaixo não é licença poética, é uma
declaração falsa sobre a origem do material, e a política do Google chama isso de misrepresentative
content. Isso não gera reprovação de site, gera suspensão de conta.

E tem mais: a promessa de "300 KB, sem vídeo" é falsa (o construtor mediu: onze frames em
qualidade decente dão 900 KB a 1,2 MB), o formato antes e depois já é botão grátis em quatro
sites, e um quadro 16:9 em tela cheia no fundo escuro come a primeira dobra inteira sem gerar
um pixel de anúncio, ou seja é o único dos três que **reduz** a receita de propósito.

---

## 4. DE ONDE VEM CADA DADO

Regra que vale pra todas: **o trecho literal da fonte é copiado pra dentro da nossa página**,
junto com o link e a data em que abrimos. Porque link morre. A pesquisa já achou uma página
morta do CSLB nesta mesma semana. Com o trecho copiado, a afirmação continua auditável mesmo
depois do link quebrar.

### A espinha da sequência, três jurisdições independentes, todas abertas em 23/08/2026

1. **Philadelphia Department of Licenses and Inspections**
   https://www.phila.gov/departments/department-of-licenses-and-inspections/inspections-by-permit-type/
   Lista as inspeções em ordem numerada. Frases literais que viram as regras do site:
   "Do not pour any concrete until the inspection has passed successfully" e
   "(313) Rough-in all mechanical, electrical, plumbing, and fire suppression work. Do not install
   any drywall or finishes until the inspection has passed successfully".

2. **Rowan County, Carolina do Norte**
   https://www.rowancountync.gov/398/Inspections
   Literal: "Rough-in inspections shall be made when all building framing and parts of the
   electrical, plumbing, fire protection, or heating-ventilation or cooling system that will be
   hidden from view in the finished building have been placed, but before any wall, ceiling
   finish, or building insulation is installed."

3. **City of Republic, Missouri**
   https://www.republicmo.com/295/Building-Stages-Requiring-Inspections
   Literal: "8) Rough-In. This inspection is required after all framing, mechanical, electrical,
   plumbing, draft stopping, and fire stopping is completed. This inspection is to be conducted
   prior to insulation and sheet rock installation."

Três cidades, três estados, a mesma frase. **Isso é a prova visível de que a ordem é amarrada em
código de construção e não em preço.** Vai impressa lado a lado na página /stops/rough-in/, e é
a coisa que nenhum concorrente tem.

### O texto do código, com a ressalva escrita na página

**up.codes**, https://up.codes/s/lath-gypsum-board-and-gypsum-panel-product-inspection
Literal: "Lath, gypsum board and gypsum panel product inspections shall be made after lathing,
gypsum board and gypsum panel products, interior and exterior, are in place, but before any
plastering is applied or gypsum board and gypsum panel product joints and fasteners are taped
and finished."
**Ressalva obrigatória na página:** a instância que abriu estava rotulada Illinois Building Code
2021, seção 110.3.6. A numeração muda de estado pra estado. O site cita a frase e diz isso, em
vez de fingir uma seção única válida no país inteiro.

### Regra federal, e por isso vale nos cinquenta estados

**Tinta com chumbo, casas anteriores a 1978. EPA.**
https://www.epa.gov/lead/renovation-repair-and-painting-program
A própria página carimba "Last updated on June 17, 2026". Exige que qualquer pessoa paga para
mexer em superfície pintada em casa construída antes de 1978 seja certificada.
Complemento: https://www.epa.gov/lead/lead-renovation-repair-and-painting-program-rules
É um ano fixo dentro de uma regra federal. **Não apodrece nunca.**

**Amianto antes da demolição. EPA.**
https://www.epa.gov/asbestos/protect-your-family
Literal: "Generally, you can't tell whether a material contains asbestos simply by looking at it,
unless it is labeled." E onde ele mora, de https://www.epa.gov/asbestos/learn-about-asbestos :
piso vinílico e a cola dele, tinta texturizada e massa de parede, cano de água quente revestido.
O efeito na sequência, que é a parte que ninguém escreve: o teste tem que **voltar** antes da
demolição ser agendada, não no meio dela.

**Água antes de tudo. EPA.**
https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home
Literal: "The key to mold control is moisture control." e "It is important to dry water-damaged
areas and items within 24-48 hours". Isso dá fonte de governo para uma regra que no Reddit só
existia como frase de fórum ("water will rearrange your priorities in a hurry", 187 upvotes).

**Quem tira o alvará, e por que isso é sinal de golpe. FTC.**
https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam
Literal, na lista de sinais de golpe: "Scammers ask you to get any required building permits."
E sobre orçamento: "A written estimate should include a description of the work to be done,
materials, completion date, and the price."
**Atenção, e isso é uma correção importante:** um dos desenhos afirmou que essa página devolve
403 e por isso a excluiu. Ela **não** devolve 403. Dois agentes diferentes abriram ela com sucesso
em 23/08/2026, um às 12:19 e outro depois, 200 com 490 KB, usando navegador de verdade. Ela só
bloqueia robô. **Use, e carimbe a data em que abrir.**

### Detector de fumaça disparado pelo seu alvará, uma das surpresas mais limpas

**Washington State Legislature**, https://app.leg.wa.gov/wac/default.aspx?cite=51-51-0314
Literal: "R314.2.2 Alterations, repairs and additions. Where alterations, repairs or additions
requiring a permit occur, each dwelling unit shall be equipped with smoke alarms as required for
new dwellings."
**Minnesota Administrative Rules**, https://www.revisor.mn.gov/rules/1309.0314/
Mesma regra, com a exceção literal. Sites de legislatura estadual são a fonte de código mais
durável e mais aberta que existe, e são HTML puro.

### Pagamento amarrado em fase, não em calendário

**California Contractors State License Board**, https://www.cslb.ca.gov/Resources/GuidesAndPublications/WYSKPamphlet.pdf
Código de publicação 13P-078/0824 impresso no próprio documento. Literal: "Pay no more than 10%
down or $1,000, whichever is less." / "Do not let payments get ahead of the work. Payment
schedules and project phases should be detailed in the contract." / "All changes to the contract,
or change orders, need to be in writing and signed by both parties."

**California Attorney General**, https://oag.ca.gov/consumers/general/contractors
Literal: "By law, a down payment cannot exceed 10% of the project price or $1,000, whichever is
less."

### O QUE NÃO TEM FONTE, e por isso o site se recusa a dizer

Isto aqui é o mais importante desta seção inteira, porque é o que te separa dos concorrentes.

- **Quanto tempo dura cada fase em dias. Não existe fonte pública, aberta e datável.** Procuramos
  e não achamos. Então o site mostra ORDEM e DEPENDÊNCIA, e **nunca DIAS**, pelo mesmo motivo pelo
  qual nunca mostra preço. E escreve essa recusa na tela.
- **Limite de entrada nos cinquenta estados. Não existe uma fonte pública única.** O site mostra
  o caso da California como prova de que o limite existe em algum lugar, e manda a pessoa pro
  estado dela pelo seletor oficial https://www.usa.gov/state-consumer . Mais lento e mais feio que
  uma tabela, e é a única versão que não vira mentira.
- **A lista exata de inspeções da cidade DELA. Não temos.** O site entrega o método de descobrir,
  não a resposta.
- **A regra dos 50 por cento da FEMA para zona de alagamento.** fema.gov devolveu 403 nas duas
  tentativas. Entra no site apenas como "pergunte ao floodplain administrator da sua cidade".
- **O International Residential Code.** codes.iccsafe.org não é citável (um agente pegou 403,
  outro pegou 200 com o texto renderizado por JavaScript e portanto não extraível). Não precisa
  dele: três prefeituras reais dizendo a mesma frase é mais forte, e é o que ninguém tem.
- **A cláusula de condição oculta** (o que acontece quando abrem a parede e tem três camadas)
  **não é exigida por lei em lugar nenhum que conferimos.** A página dela diz isso na primeira
  linha, e cita o caso do r/Renovations como caso, não como regra.
- **Estatística de idade do parque imobiliário americano.** api.census.gov devolveu corpo vazio
  nas três tentativas. Não publicar nenhuma.
- **Os 520 bilhões de dólares do Harvard.** A página abre em navegador de verdade (foi lida em
  23/08), mas o número não é necessário em nenhuma página do site. Fica só como planejamento
  interno. Se um dia for publicado, tem que ser reaberto num navegador e datado.

---

## 5. AS PÁGINAS DO SITE

### Lançamento, dezenove URLs, e nenhuma delas é template

| URL | O que responde | Consultas que pega |
|---|---|---|
| `/` | O que é este site, quem escreveu, e o que ele se recusa a fazer | marca, nenhuma consulta específica |
| `/build-order/` | Em que ordem a minha obra acontece, e quem diz sim entre um passo e outro | what order to renovate a house · renovation order of operations · where do i start when renovating a house · what order should renovations be done in |
| `/stops/` | Quantas vezes alguém da prefeitura entra na minha casa, e por quê | what inspections are required for a bathroom remodel |
| `/stops/permit/` | O que é a espera do alvará, e quem tira | who pulls the permit contractor or homeowner · what if my contractor didn't pull a permit · do i need a permit to remodel my bathroom (Reddit em primeiro hoje) |
| `/stops/rough-in/` | **A página mais importante do site.** O que é uma inspeção de rough-in, com três prefeituras lado a lado | what is a rough in inspection · what happens at a rough in inspection |
| `/stops/insulation/` | Por que a inspeção de isolamento vem depois do rough-in e antes de qualquer forro | what is an insulation inspection |
| `/stops/drywall/` | Por que existe inspeção de drywall antes de rejuntar, coisa que quase ninguém sabe | why does drywall need an inspection |
| `/stops/final/` | O que é final, o que é prefinal, o que é punch list | what is a punch list |
| `/surprises/` | O que aparece e não está na conta | hidden costs of a kitchen remodel · what is not included in a contractor estimate (fórum em primeiro E segundo hoje) |
| `/surprises/lead-paint-pre-1978/` | A regra da EPA, o ano fixo, a certificação que você pode pedir por escrito | lead paint rules for contractors pre 1978 |
| `/surprises/asbestos-before-demo/` | Onde ele mora numa casa americana, e por que o teste tem que voltar antes de agendar a demolição | do i need an asbestos test before demo · asbestos in vinyl floor tile remodel |
| `/surprises/smoke-alarms-your-permit-triggers/` | Washington e Minnesota literais | do i need smoke detectors when i pull a permit |
| `/surprises/whats-behind-the-wall/` | As três camadas de teto que estouraram um contrato real, e a frase que precisa estar escrita ANTES do dia da demolição | contractor asking for more money after signed contract · can contractor change price after contract signed |
| `/disagreements/` | Onde dois bons empreiteiros discordam, os dois lados, e a condição que decide qual vale pra você | should you paint before or after flooring · do you install cabinets or flooring first · should i remove baseboards before painting |
| `/find-your-building-department/` | Como achar a lista de inspeções e a tabela de taxas da SUA cidade, com a frase exata pra digitar | permit fees my city, cauda longa |
| `/how-we-check/` | Como cada regra foi decidida, o que é código e o que é prática de ofício, e a regra de nunca publicar preço nem prazo | é a página que espelha plantingcalc.com/methodology, que passou no AdSense com 5 meses de domínio |
| `/sources/` | Cada URL, a data em que abrimos, o trecho literal, e o que NÃO conseguimos abrir | nenhuma, e é a página que decide a aprovação |
| `/about/` | Quem é você pra me dizer isso, e o que você NÃO é | nenhuma |
| `/privacy/` | O que vocês fazem com o que eu respondo | nenhuma |

### Segunda leva, uma ou duas por semana a partir da semana três

`/stops/framing/` · `/stops/floodplain/` · `/surprises/the-deposit/` (is it normal for a
contractor to ask for half up front) · `/surprises/change-orders/` · `/surprises/debris-and-the-dumpster/`
· `/surprises/living-in-it/` (living in your house during a renovation) · `/surprises/water-first/`

### O que NÃO existe, e é decisão, não esquecimento

**Nada de /build-order/kitchen/, /bathroom/, /basement/, /one-room/, /whole-house/.**
O desenho original pedia cinco páginas com a mesma ferramenta e um texto de abertura diferente.
O revisor do AdSense foi explícito: isso é o exemplo de doorway page transcrito da política do
Google, e sozinho reprova o site inteiro antes dele chegar nas páginas boas. Se um dia essas
páginas existirem, elas são **artigos que não embutem a ferramenta** e linkam pra ela uma vez,
no fim.

**Nada de dicionário de jargão.** "what is a change order in construction" tem Procore, AGC e
AIA no top 10 e zero fórum. Essa briga já foi arbitrada.

**Nada de página de inspiração.** Pinterest, IKEA e HGTV já ganharam, e ali a briga é de banco
de imagem, não de direção de arte.

---

## 6. ONDE A SUA DIREÇÃO DE ARTE ENTRA

Antes de tudo, uma verdade que dois dos três céticos disseram e que precisa ficar registrada:
**foto bonita não ranqueia.** Não houve um caso, em nenhuma pesquisa, de imagem boa ganhando
posição. Foto compra tempo de página, Pinterest e orgulho. Não compra posição.

Então o seu ofício entra em três lugares onde ele vira produto, e em nenhum lugar onde seria
enfeite.

### Primeiro, e é o mais importante: a folha impressa

A saída da ferramenta precisa virar **uma folha que uma pessoa assustada aceite entregar na mão
de um empreiteiro sem passar vergonha.** Uma página, duas colunas, formato de ordem do dia de set:
fase, porta, quem chama a inspeção, o que precisa ser verdade antes. E do outro lado, as seis a
oito perguntas pra mandar, já escritas no vocabulário do ofício.

Isso é cem por cento tipografia e grid. Monoespaçada para os dados dela, serifada para a nossa
leitura, fios de um pixel, margens generosas. Você faz isso há quatorze anos, toda vez que uma
equipe recebe uma folha. É `@media print`, custo zero, apodrecimento zero, nenhuma biblioteca.
E é a única coisa dos três desenhos que nenhum concorrente de LLM entrega, porque veredito na
tela não vira papel.

### Segundo: os diagramas, e eles são o fosso de verdade

Um desenho por página de parada e de surpresa. Preto e branco, SVG, desenhado uma vez. E cada
um mostra o **mecanismo**, não a regra:

- Em `/stops/rough-in/`: a parede aberta com os canos e os fios à vista, e a marcação de que
  depois do drywall aquilo não é mais visível pra ninguém, nem pro fiscal.
- Em `/surprises/whats-behind-the-wall/`: um corte de parede com três camadas, e a marcação do
  instante exato em que o preço deixa de ser o preço.
- Em `/disagreements/`: a diferença visual entre pintar antes e pintar depois do piso.

O concorrente mais forte da categoria (remodelcalculators.com) já tem 331 diagramas técnicos e
eles são embedáveis, ou seja é uma máquina de backlink. Mas todos são manual de campo: corte,
espaçamento, tabela. **Ninguém desenhou a versão para quem está com medo.** Isso é decupagem
aplicada num assunto que hoje só existe em prosa.

### Terceiro: a fotografia, e só do que você tem à mão em São Paulo

Aqui a restrição é dura e você precisa aceitar ela por escrito. Um dos céticos matou o desenho
2 nesse ponto: as fotos que o desenho pedia (cartão de alvará colado na janela, etiqueta vermelha
do inspetor pregada no montante) são artefatos administrativos americanos. Você não tem acesso.
E usar banco de imagem num site cuja tese é "publicamos até os nossos furos" é uma contradição
que envenena a única coisa que o site tem pra vender.

Então fotografe só o que é universal e está ao seu alcance: **o papel sobre a mesa da cozinha às
23h, luz dura lateral, café frio, caneta, uma linha circulada à mão.** A parede aberta. A caçamba.
A poeira. Papel não tem nacionalidade e parede aberta também não.

E a regra que não tem exceção: **toda imagem diz o que ela é.** Se for gerada, a legenda diz que
foi gerada. Nunca escreva "fotografado por" embaixo de imagem sintética. Isso não é escrúpulo
estético, é a linha entre reprovação de site e suspensão de conta.

### E o rosto

Nome, foto e data de conferência das fontes no mesmo lugar de toda página. Isso hoje **não é mais
fosso, é preço de entrada**, porque um concorrente (remodelcalculators.com) já tem autor com
LinkedIn e história pessoal. O que ninguém tem é a página /sources publicando os próprios furos,
e a página /find-your-building-department dizendo em voz alta o que a gente não sabe. Autoridade
demonstrada por admissão de limite. É exatamente a diferença entre assertar e demonstrar que te
reprovou nove vezes.

---

## 7. O MELHOR ARGUMENTO CONTRA. Sem amaciar.

São quatro, e eu não vou esconder nenhum.

**Primeiro, e é o mais afiado: alguém já está encostando, e faz melhor a parte que você recusa.**
buildpermitguide.com é americano, organiza alvará **por cidade** e por tipo de projeto, tem
glossário, e carimba "Data last reviewed April 2026". Ele não tem autor, não tem anúncio visível
e não tem ferramenta. Mas ele já responde a pergunta que o Build Order declara que se recusa a
responder. A sua humildade é correta eticamente e é uma **desvantagem competitiva**. Ela precisa
ser dita em voz alta, não vendida como virtude pura, e a página /find-your-building-department
precisa ser genuinamente útil, com a frase exata pra digitar e o padrão de URL das prefeituras,
ou a humildade vira só meia resposta.

**Segundo: as duas apostas estão em calendários diferentes, e misturar as duas quebra o plano.**
A aprovação no AdSense não precisa de tráfego nenhum e depende só do formato das páginas. É
alcançável em semanas. Ranquear contra um post do Reddit em primeiro lugar com domínio de um dia
leva de **seis a doze meses**, em qualquer um dos três desenhos. Se o seu plano amarrar receita a
ranqueamento no trimestre, o plano está errado independente do desenho escolhido.

**Terceiro: o trabalho de escrita é maior do que parece, e ele é a coisa que quebra.**
O desenho original pedia um grafo com 150 arestas, cada uma com uma frase de por quê escrita à
mão e uma citação datada. O construtor foi direto: você começa, e em fevereiro de 2027 tem 90
arestas boas e 60 escritas às pressas sem fonte, e são as 60 que derrubam o site. Por isso o
lançamento é com **cinco perguntas e umas quarenta arestas**, cobrindo só o que as três
jurisdições verificadas de fato dizem. Crescer devagar de propósito.

**Quarto: a defesa correta contra o risco jurídico é a coisa que estraga a leitura.**
O site nunca pode escrever "you need a permit". Tem que escrever, sempre, as três frases na ordem:
na maioria das jurisdições que conferimos essa parada existe, aqui estão três prefeituras dizendo
isso com as palavras delas e a data, e aqui está como você confere na sua cidade em trinta
segundos. Multiplique por dezenas de blocos. O que a pessoa recebe às 23h com medo é uma sequência
de textos que se recusam a responder, cada um com o mesmo parágrafo de ressalva. **Isso é um
problema de edição, não de código, e ele é real.** A solução é rebaixar a ressalva pra um rodapé
único e fixo em cada página, e deixar o corpo do texto direto.

E o risco que está acima de todos: **o dia em que uma página escorregar de "a lei do estado X
publica isto" para "o seu empreiteiro está errado".** O texto que acusa é mais gostoso de escrever
e converte melhor no curto prazo (o scopegenerator.com já escorregou, publica "73% of homeowners
overpay" sem fonte, sem data e sem autor). No dia em que isso acontecer, o problema deixa de ser
AdSense.

---

## 8. O PRIMEIRO PASSO. A primeira semana, e como saber se funcionou

**Ordem inegociável: texto primeiro, ferramenta depois.** Se o código atrasar, o site ainda existe
e ainda pode ser submetido. Se a ferramenta vier primeiro e o texto atrasar, você submete uma tela
com um formulário e toma a décima reprovação.

**Dias 1 e 2, o aparato.** `/about/`, `/privacy/`, `/sources/`, `/how-we-check/`. São as quatro
páginas que provam que existe uma pessoa atrás do site. A /sources já nasce com os nove links
acima, cada um com o trecho literal copiado e a data, e com a lista do que não abriu.

**Dias 3 e 4, as três páginas âncora.** `/stops/rough-in/` (as três prefeituras lado a lado),
`/disagreements/` (a briga entre os dois pintores), `/surprises/lead-paint-pre-1978/`. Essas três
são a prova de que um humano fez trabalho que não dá pra automatizar. A /disagreements sobe no
lançamento, não depois: ela é a sua defesa contra a acusação de conteúdo gerado em escala e vale
mais que dez páginas comuns.

**Dia 5, a página da ferramenta, com o exemplo estático.** `/build-order/` com o trabalho de
exemplo inteiro escrito em HTML fixo, visível no carregamento. A ferramenta interativa pode nem
existir ainda nesse dia.

**Dia 6.** `/stops/permit/`, `/surprises/asbestos-before-demo/`,
`/surprises/smoke-alarms-your-permit-triggers/`, `/find-your-building-department/`.

**Dia 7.** A home, a folha de impressão, o primeiro diagrama, e as três fotografias.

**Não submeta ao AdSense na primeira semana.** Publicação em massa simultânea num domínio recém
registrado é, por si só, o padrão que a política de conteúdo em escala procura, mesmo quando cada
página é boa. Cresça em ritmo humano por duas ou três semanas, chegue em quinze a vinte páginas,
e só então submeta.

### Como saber se funcionou, e nenhum desses testes precisa de tráfego

1. **Desligue o JavaScript no navegador e abra cada URL.** Se a página continuar sendo um documento
   legível, passou. Se virar um formulário vazio, falhou. Esse é o teste que os três céticos
   disseram que os três desenhos reprovavam.
2. **Abra três páginas lado a lado.** Se as três tiverem os mesmos títulos na mesma ordem e o mesmo
   comprimento, elas viram um molde na tela do revisor, por mais diferentes que sejam os assuntos.
   A /stops/rough-in/ tem que ser longa e comparativa. A /surprises/lead-paint-pre-1978/ tem que ser
   cronológica, porque gira em torno de um ano fixo. A /find-your-building-department/ tem que ser
   curta e prática. Estrutura diferente, comprimento diferente, desenho diferente. O seu próprio
   postmortem de LinkedIn já diagnosticou isso: oito de oito idênticos foi o que quebrou.
3. **Busque no HTML publicado por estas construções: "you need", "your contractor", "is illegal",
   "they left out", "must".** Se achar qualquer uma, reescreva. Isso vira um script de vinte linhas
   que roda antes de publicar. A regra de nunca acusar só sobrevive a dois anos se ela for um teste
   automatizado, não uma boa intenção.
4. **Imprima a folha e olhe.** Se você não entregaria ela na mão de alguém num set, ela não está
   pronta.
5. **Três a quatro semanas depois, Google Search Console.** O sinal a procurar não é clique, é
   **página indexada** e **impressão** em qualquer consulta de cauda longa. Clique vem depois.
6. **Um verificador de links de vinte linhas por trimestre.** A pesquisa já achou uma página morta
   do CSLB nesta semana. Isso não é hipótese.

### E o número honesto sobre dinheiro, pra você não se enganar

A tabela oficial do Google diz que Home & Garden nas Américas paga 13,37 dólares por mil page
views, e é o maior número da tabela inteira (o segundo lugar paga 4,34). Mas esse é o número da
página que **vende** AdSense, é teto de vitrine e não piso. A conta honesta: o primeiro
US$ 100 por mês exige entre 7.500 e 33.000 page views por mês, dependendo do RPM real. A própria
calculadora do Google nem estima abaixo de 50.000 page views por mês. Não espere dinheiro no
primeiro semestre. O que você está comprando nos primeiros seis meses é **a aprovação e o
indexamento**, não a receita.

---

## 9. O QUE FICOU NÃO VERIFICADO

Com todas as letras, porque metade da força deste site é publicar exatamente isto.

**Sobre a busca:**
- **Volume de busca de qualquer consulta deste documento.** Ninguém abriu Keyword Planner, Ahrefs
  ou Semrush. Toda a priorização é por sinal de SERP e por autocomplete. Não converta profundidade
  de autocomplete em número de buscas por mês.
- **Onze consultas ficaram sem SERP** porque o Google bloqueou o IP às 12:09. Entre elas
  "how to read a contractor estimate", "where do i start when renovating a house" e
  "what order do you renovate a kitchen". Não afirmamos nada sobre elas.
- **A ordem no Google para o cluster de ordem de obra** foi lida no DuckDuckGo com kl=us-en, não
  no Google. Trate como mapa da vizinhança, não como posição.
- **Se o bloco "Discussions and forums" do Google apareceu.** O detector não encontrou em nenhum
  dos 17 SERPs. Pode ser que não apareça, pode ser falha do seletor. As posições de fórum são todas
  do resultado orgânico normal, essas foram vistas.

**Sobre os concorrentes:**
- **Tráfego e receita de qualquer concorrente.** Ninguém abriu nenhuma ferramenta de tráfego.
- **Por que diydigits.com** (16 meses de domínio, autor com credencial, cita EPA) não tem anúncio
  nenhum. Pode ser escolha, pode ser reprovação. É a dúvida mais útil que sobrou.
- **Por que remodelcalculators.com** está no Mediavine e não no AdSense. Pode ser RPM maior, pode
  ser um não do AdSense.
- **Se "Maria Ramirez, PE" do review board do homeprojectcalculator.com é uma pessoa real.** Não
  existe link externo nenhum pra ela na página. E esse site **é aprovado no AdSense**, o que diz que
  o Google está aceitando o aparato de autoridade, não a autoridade verificável.
- **angi.com e houzz.com.** Cloudflare bloqueou os dois, várias tentativas, com navegador real.
  Nada afirmado sobre eles.

**Sobre o AdSense:**
- **Quanto o RPM de 13,37 vale na prática pra um site novo.** É número de página de marketing.
  Nenhum dado público de RPM real de site de casa e reforma foi encontrado.
- **Quantos blocos de anúncio o bobvila.com realmente roda.** Os anúncios não carregaram no
  navegador automatizado. Foi medido só o teto do Better Ads.
- **Se página sem texto ganha eCPM menor.** O mecanismo (segmentação por "word frequency") está
  na documentação do Google e foi lido. A consequência em dólar é inferência, não fato.
- **O valor exato do payment threshold em dólar.** A tabela por moeda não renderizou. Os US$ 100
  citados são o exemplo que o próprio Google usa numa página de ajuda.

**Sobre as fontes do site:**
- **A FTC** (consumer.ftc.gov) foi lida em navegador por dois agentes, mas um terceiro registrou
  403 por fetch de servidor. **Antes de publicar qualquer frase dela, abra num navegador e carimbe
  a data.** Não publique de memória.
- **codes.iccsafe.org** ficou fora por dois motivos diferentes em duas sessões (403 numa,
  JavaScript na outra). Não é citável nem numa versão nem noutra.
- **fema.gov** devolveu 403 nas duas URLs de substantial improvement. A regra dos 50 por cento
  não entra no site como regra.
- **api.census.gov** devolveu corpo vazio nas três safras tentadas.
- **O up.codes serve a versão adotada por estado.** A instância lida estava rotulada Illinois. A
  numeração de seção muda. A página tem que dizer isso.
- **O contrato modelo do CSLB mora numa pasta /2025/**, o que anuncia sozinho que vai virar /2026/.
  É o link mais frágil da lista.
- **Nenhuma das páginas de governo citadas mostra data própria de revisão**, com uma exceção
  (a página da EPA sobre chumbo, que carimba "Last updated on June 17, 2026"). Para todas as
  outras, a data que vai no nicetobuild é a data em que **nós** abrimos, nunca uma data que a
  fonte não publica.

**E a lacuna mais honesta de todas:**
- **Ninguém verificou se uma pessoa real, americana, com um orçamento na mão, acha isso útil.**
  Toda a pesquisa é de busca, de fórum e de documento público. A primeira coisa a fazer depois do
  lançamento é mandar a página pra um thread do Reddit onde alguém acabou de fazer exatamente essa
  pergunta, e ler o que ela responde. Isso não custa nada e vale mais que os próximos três meses
  de suposição.
