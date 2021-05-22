import React, { useState } from 'react'
import './App.css';

//icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

//containers
import CardContainer from './containers/CardContainer'

//card object arrays
import keyTerms from './assets/KeyTerms'
import prototypeMethods from './assets/PrototypeMethods'
import htmlElements from './assets/HTMLElements'

function App() {

  const [flipCard, setFlipCard] = useState(true)
  const [shownCards, setShownCards] = useState([...keyTerms, ...prototypeMethods, ...htmlElements])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const nextCard = () => {
    let nextIndex = currentCardIndex + 1 === shownCards.length ? 0 : currentCardIndex + 1
    setCurrentCardIndex(nextIndex)
  }

  const previousCard = () => {
    let previousIndex = currentCardIndex - 1 === -1 ? shownCards.length - 1 : currentCardIndex - 1
    setCurrentCardIndex(previousIndex)
  }

  const handleFlip = () => {
    setFlipCard(!flipCard)
  }

  return (
    <div className="App">
      <div className="main-container">
        <ArrowBackIosIcon className="arrow-button" fontSize="large" onClick={previousCard} />
        <CardContainer flipCard={flipCard} shownCards={shownCards} currentCardIndex={currentCardIndex} />
        <ArrowForwardIosIcon className="arrow-button" fontSize="large" onClick={nextCard}/>
      </div>
      <button className="flip-button" onMouseEnter={handleFlip} onMouseLeave={handleFlip}>HOVER TO FLIP</button>
    </div>
  );
}

export default App;
