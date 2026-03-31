# MiniReactApp ✨

En webb-applikation byggd med React och TypeScript som en del av Miniprojekt 1.

## Beskrivning

MiniReactApp är en enkel multi-sida applikation som innehåller en startsida, en om-sida, en todo-lista och en räknare. Applikationen är byggd med React, TypeScript och Tailwind CSS, med React Router för navigering.

## Tekniker

- React
- TypeScript
- Tailwind CSS
- React Router DOM
- Vite

## Kom igång

### Installation

```bash
git clone https://github.com/sanhu7/react-app-fixed.git
cd mini-react-app
npm install
```

### Kör projektet

```bash
npm run dev
```

### Bygg projektet

```bash
npm run build
```

## Demo

🔗 [Live demo](https://DIN-LÄNK.netlify.app)

## Komponenter

 -Komponent  Beskrivning 

1.`Header` | Stateless | Navigeringsbar med responsiv hamburgermeny |
2.`Footer` | Stateless | Sidfot med copyright |
3.`PagesLayout` | Stateless | Layout-wrapper med Header och Footer |
4.`Card` | Stateless | Återanvändbar kortkomponent |
5.`Counter` | **Stateful** | Räknare med öka, minska och återställ |
6.`TodoList` | **Stateful** | Todo-lista med lägg till, redigera och ta bort |

## Sidor

- `/` — Startsida
- `/about` — Om sidan
- `/todos` — Todo-lista
- `/counter` — Räknare

## Krav

### Godkänt
- [x] Projektet innehåller minst 6 komponenter varav minst 2 är statefulla
- [x] React Router används för dynamisk URL-uppdatering
- [x] Git & GitHub har använts
- [x] README.md finns i projektmappen
- [ ] Uppgiften lämnas in i tid
- [ ] Muntlig presentation är genomförd

### Väl godkänt
- [ ] CSS i JS-lib används
- [ ] Data från ett web-API hämtas och visas