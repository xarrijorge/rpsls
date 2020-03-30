import React, { Fragment, useState } from 'react'
import { Router, navigate } from '@reach/router'
import './App.css'

import Header from './components/Header'
import Result from './components/Result'
import Rules from './components/Rules'

import OptionButton from './components/optionButton'
import spock from './images/icon-spock.svg'
import lizard from './images/icon-lizard.svg'
import rock from './images/icon-rock.svg'
import paper from './images/icon-paper.svg'
import scissors from './images/icon-scissors.svg'

function App() {
  const [score, setScore] = useState(0)
  const [userChoice, setUserChoice] = useState('')
  const [showRules, setShowRules] = useState('none')

  const handleClick = event => {
    setScore(score + 1)
    navigate('/result')
  }

  const toggleRules = () => {
    showRules === 'none' ? setShowRules('block') : setShowRules('none')
  }

  const Game = () => (
    <div className="game" path="/">
      <OptionButton icon={spock} styleClass="spock" handleClick={handleClick} />
      <OptionButton
        icon={lizard}
        styleClass="lizard"
        handleClick={handleClick}
      />
      <OptionButton icon={rock} styleClass="rock" handleClick={handleClick} />
      <OptionButton icon={paper} styleClass="paper" handleClick={handleClick} />
      <OptionButton
        icon={scissors}
        styleClass="scissors"
        handleClick={handleClick}
      />
    </div>
  )

  return (
    <div className="app">
      <Header score={score} />
      <div>
        <Router>
          <Game path="/" />
          <Result path="result" />
        </Router>
        <button onClick={toggleRules} className="ruleButton">
          RULES
        </button>
        <Rules showRules={showRules} />
      </div>
    </div>
  )
}

export default App
