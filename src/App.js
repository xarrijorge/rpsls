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
  const [userChoice, setUserChoice] = useState([rock, 'rock'])
  const [compChoice, setCompChoice] = useState([])
  const [showRules, setShowRules] = useState('none')

  const options = [
    [rock, 'rock'],
    [paper, 'paper'],
    [scissors, 'scissors'],
    [lizard, 'lizard'],
    [spock, 'spock']
  ]

  const handleClick = index => {
    const randomVar = Math.floor(Math.random() * options.length)
    let userContent = options[index]
    let compContent = options[randomVar]
    // console.log(randomVar)
    setUserChoice(userContent)
    setCompChoice(compContent)
    navigate('/result')
  }

  const toggleRules = () => {
    showRules === 'none' ? setShowRules('flex') : setShowRules('none')
  }
  const closeRules = () => {
    setShowRules('none')
  }

  const data = options.map((option, index) => (
    <OptionButton
      icon={option[0]}
      styleClass={option[1]}
      handleClick={handleClick.bind(this, index)}
      onClick={handleClick}
      key={index}
    />
  ))
  const Game = () => (
    <div className="game" path="/">
      <Fragment>{data}</Fragment>
      <Rules showRules={showRules} closeRules={closeRules} />
    </div>
  )

  return (
    <div className="app">
      <Header score={score} />
      <div>
        <Router>
          <Game path="/" />
          <Result
            path="result"
            yourChoice={userChoice}
            compChoice={compChoice}
          />
        </Router>
        <button onClick={toggleRules} className="ruleButton">
          RULES
        </button>
      </div>
    </div>
  )
}

export default App
