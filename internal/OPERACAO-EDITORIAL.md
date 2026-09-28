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
