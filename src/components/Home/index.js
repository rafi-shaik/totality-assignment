// Home.jsx
import React, { useState } from 'react';
import Buy from '../Buy'; // Assuming you have a Buy component
import Rent from '../Rent'; // Assuming you have a Rent component
import './index.css'

const Home = () => {
  const [showBuy, setShowBuy] = useState(false);
  const [showRent, setShowRent] = useState(false);

  const handleBuyClick = () => {
    setShowBuy(true);
    setShowRent(false);
  };

  const handleRentClick = () => {
    setShowRent(true);
    setShowBuy(false);
  };

  return (
    <div className='home'>
      <div className='buttons'>
        <h1 className='easy'>EASY BUY</h1>
        <p className='para'>Make your search easy</p>
        <div className='button-cont'><button className='buy-button' onClick={handleBuyClick}>Buy</button>
        <button className='rent-button'  onClick={handleRentClick}>Rent</button>
        </div>
        
      </div>
      <div className='content'>
        {showBuy && <Buy />}
        {showRent && <Rent />}
      </div>
    </div>
  );
};

export default Home;
