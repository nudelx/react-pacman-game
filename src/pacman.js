import React from 'react'
import './pacman.css'
export default () => {
  return (
    <div className="pacman" style={{ top: 20, left: 20 }}>
      <div className="pacman-top">
        <div className="eye" />
      </div>
      <div className="pacman-bottom" />
    </div>
  )
}
