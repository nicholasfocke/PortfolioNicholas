# Diagnóstico de lentidão após o deploy na Vercel

A análise a seguir foi feita diretamente no código do projeto e aponta os principais gargalos que explicam a sensação de lentidão após o deploy.

## 1. Toda a página está sendo renderizada como Client Component

`src/app/page.tsx` começa com `"use client"` e mantém todo o conteúdo do portfólio como componente de cliente apenas para habilitar o `useState` do modal (`setSelectedProject`). Isso força o Next.js a enviar todos os textos, estilos e marcação para o navegador e depois hidratar tudo em runtime, mesmo que 99% da página seja estática.【F:src/app/page.tsx†L1-L240】

**Efeito prático**
- Bundle maior e bloqueio de renderização durante a hidratação em dispositivos mobile.
- Mais JavaScript sendo baixado/interpretado antes de o conteúdo ficar interativo.

**Caminho sugerido**
- Manter `page.tsx` como Server Component e mover apenas a grade de projetos + modal para um componente cliente isolado.
- Outra opção é usar um modal controlado por `dialog`/`details` sem `useState`, preservando o render estático.

## 2. Camadas gráficas e animações custosas estão sempre ativas

O CSS da home cria várias camadas fixas com `backdrop-filter`, `filter` e `box-shadow` animados (`.page::before`, `.page::after`, `.heroCard`, `.hexOrbit`, `.marqueeTrack`, etc.). Cada uma delas usa animações infinitas (`waveDrift`, `orbitDrift`, `marqueeScroll`, `hexPulse`) e filtros que exigem repaints constantes do navegador.【F:src/app/page.module.css†L7-L402】【F:src/app/page.module.css†L441-L766】

**Efeito prático**
- O thread de renderização fica ocupado recalculando estilos e repintando a tela a cada frame (60 vezes por segundo).
- Em notebooks/phones sem GPU dedicada, isso derruba os FPS e passa a sensação de travamento.

**Caminho sugerido**
- Congelar parte dessas animações (por exemplo, só animar o hexágono quando visível) e substituir `backdrop-filter` por gradientes estáticos.
- Ativar `prefers-reduced-motion` para desabilitar a rotação do `.hexOrbit` e do marquee sempre que possível.

## 3. Plano de fundo global redesenha a viewport inteira

`src/app/globals.css` adiciona duas pseudo-camadas fixas (`body::before` e `body::after`) com gradientes + SVGs inline gigantes, cobrindo a viewport completa.【F:src/app/globals.css†L15-L67】 Como essas camadas também têm opacidade e se sobrepõem ao plano de fundo animado da página, qualquer scroll ou repaint aciona novamente o rasterizador.

**Caminho sugerido**
- Renderizar essas ondas uma única vez (como imagem estática comprimida em `public/`) e aplicá-las via `background-image` simples.
- Reduzir o número de gradientes empilhados ou a opacidade para minimizar o overdraw.

## 4. Todas as imagens heroicas são carregadas ao mesmo tempo

Mesmo antes do usuário interagir, os três cards chamam `<Image fill>` e baixam PNGs de ~90–280 KB cada.【F:src/app/page.tsx†L154-L178】【676a17†L1-L4】 O `sizes="(max-width: 768px) 100vw, 33vw"` faz com que telas grandes baixem as versões completas simultaneamente.

**Caminho sugerido**
- Marcar apenas o primeiro card como `priority` e atrasar os demais usando `loading="lazy"`.
- Considerar imagens WebP/AVIF ou screenshots menores, já que a diferença visual é mínima dentro do card.

---

**Resumo rápido**
1. **Hidratação desnecessária**: mover o modal para um componente cliente isolado elimina boa parte do JS enviado para o navegador.
2. **Animações permanentes**: reduzir filtros/blur e pausar animações fora da viewport diminui o custo de paint.
3. **Plano de fundo pesado**: trocar as camadas fixas por um único asset estático reduz o overdraw.
4. **Assets carregados em massa**: atrasar o download dos PNGs e otimizar o formato melhora o `Largest Contentful Paint`.
