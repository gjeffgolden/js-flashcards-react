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
            case "Methods":
                methodCards()
                break;
            case "HTML Elements":
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
                <button onClick={handleClick}> All Cards (Shuffled)</button>
                <button onClick={handleClick}> JavaScript Key Terms</button>
                <button onClick={handleClick}>Methods</button>
                <button onClick={handleClick}>HTML Elements</button>
            </nav>
        </header>
    )
}
