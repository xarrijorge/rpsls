import React, { Fragment, useState, useEffect } from 'react'
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
  const [score, setScore] = useState(
    parseInt(localStorage.getItem('score')) || 0
  )
  const [userChoice, setUserChoice] = useState('rock')
  const [compChoice, setCompChoice] = useState('spock')
  const [showRules, setShowRules] = useState('none')
  const [result, setResult] = useState('')
  const [showWinner, setShowWiner] = useState('none')

  const options = [
    [rock, 'rock'],
    [paper, 'paper'],
    [scissors, 'scissors'],
    [lizard, 'lizard'],
    [spock, 'spock']
  ]

  const winSeq = {
    rock: ['lizard', 'scissors'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['paper', 'spock'],
    spock: ['scissors', 'rock']
  }

  const clearStorage = () => {
    localStorage.clear()
    setScore(0)
  }
  const checkWin = (player, house) => {
    console.log(player, house)

    if (player === house) {
      console.log('TIED')
      setResult('TIED')
      return
    }
    if (winSeq[player].includes(house)) {
      console.log('WIN')
      setResult('WIN')
      setScore(score + 1)
      return
    }
    if (!winSeq[player].includes(house)) {
      console.log('LOSE')
      setResult('LOSE')
      return
    }
  }

  const stateUpdate = async (player, house) => {
    setUserChoice(player)
    setCompChoice(house)
    return 'done'
  }

  async function handleClick(index) {
    const randomVar = Math.floor(Math.random() * options.length)
    let player = options[index][1]
    let house = options[randomVar][1]
    await stateUpdate(player, house)
    checkWin(player, house)
    setShowWiner('flex')
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
      tipText={winSeq[option[1]]}
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

  useEffect(() => {
    localStorage.setItem('score', score)
  }, [score])

  return (
    <div className="app">
      <Header score={score} clearStorage={clearStorage} />
      <div>
        <Router>
          <Game path="/" />
          <Result
            path="result"
            player={userChoice}
            house={compChoice}
            result={result}
            showwinner={showWinner}
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
