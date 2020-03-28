import React from 'react'

const OptionButton = ({ icon, styleClass }) => (
  <div className={`optionButton ${styleClass}`}>
    <img src={icon} alt="" />
  </div>
)

export default OptionButton
