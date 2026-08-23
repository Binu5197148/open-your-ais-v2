# Criterios oficiais do Google para "Low value content"
### Checklist auditavel para openyourais.com (ca-pub-4722208859927111)

**Lido e verificado em:** 22/08/2026
**Metodo:** leitura direta das paginas oficiais listadas em "Fontes". Nada aqui vem de memoria ou de forum.
**Estado no painel em 22/08/2026:** "Necessaria atencao", motivo Low value content. ads.txt, pagamentos, anuncios e propriedade estao verdes. Nova revisao so a partir de 28/08/2026.
**Escopo verificado no repo nesta execucao:** 108 arquivos em `src/content/blog/`, 11 arquivos de rota em `src/pages/`.

**Aviso de fidelidade:** as frases entre aspas sao fragmentos curtos das paginas oficiais, mantidos em ingles, usados como ancora para voce localizar a regra. O texto integral tem que ser lido na URL indicada. Onde a regra esta parafraseada, esta marcada como parafrase.

---

## FONTES (todas lidas em 22/08/2026)

| # | Documento | URL |
|---|---|---|
| F1 | Eligibility requirements for AdSense | https://support.google.com/adsense/answer/9724 |
| F2 | Make sure your site's pages are ready for AdSense | https://support.google.com/adsense/answer/7299563 |
| F3 | Google Publisher Policies (secao Behavioral policies > Inventory value) | https://support.google.com/publisherpolicies/answer/10502938 |
| F4 | Google Search spam policies | https://developers.google.com/search/docs/essentials/spam-policies |
| F5 | Creating Helpful, Reliable, People-First Content | https://developers.google.com/search/docs/fundamentals/creating-helpful-content |
| F6 | Google Search's guidance on using generative AI content on your website (last updated 2025-12-10 UTC) | https://developers.google.com/search/docs/fundamentals/using-gen-ai-content |
| F7 | AdSense Program policies | https://support.google.com/adsense/answer/48182 |
| F8 | Understand the Google Publisher Policies and Google Publisher Restrictions | https://support.google.com/adsense/answer/10008391 |
| F9 | Google Search Essentials | https://developers.google.com/search/docs/essentials |

**A ponte que torna F4 obrigatorio para AdSense:** o Google Publisher Policies (F3), na secao "Requirements and other standards", exige que o publisher nao coloque anuncios em telas que violem as spam policies do Google Search. Ou seja, tudo em F4 e criterio de AdSense, nao apenas de SEO.

---

# PARTE A. CRITERIOS DUROS
### Cada item abaixo, sozinho, e violacao declarada. Um unico item vermelho justifica "Low value content".

---

### H1. Toda pagina monetizada tem conteudo original de autoria propria
**Teste:** para cada uma das 108 paginas de artigo, existe pelo menos um bloco de conteudo que so existe porque Ulisses o escreveu (conhecimento de especialista, ideia, analise, review, opiniao). Nao serve resumo de material alheio.
**Como medir:** ler o artigo e apontar o paragrafo insubstituivel. Se voce nao consegue apontar, reprova.
**Fonte:** F1, requisito 1, "high-quality, original, and attract an audience". F2, secao "Do your pages have unique and interesting content?", "your own original content".

---

### H2. Nenhuma pagina monetizada e conteudo de terceiros embutido ou copiado sem comentario, curadoria ou valor adicionado
**Teste:** listar toda pagina cujo corpo principal seja citacao, embed, transcricao, release, feed ou reescrita de fonte externa. Para cada uma, verificar se existe comentario proprio, curadoria ou valor adicionado suficiente para que a pagina tenha razao de existir sozinha.
**Como medir:** proporcao de texto de terceiros versus texto proprio por pagina. Se o proprio for so introducao e conclusao, reprova.
**Fonte:** F3, "Inventory value": o Google nao permite anuncios em telas "with embedded or copied content from others without additional commentary, curation, or otherwise adding value".
**Nota:** este e o criterio que cobre diretamente a hipotese de plagio ou similaridade.

---

### H3. Nenhuma pagina monetizada esta sem conteudo do publisher, em construcao, ou existe so para navegacao
**Teste:** varrer as 11 rotas e todas as paginas geradas. Marcar: paginas de tag, categoria, arquivo, paginacao, redirect, placeholder, 404, pagina de indice sem texto proprio.
**Como medir:** contar palavras de conteudo proprio, fora de menu, rodape e listagem de links. Pagina cujo unico conteudo e uma lista de links entra aqui.
**Fonte:** F3, "Inventory value": telas "without publisher-content or with low-value content, that are under construction, that are used for alerts, navigation or other behavioral purposes". Esta e a unica ocorrencia do termo "low-value content" que encontrei em documento normativo do Google.

---

### H4. Nenhuma tela tem mais anuncio ou material promocional pago do que conteudo do publisher
**Teste:** por template e por breakpoint (375px, 768px, 1280px), medir area de anuncio versus area de conteudo na primeira dobra e na pagina inteira. Incluir links de afiliado e blocos promocionais como material promocional.
**Fonte:** F3, "Inventory value": telas "with more ads or other paid promotional material than publisher-content".

---

### H5. O conteudo esta principalmente num idioma suportado
**Teste:** confirmar que o corpo de cada pagina esta em ingles e que `lang` do HTML bate com o idioma real do texto. Paginas mistas portugues/ingles no corpo principal precisam ser resolvidas.
**Fonte:** F3, "Inventory value", subsecao "Unsupported languages".

---

### H6. O site nao pratica scaled content abuse
**Teste, e este e o criterio de maior risco para um site de 108 artigos longos publicados por um autor so:** verificar se o conjunto de paginas foi gerado em volume com pouco valor unico por pagina.
**Os 5 exemplos que o Google lista, cada um e um teste separado:**
1. "Using generative AI tools or other similar tools to generate many pages without adding value for users"
2. "Scraping feeds, search results, or other content to generate many pages (including through automated transformations like synonymizing, translating, or other obfuscation techniques)"
3. "Stitching or combining content from different web pages without adding value"
4. "Creating multiple sites with the intent of hiding the scaled nature of the content"
5. "Creating many pages where the content makes little or no sense to a reader but contains search keywords"
**Como medir, de forma objetiva:**
- ritmo de publicacao por dia versus tempo humano plausivel de producao (checar datas de commit e frontmatter)
- similaridade entre pares de artigos do proprio site (estrutura de secoes, aberturas, fechamentos, mesmas transicoes)
- quantos artigos compartilham o mesmo esqueleto de headings
**Definicao oficial:** paginas geradas "for the primary purpose of manipulating search rankings and not helping users", com "large amounts of unoriginal content that provides little to no value to users, no matter how it's created".
**Fonte:** F4, secao "Scaled content abuse".
**Ponto critico:** "no matter how it's created". A ferramenta nao e o problema. O volume de conteudo nao original e.

---

### H7. Nenhuma pagina e scraping
**Teste, cada exemplo e um teste:**
1. republicar conteudo de outros sites sem conteudo ou valor original proprio
2. copiar conteudo de outro site e modificar so levemente
3. reproduzir feeds de outros sites sem beneficio unico
4. site dedicado a embutir ou compilar conteudo de terceiros sem valor substancial adicionado
**Como medir:** rodar busca de trecho exato (frases de 8 a 12 palavras, amostradas de cada artigo) contra a web. Registrar URL e data da fonte anterior. Guardar evidencia por artigo.
**Fonte:** F4, secao "Scraping", "taking content from other sites, often through automated means, and hosting it with the purpose of manipulating search rankings".

---

### H8. Nenhuma pagina e thin affiliation
**Teste:** para toda pagina com link de afiliado ou recomendacao de ferramenta paga, verificar se existe teste proprio, review original ou comparacao propria. Descricao copiada do fabricante reprova.
**Fonte:** F4, secao "Thin affiliation": "product descriptions and reviews are copied directly from the original merchant without any original content or added value".

---

### H9. Nenhum doorway abuse
**Teste:** agrupar as 108 paginas por intencao de busca. Se dois ou mais artigos existem para consultas quase identicas, e o leitor precisa passar por um para chegar ao util, reprova.
**Como medir:** clusterizar por titulo e H2. Marcar clusters com 2 ou mais paginas cuja diferenca util seja proxima de zero.
**Fonte:** F4, secao "Doorway abuse": paginas criadas "to rank for specific, similar search queries" que levam a "intermediate pages that are not as useful as the final destination".

---

### H10. Nenhum keyword stuffing
**Teste:** densidade e repeticao antinatural de termos, listas de variacoes de palavra-chave, blocos de cidades ou modelos, numeros repetidos.
**Fonte:** F4, secao "Keyword stuffing": "filling a web page with keywords or numbers in an attempt to manipulate rankings".

---

### H11. Nenhuma deturpacao sobre quem criou o conteudo, quem e o autor, ou qual o proposito da pagina
**Teste:** auditar cada afirmacao biografica, credencial, cliente citado, premio e vinculo empregaticio no site. Cada uma precisa ser verdadeira e verificavel.
**Como medir:** lista de todas as afirmacoes factuais sobre o autor presentes em /about, bios de artigo, /cases e schema. Marcar cada uma como verificada, nao verificada, ou falsa. Qualquer falsa reprova.
**Fonte:** F3, "Content policies" > "Misrepresentative content": conteudo que "misrepresents, misstates, or conceals information" sobre o publisher, o criador, ou o proposito do conteudo, incluindo sugerir afiliacao ou endosso que nao existe.
**Nota interna:** este criterio interage com o historico de credencial falsa registrado no postmortem de 13/08. Vale varredura completa antes de 28/08.

---

### H12. Navegacao funciona e nao engana
**Teste:** todo link do menu resolve. Nenhum link leva a destino diferente do rotulo. Nenhum redirect inesperado, nenhum download nao solicitado, nenhum pop-up.
**Fonte:** F2, secao "Do your pages have clear, easy-to-use navigation?", criterios de "Alignment", "Readability", "Functionality". F7, secoes "Site behavior" e "Deceptive site navigation".

---

### H13. O site nao viola nenhuma spam policy do Google Search
**Teste:** passar a lista completa das 17 secoes de F4 e marcar cada uma. As secoes sao: Cloaking, Doorway abuse, Expired domain abuse, Hacked content, Hidden text and link abuse, Keyword stuffing, Link spam, Machine-generated traffic, Malicious practices, Misleading functionality, Scaled content abuse, Scraping, Site reputation abuse, Sneaky redirects, Thin affiliation, User-generated spam, Other practices that can lead to demotion or removal.
**Fonte:** F4 para a lista, F3 secao "Requirements and other standards" para a obrigatoriedade no AdSense.

---

# PARTE B. RECOMENDACOES
### Nao sao proibicoes declaradas. Sao a rubrica que o revisor usa para julgar "value". Cada uma virou pergunta testavel na propria documentacao do Google.

---

## B1. Perguntas de conteudo e qualidade (F5)
Aplicar a cada um dos 108 artigos. Resposta "nao" e um ponto negativo mensuravel.
1. O conteudo traz informacao, reportagem, pesquisa ou analise original?
2. O conteudo traz descricao substancial, completa ou abrangente do tema?
3. O conteudo traz analise perspicaz ou informacao que vai alem do obvio?
4. Se usa outras fontes, evita simplesmente copiar ou reescrever, e adiciona valor substancial e originalidade?
5. O titulo descreve o conteudo de forma util, sem exagero e sem sensacionalismo?
6. E o tipo de pagina que alguem salvaria, compartilharia ou recomendaria?
7. O conteudo entrega valor substancial comparado a outras paginas nos resultados de busca?
8. Ha erros de ortografia ou estilo?
9. O conteudo parece bem produzido, ou parece descuidado e feito as pressas?
10. O conteudo e produzido em massa, terceirizado para muitos criadores ou espalhado por uma rede de sites, de modo que cada pagina recebe pouca atencao e cuidado?
**Fonte:** F5, secao de perguntas de conteudo e qualidade.
**Observacao:** a pergunta 10 e a versao "recomendacao" do criterio duro H6. E o ponto exato onde um site de 108 artigos com apoio de IA precisa provar cuidado por pagina.

## B2. Perguntas de expertise (F5)
1. O conteudo apresenta a informacao de um jeito que da vontade de confiar: fontes claras, evidencia da expertise envolvida, informacao sobre o autor e sobre o site, por exemplo com links para pagina de autor ou pagina About?
2. Se alguem pesquisasse sobre o site, sairia com a impressao de que ele e confiavel ou reconhecido como autoridade no tema?
3. O conteudo foi escrito ou revisado por especialista ou entusiasta que demonstravelmente conhece o assunto?
4. Ha erros factuais faceis de verificar?
**Fonte:** F5, secao de perguntas de expertise.
**Teste objetivo derivado:** existe pagina de autor, com biografia verificavel e link, alcancavel a partir de todo artigo? Sim ou nao.

## B3. Perguntas "Who, How, and Why" (F5)
**Who:**
1. E autoevidente para o visitante quem escreveu o conteudo?
2. As paginas trazem assinatura de autor onde uma assinatura seria esperada?
3. A assinatura leva a mais informacao sobre o autor, com contexto sobre ele e sobre os temas em que escreve?
**How:**
4. O uso de automacao, incluindo geracao por IA, e autoevidente para os visitantes, por divulgacao ou de outra forma?
5. Voce da contexto sobre como a automacao ou a IA foi usada para criar o conteudo?
6. Voce explica por que a automacao ou a IA foi considerada util para produzir esse conteudo?
**Fonte:** F5, secoes "Who", "How".
**Status:** recomendacao, nao obrigacao. F6, secao "Give users context", usa formulacao de sugestao: compartilhar informacao sobre como o conteudo foi criado "can help give your readers more context".

## B4. Sinais de alerta de conteudo feito para buscador (F5)
Cada "sim" e um ponto negativo.
1. O conteudo foi feito principalmente para atrair visitas de buscador?
2. Voce produz muito conteudo sobre muitos temas diferentes na esperanca de que algum performe?
3. Voce usa automacao extensiva para produzir conteudo sobre muitos temas?
4. Voce esta principalmente resumindo o que outros dizem, sem adicionar muito valor?
5. Voce escreve sobre coisas so porque parecem estar em alta, e nao porque escreveria sobre elas para o seu publico?
6. O leitor sai precisando buscar de novo para conseguir informacao melhor em outra fonte?
7. Voce escreve para atingir uma contagem de palavras porque ouviu que o Google prefere um tamanho?
8. Voce entrou num nicho sem expertise real, principalmente porque achou que traria trafego?
9. Seu conteudo promete responder uma pergunta que na verdade nao tem resposta?
10. Voce muda a data das paginas para parecerem novas sem que o conteudo tenha mudado de forma substancial?
11. Voce adiciona muito conteudo novo ou remove muito conteudo antigo principalmente porque acredita que isso ajuda o ranking?
**Fonte:** F5, secao de conteudo feito para buscador.
**Atencao ao item 10:** relevante para o campo `toolVersion` e para qualquer rotina que atualize datas. Alterar data sem mudanca substancial e sinal negativo declarado.

## B5. Perguntas de conteudo people-first (F5)
1. Existe um publico real, atual ou pretendido, que acharia o conteudo util se chegasse direto no site?
2. O conteudo demonstra claramente expertise de primeira mao e profundidade de conhecimento, por exemplo por ter de fato usado um produto ou servico, ou visitado um lugar?
3. O site tem um proposito ou foco primario?
4. Depois de ler, a pessoa sai sentindo que aprendeu o suficiente sobre o tema para atingir seu objetivo?
5. A pessoa sai com a sensacao de experiencia satisfatoria?
**Fonte:** F5, secao de conteudo people-first.
**Teste objetivo derivado da pergunta 2:** quantos dos 108 artigos contem pelo menos um relato verificavel de experiencia direta do autor, com detalhe que so quem fez teria? Contar. Esse numero e a melhor traducao mensuravel da hipotese "falta profundidade pessoal".

## B6. Pagina e layout (F2)
1. Elementos de texto e imagem organizados em layout convidativo.
2. Visitante encontra facilmente o que procura.
3. Considerar area de comentarios para feedback do leitor.
4. Se houver comentarios, moderar para cumprir as politicas do AdSense.
**Fonte:** F2, secao "What's special about your pages?".

## B7. Metadados gerados automaticamente (F6)
Ao gerar automaticamente titulo, meta description, dados estruturados e alt text, focar em precisao, qualidade e relevancia. Validar a marcacao de dados estruturados.
**Fonte:** F6, secao "Focus on accuracy, quality, and relevance".

## B8. Best practice raiz (F9)
"Create helpful, reliable, people-first content" e listada como a primeira das key best practices do Google Search Essentials.
**Fonte:** F9, secao "Key best practices".

---

# PARTE C. O QUE OS DOCUMENTOS NAO DIZEM
### Registrado para impedir que a equipe invente uma causa. Nada aqui foi encontrado nas 9 fontes lidas em 22/08/2026.

1. **Nao existe numero minimo de palavras por artigo.** Nenhuma das 9 paginas define um piso. F5 faz o oposto: lista escrever para atingir uma contagem de palavras como sinal de alerta.
2. **Nao existe numero minimo de artigos ou de paginas.** Nao encontrei nenhum limiar publicado.
3. **Nao existe requisito de trafego minimo** nessas paginas.
4. **Nao existe proibicao de texto escrito com IA.** F4 e explicito: o problema e conteudo nao original em volume "no matter how it's created". F6 trata geracao por IA como uso legitimo quando o resultado tem qualidade e valor, e chama de violacao usar essas ferramentas "to generate many pages without adding value for users".
5. **Nao existe limiar publicado de "parece IA".** Nenhuma das fontes define detector, score ou percentual de estilo. A hipotese "o texto nao parece humano" nao tem criterio oficial correspondente. O que existe de mensuravel sao os proxies: originalidade por pagina (H1, B1.1 a B1.4), experiencia de primeira mao (B5.2), autoria visivel (B3.1 a B3.3), e cuidado por pagina (B1.10).
6. **Nao existe percentual publicado de similaridade ou plagio.** F3 e F4 proibem a pratica, nao definem um numero. A auditoria tem que produzir evidencia caso a caso, com URL e data da fonte anterior.
7. **"Low value content" nao tem pagina normativa propria com criterios listados.** A unica ocorrencia normativa que encontrei do termo esta em F3, "Inventory value", como uma das condicoes que impedem servir anuncios numa tela. Todo o resto do julgamento vem de F4 e F5. Ou seja: o painel usa uma etiqueta curta para uma decisao tomada com a rubrica inteira.
8. **Os documentos nao apontam qual pagina do site falhou.** F8 diz que a acao pode ser em nivel de pagina ou em nivel de site ou secao, e que acao em nivel de site significa multiplas paginas em violacao. O painel de politicas e o unico lugar que mostra o escopo.

---

# PARTE D. ORDEM DE EXECUCAO SUGERIDA ANTES DE 28/08/2026

1. **H11 primeiro.** Varredura de toda afirmacao biografica e de credencial. E o unico criterio duro que pode ser resolvido em horas e o unico com historico conhecido de erro neste projeto.
2. **H7 e H2.** Amostragem de frases de 8 a 12 palavras dos 108 artigos contra a web, com registro de evidencia. Confirma ou elimina a hipotese de plagio.
3. **H6 e H9.** Similaridade interna: quantos artigos compartilham esqueleto, abertura, fechamento e ritmo. Confirma ou elimina a hipotese de conteudo em escala.
4. **H3, H4, H5.** Varredura tecnica das rotas e templates.
5. **B5.2 e B1.10.** Contagem de artigos com experiencia de primeira mao verificavel. Produz o numero que vai guiar a reescrita.
6. **B3.** Autoria visivel e pagina de autor alcancavel de todo artigo.

**Regra para o relatorio final:** cada linha de diagnostico precisa vir com o artigo, o criterio (H ou B com o numero) e a evidencia. Criterio sem evidencia nao entra.
