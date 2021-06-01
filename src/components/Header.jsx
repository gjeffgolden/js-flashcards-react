import React from 'react'

export default function Header({ handleSelectCardType }) {

    return (
        <header>
            <nav className="nav-buttons">
                <button onClick={handleSelectCardType}>All Cards (Shuffled)</button>
                <button onClick={handleSelectCardType}>JavaScript Key Terms</button>
                <button onClick={handleSelectCardType}>JavaScript Methods</button>
                <button onClick={handleSelectCardType}>Semantic HTML</button>
            </nav>
        </header>
    )
}
