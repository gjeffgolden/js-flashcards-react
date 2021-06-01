import React from 'react'
import Card from '../components/Card'

const CardContainer = ({ flipCard, shownCards, currentCardIndex }) => {

    //try a switch statement when refactoring
    const assignClass = () => {
        if (shownCards[currentCardIndex] !== undefined) {
            if (shownCards[currentCardIndex].cardType === "JavaScript Key Terms") {
                return "term-card-container"
            } else if (shownCards[currentCardIndex].cardType === "JavaScript Methods") {
                return "method-card-container"
            } else if (shownCards[currentCardIndex].cardType === "Semantic HTML") {
                return "html-card-container"
            }
        }
    }

    const displayCard = () => {
        if (shownCards[currentCardIndex]) {
            if (flipCard === true) {
                let currentCard = shownCards[currentCardIndex]
                return <Card cardType={currentCard.cardType} content={currentCard.term} />
            } else {
                let currentCard = shownCards[currentCardIndex]
                return <Card cardType={currentCard.cardType} content={currentCard.definition} example={currentCard.example} />
            }
        }
    }

    return(
        <section className={assignClass()}>
            {displayCard()}
        </section>
    )

}

export default CardContainer;
