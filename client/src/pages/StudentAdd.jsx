import React, { useState } from 'react';
import '../styles/studentadd.css';
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
    
    <div className='container'>
    <div  className="">
    <h1 className='title'>SIGNUP FORM</h1>
    <form onSubmit={handleSubmit}>
        <div className="user-details">
    <div className='input-box'>
        <label htmlFor='email'>
        <strong>name</strong>

        </label>
        <input
        type='text'
        placeholder='enter name'
        autoComplete='off'
        name='email'
        onChange={(e)=> setName(e.target.value)}
        >

       </input>
    </div>
    <div className='input-box'>
      <label htmlFor='email'>
        < strong>email</strong>
      </label>
      <input
        type='text'
        placeholder='enter email'
        autoComplete='off'
        name='email'
        onChange={(e)=> setEmail(e.target.value)}

        >
       </input>
    </div>
    <div className='input-box'>
    <label htmlFor='email'>
        < strong>department</strong>
      </label>
      <input
        type='text'
        placeholder='enter department'
        autoComplete='off'
        name='department'
        onChange={(e)=> setDepartment(e.target.value)}

        >
       </input>


    </div>
    <div className='input-box'>
    <label htmlFor='email'>
        < strong>email</strong>
      </label>
      <input
        type='text'
        placeholder='enter password'
        autoComplete='off'
        name='password'
        onChange={(e)=> setPassword(e.target.value)}

        >
       </input>


    </div>
    
    
    </div>
    <div className='button'>
    {/* <button  htmlType='submit'> Register</button> */}
    <input type='submit' vocab='apply'></input>
    </div>
    </form>
    </div>

</div> 
  )
}

export default StudentAdd