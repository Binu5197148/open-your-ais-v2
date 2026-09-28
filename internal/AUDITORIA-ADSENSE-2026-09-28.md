# Revisão AdSense e continuidade, 28/09/2026

## Evidência atual
Consulta HTTP direta de home, privacy, contact, tools, support, robots.txt, ads.txt e sitemap-index: 200. Tools atual tem curadoria e 123 artigos; não confundir resultado antigo do buscador com página atual. ads.txt declara pub-4722208859927111, mesmo ID do script. Isso confirma correspondência pública, não autorização/estado no painel.
Build: 134 URLs de sitemap, 123 artigos, 4 retirados ausentes, 3650 links internos e 33 redirects passaram em verify-indexability. Isso não comprova qualidade editorial, indexação Google nem aprovação AdSense.

## Corrigido nesta branch
- Privacy: retirar promessa de anonimato de toda coleta; diferenciar instalação de verificação e anúncios ativos; informar serviços externos, escolhas e contato.
- About/contact: remover afirmações não comprovadas de anúncio ativo em todo artigo e ausência de outros rastreios.
- Skills: retirar permissão comercial indiscriminada que não resolve direitos de terceiros.
- Acervo: ressalva operacional sobre os seis pacotes sob revisão; sanitização não valida licença.
- Fluxo único: AGENTS.md, orientação no CLAUDE.md, fila editorial, revisão PR 2 e tarefa para Claude.

## Pendências com prioridade
P1: CMP/consentimento. BaseHead carrega GA4 diretamente e o script AdSense; não há inicialização de consentimento nesse componente. Uma CMP pode ser configurada no painel e carregada por Google, portanto isso não prova ausência global. Verificar Privacy & messaging e comportamento regional antes de afirmar conformidade. Não construir banner visual que promete consentimento sem controlar tags.
P1: direitos dos ZIPs citados pelo guardião. Não foi comprovada infração nesta revisão; tampouco foi comprovada permissão completa. Fonte primária e escopo por pacote antes de promover novas distribuições. Retirar permanentemente ou relicenciar exige concluir inventário.
P1: PR 2 ainda não aprovado. Ver REVISAO-PR-2.md. O corpo do PR não descreve todas as alterações antigas; revisão factual completa continua pendente.
P2: revisar amostra contínua do acervo para fontes visíveis, alegações de testes e imagens próprias. Não publicar conteúdo em volume para tentar compensar qualidade. Os 123 artigos não foram rechecados factualmente um a um nesta rodada.
P2: reconciliar descrição histórica da stack com uso confirmado; documento de agosto não é prova de versões atuais.
P2: GA4/Search Console: ainda não consultados nesta rodada. Não afirmar crescimento, palavras mais buscadas ou tráfego atual sem esses dados.
P2: página support ainda tem contribuição Stripe; confirmar disponibilidade no painel separadamente, considerando o histórico informado pelo usuário. Não testar pagamento real nem afirmar suspensão atual sem evidência.

## Fontes oficiais
https://support.google.com/adsense/answer/9724?hl=pt-BR
https://support.google.com/adsense/answer/23921?hl=en
https://support.google.com/publisherpolicies/answer/48182?hl=en
https://support.google.com/adsense/answer/13554116?hl=en
https://support.google.com/adsense/answer/7670013?hl=en-GB

Não há garantia de aprovação por quantidade de palavras/artigos. Não solicitar nova revisão ao AdSense automaticamente. Estado atual do painel não foi conferido nesta rodada.
