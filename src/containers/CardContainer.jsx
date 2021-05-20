import React from 'react'
import Card from '../components/Card'

const CardContainer = ({ flipCard, shownCards, currentCardIndex }) => {

    const displayCard = () => {
        let currentCard = shownCards[currentCardIndex]
        if (flipCard === true) {
            return <Card term={currentCard.term} />
        } else {
            return <Card term={currentCard.definition} />
        }
    }

    return(
        <div className="card-container">
            {displayCard()}
        </div>
    )

}

export default CardContainer;
