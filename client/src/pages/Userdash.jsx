import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css"
import "../App.css";
import {Sidebarcontent} from './Sidebarcontent'


const Userdash = () => {

  const [profileData, setProfileData] = useState(null);
  
  useEffect(() => {
    // Make API call to fetch user profile data
    axios.get('http://localhost:4000/profile', { withCredentials: true })
        .then(response => {
            setProfileData(response.data.profile);
        })
        .catch(error => {
            console.error('Error fetching profile data:', error);
        });
}, []); 


  return (
    <div className='container-fluid'>
            <div className='row flex-nowrap'>
              <div className='col-auto col-md-2 col-x1-2 px-sm-2 px-0 sidebarcolor'>
                <div className='d-flex flex-column align-items-center align-items-sm-start px-3 pt-2'>
                  <Link to="/dash" className='d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white'><span className='fs-5 fw-bolder d-done d-sm-inline'>
                    ONLINE REQUEST</span></Link>
                  <ul className='nav nav-pills flex-column nb-sm-auto mb-0 align-items-center ' id='menu'>
                    
                  <li className='w-100'>
                      <Link to="/userdash/profile" className='nav-link px-0 align-middle text-white'>
                      <i class="bi bi-person"></i>
                        <span className='ms-2 d-done d-sm-inline'> PROFILE</span>
                      </Link>
                    </li>
                    
                    <li className='w-100'>
                      <Link to="/userdash/apply" className='nav-link text-white px-0 align-middle'> 
                      <i class="bi bi-envelope"></i>
                      <span className='ms-2 d-done d-sm-inline'> APPLY REQUESTS</span>
                      
                      
                      
                   </Link>
                    </li>


                  <li className='w-100'>
                      <Link to="/userdash/home" className='nav-link text-white px-0 align-middle'> 
                      <i class="bi bi-house"></i>
                      <span className='ms-2 d-done d-sm-inline'> REQUEST STATUS</span>
                      
                      
                      
                   </Link>
                    </li>

                    
                   
                    
                    <li>
                      <Link to="/"className='nav-link px-0 align-middle text-white'>
                        <i className='fs-4 bi-power ms-2'></i>
                      <span className='ms-2 d-done d-sm-inline'>LOGOUT</span>

                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col p-0 m-0'>
  <div className='p-2 d-flex justify-content-center shadow'>
    <div className="d-flex align-items-center justify-content-between w-100">
      <div id='name-on-top' className="d-flex align-items-center">
        {profileData ? (
          <div className="d-flex align-items-center">
            <i className="bi bi-person-circle" style={{ fontSize: "24px", marginLeft: "10px", }}></i>

            <h5 className="mb-0 mr-2">{profileData.name}</h5>
            {/* Adjust margin and font size as needed */}
            {/* Render other profile details as needed */}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  </div>
  <Outlet></Outlet>
</div>

            </div>
          </div>


    // <div className='sidebar'>

    //     <div className="sidebarlist">

    //     <Link to="/userdash"><span >
    //                ONLINE REQUEST</span></Link>
    //         <ul>

    //         <li className='w-100'>
    //                 <Link to="/userdash/home"> 
    //                   <i className='fs-4 bi-speedometer2 ms-2'></i>
    //                   <span> home</span>
                      
                      
                      
    //                 </Link>
    //                  </li>
    //                  <li className='w-100'>
    //                   <Link to="/userdash/apply"> 
    //                   <i className='fs-4 bi-speedometer2 ms-2'></i>
    //                   <span> apply REQUESTS</span>
                 
                      
                      
    //               </Link>
    //                </li>
                   
    //                 <li >
    //                   <Link to="/userdash">
    //                     <i className='fs-4 bi-people ms-2'></i>
    //                     <span> profile</span>
    //                   </Link>
    //                 </li>
    //                 <li>
    //               <Link className='nav-link px-0 align-middle text-white'>
    //                 <i className='fs-4 bi-power ms-2'></i>
    //               <span className='ms-2 d-done d-sm-inline'>LOGOUT</span>

    //               </Link>
    //               </li>
                



    //         </ul>
    //         <div className='col p-0 m-0'>
    //               <div className='p-2 d-flex justify-content-center shadow'>
    //               <h4>online request managment system</h4>
    //             </div>
    //             <Outlet></Outlet>
                  
    //         </div>


    //     </div>


    // </div>
  )
}

export default Userdash