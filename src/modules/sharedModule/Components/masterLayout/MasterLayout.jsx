import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navber from '../Navber/Navber'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function MasterLayout() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <Sidebar/>

        </div>
          <div className='col-md-9'>
            <Navber/>
            <Header/>
            <Outlet/>

        </div>

      </div>
      
    </div>
  )
}
