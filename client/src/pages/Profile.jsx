// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Profile() {
//     const [profileData, setProfileData] = useState(null);

//     useEffect(() => {
//         // Make API call to fetch user profile data
//         axios.get('http://localhost:4000/profile', { withCredentials: true })
//             .then(response => {
//                 setProfileData(response.data.profile);
//             })
//             .catch(error => {
//                 console.error('Error fetching profile data:', error);
//             });
//     }, []); // Empty dependency array ensures that the effect runs only once after the component mounts

//     return (
//         <div>
//             <h1>Welcome to the Home Page</h1>
//             {profileData ? (
//                 <div>
//                     <h2>User Profile</h2>
//                     <p>Name: {profileData.name}</p>
//                     <p>Email: {profileData.email}</p>
//                     <p>department: {profileData.department}</p>


//                     {/* Render other profile details as needed */}
//                 </div>
//             ) : (
//                 <p>Loading profile data...</p>
//             )}
//         </div>
//     );
// }

// export default Profile;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/profile.css'


const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  
  useEffect(() => {
    // Make API call to fetch user profile data
    axios.get('http://localhost:4001/profile', { withCredentials: true })
        .then(response => {
            setProfileData(response.data.profile);
        })
        .catch(error => {
            console.error('Error fetching profile data:', error);
        });
}, []); 
  


  

return (
  <div id='profile'>
      <div className="profile-container">
          <h1>Welcome to Your Profile</h1>
          <div id='profilebody'>
              {profileData ? (
                  <div>
                      <h2>{profileData.name}</h2>
                      {/* <p>Name: {profileData.name}</p> */}
                      <p>Email: {profileData.email}</p>
                      <p>Department: {profileData.department}</p>
                      {/* Render other profile details as needed */}
                  </div>
              ) : (
                  <p>Loading profile data...</p>
              )}
          </div>
      </div>
{/* 
      <div>
          <Link to="/dashboard" className="btn btn-primary mr-3">Dashboardz</Link>
          <Link to="/settings" className="btn btn-primary">Settings</Link>
      </div>
       */}
  </div>


  );
};

export default ProfilePage;




