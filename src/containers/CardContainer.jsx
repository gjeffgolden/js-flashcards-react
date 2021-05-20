import React, { useState } from 'react'
import Card from '../components/Card'
import CardBack from '../components/CardBack'

const CardContainer = ({ flipCard, shownCards, currentCardIndex }) => {

    const displayCard = () => {
        let currentCard = shownCards[currentCardIndex]
        return(
            <Card term={currentCard.term} />
        )
    }

    return(
        <div className="card-container">
            {displayCard()}
        </div>
    )

}

export default CardContainer;
