import './index.css'

const Header = () => (
  <nav className="navBar">
    <h1>UNI Resto Cafe</h1>
    <div className="cartContainer">
      <h1 className="my">My Orders</h1>
      <div className="cart">
        <p className="num">1</p>
      </div>
    </div>
  </nav>
)

export default Header
