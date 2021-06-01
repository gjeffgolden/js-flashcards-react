import React, { useState } from 'react'
import './App.css';

//icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import FlipCameraAndroidIcon from '@material-ui/icons/FlipCameraAndroid'

//containers, components, utilities
import CardContainer from './containers/CardContainer'
import Header from  './components/Header'
import { shuffleArray } from './utils/utils'

//card object arrays
import keyTerms from './assets/KeyTerms'
import prototypeMethods from './assets/PrototypeMethods'
import htmlElements from './assets/HTMLElements'

function App() {

  const allCards = [...keyTerms, ...prototypeMethods, ...htmlElements]
  
  const [flipCard, setFlipCard] = useState(true)
  const [shownCards, setShownCards] = useState(allCards)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  
  const handleSelectCardType = (event) => {
    if (event.target.innerText === "All Cards (Shuffled)") {
      setCurrentCardIndex(0)
      setShownCards(shuffleArray(allCards))
    } else {
      let filtered = allCards.filter(card => card.cardType === event.target.innerText)
      setCurrentCardIndex(0)
      setShownCards(shuffleArray(filtered))
    }
  }

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
    <main className="App">
      <Header handleSelectCardType={handleSelectCardType} />
      <div className="main-container">
        <ArrowBackIosIcon className="arrow-button" fontSize="large" onClick={previousCard} />
        <CardContainer flipCard={flipCard} shownCards={shownCards} currentCardIndex={currentCardIndex} />
        <ArrowForwardIosIcon className="arrow-button" fontSize="large" onClick={nextCard} />
      </div>
      <figure className="flip-button" onMouseEnter={handleFlip} onMouseLeave={handleFlip}>
        <FlipCameraAndroidIcon fontSize="large" />
        <figcaption>FLIP</figcaption>
      </figure>
    </main>
  );
}

export default App;
