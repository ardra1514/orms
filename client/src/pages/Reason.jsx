import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';

const Reason = () => {
    const [users,setUsers] = useState([])
  useEffect(()=>{
          axios.get('http://localhost:4000/getrequest')
      
        .then(users => setUsers(users.data))
          .catch(err => console.log(err))
  },[])



  return (
    <div>

            <div>
            
                {users.map((user, index) => (
                    <tr key={index}>
                        
                        
                        {/* Uncomment these if needed */}
                        <td>{user.subject}</td>
                        {/* <td>{user.content}</td> */}
                    </tr>
                ))}
            
            </div>



    </div>
  )
}

export default Reason