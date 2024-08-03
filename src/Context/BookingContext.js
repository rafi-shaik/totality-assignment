import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const BookingContext = createContext();

// Hook to use the BookingContext
export const useBookings = () => useContext(BookingContext);

// BookingProvider component to wrap the application
export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    return JSON.parse(localStorage.getItem('bookings')) || [];
  });

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (property) => {
    setBookings((prevBookings) => [...prevBookings, property]);
  };

  const value = {
    bookings,
    addBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
