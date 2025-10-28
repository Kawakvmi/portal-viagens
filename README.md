# Portal de Viagens (Next.js)

Aplicação Next.js com App Router, rotas dinâmicas e CSS Modules.
Lista destinos em **/destinos** e abre detalhes em **/destinos/[slug]**.

## Rodar local
npm install
npm run dev
# http://localhost:3000

## Estrutura
src/
  app/                # App Router
    destinos/        # Listagem
      [slug]/        # Página dinâmica
  components/        # Layout, CardDestino
  data/              # Destinos (mock)

## Tecnologias
- Next.js 14
- React 18
- CSS Modules
