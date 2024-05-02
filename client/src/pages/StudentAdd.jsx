import React, { useState } from 'react';
import'../App.css'
import { Button, Form, Input,message } from 'antd'
import {Link,useNavigate}  from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';


const StudentAdd = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [department,setDepartment] = useState()
  const [password,setPassword] = useState()

  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/addstudent',{name,email,department,password})
    .then(result => {console.log(result)
      alert("created")
      navigate('/dash/student')
    })

    .catch(err =>console.log(err))

  }



  return (
    <div id='apply'>
    <div className='wrapper'>
    <div  className="form-box add">
    <h1 id='title'>ADD STUDENT</h1>
    <form onSubmit={handleSubmit}>
        <div className="user-details">
    <div className='input-box'>
        <label htmlFor='email'>
        <strong>Name:</strong>

        </label>
        <input
        type='text'
        placeholder='Enter Name'
        autoComplete='off'
        name='email'
        onChange={(e)=> setName(e.target.value)}
        >

       </input>
    </div>
    <div className='input-box'>
      <label htmlFor='email'>
        < strong>Email:</strong>
      </label>
      <input
        type='text'
        placeholder='Enter Email'
        autoComplete='off'
        name='email'
        onChange={(e)=> setEmail(e.target.value)}

        >
       </input>
    </div>
    <div className='input-box'>
    <label htmlFor='email'>
        < strong>Department</strong>
      </label>
      <input
        type='text'
        placeholder='Enter Department'
        autoComplete='off'
        name='department'
        onChange={(e)=> setDepartment(e.target.value)}

        >
       </input>


    </div>
    <div className='input-box'>
    <label htmlFor='email'>
        < strong>Password</strong>
      </label>
      <input
        type='text'
        placeholder='Enter Password'
        autoComplete='off'
        name='password'
        onChange={(e)=> setPassword(e.target.value)}

        >
       </input>


    </div>
    
    
    </div>
    <div className='button'>
      <br></br>
    <button  htmlType='submit'> Add student</button>
    {/* <input type='submit' vocab='apply'></input> */}
    </div>
    </form>
    </div>

</div> 
</div>
  )
}

export default StudentAdd