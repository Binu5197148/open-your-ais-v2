# Diagnóstico: Low value content, openyourais.com

**Data:** 22/08/2026
**Publisher:** ca-pub-4722208859927111
**Estado no painel:** Necessária atenção, motivo Low value content, atualizado 21/08/2026 18h53 GMT-3
**Bloqueio:** nova revisão só a partir de 28/08/2026
**Escopo medido:** 108 artigos em `src/content/blog/`, 10 rotas em `src/pages/`, 118 páginas

Todo número neste documento foi medido no repositório nesta execução. Onde não consegui provar, está escrito que não consegui.

---

## 1. A causa mais provável

**Não há uma causa única, e dizer que há seria inventar.** O que a evidência mostra é um padrão consistente com uma coisa só:

> O site afirma autoridade muito mais vezes do que demonstra, e apaga da página renderizada exatamente as provas que já produziu.

Traduzindo para os números que sustentam a frase: 95 dos 108 artigos falam em primeira pessoa e 30 repetem a credencial "14 anos dirigindo", mas só 36 relatam alguma coisa que o autor de fato executou, só 6 anexam um número a essa execução, 65 não têm um único link externo, e **zero dos 108 têm uma seção de fontes visível para quem lê**, apesar de 24 carregarem um dossiê completo de verificação escondido dentro de um comentário HTML.

Um revisor que abre três artigos vê o mesmo currículo três vezes, nenhuma fonte clicável, nenhuma marcação estruturada de autoria, e 60 artigos datados dentro de um único mês. A conclusão que ele tira não é "isso é plágio". É "isso foi produzido em volume e a autoridade é afirmada, não mostrada". O rótulo curto que o painel usa para isso é Low value content.

---

## 2. O que a evidência mostra, por frente

### 2.1 A prova existe e está invisível. Este é o achado mais importante do documento.

| Medida | Resultado |
|---|---|
| Artigos com bloco de verificação de fontes | **24 de 108** |
| Desses, quantos estão dentro de comentário HTML | **24 de 24** |
| Artigos com seção de fontes visível ao leitor | **0 de 108** |

O bloco do `ltx-2-5-multi-shot-the-model-is-making-your-cut.md` tem sete afirmações numeradas, cada uma com veículo nomeado (datanorth.ai, VentureBeat, blog.comfy.org), corroboração cruzada declarada, e uma linha dizendo qual dado foi deliberadamente omitido por não ter confirmação independente. É melhor do que a maioria das redações faz. Ele começa com `<!--` e termina com `-->`.

Verifiquei que o comentário chega ao HTML final: `dist/blog/ltx-2-5.../index.html` contém a string "Facts verified". Ou seja, o trabalho está publicado e ninguém consegue ver.

**Critério atingido:** F5 bloco Expertise, "clear sourcing". B2 pergunta 1. B1 pergunta 4.

### 2.2 Primeira pessoa não é o mesmo que experiência

| Medida | Resultado |
|---|---|
| Artigos que usam "I", "my", "I've" | 95 de 108 |
| Artigos que relatam ação executada pelo autor (regex amplo: ran, tested, shot, rendered, graded, cut, built, tried, generated, delivered) | **36 de 108** |
| Desses, quantos anexam um número concreto ao que fizeram | **6 de 108** |
| Artigos que repetem a credencial "14 years" / "fourteen years" | **30 de 108** |
| Artigos que citam Pichorra Filmes | 12 de 108 |
| Artigos que citam Ronald Rios Talk Show | 12 de 108 |

Lendo o que a primeira pessoa de fato diz nos artigos que não relatam execução, o padrão fica claro. Em `ai-copyright-battle-human-made-mark-future-creators.md`: "as I have done across countless commercials and comedy shows like the Ronald Rios Talk Show", "My journey, starting Pichorra Filmes in São Paulo in 2012", "I've been a composer, an actor, an editor, a writer, a director". Em `oscars-ai-rules-human-authorship-filmmakers-future.md`, quase a mesma sequência: "a filmmaker who's spent 14 years on set in São Paulo", "Pichorra Filmes, which I founded in 2012", "I've been the composer, the actor, the editor, the writer, and the director".

Isso não é experiência de primeira mão. É um bloco de credencial reinjetado. A rubrica do Google (B5 pergunta 2) pede "expertise de primeira mão e profundidade de conhecimento, por exemplo por ter de fato usado um produto". Ter usado, não ter carreira.

**Esta é a tradução mensurável da hipótese dele de que "o texto não parece humano".** O texto parece humano na gramática e não parece humano na evidência.

### 2.3 Ausência total de sinais de confiança na infraestrutura

| Medida | Resultado |
|---|---|
| Blocos `application/ld+json` em todo o projeto (src, public, dist) | **0** |
| Schema Article, Person ou Organization | **0** |
| Meta tag de autor no `<head>` | **0** |
| Links externos de identidade em todo o chrome do site (header, footer, about, contact, home) | **1** (pichorrafilmes.com.br) |

O v1 tinha Schema.org (commit `909828f`, 19/02/2026, "AdSense compliance + SEO overhaul ... Schema.org"). A migração para Astro derrubou tudo e nada foi reposto. Hoje um crawler que lê uma página de artigo recebe `og:type=article` e `article:published_time`, e nenhuma informação legível por máquina sobre quem escreveu.

Do lado humano é pior: o site inteiro tem um link externo de identidade. Não há LinkedIn, IMDb, Vimeo, portfólio, nem página de trabalho. O `/about` afirma "Fourteen years behind the lens" e não oferece uma coisa clicável para conferir. Confirmei que pichorrafilmes.com.br responde 200, então o único link que existe funciona. É um.

O `/about` ainda coloca "∞ Takes rendered" numa fileira de estatísticas ao lado de "14 Years directing" e "108 Dispatches". Um número decorativo sentado entre números reais.

**Critério atingido:** B2 pergunta 1 e 2, B3 perguntas 1 a 3, B7.

### 2.4 Assinatura de produção em volume

| Medida | Resultado |
|---|---|
| Artigos publicados em março de 2026 | **60 de 108** |
| Que compartilham a data 2026-03-15 | **35** |
| Que compartilham a data 2026-03-02 | 8 |
| Artigos na categoria única "AI" | **96 de 108** |
| Cadência jul/ago 2026 | 37 artigos em 39 dias, cerca de 1 por dia |

Trinta e cinco artigos longos com a mesma data de publicação não é uma acusação, é um fato do frontmatter. Para um revisor, é o sinal mais legível de conteúdo produzido em lote.

O histórico do v1 (`/Volumes/MAC_SSD01/Projects/open-your-ais`) documenta o processo, com recibo:

```
2026-03-04  228ab0a  fix: hide 16 low-value articles to improve AdSense approval chances
2026-03-04  cc5be8f  content: complete expansion of all 15 thin content articles
2026-03-04  d939247  fix: resolve all critical AdSense structural issues
2026-03-15  c3ca889  fix(adsense): comprehensive noindex sweep
2026-03-15  53b3b07  fix: remove 11 off-brand pre-repositioning articles from sitemap
```

O próprio autor já tinha classificado 16 artigos como low value em março. E há um commit de 06/02/2026, `53f9fd2`, "CORREÇÃO CRÍTICA: Remove casos fictícios e substitui por dados reais". Casos fictícios estiveram publicados.

**Critério atingido:** H6 exemplo 1, B1 pergunta 10, B4 perguntas 2 e 3.

### 2.5 O tamanho dos artigos denuncia a régua

| Faixa de palavras | Artigos |
|---|---|
| Abaixo de 800 | 1 |
| **800 a 849** | **20** |
| 850 a 999 | 32 |
| 1000 a 1199 | 22 |
| 1200 a 1499 | 21 |
| 1500 ou mais | 13 |

Média 1.119 palavras, total 120.921. Vinte artigos empilhados logo acima de 800 palavras, e exatamente um abaixo. Isso é o desenho de quem escreveu até bater um piso.

O piso de 800 palavras aparece na memória do projeto como correção para "low content". **O Google diz o contrário.** F5, sinal de alerta B4.7: "Você escreve para atingir uma contagem de palavras porque ouviu que o Google prefere um tamanho?" E a Parte C do arquivo de critérios registra que nenhuma das 9 fontes oficiais define um mínimo de palavras.

### 2.6 Fatos fabricados, confirmados, mas em 2 artigos

Sobreviveram ao cético com prova de git nos dois repositórios:

- `ai-content-flood-google-search-2026.md`, pubDate 2026-03-02, descreve no passado o Google March 2026 core update, que começou a rodar em 27/03/2026. Os números "80-90% of their organic traffic overnight" e "within 48 hours" entraram no commit `5801065` de 04/03/2026, 20 dias antes do evento existir.
- `ai-startup-funding-2026-trends.md`, pubDate 2026-03-02, abre com "Eleven billion dollars ... invested in AI startups in Q1 2026 alone", num trimestre que só terminaria em 31/03. O número real de funding em IA no Q1 2026 foi da ordem de 242 bilhões (Crunchbase). O número falso está no title, na description e sustenta uma tabela de percentuais que soma exatamente 100.

**Escopo real: 2 de 108, ou 1,9% do corpus.** Duas varreduras mecânicas em todos os 108 não encontraram uma epidemia. Isso não explica um veredito de nível de site, mas explica por que a revisão pode morrer na primeira página aberta.

Mais dois com problema alto e barato de resolver por remoção:
- `sundance-2026-solo-ai-filmmaker-democratized-production.md`: constrói o artigo sobre um filme que se recusa a nomear ("Without getting into specifics that would identify the filmmaker"). Não consegui confirmar nem desmentir. Um revisor vai bater na mesma parede.
- `alibaba-qwen-35-seedance-20-china-ai-disruption.md`: pega os 60% de redução de custo do Qwen3.5, que a Alibaba comparou com a própria geração anterior, e reancora contra "OpenAI, Anthropic, and Google Gemini". Mais dois benchmarks que não localizei em fonte nenhuma.

### 2.7 Autoria quebrada em 14 artigos

94 artigos têm `author: "Ulisses Balbino"`, 14 têm `author: "Open Your AIs"`. O `BlogPost.astro` renderiza `/images/ulisses.jpg` com `alt="Ulisses Balbino"` em todos, independente do campo. Resultado: em 14 páginas, a foto dele aparece ao lado do nome de uma marca, num texto que diz "I'm a filmmaker who runs a production company".

### 2.8 Quatro páginas de listagem para o mesmo acervo

`/blog` (108), `/tools` (até 40, filtrando por categoria AI ou título contendo review/test), `/workflows` (25, por tag), `/cases` (2, por tag). Nenhuma tem conteúdo próprio além de um parágrafo de abertura. `/cases` promete "Films, campaigns and sites made with AI inside a real production chain, each one opened up: the brief, the method, the tools" e entrega duas entradas, uma das quais é um artigo geral e não um case de cliente.

Isso encosta em H3 (telas sem conteúdo do publisher, existindo para navegação). Sozinho não reprova nada. Mas uma página que promete um acervo de cases e mostra dois é uma promessa não cumprida na cara do revisor.

---

## 3. O que foi derrubado, e por quê

Esta seção vale tanto quanto a anterior. São quatro semanas de trabalho que ele **não precisa** fazer.

### 3.1 Plágio externo: NÃO CONFIRMADO

36 trechos de 15 a 25 palavras, do miolo de 12 artigos, buscados entre aspas. **0 de 36 retornaram página externa com texto coincidente.** Em 36 de 36 o buscador caiu em modo semântico e devolveu páginas sobre o mesmo tema com redação inteiramente diferente, que é o comportamento esperado quando a frase não existe no índice.

Ressalva registrada e mantida: dois testes de controle com frases sabidamente publicadas em openyourais.com também falharam, então o método tem falso negativo comprovado. Isto é indício, não prova.

**Consequência prática:** a hipótese dele de plágio é razoável e não tem uma única evidência a favor. Não gaste os 6 dias aqui.

### 3.2 Duplicação interna: DERRUBADA COM NÚMERO

Detecção de quase duplicata nos 108 arquivos, shingles de 8 palavras, frontmatter e comentários removidos:

- **0 de 5.778 pares** acima de 5% de sobreposição
- Par mais alto do corpus inteiro: **1,8%**
- Apenas 3 frases de 8 palavras ou mais aparecem em 2 arquivos, nenhuma em 3
- 609 títulos H2 distintos, apenas 9 repetidos, nenhum em mais de 3 arquivos
- Nenhum artigo abre com a mesma sequência de 5 palavras de outro

Medi separadamente as fórmulas de heading: 625 H2 no total, dos quais cerca de 72 seguem cinco moldes ("What this means" 19, "Why..." 17, "The real/actual..." 13, "How..." 13, "...for creators/filmmakers" 10). Cerca de 11,5%. É perceptível e não é boilerplate.

**Consequência prática:** H6 por similaridade entre pares está exonerado. Se for preciso argumentar com o Google, esta é a evidência a favor do site.

### 3.3 Excesso de anúncio: DERRUBADO

Existe **um** slot de anúncio em todo o site (`AdSenseSlot` usado uma vez, em `BlogPost.astro:108`), e só em páginas de artigo. Nenhuma listagem, nenhuma página institucional carrega unidade de anúncio. H4 não tem como ser o problema.

Achado lateral, e é um bug real: esse slot está declarado como `slot="1234567890"`, um valor de dígitos sequenciais que não tem cara de ID emitido pelo AdSense. Confere no painel qual é o ID real da unidade. Isso não causa Low value content, mas se estiver errado o anúncio nunca renderiza.

### 3.4 "O site precisa de mais artigos": FALSO, E CONTRAPRODUCENTE

Parte C do arquivo de critérios, itens 1, 2 e 3, lidos em 9 documentos oficiais: não existe mínimo de palavras, não existe mínimo de artigos, não existe mínimo de tráfego publicado. F5 lista escrever para bater contagem de palavras como sinal negativo, e lista "produzir muito conteúdo sobre muitos temas na esperança de que algum performe" como sinal negativo.

**A conclusão desconfortável: o site precisa de menos artigos, não de mais.** 108 artigos, 96 na mesma categoria, um por dia, é a forma exata do conteúdo que o Google está filtrando agora. Publicar mais um artigo antes de 28/08 piora a leitura, não melhora.

### 3.5 "Texto escrito com IA é o problema": FALSO

F4 é explícito: o problema é conteúdo não original em volume, "no matter how it's created". F6 trata geração por IA como uso legítimo quando o resultado tem qualidade e valor. Não existe detector, score ou percentual publicado de "parece IA".

Nota de risco, porém: `ai-content-flood-google-search-2026.md` diz em texto aberto ao leitor "Every article on Open Your AIs involves some AI assistance" e "My editing pass typically changes 30-40% of an AI draft". Divulgação é recomendada (B3 perguntas 4 a 6). Mas essa formulação específica, num site em avaliação, diz ao revisor que 60 a 70% do texto saiu do rascunho da máquina. Esse artigo sai da lista pelo item 2 do plano de qualquer forma.

---

## 4. O plano até 28/08/2026

Orçamento real dele: no máximo 3 horas por semana. São 6 dias. **O plano abaixo soma 3h05.** Nada aqui exige escrever texto novo.

Ordem por impacto sobre esforço.

---

### ITEM 1. Tornar visível o bloco de fontes que já existe. `45 min`

**O que fazer:** script que lê os 24 arquivos com `<!-- Facts verified ... -->` / `<!-- Verification note ... -->`, extrai o conteúdo e renderiza como seção ao fim do artigo, com título visível "Sources and verification" e os veículos nomeados como texto legível. Onde a fonte tem URL conhecida, virar link. Onde não tem, o nome do veículo e a data já valem.

**Por que é o primeiro:** é o único item do plano que converte trabalho já feito em sinal visível, sem escrever uma linha nova. Cobre 22% do corpus e, o mais importante, cobre **todos os artigos recentes**, que são o padrão que ele quer que o revisor veja. Ataca diretamente o único bloco da rubrica em que o site tira zero absoluto (0 de 108 com fonte visível).

**Feito quando:** abrir `/blog/ltx-2-5-multi-shot-the-model-is-making-your-cut/` numa janela anônima e ver a seção de fontes na página, sem precisar de View Source.

---

### ITEM 2. Despublicar 4 artigos. `15 min`

Adicionar `noindex: true` no frontmatter (o filtro `!data.noindex` já existe em todas as listagens e no sitemap, então basta o campo):

| Arquivo | Motivo |
|---|---|
| `ai-content-flood-google-search-2026.md` | Descreve no passado um update do Google que não tinha acontecido. Estatísticas sem evento possível. |
| `ai-startup-funding-2026-trends.md` | Número central impossível pela data e errado por cerca de 22x. Está no title. |
| `sundance-2026-solo-ai-filmmaker-democratized-production.md` | Fato construído para ser inverificável. |
| `alibaba-qwen-35-seedance-20-china-ai-disruption.md` | Estatística de terceiro com base de comparação trocada. Zero experiência própria. |

E remover `featured: true` de `anthropic-claude-cowork-enterprise-agents-2026.md`, que está em destaque na home carregando uma citação da Kate Jensen tirada do TechCrunch sem atribuir o veículo, com o verbo alterado de "transformed" para "transform".

**Por que:** 108 vira 104. Nenhuma perda real. Ganho: as quatro páginas que encerrariam uma revisão na hora deixam de existir para o revisor.

---

### ITEM 3. Corrigir a autoria dos 14. `10 min`

`sed -i '' 's/^author: "Open Your AIs"/author: "Ulisses Balbino"/'` nos 14 arquivos. O texto deles já é escrito na primeira pessoa dele, e a foto dele já é renderizada ao lado.

---

### ITEM 4. Repor dados estruturados e links de identidade. `50 min`

Duas coisas, uma no `BaseHead.astro` e uma no `/about`:

1. **JSON-LD.** `Article` em cada post, com `author` do tipo `Person`, `datePublished`, `publisher`. `Person` no `/about` com `sameAs` apontando para LinkedIn, Instagram e Pichorra Filmes. É um bloco de template, escrito uma vez, que passa a valer para as 118 páginas.
2. **Links verificáveis.** No `/about` e no bloco de autor de todo artigo, pelo menos três links externos onde o revisor consiga conferir que a pessoa existe e trabalha do que diz que trabalha. Hoje o site inteiro tem um.

**Por que aqui:** é o item com maior alcance por minuto depois do item 1. Toca todas as páginas de uma vez, não exige julgamento editorial, e ataca B2, B3 e B7 simultaneamente.

---

### ITEM 5. Reescrever o `/about` para conter uma afirmação conferível. `40 min`

Trocar afirmação por evidência. O texto atual é bonito e não oferece nada para checar. Precisa de: o nome de um trabalho real que dê para achar (Forno de Minas "Combina com tudo", stop-motion, com Estudio Fue), o link da Pichorra em contexto, e a moldura correta da série que rodou na MTV (a série foi selecionada para a programação nacional e produzida dentro da estrutura deles, nunca "empregado da MTV", conforme a regra do CLAUDE.md).

E remover o "∞ Takes rendered" da fileira de estatísticas. Um número decorativo entre números reais é a coisa mais barata de tirar e a mais fácil de um revisor notar.

---

### ITEM 6, se sobrar tempo. Consertar a citação do TechCrunch. `25 min`

Em `anthropic-claude-cowork-enterprise-agents-2026.md`: linkar o TechCrunch na frase da citação, restaurar "transformed", e remover as capacidades por agente (Finance, Legal, Design) que divergem do que a reportagem de fato descreve. Melhor relação custo benefício da lista de correções de texto, e só entra se os 5 primeiros estiverem no ar.

---

**Total: 3h05.** Nenhum artigo novo. Nenhuma reescrita de corpus.

---

## 5. O que NÃO fazer nos 6 dias

1. **Não reescrever os 108 artigos.** São 25 a 40 horas só para ancorar fontes nos que citam números. Ele tem 3. Um plano de 40 horas é um plano falso.
2. **Não caçar plágio.** 0 de 36 trechos deram coincidência. Não gaste dinheiro em detector antes de 28/08. Se quiser fechar a questão com prova, faça depois, com calma, e não como aposta para esta revisão.
3. **Não publicar artigo novo.** Um artigo a mais num site de 108, 96 deles na mesma categoria, com cadência de um por dia, reforça exatamente a leitura de produção em volume. Se ele publicar entre agora e 28/08, está trabalhando contra o próprio pedido.
4. **Não inflar contagem de palavras.** Vinte artigos empilhados entre 800 e 849 palavras já são a evidência de que isso foi feito uma vez. F5 lista escrever para bater um número como sinal negativo declarado. Não repita.
5. **Não mexer nas datas antigas para o site parecer novo.** F5, sinal de alerta B4.10, é literalmente sobre isso: "Você muda a data das páginas para parecerem novas sem que o conteúdo tenha mudado de forma substancial?". Os 35 artigos de 2026-03-15 devem continuar com a data que têm.
6. **Não mexer no design.** O site é bonito e o design não está em julgamento. Nenhum critério de F1 a F9 avalia tipografia.
7. **Não pedir revisão no dia 28 se os itens 1 a 4 não estiverem no ar e propagados.** Uma tentativa gasta antes da hora custa mais uma janela de bloqueio.

---

## 6. Como saber se funcionou, antes de submeter

Critérios objetivos. Todos verificáveis por ele mesmo, em janela anônima, em cerca de 10 minutos.

**Teste 1, o do revisor.** Abrir 5 artigos aleatórios do `/blog`. Em cada um, responder sim ou não:
- Existe uma seção de fontes visível, sem abrir o código?
- A assinatura é de pessoa física?
- A assinatura leva a uma bio com pelo menos um link externo clicável que confirma quem ele é?

**Passa com 5 de 5 sim nas três perguntas.** Menos que isso, não submete.

**Teste 2, máquina.** Rodar o Rich Results Test do Google numa URL de artigo. Precisa retornar `Article` com `author` do tipo `Person`. Hoje retorna nada, porque há zero JSON-LD no projeto.

**Teste 3, os despublicados.** `curl -s https://openyourais.com/sitemap-0.xml | grep -c "<url>"` precisa cair de 118 para 114. E os 4 slugs do item 2 não podem aparecer em `/blog`, `/tools` nem `/workflows`.

**Teste 4, a prova não pode continuar escondida.** `grep -c "Facts verified" dist/blog/*/index.html` deve continuar dando 1 no arquivo, mas o texto tem que aparecer renderizado. Se ainda estiver só dentro de `<!--`, o item 1 não foi feito.

**Teste 5, o de honestidade.** Abrir o `/about` e apontar, com o dedo, uma afirmação que um estranho consiga confirmar sem acreditar em ninguém. Se não conseguir apontar nenhuma, o item 5 não foi feito.

---

## 7. A conclusão desconfortável: openyourais ou axenworks

Ele pediu honestidade se a resposta fosse essa. É essa.

**Os fatos da tentativa:**
- O script do AdSense foi integrado em 09/12/2025 (v1, commit `39aafde`). São 8 meses e meio de perseguição.
- O v1 tem 19 commits nomeados explicitamente para conformidade com AdSense, entre fevereiro e abril de 2026, incluindo esconder 16 artigos, expandir 15 artigos finos, varreduras de noindex e remoção de casos fictícios.
- O estado mudou para Necessária atenção em 21/08/2026 e as tentativas agora estão limitadas por prazo.
- A memória do projeto já tinha chegado a esta conclusão uma vez: parar de forçar o openyourais, ganhar uma aprovação limpa num site de utilidade, e pendurar os outros domínios nele.

**A leitura estrutural:** 108 artigos em inglês, comentando notícias de IA, um por dia, escritos com apoio de IA, por um autor cuja expertise não é conferível na página. É a forma exata do conteúdo que o Google está filtrando neste momento. As 3 horas do plano melhoram isso de verdade, e mesmo assim ele estará pedindo ao revisor que acredite em 104 ensaios.

**Contra isso:** axenworks.com, que ele publicou nesta semana e que está descrito em detalhe em `static-content-ai-eats-interactive-tools-it-recommends.md`. Sete calculadoras. Dados de taxa vindos do white paper de ProRes da Apple de abril de 2022, documento 028-00500-A, com a tabela nomeada e a página citada. Uma página de fontes que diz de onde veio cada número. Uma lista pública do que a ferramenta se recusa a responder por não ter fonte.

Uma calculadora não precisa provar que um humano escreveu. Ela responde uma pergunta que nenhum artigo responde, e a resposta ou está certa ou está errada. Esse é o tipo de valor que a rubrica do AdSense não precisa julgar.

**Recomendação:**

1. **Fazer as 3 horas do plano.** Não porque garantem aprovação, mas porque cada um dos 6 itens conserta um problema real do site, e nenhum deles é trabalho perdido se o AdSense nunca vier. Um site com fontes visíveis, autoria correta e dados estruturados é melhor para o LinkedIn, para o O-1 e para quem chega pelo Google, independente de anúncio.
2. **Submeter em 28/08.** Está pago, está pronto, e a informação de mais um ciclo vale.
3. **Mover a aposta de monetização para o axenworks agora, não depois do resultado.** Se o openyourais passar, ótimo, mas ele não deve ser o caminho crítico. A memória do projeto já dizia isso antes desta rejeição, e esta rejeição é o segundo dado apontando para o mesmo lugar.
4. **Parar de tratar a aprovação do openyourais como objetivo.** Pela própria anotação dele, esse site foi criado para o AdSense, nunca foi aprovado, e trouxe uma carreira em vez disso. Ele já cumpriu uma função maior do que a que foi pedida.

---

## Anexo. O que eu não consegui provar

Registrado para impedir que qualquer um transforme isto em teoria.

1. **Não sei qual página específica reprovou.** F8 diz que a ação pode ser de página, de seção ou de site, e o painel de políticas é o único lugar que mostra o escopo. O painel dele mostra apenas o rótulo.
2. **Não confirmei plágio externo, e o método usado tem falso negativo comprovado.** Ausência de evidência, não evidência de ausência.
3. **Não estendi a checagem de datas aos 96 artigos não auditados individualmente.** Duas varreduras mecânicas em todos os 108 não acharam outros casos do padrão, mas varredura mecânica não lê contexto.
4. **Não medi tráfego, indexação nem posição de busca.** Não tive acesso ao Search Console nem ao GA nesta execução. Se F1 ("attract an audience") for parte do julgamento, não tenho o dado.
5. **Não sei se o slot `1234567890` é inválido.** Ele tem cara de placeholder. Confere no painel.
6. **Não existe critério oficial de "parece IA".** Parte C item 5. Tudo que apresentei na seção 2.2 são proxies mensuráveis, não um score.
