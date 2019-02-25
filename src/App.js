import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import PacMan from './pacman'
import Board from './board'
import FoodStage from './foodStage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board>
          <PacMan />
          <FoodStage />
        </Board>
      </div>
    )
  }
}

export default App
