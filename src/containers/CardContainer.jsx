import React from 'react'
import Card from '../components/Card'

const CardContainer = ({ flipCard, keyTerms }) => {

    return(
        <div className="card-container">
            {flipCard ? <Card content={keyTerms[0].term} /> : <Card content={keyTerms[0].definition} />}
        </div>
    )

}

export default CardContainer;