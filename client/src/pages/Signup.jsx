import React, { useState } from 'react';
import '../styles/signup.css';
import { Button, Form, Input,message } from 'antd'
import {Link,useNavigate}  from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';


const Signup = () => {

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/add',{name,email,password})
    .then(result => {console.log(result)
      alert("created")
      navigate('/')
    })

    .catch(err =>console.log(err))

  }

  return (
    <div className='authentication'>
                <div  className='autn-page card p-3'>
                <h1 className='card-title'>SIGNUP FORM</h1>
                <form layout='vertical' onSubmit={handleSubmit}>
                <div>
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
                <div className='mb-3'>
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
                <div >
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
                <button className='primary-button my-3' htmlType='submit'> Register</button>

                </form>
                <Link to ='/' className='anchor'>Already have an account? Login</Link>

               







                </div>

    </div>
  )
}

export default Signup