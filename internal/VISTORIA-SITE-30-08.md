# Vistoria do site, 30 de agosto de 2026

Consolidação das seis frentes (links, imagens, SEO, schema, conteúdo, render) sobre o dist de 122 páginas
gerado depois da limpeza de pontuação e da reescrita de títulos e descriptions.

---

## 1. Veredito

**Sim, o site está saudável para publicar hoje**: dois assets de imagem em 404 são os únicos defeitos visíveis, nenhum deles impede o deploy, e a limpeza de 848 travessões não quebrou nada.

---

## 2. GRAVE

Só o que quebra página, some do Google ou mostra erro para o leitor. São dois, e os dois são imagem faltando.

### 1. Hero morta em 404 na Unsplash, colapsa o topo do artigo e mata a og:image

**O que é.** A `heroImage` de um artigo retorna `404`, 29 bytes, `text/html`. No browser a imagem tem `naturalWidth === 0`, a faixa 21/9 do topo desaparece e o artigo abre sem imagem. A mesma URL está na `<meta property="og:image">`, então LinkedIn e X compartilham esse artigo sem thumbnail. O card vazado aparece em mais 3 páginas: `locarno-2026-edgar-pera-ai-clues-authorship`, `scroll-animation-website-ai-video-case-study` e `claude-code-agents-gauntlet-loop-verification`.

**Onde.** `/Volumes/MAC_SSD01/Projects/open-your-ais-v2/src/content/blog/higgsfield-1m-film-festival-open-prompts-director-take.md`, linha 13.

**Conserto exato.** Não colar URL na mão. Rodar o picker e conferir no preview:

```
node scripts/fetch-heroes.mjs --pick higgsfield-1m-film-festival-open-prompts-director-take
```

Essa é uma das 12 URLs do site sem `ixid`, justamente as que não vieram do picker. Depois de trocar, confirmar no browser que a faixa do topo renderiza.

**Prova.** `curl -s -o /dev/null -w "%{http_code} %{size_download}"` na URL da linha 13 retorna `404 29`. Rodado agora.

### 2. `og-default.png` não existe, e 10 páginas apontam para ele

**O que é.** O default do layout aponta para um arquivo que não está em `public/` nem em `dist/`. Toda página sem imagem própria cai nele: home, `about`, `blog`, `cases`, `contact`, `privacy`, `skills`, `terms`, `tools`, `workflows`. Compartilhar a home no LinkedIn ou no X hoje gera cartão sem imagem.

**Onde.** `/Volumes/MAC_SSD01/Projects/open-your-ais-v2/src/components/BaseHead.astro`, linha 20: `image = '/og-default.png'`.

**Conserto exato.** Duas saídas, escolher uma:

- criar `/Volumes/MAC_SSD01/Projects/open-your-ais-v2/public/og-default.png` em 1200x630, ou
- trocar a linha 20 por um arquivo que já existe, por exemplo `image = '/images/ulisses.jpg'`.

**Prova.** `ls dist/og-default.png` retorna "No such file or directory". `grep -rl "og-default.png" dist --include="*.html" | wc -l` retorna `10`. Ambos rodados agora.

---

## 3. MÉDIO

1. **O sufixo do layout anula a reescrita de títulos.** As 112 bases estão corretas, máximo real 58 caracteres, mas `BaseHead.astro:28` cola ` | Open Your AIs` e o `<title>` renderizado chega a 74. Medi agora: **109 das 122 páginas acima de 60**. O Google corta e a última ideia do título some. Conserto: não aplicar sufixo quando `article === true`, ou encurtar para ` | OYA`.

2. **`/tools/` é órfã.** 1.805 palavras, indexável, no `sitemap-0.xml`, e **0 links internos** nas 122 páginas (confirmado agora). Conserto em `src/components/Nav.astro`: incluir `'tools'` na union da linha 3 e inserir `<a href="/tools/" {...mkAria('tools')}>Tools</a>` depois do link de Skills.

3. **Duas fontes externas em 404 confirmado** (404 também com headers de browser e redirect seguido). Remover o item e o ` | ` antes dele em `kling-3-0-motion-control-multi-shot-director-review.md` linha 46 (thesiliconreview, sobram 3 fontes válidas) e em `zapier-10000-ai-workflows-what-actually-works-2026.md` linha 45 (morningstar, era espelho do BusinessWire já citado ali).

4. **As 482 imagens externas têm `alt=""`.** Toda hero e todo card. O atributo existe, o problema é estar vazio, o que diz ao Google e ao leitor de tela que a imagem principal do artigo é decorativa. Conserto em 8 pontos, todos trocando `alt=""` pelo título: `BlogPost.astro` 94 e 147, `pages/index.astro` 53, 117 e 137, `pages/blog/index.astro` 85, `pages/cases.astro` 49, `pages/workflows.astro` 50.

5. **`dateModified` velho em 6 artigos que ganharam parágrafo hoje.** O schema diz que o texto não muda desde março, enquanto o corpo cresceu de 75 a 129 palavras. Conserto: inserir `updatedDate: "2026-08-30"` logo abaixo do `pubDate` em `adobe-firefly-30-models-...`, `ai-excellence-creative-jobs-...`, `cinematography-vocabulary-...`, `claude-4-what-changed-...`, `heygen-avatar-iv-...` e `higgsfield-cinema-studio-2-...`. `BaseHead.astro:61` já propaga sozinho.

6. **Sitemap sem `<lastmod>` nas 118 URLs.** Depois de reescrever título e description de 112 artigos, o Google não recebe sinal nenhum de recrawl. Conserto em `astro.config.mjs:24`, dentro do `sitemap({...})`: acrescentar `serialize` com `lastmod`, ou puxar o `updatedDate` da collection.

7. **Descriptions das 8 páginas fixas fora da faixa 140 a 160** que os 112 artigos agora respeitam: privacy 33, terms 35, blog 76, contact 77, tools 92, home 99, about 113, skills 174. `cases` e `workflows` estão certas.

8. **Dois artigos linkam para um artigo `noindex, nofollow`.** `static-content-ai-eats-interactive-tools-it-recommends` e `youtube-ai-monetization-rules-authorship-test` apontam para `/blog/ai-content-flood-google-search-2026/`, despublicado no commit b24817d. Trocar por artigo vivo ou remover.

---

## 4. BAIXO

Só contagem por tipo.

| Tipo | Quantidade |
|---|---|
| Link externo respondendo 301, trocar pela URL final | 1 |
| Artigos `noindex` totalmente órfãos, decidir religar ou apagar | 3 |
| Imagens sem `width`/`height` (CLS real medido: 0,0000) | 707 |
| Heroes acima do peso ideal, todas em `w=1800` | 112 |
| Tags `twitter:*` usando `property=` no lugar de `name=` | 5 |
| Artigos com a palavra "Correction" repetida logo após o `<h2>` | 3 |
| Regra do `robots.txt` bloqueando URL com parâmetro, inclusive UTM | 1 |
| Páginas sem `BreadcrumbList` | 122 |
| Páginas fora da raiz emitindo `WebSite` idêntico | 10 |
| Articles com `publisher` sem `logo` | 108 |
| Páginas finas indexadas, abaixo de 250 palavras | 3 |
| En dashes residuais a limpar, pré-existentes | 13 em 5 arquivos |
| Hífen solto usado como travessão, pré-existente | 1 |
| Linhas com espaço à direita em arquivo único, pré-existente | 24 |
| `**Link.**` que lê como abreviação, pré-existente | 5 em 1 arquivo |

---

## 5. O que a limpeza de pontuação quebrou

**Não quebrou nada. Zero.** Escrito com todas as letras porque foram 848 trocas em 66 arquivos num único dia e o risco estava exatamente aí.

O que foi verificado, ponto a ponto:

- **Reconstrução sítio-a-sítio das 848 trocas**, comparando `git show HEAD:` com o working tree arquivo por arquivo. Um único suspeito apareceu, e é acerto: em `ai-filmmaking-advancement-minefields.md` o par de travessões virou parêntese equilibrado ("For commercial work (whether for Yamaha, Carrefour, or Starbucks), the demand...").
- **Zero pontuação dupla ou colada.** As buscas por `,,`, `,.`, `::`, `;;`, espaço antes de pontuação, espaço duplo em prosa, minúscula depois de ponto e palavra colada retornaram todas vazias.
- **Zero tag ou parêntese desbalanceado** nos blocos `<p>`, `<li>`, `<h2>`, `<h3>`, `<em>`, `<b>`, `<strong>`, `<a>`, `<ul>`, `<ol>`.
- **Zero URL tocada.** O `git diff` nas 38 linhas que contêm link mostra mudança só no texto ao redor. Confirmado por outra frente: 0 links quebrados em 2.912 internos, 0 sintaxe markdown vazada, 0 asset ausente, 0 canonical errado.
- **Os defeitos que parecem consequência da limpeza são anteriores a ela.** Conferi hoje contra o HEAD: o `**Link.**` do artigo de skills está idêntico no commit anterior, os 14 en dashes têm contagem igual no HEAD e agora (o script caçou só o travessão longo e ignorou o curto), e a linha com hífen solto no artigo do Locarno também já existia.
- **Zero travessão longo restante**, em `src` e em `dist`. Verificado agora.
- **As alegações do lote batem**: 112 arquivos, 0 título base acima de 60, 0 description fora de 140 a 160, 0 artigo abaixo de 800 palavras, aspas pares no frontmatter dos 112.

Único efeito colateral real da faxina: ela expôs o item 1 do médio. Os títulos ficaram certos no frontmatter e errados no HTML, porque o sufixo do layout nunca entrou na conta.

---

## 6. Três coisas para a rotina diária vigiar

Escritas como instrução para o agente da rotina.

**1. Toda hero e todo asset declarado tem que responder 200, todo dia.**
Extraia as `heroImage` dos 112 arquivos em `src/content/blog/` mais todo caminho local citado em `BaseHead.astro`, e faça `curl -s -o /dev/null -w "%{http_code}"` em cada um. Qualquer coisa diferente de 200, ou qualquer arquivo de `public/` que um HTML referencia e não existe no disco, é achado GRAVE e vai no topo do relatório do dia. Não aceite `image/*` com menos de 1 KB: 404 da Unsplash volta como HTML de 29 bytes e passa por check ingênuo. Para trocar uma hero, use sempre `fetch-heroes.mjs --pick`, nunca cole URL na mão, e confirme no preview antes de fechar o item.

**2. Meça o `<title>` renderizado no dist, nunca o do frontmatter.**
O frontmatter mente porque o layout acrescenta sufixo. Extraia `<title>` de cada HTML de `dist` e conte os caracteres do valor final. Se mais de 5 páginas passarem de 60, ou qualquer description renderizada sair da faixa de 140 a 160, isso é regressão e entra como MÉDIO com a lista das páginas. Aplique a mesma régua às páginas fixas de `src/pages/`, que ficam de fora de qualquer reescrita feita só no blog.

**3. Toda página indexável precisa de pelo menos um link interno apontando para ela.**
Cruze as `loc` do `sitemap-0.xml` com os `href` internos das 122 páginas do dist. URL indexável com 0 inbound é órfã e entra no relatório com o ponto exato de conserto no `Nav.astro` ou no corpo de um artigo. No mesmo passo, avise quando um artigo vivo linkar para um `noindex`, e quando um artigo `noindex` ficar sem nenhum inbound, porque aí ele virou arquivo morto no build e precisa de decisão: religar ou apagar.
