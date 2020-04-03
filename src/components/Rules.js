import React from 'react'

const Rules = ({ showRules, closeRules }) => (
  <div className="rules" style={{ display: showRules }}>
    <h4>Rules</h4>
    <p onClick={closeRules}>--</p>
    <a
      href="https://www.youtube.com/watch?v=_PUEoDYpUyQ"
      className="rulesLink"
      target="blank"
      rel="noopener noreferer"
    >
      Let Sheldon Explain it
    </a>
  </div>
)

export default Rules
