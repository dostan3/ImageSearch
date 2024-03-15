import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


type User = {
  picture: string;
  name: string;
  email: string;
};

const Profile: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0<User>();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && user ? (
      <div>
        <img src={user.picture} alt={user.name} />
        {/* <h2>{user.name}</h2> */}
        {/* <p>{user.email}</p> */}
      </div>
    ) : null
  );
};

export default Profile;
