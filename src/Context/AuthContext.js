import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Validate token format
        if (typeof token === 'string' && token.split('.').length === 3) {
          const decodedUser = jwtDecode(token);
          setUser(decodedUser);
        } else {
          throw new Error('Invalid token format');
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const login = async (username, password) => {
    // Simulate login and token retrieval
    const token = 'your-jwt-token'; // Replace with actual token from your server
    if (token) {
      try {
        // Validate token format
        if (typeof token === 'string' && token.split('.').length === 3) {
          localStorage.setItem('token', token);
          const decodedUser = jwtDecode(token);
          setUser(decodedUser);
          navigate('/');
        } else {
          throw new Error('Invalid token format');
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem('token');
      }
    }
  };

  const register = async (username, password) => {
    // Simulate registration and token retrieval
    const token = 'your-jwt-token'; // Replace with actual token from your server
    if (token) {
      try {
        // Validate token format
        if (typeof token === 'string' && token.split('.').length === 3) {
          localStorage.setItem('token', token);
          const decodedUser = jwtDecode(token);
          setUser(decodedUser);
          navigate('/');
        } else {
          throw new Error('Invalid token format');
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        localStorage.removeItem('token');
      }
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
