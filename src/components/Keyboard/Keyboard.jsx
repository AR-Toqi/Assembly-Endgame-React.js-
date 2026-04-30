import clsx from "clsx"
import "./Keyboard.css"

export default function Keyboard({ alphabet, guessedLetters, currentWord, isGameOver, onKeyClick }) {
    return (
        <section className="keyboard">
            {alphabet.split("").map((letter) => {
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
                        aria-disabled={isGuessed}
                        aria-label={`Letter ${letter}`}
                        onClick={() => onKeyClick(letter)}
                    >
                        {letter.toUpperCase()}
                    </button>
                )
            })}
        </section>
    )
}
