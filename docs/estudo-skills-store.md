# Estudo: Field Kits — skills grátis e pagas no openyourais.com

Data: 17/07/2026. Status: ESTUDO, nada publicado. Publicação só após o veredito do AdSense.

## 1. Visão e posicionamento

Nome proposto: **Field Kits** (conversa com "field-tested" da seção Workflows e com o manifesto).
Posicionamento: as ferramentas que o Ulisses usa de verdade em produção, empacotadas para quem quer
o mesmo pipeline. Não é marketplace de prompt genérico: é o kit de um diretor em atividade.
Mote público: os kits gratuitos ajudam a comunidade; os pagos e as contribuições sustentam a página.

## 2. Catálogo proposto

### Grátis (pay-what-you-want, mínimo zero — captura email no checkout)
| Kit | Origem | Sanitização necessária |
|---|---|---|
| Seedance Shot Architect | `video-prompt-builder` | Limpa (verificada 17/07). Adicionar README + licença + link pro site |
| Image Prompt Anatomy | `nanobanana-prompt-builder` | Remover contexto de cliente ("Yum Bumps") e defaults de projeto pessoal; generalizar API alvo |

### Pago Tier 1 — US$ 19–29
| Kit | Conteúdo |
|---|---|
| Director's Prompt Stack | Bundle expandido: os 2 kits free + skill de vocabulário de cinematografia (derivar dos artigos-guia) + guia modelo-por-tarefa (Seedance/Kling/Veo/imagem) |

### Pago Tier 2 — US$ 49–97 (as joias da coroa, sanitização profunda)
| Kit | Origem | Atenção |
|---|---|---|
| Cinematic Production Pipeline | `human-cinematic` | Remover fluxos internos, contas, referências de cliente; traduzir instruções pessoais |
| Brand DNA Extractor | `human-dna` | Idem; é diferencial competitivo dele — precificar alto |

### Fora do catálogo (nunca publicar)
`novelty` (fábrica pessoal com contas/IDs Blotato), `oya-write`, `human-image` (contém dados sensíveis,
só entra após rework completo), qualquer skill com chave/ID/caminho pessoal.

## 3. Plataforma de venda (taxas verificadas 17/07/2026)

| Plataforma | Taxa | Observação |
|---|---|---|
| **Lemon Squeezy (recomendada)** | 5% + US$0,50 (+1,5% internacional) | Merchant of record: resolve imposto global sozinha; da Stripe; suporta produto grátis e pay-what-you-want; lista de email unificada |
| Gumroad | 10% + US$0,50 (30% via Discover) | O dobro da taxa; simplicidade equivalente |
| Ko-fi | 0% em gorjetas; 5% na loja (0% no Gold US$6/mês) | Ótima como jarra de gorjeta complementar ("apoie a página") |

Recomendação: **Lemon Squeezy para tudo** (free + pago, um checkout, uma lista de email),
com **Ko-fi opcional** de gorjetas 0% no rodapé dos artigos.

## 4. Integração no site

- Seção "Field Kits" na página `/workflows` (abaixo dos guias) + **uma página própria por kit**
  rica em conteúdo (o que faz, exemplo de output, screenshot, instalação): cada página vira alvo
  de SEO ("seedance prompt skill", "claude skill filmmaking" etc).
- Checkout via overlay do Lemon Squeezy (script deles) ou link direto: link direto é mais simples e zero risco.
- Botões claros com texto explícito ("Get the free kit", "Buy — $29"), nunca "Download" solto
  (regra AdSense: nada que confunda com anúncio).

## 5. Compatibilidade com AdSense

Vender produto digital próprio e aceitar contribuições é permitido. Regras de ouro:
botão de compra visualmente distinto de anúncio; página do produto com conteúdo real (não só o botão);
página de termos/reembolso simples; zero download enganoso. Nada disso conflita com a revisão em curso,
mas por prudência TUDO só entra no ar após o veredito.

## 6. Padrão de empacotamento

```
kit-name/
  SKILL.md            (a skill em si, sanitizada)
  references/…        (arquivos de apoio)
  README.md           (o que é, como instalar em ~/.claude/skills/, requisitos, versão)
  LICENSE.md          (free: uso pessoal, não redistribuir; pago: licença pessoal única)
```
Versão no README (v1.0.0), branding "Open Your AIs — Field Kits", link pro site e pro LinkedIn dele.

## 7. Sequência de lançamento

1. **Gate**: veredito do AdSense (aprovado OU reprovado — só não durante).
2. Semana 1: 2 kits free no ar + anúncio LinkedIn/X + vídeo do Ulisses mostrando o workflow (destino: /workflows).
3. Semana 2–3: coletar feedback/emails, medir downloads.
4. Semana 3–4: Tier 1 pago (Director's Prompt Stack).
5. Depois: Tier 2 (Pipeline + DNA) com prova social acumulada.

## 8. Checklist de sanitização (por kit, antes de publicar)

- [ ] grep por chaves/tokens/IDs/emails/caminhos pessoais
- [ ] Remover nomes de cliente e projetos privados
- [ ] Testar a skill limpa num ambiente neutro (funciona sem o setup dele?)
- [ ] README de instalação testado por leigo
- [ ] Licença incluída
- [ ] Revisão final do Ulisses (é IP dele; palavra final é dele)

## 9. Pendências do Ulisses (quando decidir ativar)

- Criar conta Lemon Squeezy (dados fiscais/payout) e, se quiser, Ko-fi
- Bater o martelo nos preços
- Gravar o vídeo de lançamento
- Aprovar os pacotes sanitizados antes de subirem
