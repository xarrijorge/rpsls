import React from 'react'

const OptionButton = ({ icon, styleClass, handleClick }) => (
  <div className={`optionButton ${styleClass}`} onClick={handleClick}>
    <img src={icon} alt="" />
  </div>
)

export default OptionButton
