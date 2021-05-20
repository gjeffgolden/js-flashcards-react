import React from 'react'
import Card from '../components/Card'

const CardContainer = ({ flipCard, shownCards, currentCardIndex }) => {

    const assignClass = () => {
        if (shownCards[currentCardIndex].cardType === "Key Term") {
            return "term-card-container"
        } else if (shownCards[currentCardIndex].cardType === "Method") {
            return "method-card-container"
        }
    }

    const displayCard = () => {
        let currentCard = shownCards[currentCardIndex]
        if (flipCard === true) {
            return <Card cardType={currentCard.cardType} content={currentCard.term} />
        } else {
            return <Card cardType={currentCard.cardType} content={currentCard.definition} example={currentCard.example} />
        }
    }

    console.log(shownCards[currentCardIndex].cardType)

    return(
        <div className={assignClass()}>
            {displayCard()}
        </div>
    )

}

export default CardContainer;
