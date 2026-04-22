# MathCard Game

A fun math game where you fight monsters by solving math problems!

<img width="1479" height="863" alt="image" src="https://github.com/user-attachments/assets/32ae4cbd-9990-49a8-8651-a9cb2e73907f" />

## What is this?

This is a web game made with React. You pick math cards to answer questions and defeat cute monsters.

## How to play

1. Click **Start Game** on the home page
2. Pick a level (1 is easy, 4 is hard)
3. Look at the math question on the screen
4. Click the card with the right answer
5. Answer correctly to hit the monster!
6. Answer wrong or run out of time, and the monster hits you
7. Beat all monsters to win!

## Game Features

- **20 math questions** across 4 difficulty levels
- **5 cute monsters** to battle
- **Timer** - answer before time runs out!
- **Sound effects** and background music
- **Health bar** - don't let it reach zero!
- **Different backgrounds** for each stage

## Math Topics

| Level | Topics |
|-------|--------|
| 1 | Basic addition and subtraction |
| 2 | Fractions and decimals |
| 3 | Algebra (finding x) |
| 4 | Logic puzzles and tricky math |

## How to run the game

```bash
# Install packages
npm install

# Start the game
npm start
```

Then open your browser and go to `http://localhost:3000`

## Technologies used

- React
- React Router
- Tailwind CSS
- Howler (for sounds)
- SweetAlert2 (for popups)

## Project files

- `src/Components/` - Game parts (homepage, battle screen, cards, etc.)
- `src/Images/` - Monster pictures and backgrounds
- `src/Soundeffects/` - Game sounds and music
- `src/Questions.json` - All the math questions
