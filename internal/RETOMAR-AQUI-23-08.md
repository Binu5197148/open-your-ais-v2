# ONDE PARAMOS, 23/08/2026
`Escrito porque a sessão estava em 78 por cento do limite. Se a conversa cair, comece por aqui.`

---

## 1. AXENWORKS.COM — REVISÃO PEDIDA HOJE. NÃO TOCAR.

**Estado:** revisão do AdSense **solicitada hoje, 23/08/2026**, pelo próprio Ulisses.
A resposta chega por e-mail, e costuma levar de alguns dias a duas semanas.

**O que foi feito hoje:**
- `ads.txt` criado com `google.com, pub-4722208859927111, DIRECT, f08c47fec0942fa0`
- Script do AdSense inserido no `<head>` das 21 páginas e conferido no domínio real
- Site validado no painel do AdSense, e a revisão pedida
- Foto do Ulisses acrescentada na `/about/`, com nome e o que ele faz (o vídeo insiste nesse ponto)

**REGRA ATIVA: não mexer no axenworks até a resposta do Google chegar.**
Ele pediu isso explicitamente. Mudança grande durante revisão é risco à toa.

**Medido hoje, e é o motivo de otimismo:** 20 páginas, todas entre 887 e 3.799 palavras.
Um único par acima de 55 por cento de semelhança, e em 57 (256GB x 512GB), que é vocabulário
do assunto e não template. Nenhum dos dois motivos históricos de reprovação está presente.

**Pendente para DEPOIS da resposta:** mandar o sitemap para o Google Search Console.
Não bloqueia aprovação, mas sem indexação não chega visita e sem visita não entra receita.
`site:axenworks.com` não retornava nada.

---

## 2. NICETOBUILD.COM — EM CONSTRUÇÃO

**Domínio:** comprado 23/08/2026 na Hostinger, vence 23/08/2027. **RENOVAR.**
Nameservers já apontados para `ns1.vercel-dns.com` e `ns2.vercel-dns.com`, confirmado no
registro do `.com`. Falta só reivindicar o domínio dentro do projeto na Vercel, no deploy.

**Construção rodando:** workflow `wf_ad8ed45b-3b8`, projeto em `/Volumes/MAC_SSD01/Projects/nicetobuild`.
Para retomar: `Workflow({scriptPath: "<scratchpad>/nicetobuild-build.js", resumeFromRunId: "wf_ad8ed45b-3b8"})`

**Os três portões, e o site só sobe se passar nos três:**
1. **Nota 85 ou mais** de um crítico severo por frente, julgando às cegas, abrindo o site no
   navegador e comparando lado a lado com calculator.net. Ele disse: "não tem essa de chegou
   perto, a nota é 85 ou mais ou nada feito."
2. **Zero bloqueio** em `nicetobuild/check-adsense.mjs`, que mede palavras por página (mínimo 900
   nas ferramentas) e semelhança entre páginas (teto 55 por cento). **Já está zerado.**
3. **Três revisores de AdSense a frio**, unanimidade obrigatória, até três rodadas.

**Estado do teste objetivo às 78 por cento da sessão:** zerado. Calculadoras com ~2.100 palavras
cada, contra 274 no início. Páginas de cômodo (kitchen, living-room, bathroom, bedroom) criadas.

**NÃO submeter ao AdSense ainda.** A ordem é: publicar cedo para o relógio da indexação começar,
crescer em ritmo humano por duas ou três semanas até 15 ou 20 páginas, e só então pedir revisão.
E o axenworks tem prioridade na fila.

---

## 3. OPENYOURAIS.COM

Revisão travada até **28/08/2026** (limite de tentativas atingido).
`llms.txt` ainda ausente. Ele quer, mas mandou deixar para outra hora.

---

## 4. AS REGRAS QUE ELE DEFINIU HOJE. NÃO REPETIR OS ERROS.

**A lei do produto**, em `internal/LEI-DO-PRODUTO.md`, palavras dele:
> "dor e solução/resposta no mesmo lugar"

**O objetivo, na ordem em que ele arrancou de mim:**
Ganhar dinheiro. Para isso, aprovar no AdSense **e** ter gente entrando. Para ter gente entrando,
a ferramenta precisa ser **interessante, necessária, irresistível e boa demais para ser de graça**.

**A régua do "boa demais para ser de graça":** dar, grátis e em trinta segundos, exatamente o que
hoje só a visita do empreiteiro dá.

**A tese dele, que não muda:** as pessoas são viciadas em deixar a casa bonita e aconchegante,
e travam porque não conseguem descobrir nada sem falar com quem lucra com a ignorância delas.

**Utilidade pública**, palavras dele. Não compete, não tem funil, não tem isca.
Por isso "já existe algo parecido" nunca foi motivo para não fazer.

### OS TRÊS ERROS QUE CUSTARAM O DIA INTEIRO

1. **Briefei o time para "não ser reprovado" quando o critério era "as pessoas vão clicar".**
   Todo o resto veio errado por causa disso. Um painel inteiro escolheu um vencedor sem efeito
   calculadora porque ninguém foi instruído a perguntar se alguém clicaria.
2. **Peguei a tese dele e escolhi a solução sozinho**, escalando os agentes só para otimizar
   dentro da caixa que eu mesmo fechei. Ver `memory/feedback-agentes-acham-o-caminho.md`.
3. **Escrevi documento quando ele esperava site.** Ele saiu e voltou esperando algo de pé.
   Quando o problema é conhecido e a solução também, construir, não escrever mais um relatório.

---

## 5. O QUE VALE A PENA DE TUDO QUE FOI PESQUISADO

`internal/pesquisa/`, cinco arquivos, 2.087 linhas, 238 páginas abertas de verdade, com apêndice
de hora e URL. Os achados que importam:

- **Home & Garden é a categoria número 1 de 25 no AdSense nas Américas**, multiplicador 13.37
  contra 4.34 do segundo lugar.
- **A categoria ESTÁ sendo aprovada.** homeprojectcalculator.com e plantingcalc.com servem
  AdSense hoje, com publisher ID visível no HTML.
- **Harvard JCHS:** gasto com reforma foi de 400 bilhões (2019) para 600 bilhões (2023), e o
  próprio Harvard atribui à pandemia.
- **15 consultas com fórum no top 10 do Google, 10 delas em primeiro lugar.** Um post de Reddit
  com ZERO upvotes ranqueia em primeiro nos EUA para `should i pay a contractor before work is done`.
- **Calculadora de preço não pode dizer a verdade.** Prova, de quem dava orçamento: "a lot of
  folks in this line of work do not have set prices for jobs". Mesmos arbustos, 650 e 1.200 dólares.

---

## 6. OS CRITÉRIOS NÃO PODEM MUDAR ENTRE UMA RODADA E OUTRA

Ele levantou isso e está certo: se os agentes julgarem coisas diferentes em rodadas diferentes,
a nota não vale nada.

Por isso os critérios vivem em ARQUIVO, nunca na memória de agente nenhum. Cópia permanente em:

    /Volumes/MAC_SSD01/Projects/nicetobuild/_criterios/nicetobuild-build.js

Esse arquivo é a fonte da verdade do julgamento. Ele contém, literalmente:
- a nota mínima 85 e o que 85 significa
- a obrigação de abrir o site num navegador de verdade e digitar nas calculadoras
- a comparação lado a lado com calculator.net e inchcalculator.com, dizendo qual está melhor
- os 6 testes específicos (resultado antes de tocar, troca de calculadora sem sair da página,
  conta aberta, seção sobre estar sendo cobrado demais, páginas genuinamente diferentes,
  nenhum canonical apontando para vercel.app)
- o julgamento às cegas: o verificador não sabe quem construiu nem quantas tentativas houve
- o teto de 3 rodadas por frente
- os 3 revisores de AdSense com unanimidade obrigatória

**Ao retomar: use ESSE arquivo, não reescreva os critérios de cabeça.**
Se precisar mudar algum critério, mude no arquivo e diga a ele que mudou, com o motivo.

E o teste objetivo, que não depende de agente nenhum:

    cd /Volumes/MAC_SSD01/Projects/nicetobuild && node check-adsense.mjs
