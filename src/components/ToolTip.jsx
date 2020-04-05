import React from 'react'

const tipStyle = {}
const Tooltip = ({ text, position = '', bgColor = 'black' }) => (
  <div class={`tooltip ${position}`}>
    <span class="tooltiptext" style={{ backgroundColor: bgColor }}>
      {text}
    </span>
  </div>
)

export default Tooltip
