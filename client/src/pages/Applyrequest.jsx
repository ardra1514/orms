
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

    












//     import React, { useState } from 'react';

// import { Button, Form, Input,message } from 'antd'
// import {Link,useNavigate}  from "react-router-dom";
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import '../App.css'


// const Applyrequest = () => {
//   const [name,setName] = useState()
//   const [email,setEmail] = useState()
//   const [department,setDepartment] = useState()

//   const [subject,setSubject] = useState()
//   const [content,setContent] = useState()
//   const [year,setYear] = useState()




//   const navigate = useNavigate()

//   const handleSubmit = (e) =>{
//     e.preventDefault()
//     axios.post('http://localhost:4001/applyrequest',{name,email,department,year,subject,content})
//     .then(result => {console.log(result)
//       alert("created")
//       navigate('/userdash/home')
//     })

//     .catch(err =>console.log(err))

//   }



//   return (
//     <div id='apply'> 
//   <div className='applywrapper'>
//     <div id=''>
//       <h2>APPLY REQUEST</h2>
//       <h4>FROM</h4>
//       <form layout='vertical' onSubmit={handleSubmit}>
//         <div className="user-details">
//           <div className='input-box'>
//             <label htmlFor='name'>Name</label>
//             <input
//               type='text'
//               placeholder='Enter Name'
//               autoComplete='off'
//               name='name'
//               onChange={(e)=> setName(e.target.value)}
//             />
//           </div>

//           <div className='input-box'>
//             <label htmlFor='email'>Email</label>
//             <input
//               type='text'
//               placeholder='Enter Email'
//               autoComplete='off'
//               name='email'
//               onChange={(e)=> setEmail(e.target.value)}
//             />
//           </div>

//           <div className='input-box'>
//             <label htmlFor='department'>Department</label>
//             <input
//               type='text'
//               placeholder='Enter Department'
//               autoComplete='off'
//               name='department'
//               onChange={(e)=> setDepartment(e.target.value)}
//             />
//           </div>

//           <div className='input-box'>
//             <label htmlFor='year'>Year</label>
//             <input
//               type='text'
//               placeholder='Enter Year'
//               autoComplete='off'
//               name='year'
//               onChange={(e)=> setYear(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className='reason'>
//           <h4>REASON</h4>

//           <div className='input-box-content'>
//             <label htmlFor='subject'>Subject</label>
//             <input
//               type='text'
//               placeholder='Enter Subject'
//               autoComplete='off'
//               name='subject'
//               onChange={(e)=> setSubject(e.target.value)}
//             />
//           </div>

//           <div className='input-box-content'>
//             <label htmlFor='content'>Content</label>
//             <input
//               type='text'
//               placeholder='Enter Content'
//               autoComplete='off'
//               name='content'
//               onChange={(e)=> setContent(e.target.value)}
//             />
//           </div>
//         </div>

//         <div>
//           <button htmlType='submit'>Submit</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>

//   )
// }

// export default Applyrequest
     














import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

const Applyrequest = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    department: '',
    year: '',
    subject: '',
    content: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4001/applyrequest', form)
      .then(result => {
        console.log(result);
        alert("Created");
        navigate('/userdash/home');
      })
      .catch(err => console.log(err));
  };

  return (
    <div id='apply'>
      <div className='applywrapper'>
        <div id=''>
          <h2>APPLY REQUEST</h2>
          <h4>FROM</h4>
          <form layout='vertical' onSubmit={handleSubmit}>
            <div className="user-details">
              <div className='input-box'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  placeholder='Enter Name'
                  autoComplete='off'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className='input-box'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  placeholder='Enter Email'
                  autoComplete='off'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className='input-box'>
                <label htmlFor='department'>Department</label>
                <input
                  type='text'
                  placeholder='Enter Department'
                  autoComplete='off'
                  name='department'
                  value={form.department}
                  onChange={handleChange}
                />
              </div>
              <div className='input-box'>
                <label htmlFor='year'>Year</label>
                <input
                  type='text'
                  placeholder='Enter Year'
                  autoComplete='off'
                  name='year'
                  value={form.year}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='reason'>
              <h4>REASON</h4>
              <div className='input-box-content'>
                <label htmlFor='subject'>Subject</label>
                <input
                  type='text'
                  placeholder='Enter Subject'
                  autoComplete='off'
                  name='subject'
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>
              <div className='input-box-content'>
                <label htmlFor='content'>Content</label>
                <input
                  type='text'
                  placeholder='Enter Content'
                  autoComplete='off'
                  name='content'
                  value={form.content}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Applyrequest;
