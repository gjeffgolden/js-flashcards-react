import React, { useState } from 'react'
import './App.css';
import CardContainer from './containers/CardContainer'
import keyTerms from './assets/KeyTerms'

function App() {

  const [flipCard, setFlipCard] = useState(true)

  const handleFlip = () => {
    setFlipCard(!flipCard)
  }

  return (
    <div className="App">
      <CardContainer flipCard={flipCard} keyTerms={keyTerms} />
      <button className="flip-button" onMouseEnter={handleFlip} onMouseLeave={handleFlip}>Click to Flip</button>
    </div>
  );
}

export default App;
