# Site da Nexarius — Agência de Tráfego Pago

## Objetivo
Criar o site institucional da Nexarius (nexarius.com.br), agência de gestão de tráfego pago, seguindo a identidade visual do site de referência (nexarius.vercel.app), mas vendendo **serviços** (não curso). Contato principal via **WhatsApp**.

## Identidade visual (herdada da referência)
- Fundo azul-marinho escuro (`#0b1633`), grafite, petróleo; acentos dourado/âmbar (`#f2b84b`, `#d5a94e`), creme/marfim para textos.
- Tipografia: **Manrope** (títulos e texto) + **DM Mono** (etiquetas e detalhes técnicos).
- Estética: seções numeradas ("01 / O PRINCÍPIO"), linhas finas, textura de ruído, etiquetas em caixa alta.
- Conceito central: **Atrair → Converter → Expandir** (as três esferas).

## Elementos novos da identidade
1. **Mago Nexarius**: gerar uma nova imagem do mago (melhor que a da referência), em estilo condizente com a paleta escura/dourada, para o hero e seções-chave.
2. **Três esferas orbitais**: animação contínua de três esferas girando unidas em círculo, formando um triângulo (como elétrons de um átomo):
   - Esfera **azul** = Atração
   - Esfera **laranja** = Conversão
   - Esfera **verde** = Expansão (RevOps na base)
   - Implementada em CSS/SVG animado, usada no hero e como motivo recorrente.

## Estrutura (várias páginas)
- **Home (`/`)**: hero com o mago + esferas orbitais, manifesto ("Não existe crescimento isolado"), o método em 3 movimentos (Atrair/Converter/Expandir), serviços em resumo, como trabalho (no lugar de cases), dúvidas frequentes, chamada final para WhatsApp.
- **Meta Ads (`/meta-ads`)**: gestão de campanhas Facebook/Instagram — o que inclui, processo, para quem é, CTA WhatsApp.
- **Google Ads (`/google-ads`)**: gestão de campanhas Google — pesquisa, display, YouTube; processo e CTA.
- **RevOps / Expansão (`/revops`)**: funil, CRM, expansão na base de clientes.
- **Landing pages e criativos (`/landing-pages`)**: criação/otimização de páginas e peças de anúncio.
- Header fixo com marca NEXARIUS (marca de três pontos, como na referência), navegação entre páginas e botão WhatsApp sempre visível.

## Conteúdo
- Textos em português, tom estratégico e direto (como a referência), sem promessas de resultado garantido.
- Como ainda não há cases: seção "Como eu trabalho" (diagnóstico → planejamento → execução → otimização) no lugar de provas sociais.
- CTAs abrem o WhatsApp com mensagem pré-preenchida. **Preciso do seu número de WhatsApp** para configurar os links (posso deixar um placeholder até você passar).

## Foco em conversão (CRO)
Inspirado em páginas de alta conversão:
- Uma promessa clara no hero (o que a Nexarius faz, para quem, e o próximo passo) com CTA visível sem rolagem.
- Botão WhatsApp fixo/flutuante sempre acessível, em todas as páginas.
- Hierarquia de objeções: método → como trabalho → dúvidas frequentes → CTA repetido ao final de cada seção.
- CTAs com texto de ação específico ("Quero mais clientes com tráfego pago"), não genéricos.
- Prova de credibilidade sem cases: processo transparente, garantias de trabalho (relatórios, acesso às contas, sem fidelidade forçada).
- Microcopy de redução de fricção junto aos botões ("resposta em até 1 dia útil", "sem compromisso").

## Performance e SEO
- Site leve e rápido: imagens otimizadas (mago em formato comprimido, dimensões exatas), CSS via tokens, sem dependências pesadas, animação das esferas em CSS puro (sem JS de animação).
- SEO técnico completo: `head()` por página com título, descrição, og:title, og:description, og:type e canonical relativo; `robots.txt` liberado; JSON-LD de Organization/ProfessionalService na home.
- Estrutura semântica: um `<h1>` por página, hierarquia de headings correta, `alt` em imagens, navegação por teclado, contraste adequado.
- Meta tags e textos em pt-BR, pensados para buscas como "gestor de tráfego", "agência de tráfego pago", "Meta Ads" e "Google Ads".

## Detalhes técnicos
- TanStack Start + Tailwind v4; tokens de cor da identidade definidos em `src/styles.css`.
- Fontes via `<link>` no `__root.tsx` (Manrope + DM Mono), com `preconnect`.
- Animação das esferas em CSS puro (órbita circular, triângulo estável).
- Imagem do mago gerada por IA e salva em `src/assets/`.
- Cada página com `head()` próprio (título, descrição, og) em português.
- Sem backend/banco de dados nesta fase.
