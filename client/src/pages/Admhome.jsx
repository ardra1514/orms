





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const Admhome = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/getrequest')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleAccept = () => {
    // Perform accept action here
    // For now, let's just navigate to the "Accepted" page
    // You might want to handle this differently based on your requirements
    window.location.href = '/userdash/home';
  };

  return (
   

    <div>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>SUBJECT</TableCell>
            <TableCell>CONTENT</TableCell>
            <TableCell>STATUS</TableCell>


          </TableRow>
        </TableHead>
         <TableBody>
           {
             users.map(user => {return (
             <TableRow>
              <TableCell >{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.subject}</TableCell>
              <TableCell>{user.content}</TableCell>
              <TableCell>
              <Button variant="contained" color="primary" class="btn btn-primary btn-sm">ACCEPT</Button>
              <Button variant="contained" color="primary" class="btn btn-primary btn-sm">REJECT</Button>
              </TableCell>
            </TableRow >
            )               
          })}
        </TableBody>
      </Table>
    </TableContainer>
  </div>



  );
};

export default Admhome;

