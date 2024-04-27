
// import '../styles/apply.css';
// import React, { useState } from 'react';
// import { Button, Form, Input,message } from 'antd'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Applyrequest = () => {

//   const [name,setName] = useState()
//   const [email,setEmail] = useState()
//   const [department,setDepartment] = useState()
//   const [password,setPassword] = useState()
//   const navigate = useNavigate()


//   const handleSubmit = (e) =>{
//     e.preventDefault()
  
//     axios.post('http://localhost:4000/addcategory',{name,email,department})
//     .then(result => {console.log(result)
//       alert("created")
//       navigate('/dash')
//     })

//     .catch(err =>console.log(err))

//   }



//   return (
    // <div>


    //       <h1 className='page-title'>Apply Request</h1>
    //       <hr/>
    //       <Form layout='vertical' onFinish={onFinish}>
    //         <h1 className="apply-title mt-5">From</h1>
    //   <Row gutter={20}>
    //         <Col span={8} xs={24} sm={24} lg={8}>
    //           <Form.Item required label='first name'>
    //             <Input placeholder='first name' name='first name' rules={[{required:true}]}></Input>
    //           </Form.Item>
    //           </Col>
    //           <Col span={8} xs={24} sm={24} lg={8}>
    //           <Form.Item required label='last name'>
    //             <Input placeholder='last name' name='last name' rules={[{required:true}]}></Input>
    //           </Form.Item>
    //           </Col>
    //           <Col span={8} xs={24} sm={24} lg={8}>
    //           <Form.Item required label='email'>
    //             <Input placeholder='email' name='email' rules={[{required:true}]}></Input>
    //           </Form.Item>
    //           </Col>
    //           <Col span={8} xs={24} sm={24} lg={8}>
    //           <Form.Item required label='department'>
    //             <Input placeholder='department' name='department' rules={[{required:true}]}></Input>
    //           </Form.Item>
    //           </Col>
    //           <Col span={8} xs={24} sm={24} lg={8}>
    //           <Form.Item required label='year'>
    //             <Input placeholder='year' name='year' rules={[{required:true}]}></Input>
    //           </Form.Item>
              
             
            
    //         </Col>

    //   </Row>
    //   <h1 className="apply-title mt-5">letter</h1>

    //   <Row gutter={20}>
    //         <Col span={8} xs={24} sm={24} lg={8}>
    //           <Form.Item required label='subject'>
    //             <Input placeholder='subject' name='subject' rules={[{required:true}]}></Input>
    //           </Form.Item>
    //           </Col>
    //           <Col span={10} xs={30} sm={40} lg={8}>
    //           <Form.Item required label='content'>
    //             <Input placeholder='content' name='content' rules={[{required:true}]}></Input>
    //           </Form.Item>
    //           </Col>
    //   </Row>
    //   <div className="d-flex justify-content-end">
    //   <Button className='primary-button' htmlType='submit'>APPLY</Button>

    //   </div>


    //       </Form>



    // </div>

    












    import React, { useState } from 'react';
// import '../styles/signup.css';
import { Button, Form, Input,message } from 'antd'
import {Link,useNavigate}  from "react-router-dom";
import axios from 'axios';
import toast from 'react-hot-toast';


const Applyrequest = () => {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [department,setDepartment] = useState()
  const [password,setPassword] = useState()
  const [reason,setReason] = useState()
  const [content,setContent] = useState()


  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:4000/applyrequest',{name,email,department,password,reason,content})
    .then(result => {console.log(result)
      alert("created")
      navigate('/userdash')
    })

    .catch(err =>console.log(err))

  }



  return (
    
    <div className='container'>
    <div>
    <h2>APPLY REQUEST</h2>
    <h4>FROM</h4>
    <form layout='vertical' onSubmit={handleSubmit}>
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
    <div  className='input-box'>
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
    <div  className='input-box'>
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
    <div  className='input-box'>
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
    <div className='htitle'>
        <h4>REASONS</h4>
      </div>
    <div  className='input-box'>
    <label htmlFor='email'>
        < strong>subject</strong>
      </label>
      <input
        type='text'
        placeholder='enter subject'
        autoComplete='off'
        name='subject'
        onChange={(e)=> setPassword(e.target.value)}

        >
       </input>


    </div>
    <div  className='input-box'>
    <label htmlFor='email'>
        < strong>content</strong>
      </label>
      <input
        type='text'
        placeholder='enter content'
        autoComplete='off'
        name='content'
        onChange={(e)=> setPassword(e.target.value)}

        >
       </input>


    </div>
    {/* <button className='primary-button my-3' htmlType='submit'> Apply</button> */}
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

export default Applyrequest
     