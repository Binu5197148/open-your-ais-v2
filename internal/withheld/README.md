# Retido, nao publicar ainda

## gauntlet-loop.zip

Saiu de `public/skills/` em 2026-08-22 e nao pode voltar sem uma decisao explicita.

**Motivo.** A edicao 1 da coluna 5 Week Skills, em `internal/edicao-01.md`, diz ao leitor tres
coisas sobre esta skill: que o link e "None yet", que "you cannot install it yet" e que ela so
fica publica na edicao 5, em 21 de setembro de 2026. Enquanto o zip estivesse em `public/skills/`
sendo servido em `/skills/gauntlet-loop.zip`, o artigo e o site estariam dizendo coisas opostas
sobre a mesma skill, na mesma semana. Um dos dois estaria mentindo para o leitor.

**Estado do arquivo aqui dentro.** Os travessoes longos ja foram removidos deste zip, junto com
os dos outros dez, na limpeza de 2026-08-22. O arquivo de origem em
`~/.claude/skills/gauntlet-loop/SKILL.md` continua com os oito travessoes originais, e e sobre
esse arquivo de origem que a edicao 1 fala quando diz "eight long dashes". Nao mexi na origem.

**O que a edicao 1 lista como pendente antes de publicar:**

1. Nao existe campo `license:` no frontmatter.
2. O arquivo esta em portugues e o site e em ingles.
3. A pasta `references/` esta vazia.
4. O prompt original de Matt Shumer esta reproduzido dentro dela, palavra por palavra, creditado.
   Falta decidir se carrega o texto inteiro ou aponta para a fonte.
5. O nome do Ulisses aparece tres vezes na origem, nas linhas 3, 103 e 152.

**Para publicar.** Resolver os cinco pontos, mover o zip para `public/skills/`, devolver o card
em `src/pages/skills.astro` e atualizar os dois numeros da pagina que dependem dele: "Ten are
mine" volta a ser "Eleven", e "the 32 working files" volta a ser 33. So depois disso, ou junto
com a edicao 5, a skill vai ao ar. Quem muda primeiro e o artigo, nunca o site sozinho.
