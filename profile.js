jsx
import React from 'react';

function Profile({ profile }) 
{
  return (
    <div className="profile">
      <h2>{profile.name}</h2>
      <p>Age: {profile.age}</p>
      <p>Occupation: {profile.occupation}</p>
    </div>
  );
}

export default Profile;