import './index.css'

const Tabs = props => {
  const {details, set} = props
  const {menuCategory, menuCategoryId} = details
  const getId = () => {
    set(menuCategoryId)
  }

  return (
    <li className="listItem">
      <button type="button" onClick={getId}>
        {menuCategory}
      </button>
    </li>
  )
}

export default Tabs
