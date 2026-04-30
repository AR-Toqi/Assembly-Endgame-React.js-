import clsx from "clsx"
import "./WordDisplay.css"

export default function WordDisplay({ currentWord, guessedLetters, isGameLost }) {
    return (
        <section className="word">
            {currentWord.split("").map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter);
                const shouldRevealLetter = isGameLost || isGuessed;
                const letterClassName = clsx(
                    isGameLost && !isGuessed && "missed-letter"
                )
                return (
                    <span key={index} className={letterClassName}>
                        {shouldRevealLetter ? letter.toUpperCase() : ""}
                    </span>
                )
            })}
        </section>
    )
}
