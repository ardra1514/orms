

import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admhome = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4001/getrequest')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleAccept = async (userId) => {
    try {
      await axios.put(`http://localhost:4001/updaterequest/${userId}`, { stus: 'Accepted' });
      setUsers(prevUsers => prevUsers.map(user => user._id === userId ? { ...user, stus: 'Accepted' } : user));
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (userId) => {
    try {
      await axios.put(`http://localhost:4001/updaterequest/${userId}`, { stus: 'Rejected' });
      setUsers(prevUsers => prevUsers.map(user => user._id === userId ? { ...user, stus: 'Rejected' } : user));
    } catch (error) {
      console.error(error);
    }
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
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.subject}</TableCell>
                <TableCell>{user.content}</TableCell>
                <TableCell>{user.stus}</TableCell>
                <TableCell>
                  {user.stus !== 'Accepted' && user.stus !== 'Rejected' && (
                    <>
                      <Button variant="contained" color="primary" size="small" onClick={() => handleAccept(user._id)}>
                        ACCEPT
                      </Button>
                      <Button variant="contained" color="error" size="small" onClick={() => handleReject(user._id)}>
                        REJECT
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Admhome;








