import './index.css'

const DishItem = props => {
  const {itemDetails} = props
  const {categoryDishes} = itemDetails
  const {
    dishAvailability,
    dishType,
    dishCalories,
    dishDescription,
    dishImage,
    dishName,
    dishPrice,
  } = categoryDishes[0]

  return (
    <li>
      <div>
        <h1>{dishPrice}</h1>
      </div>
    </li>
  )
}

export default DishItem
