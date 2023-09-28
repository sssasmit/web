jsx
import React, { useState } from 'react';
import Profile from './components/Profile';

function App() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', age: 25, occupation: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', age: 30, occupation: 'Web Developer' },
    { id: 3, name: 'Bob Johnson', age: 35, occupation: 'Data Analyst' },
  ]);

  return (
    <div className="App">
      <h1>Profile Viewer</h1>
      {
        profiles.map(profile => (
          <Profile key={profile.id} profile={profile} />
        ))
      }
    </div>
  );
}

export default App;