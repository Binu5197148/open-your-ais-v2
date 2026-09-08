# Posts aguardando aprovação

> **Revalidado em 2026-09-08, 12h41 UTC**, antes de publicar. Dois números
> tinham envelhecido e foram corrigidos: as skills oficiais do Remotion passaram
> de 11 para 12 (contadas hoje em `packages/skills/skills` do repositório), e o
> tamanho do README da OpenMontage passou de 43.842 para 44.402 bytes (o post da
> edição 2 está em `posts-edicao-02.md`). Todo o resto foi reconferido e continua
> verdadeiro.

NÃO PUBLICADOS. Posts suspensos desde 13/08/2026. Texto pronto para ele aprovar.

## 03/09/2026, entrega: o método Remotion para as 40 variações

Artigo: https://openyourais.com/blog/remotion-claude-code-video-variations-director-method/

### LinkedIn

A campanha é aprovada como um filme. Depois o cliente pede em 9:16, em 1:1, em três idiomas, com o preço trocado em seis mercados e a linha legal atualizada porque alguém do jurídico acordou.

Se a peça foi gerada por um modelo, você não re-renderiza. Você regenera. E regenerar devolve outro filme: a luz muda, o rosto escorrega, o produto perde o rótulo.

Escrevi o método completo que eu uso para resolver isso, com os comandos de instalação prontos para copiar.

A ferramenta é o Remotion. Ele monta vídeo a partir de código React, então não existe modelo nenhum decidindo o que aparece na tela. O mesmo input devolve o mesmo frame na terça e na segunda. O preço vira um parâmetro. O idioma vira um parâmetro. Você troca o dado, renderiza de novo, e cada frame que foi aprovado continua exatamente como foi aprovado.

Quem dirige isso hoje é o Claude Code. São 12 skills oficiais que ensinam o agente a trabalhar dentro de um projeto Remotion, e a instalação inteira é isto:

npx remotion skills add
npx remotion skills update

O segundo comando é o que todo mundo esquece. O framework publica quase todo dia, então uma instalação de três meses atrás está ensinando padrão velho para o seu agente.

Eu não abandonei vídeo generativo, uso Kling e Seedance toda semana em job pago. O que eu parei de fazer foi pedir para uma máquina de dados aleatórios entregar consistência. Modelo generativo é caça níquel. Remotion é gráfica.

O método inteiro, o que cobrar por ele e por onde começar sem perder uma semana estão aqui: https://openyourais.com/blog/remotion-claude-code-video-variations-director-method/

### X

Campanha aprovada em um filme. Depois vem 9:16, 1:1, três idiomas e o preço trocado em seis mercados.

Se a peça foi gerada por modelo, você não re-renderiza. Você regenera, e volta outro filme.

O método que eu uso, com os comandos prontos:

npx remotion skills add
npx remotion skills update

Remotion monta vídeo a partir de código, então o frame aprovado continua o frame aprovado. Modelo generativo é caça níquel. Isso aqui é gráfica.

Método completo: https://openyourais.com/blog/remotion-claude-code-video-variations-director-method/

## 07/09/2026, entrega: o checklist de dublagem automatica do YouTube

Artigo: https://openyourais.com/blog/youtube-ai-dubbing-27-languages-what-it-cannot-do/

### LinkedIn

O YouTube esta dublando o seu canal agora e provavelmente voce nao ligou isso.

Desde 4 de fevereiro a dublagem automatica esta liberada para todo mundo, sem fila e sem inscricao, em 27 idiomas. Vem ativada por padrao para quem e elegivel. Em dezembro o YouTube teve mais de 6 milhoes de espectadores por dia assistindo pelo menos dez minutos de conteudo dublado por IA.

Ate aqui e presente, e eu nao desligaria. Mas tem uma frase na documentacao do proprio Google que muda tudo: voce nao pode editar uma dublagem automatica.

Nao e "a edicao e limitada". E nao pode. Se a maquina errar a unica linha que carrega a piada, a sua opcao e trocar o idioma original do video e mandar gerar tudo de novo torcendo.

Quem entrega trabalho pago sabe o que isso significa, porque a nota sempre volta. E nunca a dublagem inteira. E a linha 14. O cliente ouviu a linha 14, ela caiu errada no mercado dele, e ele quer aquilo mudado na quinta. Em ferramenta sem edicao nao existe quinta.

Ai esta a diferenca inteira, e ela nao e de qualidade de modelo. Uma coisa e transmissao, outra e entrega. Entrega e aquilo que pode ser pedido para mudar.

Escrevi o checklist de cinco passos para voce decidir isso no seu canal ainda hoje, incluindo onde achar o botao no YouTube Studio, qual e o unico controle que voce realmente tem, e por que decidir video a video e melhor do que decidir canal inteiro.

O que o YouTube nao entrega a preco nenhum e a voz clonada. Nao uma voz profissional, a voz da propria pessoa falando um idioma que ela nao fala. E isso que o cliente esta comprando quando paga por localizacao.

A maquina ficou com a tarefa diaria. Ficou bem com ela. O que ela nao pegou foi o julgamento de qual linha importa, e o som especifico de uma pessoa especifica.

O checklist inteiro e a divisao entre o que vale de graca e o que vale pago estao aqui: https://openyourais.com/blog/youtube-ai-dubbing-27-languages-what-it-cannot-do/

### X

O YouTube esta dublando o seu canal agora e voce provavelmente nao ligou isso. Liberado para todos desde fevereiro, 27 idiomas, ativado por padrao.

A frase que muda tudo esta na documentacao do Google: voce nao pode editar uma dublagem automatica.

Quem entrega trabalho pago sabe o problema. A nota sempre volta, e nunca e a dublagem inteira. E a linha 14, e o cliente quer ela mudada na quinta.

Transmissao e uma coisa. Entrega e outra. Entrega e o que pode ser pedido para mudar.

Fiz o checklist de 5 passos para decidir isso no seu canal hoje: https://openyourais.com/blog/youtube-ai-dubbing-27-languages-what-it-cannot-do/

---

## 08/09/2026 — entrega: a ordem barata do Genjutsu

Contexto: o Higgsfield lançou o Genjutsu na primeira semana de setembro. O termo
tem 442.544 buscas por mês com competição de só 21,5. O que o post entrega não é
o artigo, é a ordem de cinco passos que evita pagar resolução em tomada não
aprovada. NÃO PUBLICADO. NÃO AGENDADO. Aguardando aprovação dele.

### LinkedIn

Sete dólares por clipe não parece caro até você lembrar para que a ferramenta serve.

O Higgsfield lançou o Genjutsu semana passada. Ele pega um vídeo que já existe e reconstrói parte dele segurando o resto: ou transfere o movimento, a câmera e o tempo para um elenco e um cenário novos, ou troca só um objeto dentro da tomada e deixa o resto intacto. Funciona com filmagem real e com material gerado.

O problema é que ninguém usa isso uma vez. A promessa inteira é variação. O mesmo anúncio para quatro mercados, a mesma coreografia com três figurinos, o mesmo produto em seis locações. Quarenta variações no 1080p vira uma linha de orçamento de verdade, e ela chega antes de você saber quais variações prestam.

Então eu deixei pronta a ordem que eu rodo em tier caro, a mesma que já uso no Seedance:

1. Escolha o vídeo condutor antes da ideia. O Genjutsu herda o que o original faz. Câmera preguiçosa entra e sai de figurino novo.
2. Corte a fonte para a versão mais curta que ainda lê. Você paga por duração.
3. Decida o modo antes de juntar referência. Transferir movimento pede um mundo inteiro. Trocar objeto pede uma coisa só.
4. Primeira passada na resolução mais baixa. Você está comprando um julgamento, e julgamento não precisa de 1080p.
5. Só então suba. Ou re-renderiza a aprovada, ou leva a barata para upscale.

Achei também uma coisa que não sei resolver: as páginas da própria Higgsfield se contradizem. A do produto diz 3 segundos e 40 imagens de referência, o blog deles diz 4 segundos e 30. Publiquei a lacuna em vez de um veredito, porque descobrir isso no envio, depois do trabalho pronto, é caro.

A ordem completa, os preços por resolução e o que ele não resolve estão aqui: https://openyourais.com/blog/higgsfield-genjutsu-motion-transfer-object-swap-director-test/

### X

Sete dólares por clipe não parece caro até lembrar que ninguém usa Genjutsu uma vez.

A ferramenta inteira é variação: o mesmo anúncio em quatro mercados, o mesmo produto em seis locações. Quarenta variações no 1080p é linha de orçamento, e chega antes de você saber quais prestam.

A ordem que eu rodo em tier caro:

1. Escolhe o vídeo condutor antes da ideia
2. Corta a fonte, você paga por duração
3. Decide o modo antes de juntar referência
4. Primeira passada na resolução mais baixa
5. Só então sobe, ou re-renderiza ou faz upscale

Achado de brinde: as páginas da própria Higgsfield se contradizem no limite, 3s e 40 referências no produto contra 4s e 30 no blog. Testa a borda antes de planejar em cima.

Preços e o passo a passo: https://openyourais.com/blog/higgsfield-genjutsu-motion-transfer-object-swap-director-test/
