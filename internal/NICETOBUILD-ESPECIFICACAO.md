# nicetobuild.com — a ideia do Ulisses, inteira
`23/08/2026. Domínio comprado e apontado para a Vercel.`

## A IDEIA, nas palavras dele. Leia isto antes de tudo.

> **"todo mundo quer uma cozinha bonita, uma sala bonita decorada, mas esbarram no fato de não
> poder descobrir como fazer sem falar com um empreiteiro pra saber valores"**

> "as pessoas são viciadas nisso. deixar o lugar onde moram lindo e aconchegante"

> "é so voce ver esses programas de reforma de casa que o cara vai la e reforma a casa e a pessoa
> fica maravilhada"

> "voce coloca o tamanho da sua casa, a area que voce quer colocar um piso, e indica uma loja
> perto de voce"

> "é uma estimativa de preço. não cravado"

> **"dor e solução/resposta no mesmo lugar"**

## O ERRO QUE JÁ FOI COMETIDO DUAS VEZES NESTE PROJETO

Duas versões anteriores desta especificação transformaram isto numa calculadora fria de material,
com saco de cimento e pé quadrado, sem a parte que faz a pessoa querer entrar.

**O ponto de partida da pessoa NUNCA é "preciso de piso". É "quero essa cozinha."**

O desejo é o cômodo bonito. O material é a resposta, não a pergunta. Qualquer tela que comece
pedindo metro quadrado sem antes mostrar o cômodo está errada.

## O QUE O SITE FAZ

A pessoa entra e vê **o cômodo que ela quer**, não um formulário.

1. **O desejo primeiro.** Cômodos reais na tela: cozinha, sala, banheiro, quarto. Ela escolhe o que
   está sonhando, ou já cai num pronto.
2. **O tamanho dela.** Ela põe as medidas do cômodo dela. Campos já preenchidos com um cômodo
   plausível, resultado na tela antes de ela tocar em nada.
3. **A resposta, no mesmo lugar, sem trocar de página:**
   - o que aquele visual exige de material, item por item
   - quanto de cada um, com a perda de corte somada
   - quantas caixas ou galões, porque loja não vende pela metade
   - a conta aberta do lado, para ela conferir e para mostrar ao profissional
   - **a estimativa de preço em faixa**, com fonte e data escritas ali, e campo editável para ela
     digitar o preço da etiqueta que está na frente dela
   - **onde comprar perto dela**: digita o CEP, sai link pronto de mapa

Sem menu antes, sem escolher categoria, sem passo 1 de 3, sem botão Calcular.
Recalcula enquanto digita.

## O QUE ISSO RESPONDE, e é a frase dele

"Quero uma cozinha assim. O que isso exige, quanto custa mais ou menos, e onde eu compro?"
Sem falar com empreiteiro nenhum. Sem passar vergonha. Sozinha, às onze da noite.

## A PARTE VISUAL NÃO É ENFEITE, É O PRODUTO

O dono é diretor de cinema e publicidade há 14 anos. O público deste site é viciado em **ver** a
casa mudando. Um site de reforma que parece planilha perdeu antes de começar.

O cômodo bonito na tela é o que faz a pessoa entrar e ficar. A calculadora é o que faz ela voltar.
As duas coisas na mesma página.

## AS CALCULADORAS POR TRÁS

Cada cômodo aciona as contas que ele precisa. E cada conta também tem página própria, para o
Google achar quem busca direto por ela.

| Conta | URL própria |
|---|---|
| **Flooring**, o exemplo dele | `/flooring-calculator/` |
| Paint | `/paint-calculator/` |
| Tile | `/tile-calculator/` |
| Drywall | `/drywall-calculator/` |
| Concrete | `/concrete-calculator/` |
| Mulch and soil | `/mulch-and-soil-calculator/` |

Mais os cômodos (`/kitchen/`, `/living-room/`, `/bathroom/`, `/bedroom/`) e
`about`, `contact`, `privacy`, `terms`.

## O PREÇO, do jeito que ele mandou

Faixa, nunca cotação. Fonte pública nomeada, link e data impressos na página. A frase de que o
preço da etiqueta vence o publicado. E **campo editável**: se ela já sabe o preço, digita, e a
conta refaz com o número dela.

## ONDE COMPRAR, sem manutenção

Ela digita o CEP. O site monta um link de busca de mapa com o material e o CEP dela.
Zero backend, zero API paga, zero base de lojas para envelhecer.

## REGRAS DA CASA

- Domínio canônico `https://nicetobuild.com` desde o primeiro arquivo, nunca `.vercel.app`
- Rendimento sai de ficha técnica de fabricante nomeado, com link e data na página, campo editável
- HTML, CSS e JavaScript puro. Sem framework, sem build, sem backend, sem API paga
- Inglês, público americano
- Perfeito em 375px, toque de 44px, teclado numérico
- Nunca travessão longo, nunca hashtag
- Contato visível: ulisses@openyourais.com
