import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Adminlayout from './Adminlayout'
import "bootstrap-icons/font/bootstrap-icons.css"
import Home from './Home'
import '../styles/dashbord.css';



const Dashboard = () => {
  
  return (
          <div className='container-fluid'>
            <div className='row flex-nowrap'>
              <div className=' col-auto col-md-2.5 col-x1-3 px-sm-2 px-3 d-flex h-100px bg-dark sidebar'>
                <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2'>
                  <Link to="/dash" className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white'><span className='fs-5 fw-bolder d-done d-sm-inline'>
                    ONLINE REQUEST</span></Link>
                  <ul className='nav nav-pills flex-column nb-sm-auto mb-0 align-items-center ' id='menu'>
                    <li className='w-100'>
                      <Link to="/dash" className='nav-link text-white px-0 align-middle'> 
                      <i className='fs-4 bi-speedometer2 ms-2'></i>
                      <span className='ms-2 d-done d-sm-inline'>REQUESTS</span>
                      
                      
                      
                   </Link>
                    </li>
                    <li className='w-100'>
                      <Link to="/dash/student" className='nav-link px-0 align-middle text-white'>
                        <i className='fs-4 bi-people ms-2'></i>
                        <span className='ms-2 d-done d-sm-inline'> MANAGE STUDENT</span>
                      </Link>
                    </li>
                    <li className='w-100'>
                      <Link to="/dash/studentlist" className='nav-link px-0 align-middle text-white'>
                        <i className='fs-4 bi-people ms-2'></i>
                        <span className='ms-2 d-done d-sm-inline'> STUDENT LIST</span>
                      </Link>
                    </li>
                   
                  
                    <li>
                      <Link to="./" className='nav-link px-0 align-middle text-white'>
                        <i className='fs-4 bi-power ms-2'></i>
                      <span className='ms-2 d-done d-sm-inline'>LOGOUT</span>

                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col p-0 m-0'>
                  <div className='p-2 d-flex justify-content-center shadow'>
                    <h4>online request managment system</h4>
                  </div>
                  <Outlet></Outlet>
                  
              </div>
            </div>
          </div>
  )
}

export default Dashboard