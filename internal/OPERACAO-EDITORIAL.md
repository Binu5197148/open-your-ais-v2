# Operação única do Open Your AIs
Atualizado: 28/09/2026. Responsável pela coordenação: Codex/GPT, por instrução de Ulisses.

## Responsabilidades
- Codex: revisão factual/editorial final, código, SEO técnico, privacidade, anúncios, testes e integração. Revisão não garante aprovação do AdSense.
- Claude: pesquisa, artigos, atualização editorial e drafts de LinkedIn/X. Não alterar layout, scripts de tracking, anúncios, DNS, pagamentos ou redirects.
- Guardião editorial diário: checar fila e PRs primeiro; pesquisar evidências e propor correções editoriais. Não produzir artigo novo todo dia.
- Cinco Week Skills: uma edição por semana, sem duplicar trabalho em PR aberto. Pode pular skill autoral se os direitos não estiverem comprovados.
- Saúde AdSense: medir e registrar defeitos com URL, data, evidência e impacto; encaminhar ao Codex. Não consertar código nem pedir revisão AdSense automaticamente. Regras do outro site permanecem próprias.
- Ulisses aprova os textos exatos dos posts antes de publicação social. A autorização para preparar conteúdo não libera postagem automática.

## Fluxo obrigatório
1. Ler este arquivo, CLAUDE.md, fila abaixo e PRs abertos. Reservar item com responsável e branch.
2. Usar branch/worktree baseada em origin/main atualizada. Não tocar em alterações de outro agente.
3. Conteúdo em inglês; LinkedIn em português; X em inglês. Sem hashtag nem travessão. Voz crítica, específica, sem prometer milagres.
4. Toda afirmação verificável deve ter fonte primária clicável. Distinguir análise documental de teste executado. Nunca atribuir a Ulisses testes que o agente fez nem experiências inventadas.
5. Segurança/licenças: citar a versão e documento exatos; separar licença do código, pesos e imagens. Não inferir direitos pelo nome no README.
6. PR pequeno com resumo completo dos arquivos, fontes, limites, validação e posts em draft. Não misturar três atualizações antigas em um PR descrito como um artigo novo sem explicar cada mudança.
7. Rodar npm run build e a verificação pertinente. Claude para no PR; Codex revisa e resolve observações antes da integração. Nenhum push direto na main nem merge por rotina.
8. Depois do merge/deploy confirmado: verificar URL, canonical, sitemap, imagem e links. Só então distribuição. Solicitação de indexação não garante inclusão; IndexNow não substitui Google Search Console.
9. Registrar URL publicada, SHA, posts aprovados e resultados em uma única fila. Não dizer "publicado" se apenas build passou.

## Fila central
| ID | Trabalho | Responsável | Estado / aceite |
|---|---|---|---|
| E06 | Edição 6, PR #2 | Claude ajusta, Codex revisa | Corrigir observações em REVISAO-PR-2.md. Sem novo artigo duplicado |
| TECH-01 | Privacidade e afirmações sobre anúncios | Codex | Branch codex/adsense-editorial-2026-09-28; build e revisão |
| RIGHTS-01 | Origem/licenças dos pacotes apontados | Claude pesquisa, Codex decide implementação | Inventário com fontes e hash, sem nova distribuição até comprovar |
| CMP-01 | Consentimento para anúncios/analytics | Codex | Conferir painel e comportamento regional; ainda não validado |
| CASE-01 | Toninho: decisões de montagem que a geração não resolveu | Claude | Um artigo original com frames autorizados e fatos de produção comprovados |
| GROWTH-01 | Posts para E06 e CASE-01 | Claude | Drafts, aprovação do Ulisses e link só após publicação |

## Ritmo por quatro semanas
Uma edição semanal de 5 Week Skills e um case/tutorial original por semana. Se a revisão não terminou, finalizar o PR antes de abrir outro sobre o mesmo assunto. Sem meta de palavras para justificar enchimento.
Para cada artigo: um post LinkedIn com observação concreta e um X curto com gancho diferente. Um segundo post pode aprofundar um exemplo, sem repetir a chamada. Não automatizar respostas nem inventar depoimentos.
Links sociais: utm_source=linkedin ou x, utm_medium=social, utm_campaign=nome-do-artigo. Um link por post. Conferir preview e destino.
Medir semanalmente GA4 (sessões engajadas, origem e página de entrada) e Search Console (impressões, cliques, consultas e páginas) em 7 e 28 dias. Informar falta de acesso; nunca inventar baseline ou tratar todo tráfego suspeito como bot comprovado.

## Entrega ao coordenador
Um resumo: feito, PR, evidência, pendências e próximo item. Sem repetir alerta antigo como novo. Atualizar esta fila em PR, não abrir novos arquivos de fila paralelos.


## Auditoria de indexação e conteúdo, 15/10/2026

Responsável: Codex. Base publicada conferida: `d4453ae9973bd0e3ebf1f7aa2d2afb2b6ac71aff`.
As correções de #1, #2, #6, #7 e #8 já entraram pelo #11. O artigo REA entrou pelo #13. Os PRs #9, #10, #12 e #14 permanecem abertos nesta conferência. Um build ou parecer favorável não significa publicação.

### Prioridade editorial para Claude, sem criar fila paralela

1. Finalizar os PRs existentes antes de ampliar o volume. #14 corrige os relatos de teste de Cursor e Filmustage que ainda estão na versão publicada. #9 e #12 tratam atualizações factuais. Confirmar o último parecer e o SHA antes de integrar. Não duplicar essas reescritas.
2. Próximo lote: `adobe-quick-cut-ai-editor-honest-director-review`, `perplexity-vs-google-search-2026`, `google-veo-3-ai-video-audio-sync-review`, `ltx-video-2-honest-review-commercial-director` e `higgsfield-cinema-studio-ai-director-control-review`. Localizar evidência dos testes, medições, datas, prompts e resultados descritos. Sem evidência, reescrever como análise documental ou método proposto, removendo relatos pessoais, notas numéricas e economias não comprovadas. Não converter a execução de um agente em experiência pessoal do autor.
3. Caso original prioritário: atualizar Toninho a partir de material autorizado e registros de produção, com um problema de montagem, a decisão do editor e o resultado comparável. Confirmar a seleção do festival no documento original antes de atualizar a etapa descrita como simples submissão. Não inventar exibição, prêmio ou orçamento. Usar as imagens próprias já disponíveis; não substituir evidência por mais imagem genérica.
4. Auditar origem e autorização dos pacotes existentes sinalizados em `acervo-skills.md`. A nota de pendência prevalece sobre a classificação antiga A. Falta de comprovação não é prova de infração; não afirmar que está liberado só porque há um nome ou licença no próprio pacote.

### Critérios de aceite

- Fontes primárias acessíveis para alegações verificáveis; escopo de análise claro e prova dos testes quando apresentados como execução real.
- Um ganho concreto para o leitor: exemplo verificável, comparação delimitada, arquivo de trabalho autorizado ou procedimento reproduzível. Não há meta de palavras ou número de artigos que garanta aprovação AdSense.
- PRs pequenos, build e verify-indexability; depois da integração autorizada, conferir o marcador de produção e a URL publicada.
- Não remover páginas em massa nem redirecionar URLs antigas sem equivalente para a home/blog apenas para reduzir contadores do Search Console. 404 de conteúdo retirado pode ser o comportamento correto.
- Monitor: falha de DNS em um executor não comprova indisponibilidade pública. Registrar erro do ambiente e exigir verificação independente antes de anunciar site offline, domínio expirado ou NXDOMAIN global.

### Correções factuais preparadas nesta auditoria

- Veo 3: suporte a diálogo nativo confirmado no guia de prompts do Google DeepMind. Corrigir a limitação falsa e retirar a nota fundada nessa limitação. Os demais relatos pessoais do texto ainda precisam da revisão acima.
- LTX: Kling pertence à Kuaishou, não à ByteDance. Essa correção não valida as demais alegações de teste ou licenciamento do artigo.
