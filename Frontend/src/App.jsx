import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Products from './components/Products';
import Orders from './components/Orders';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import RelatedProducts from './components/RelatedProducts';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Profile from './components/Profile';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser);
      }
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('user'); // Clear the corrupted data
    }
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const removeLastFromCart = () => {
    setCart((prevCart) => prevCart.slice(0, -1));
  };

  const handleLogin = (email) => {
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const handleRegister = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUser(user);
  };

  const handleUpdateProfile = (updatedUser) => {
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products setSelectedProduct={setSelectedProduct} />} />
        <Route 
          path="/products/:productId" 
          element={
            <ProductDetail
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              setSelectedProduct={setSelectedProduct}
              product={selectedProduct}
            />
          } 
        />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/orders" element={<Orders cart={cart} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route 
          path="/cart" 
          element={
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                {selectedProduct && (
                  <ProductDetail
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    setSelectedProduct={setSelectedProduct}
                    product={selectedProduct}
                  />
                )}
                <RelatedProducts />
              </div>
              <div className="lg:w-1/3">
                <ShoppingCart 
                  cart={cart} 
                  removeFromCart={removeFromCart} 
                  removeLastFromCart={removeLastFromCart}
                />
              </div>
            </div>
          } 
        />
        <Route path="/related-products" element={<RelatedProducts />} />
        <Route path="/manage-profile" element={<Profile onUpdateProfile={handleUpdateProfile} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
