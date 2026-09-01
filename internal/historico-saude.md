# Historico de saude dos sites

Uma linha por site por dia. Numero que nao foi lido na execucao aparece como `nao lido`, nunca estimado.
Fontes: Vercel Web Analytics (axenworks), GA4 G-EBZ4F0ZXRY (openyourais), Search Console (os dois), site-health.mjs (tecnico).

## 2026-08-24

**axenworks.com** (dia 3 de vida, publicado 22/08)
- visitantes 7d: nao lido (Vercel Analytics inacessivel nesta execucao, ver nota)
- page views 7d: nao lido
- paginas indexadas: nao lido (Search Console inacessivel, Chrome desconectado)
- impressoes 28d / cliques 28d / posicao media: nao lido
- tecnico: sem bloqueio. Home 39927 bytes, robots liberando, 20 de 20 URLs do sitemap em 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes
- coleta: script de insights responde 200 e a tag esta na home

**openyourais.com** (em avaliacao AdSense)
- usuarios 7d / 28d: nao lido (GA4 inacessivel, Chrome desconectado)
- sessoes e aquisicao por canal: nao lido
- paginas indexadas: nao lido
- impressoes 28d / cliques 28d / posicao media: nao lido
- tecnico: sem bloqueio. Home 18250 bytes, robots liberando, sitemap-index com 114 URLs, 30 testadas todas 200, canonical coerente, paginas legais no ar, ads.txt presente
- atencao: llms.txt ausente
- coleta: tag G-EBZ4F0ZXRY presente na home

Nota da execucao: a extensao Claude in Chrome nao estava conectada, entao Vercel Analytics, GA4 e Search Console nao foram lidos. A API de Web Analytics da Vercel respondeu 404 "Web Analytics not found" para os dois projetos, o que pode significar que o produto nao esta habilitado no painel ou que a leitura por API nao esta disponivel no plano hobby. Nao da para concluir sem ver o painel.

## 2026-08-25

**axenworks.com** (dia 4 de vida, publicado 22/08)
- visitantes 7d: 16 (Vercel Web Analytics)
- page views 7d: 56, bounce rate 69% (Vercel)
- referrers 7d: sem dados no periodo, nenhum linkedin.com nem x.com (Vercel)
- paginas mais vistas 7d: / 15, braw-file-size-calculator 3, gopro-recording-time-calculator 3, hours-per-card 3, video-bitrate-calculator 3, contact 2, prores-file-size-calculator 2 (Vercel)
- paises 7d: EUA 56%, Brasil 25%, Franca 13%. Desktop 81%, mobile 19% (Vercel)
- paginas indexadas: 0 indexadas, 1 nao indexada (Search Console, relatorio atualizado em 20/08)
- motivo da nao indexada: "Excluida pela etiqueta noindex" na home, ultimo rastreio 16/08, antes do lancamento. Validacao iniciada em 24/08. A home servida hoje responde index,follow, verificado por curl
- impressoes 28d / cliques 28d / posicao media: 0 / 0 / 0 (Search Console, dados so a partir de 21/08)
- sitemap: sucesso, 20 paginas descobertas, ultima leitura 23/08 (Search Console)
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- tecnico: sem bloqueio. Home 39927 bytes, robots liberando, 20 de 20 URLs do sitemap em 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: script de insights responde 200

**openyourais.com** (em avaliacao AdSense)
- usuarios 7d: 191, queda de 15,9% contra o periodo anterior (GA4)
- usuarios 28d: 749, alta de 35,7%. Eventos 28d: 2,6 mil, alta de 28,5% (GA4)
- sessoes 28d: 767 no total (GA4)
- aquisicao por canal 28d, sessoes: Direct 725 (94,52%, interacao 7,86%, tempo medio 4s), Organic Search 22 (2,87%, interacao 27,27%, 24s), Referral 11 (1,43%, interacao 36,36%, 38s), Organic Social 10 (1,3%, interacao 70%, 1min08s) (GA4)
- aquisicao por canal 7d, sessoes: Direct 187, Organic Search 7, Referral 3, Organic Social 0 (GA4)
- paises 7d, usuarios: Singapura 154, EUA 17, Brasil 7, China 6, Bangladesh 1, Colombia 1, Alemanha 1 (GA4)
- LEITURA: o numero esta inflado. Singapura sozinha e 154 de 191 usuarios em 7 dias, e 94,52% das sessoes de 28 dias sao diretas com 4 segundos de media. Trafego que parece humano nos 28 dias: 43 sessoes (22 busca organica, 11 referencia, 10 social organico), com tempo de 24s a 1min08s
- paginas indexadas: 97 indexadas, 130 nao indexadas por 8 motivos (Search Console, atualizado em 20/08)
- motivos da nao indexacao: pagina com redirecionamento 76, rastreada mas nao indexada 18, nao encontrado 404 11 com validacao em FALHA, detetada mas nao indexada 9, soft 404 8, duplicada com canonica diferente 4, noindex 3, erro de redirecionamento 1
- impressoes 28d: 1,53 mil. Cliques 28d: 8. CTR 0,5%. Posicao media 30,9 (Search Console)
- principais consultas 28d: claude gauntlet loop 1 clique e 3 impressoes, controllable ai director 0 e 73, kling 3.0 motion control 0 e 37, ai production workflows 0 e 28, yourais 0 e 25 (Search Console)
- sitemaps: sitemap-index.xml sucesso com 114 descobertas, ultima leitura 19/08. sitemap-0.xml sucesso com 114, ultima leitura 23/08. O site serve 115 URLs hoje, entao ha 1 pagina nova ainda nao relida
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- tecnico: sem bloqueio. Home 18428 bytes, robots liberando, sitemap-index com 115 URLs, 30 testadas todas 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: tag G-EBZ4F0ZXRY presente na home

Comparacao com 24/08: quase todos os numeros de publico estavam como "nao lido" na execucao anterior, entao esta e a primeira medicao com base. Duas mudancas tecnicas contra ontem: o llms.txt do openyourais, que estava ausente, agora esta presente, e o sitemap passou de 114 para 115 URLs.

### Apuracao dos 11 erros 404 do openyourais, feita em 25/08 a pedido dele

Lista lida no Search Console e cada URL testada por curl na mesma execucao.

Ja consertadas, terminam em 200 hoje, so aguardando o Google reprocessar (a validacao foi pedida em 17/07 e falhou em 25/07, e o ultimo rastreio dessas paginas foi entre abril e maio):
- /blog/anthropic-cowork-revolution, vai para /blog/anthropic-claude-cowork-enterprise-agents-2026/
- /blog/anthropic-30b-funding-google-ai-bet-disney-copyright-war, vai para /blog/
- /blog/india-ai-summit-2026-global-south-100-billion-gambit, vai para /blog/
- /blog/healthy/, vai para /blog/

Continuam 404 de proposito, sao paginas mortas do site v1 sem equivalente hoje, confirmado por busca no repositorio. Redirecionar viraria soft 404, que e pior que 404 honesto:
- /crypto/, /playbooks/p2/, /playbooks/p5/

Bug real encontrado, as duas URLs do moringa-magic-review (conteudo de suplemento, de algum uso antigo do dominio), nos dois hosts:
A regra "/blog/2025/:year/:month/:slug*" existia no vercel.json mas nunca disparava. Com trailingSlash true, a Vercel normaliza para a forma com barra final primeiro, e ai a URL com barra nao casa com um padrao escrito sem barra. Comprovado: sem barra da 308, com barra da 404. E o mesmo motivo pelo qual /blog/healthy aparece duas vezes naquele arquivo.

Correcao aplicada no commit 7e339b5, tres entradas novas no fim da lista de redirects, nenhuma regra existente tocada:
- /blog/2025/:year/:month/:slug*/ para /blog/, faz a regra existente finalmente funcionar
- /home/ para /
- /sitemap.xml para /sitemap-index.xml, porque o sitemap real tem outro nome e a convencao que crawler tenta primeiro dava 404
Build rodado e aprovado, 120 paginas. Verificado que nenhum dos tres destinos esconde arquivo gerado pelo build.

Avaliacao: esses 404 nao prejudicavam AdSense nem ranking. Com 97 paginas indexadas e nenhuma acao manual, isso era higiene, nao emergencia.

## 2026-08-30

**axenworks.com** (dia 9 de vida, publicado 22/08)
- visitantes 7d: 20, alta de 150% contra o periodo anterior (Vercel Web Analytics)
- page views 7d: 58, alta de 53%. Bounce rate 75%, alta de 37% (Vercel)
- referrers 7d: sem dados no periodo, nenhum linkedin.com nem x.com (Vercel)
- paginas mais vistas 7d: / 19, hours-per-card 3, video-bitrate-calculator 3, braw-file-size-calculator 2, contact 2, gopro-recording-time-calculator 2, prores-file-size-calculator 2 (Vercel)
- paises 7d: EUA 65%, Brasil 10%, Franca 10%, Taiwan 10%, Noruega 5%. Desktop 80%, mobile 20% (Vercel)
- paginas indexadas: 0 indexadas, 1 nao indexada por "Excluida pela etiqueta noindex", validacao Iniciada (Search Console). O relatorio de indexacao traz dados so ate meados de agosto, entao esta defasado
- impressoes 28d: 97. Cliques 28d: 0. CTR 0%. Posicao media 60,8 (Search Console, atualizado ha 10,5 horas)
- principais consultas 28d: braw file size calculator 1 impressao, prores data calculator 1, red komodo recording time calculator 1 (Search Console)
- sitemap: sucesso, 20 paginas descobertas, ultima leitura 25/08 (Search Console)
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- tecnico: sem bloqueio. Home 39927 bytes, robots liberando, 20 de 20 URLs do sitemap em 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: script de insights responde 200
- verificacao extra por curl nesta execucao: home e video-bitrate-calculator servem `index,follow,max-image-preview:large` e nenhum cabecalho x-robots-tag

**openyourais.com** (em avaliacao AdSense)
- usuarios 7d: 209. Sessoes 7d: 211 (GA4)
- usuarios 28d: 758, alta de 17,9%. Eventos 28d: 2,6 mil, alta de 12,3%. Sessoes 28d: 773 (GA4)
- aquisicao por canal 28d, sessoes: Direct 732 (94,7%, interacao 6,83%, tempo medio 3s), Organic Search 22 (2,85%, 36,36%, 32s), Referral 13 (1,68%, 30,77%, 33s), Organic Social 6 (0,78%, 66,67%, 1min31s) (GA4)
- aquisicao por canal 7d, sessoes: Direct 205 (97,16%, interacao 4,88%, tempo medio 0s), Referral 4 (1,9%, 25%, 1min29s), Organic Search 2 (0,95%, 100%, 1min31s), Organic Social 0 (GA4)
- paises 7d, usuarios: Singapura 161, EUA 28, China 16, Brasil 2, Colombia 1, Reino Unido 1, India 1 (GA4)
- LEITURA: o numero continua inflado. Singapura sozinha e 161 de 209 usuarios em 7 dias, e 97,16% das sessoes de 7 dias sao diretas com tempo medio de 0 segundo. Trafego que parece humano: 41 sessoes nos 28 dias (22 busca organica, 13 referencia, 6 social organico) e apenas 6 nos ultimos 7 dias
- paginas indexadas: 97 indexadas, 130 nao indexadas por 8 motivos, identico a 25/08 (Search Console)
- motivos da nao indexacao: pagina com redirecionamento 76, rastreada mas nao indexada 18, nao encontrado 404 11 com validacao ainda em FALHA, detetada mas nao indexada 9 aprovado, soft 404 8 aprovado, duplicada com canonica diferente 4, noindex 3 iniciada, erro de redirecionamento 1
- impressoes 28d: 1,46 mil. Cliques 28d: 8. CTR 0,5%. Posicao media 30,5 (Search Console)
- principais consultas 28d: claude gauntlet loop 1 clique e 4 impressoes, controllable ai director 0 e 56, kling 3.0 motion control 0 e 33, ai production workflows 0 e 32, yourais 0 e 21 (Search Console)
- sitemaps: sitemap-index.xml sucesso com 117 descobertas, ultima leitura 19/08. sitemap-0.xml sucesso com 117, ultima leitura 28/08 (Search Console)
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- tecnico: sem bloqueio. Home 18469 bytes, robots liberando, sitemap-index com 117 URLs, 30 testadas todas 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: tag G-EBZ4F0ZXRY presente na home

Comparacao com 25/08 (5 dias):
- axenworks: visitantes 7d 16 para 20, page views 56 para 58, impressoes 28d 0 para 97 (primeiras impressoes da vida do site), indexadas 0 para 0, sitemap 20 para 20
- openyourais: usuarios 7d 191 para 209, usuarios 28d 749 para 758, impressoes 28d 1,53 mil para 1,46 mil (queda de 4,6%, dentro do ruido), cliques 8 para 8, posicao media 30,9 para 30,5 (melhorou), indexadas 97 para 97, sitemap 115 para 117 URLs
- trafego que parece humano no openyourais caiu de 43 para 41 sessoes em 28 dias, e de 10 para 6 em 7 dias

Nota sobre o "0 indexadas" do axenworks: os dois relatorios do Search Console discordam porque tem datas diferentes. O de indexacao esta defasado, com dados ate meados de agosto, quando a home ainda carregava noindex de antes do lancamento. O de desempenho foi atualizado ha 10,5 horas e ja registra 97 impressoes com posicao media 60,8, e o Google so mostra na busca pagina que esta no indice. Somando isso a verificacao por curl, o bloqueio ja nao existe no site servido, falta o Google reprocessar o relatorio.

### Segunda execucao do dia 2026-08-30

Rodada de novo algumas horas depois da primeira. Todos os paineis foram relidos e nenhum numero mudou, entao esta secao registra a releitura, nao uma medicao nova.

**axenworks.com**
- visitantes 7d: 20, alta de 150%. Page views 7d: 58, alta de 53%. Bounce rate 75% (Vercel Web Analytics)
- referrers 7d: "No data found for selected period", nenhum linkedin.com nem x.com (Vercel)
- paginas mais vistas 7d: / 19, hours-per-card 3, video-bitrate-calculator 3, braw-file-size-calculator 2, contact 2, gopro-recording-time-calculator 2, prores-file-size-calculator 2 (Vercel)
- paises 7d: EUA 65%, Brasil 10%, Franca 10%. Desktop 80%, mobile 20% (Vercel)
- paginas indexadas: 0 indexadas, 1 nao indexada por "Excluida pela etiqueta noindex", validacao Iniciada. Relatorio ainda com "ultima atualizacao 20/08/26" (Search Console)
- impressoes 28d: 97. Cliques 28d: 0. CTR 0%. Posicao media 60,8. Painel ainda marcando "ultima atualizacao ha 10,5 horas", ou seja, nao houve refresh entre as duas execucoes (Search Console)
- acoes manuais: nenhuma (Search Console)
- tecnico: sem bloqueio. Home 39927 bytes em 207ms, robots liberando, 20 de 20 URLs do sitemap em 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: script de insights responde 200

**openyourais.com**
- usuarios 28d: 758, alta de 17,9%. Eventos 28d: 2,6 mil, alta de 12,3% (GA4)
- aquisicao por canal 7d, sessoes: Direct 205, Referral 4, Organic Search 2 (GA4)
- paises 7d, usuarios: Singapura 161, EUA 28, China 16, Brasil 2, Colombia 1, Reino Unido 1, India 1 (GA4)
- LEITURA: inalterada. Singapura sozinha e 161 de 209 usuarios em 7 dias, com sessao direta e tempo medio proximo de zero. O numero segue inflado
- paginas indexadas: 97 indexadas, 130 nao indexadas por 8 motivos. Relatorio com "ultima atualizacao 20/08/26" (Search Console)
- motivos lidos nesta execucao: nao encontrado 404 11 com validacao em FALHA, pagina com redirecionamento 76 nao iniciado, erro de redirecionamento 1 nao iniciado, rastreada mas nao indexada 18 nao iniciado, duplicada com canonica diferente 4 nao iniciado
- impressoes 28d: 1,46 mil. Cliques 28d: 8. CTR 0,5%. Posicao media 30,5 (Search Console, mesma marca de 10,5 horas)
- principais consultas 28d: claude gauntlet loop 1 clique e 4 impressoes, controllable ai director 0 e 56, kling 3.0 motion control 0 e 33, ai production workflows 0 e 32, yourais 0 e 21 (Search Console)
- acoes manuais: nenhuma (Search Console)
- tecnico: sem bloqueio. Home 18545 bytes em 425ms, robots liberando, sitemap-index com 118 URLs, 30 testadas todas 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: tag G-EBZ4F0ZXRY presente na home

Unica mudanca contra a primeira execucao de hoje: o sitemap do openyourais passou de 117 para 118 URLs, efeito do artigo novo. Fora isso, os tres paineis serviram exatamente os mesmos numeros, porque nem o Search Console nem o GA4 fecharam um novo ciclo de dados no intervalo.

### Terceira execucao do dia 2026-08-30

Terceira rodada do dia. Todos os paineis relidos. Os numeros de publico continuam identicos a segunda execucao, entao esta secao registra a releitura mais uma mudanca real nos sitemaps.

**axenworks.com** (dia 9 de vida, publicado 22/08)
- visitantes 7d: 20, alta de 150%. Page views 7d: 58, alta de 53%. Bounce rate 75%, alta de 37% (Vercel Web Analytics)
- referrers 7d: "No data found for selected period", nenhum linkedin.com nem x.com (Vercel)
- paginas mais vistas 7d: / 19, hours-per-card 3, video-bitrate-calculator 3, braw-file-size-calculator 2, contact 2, gopro-recording-time-calculator 2, prores-file-size-calculator 2 (Vercel)
- paises 7d: EUA 65%, Brasil 10%, Franca 10%, Taiwan 10%, Noruega 5%. Desktop 80%, mobile 20% (Vercel)
- paginas indexadas: 0 indexadas, 1 nao indexada por "Excluida pela etiqueta noindex", validacao Iniciada. Grafico do relatorio ainda termina em 13/08, ou seja, continua defasado (Search Console)
- impressoes 28d: 97. Cliques 28d: 0. CTR 0%. Posicao media 60,8. Serie de 21/08 a 27/08 (Search Console)
- principais consultas 28d: braw file size calculator 1 impressao, prores data calculator 1, red komodo recording time calculator 1 (Search Console)
- sitemap: sucesso, 20 paginas descobertas, ultima leitura 30/08 (era 25/08 na execucao anterior)
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- tecnico: sem bloqueio. Home 39927 bytes em 561ms, robots liberando, 20 de 20 URLs do sitemap em 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: script de insights responde 200

**openyourais.com** (em avaliacao AdSense)
- usuarios ativos 28d: 763, alta de 18,7%. Novos usuarios 28d: 769, alta de 18,9%. Eventos 28d: 2,7 mil, alta de 15,0% (GA4, propriedade OPEN YOUR AIs)
- sessoes 28d (2/08 a 29/08): 778 no total (GA4)
- aquisicao por canal 28d, sessoes: Direct 737 (94,73%, interacao 7,06%, tempo medio 3s), Organic Search 22 (2,83%, 36,36%, 32s), Referral 13 (1,67%, 30,77%, 33s), Organic Social 6 (0,77%, 66,67%, 1min31s) (GA4)
- aquisicao por canal 7d, sessoes: Direct 210, Referral 4, Organic Search 2, Organic Social 0 (GA4)
- origem/meio das sessoes 7d: (direct)/(none) 210, ulissesbalbino.com/referral 2, bing/organic 1, silobreaker.com/referral 1 (GA4)
- paises 7d, usuarios: Singapura 164, EUA 28, China 16, Brasil 4, Colombia 1, Reino Unido 1, India 1 (GA4)
- cidades 7d: Singapura 162, San Jose 7, Shenzhen 5, Santos 3, Des Moines 3, Ashburn 2, Las Vegas Valley 2 (GA4)
- LEITURA: inalterada, o numero segue inflado. Singapura sozinha e 164 dos 215 usuarios de 7 dias, e 94,73% das sessoes de 28 dias sao diretas com 3 segundos de media e 7% de interacao. Trafego que parece humano: 41 sessoes nos 28 dias (22 busca organica, 13 referencia, 6 social organico) e 6 nos ultimos 7 dias
- paginas indexadas: 97 indexadas, 130 nao indexadas por 8 motivos, identico as duas execucoes anteriores (Search Console)
- motivos: pagina com redirecionamento 76 nao iniciado, rastreada mas nao indexada 18 nao iniciado, nao encontrado 404 11 com validacao em FALHA, detetada mas nao indexada 9 aprovado, soft 404 8 aprovado, duplicada com canonica diferente 4 nao iniciado, noindex 3 iniciada, erro de redirecionamento 1 nao iniciado
- impressoes 28d: 1,46 mil. Cliques 28d: 8. CTR 0,5%. Posicao media 30,5. Serie de 31/07 a 27/08 (Search Console)
- principais consultas 28d: claude gauntlet loop 1 clique e 4 impressoes, controllable ai director 0 e 56, kling 3.0 motion control 0 e 33, ai production workflows 0 e 32, yourais 0 e 21, grok references 0 e 16 (Search Console)
- sitemaps: sitemap-index.xml sucesso com 117 descobertas, ultima leitura 30/08 (era 19/08). sitemap-0.xml sucesso com 117, ultima leitura 28/08. O site serve 118 URLs hoje, entao ha 1 pagina nova ainda nao relida
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- tecnico: sem bloqueio. Home 18539 bytes em 677ms, robots liberando, sitemap-index com 118 URLs, 30 testadas todas 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: tag G-EBZ4F0ZXRY presente na home

Unica mudanca real contra a segunda execucao de hoje: o Google releu os dois sitemaps em 30/08. O do axenworks estava parado desde 25/08 e o sitemap-index do openyourais desde 19/08. Fora isso, GA4 e Search Console serviram os mesmos numeros, porque nenhum dos dois fechou novo ciclo de dados no intervalo. Nota: os 763 usuarios 28d do GA4 aparecem contra 758 lidos de manha, e as sessoes 28d contra 773; a diferenca vem da janela de 28 dias ter deslizado, nao de trafego novo.

### Correcao de 2026-08-30, estado real no painel do AdSense

Ele apontou que o axenworks ja tinha sido submetido. Fui ao painel de Sites do AdSense (pub-4722208859927111) e li:

- **axenworks.com: "Em preparacao"**, detalhes do estado vazios, ads.txt **Autorizado**, ultima atualizacao 23/08/2026 19h13 GMT-3. Site submetido e em analise desde 23/08.
- **openyourais.com: "Necessaria atencao"**, motivo **Low value content**, ads.txt **Nao encontrado**, ultima atualizacao 21/08/2026 18h53 GMT-3. Nenhuma nova revisao foi pedida.

Duas consequencias:

1. A linha "NAO submeter antes de meados de setembro de 2026" do arquivo da rotina estava desatualizada e eu a repeti no relatorio da manha sem conferir o painel. Arquivo corrigido: agora registra o estado real e obriga a leitura do painel do AdSense em toda execucao, como quarta fonte, so de leitura.
2. O "ads.txt Nao encontrado" do openyourais e leitura velha do Google, de 21/08, nao um problema no site. Verificado por curl nesta execucao: `https://openyourais.com/ads.txt` responde 200 em text/plain com `google.com, pub-4722208859927111, DIRECT, f08c47fec0942fa0`, e o host www redireciona 308 para o apex. O axenworks serve o mesmo arquivo e ja aparece como Autorizado no painel, o que confirma que o formato esta certo e o que falta e o Google reler.

Nota para nao repetir a confusao: a recomendacao "Submeter em 28/08" do internal/DIAGNOSTICO-LOW-VALUE-CONTENT.md e sobre o **openyourais**, cujo bloqueio de nova revisao terminava em 28/08. Nao e sobre o axenworks.

## 2026-08-31

**axenworks.com** (dia 10 de vida, publicado 22/08)
- visitantes 7d: 18, alta de 13% contra o periodo anterior (Vercel Web Analytics)
- page views 7d: 32, QUEDA de 43%. Bounce rate 89%, alta de 20% (Vercel)
- referrers 7d: "No data found for selected period", nenhum linkedin.com nem x.com (Vercel)
- paginas mais vistas 7d: / 16, how-many-hours-of-video-can-256gb-hold 2, video-bitrate-calculator 2, braw-file-size-calculator 1, contact 1, gopro-recording-time-calculator 1, hours-per-card 1 (Vercel)
- paises 7d: EUA 83%, Brasil 6%, Noruega 6%, Taiwan 6%. Desktop 72%, mobile 28% (Vercel)
- paginas indexadas: 0 indexadas, 1 nao indexada por "Excluida pela etiqueta noindex", validacao Iniciada. Relatorio com "ultima atualizacao 20/08/26", continua defasado (Search Console)
- impressoes 28d: 163. Cliques 28d: 0. CTR 0%. Posicao media 60. Serie de 21/08 a 29/08, painel atualizado ha 8,5 horas (Search Console)
- principais consultas 28d: prores raw calculator 1 impressao, braw file size calculator 1 (Search Console)
- sitemap: sucesso, 20 paginas descobertas, enviado 22/08, ultima leitura 30/08 (Search Console)
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- AdSense: estado "Em preparacao", detalhes vazios, ads.txt **"Nao encontrado"** (era Autorizado em 30/08), ultima atualizacao 23/08/2026 19h13 GMT-3
- tecnico: sem bloqueio. Home 39927 bytes em 276ms, robots liberando, 20 de 20 URLs do sitemap em 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: script de insights responde 200

**openyourais.com** (em avaliacao AdSense)
- usuarios ativos 28d (3/08 a 30/08): 780. Novos usuarios 28d: 786 (GA4, propriedade OPEN YOUR AIs)
- sessoes 28d: 795 no total (GA4)
- aquisicao por canal 28d, sessoes: Direct 755 (94,97%, interacao 7,15%, tempo medio 3s), Organic Search 22 (2,77%, 40,91%, 32s), Referral 13 (1,64%, 30,77%, 33s), Organic Social 6 (0,75%, 66,67%, 1min31s) (GA4)
- usuarios 7d (24/08 a 30/08): 213. Sessoes 7d: 214 (GA4)
- aquisicao por canal 7d, sessoes: Direct 208 (97,2%, interacao 6,73%, tempo medio 0s), Organic Search 3 (1,4%, 100%, 1min04s), Referral 3 (1,4%, 0%, 1s), Organic Social 0 (GA4)
- paises 7d, usuarios ativos: Singapura 160 de 211, EUA 27, China 16, Brasil 4, Ira 2, India 1, Paquistao 1, Tunisia 1, Ucrania 1 (GA4)
- paises 28d, usuarios ativos: Singapura 578 de 780 (74,1%), EUA 105, China 39, Brasil 17, Bielorrussia 7, India 6, Ira 5, Alemanha 4, Reino Unido 4, Japao 3 (GA4)
- LEITURA: inalterada, o numero segue inflado. Singapura sozinha e 160 dos 211 usuarios de 7 dias, com 1,24% de taxa de interacao, e 97,2% das sessoes de 7 dias sao diretas com tempo medio de 0 segundo. Trafego que parece humano: 41 sessoes nos 28 dias (22 busca organica, 13 referencia, 6 social organico) e 6 nos ultimos 7 dias
- paginas indexadas: 97 indexadas, 130 nao indexadas por 8 motivos, identico a 30/08. Relatorio com "ultima atualizacao 20/08/26" (Search Console)
- motivos: nao encontrado 404 11 com validacao em FALHA, pagina com redirecionamento 76 nao iniciado, erro de redireccionamento 1 nao iniciado, e mais 5 motivos
- impressoes 28d: 1,5 mil. Cliques 28d: 8. CTR 0,5%. Posicao media 29,4. Serie de 02/08 a 29/08, painel atualizado ha 8,5 horas (Search Console)
- principais consultas 28d: claude gauntlet loop 1 clique e 4 impressoes, controllable ai director 0 e 51 (Search Console)
- sitemaps: sitemap-index.xml sucesso com 117 descobertas, ultima leitura 30/08. sitemap-0.xml sucesso com 117, ultima leitura 28/08 (Search Console)
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- AdSense: estado "Necessaria atencao", motivo Low value content, ads.txt **"Nao encontrado"**, ultima atualizacao 21/08/2026 18h53 GMT-3. Nenhuma nova revisao pedida
- tecnico: sem bloqueio. Home 16964 bytes em 812ms, robots liberando, sitemap-index com 120 URLs, 30 testadas todas 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: tag G-EBZ4F0ZXRY presente na home

Comparacao com 30/08 (terceira execucao daquele dia):
- axenworks: visitantes 7d 20 para 18, page views 7d 58 para 32 (queda de 45% no numero absoluto), bounce 75% para 89%, impressoes 28d 97 para 163 (alta de 68%), posicao media 60,8 para 60, indexadas 0 para 0, sitemap 20 para 20
- openyourais: sessoes 7d 211 para 214, usuarios 28d 763 para 780, impressoes 28d 1,46 mil para 1,5 mil, cliques 8 para 8, posicao media 30,5 para 29,4 (melhorou), indexadas 97 para 97, sitemap servido 118 para 120 URLs
- trafego que parece humano no openyourais: 41 sessoes em 28 dias e 6 em 7 dias, identico a ontem
- nenhuma queda acima de 20% em nenhum dos dois sites

### Mudanca do dia: ads.txt do axenworks caiu de Autorizado para "Nao encontrado" no painel do AdSense

Em 30/08 o painel mostrava axenworks com ads.txt **Autorizado**. Hoje mostra **Nao encontrado**, com a mesma data de ultima atualizacao (23/08/2026 19h13), ou seja, o carimbo de data nao acompanhou a mudanca do campo.

Verificado por curl nesta execucao, os quatro hosts:
- https://axenworks.com/ads.txt -> 200, text/plain, `google.com, pub-4722208859927111, DIRECT, f08c47fec0942fa0`
- https://www.axenworks.com/ads.txt -> 200 apos redirect para o apex, mesmo conteudo
- https://openyourais.com/ads.txt -> 200, text/plain, mesma linha
- https://www.openyourais.com/ads.txt -> 200 apos redirect para o apex, mesmo conteudo

Conclusao: o arquivo esta correto e no ar nos dois sites, nos dois hosts. O "Nao encontrado" e leitura do Google, nao problema do site. Nada a consertar, nada a submeter. Se persistir por varios dias com o site ja aprovado, ai sim vira assunto.

### Nota sobre o marco de dia 10 do axenworks

A regra da rotina diz que zero paginas indexadas depois do dia 10 vira manchete. Hoje e o dia 10. O relatorio de Indexacao continua marcando 0 indexadas, mas ele esta congelado em 20/08, antes do lancamento, quando a home ainda carregava o noindex antigo. O relatorio de Desempenho, atualizado ha 8,5 horas, registra 163 impressoes em 28 dias com posicao media 60, e o Google so serve na busca pagina que esta no indice. Somando a verificacao por curl de 30/08 (home e calculadoras servindo index,follow sem x-robots-tag), o bloqueio nao existe mais no site servido. Falta o Google reprocessar o relatorio de indexacao. Se em 03/09 o relatorio ja tiver atualizado e ainda marcar 0, ai vira manchete de verdade.

## 2026-09-01

**axenworks.com** (dia 11 de vida, publicado 22/08)
- visitantes 7d: 9, QUEDA de 44% contra o periodo anterior (Vercel Web Analytics, serie 25/08 a 01/09)
- page views 7d: 15, QUEDA de 73%. Bounce rate 78%, alta de 9% (Vercel)
- referrers 7d: "No data found for selected period", nenhum linkedin.com nem x.com (Vercel)
- paginas mais vistas 7d: / 9, hours-per-card 1, how-many-hours-of-video-can-256gb-hold 1, prores-file-size-calculator 1, timecode-calculator 1, video-bitrate-calculator 1 (Vercel)
- paises 7d: EUA 78%, Noruega 11%, Taiwan 11%. Desktop 78%, mobile 22% (Vercel)
- paginas indexadas: **21 indexadas**, 20 nao indexadas por 4 motivos (Search Console). O relatorio finalmente reprocessou, saiu do congelamento em 20/08 e do "0 indexadas"
- motivos da nao indexacao: detetada mas nao indexada 17 nao iniciado, pagina alternativa com etiqueta canonica correta 1 nao iniciado, rastreada mas nao indexada 1 nao iniciado, excluida pela etiqueta noindex 1 com validacao Iniciada
- impressoes 28d: 163. Cliques 28d: 0. CTR 0%. Posicao media 60. Serie de 21/08 a 29/08, identico a ontem, o painel de desempenho nao fechou novo ciclo (Search Console)
- principais consultas 28d: prores raw calculator 1 impressao, braw file size calculator 1, braw calculator 1, prores data calculator 1, red komodo recording time calculator 1, .braw file format 1 (Search Console)
- sitemap: sucesso, 20 paginas descobertas, enviado 22/08, ultima leitura 30/08 (Search Console)
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- AdSense: estado "Em preparacao", detalhes vazios, ads.txt "Nao encontrado", ultima atualizacao 23/08/2026 19h13 GMT-3. Identico a 31/08
- tecnico: sem bloqueio. Home 39927 bytes em 1059ms, robots liberando, 20 de 20 URLs do sitemap em 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: script de insights responde 200

**openyourais.com** (em avaliacao AdSense)
- usuarios ativos 28d: 765, alta de 20,3%. Novos usuarios 28d: 771, alta de 20,5%. Eventos 28d: 2,7 mil, alta de 15,9% (GA4, propriedade OPEN YOUR AIs)
- sessoes 28d (4/08 a 31/08): 780 no total (GA4)
- aquisicao por canal 28d, sessoes: Direct 740 (94,87%, interacao 7,03%, tempo medio 3s), Organic Search 22 (2,82%, 40,91%, 32s), Referral 13 (1,67%, 30,77%, 33s), Organic Social 6 (0,77%, 66,67%, 1min31s) (GA4)
- sessoes 7d (25/08 a 31/08): 182 no total. Direct 179 (98,35%, interacao 7,82%, tempo medio 0s), Organic Search 3 (1,65%, 100%, 1min04s), Referral 0, Organic Social 0 (GA4)
- paises 7d, usuarios ativos: Singapura 139, EUA 18, China 16, Brasil 4, Ira 2, India 1, Paquistao 1 (GA4)
- cidades 7d: Singapura 136, San Jose 7, Shenzhen 4, Santos 3, Des Moines 3, Las Vegas Valley 2 (GA4)
- origem/meio das sessoes 7d: (direct)/(none) 179, google/organic 1, bing/organic 1, yahoo/organic 1 (GA4)
- LEITURA: o numero segue inflado. Singapura sozinha e 139 dos 181 usuarios de 7 dias, e 98,35% das sessoes de 7 dias sao diretas com tempo medio de 0 segundo. Trafego que parece humano: 41 sessoes nos 28 dias (22 busca organica, 13 referencia, 6 social organico) e apenas **3 nos ultimos 7 dias**, contra 6 ontem
- paginas indexadas: **104 indexadas** (era 97), 132 nao indexadas por 8 motivos (era 130). O relatorio tambem saiu do congelamento de 20/08 (Search Console)
- motivos da nao indexacao: pagina com redirecionamento 79 nao iniciado, rastreada mas nao indexada 20 nao iniciado, nao encontrado 404 10 com validacao em FALHA (era 11), soft 404 8 aprovado, detetada mas nao indexada 7 aprovado, duplicada com canonica diferente 4 nao iniciado, noindex 3 iniciada, erro de redireccionamento 1 nao iniciado
- impressoes 28d: 1,5 mil. Cliques 28d: 8. CTR 0,5%. Posicao media 29,4. Serie de 02/08 a 29/08, identico a ontem (Search Console)
- impressoes 3 meses (30/05 a 29/08): 4,01 mil, 14 cliques, CTR 0,3%, posicao media 28,6 (Search Console, leitura extra desta execucao)
- principais consultas 28d: claude gauntlet loop 1 clique e 4 impressoes, controllable ai director 0 e 51, ai production workflows 0 e 33, kling 3.0 motion control 0 e 33, yourais 0 e 22, grok references 0 e 16 (Search Console)
- sitemaps: sitemap-index.xml sucesso com 117 descobertas, ultima leitura 30/08. sitemap-0.xml sucesso com 117, ultima leitura 28/08. O site serve 120 URLs hoje, entao ha 3 paginas novas ainda nao relidas (Search Console)
- acoes manuais: nenhuma. Seguranca: nenhuma (Search Console)
- AdSense: estado "Necessaria atencao", motivo Low value content, ads.txt "Nao encontrado", ultima atualizacao 21/08/2026 18h53 GMT-3. Nenhuma nova revisao pedida. Identico a 31/08
- tecnico: sem bloqueio. Home 16964 bytes em 727ms, robots liberando, sitemap-index com 120 URLs, 30 testadas todas 200, canonical coerente, paginas legais no ar, ads.txt e llms.txt presentes (site-health.mjs)
- coleta: tag G-EBZ4F0ZXRY presente na home

Comparacao com 31/08:
- axenworks: visitantes 7d 18 para 9 (queda de 50%), page views 7d 32 para 15 (queda de 53%), bounce 89% para 78%, impressoes 28d 163 para 163, posicao media 60 para 60, **indexadas 0 para 21**, sitemap 20 para 20
- openyourais: sessoes 7d 214 para 182, usuarios 28d 780 para 765, impressoes 28d 1,5 mil para 1,5 mil, cliques 8 para 8, posicao media 29,4 para 29,4, **indexadas 97 para 104**, sitemap servido 120 para 120 URLs
- trafego que parece humano no openyourais: 41 sessoes em 28 dias (igual) e 3 em 7 dias, contra 6 ontem
- AdSense: nenhuma mudanca em nenhum dos dois sites

### Mudanca do dia: os dois relatorios de Indexacao do Search Console finalmente reprocessaram

Desde 20/08 os dois relatorios de Indexacao estavam congelados e serviam sempre os mesmos numeros. Hoje os dois atualizaram:

- **axenworks saiu de 0 para 21 paginas indexadas.** Isso encerra a duvida aberta em 30/08 e 31/08. O "0 indexadas" era relatorio velho, de quando a home ainda carregava o noindex de antes do lancamento, e nao um bloqueio no site servido, exatamente como as verificacoes por curl e as 163 impressoes de busca ja indicavam. Sobra 1 pagina marcada como excluida por noindex, com validacao Iniciada, e 17 detetadas mas ainda nao indexadas, o que e normal para um site de 11 dias.
- **openyourais foi de 97 para 104 indexadas.** Os 404 nao encontrados cairam de 11 para 10. As paginas com redirecionamento subiram de 76 para 79 e as rastreadas mas nao indexadas de 18 para 20, ambos efeito do reprocessamento, nao de mudanca no site.

Nao ha mais nada pendente sobre indexacao do axenworks. O marco de dia 10 que ficaria como manchete se o relatorio continuasse em zero foi resolvido pelo proprio Google.

### Queda de trafego no axenworks, dentro do esperado para a fase

Visitantes 7d cairam de 18 para 9 e page views de 32 para 15. Numeros absolutos pequenos, sem referrer social no periodo e sem nada quebrado no site: as 20 URLs respondem 200, a coleta da Vercel responde 200 e o Search Console segue registrando impressoes. A leitura e que o pico inicial de lancamento passou e o site ainda nao tem busca organica suficiente para sustentar visita diaria. Nao e falha tecnica, e falta de fonte de trafego.
