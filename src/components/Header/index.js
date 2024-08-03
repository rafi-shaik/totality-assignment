import { useContext } from 'react';
import { IoIosHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import  AuthContext  from '../../Context/AuthContext'; // Ensure correct import path
import './index.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <IoIosHome className="website-logo"/>
          <h1 className="main-heading">EASY BUY</h1>
          <div className="nav-menu-mobile">
            <ul className="nav-menu-list-mobile">
              <li className="nav-menu-item-mobile">
                <Link to="/rent" className="nav-link-mobile">Rent</Link>
              </li>
              <li className="nav-menu-item-mobile">
                <Link to="/buy" className="nav-link-mobile">Buy</Link>
              </li>
              <li className="nav-menu-item-mobile">
                {user && <span>{user.username}</span>}
              </li>
              <li className="nav-menu-item-mobile">
                <button type="button" className="logout-desktop-btn" onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/" className="logo-cont">
            <IoIosHome className="website-logo"/>
            <h1 className="main-heading">EASY BUY</h1>
          </Link>
          <div className='cont'>
            <ul className="nav-menu">
              {user && (
                <li className="nav-menu-item">
                  <span>{user.username}</span>
                </li>
              )}
              <li className="nav-menu-item">
                <Link to="/bookings" className='cart-cont'>Bookings</Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/cart" className="cart-cont">
                  <FaShoppingCart className='cart-img'/>
                  <p className='cart'>Cart</p>
                </Link>
              </li>
            </ul>
            <button type="button" className="logout-desktop-btn" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
