import React from 'react'
import Tooltip from '../components/ToolTip'

const winSeq = {
  rock: ['lizard', 'scissors'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['scissors', 'rock']
}

const OptionButton = ({ icon, styleClass, handleClick, tipText }) => (
  <div className={`optionButton ${styleClass} tooltip`} onClick={handleClick}>
    <img src={icon} alt="" />
    <Tooltip text={`beats ${tipText[0]} and ${tipText[1]}`} bgColor="#1f2229" />
  </div>
)

export default OptionButton
