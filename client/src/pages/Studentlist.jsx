// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios';
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

// const Studentlist = () => {

//     const [users,setUsers] = useState([])
//   useEffect(()=>{
//           axios.get('http://localhost:4000/getUsers')
//           .then(users => setUsers(users.data))
//           .catch(err => console.log(err))
//   },[])
// const handleDelete = (id) =>{
  
//   axios
//   .delete("http://localhost:4000/delete/" + id)
//   .then(() => {
//       alert("Deleted Row");
//       window.location.reload();

//   })
// }





//   return (
    
//     <div>
//     <TableContainer>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>ID</TableCell>
//             <TableCell>TITLE</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
// {
//                users.map(user => {
//                return (

// <TableRow>
//               <TableCell >{user.name}</TableCell>
//               <TableCell>{user.email}</TableCell>
//               <Button variant="contained" color="primary">
//         Delete
//       </Button>
//       &nbsp;
//       &nbsp;
//       <Button variant="contained" color="primary">
//         Edit
//       </Button>
//               </TableRow >
//                )               
//                })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   </div>

//   )
// }

// export default Studentlist


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// const Studentlist = () => {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:4001/getUsers')
//             .then(users => setUsers(users.data))
//             .catch(err => console.log(err));
//     }, []);



//     return (
//         <div>
//             <TableContainer>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>ID</TableCell>
//                             <TableCell>Name</TableCell>
//                             <TableCell>Email</TableCell>
//                             <TableCell>Action</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {users.map(user => (
//                             <TableRow key={user._id}>
//                                 <TableCell>{user._id}</TableCell>
//                                 <TableCell>{user.name}</TableCell>
//                                 <TableCell>{user.email}</TableCell>
//                                 <TableCell>
//                                     <Button variant="contained" color="primary">
//                                         Edit
//                                     </Button>
//                                     &nbsp;
//                                     <Button variant="contained" color="secondary" >
//                                         Delete
//                                     </Button>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     );
// };

// export default Studentlist;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Studentlist = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4001/getUsers')
            .then(response => setUsers(response.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4001/delete/${id}`)
            .then(response => {
                console.log(response.data);
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(err => {
                console.log(err);
                alert('Failed to delete student');
            });
    };

    return (
        <div>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map(user => (
                            <TableRow key={user._id}>
                                <TableCell>{user._id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary">
                                        Edit
                                    </Button>
                                    &nbsp;
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDelete(user._id)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Studentlist;



