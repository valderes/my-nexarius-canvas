# Ajustes no site Nexarius — mago, hero e WhatsApp

## Contexto
O site já está construído (home + páginas de serviços, identidade navy/dourado, esferas orbitais). Este plano cobre três ajustes pedidos.

## 1. Mago mais maduro
Editar `src/assets/mago-nexarius.png` via edição de imagem: o personagem passa a ser um homem de ~50 anos, maduro e bem-apresentado (maduro sem parecer caquético), mantendo o capuz azul-marinho com constelações douradas e o orbe dourado, em fundo transparente. A imagem substitui a atual, então a home e o hero continuam funcionando sem mudança de import.

## 2. Imagem do mago maior na hero
Na home (`src/routes/index.tsx`), o mago está limitado a `max-w-sm` e ficou desproporcional ao texto do título. Aumentar a coluna/tamanho da imagem (remover o limite estreito, deixar a imagem preencher melhor a coluna) e reequilibrar as esferas orbitais para acompanhar a nova proporção. Verificar no preview que hero fica harmônica em desktop e mobile.

## 3. WhatsApp real
Substituir o placeholder `5511999999999` por `5547991043088` (+55 47 99104-3088) em `src/lib/whatsapp.ts`. Todos os CTAs (header, hero, seções, botão flutuante, CTA final) usam essa constante, então o número vale para o site inteiro automaticamente.

## Verificação
- Build OK e preview mostrando o mago maduro maior, proporcional ao texto da hero.
- Clicar em um CTA e confirmar que o link do WhatsApp abre com o número +55 47 99104-3088 e mensagem pré-preenchida.
