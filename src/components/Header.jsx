import React from 'react'

export default function Header({ allCards, htmlCards, methodCards, termCards }) {

    const handleClick = (event) => {
        switch (event.target.innerText) {
            case "All Cards (Shuffled)":
                allCards()
                break;
            case "JavaScript Key Terms":
                termCards()
                break;
            case "JavaScript Methods":
                methodCards()
                break;
            case "Semantic HTML":
                htmlCards()
                break;
            default:
                allCards()
                break;
        }
    }

    return (
        <header>
            <nav>
                <button onClick={handleClick}>All Cards (Shuffled)</button>
                <button onClick={handleClick}>JavaScript Key Terms</button>
                <button onClick={handleClick}>JavaScript Methods</button>
                <button onClick={handleClick}>Semantic HTML</button>
            </nav>
        </header>
    )
}
