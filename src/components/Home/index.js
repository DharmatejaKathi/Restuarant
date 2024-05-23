import {Component} from 'react'

import './index.css'
import Tabs from '../Tabs'
import Header from '../Header'
import DishItem from '../DishItem'

class Home extends Component {
  state = {restaurantDetails: [], activeId: '', categoryList: []}

  componentDidMount() {
    this.getItems()
  }

  getItems = async () => {
    const url = 'https://run.mocky.io/v3/72562bef-1d10-4cf5-bd26-8b0c53460a8e'
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const listData = data[0].table_menu_list.map(each => ({
        menuCategory: each.menu_category,
        menuCategoryId: each.menu_category_id,
        menuCategoryImage: each.menu_category_image,
        categoryDishes: each.category_dishes.map(dish => ({
          dishAvailability: dish.dish_Availability,
          dishType: dish.dish_Type,
          dishCalories: dish.dish_calories,
          dishDescription: dish.dish_description,
          dishId: dish.dish_id,
          dishImage: dish.dish_image,
          dishName: dish.dish_name,
          dishPrice: dish.dish_price,
        })),
      }))
      this.setState({
        restaurantDetails: listData,
        activeId: listData[0].menuCategoryId,
      })
    }
  }

  set = menuCategoryId => {
    this.setState({activeId: menuCategoryId})
  }

  RenderTabList = () => {
    const {restaurantDetails} = this.state
    return (
      <ul className="tab-ul">
        {restaurantDetails.map(each => (
          <Tabs details={each} key={each.menuCategoryId} set={this.set} />
        ))}
      </ul>
    )
  }

  getList = () => {
    const {restaurantDetails, activeId} = this.state
    const filter = restaurantDetails.filter(
      each => each.menuCategoryId === activeId,
    )
    console.log(filter)

    return (
      <ul>
        {filter.map(each => (
          <DishItem itemDetails={each} key={each.menuCategoryId} />
        ))}
      </ul>
    )
  }

  render() {
    const {activeId, categoryList} = this.state
    console.log(activeId)

    return (
      <div className="main-Container">
        <Header />
        {this.RenderTabList()}
        {this.getList()}
      </div>
    )
  }
}

export default Home
