# Ajustes: menu fixo, alinhamento do mago e rótulo da hero

## Contexto
O componente `src/components/SiteHeader.tsx` existe, mas não está montado: `src/routes/__root.tsx` renderiza apenas o `<Outlet />`, por isso o site está sem menu no topo. Dois ajustes visuais na hero completam o pedido.

## 1. Menu fixo no topo
Montar `<SiteHeader />` em `src/routes/__root.tsx`, dentro do `RootComponent`, envolvendo o `<Outlet />`:

```text
<SiteHeader />
<Outlet />
```

Assim o menu aparece em todas as páginas (home, Meta Ads, Google Ads, RevOps, Landing pages), já com o botão de WhatsApp e navegação que o componente já traz.

## 2. Alinhamento do mago com o texto
Na hero (`src/routes/index.tsx`), o grid usa `items-center`; como a coluna de texto é mais alta, o topo do mago fica rebaixado em relação à primeira linha do texto. Trocar para alinhamento pelo topo no desktop (`lg:items-start`), mantendo `items-center` no mobile. Se ainda houver desalinho fino, ajustar com margem negativa/positiva leve na coluna da imagem para o topo do mago encostar na altura do rótulo dourado.

## 3. Rótulo da primeira linha
Na hero, trocar o texto do rótulo dourado de "AGÊNCIA DE TRÁFEGO PAGO" para "TRÁFEGO PAGO".

## Verificação
- Build OK; preview mostrando o menu fixo no topo em todas as páginas (com sticky ao rolar).
- Topo do mago alinhado ao topo do texto da hero no desktop.
- Rótulo "TRÁFEGO PAGO" na primeira linha.
