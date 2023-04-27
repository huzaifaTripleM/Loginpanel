import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const userData = useSelector((state) => state.user.userData);



  return (
    <div className="user-profile">
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <p>Phone Number: {userData.phone}</p>
    </div>
  );
};

export default UserProfile;
