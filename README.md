# Atelier Michele Schiavoni Architetti

Sito web per lo studio di architettura **Atelier Michele Schiavoni Architetti**, realizzato con Next.js 15, React 19, TypeScript e Tailwind CSS 4.

## Avvio rapido

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

## Script disponibili

| Comando        | Descrizione              |
| -------------- | ------------------------ |
| `npm run dev`  | Server di sviluppo       |
| `npm run build`| Build di produzione      |
| `npm run start`| Avvia build di produzione|
| `npm run lint` | Controllo ESLint         |

## Struttura

```
src/
├── app/           # App Router (layout, pagina home, stili globali)
├── components/    # Header, Hero, About, Projects, Services, Contact, Footer
└── lib/data.ts    # Testi, progetti, servizi e contatti (da personalizzare)
```

## Personalizzazione

Modifica `src/lib/data.ts` per aggiornare:

- Nome e descrizione dello studio
- Progetti nel portfolio
- Servizi offerti
- Email, telefono e indirizzo

## Deploy

Il progetto è pronto per [Vercel](https://vercel.com) o qualsiasi hosting Node.js compatibile con Next.js.
