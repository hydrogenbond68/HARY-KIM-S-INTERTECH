import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = ({ onUpdateProfile }) => {
  const [profileData, setProfileData] = useState({ username: '', email: '', phone: '', location: '' });
  const [newPassword, setNewPassword] = useState('');
  const [editing, setEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setProfileData(storedUser);
      if (storedUser.profilePhoto) {
        setProfilePhotoUrl(storedUser.profilePhoto);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setProfilePhoto(file);
      setProfilePhotoUrl(URL.createObjectURL(file));
    } else {
      toast.error('Please select a valid image file');
    }
  };

  const handleSave = async () => {
    try {
      const updatedProfileData = { ...profileData, profilePhoto: profilePhotoUrl };
      localStorage.setItem('user', JSON.stringify(updatedProfileData));
      if (newPassword) {
        console.log('Password updated:', newPassword);
      }

      if (profilePhoto) {
        console.log('Profile photo updated:', profilePhoto.name);
      }

      toast.success('Profile updated successfully');
      setEditing(false);
      onUpdateProfile(updatedProfileData);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('Error updating profile');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: 'url(https://images.unsplash.com/photo-1549816115-fe3dbef80a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
    backgroundSize: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const profileBoxStyle = {
    position: 'relative',
    zIndex: 1,
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    width: '400px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    cursor: 'pointer',
  };

  const profilePhotoStyle = {
    display: 'block',
    margin: '0 auto 10px auto',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
  };

  const editButtonStyle = {
    backgroundColor: 'green',
  };

  const saveButtonStyle = {
    backgroundColor: 'orange',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={profileBoxStyle}>
        {profilePhotoUrl && (
          <img
            src={profilePhotoUrl}
            alt="Profile"
            style={profilePhotoStyle}
          />
        )}
        <h2>Profile</h2>
        <input
          type="text"
          name="username"
          value={profileData.username}
          onChange={handleChange}
          placeholder="Username"
          style={inputStyle}
          disabled={!editing}
        />
        <input
          type="email"
          name="email"
          value={profileData.email}
          onChange={handleChange}
          placeholder="Email"
          style={inputStyle}
          disabled={!editing}
        />
        <input
          type="text"
          name="phone"
          value={profileData.phone}
          onChange={handleChange}
          placeholder="Phone"
          style={inputStyle}
          disabled={!editing}
        />
        <input
          type="text"
          name="location"
          value={profileData.location}
          onChange={handleChange}
          placeholder="Location"
          style={inputStyle}
          disabled={!editing}
        />
        {editing && (
          <>
            <input
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
              placeholder="New Password"
              style={inputStyle}
            />
            <input
              type="file"
              onChange={handlePhotoChange}
              style={inputStyle}
            />
          </>
        )}
        {editing ? (
          <button onClick={handleSave} style={{ ...buttonStyle, ...saveButtonStyle }}>
            Save
          </button>
        ) : (
          <button onClick={() => setEditing(true)} style={{ ...buttonStyle, ...editButtonStyle }}>
            Edit
          </button>
        )}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Profile;
