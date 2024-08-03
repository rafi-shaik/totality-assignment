// src/components/Cart/index.js

import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import { useCart } from '../../Context/CartContext';
import './index.css'

const Cart = () => {
  const { cart, setCart } = useCart();

  const handleIncrease = (property) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === property.id ? { ...item, count: item.count + 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleDecrease = (property) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === property.id && item.count > 1 ? { ...item, count: item.count - 1 } : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleRemove = (property) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== property.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className="cart">
      <h1 className='name'>Cart</h1>
      {cart.length > 0 ? (
        cart.map((property) => (
          <div  className='cart-card' key={property.id}>
            <img className='cart-image' src={property.image} alt={property.title} />
            <div className='cart-des'>
             <h2 className='cart-title-head'>{property.title}</h2>
            <p className='cart-title'>{property.bedrooms}</p>
            <p className='cart-title'>Price: {property.price}</p>
            </div>
            
            
            <div className="cart-quantity-container">
            <button onClick={() => handleDecrease(property)}>
            <BsDashSquare color="#52606D" size={12} />
            </button>
            <p>Count: {property.count}</p>
            
            <button onClick={() => handleIncrease(property)}>
            <BsPlusSquare color="#52606D" size={12} />
            </button>
           
            </div>
            <button onClick={() => handleRemove(property)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No items in cart.</p>
      )}
      <div className='checkout'>
      <h2 className='cost'>Total Cost: {totalCost}</h2>
      <button >Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
