// import React from 'react'
// import Layout from '../components/Layout'
// import '../App.css'
// const Home = ({ status }) => {
//   return (
        // <div>
        //     <h1 id='userhome'>
        //       MY REQUEST STATUS
        //     </h1>


        //      <div className='d-flex justify-content-center'>
            
        // </div>
        //     <div className='w-100 vh-100 d-flex justify-content-center align-items-center'> 
        //   <div className='w-50'>
        //     <table className='table'>
        //         <thead>
        //           <tr>
        //             <th>
        //               SUBJECT
        //             </th>
        //             <th>
        //               STATUS
        //             </th>
        //           </tr>
        //         </thead>
        //         <tbody>
                 
        //         </tbody>
        //     </table>
        //     </div>
        //   </div>


        // </div>

//         <div>
//       <h2>Status: {status}</h2>
//     </div>
    
  
//   )
// }

// export default Home




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

// const Home = () => {
//   const [status, setStatus] = useState('');
//   const [profileData, setProfileData] = useState(null);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4000/getrequest')
//       .then(response => setUsers(response.data))
//       .catch(err => console.log(err));
//   }, []);
//   useEffect(() => {
//     // Make API call to fetch user profile data
//     axios.get('http://localhost:4000/profile', { withCredentials: true })
//         .then(response => {
//             setProfileData(response.data.profile);
//         })
//         .catch(error => {
//             console.error('Error fetching profile data:', error);
//         });
// }, []); 


//   useEffect(() => {
//     const requestId = localStorage.getItem('requestId'); // Assuming you have stored the request ID in local storage
//     if (requestId) {
//       axios.get(`http://localhost:4000/getrequest/${requestId}`)
//         .then(response => setStatus(response.data.status))
//         .catch(err => console.error(err));
//     }
//   }, []);

//   return (
//     <div>
//                   {profileData ? (
//                   <div>
//                       <p>Email: {profileData.email}</p>
//                       <p>Department: {profileData.department}</p>
//                       {/* Render other profile details as needed */}
//                   </div>
//               ) : (
//                   <p>Loading profile data...</p>
//               )}
//       <TableContainer>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>EMAIL</TableCell>
//             <TableCell>SUBJECT</TableCell>
//             <TableCell>CONTENT</TableCell>
//             <TableCell>STATUS</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//            {
//              users.map(user => {return (
//              <TableRow>
//               <TableCell>{user.email}</TableCell>
//               <TableCell>{user.subject}</TableCell>
//               <TableCell>{user.content}</TableCell>
//               <TableCell>{user.Status}</TableCell>
//             </TableRow >
//             )               
//           })}
//         </TableBody>
//       </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Home = () => {
  const [status, setStatus] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4001/getrequest')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

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

  useEffect(() => {
    const requestId = localStorage.getItem('requestId'); // Assuming you have stored the request ID in local storage
    if (requestId) {
      axios.get(`http://localhost:4001/getrequest/${requestId}`)
        .then(response => setStatus(response.data.stus))
        .catch(err => console.error(err));
    }
  }, []);

  return (
    <div>
     
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SUBJECT</TableCell>
              <TableCell>CONTENT</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.filter(user => user.email === profileData?.email)?.map(user => (
              <TableRow key={user.id}>
                {/* <TableCell>{user.email}</TableCell> */}
                <TableCell>{user.subject}</TableCell>
                <TableCell>{user.content}</TableCell>
                <TableCell>{user.stus}</TableCell>
              </TableRow>
            ))}
            {users.filter(user => user.email === profileData?.email)?.length === 0 && (
              <TableRow>
                <TableCell colSpan={4}>No matching data found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
