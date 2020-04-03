import React from 'react'

import spock from '../images/icon-spock.svg'
import lizard from '../images/icon-lizard.svg'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'

const icons = [
  'rock',
  rock,
  'paper',
  paper,
  'scissors',
  scissors,
  'lizard',
  lizard,
  'spock',
  spock
]

function ResultButton({ styleClass }) {
  let icon = icons[icons.indexOf(styleClass) + 1]
  return (
    <div className={`resultButton ${styleClass}`}>
      <img src={icon} alt={`icon of ${styleClass}`} />
    </div>
  )
}

const Result = ({ yourChoice, compChoice, result, showwinner }) => (
  <div className="resultBox">
    <div>
      <h4>You Picked</h4>
      <ResultButton icon={yourChoice} styleClass={yourChoice} />
    </div>
    <div className="winnerBox" style={{ display: showwinner }}>
      You {result}!
      <button>
        <a href="/">Try Again</a>
      </button>
    </div>
    <div>
      <h4>The House Picked</h4>
      <ResultButton styleClass={compChoice} />
    </div>
  </div>
)

export default Result
