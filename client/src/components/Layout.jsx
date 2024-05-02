// import React, { Children } from 'react'
// import { Sidebarmenu } from '../data/data';
import React, { useState } from 'react';

import {Link,useLocation} from 'react-router-dom'

const Layout = ({children}) => {
  const [collapsed,setCollapsed] = useState(false);
  const location = useLocation();

  const Sidebarmenu = [

    {
        name:'Home',
        path:'/home',
        icon :'fa-sharp fa-solid fa-house'
    },
    {
    name:'request faculty',
    path:'/request',
    icon:'fa-regular fa-envelope'
    },
    {
        name:'profile',
        path:'/profile',
        icon:'fa-solid fa-user'
    },
    {
        name:'logout',
        path:'/logout',
        icon:'fa-solid fa-right-from-bracket'
    }

]

  
const menuToBeRendered = Sidebarmenu  
  return (
    <div className='main p-2'>
        <div className='d-flux layout'>
            <div className={`${collapsed ? 'collapsed-sidebar' : 'sidebar'}`}>
                  <div className="logo"> 
                  <h3>logo</h3>
                  <hr/>
                  </div>
                  <div className="menu">
                  {menuToBeRendered.map(menu =>{
                    const isActive = location.pathname === menu.path;

                      return(

                        <>
                        <div className={`menu-item ${isActive && 'active-menu-item'}`}>
                          <i className={menu.icon} ></i>
                         {!collapsed &&  <Link to={menu.path}>
                              {menu.name}
                          </Link>}
                        </div>  
                        </>
                      )
                  })}
                  
                  </div>

            </div>
            <div className='content'>

                <div className="header">
               {collapsed ?  <i class="<i class= fa-solid fa-bars header-action-icon" onClick={()=>setCollapsed(false)}></i> :  <i class="fa-solid fa-xmark header-action-icon" onClick={()=>setCollapsed(true)}></i>}
               <div className="d-flex">
                <i class="fa-solid fa-bell header-action-icon px-3"></i>
                <Link to = "/profile">{}</Link>
                
                </div>
                </div>
                
                <div className="body">{children}</div>

            </div>

            

        </div>


    </div>
  )
}

export default Layout