import React from 'react'

const OptionButton = ({ icon, styleClass, handleClick }) => (
  <div
    className={`optionButton ${styleClass}`}
    name={styleClass}
    onClick={handleClick}
  >
    <img src={icon} alt="" />
  </div>
)

export default OptionButton
