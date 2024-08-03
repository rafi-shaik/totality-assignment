// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Rent from './components/Rent';
import Buy from './components/Buy';
import Home from './components/Home';
import Cart from './components/Cart';
import FilteredProperties from './components/FilteredProperties';
import Register from'./components/Register';
import Login from './components/Login';
import Bookings from './components/Bookings';
import { CartProvider } from './Context/CartContext';
import { BookingProvider } from './Context/BookingContext';
import { AuthProvider } from './Context/AuthContext';


const App = () => {
  return (
   
        <Router>
           <AuthProvider>
    <BookingProvider>
      <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/filteredProperties" element={<FilteredProperties />} />
          </Routes>
          </CartProvider>
    </BookingProvider>
    </AuthProvider>
        </Router>
    
  );
};

export default App;
