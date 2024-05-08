import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Dashborad from '../../../HomeMoudels/componets/Dashborad/Dashborad';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import logo from "/src/assets/images/3.png";
export default function SideBar() {
      const [iscollapse, setCollapse] = useState(false)
      const toggleCollapse = () => {
        setCollapse(!iscollapse)
      }

  return (

    <div className='Sidebar-conatiner'>
      <Sidebar collapsed={iscollapse}>

        <Menu>
          <MenuItem onClick={toggleCollapse}>
            <img className="image-sidebar" src={logo} alt="logo" />
          </MenuItem>
          <MenuItem component={<Link to="/dashborad" />}> <FontAwesomeIcon icon={faHouse} /> Home </MenuItem>
          <MenuItem component={<Link to="/dashborad/users"/>}> <FontAwesomeIcon icon={faUser} /> Users </MenuItem>
          <MenuItem component={<Link to="/dashborad/recipes" />}> <FontAwesomeIcon icon={faUtensils} /> Recipes </MenuItem>
          <MenuItem component={<Link to="/dashborad/categories" />}>  <FontAwesomeIcon icon={faList} /> Categories </MenuItem>
          <MenuItem component={<Link to="/dashborad/categories" />}> <FontAwesomeIcon icon={faKey} /> Change Password </MenuItem>
          <MenuItem component={<Link to="/dashborad/categories" />}> <FontAwesomeIcon icon={faRightFromBracket} /> Logout</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}
