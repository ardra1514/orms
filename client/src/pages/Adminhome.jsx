import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const Adminhome = () => {
const [users,setUsers] = useState([])
  useEffect(()=>{
          axios.get('http://localhost:4000/getrequest')
      
        .then(users => setUsers(users.data))
          .catch(err => console.log(err))
  },[])
  return (
    <div>
             <div className='d-flex justify-content-center'>
            <h3>student list</h3>
        </div>
            <div className='w-100 vh-100 d-flex justify-content-center align-items-center'> 
          <div className='w-1000'>
            <table className='table' border={1}>
                <thead>
                  <tr>
                    <th>
                      name
                    </th>
                    <th>
                      email
                    </th>
                    <th>
                      department
                    </th>
                    <th>
                      year
                    </th>
                    <th>
                      subject
                    </th>
                    <th>
                      content
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                 users.map(user => {
                 return <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.department}</td>
                    <td>{user.year}</td>
                    <td>{user.subject}</td>
                    <td>{user.content}</td>       
                  </tr>

                 })}
                </tbody>
            </table>
            </div>
          </div>




    </div>
  )
}

export default Adminhome