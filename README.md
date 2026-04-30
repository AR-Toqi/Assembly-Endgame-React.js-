# Assembly: Endgame 🚀

**Assembly: Endgame** is a modern, interactive word-guessing game built with React. The goal is to guess the hidden word within 8 attempts. Every wrong guess costs a programming language its "life." Save the programming world from the clutches of Assembly!

## 🔗 Live Demo
Check out the live game here: [Assembly: Endgame - Live](https://assembly-endgame-by-ar-toqi.netlify.app/)

## ✨ Features
- **Interactive Gameplay**: Use the on-screen keyboard to guess letters.
- **Visual Feedback**:
  - Programming language "chips" represent your lives.
  - Languages turn into "ghosts" (💀) when you make wrong guesses.
  - Unique farewell messages for each lost language.
- **Win/Loss States**:
  - **Victory**: Celebratory confetti and a "You Win!" message.
  - **Defeat**: A "Game Over" message encouraging you to learn Assembly!
- **Modern Architecture**: Clean, component-based structure for better maintainability.
- **Accessibility**: Semantic HTML and ARIA roles for screen reader support.
- **Responsive Design**: Works smoothly across different screen sizes.

## 🛠️ Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS with a modular component-based approach.
- **Libraries**:
  - `clsx`: For dynamic class name management.
  - `react-confetti`: For the victory celebration.

## 📂 Project Structure
The project follows a clean and organized folder structure:
```text
src/
├── components/         # Modular UI components (Header, Status, Keyboard, etc.)
├── data/               # Static datasets (Languages, Word list)
├── utils/              # Helper functions (Random word generator, Farewell text)
├── App.jsx             # Main logic and state management
├── App.css             # Global layout styles
└── index.css           # CSS resets and variables
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/assembly-endgame.git
   ```
2. Navigate to the project directory:
   ```bash
   cd assembly-endgame
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).

---
Developed with ❤️ by **AR Toqi**
