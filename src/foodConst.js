const makeFood = () => {
  console.log('make ALIENS')
  const EMPTY = new Array(30)
  const FOOD = []
  for (let i = 0; i < EMPTY.length; i++) {
    FOOD.push({ foodId: `food_${i}` })
  }
  return FOOD
}

export default makeFood()
