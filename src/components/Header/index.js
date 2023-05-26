import './index.css'

const Header = () => (
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <div className="header">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <button type="button">Logout</button>
    </div>
  </div>
)
export default Header
