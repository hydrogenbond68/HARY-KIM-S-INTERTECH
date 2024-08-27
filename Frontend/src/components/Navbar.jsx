import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faBoxOpen, faClipboardList, faSignInAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/roboto';

const Navbar = ({ user, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleCheckoutClick = () => {
    navigate('/checkout');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    onLogout();
    setDropdownOpen(false);
    navigate('/login'); 
  };

  const handleManageProfile = () => {
    navigate('/manage-profile');
    setDropdownOpen(false);
  };

  return (
    <nav style={{
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      position: 'sticky',
      top: '0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      height: '100px', 
      zIndex: '1',
      backdropFilter: 'blur(10px)', 
      backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))' 
    }} className="p-4">
      <div className="text-black font-bold text-xl" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontSize: '1.5rem' }}>
        <FontAwesomeIcon icon={faBoxOpen} className="mr-2" />
        E-Com
      </div>
      <div className="flex items-center space-x-6">
        <button onClick={handleHomeClick} className="text-black hover:text-gray-300 flex items-center" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontWeight: 'bold', fontSize: '1.2rem' }}>
          <FontAwesomeIcon icon={faHome} className="mr-1" />
          Home
        </button>
        <button onClick={handleCartClick} className="text-black hover:text-gray-300 flex items-center" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontWeight: 'bold', fontSize: '1.2rem' }}>
          <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
          Cart
        </button>
        <button onClick={handleCheckoutClick} className="text-black hover:text-gray-300 flex items-center" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontWeight: 'bold', fontSize: '1.2rem' }}>
          <FontAwesomeIcon icon={faCreditCard} className="mr-1" />
          Checkout
        </button>
        <Link to="/products" className="text-black hover:text-gray-300 flex items-center" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontWeight: 'bold', fontSize: '1.2rem' }}>
          <FontAwesomeIcon icon={faBoxOpen} className="mr-1" />
          Products
        </Link>
        <Link to="/orders" className="text-black hover:text-gray-300 flex items-center" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontWeight: 'bold', fontSize: '1.2rem' }}>
          <FontAwesomeIcon icon={faClipboardList} className="mr-1" />
          Orders
        </Link>
        {user ? (
          <div className="relative">
            <button onClick={toggleDropdown} className="text-black hover:text-gray-300 flex items-center" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontWeight: 'bold', fontSize: '1.2rem' }}>
              {user.profilePhoto ? (
                <img
                  src={user.profilePhoto}
                  alt="Profile"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
                />
              ) : (
                <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
              )}
              {user.username}
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <button onClick={handleManageProfile} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontWeight: 'bold' }}>
                  Manage Profile
                </button>
                <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontWeight: 'bold' }}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="text-black hover:text-gray-300 flex items-center" style={{ fontFamily: "'Dancing Script', 'Playfair Display', 'cursive'", fontWeight: 'bold', fontSize: '1.2rem' }}>
            <FontAwesomeIcon icon={faSignInAlt} className="mr-1" />
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
