# 5 WEEK SKILLS, especificacao do formato

Escrito em 2026-08-22. Reverificado inteiro na sessao que escreveu a edicao 1, e reverificado de
novo depois que um checador de fora reprovou esta especificacao no mesmo dia.
Snapshot desta revisao: 2026-08-22, entre 21h40 e 22h10 UTC, via `gh` CLI autenticado e `curl`
direto. Nao reaproveitei numero nenhum das passagens anteriores. O que foi reaberto e recontado
nesta passagem, e e todo numero que este arquivo afirma: o SKILL.md upstream da blader/humanizer
(35 padroes, versao 2.11.2) e a copia local em `~/.claude/skills/humanizer` (29 padroes, versao
2.5.1, ultimo commit 8b3a178 de 31/03/2026); o README da nexu-io/html-anything, contado ocorrencia
por ocorrencia; as 81 pastas de template da mesma html-anything e os 152 cartoes da
video-shotcraft, pela arvore do repositorio; as 16 URLs de axenworks.com; os caracteres dos dois
posts da edicao 1, contados no arquivo; e os 11 zips de `public/skills/`, descompactados e lidos.

O que a terceira passagem derrubou fica registrado aqui, porque a coluna cobra isso dos outros.

**Um.** A correcao da html-anything que este arquivo exibia estava ela mesma errada, e errada no
lugar mais constrangedor: numa correcao. A versao anterior dizia que a curadoria tinha inventado
o conflito e que "quem diz 8 e a secao de status, bem mais abaixo, em duas linhas separadas".
Contei de novo. A tabela de deteccao tem mesmo 9 linhas, uma por CLI, e essa metade estava certa.
Mas o 8 aparece em tres pontos, nao dois, e o primeiro deles e uma tabela: a linha
"Coding-agent CLIs (8)" da tabela "At a glance", que vem muito antes da secao de status. Os outros
dois sao a frase "all 8 CLIs listed above" e a linha "Agent detection (8 CLIs)" da tabela de
status. Ou seja: a curadoria original, que falava de topo e tabela, era defensavel, e a correcao
subcontou. O conflito real e 9 no titulo de abertura e no badge contra 8 em tres lugares mais
abaixo, sendo que a tabela que lista os CLIs um a um lista nove.

**Dois.** A coluna "padrao" da secao 3.1 carimbava o vicio de autoridade como padrao 27 da
humanizer 2.11.2. Falso. Detalhe na propria secao 3.1, junto com a linha corrigida.

**Tres.** A secao 9 afirmava que a pagina `/skills` nao existia. Ela existe. Corrigido la.

Uma regra que nasce disto: correcao publicada tambem e numero. Vale a mesma conta que a coluna
cobra dos README dos outros.

Esta especificacao existe por causa de um fracasso documentado. Em julho de 2026 um agente
extraiu 7 elementos dos melhores posts do Ulisses e transformou aquilo numa regra obrigatoria.
Saiu 8 posts seguidos com a mesma arquitetura, "Minha reacao honesta:" em 8 de 8, e o
engajamento morreu. Ele suspendeu tudo em 13 de agosto. Ver `linkedin-formula-failure-postmortem`
na memoria.

**A lei desta serie, e ela vale para os POSTS: o post e um repertorio, nao uma checklist.**
Nenhum formato, nenhuma abertura e nenhum fecho de post pode sair na mesma ordem duas vezes.
As travas que garantem isso estao nas secoes 4.3 e 4.4 e nao sao negociaveis.

**O artigo e o oposto, tambem de proposito.** A espinha de sete blocos da secao 2 e a anatomia de
oito campos das cinco fichas sao fixas toda semana. Coluna que muda de forma toda edicao nao vira
coluna, vira post avulso, e o leitor precisa reconhecer a peca em dois segundos de scroll. Onde o
artigo varia e no angulo da semana, na abertura, no fecho e na ordem das cinco fichas.

A lei de antes dizia "nada aqui e obrigatorio na mesma ordem duas vezes", ponto, e isso era largo
demais: duas paginas abaixo a secao 2 mandava "sempre estes oito campos, sempre nesta ordem".
A lei prometia o que a secao 2 nao cumpria. O que morreu em julho foi o post, nao a coluna,
entao quem carrega a lei do repertorio e o post. Se em algum momento o **post** comecar a parecer
um molde, o repertorio esta quebrado e deve ser reescrito, nao afinado. Se a **ficha** comecar a
parecer um formulario, ela esta certa.

---

## 1. O que e a serie

Coluna semanal em openyourais.com. Cinco skills do Claude por edicao: quatro garimpadas do GitHub
e uma do acervo do proprio Ulisses. Cada skill sai com o que ela faz, para quem serve, quanto
custa instalar, quanto tempo poupa e, principalmente, **a pegadinha**: a linha do README que
esta la e quase ninguem le.

A pegadinha e o que separa esta coluna de uma lista de links. Sem ela, isto vira propaganda.

Objetivo declarado, em ordem de importancia:

1. Fazer a pessoa voltar ao site toda semana.
2. Reabrir as rotinas de post com conteudo util em vez da formula de julho.
3. Levar trafego para axenworks.com sem parecer anuncio (regras na secao 6).

### Dia e horario

| Peca | Quando | Onde |
|---|---|---|
| Artigo da edicao | Segunda, 07h00 America/Sao_Paulo | `src/content/blog/` |
| Post de LinkedIn (portugues) | Segunda, 08h30 | Blotato, accountId 13743 |
| Post de X (ingles) | Terca, 09h00 | Blotato, accountId 13071 |

Calendario das cinco primeiras: 24/08, 31/08, 07/09, 14/09, 21/09 de 2026.

Segunda existe por um motivo pratico: a coluna precisa passar no teste de segunda de manha.
Se a skill nao instala e nao produz nada antes do primeiro cafe, ela nao entra.

---

## 2. Estrutura de cada edicao (o artigo)

A coluna tem espinha fixa. Isso e proposital, e e a excecao que a lei do topo declara: o
repertorio manda no post, a espinha manda no artigo. **O que varia e a abertura, o fechamento, o
angulo da semana e a ordem das cinco fichas, nunca a anatomia delas.**

```
1. Titulo         5 Week Skills #NN + o angulo da semana
2. Abertura       do repertorio da secao 4, no maximo 180 palavras
3. Como eu checei bloco curto: hora do snapshot, ferramenta usada, o que quebrou
4. As cinco       fichas na ordem definida pela curadoria da semana
5. O que eu NAO verifiquei
6. Fechamento     do repertorio da secao 4
7. Semana que vem uma linha, sem promessa exagerada
```

O bloco 5 nao e opcional em nenhuma edicao. Ele e a garantia de que a coluna nao virou release
de imprensa. Se numa semana nao houver nada que ficou por verificar, e porque a verificacao foi
preguicosa.

### Anatomia de cada ficha de skill

Sempre estes oito campos, sempre nesta ordem, sempre curtos:

| Campo | Regra |
|---|---|
| **Nome e uma linha** | O que e, em uma frase, sem adjetivo de venda |
| **Link** | URL do repositorio, aberta e confirmada HTTP 200 na hora de escrever |
| **O que faz** | Em portugues claro, sem jargao. Se precisa de jargao, explica o jargao |
| **Para quem** | Um cargo concreto e uma tarefa concreta. Nunca "para criadores" |
| **Quanto poupa** | Ver regra abaixo. Numero inventado invalida a edicao |
| **Custo de instalar** | Numero de comandos, e o comando exato. Se sao quatro, escreve quatro |
| **A pegadinha** | A linha do README que muda a decisao e que ninguem le |
| **Verificado em** | Data, hora UTC, e o que exatamente eu abri e li |

**Regra do "quanto poupa".** Nunca chutar hora. Duas formas permitidas, e so essas:

- **Medido**: "rodei, marquei o relogio, deu X". So se rodou de verdade.
- **Substituicao declarada**: nomear a tarefa que a skill substitui e deixar o leitor fazer a
  conta. Exemplo honesto: "o template ja vem com um filme de 36,2 segundos e 10 planos montado.
  Se voce montaria isso do zero no After Effects, o que voce poupa e o seu dia. Se voce nao
  montaria, voce nao poupa nada."

Se nem uma nem outra couber, escreve "nao medi" e segue. "Nao medi" e uma resposta publicavel.

---

## 3. Vicios banidos, com teto de frequencia

Duas listas. A primeira e teto: pode aparecer, mas raramente e nunca em sequencia. A segunda e
banimento seco: nunca, em nenhuma edicao.

### 3.1 Teto de frequencia (contar no ledger da secao 5)

A coluna "padrao" aponta para o numero do padrao correspondente no SKILL.md da blader/humanizer,
versao 2.11.2, baixado do upstream e lido por mim na terceira passagem de hoje. Isso existe para
que a lista nao seja gosto pessoal. **A tabela abaixo tem nove vicios. Seis carregam numero de
padrao: 9, 31, 32, 33, 34 e 35.** Os outros tres levam "sem", e "sem" e uma resposta publicavel.
Celula vazia nao se preenche com correspondencia inventada.

Correcao da terceira passagem, e ela e feia. Ate esta versao, a linha da assinatura de autoridade
trazia "27" e a glosa "Persuasive authority tropes", com a mesma hora e a mesma fonte das outras.
O numero nao saiu de la. Na 2.11.2 o padrao 27 e "Pretending to reveal a deeper truth", e a
palavra "authority" nao aparece uma unica vez no arquivo upstream. "Persuasive Authority Tropes"
e o nome do padrao 27 na copia local 2.5.1, a mesma copia que a secao 3.3 denuncia como defasada.
Numero velho carimbado com hora e fonte novas. E exatamente o que a secao 3.2 bane, cometido pelo
arquivo que bane. Os outros seis numeros foram reabertos um a um no upstream e conferem.

| Vicio | Teto | Padrao | Regra extra |
|---|---|---|---|
| "Minha reacao honesta:" | 1 a cada 5 posts | 33 | E a marca do fracasso de julho. O padrao 33 se chama "Fake-candid openings" e lista "Honestly?" e "Let's be honest" como gatilho. Se der vontade de usar, a abertura esta fraca. Troque a abertura, nao a frase |
| "Tudo parte de voce" | 1 a cada 5 posts | 32 | "Formulaic sayings". Nunca no mesmo post que qualquer outro item desta tabela |
| "Nao porque X. Porque Y." | 1 a cada 5 posts | 9 | "Not X but Y and clipped negative endings". Ela detecta. Nos tambem |
| "Para quem A / Para quem B" | 1 a cada 5 posts | 35 | Parente do "Rejecting fake alternatives". O campo "Para quem" da ficha nao conta. Conta a construcao retorica de segmentar o leitor dentro do post |
| Abertura "Em [data], [empresa]..." | 1 a cada 5 posts | sem | Nunca duas edicoes seguidas, mesmo dentro do teto |
| Assinatura de autoridade ("14 anos dirigindo...") | 1 a cada 4 posts | sem | Nunca no primeiro paragrafo. A 2.11.2 nao tem padrao de autoridade. O "27" que estava aqui vinha da copia local 2.5.1 e foi retirado |
| Fecho em aforismo | 1 a cada 3 posts | 31 | "Forced punchlines and dramatic fragments". Se o post ja abriu com cena, o fecho nao pode ser aforismo |
| Abertura com numero grande ("37 mil estrelas") | 1 a cada 3 posts | sem | Numero na abertura so quando o numero for a materia, nao o enfeite |
| "Nao estou dizendo que...", "Pra deixar claro..." | 1 a cada 5 posts | 34 | "Answering objections no one raised". Entrou na lista porque e o disfarce mais provavel dos outros oito: a mesma defensividade, com roupa nova |

Contagem vale por canal e por janela deslizante. Cinco posts de LinkedIn contam entre si, cinco
de X contam entre si. Nao da para gastar o teto do LinkedIn no X.

**Gatilho automatico de cooldown.** Qualquer elemento estrutural (abertura, fecho, formato,
construcao) que aparecer em 3 edicoes consecutivas entra em cooldown de 5 edicoes,
mesmo que nao esteja na tabela acima. Isso pega os vicios novos antes de virarem formula.

### 3.2 Banimento seco, sem teto

- Travessao longo e meia risca. Nenhum, em lugar nenhum, nunca. (Vale lembrar: e o padrao 14 da
  propria humanizer, "Em and en dashes", verificado por mim no SKILL.md upstream hoje.)
  **"Em lugar nenhum" inclui o que o leitor baixa**, nao so o que ele le na tela: os zips das
  skills do acervo, os README dentro deles, os arquivos de `references/`. Foi por aqui que
  vazaram 757 travessoes longos e 74 meias riscas antes de alguem de fora contar. Ver secao 8.
- Hashtag em texto publico.
- Emoji como marcador de lista.
- Numero de estrela, fork, data ou benchmark que eu nao abri nesta sessao.
- "Vai mudar tudo", "game changer", "revolucionario", "o futuro chegou".
- Promessa de resultado que eu nao medi.
- Claim biografico fora da lista verificada. Em especial: stand-up, Los Angeles, MTV como
  empregador, Ronald Rios como diretor ou produtor (ele foi **ator e roteirista**), DALL-E,
  Runway ou Lovable como ferramenta atual.

### 3.3 O verificador de fora

Uma lista de vicios escrita por quem comete os vicios nao vale muito. Por isso a coluna passa
cada peca por uma ferramenta de terceiro antes de publicar: a skill `humanizer`, de blader.

Duas ressalvas, e as duas sao materiais.

**Primeira.** A copia instalada na maquina do Ulisses esta em `~/.claude/skills/humanizer`, na
versao 2.5.1, ultimo commit de 31/03/2026. Contei os padroes nela hoje: 29. O upstream de hoje
esta em 2.11.2, com 35. Faltam os padroes 30 a 35, e a coincidencia e desconfortavel: o 31 e
"Forced punchlines and dramatic fragments", o 32 e "Formulaic sayings", o 33 e "Fake-candid
openings", o 34 e "Answering objections no one raised". Sao quatro dos nove vicios da tabela
acima. **Enquanto a copia local nao for atualizada, ela nao pega justamente a formula de julho.**
Atualizar antes de rodar o check.

**Segunda.** A propria skill diz, na regra do padrao 14, que uma amostra de escrita do autor tem
prioridade sobre a regra padrao, inclusive sobre travessao. Ou seja: se alguem alimentar a
humanizer com um texto antigo do Ulisses cheio de tique, ela vai preservar o tique. A ferramenta
verifica contra a amostra, nao contra a lista. **O check da humanizer nao substitui a secao 3.1.
Ele e um segundo par de olhos, e olhos que obedecem quem os treina.**

---

## 4. O repertorio

Duas listas separadas: uma para a abertura e o fecho do artigo, outra para o formato dos posts.
O artigo varia pouco porque coluna precisa ser reconhecivel. **O post varia muito, e varia de
forma, nao so de palavra.**

### 4.1 Aberturas do artigo (escolher 1, sem repetir dentro de 4 edicoes)

| ID | Abertura | Como e |
|---|---|---|
| A1 | **A cena** | Um momento concreto, no set ou na mesa. Sem tese no fim. A tese aparece sozinha nas fichas |
| A2 | **A confissao** | Um erro que ele cometeu esta semana, e a skill que teria pego |
| A3 | **O numero que eu conferi** | Um numero verificado, e por que ele nao e o que parece |
| A4 | **A pergunta sem resposta** | Uma duvida real, que ele de fato nao sabe responder. Nunca pergunta retorica |
| A5 | **O objeto** | Comeca por uma coisa fisica: um cartao, uma lente, um HD cheio |
| A6 | **A recusa** | Uma skill que ele testou e largou, e por que. Antes das cinco que ficaram |
| A7 | **O corte** | Uma referencia de cinema que explica o tema da semana. Uma so, e curta |
| A8 | **O leitor** | Algo que alguem escreveu para ele, citado com permissao |
| A9 | **A entrada fria** | Sem preambulo. Tres linhas e ja esta na skill 1 |
| A10 | **A correcao** | Algo que ele errou numa edicao anterior, corrigido em publico |

Obrigacoes de rotacao: A9 tem que aparecer pelo menos uma vez a cada 6 edicoes (e o antidoto
contra a coluna ficar confortavel). A3 nunca duas vezes seguidas. A10 e obrigatoria na edicao
seguinte a qualquer erro encontrado, e nesse caso ignora o cooldown.

### 4.2 Fechos do artigo (escolher 1, sem repetir dentro de 3 edicoes)

| ID | Fecho |
|---|---|
| F1 | A duvida que ficou (termina admitindo o que nao sabe) |
| F2 | O proximo teste (o que ele vai rodar durante a semana, com data) |
| F3 | Sem fecho: a ultima ficha termina e acabou |
| F4 | A regra pratica (uma linha operacional, sem filosofia) |
| F5 | Aforismo (teto: 1 a cada 3, ver secao 3.1) |
| F6 | O convite real (uma pergunta que ele quer que respondam, e responde nos comentarios) |

### 4.3 Formatos de post (LinkedIn e X)

Estes sao **formatos**, nao aberturas. Muda a forma da peca inteira.

| ID | Formato | Tamanho tipico | Link? |
|---|---|---|---|
| P1 | **Historia sem tese** | 800 a 1.400 caracteres | Opcional |
| P2 | **Tres linhas** | Abaixo de 250 caracteres | Sim |
| P3 | **A pergunta de verdade** | 300 a 600 | **Nao.** Sem link nenhum |
| P4 | **O erro que eu cometi** | 900 a 1.500 | Sim, no fim |
| P5 | **A lista sem hype** | 5 nomes, uma linha cada, zero adjetivo | Sim |
| P6 | **Uma skill so** | Ignora as outras quatro e vai fundo em uma | Sim |
| P7 | **O contra-post** | Por que uma das cinco NAO serve para voce | Opcional |
| P8 | **O comprovante** | Um numero ou print, e o que ele significa de verdade | Opcional |
| P9 | **Sem link** | Valor puro, o link fica no comentario ou em lugar nenhum | **Nao** |
| P10 | **Antes e depois** | O mesmo paragrafo nas duas versoes | Opcional |
| P11 | **A traducao do README** | Um paragrafo do README virado no que ele custa na pratica | Sim |
| P12 | **Uma linha mais carrossel** | Uma linha de texto, o resto e imagem | Sim |

### 4.4 Regras de anti repeticao (as travas)

Estas nao sao sugestoes. Antes de escrever qualquer post, abrir o ledger e conferir:

1. **Nenhum formato (P) se repete dentro de 3 edicoes.**
2. **Nenhuma abertura (A) se repete dentro de 4 edicoes.**
3. **LinkedIn e X nunca usam o mesmo formato na mesma semana.** Nem o mesmo assunto de entrada.
   Se o LinkedIn abriu pelo erro dele, o X abre por outra coisa.
4. **Variacao de tamanho obrigatoria.** A cada 5 edicoes, os posts de LinkedIn precisam conter
   pelo menos um abaixo de 400 caracteres e pelo menos um acima de 1.200. No X, pelo menos um
   abaixo de 200.
5. **A cada 5 edicoes, pelo menos um post sai sem link nenhum** (P3 ou P9).
6. **A palavra "honesta" nao pode aparecer** num post se apareceu em qualquer um dos 4 anteriores
   do mesmo canal.
7. **Se dois posts consecutivos comecarem com a mesma classe gramatical** (dois verbos, dois
   numeros, duas perguntas), o segundo e reescrito.
8. **Nenhuma edicao pode ter as cinco fichas na mesma ordem de tom.** Se as cinco pegadinhas
   forem todas de licenca, ou todas de custo, o angulo da semana esta raso: refazer a curadoria.

### 4.5 Kill switch

Se duas edicoes consecutivas ficarem abaixo da mediana de engajamento das seis anteriores,
**parar e reescrever o repertorio, nao afinar as palavras.** Foi exatamente esse o erro de julho:
tentaram salvar a formula ajustando frase. O problema nunca foi a frase.

---

## 5. O ledger (obrigatorio)

Arquivo `internal/5ws-ledger.md`. Uma linha por peca publicada. Sem ledger preenchido, a edicao
seguinte nao pode ser escrita, porque nao da para checar as travas da secao 4.4.

Formato da linha:

```
| ed | canal | data | A? | F? | P? | chars | link? | vicios usados |
```

O arquivo existe. Criei `internal/5ws-ledger.md` em 2026-08-22 com as tres linhas semente abaixo
ja dentro dele. Ate essa data a secao 5 exigia um ledger que nunca tinha sido escrito, o que
bloqueava a edicao 2 pela regra da propria secao. Quem for escrever a edicao 2 abre aquele
arquivo, nao este.

Semente da edicao 1, ja fechada porque as tres pecas estao escritas
(`internal/edicao-01.md` e `internal/posts-edicao-01.md`). Confirmar a data no dia:

```
| 01 | artigo   | 2026-08-24 | A2 | F2 | -   | -     | 1 axenworks | nenhum |
| 01 | linkedin | 2026-08-24 | -  | -  | P4  | 1445  | sim         | nenhum |
| 01 | x        | 2026-08-25 | -  | -  | P11 | 713   | sim         | nenhum |
```

Os dois numeros de caracteres foram contados no arquivo, ja com a URL final no lugar do
placeholder, nao estimados. Se o X publicar a versao 2B, de 280, trocar 713 por 258 no ledger e
anotar que houve resposta encadeada, porque isso muda a leitura da trava 4.

Leitura das travas para a edicao 2, ja que a 1 gastou estas cartas:

- A2 (a confissao) fica fora ate a edicao 5. A abertura da 2 sai de A1, A3, A4, A5, A6, A7, A8,
  A9 ou A10.
- F2 (o proximo teste) fica fora ate a edicao 4.
- P4 e P11 ficam fora ate a edicao 4.
- Nenhum vicio da 3.1 foi usado na edicao 1. O teto de todos eles esta cheio para gastar.
- A edicao 1 nao teve post sem link. Pela trava 5, um dos quatro proximos posts de cada canal
  precisa sair sem link nenhum.
- No LinkedIn, a metade de cima da trava 4 ja esta cumprida: o post da edicao 1 tem 1.445
  caracteres com a URL no lugar do placeholder, acima do piso de 1.200. **Dentro das cinco
  primeiras ainda falta um post de LinkedIn abaixo de 400 caracteres.**
- No X ainda falta um post abaixo de 200 caracteres.

---

## 6. Como a serie amarra com axenworks.com

axenworks.com e o site de calculadoras do proprio Ulisses. Bati nas 16 URLs com `curl` na terceira
passagem, as 22h07 UTC de 2026-08-22, e as 16 responderam HTTP 200: a home, `/prores-file-size-calculator/`,
`/braw-file-size-calculator/`, `/video-bitrate-calculator/`, `/timecode-calculator/`,
`/shutter-angle-calculator/`, `/gopro-recording-time-calculator/`, `/hours-per-card/`,
`/sources/`, e as sete paginas `/how-many-hours-of-video-can-{32gb,64gb,128gb,256gb,512gb,1tb,2tb}-hold/`.

**A regra e uma so: o link so entra quando a skill cria a pergunta que a calculadora responde.**

Isto significa, na pratica:

1. **Um link por edicao, no maximo.** Zero e um numero valido e vai acontecer em varias semanas.
2. **O link mora dentro da ficha da skill**, no ponto exato onde o leitor faz a pergunta.
   Nunca na abertura, nunca no fecho, nunca no post de LinkedIn ou de X.
3. **A pergunta precisa ser real.** Skill que gera arquivo de video pesado cria pergunta de
   armazenamento. Skill que escreve texto nao cria pergunta nenhuma, entao nao leva link.
4. **A frase que apresenta o link descreve o problema, nao a ferramenta.** Certo: "antes de
   rodar o lote, vale saber o que a saida vai pesar". Errado: "usa minha calculadora".
5. **"Ferramenta que eu construi" no maximo uma vez por mes.** Nas outras vezes o link entra
   sem autobiografia.
6. **Se numa edicao nenhuma das cinco skills gerar a pergunta, nao entra link.** Forcar uma vez
   e o comeco de virar propaganda.

Aplicacao na edicao 1: a video-shotcraft entrega um filme de 36,2 segundos em 1920x1080 a 30fps.
Quem leva esse render para a ilha e transcodifica para ProRes antes da cor tem uma pergunta
concreta de peso de arquivo. O link e `https://axenworks.com/prores-file-size-calculator/`,
ele vai dentro da ficha 1, e em lugar nenhum mais. Nem no LinkedIn, nem no X.

---

## 7. Curadoria: o que faz uma skill entrar

Filtro em cinco perguntas. Reprovou em uma, nao entra.

1. **Passa no teste de segunda de manha?** Instala e produz alguma coisa antes do primeiro cafe.
2. **Da para julgar antes de instalar?** Galeria publica, `example.html` aberto, eval publicado,
   alguma coisa que o leitor abre sem baixar nada.
3. **Tem pegadinha achavel?** Se eu li o README inteiro e nao achei nenhuma ressalva, eu li mal.
4. **Serve para o publico da coluna?** Audiovisual, agencia, producao, gente que entrega peca.
5. **Eu abri os numeros hoje?** Estrela, fork, licenca, ultimo push, tudo com hora de snapshot.

Composicao de cada edicao: 4 do GitHub e 1 do acervo. A do acervo fecha a edicao.

### Regra do contador

Numero que o README anuncia sobre si mesmo, a coluna conta. Nao para desmentir. Para saber.

Funcionou nas duas direcoes na edicao 1. Contei os cartoes da video-shotcraft arquivo por
arquivo, nas 10 categorias, e deu 152, exatamente o que o README promete. Contei as pastas de
template da html-anything e deu 81, contra os 75 que o README afirma em sete pontos do proprio
texto: a linha de abertura, o badge `skills-75`, a tabela "At a glance", o `alt` da captura de
tela, a legenda dessa captura, o cabecalho da secao Skills e a tabela de status. Nos dois casos o
que vai publicado e a contagem e o metodo, nunca a acusacao: eu contei diretorios, nao abri os 81
para saber quais aparecem no seletor.

A propria contagem dos sete pontos e um numero, entao ela tambem tem metodo: busca por `75` no
README bruto, sete ocorrencias, todas as sete afirmando o numero de skills ou de templates.
Ate a terceira passagem de hoje esta linha dizia "tres lugares". Era subcontagem minha, nao do
README, e a mesma subcontagem estava na ficha 3 da edicao 1.

Quando a contagem bater, isso e informacao boa sobre o repositorio e entra em uma linha.
Quando nao bater, entra na ficha com o metodo ao lado. Numero que eu nao consegui contar vai
para o bloco 5 do artigo.

---

## 8. Checklist de publicacao

Antes de qualquer peca sair:

- [ ] Ledger da edicao anterior preenchido e travas da 4.4 conferidas
- [ ] Snapshot unico anotado, com hora UTC, em todas as cinco fichas
- [ ] Todas as URLs abertas na hora, HTTP 200 registrado
- [ ] Bloco "o que eu NAO verifiquei" escrito e nao vazio
- [ ] Busca por travessao longo e meia risca em **tudo que vai ao ar nesta edicao**, resultado
      zero. Nao e so o artigo. E o artigo, os dois posts, o texto da pagina `/skills` e o
      **conteudo de dentro de cada zip publicado**, descompactado e lido. Os zips se conferem
      assim, sem depender de colar o caractere no terminal:

      ```
      python3 - <<'EOF'
      import glob, zipfile
      for path in sorted(glob.glob('public/skills/*.zip')):
          with zipfile.ZipFile(path) as z:
              blob = b''.join(z.read(n) for n in z.namelist() if not n.endswith('/'))
          # bytes de U+2014 (travessao longo) e U+2013 (meia risca)
          print(path, blob.count(b'\xe2\x80\x94'), blob.count(b'\xe2\x80\x93'))
      EOF
      ```

      Todas as saidas tem que ser zero. Um zip nao mostra o que carrega. Foi assim que 757
      travessoes longos e 74 meias riscas atravessaram esta checklist inteira, empacotados e
      prontos para download, ate um checador de fora descompactar e contar
- [ ] Busca por hashtag, resultado zero
- [ ] `toolVersion` no frontmatter atualizado para o mes corrente
- [ ] Nenhuma ferramenta citada como atual fora do bloco de stack do CLAUDE.md
- [ ] LinkedIn e X com formatos diferentes conferidos no ledger
- [ ] Skill do acervo: caminho local, chave de API, nome de cliente **e todo travessao longo e
      meia risca** removidos de dentro do zip, arquivo por arquivo. A sanitizacao e a limpeza
      tipografica sao a mesma passagem, no mesmo momento, antes de empacotar
- [ ] Skill do acervo que o artigo da semana declara como nao pronta nao pode estar em
      `public/skills/` nem na pagina `/skills`. Artigo e site nunca dizem coisas opostas sobre a
      mesma skill na mesma semana

---

## 9. O que esta especificacao nao resolve

Escrito aqui para nao ser esquecido.

- Nao existe metrica de engajamento coletada automaticamente ainda. O kill switch da 4.5 depende
  de alguem olhar os numeros toda semana. Enquanto isso for manual, ele vai falhar.
- A pagina `/skills` existe. Isto aqui dizia o contrario, e a frase ja estava falsa quando a
  primeira pessoa leu: a pagina foi construida na mesma tarde em que este arquivo foi escrito e
  ninguem voltou para corrigir a linha. Conferido na terceira passagem: `src/pages/skills.astro`
  compila, `npm run build` gera `/skills/` e os zips sao servidos e baixam com HTTP 200.
  O limite que sobra e outro e continua aberto: **nenhum zip carrega arquivo de
  licenca.** A pagina resolve isso com uma frase de permissao no rodape, o que nao e a mesma coisa
  que um `LICENSE` dentro da pasta. Enquanto for assim, quem baixar depende de ter lido o rodape.
- A gauntlet-loop nao esta na pagina, de proposito. A edicao 1 diz ao leitor que ela nao da para
  instalar e que so sai na edicao 5, em 21 de setembro. Enquanto o artigo disser isso, o zip fica
  fora de `public/skills/` e fora de `/skills`. Se ela ficar pronta antes, quem muda primeiro e o
  artigo, nunca o site sozinho.
- Nao ha revisor humano definido. A coluna verifica ferramentas de terceiros, mas ninguem
  verifica a coluna.

## REGRA DE TRAFEGO, inegociavel

**Nenhum link externo em post de rede social. O unico link e o do artigo no site.**

Repositorio, fonte, download e documentacao moram DENTRO do artigo. Se o link do repositorio
aparecer no post, a pessoa clica nele, vai para o GitHub, e o site nunca e visitado. A coluna
passa a trabalhar de graca para os outros.

Como escrever o post entao: entregue a parte que desperta (o erro, o numero, a flag perigosa,
a contradicao) e nao entregue o endereco. A curiosidade fica sem saida a nao ser abrir o artigo.

Checar antes de publicar qualquer post da serie:
- o post contem exatamente 1 link, e ele e do openyourais.com
- nenhum github.com, nenhum link de documentacao, nenhum encurtador
