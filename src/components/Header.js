import React from 'react'

const Header = ({ score }) => (
  <div className="header">
    <section className="title">
      <p>Rock</p>
      <p>Paper</p>
      <p>Scissors</p>
      <p>Lizard</p>
      <p>Spock</p>
    </section>

    <section className="scoreboard">
      <p className="scoreTitle"> Score</p>
      <p className="scoreCount">{score}</p>
    </section>
  </div>
)

export default Header
