import clsx from "clsx"
import "./LanguageChips.css"

export default function LanguageChips({ languages, wrongGuessCount }) {
    return (
        <section className="language-chips">
            {languages.map((language, index) => {
                const isLost = index < wrongGuessCount;
                const styles = {
                    backgroundColor: language.backgroundColor,
                    color: language.color
                }
                const className = clsx("chip", isLost && "lost");

                return (
                    <span 
                        className={className}
                        key={language.name}
                        style={styles}
                    >
                        {language.name}
                    </span>
                )
            })}
        </section>
    )
}
