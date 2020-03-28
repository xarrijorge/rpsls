import React, { Fragment, useState } from 'react'
import './App.css'

import Header from './components/Header'
import OptionButton from './components/optionButton'
import spock from './images/icon-spock.svg'
import lizard from './images/icon-lizard.svg'
import rock from './images/icon-rock.svg'
import paper from './images/icon-paper.svg'
import scissors from './images/icon-scissors.svg'

function App() {
  const [score, setScore] = useState(0)
  return (
    <div className="app">
      <Header score={score} />
      <div className="game">
        <OptionButton icon={spock} styleClass="spock" />
        <OptionButton icon={lizard} styleClass="lizard" />
        <OptionButton icon={rock} styleClass="rock" />
        <OptionButton icon={paper} styleClass="paper" />
        <OptionButton icon={scissors} styleClass="scissors" />
      </div>
    </div>
  )
}

export default App
