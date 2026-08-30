# ONDE AS PESSOAS TRAVAM DE VERDADE

Pesquisa de campo em foruns reais.
Sessao: 2026-08-23. Inicio 12:02 BRT (15:02 UTC). Fim 12:20 BRT (15:20 UTC).
Angulo: onde a pessoa trava, nas palavras dela.

---

## 0. METODO E HONESTIDADE DE ACESSO

Reddit bloqueou tres caminhos nesta sessao, verificado por mim:
- `WebFetch` em www.reddit.com: "unable to fetch"
- `curl` com User-Agent de browser em www.reddit.com, old.reddit.com e api.reddit.com: **HTTP 403**
- `r.jina.ai` como proxy: **HTTP 403**, desafio Cloudflare

O que funcionou:
- **Playwright** em www.reddit.com, para varrer paginas de busca e colher URLs de threads
- **Apify**, actor `trudax/reddit-scraper-lite`, que devolve **corpo integral** de post e comentarios

**Volume real desta sessao: 52 posts abertos com o corpo inteiro lido, mais cerca de 140 comentarios
lidos na integra, mais 5 paginas de resultado de busca do Reddit varridas (cerca de 60 titulos a mais
vistos mas nao abertos).** Todo trecho citado abaixo eu li nesta sessao. Cada um tem URL.

Runs Apify, para auditoria:
- `By1AdEgklh2sWiT5W` dataset `pi3xIv6pvoaM8Pxsi` (20 posts, busca por sofrimento)
- `8hsrnkit1yzubG4LI` dataset `kcfHmFvxyRRWfK35d` (16 posts + 97 comentarios, threads de ordem e de orcamento)
- `uNHCa5WENfEYG4RDF` dataset `bobCRBFkZzCKFT5cY` (8 posts, busca por jargao de orcamento)
- `a17e33kXEIBqLnnqj` dataset `3nbLgG8dgP6bRlJlm` (8 posts, busca por "existe um app que")
- `FQLwZakepENc1xtil` dataset `vENOyGi3fgWfGAiGw` (4 posts + 42 comentarios, threads mais recentes)

---

## 1. A FRASE

Tem uma frase escrita de madrugada. Ela nao fala de dinheiro. Ela fala de vergonha.

> **"Because this is like reading a secret code to me."**
> **"I hope I can talk intelligently about it on the phone to get it sorted because I'm feeling like an idiot."**

r/AskContractors, "Need help understanding estimate", postado 03/08/2026, comentario da autora em 04/08/2026.
https://www.reddit.com/r/AskContractors/comments/1veqmor/need_help_understanding_estimate/
https://www.reddit.com/r/AskContractors/comments/1veqmor/comment/p1pmui2/

Vinte dias antes desta sessao. **1 upvote.** 15 comentarios. Ninguem esta servindo essa pessoa.

Ela colou o orcamento inteiro dela no post. Vale ler o que ela nao entende:

```
Install Vanity 2.00 LF @ 44.40 = 88.80
Vanity top - one sink - cultured marble 2.10 LF @ 128.65 = 270.17
Install Fiberglass tub & shower combination 1.00 EA @ 664.65 = 664.65
1/2" drywall - hung, taped, floated, ready for paint 250.00 SF @ 3.31 = 827.50
Quarter round - 3/4" 26.17 LF @ 2.00 = 52.34
Mask and prep for paint - plastic, paper, tape (per LF) 26.17 LF @ 1.62 = 42.40
Labor Minimums Applied
  Electrical labor minimum 1.00 EA @ 81.68
  Finish carpentry labor minimum 1.00 EA @ 124.89
  Vinyl floor covering labor minimum 1.00 EA @ 73.49
  Insulation labor minimum 1.00 EA @ 161.35
  Cabinetry labor minimum 1.00 EA @ 119.31
```

Ela nao sabe o que e **R&R**, o que e **LF**, o que e **EA**, o que e **SF**, e principalmente
nao sabe o que e **"labor minimum"**. Sao cinco minimos de mao de obra empilhados, **560,72 dolares
antes de qualquer trabalho acontecer**, num banheiro pequeno. Ninguem contou pra ela que cada oficio
cobra um piso, mesmo pra tarefa de dez minutos.

E ela pediu pra fornecer os proprios materiais achando que ia economizar, e pode ter piorado: os
minimos de mao de obra continuam la, e ela perde a margem e a garantia do material do empreiteiro.
Ela ficou sem saber nem quem compra o que. Pergunta dela, literal:

> "Or am I now response to get sink fixtures but they supply vanity/sink? And I must pay someone else to install or DIY?"

Um profissional respondeu no mesmo thread e entregou, de graca, o desenho exato da ferramenta:

> "The clean fix is to make them write **owner furnished** next to every item you are buying and
> **contractor furnished** next to everything they are buying, on the same page. Anything not on that
> page is not in the price. Get it in writing before anyone starts demo."
> https://www.reddit.com/r/AskContractors/comments/1veqmor/comment/p1w1lxs/

E outro profissional, no mesmo thread, deu o diagnostico da industria inteira:

> "it's also an example of a quote that's **detailed in all the wrong places**. Dozens of line items
> don't help if the document doesn't make the scope of work and responsibilities unmistakably clear."
> https://www.reddit.com/r/AskContractors/comments/1veqmor/comment/p1n2klq/

---

## 2. O PADRAO DO SOFRIMENTO, EM QUATRO CAMADAS

A pergunta do briefing era: e medo de preco, e ordem, e jargao, e cabimento, e DIY? Li e a resposta e
que sao camadas, e elas tem hierarquia. Vou da mais fraca pra mais forte.

### CAMADA 4 (mais fraca): "quanto custa"
Existe muito, mas quase sempre e o **sintoma**, nao a doenca. Prova: quando o cara conseguiu o numero,
ele ainda estava perdido.

> "The internet said $1500-$3000 but **I don't know why there's such a large range**."
> r/HomeImprovement, "Am I getting ripped off? Contractor says I should upgrade 60 amp to 200 amp for $10k"
> 357 upvotes, 349 comentarios, 15/06/2019
> https://www.reddit.com/r/HomeImprovement/comments/c0vkeh/comment/er7yy5v/

Ele ja tinha a faixa. A faixa nao resolveu nada. **O que falta nao e o numero, e a lista de variaveis
que move o numero.** Toda calculadora de custo que existe entrega exatamente a coisa que ele ja tinha
e que ja tinha falhado com ele.

### CAMADA 3: "eu nao sei a ordem"
Forte, volumoso, e mal servido ate dentro do melhor forum do assunto.

> "Where I get lost (and overwhelmed about) is: **what should happen in what order?** Does tile go in
> before the new cabinets? New electrical work before cabinet install?"
> r/HomeImprovement, "Remodel a kitchen: What to schedule when?", 37 upvotes, 42 comentarios
> https://www.reddit.com/r/HomeImprovement/comments/f6rn3x/remodel_a_kitchen_what_to_schedule_when/

> "I don't know where to start **without wasting money doing things in the wrong order**. I have to be
> smart about sequencing this and **I genuinely don't know how**. how do you even know what's urgent
> vs what can wait six months?"
> r/Home, "just moved into our first house and I am completely overwhelmed", 44 upvotes, 60 comentarios, 09/05/2026
> https://www.reddit.com/r/Home/comments/1t7w0bq/just_moved_into_our_first_house_and_i_am/

**A descoberta dentro desta camada e melhor do que o volume:** a comunidade nao converge.
No thread de ordem de banheiro (164 upvotes, 120 comentarios), o comentario mais votado, com 187
upvotes, comeca assim:

> **"Wow, a lot of terrible advice in here."**
> https://www.reddit.com/r/HomeImprovement/comments/qguzwq/comment/hi93vsi/

No thread de parede, rodape e piso (117 upvotes, 71 comentarios), tres respostas, tres ordens diferentes:
- "Paint your walls **after** your floors are done. Not before." (61 upvotes) https://www.reddit.com/r/HomeImprovement/comments/pqyztb/comment/hdertha/
- Pintor profissional: "**Do the floors first.** The walls will get scuffed and dinged... **If doing it in my own house however I would do trim walls then floor**" (18 upvotes) https://www.reddit.com/r/HomeImprovement/comments/pqyztb/comment/hdfdjq0/
- "**Floors last.** Paint the trim and ceiling first." https://www.reddit.com/r/HomeImprovement/comments/pqyztb/comment/hdg8jjd/

Repare no que o pintor faz: ele **bifurca**. Contratando, uma ordem. Fazendo voce mesmo, outra ordem.
E outro comentario bifurca de novo, por idade da casa: se o rodape esta pregado em lath and plaster de
70 anos, ele nao sai, tem que pintar no lugar.
https://www.reddit.com/r/HomeImprovement/comments/pqyztb/comment/hdet3g0/

**Ou seja: a resposta certa nao e uma lista. E uma arvore de dependencia.** E todo artigo de
"renovation order of operations" da internet publica uma lista. Por isso a pergunta nunca morre.

No thread de fachada (116 upvotes), o comentario campeao com 187 upvotes da a razao, nao a regra:
> "I'd do gutters because **water will rearrange your priorities in a hurry**."
> https://www.reddit.com/r/HomeImprovement/comments/luqj22/comment/gp8fum6/

### CAMADA 2: "eu nao sei o que esta faltando no papel"
Aqui o dinheiro some de verdade, e quase ninguem fala disso.

> "have each contractor **itemize everything they plan to do**. Sometimes differences in the cost of
> bids can be accounted for by **one contractor including something that another has left out**. If you
> notice significant differences in the line items, you can follow up with questions."
> r/HomeImprovement, "How can you verify a contractor isn't BSing you?", 59 upvotes, 58 comentarios
> https://www.reddit.com/r/HomeImprovement/comments/6i6o84/comment/dj48bqo/

O exemplo mais limpo que achei, de uma cerca:
> "We just got 6 bids for a new fence. **Five of the contractors said you need 3 cross beams** for a 6'
> fence. **One said 'two cross beams is perfectly acceptable'. Guess who the low bidder was.**"
> https://www.reddit.com/r/HomeImprovement/comments/83381i/comment/dvf7yl2/

O barato nao era barato. Era **outra cerca**. E isso e invisivel pro dono da casa.

E o caso que virou briga, com o contrato transcrito no post:
> Contrato: "I hereby propose to complete the removal all wall and ceiling coverings..."
> No meio da obra o cara descobriu 3 camadas no teto e 2 em tres paredes, uma delas lath and plaster,
> e pediu mais dinheiro. Primeira resposta do forum: **"Do you have a contract that lists the scope of work?"**
> r/Renovations, "What to tell a contractor who asks for more money half way through the job", 59 upvotes, 55 comentarios
> https://www.reddit.com/r/Renovations/comments/15b7lnb/what_to_tell_a_contractor_who_asks_for_more_money/
> https://www.reddit.com/r/Renovations/comments/15b7lnb/comment/jtovdwv/

O contrato tinha valor, tinha cronograma de pagamento, e **nao tinha uma palavra sobre camadas**.
Nenhuma calculadora do mundo teria salvado essa pessoa. Uma lista de "o que precisa estar escrito no
papel" teria.

### CAMADA 1 (a mais forte): "eu nao consigo LER o documento"
Esta e a raiz. E ela e confirmada pelos DOIS LADOS do balcao.

O lado do dono da casa ja esta acima ("like reading a secret code to me").

O lado do empreiteiro, num desabafo com 132 upvotes e 60 comentarios, de 12/01/2026:

> **"Clients, read through your fucking estimates."**
> "Like read the fat bit of text between the header and the bold number at the bottom. You know, the
> part that has all the actual information."
> "'Why is your price so high compared to this other quote with a smaller number?' I don't know, maybe
> because **you gave them completely different specs than you gave me**. The specs I CLEARLY LISTED IN
> MY ESTIMATE."
> "big number bad. No need read why."
> r/Carpentry https://www.reddit.com/r/Carpentry/comments/1qb5gf2/clients_read_through_your_fucking_estimates/

E o comentario mais votado do thread (90 upvotes) tem o timing exato do trauma:

> "I legitimately, literally just sent out an estimate for a full bath gut/remodel 90 seconds ago...
> and they sent that back **about 60 seconds after i sent the estimate**, there is absolutely 0 chance
> they had time to read the small novel of whats getting done."
> https://www.reddit.com/r/Carpentry/comments/1qb5gf2/comment/nz8b90w/

**Sessenta segundos.** A pessoa olha o numero em negrito no rodape e responde. Nao porque e preguicosa.
Porque o resto do documento e, nas palavras dela mesma, codigo secreto.

E o mesmo empreiteiro, mais abaixo, entrega o sinal de alerta mais util que li hoje:
> "He told me his lowest bid was 9500 and **i told him thats actually so low its concerning**...
> It sounds like the typical scummy lowball initial and rake them over the coals later kind of bids."
> https://www.reddit.com/r/Carpentry/comments/1qb5gf2/comment/nz8qlxz/

---

## 3. A COISA QUE NINGUEM PREVIU (a surpresa)

**A calculadora de preco e estruturalmente incapaz de dizer a verdade, e a prova disso foi escrita por
um homem que passou anos fazendo orcamento.**

Post de 2018, 230 upvotes, 71 comentarios, escrito de conta descartavel por alguem que era o cara que
ia na sua casa dar o preco. Titulo: "A little bit about getting quotes on work".
https://www.reddit.com/r/HomeImprovement/comments/83381i/a_little_bit_about_getting_quotes_on_work/

> "The main thing is that **a lot of folks in this line of work do not have set prices for jobs**."
> "**Do I have any work to do?** This was always number one. If i was low on jobs, I'd always quote low...
> If i was slammed with work, you bet I'm gonna quote high."
> "**Do I want to do the job?** Was the job at the edge of my skill set? Was the homeowner one of those
> 'forever unhappy' types?"
> "I recently got some bushes removed... **First quote came in at $650. Second quote came in at $1200
> and the last quote came in at $200.**"

Mesmo servico, mesma casa, mesma semana: **200, 650 e 1200 dolares**. Variacao de 6x. E nenhuma dessas
tres pessoas estava mentindo.

Confirmado em 2024 numa cozinha, no post de maior alcance que li nesta sessao, **1.398 upvotes e 1.134
comentarios**:
> "we're shopping around for estimates, **all of which have ranged between $20-50k**. **None of the
> contractors have physically seen the kitchen space yet.**"
> r/Renovations, "Contractor red flag?" https://www.reddit.com/r/Renovations/comments/1cbjd5l/contractor_red_flag/

**A consequencia dura pro nicetobuild.com:** qualquer numero medio que a gente publique vai estar errado
pra quase todo mundo que ler, e vai estar errado por um motivo que nao esta na pagina (o cara estava
cheio de servico, ou nao quis a obra, ou nao viu que tinha tres camadas de gesso). Publicar essa media
e assinar embaixo de uma mentira estatistica que a regra ZERO MENTIRA proibe. E, pior, e entregar
exatamente a coisa que ja falhou com o sujeito do painel de 60 amperes.

**Corolario positivo, e e o ativo:** o unico numero confiavel do universo dessa pessoa e o numero que
esta no papel que ela ja tem na mao. A ferramenta certa nunca publica preco. Ela **le o preco que a
pessoa digitou**.

### Segunda surpresa, menor mas util
Quando essas pessoas pedem "um app", elas quase nunca pedem calculadora. Em 8 posts de "existe um
site/app que", a demanda foi **visualizar** (ver antes de fazer) e **organizar** (nao perder o
controle), nunca calcular:
- https://www.reddit.com/r/DIY/comments/1s280zs/whats_the_best_app_to_visualize_home_renovations/ (27 upvotes)
- https://www.reddit.com/r/interiordecorating/comments/1rq9znr/what_software_apps_tools_are_you_using_for/
- https://www.reddit.com/r/DIY/comments/1u0r4gv/how_do_you_manage_and_track_your_home_renovation/
- https://www.reddit.com/r/AusRenovation/comments/1ta40le/is_there_a_website_application_or_app_that_i_can/

Ressalva honesta: dois desses ("How do you manage and track", postado identico em dois subs no mesmo
minuto, e o "honest take on 6 methods" que termina com "I ended up building a small app") tem cara de
divulgacao disfarcada de fundador, nao de dor organica. Nao contei eles como sinal.

---

## 4. O QUE ISSO SUGERE DE FERRAMENTA

Julgando pelo trabalho que a pessoa esta tentando fazer, e nao pelo formato: **o trabalho e
"me faz entender e testar o papel que o empreiteiro acabou de me mandar, antes de eu assinar".**

### PRIMEIRA APOSTA: o Decodificador de Orcamento (Estimate Decoder)

Uma pagina estatica. A pessoa cola ou digita as linhas do proprio orcamento. Sai tres coisas:

1. **Traducao.** Cada sigla e termo vira portugues claro (ingles claro): R&R, LF, SF, EA, labor minimum,
   allowance, owner furnished, contractor furnished, general conditions, overhead and profit, rough-in,
   change order, T and M, mobilization, punch list, draw schedule. O caso do "labor minimum" sozinho
   ja justifica a pagina: cinco minimos empilhados que a autora do post nao sabia que existiam.
2. **O que esta FALTANDO.** A lista do que costuma aparecer em orcamento completo e nao esta no dela:
   quem fornece cada item, alvara, cacamba e remocao de entulho, demolicao, protecao e mascaramento,
   valor das allowances, prazo de garantia, cronograma de pagamento, e a clausula do que acontece
   quando abrir a parede e tiver camada a mais. Foi exatamente esse ultimo item que estourou o contrato
   do r/Renovations/15b7lnb.
3. **As perguntas pra mandar de volta.** Saida imprimivel, no vocabulario do empreiteiro, do jeito que
   o profissional do r/AskContractors ensinou: "escreva owner furnished ou contractor furnished do lado
   de cada item, na mesma pagina".

Por que ela ganha em TODAS as restricoes duras:
- **ZERO MENTIRA por construcao.** A ferramenta nao publica um unico preco. Os numeros sao os da pessoa.
  Nao tem folheto de fabricante pra apodrecer. Nao tem media regional pra envelhecer. Zero divida.
- **Custo zero de manutencao.** HTML, CSS e JS puro. Nada sai do browser dela.
- **Mata o motivo das NOVE reprovacoes.** O problema diagnosticado foi pagina que ASSERTA autoridade e
  pagina parecida com pagina. Aqui cada termo do glossario e uma pagina genuinamente diferente da
  vizinha, porque "labor minimum" e "allowance" nao tem nada a ver um com o outro. E a pagina nao
  asserta nada: ela DEMONSTRA, em cima do documento real da pessoa.
- **Nao briga com Home Depot.** A Home Depot vende a obra. Ela nunca vai publicar "veja o que o seu
  empreiteiro deixou de fora da folha". O conflito de interesse deles e o fosso dele.
- **Busca organica com dominio zero:** o alvo nao e "kitchen remodel cost" (guerra perdida). E a
  cauda longa literal de quem digita o termo que nao entendeu: "what does R&R mean on a contractor
  estimate", "what is a labor minimum on an estimate", "owner furnished vs contractor furnished".
  Cada uma dessas e uma pessoa com o papel aberto na frente, no pior momento, decidindo.

**E aqui entra a vantagem injusta do Ulisses, e ela e literal, nao metaforica:** o objeto central dessa
ferramenta e um DOCUMENTO. Direcao de arte de documento e o oficio dele. Um orcamento de verdade
fotografado numa mesa, com luz dura lateral, anotado a mao, com a linha do "labor minimum" circulada,
e uma imagem que nenhum site de calculadora tem e nenhum consegue fazer. O concorrente tem clip art de
casinha. E, do outro lado, ele pode assinar com nome, rosto e data, enquanto o concorrente escreve
"Meet the Review Board" sem nomear ninguem.

### SEGUNDA APOSTA: o Sequenciador por Dependencia

Nao uma lista. Uma arvore. A pessoa responde de 4 a 6 perguntas que os proprios foruns provaram ser as
bifurcacoes reais:
- Voce vai contratar ou fazer voce mesmo? (o pintor profissional inverteu a ordem por causa disso)
- A casa e de que epoca, o rodape sai da parede ou e lath and plaster? (o rodape que nao sai muda tudo)
- Tem agua entrando em algum lugar hoje? (calha antes de tudo, "water will rearrange your priorities")
- Voce vai mexer em parede, eletrica ou hidraulica, ou so no acabamento?
- Voce vai morar dentro da obra?

Sai a ordem **com o motivo de cada aresta**, nao a regra nua. E a saida de um e diferente da do outro,
o que resolve de novo o problema de paginas iguais.

Ressalva honesta: aqui o fosso e menor, porque artigo de "order of operations" existe aos montes. O que
nao existe e um que **bifurque**. Os foruns provam que a lista unica esta errada, inclusive a lista mais
votada, que levou um "a lot of terrible advice in here" na cara.

### O QUE EU NAO RECOMENDARIA
Calculadora de custo de reforma. Nao por preconceito com o formato, mas porque a evidencia desta sessao
diz que ela entrega a coisa que ja falhou, com um numero que a gente nao consegue sustentar sem mentir,
num termo de busca onde o dominio novo perde de vinte sites mais velhos.

---

## 5. NUMERO DE MERCADO, VERIFICADO NESTA SESSAO

Fonte publica, aberta, com data, aberta por mim no navegador (WebFetch levou 403, Playwright passou):

Harvard Joint Center for Housing Studies, Leading Indicator of Remodeling Activity.
Publicado 26/01/2026, revisado 15/04/2026.
https://www.jchs.harvard.edu/press-releases/remodeling-growth-set-downshift-late-2026

> "overall annual homeowner spending on improvements is expected to reach **$518 billion by the end of 2026**."
> Rachel Bogardus Drew, Director of the Remodeling Futures Program.

A propria pagina traz a nota de revisao, que corrigiu um erro de formula da versao de janeiro. Se for
citar, citar com a data da revisao, nao a de janeiro.

---

## 6. NAO VERIFICADO NESTA SESSAO

Coisas que eu NAO abri e portanto nao afirmo:
- Volume de busca de qualquer termo. Nao abri Keyword Planner nem nada equivalente. As sugestoes de
  cauda longa da secao 4 sao inferencia a partir da linguagem dos posts, nao dado de busca.
- Concorrentes especificos de glossario de orcamento nos EUA. Nao auditei o campo. Nao sei se existe
  um bom.
- A frase "Meet the Review Board" sem nomear ninguem. Veio do briefing, nao verifiquei a pagina.
- A pagina da Houzz sobre tendencias 2026 apareceu como "Access Restricted" no navegador. Nao li.
- Subreddits pedidos no briefing que nao entraram na amostra por nao aparecerem nas buscas:
  r/HomeDecorating entrou com 1 post so, e sem corpo de texto.
- Politica do AdSense sobre ferramentas interativas. Nao li a documentacao nesta sessao.
