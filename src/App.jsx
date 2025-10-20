import { useState} from 'react'
import { languages } from './languages'
import clsx from 'clsx';
import { getFarewellText, getRandomWord } from './utils';  
import Confetti from 'react-confetti'


export default function AssemblyEndgame() {
  // State variables
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Derived state Variables
  const wrongGuessCount = guessedLetters.filter(letter => 
    !currentWord.includes(letter)).length;
  const isGameLost = wrongGuessCount >= languages.length-1;
  const isGameWon = currentWord.split("").every(letter => 
    guessedLetters.includes(letter));
  const isGameOver = isGameLost || isGameWon;
  const lastGuessLetter =  guessedLetters[guessedLetters.length - 1];
  const isLastGuessWrong = 
    lastGuessLetter && !currentWord.includes(lastGuessLetter);

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
      [...prevLetters, letter])
  }

    const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      'correct': isCorrect,
      'wrong': isWrong
    })

     return (
       <button 
          className={className}
          key={letter}
          disabled={isGameOver}
          aria-disabled={guessedLetters.includes(letter)}
          aria-label={`Letter ${letter}`}
          onClick={() => addGuessedLetter(letter)}>
            {letter.toUpperCase()}
        </button>
     ) 
  }
    )

  const languageElements = languages.map((language, index) => {
    const lostLanguages = index < wrongGuessCount;
    const styles = {
        backgroundColor: language.backgroundColor,
        color: language.color

    }

    const className = clsx("chip", lostLanguages ? "lost" : "");

     return (
          <span 
          className={className}
          key={language.name}
          style={styles}>
            {language.name}
          </span>
        )
})

     const letterElements = currentWord.split("").map((letter, index) => {
        const shouldRevealLetter = isGameLost || guessedLetters.includes(letter)
        const letterClassName = clsx(
            isGameLost && !guessedLetters.includes(letter) && "missed-letter"
        )
        return (
            <span key={index} className={letterClassName}>
                {shouldRevealLetter ? letter.toUpperCase() : ""}
            </span>
        )
    })

     const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessWrong
    })

    function renderGameStatus() {
      if (!isGameOver && isLastGuessWrong) {
            return(
              <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
              </p>
            )
        }
        if (!isGameOver) {
            return null
        }

        if (isGameWon) {
            return (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        } 
        if (isGameLost) {
            return (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )
        }
    };
       
  return (
    <main>
      {
                isGameWon && 
                    <Confetti
                        recycle={false}
                        numberOfPieces={1000}
                    />
            }
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word within 8 attempts to keep the 
               programming world safe from Assembly!</p>
        </header>
         <section 
         aria-live="polite" 
         role="status" 
          className={gameStatusClass}>
                {renderGameStatus()}
          </section>
          <section className="language-chips">
                {languageElements}
          </section>
          <section className="word">
                {letterElements}
          </section>
           <section 
                className="sr-only" 
                aria-live="polite" 
                role="status"
            >
                <p>Current word: {currentWord.split("").map(letter => 
                guessedLetters.includes(letter) ? letter + "." : "blank.")
                .join(" ")}</p>
            
            </section>
    
          <section className="keyboard">
                {keyboardElements}
          </section>
          {isGameOver && <button onClick={resetGame} className="new-game">New Game</button>}
     </main>
  )
} 
