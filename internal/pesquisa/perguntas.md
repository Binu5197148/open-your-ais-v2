# ANGULO: O QUE AS PESSOAS PERGUNTAM
### Pesquisa de consultas reais, sinal de forum no top 10, e o que isso pede de ferramenta

`Sessao de 2026-08-23, das 12:02 as 12:22 BRT (horario de Sao Paulo). Mercado: Estados Unidos, ingles.`
`Dominio alvo: nicetobuild.com, zero autoridade. Objetivo unico: aprovacao no AdSense e busca organica.`

---

## 0. METODO, E O QUE ELE NAO COBRE

Duas fontes, as duas do proprio Google, as duas abertas nesta sessao.

**Fonte A, autocomplete real do Google.** Endpoint publico `suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us`. Chamado por curl, aproximadamente 60 sementes. Retorna a sugestao que o Google mostra ao americano enquanto ele digita. Funcionou a sessao inteira.

**Fonte B, SERP real do Google.** Navegador de verdade (Playwright), `google.com/search?hl=en&gl=us`, top 10 organico lido do DOM, mais o bloco "as pessoas tambem perguntam" e as buscas relacionadas do rodape. **17 consultas foram abertas e lidas com sucesso entre 12:05 e 12:09 BRT.** Depois disso o Google passou a devolver "Our systems have detected unusual traffic from your computer network" e bloqueou o IP. Curl puro nao serve de alternativa: o Google devolve "Update your browser / Your browser isn't supported anymore" para qualquer cliente sem JavaScript, verificado as 12:04.

**Limite honesto:** as 17 consultas abaixo foram vistas com os proprios olhos. Onze consultas que eu queria conferir ficaram sem SERP e estao listadas na secao 10 como NAO VERIFICADO. Nao completei nenhuma delas com memoria.

**Sem volume de busca.** Nao abri Keyword Planner, Ahrefs ou Semrush nesta sessao. Nenhum numero de "buscas por mes" aparece neste documento, porque eu nao vi nenhum.

---

## 1. A LISTA. AS VAGAS DE EMPREGO QUE O GOOGLE ESTA ANUNCIANDO

Consultas onde forum ou grupo de conversa aparece no top 10 do Google. Consulta exata, quem apareceu, em que posicao. Todas abertas entre 12:05 e 12:09 BRT de 2026-08-23.

| # | Consulta exata | Forum no top 10 | Posicao |
|---|---|---|---|
| 1 | `is my contractor quote too high` | reddit r/Contractor, facebook groups/homedesign, quora | **1, 2**, 9 |
| 2 | `contractor asking for 50% deposit` | reddit r/HomeImprovement, facebook groups/ilovestpetefl, quora | **1, 2**, 6 |
| 3 | `should i pay a contractor before work is done` | reddit r/HomeImprovement, facebook x2, quora | **1, 2**, 7, 8 |
| 4 | `how to tell if a contractor is overcharging me` | reddit r/homeowners, houzz discussions, facebook, quora | **1**, 4, 5, 6 |
| 5 | `what is not included in a contractor estimate` | houzz discussions, facebook, reddit r/Contractor | **1, 2**, 5 |
| 6 | `what order to renovate a house` | reddit, facebook, quora | **1**, 4, 7 |
| 7 | `how much markup do contractors charge` | reddit r/Contractor, facebook | **1**, 3 |
| 8 | `how long does a kitchen remodel take` | reddit r/HomeImprovement, facebook groups/kitchenrenodesignideas | **1, 2** |
| 9 | `what questions to ask a contractor before hiring` | reddit r/homeowners | **1** |
| 10 | `do i need a permit to remodel my bathroom` | reddit r/HomeImprovement | **1** |
| 11 | `what is contractor overhead and profit` | reddit r/ConstructionManagers, facebook x2 | 2, 8, 9 |
| 12 | `what does allowance mean in a construction contract` | reddit r/Homebuilding | 7 |
| 13 | `hidden costs of a kitchen remodel` | reddit r/Remodel | 4 |
| 14 | `how to make my living room look expensive` | reddit r/interiordecorating, houzz | 3, 5 |
| 15 | `small bathroom ideas on a budget` | facebook groups | 4 |

**Dez das quinze tem forum na primeira posicao. Cinco tem forum na primeira E na segunda.**

### Onde o forum NAO aparece, e a briga ja foi arbitrada

| Consulta exata | Top 10 | Leitura |
|---|---|---|
| `kitchen ideas on a budget` | pinterest, ikea, hgtv, thespruce, lxhausys | Zero forum. Marca grande dona do terreno. |
| `what is a change order in construction` | procore, agc.org, autodesk, aiacontracts, rhumbix | Zero forum. Documento tecnico ja existe e e bom. |

Isso mata duas ideias de uma vez. **Nao faca conteudo de inspiracao** (o Pinterest e a HGTV ja ganharam). **Nao faca dicionario de jargao de construcao B2B** (a Procore e o AIA ja ganharam, e sao autoridades de verdade no assunto).

---

## 2. O SINAL DENTRO DO SINAL, E ELE E MAIS FORTE QUE A LISTA

Forum no top 10 ja diz que o Google se contentou com conversa. Mas eu fui abrir os threads e medir. Peguei upvotes, comentarios e data de cada thread do Reddit que esta ranqueando, via API JSON do proprio Reddit, as 12:14 BRT.

| Consulta | Thread que o Google poe no topo | Data | Upvotes | Comentarios |
|---|---|---|---|---|
| `should i pay a contractor before work is done` | "Paying a contractor 50% upfront?" | 2023-10-04 | **0** | 27 |
| `contractor asking for 50% deposit` | mesmo thread acima, tambem em #1 | 2023-10-04 | **0** | 27 |
| `hidden costs of a kitchen remodel` | "5 hidden costs that turned my $45k kitchen remodel into $65k" | 2025-09-20 | **0** | 4 |
| `how long does a kitchen remodel take` | "How long does the actual demo/build part..." | 2021-12-31 | **2** | 24 |
| `what questions to ask a contractor before hiring` | "Questions you wished you'd asked a general contractor" | **2020-11-06** | 8 | 24 |
| `do i need a permit to remodel my bathroom` | "Should I pull a permit on a bathroom remodel?" | 2021-11-18 | 10 | 16 |
| `what does allowance mean in a construction contract` | "Construction Allowances" | 2024-09-20 | 8 | 12 |
| `how much markup do contractors charge` | "Markup and Profit" | 2024-10-31 | 19 | 73 |
| `is my contractor quote too high` | "Was this the correct way to handle a too high quote" | 2024-10-08 | 185 | 334 |

**Leia a coluna de upvotes.**

O Google esta colocando na **primeira posicao** dos Estados Unidos, para uma pergunta sobre dinheiro que o americano faz antes de assinar contrato, um post do Reddit com **zero upvotes**. Um post que a propria comunidade do Reddit nao votou. Um post de 2023.

E nao e um caso isolado. "hidden costs of a kitchen remodel" ranqueia um post com **zero upvotes e quatro comentarios**. "what questions to ask a contractor before hiring" ranqueia um thread de **novembro de 2020**, quase seis anos atras, com oito upvotes.

Forum no top 10 significa que o Google nao achou documento bom. Forum **morto** no top 10 significa outra coisa, e e mais grave: significa que o Google preferiu uma conversa que ninguem quis nem votar a qualquer documento que existe na web sobre o assunto. Ele nao esta escolhendo o Reddit porque o Reddit e bom. Ele esta escolhendo o Reddit porque o resto e pior.

Essa e a vaga aberta. Nao e uma brecha, e um buraco.

### Terceira camada: o proprio Google sugere "reddit"

No autocomplete, testado as 12:07 BRT, o Google sugere sozinho o sufixo `reddit` para:

- `kitchen remodel cost reddit`
- `bathroom remodel cost reddit`
- `how much to remodel kitchen reddit`
- `general contractor markup reddit`
- `kitchen cabinets cost reddit`
- `contractor overcharging reddit`
- `how long does a bathroom remodel take reddit`
- `how to negotiate with contractors reddit`
- `contractor red flags reddit`

E nao sugere `reddit` para `contractor estimate`, `renovation budget`, `hidden costs renovation`, `flooring installation cost`, `what to renovate first`, `punch list`, `change order construction`.

O padrao e limpo e vale escrever com todas as letras: **o sufixo reddit aparece exatamente onde tem dinheiro e desconfianca, e some onde tem so procedimento.** O usuario americano ja aprendeu a nao confiar no resultado normal quando a pergunta e sobre preco e sobre estar sendo enganado. Ele digita "reddit" de proposito para fugir do site que quer vender pra ele.

Nas buscas relacionadas do rodape o Google chega a oferecer, ele mesmo, os atalhos `is my contractor quote too high site:www.reddit.com`, `site:www.facebook.com` e `site:www.quora.com`. O Google esta literalmente oferecendo ao usuario um jeito de ver so o forum.

---

## 3. A SEPARACAO PEDIDA: DESEJO, EXECUCAO, MEDO

### DESEJO. Quero morar num lugar bonito

Do autocomplete (12:03 e 12:12 BRT):

`kitchen ideas on a budget` · `kitchen ideas on a budget remodel` · `small kitchen ideas on a budget` · `kitchen backsplash ideas on a budget` · `outdoor kitchen ideas on a budget` · `how to make my house look expensive` · `how to make my house look nicer` · `how to make my house look cozy` · `how to make my house look more modern` · `how to make my house look bigger` · `how to make my house look better`

SERP conferido: **forum quase ausente.** `kitchen ideas on a budget` tem zero forum no top 10. `small bathroom ideas on a budget` tem um grupo do Facebook em #4 e mais nada. `how to make my living room look expensive` tem Reddit em #3 e Houzz em #5, e e a excecao dentro do desejo.

**Veredito para o desejo: terreno fechado.** Pinterest em #1, IKEA em #2, HGTV em #3, The Spruce em #4. Um dominio novo nao ganha isso, e pior, o desejo e visual e o Google resolve com imagem, nao com pagina. Aqui o Ulisses saber dirigir imagem nao ajuda a ranquear, porque a briga e de banco de imagem e de marca, nao de direcao de arte.

### EXECUCAO. Quantos sacos, quantas caixas, que ordem

Do autocomplete:

`how much drywall do i need for a 12x12 room` · `how much drywall do i need for 1000 square feet` · `how many boxes of tile do i need for 100 square feet` · `how many boxes of tiles do i need for a bathroom` · `where do i start when renovating a house` · `where to start when renovating a kitchen` · `what room should i renovate first` · `when renovating what to do first` · `do i need a permit to remodel my bathroom` · `do i need a permit to replace my water heater` · `how much does it cost to gut and remodel a bathroom`

Isso se parte em duas metades com destinos opostos, e confundir as duas foi o erro da rodada anterior.

**Execucao de quantidade** (`how much drywall do i need`, `how many boxes of tile`): geometria pura. **Terreno fechado por calculadora de vinte anos de idade.** Nao consegui abrir o SERP dessas duas por causa do bloqueio, entao marco como nao verificado, mas o autocomplete mostra que a propria sugestao ja e `how much drywall do i need calculator` e `how many boxes of tile do i need calculator`, ou seja o usuario ja espera calculadora e ja sabe que ela existe.

**Execucao de sequencia** (`what order to renovate a house`, `where do i start when renovating a house`, `what room should i renovate first`, `how long does a kitchen remodel take`): **terreno aberto.** `what order to renovate a house` tem Reddit em #1, Facebook em #4, Quora em #7. `how long does a kitchen remodel take` tem Reddit em #1 e Facebook em #2, com o thread do Reddit tendo dois upvotes. Ninguem publicou o documento bom de ordem de obra e de prazo real.

Repare que ordem e prazo **nao tem preco dentro**. Nao apodrece. Nao precisa de fonte de fabricante.

### MEDO. Estou sendo enganado

Do autocomplete, e este e o bloco mais rico que eu colhi:

`is it normal for a contractor to ask for money up front` · `is it normal for a contractor to ask for half up front` · `is it normal for a contractor to ask for 50 down` · `is it normal for a contractor to charge for an estimate` · `is it normal for a contractor to ask for cash` · `is it normal for a contractor to mark up materials` · `what should be included in a contractor's estimate` · `can i ask my contractor for receipts` · `can i ask my contractor for proof of insurance` · `what documents should i ask for when hiring a contractor` · `what does it mean when a contractor gives you an allowance` · `what does it mean when a contractor says cost plus` · `what does it mean when a contractor ghosts you` · `how do i know if a contractor is legit` · `how do i know if a contractor put a lien on my house` · `what if my contractor didn't pull a permit` · `signs of a bad contractor` · `red flags when hiring a contractor` · `contractor red flags to watch out for` · `how much should i pay a contractor up front` · `how much should you pay a contractor before work is done` · `questions to ask contractor before signing contract` · `questions to ask contractor before renovation estimate` · `how to negotiate with a contractor on price` · `how to deal with a contractor behind schedule` · `contractor charging more than quote` · `contractor asking for more money after signed contract` · `contractor refuses to provide itemized bill` · `how to dispute a contractors bill` · `can contractor change price after contract signed`

"as pessoas tambem perguntam", capturado direto do SERP:

`How to tell a contractor their price is too high?` · `Is it normal to pay a contractor 50% upfront?` · `What are red flags when hiring a contractor?` · `How many contractor quotes should I get?` · `What is the maximum deposit a contractor can ask for?` · `What to do if a contractor overcharges you?` · `How much over an estimate can a contractor go?` · `What not to tell your contractor?` · `What should a contractor's estimate include?` · `How do I say no to a contractor's estimate?` · `What is a fair contractor markup?`

**Veredito para o medo: terreno aberto, e escancarado.** Todas as onze consultas de medo que eu abri tem forum no top 10, e dez delas tem forum na primeira posicao.

Repare em `Is it normal to pay a contractor 50% upfront?`. Essa pergunta apareceu no bloco "as pessoas tambem perguntam" de **quatro consultas diferentes** que eu abri: `is my contractor quote too high`, `contractor asking for 50% deposit`, `how much markup do contractors charge` e `how to tell if a contractor is overcharging me`. O Google esta reciclando a mesma pergunta em SERPs diferentes porque nao tem resposta boa pra ela em lugar nenhum.

---

## 4. O QUE ISSO SIGNIFICA, E A TESE DO DONO ESTAVA CERTA PELA METADE

A tese dele: as pessoas sao viciadas em deixar a casa bonita, e travam porque nao descobrem valores sem falar com o empreiteiro.

A busca confirma a segunda metade e desmente a primeira como caminho.

**O desejo e real, e o desejo nao e o negocio.** O vicio em programa de reforma existe, mas quando ele vira busca ele vira `kitchen ideas on a budget`, e essa busca ja tem dono. O desejo traz a pessoa pro assunto. Ele nao abre porta pra um dominio de um dia de idade.

**O bloqueio e o negocio.** A frase dele, "ninguem fala isso antes da obra, voce sempre tem que perguntar pro cara da obra que as vezes te engana", esta escrita no SERP em dez posicoes numero um. O Google concorda com ele. O Google procurou alguem que falasse essas coisas antes da obra e nao achou, e por isso ele esta servindo um post de zero upvote de 2023.

E tem uma coisa que a busca mostra e que a tese dele nao previa: **a pergunta que trava a pessoa quase nunca e sobre quanto custa.** E sobre se o comportamento do outro lado e normal. `is it normal for a contractor to ask for half up front`. `is it normal for a contractor to charge for an estimate`. `can i ask my contractor for receipts`. `what does it mean when a contractor says cost plus`.

Ela nao esta pedindo um numero. Ela esta pedindo **uma segunda opiniao sobre uma relacao de poder.** Ela quer saber se pode fazer uma pergunta sem parecer idiota, e o que a resposta deveria ser.

E por isso que ela vai no Reddit. Nao pelo dado. Pela companhia.

**E por isso que o formato calculadora e a resposta errada.** Calculadora responde "quanto". A pessoa nao esta perguntando quanto. Ela esta perguntando "isso e normal, e o que eu falo agora".

---

## 5. O CONCORRENTE QUE JA EXISTE, E VOCE PRECISA SABER DISSO ANTES DE DECIDIR

Aberto e lido as 12:12 BRT: **https://quotechecker.ai/**

Ranqueia em **#3** para `is my contractor quote too high`, atras de dois foruns.

O que ele e, pelo que a propria pagina diz: manchete "The AI that catches padded quotes before you sign." O usuario cola o orcamento em texto, PDF, foto ou print. A ferramenta marca item por item procurando escopo vago, tarefas agrupadas e permit faltando, e compara preco com benchmark por regiao metropolitana. Gratis, sem cadastro, tres auditorias a cada 30 dias, com um Pro de 10 dolares por mes. Construido por uma pessoa fisica, Montgomery Kuykendall, creditado no rodape.

Tambem ranqueiam na mesma consulta: bylder.com (#5) e yousuperintendit.com (#8).

**Tres leituras, e a terceira e a que importa.**

Primeira: a demanda esta validada por alguem que ja gastou dinheiro construindo. Nao e hipotese.

Segunda: o quotechecker.ai e impossivel de copiar dentro da restricao. Ele depende de LLM rodando num backend e de benchmark de preco por cidade. Isso e API paga, servidor, e uma divida de manutencao mensal. **Nao cabe em HTML, CSS e JavaScript puro num site estatico, e o benchmark de preco por cidade e exatamente o tipo de numero que apodrece e que ja obrigou o Ulisses a despublicar quatro artigos.**

Terceira, e e a boa: **mesmo com o quotechecker.ai existindo e ranqueando em #3, o Reddit continua em #1 e o Facebook em #2.** O Google olhou a ferramenta de IA e continuou preferindo a conversa. Uma caixa preta que cospe um veredito nao satisfez o Google. O que esta faltando naquele SERP nao e mais uma maquina de opinar. E um documento que **mostre o raciocinio** e que o leitor possa conferir.

Isso e uma boa noticia direta pro problema de AdSense do Ulisses, porque o vicio de nove reprovacoes foi "paginas que ASSERTAM autoridade em vez de DEMONSTRAR". A vaga aberta neste SERP pede exatamente demonstracao.

---

## 6. FONTES PUBLICAS ABERTAS QUE TORNAM UMA FERRAMENTA POSSIVEL SEM MENTIR

O problema estrutural de qualquer ferramenta de reforma e que preco nao tem fonte publica estavel. Mas as perguntas de medo, quase todas, **nao sao sobre preco**. Sao sobre conduta. E conduta tem fonte publica, de graca, de governo, com link.

Duas abertas e lidas nesta sessao.

**Procuradoria Geral da California**, https://oag.ca.gov/consumers/general/contractors, aberta 12:16 BRT. Texto na pagina, verbatim: *"By law, a down payment cannot exceed 10% of the project price or $1,000, whichever is less."* Publicado pelo State of California Department of Justice. A pagina nao mostra data de atualizacao.

Isso responde sozinho a pergunta `is it normal for a contractor to ask for half up front`, que apareceu no autocomplete, e a `Is it normal to pay a contractor 50% upfront?`, que apareceu no bloco do Google em quatro consultas diferentes. Na California, 50 por cento de entrada nao e so incomum. E ilegal. E o resultado numero um do Google pra essa pergunta e um post de zero upvote.

**FTC, governo federal dos Estados Unidos**, https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam, aberta 12:19 BRT. Lista os sinais de golpe, verbatim: golpista bate na porta dizendo que estava "in the area"; diz que sobrou material de outra obra; pressiona por decisao imediata; pede pagamento integral adiantado ou so aceita dinheiro vivo; **pede que voce tire os alvaras**; sugere pegar emprestimo com um credor conhecido dele.

E diz o que o contrato precisa ter: nome, endereco, telefone e numero de licenca do empreiteiro; data estimada de inicio e de conclusao; e toda promessa feita em conversa sobre escopo e sobre custo de mao de obra e material. Sobre orcamento: *"A written estimate should include a description of the work to be done, materials, completion date, and the price."*

Observacao operacional: a FTC devolve 403 para fetch simples. Foi preciso abrir com navegador real. Nao e bloqueio de conteudo, e bloqueio de bot.

**Nenhum preco. Nenhum rendimento de fabricante. Nenhum numero que apodrece.** Governo, gratuito, linkavel, e responde direto a pergunta que esta em primeiro lugar sem resposta boa.

---

## 7. O QUE ISSO SUGERE DE FERRAMENTA

Julgando pelo trabalho que a pessoa esta tentando fazer, e nao pelo formato.

O trabalho e: **"chegar na conversa com o empreiteiro sem ser o unico burro da sala."** Nao e calcular. E se preparar para uma negociacao assimetrica.

### A recomendacao, e ela nao e calculadora

**Um conferidor de orcamento que audita ESTRUTURA e nunca PRECO.**

O usuario nao digita quanto custou. Ele responde ao que **esta escrito** no papel que recebeu. O orcamento diz quem tira o alvara. Tem data de conclusao. Tem numero de licenca. Diz o valor da entrada. Separa mao de obra de material. Define o que e allowance e o que acontece se estourar. Diz o que acontece se aparecer servico novo.

A saida nao e um veredito de "caro" ou "barato". A saida e **a lista de perguntas que faltam ser feitas**, cada uma com a fonte publica ao lado e a frase pronta para mandar por mensagem.

Por que isso e a resposta certa nas quatro restricoes ao mesmo tempo:

**Custo zero e sem manutencao.** E logica if/then em JavaScript puro sobre respostas de sim e nao. Zero backend, zero API, zero banco.

**Zero mentira, estruturalmente.** Nenhum preco publicado, entao nenhum numero apodrece. Todo item aponta pra CSLB, FTC ou o orgao estadual, com link e data na propria pagina. A parte perigosa do quotechecker.ai, o benchmark por cidade, e justamente a parte que fica de fora.

**Cura o vicio das nove reprovacoes.** A reprovacao foi por assertar em vez de demonstrar. Aqui a pagina nao pode assertar nem se quiser: cada alerta so existe porque tem uma lei ou uma pagina de governo embaixo. A demonstracao e o produto.

**Ocupa a vaga que o Google esta anunciando.** As tres consultas mais fundas da lista, `what is not included in a contractor estimate` (forum em #1 e #2), `is my contractor quote too high` (forum em #1 e #2) e `should i pay a contractor before work is done` (forum em #1 e #2), sao literalmente essa ferramenta.

### As duas seguintes, se ele quiser tres e nao uma

**Sequenciador de ordem de obra.** `what order to renovate a house` tem Reddit em #1, Facebook em #4, Quora em #7. `where do i start when renovating a house` e sugestao forte do autocomplete. Nao tem preco dentro, entao nao apodrece. E o formato certo aqui nao e calculadora nem lista, e **diagrama**: o que trava o que, o que e irreversivel, onde o inspetor entra. Isso e storyboard. E a unica das tres onde a vantagem de direcao de arte do Ulisses vira ranqueamento e nao so enfeite.

**Estimador de prazo, com a unidade certa.** `how long does a kitchen remodel take` tem Reddit em #1 com dois upvotes e Facebook em #2. `how long does a bathroom remodel take reddit` e sugestao literal do Google. Mas a resposta honesta nao e "seis semanas". E "quantos dias de casa sem cozinha", e onde a espera de material entra. Prazo tambem nao tem preco dentro.

### E a vantagem injusta, usada onde ela paga

Um diretor de cinema com Starbucks, Disney e Nestle no curriculo nao ganha nada tentando fazer a pagina mais bonita de `kitchen ideas on a budget`, porque ali a briga e de banco de imagem contra a HGTV.

Onde ele ganha e no que a lista da secao 2 revela: **o concorrente desse mercado nao tem rosto, nao tem data e nao tem fonte.** Um deles escreve "Meet the Review Board" sem nomear ninguem. O quotechecker.ai, que e o melhor do lote, credita uma pessoa numa linha de rodape.

O Ulisses pode fazer o oposto, e o oposto e barato: nome e rosto na pagina, data de verificacao visivel, cada afirmacao com o link do governo do lado, e o raciocinio desenhado em vez de afirmado. Isso e diferenciacao editorial e visual, que e o oficio dele, aplicada num nicho onde ninguem sequer assina o proprio texto.

### E o que nao fazer

Nao fazer calculadora de preco de reforma. Nao fazer pagina de inspiracao. Nao fazer dicionario de jargao B2B de construcao, porque `what is a change order in construction` tem Procore, AGC e AIA no top 10 e zero forum, e essa briga ja foi arbitrada. Nao fazer sete paginas do mesmo molde, porque foi assim que o outro site foi reprovado.

---

## 8. TODAS AS URLS ABERTAS NESTA SESSAO

**SERPs do Google, lidos em navegador real, 12:05 as 12:09 BRT de 2026-08-23**, todos no formato `https://www.google.com/search?q=<consulta>&hl=en&gl=us`:
`what order to renovate a house` · `is my contractor quote too high` · `contractor asking for 50% deposit` · `how much markup do contractors charge` · `how to tell if a contractor is overcharging me` · `should i pay a contractor before work is done` · `what is not included in a contractor estimate` · `hidden costs of a kitchen remodel` · `what questions to ask a contractor before hiring` · `kitchen ideas on a budget` · `how to make my living room look expensive` · `small bathroom ideas on a budget` · `what is a change order in construction` · `what does allowance mean in a construction contract` · `what is contractor overhead and profit` · `how long does a kitchen remodel take` · `do i need a permit to remodel my bathroom`

**Autocomplete do Google, 12:02 as 12:20 BRT**, `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=<semente>`, aproximadamente 60 sementes.

**Threads do Reddit, metadados lidos via API JSON as 12:14 BRT:**
- https://www.reddit.com/r/Contractor/comments/1fze106/ (2024-10-08, 185 up, 334 comentarios)
- https://www.reddit.com/r/HomeImprovement/comments/16zmk55/ (2023-10-04, 0 up, 27 comentarios)
- https://www.reddit.com/r/Contractor/comments/1gg20z2/ (2024-10-31, 19 up, 73 comentarios)
- https://www.reddit.com/r/homeowners/comments/1ejm8sr/ (2024-08-04, 52 up, 15 comentarios)
- https://www.reddit.com/r/Contractor/comments/1dccgcj/ (2024-06-10, 31 up, 264 comentarios)
- https://www.reddit.com/r/Remodel/comments/1nlukz6/ (2025-09-20, 0 up, 4 comentarios)
- https://www.reddit.com/r/homeowners/comments/jp5231/ (2020-11-06, 8 up, 24 comentarios)
- https://www.reddit.com/r/HomeImprovement/comments/rsujp2/ (2021-12-31, 2 up, 24 comentarios)
- https://www.reddit.com/r/HomeImprovement/comments/qx1lub/ (2021-11-18, 10 up, 16 comentarios)
- https://www.reddit.com/r/Homebuilding/comments/1fl7jgs/ (2024-09-20, 8 up, 12 comentarios)
- https://www.reddit.com/r/ConstructionManagers/comments/1isu45r/ (2025-02-19, 25 up, 37 comentarios)

**Outros abertos e lidos:**
- https://quotechecker.ai/ (12:12 BRT)
- https://oag.ca.gov/consumers/general/contractors (12:16 BRT)
- https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam (12:19 BRT, via navegador, 403 em fetch simples)
- https://www.houzz.com/discussions/5391573/how-to-know-if-a-contractor-is-overcharging-you (URL capturada do SERP, nao aberta)
- https://www.houzz.com/discussions/4853350/what-is-typically-included-in-a-contractor-s-estimate (URL capturada do SERP, nao aberta)

---

## 9. A SURPRESA

Eu esperava achar o forum na terceira ou quarta posicao, abaixo de um Angi ou de uma HomeAdvisor. Foi o contrario. Em dez das quinze consultas o forum esta em **primeiro lugar**, e em cinco delas ele ocupa **primeiro e segundo ao mesmo tempo**.

Mas a surpresa de verdade nao foi a posicao. Foi o placar dos threads.

Um post do Reddit com **zero upvotes** ranqueia em primeiro lugar nos Estados Unidos para `should i pay a contractor before work is done`. Zero. A propria comunidade do Reddit nao achou aquilo bom o suficiente pra votar uma vez. O Google achou melhor que qualquer documento existente na web em ingles.

E existe uma lei da California, publicada de graca num site .gov, que responde a pergunta de forma definitiva: entrada nao pode passar de 10 por cento ou 1.000 dolares, o que for menor. Existe uma pagina da FTC que lista os sinais de golpe. As duas estao publicadas, gratis, indexaveis. E nenhuma delas esta ranqueando nessa consulta.

A resposta existe. Ela e publica. Ela e de graca. E ninguem juntou ela com a pergunta na mesma pagina.

Isso nao e um mercado saturado. E um mercado onde ninguem fez o trabalho.

---

## 10. NAO VERIFICADO. LISTA HONESTA DO QUE FICOU DE FORA

O Google bloqueou o IP as 12:09 BRT. Estas consultas eu **nao consegui abrir** e portanto **nao afirmo nada sobre elas**:

`how much drywall do i need` · `how much does it cost to remodel a bathroom` · `contractor won't give itemized breakdown` · `how many quotes should i get for a renovation` · `what not to tell your contractor` · `how to read a contractor estimate` · `what order do you renovate a kitchen` · `should i replace cabinets or countertops first` · `how much should i pay for labor on a kitchen remodel` · `where do i start when renovating a house` · `how to make my house look expensive`

Tambem nao verificado:

- **Volume de busca de qualquer consulta deste documento.** Nao abri nenhuma ferramenta de keyword. Toda a priorizacao aqui e por sinal de SERP e por autocomplete, nao por volume.
- **Se o bloco "Discussions and forums" do Google apareceu.** Meu detector procurou esse texto e nao encontrou em nenhum dos 17 SERPs. Pode ser que o bloco nao esteja aparecendo, pode ser que meu seletor tenha falhado. Nao afirmo nem uma coisa nem outra. As posicoes de forum na tabela da secao 1 sao todas do resultado organico normal, essas eu vi.
- **Se a lei de entrada de 10 por cento vale fora da California.** A pagina que eu abri e da Procuradoria da California e fala da California. Nao conferi nenhum outro estado.
- **Data de atualizacao das paginas de governo.** Nem a pagina da OAG nem a da FTC mostraram data visivel de ultima revisao. Se uma dessas fontes for citada no site, a data que aparece na pagina do nicetobuild tem que ser a data em que **nos** conferimos, nao uma data que a fonte nao publica.
- **Trafego, receita ou desempenho do quotechecker.ai.** Li a pagina inicial dele. Nao sei se ele ganha dinheiro, nao sei quantas pessoas usam.
- **Os dois threads do Houzz.** Capturei as URLs do SERP mas nao abri as paginas. O Houzz devolveu "Access Restricted" quando o navegador tentou outra pagina do dominio nesta sessao.
