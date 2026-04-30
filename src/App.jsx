import { useState } from 'react'
import Confetti from 'react-confetti'
import { languages } from './data/languages'
import { getFarewellText, getRandomWord } from './utils/gameUtils'

// Components
import Header from './components/Header/Header'
import Status from './components/Status/Status'
import LanguageChips from './components/LanguageChips/LanguageChips'
import WordDisplay from './components/WordDisplay/WordDisplay'
import Keyboard from './components/Keyboard/Keyboard'

// Styles
import './App.css'

export default function AssemblyEndgame() {
    // State variables
    const [currentWord, setCurrentWord] = useState(() => getRandomWord());
    const [guessedLetters, setGuessedLetters] = useState([]);

    // Derived state Variables
    const wrongGuessCount = guessedLetters.filter(letter => 
        !currentWord.includes(letter)).length;
    
    const isGameLost = wrongGuessCount >= languages.length - 1;
    const isGameWon = currentWord.split("").every(letter => 
        guessedLetters.includes(letter));
    const isGameOver = isGameLost || isGameWon;
    
    const lastGuessLetter = guessedLetters[guessedLetters.length - 1];
    const isLastGuessWrong = lastGuessLetter && !currentWord.includes(lastGuessLetter);

    // Static variables
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    function resetGame() {
        setCurrentWord(getRandomWord());  
        setGuessedLetters([]);
    }

    function addGuessedLetter(letter) {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? 
            prevLetters : 
            [...prevLetters, letter]
        )
    }

    const farewellText = isLastGuessWrong ? getFarewellText(languages[wrongGuessCount - 1].name) : ""

    return (
        <main>
            {isGameWon && (
                <Confetti
                    recycle={false}
                    numberOfPieces={1000}
                />
            )}
            
            <Header />

            <Status 
                isGameWon={isGameWon}
                isGameLost={isGameLost}
                isGameOver={isGameOver}
                isLastGuessWrong={isLastGuessWrong}
                farewellText={farewellText}
            />

            <LanguageChips 
                languages={languages}
                wrongGuessCount={wrongGuessCount}
            />

            <WordDisplay 
                currentWord={currentWord}
                guessedLetters={guessedLetters}
                isGameLost={isGameLost}
            />

            <section 
                className="sr-only" 
                aria-live="polite" 
                role="status"
            >
                <p>Current word: {currentWord.split("").map(letter => 
                    guessedLetters.includes(letter) ? letter + "." : "blank.")
                    .join(" ")}
                </p>
            </section>

            <Keyboard 
                alphabet={alphabet}
                guessedLetters={guessedLetters}
                currentWord={currentWord}
                isGameOver={isGameOver}
                onKeyClick={addGuessedLetter}
            />

            {isGameOver && (
                <button onClick={resetGame} className="new-game">
                    New Game
                </button>
            )}
        </main>
    )
}
