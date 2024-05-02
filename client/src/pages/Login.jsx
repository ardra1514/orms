
import React, { useState } from 'react';
import '../styles/forms.css'
import { Button, Form, Input } from 'antd'
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import {FaUser} from "react-icons/fa"
import {FaLock} from "react-icons/fa"



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
          navigate('/dash/admin')
        }
        else{
           navigate('/userdash/profile')
          setError(result.data.Err)
          // alert("success")

        }
      }
      else{
        setError(result.data.Err); 
        alert('wrong password or id')

      }
        

    })
    .catch(err =>console.log(err))
  }

  return (
    <div id='loginform'>
    <div className='wrapper'>

<div  className='form-box login'>
                <form onSubmit={handleSubmit}>

                      <h1 id='title'className='title'>LOGIN FORM</h1>
                      <div className="input-box">
                          <label htmlFor='email'>
                           <strong></strong>

                                  </label>
                                 <input
                                 type='text'
                                 placeholder='Enter Email'
                                  autoComplete='off'
                                 name='email'
                                  onChange={(e)=> setEmail(e.target.value)}
                                  >

                                 </input>
                                 <FaUser className='icon'/>

                      </div>
                      <div className="input-box">
                          <label htmlFor='email'>
                           <strong></strong>

                                  </label>
                                 <input
                                 type='text'
                                 placeholder='Enter Password'
                                  autoComplete='off'
                                 name='email'
                                  onChange={(e)=> setPassword(e.target.value)}
                                  >
                                 </input>
                                 <FaLock className='icon'/>
                      
                      </div>
                        <div>
                               <button htmlType='submit'> Login</button>

                        </div>
                        &nbsp;
                      <Link>Forgot password?</Link>
                      {/* <button className='primary-button my-3' htmlType='submit'> Register</button> */}

                       </form>
                    

         


            </div>

            <div className='text-danger'>
{error && error}
  </div>

    </div>
    </div>
  )
}

export default Login