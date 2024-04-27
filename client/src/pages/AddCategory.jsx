// import axios from 'axios'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const AddCategory = () => {
//             const navigate = useNavigate()

//             const [category,setCategory] = useState()
//             const handleSubmit = (e) => {
//               e.preventDefault()
//               console.log(category)
//               axios.post('http://localhost:4000/add',{category})
//               .then(result => {console.log(result)
//                 alert("created")
//                 navigate('/dash')
//               })
          
//               .catch(err =>console.log(err))
//             }



//   return (
//     <div>
//         <div className='d-flex justify-content-center align-items-center h-100 p-5'>
//        <div className='p-3 rounded w-25 border'>
//         <h2>add category</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-3'>
//             <label htmlFor='category'><strong>Category</strong></label>
//             <input type='' name='category' placeholder='enter category' onChange={(e) => setCategory(e.target.value)} className='form-control rounded-0'></input>
//           </div>
          
//           <button className='btn btn-success w-100 rounded-0'>Add category</button>
//         </form>
//        </div>

              

//     </div>
//     </div>
    
//   )
// }

// export default AddCategory

import React, { useState } from 'react';
import '../styles/signup.css';
import { Button, Form, Input,message } from 'antd'
import {Link,useNavigate}  from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';
const AddCategory = () => {

  const [category,setCategory] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/addcategory',{category})
    .then(result => {console.log(result)
      alert("created")
      navigate('/dash')
    })

    .catch(err =>console.log(err))

  }



  return (
    <div className='authentication'>
      <div>hii</div>
                <div  className='autn-page card p-3'>
                <h1 className='card-title'>SIGNUP FORM</h1>
                <form layout='vertical' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>
                    <strong>add category</strong>

                    </label>
                    <input
                    type='text'
                    placeholder='enter category'
                    autoComplete='off'
                    name='category'
                    onChange={(e)=> setCategory(e.target.value)}
                    >

                   </input>
                </div>
                <button className='primary-button my-3' htmlType='submit'> Register</button>

                </form>
</div>
    </div>
  )
}

export default AddCategory