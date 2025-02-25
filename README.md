# Memory Match Game

A simple **Memory Match Game** built with **React**. Players flip cards to find matching pairs. When all pairs are found, a victory message appears.

## Features

- **Randomized Cards** - The game shuffles cards each time you play.
- **Flip Animation** - Clicking a card reveals the image underneath.
- **Match Logic** - Two selected cards are checked for a match.
- **Click Disabling** - Prevents selecting more than two cards at once.
- **Victory Popup** - A modal appears when all pairs are matched.
- **Reset Functionality** - Reshuffles the cards to restart the game.

## Tech Stack

- **React** - UI development.
- **CSS Modules** - For component styling.
- **React Portals** - For handling the victory modal.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ruzdaansari/Memory_Match_Game.git
   ```
2. Navigate to the project directory:
   ```sh
   cd memory-match-game
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure

- **`Buttons.jsx`** - Handles game logic, button interactions, and game state.
- **`ResultModal.jsx`** - Displays the victory message when the game is completed.
- **`ResultModal.module.css`** - Styles for the modal and button elements.

## How to Play

1. Click on a card to reveal the image.
2. Click on another card to try and find a matching pair.
3. If the cards match, they stay visible; otherwise, they flip back after a short delay.
4. Continue until all pairs are matched.
5. A victory modal appears when the game is completed.
6. Click **Reset** to start a new game.

## License

This project is open-source under the [MIT License](LICENSE).

---

Enjoy playing! 🎉

