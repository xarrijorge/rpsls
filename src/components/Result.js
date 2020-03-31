import React from 'react'

import OptionButton from '../components/optionButton'
import spock from '../images/icon-spock.svg'
import lizard from '../images/icon-lizard.svg'
import rock from '../images/icon-rock.svg'
import paper from '../images/icon-paper.svg'
import scissors from '../images/icon-scissors.svg'

const Result = ({ yourChoice, compChoice }) => (
  <div className="resultBox">
    <div>
      <h4>You Picked</h4>
      <OptionButton icon={yourChoice[0]} styleClass={yourChoice[1]} />
    </div>
    <div>
      <h4>The House Picked</h4>
      <OptionButton icon={compChoice[0]} styleClass={compChoice[1]} />
    </div>
  </div>
)

export default Result
