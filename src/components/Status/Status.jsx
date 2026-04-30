import clsx from "clsx"
import "./Status.css"

export default function Status({ isGameWon, isGameLost, isGameOver, isLastGuessWrong, farewellText }) {
    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessWrong
    })

    return (
        <section 
            aria-live="polite" 
            role="status" 
            className={gameStatusClass}
        >
            {!isGameOver && isLastGuessWrong ? (
                <p className="farewell-message">
                    {farewellText}
                </p>
            ) : isGameOver ? (
                isGameWon ? (
                    <>
                        <h2>You win!</h2>
                        <p>Well done! 🎉</p>
                    </>
                ) : (
                    <>
                        <h2>Game over!</h2>
                        <p>You lose! Better start learning Assembly 😭</p>
                    </>
                )
            ) : null}
        </section>
    )
}
