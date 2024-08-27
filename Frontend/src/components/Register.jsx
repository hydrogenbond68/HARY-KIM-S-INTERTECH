import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = ({ onRegister }) => {
  const [animconStyle, setAnimconStyle] = useState({
    backgroundImage: 'url(https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/monkey.gif)',
  });
  const [handsStyle, setHandsStyle] = useState({ marginTop: '110%' });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const location = event.target.location.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/auth/register', { 
      
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password, phone, location }),
      });

      const data = await response.json();

      if (response.ok) {
        const user = { username, email, phone, location };
        localStorage.setItem('user', JSON.stringify(user)); 
        onRegister(user);
        navigate('/profile'); 
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during registration');
    }
  };

  // Styles
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'url(https://images.unsplash.com/photo-1549816115-fe3dbef80a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
  };

  const monkeyLoginStyle = {
    width: '559px',
    height: '650px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    borderRadius: '40px',
  };

  const animconStyleCombined = {
    backgroundColor: 'rgb(32, 32, 32)',
    overflow: 'hidden',
    marginTop: '20px',
    height: '170px',
    width: '170px',
    borderRadius: '50%',
    backgroundSize: '90% 85%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    ...animconStyle,
  };

  const imgStyle = {
    marginTop: '110%',
    height: '170px',
    width: '170px',
    transition: '1s',
    ...handsStyle,
  };

  const formConStyle = {
    marginTop: '38px',
  };

  const inputStyle = {
    height: '40px',
    width: '300px',
    borderRadius: '20px',
    border: 'none',
    color: '#5a5449',
    textIndent: '15px',
    fontSize: '100%',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    outline: 'none',
  };

  const submitButtonStyle = {
    textIndent: '0px',
    height: '40px',
    width: '300px',
    marginTop: '10px',
    backgroundColor: '#1b8c1b99',
    transition: '2s',
    border: 'none',
    color: 'white',
    fontWeight: 'bolder',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    outline: 'none',
  };

  const loginButtonStyle = {
    textIndent: '0px',
    height: '40px',
    width: '300px',
    marginTop: '10px',
    backgroundColor: '#1b8c1b99',
    transition: '2s',
    border: 'none',
    color: 'white',
    fontWeight: 'bolder',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    outline: 'none',
    textAlign: 'center',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={{ ...monkeyLoginStyle, ...contentStyle }}>
        <div id="animcon" style={animconStyleCombined}>
          <img id="hands" src="https://raw.githubusercontent.com/naaficodes/Monkey-Login/master/images/hands.png" style={imgStyle} alt="hands" />
        </div>
        <div style={formConStyle}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" style={inputStyle} placeholder="Username" required />
            <br />
            <br />
            <input type="email" name="email" style={inputStyle} placeholder="Email" required />
            <br />
            <br />
            <input type="text" name="phone" style={inputStyle} placeholder="Phone Number" required />
            <br />
            <br />
            <input type="text" name="location" style={inputStyle} placeholder="Location" required />
            <br />
            <br />
            <input type="password" name="password" style={inputStyle} placeholder="Password" required />
            <br />
            <br />
            <input type="password" name="confirmPassword" style={inputStyle} placeholder="Confirm Password" required />
            <br />
            <br />
            <input type="submit" style={submitButtonStyle} value="R E G I S T E R" />
          </form>
          <Link to="/login" style={loginButtonStyle}>L O G I N</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
