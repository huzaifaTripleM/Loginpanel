import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { getUserDetails } from '../../redux/actions/userActions';

const UserProfile = () => {
  const { userDetails, loading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history =  useNavigate();

  useEffect(() => {
    dispatch(getUserDetails());
  }, [dispatch]);

  const handleLogout = () => {
    // Implement your logout logic here
    history.push('/login');
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {userDetails && (
        <div>
          <h1>Welcome, {userDetails.name}</h1>
          <p>Email: {userDetails.email}</p>
          <p>Address: {userDetails.address}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;