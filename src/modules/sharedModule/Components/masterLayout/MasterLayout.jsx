import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navber from '../Navber/Navber'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <div className='d-flex'>
  
        <div>
          <Sidebar/>

        </div>
          <div className='w-100 container'>
            <Navber/>
            {/* <Header/> */}
            <Outlet/>

        </div>

      </div>
      
  )
}
