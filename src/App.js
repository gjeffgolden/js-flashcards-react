import React, { useState, useEffect } from 'react'
import './App.css';

//icons
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

//containers and components
import CardContainer from './containers/CardContainer'
import Header from  './components/Header'

//card object arrays
import keyTerms from './assets/KeyTerms'
import prototypeMethods from './assets/PrototypeMethods'
import htmlElements from './assets/HTMLElements'

function App() {

  const [flipCard, setFlipCard] = useState(true)
  const [allCards, setAllCards] = useState([...keyTerms, ...prototypeMethods, ...htmlElements])
  const [shownCards, setShownCards] = useState([])
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const shuffledCards = () => {
    setShownCards(allCards)
  }

  const methodCards = () => {
    let filtered = allCards.filter(card => card.cardType === "Method")
    setShownCards(filtered)
  }

  const termCards = () => {
    let filtered = allCards.filter(card => card.cardType === "Key Term")
    setShownCards(filtered)
  }

  const htmlCards = () => {
    let filtered = allCards.filter(card => card.cardType === "HTML")
    setShownCards(filtered)
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
    <div className="App">
      <Header allCards={shuffledCards} methodCards={methodCards} htmlCards={htmlCards} termCards={termCards} />
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
