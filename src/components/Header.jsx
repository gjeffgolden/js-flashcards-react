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
            <nav className="nav-buttons" onClick={handleClick}>
                <button>All Cards (Shuffled)</button>
                <button>JavaScript Key Terms</button>
                <button>JavaScript Methods</button>
                <button>Semantic HTML</button>
            </nav>
        </header>
    )
}
