import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const Studentlist = () => {

    const [users,setUsers] = useState([])
  useEffect(()=>{
          axios.get('http://localhost:4000/getUsers')
          .then(users => setUsers(users.data))
          .catch(err => console.log(err))
  },[])
const handleDelete = (id) =>{
  // axios.delete('http://localhost:4000/deletestu/'+id)
  // .then(res =>{
  //   console.log(res)
    
  // }).catch(err => console.log(err))
  axios
  .delete("http://localhost:4000/delete/" + id)
  .then(() => {
      alert("Deleted Row");
      window.location.reload();

  })
}





  return (
    <div>
             <div className='d-flex justify-content-center'>
            <h3>student list</h3>
        </div>
            <div className='w-100 vh-100 d-flex justify-content-center align-items-center'> 
          <div className='w-50'>
            <table className='table'>
                <thead>
                  <tr>
                    <th>
                      name
                    </th>
                    <th>
                      email
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                 users.map(user => {
                 return <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className='btn btn-info btn-sm'>edit</button>
                      <button className='btn btn-warning btn-sm' onClick={() => { handleDelete(user.id) }}>delete</button>
                    </td>
                  </tr>

                 })}
                </tbody>
            </table>
            </div>
          </div>




    </div>
  )
}

export default Studentlist