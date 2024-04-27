
import React, { useState } from 'react';
import '../styles/signup.css';
import { Button, Form, Input } from 'antd'
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';


const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  axios.defaults.withCredentials=true;
  const navigate = useNavigate()
  const [error,setError] = useState(null)

  

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/',{email,password})
    .then(result => {
      console.log(result)
      if(result.data.Status === "success"){
        if(result.data.role === "admin"){
          navigate('/dash')
        }
        else{
           navigate('/userdash/home')
          setError(result.data.Err)
          // alert("success")

        }
      }
    })
    .catch(err =>console.log(err))
  }

  return (
    <div className='container'>

<div  className=''>
        <h1 className='title'>LOGIN FORM</h1>
                <form onSubmit={handleSubmit}>
                  <div className="user-details">
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
                <div className='input-box' >
                <label htmlFor='email'>
                    < strong>password</strong>
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
                {/* <button className='primary-button my-3' htmlType='submit'> Register</button> */}

                </form>
                <Link to ='/signup' className='anchor'>Already have an account? Login</Link>

         


            </div>

            <div className='text-danger'>
{error && error}
  </div>

    </div>
  )
}

export default Login