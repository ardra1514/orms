import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"
import '../App.css';



const Dashboard = () => {
  
  return (
          <div className='container-fluid'>
            <div className='row flex-nowrap'>
              <div className=' col-auto col-md-2 col-x1-2 px-sm-2 px-0 sidebarcolor'>
                <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100'>
                  <Link to="/dash" className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none' min><span className='fs-5 fw-bolder d-done d-sm-inline'>
                    ONLINE REQUEST</span></Link>
                  <ul className='nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start' id='menu'>
                    <li className='w-100'>
                      <Link to="/dash/admin" className='nav-link text-white px-0 align-middle'> 
                      <i class="fas fa-file-alt"></i> 
                      <span className='ms-2 d-done d-sm-inline'>REQUESTS</span>
                      
                      
                      
                   </Link>
                    </li>
                    <li className='w-100'>
                      <Link to="/dash/student" className='nav-link px-0 align-middle text-white'>
                      <i class="fas fa-users-cog"></i>
                        <span className='ms-2 d-done d-sm-inline'> MANAGE STUDENT</span>
                      </Link>
                    </li>
                    <li className='w-100'>
                      <Link to="/dash/studentlist" className='nav-link px-0 align-middle text-white'>
                      <i class="fas fa-user-graduate"></i>
                        <span className='ms-2 d-done d-sm-inline'> STUDENT LIST</span>
                      </Link>
                    </li>
                   
                  
                    <li className='w-100'>
                      <Link to="/" className='nav-link px-0 align-middle text-white'>
                        <i className='fs-4 bi-power ms-2'></i>
                      <span className='ms-2 d-done d-sm-inline'>LOGOUT</span>

                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col p-0 m-0'>
                  <div className='p-2 d-flex justify-content-center shadow'>
                    <h4>ONLINE REQUEST MANAGEMENT SYSTEM</h4>
                  </div>
                  <Outlet></Outlet>
                  
              </div>
            </div>
          </div>

    

  )
}

export default Dashboard