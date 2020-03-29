import React from 'react'

const OptionButton = ({ icon, styleClass, handleClick }) => (
  <div
    className={`optionButton ${styleClass}`}
    onClick={handleClick}
    name={styleClass}
  >
    <img src={icon} alt="" />
  </div>
)

export default OptionButton
