import React from 'react'
import './pacman.css'
import FOOD from './foodConst'

export default () => {
  const [totalFood, setTotalFood] = React.useState(40)
  const [food, setFood] = React.useState([])

  React.useEffect(() => {
    console.log('food set')
    setFood(FOOD)
  }, [])

  return (
    <div className="food-stage">
      {food.map((food, i) => (
        <div className="food" style={{ top: 30, left: 30 * (i || 1) }} />
      ))}
    </div>
  )
}
