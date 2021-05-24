import React from 'react'
import Card from '../components/Card'

const CardContainer = ({ flipCard, shownCards, currentCardIndex }) => {

    //try a switch statement when refactoring
    const assignClass = () => {
        if (shownCards[currentCardIndex] !== undefined) {
            if (shownCards[currentCardIndex].cardType === "Key Term") {
                return "term-card-container"
            } else if (shownCards[currentCardIndex].cardType === "Method") {
                return "method-card-container"
            } else if (shownCards[currentCardIndex].cardType === "HTML") {
                return "html-card-container"
            }
        }
    }

    const displayCard = () => {
        console.log(shownCards[currentCardIndex])
        console.log(currentCardIndex)
        console.log(shownCards)
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
        <div className={assignClass()}>
            {displayCard()}
        </div>
    )

}

export default CardContainer;
