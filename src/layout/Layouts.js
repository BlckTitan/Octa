import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import TopNav from './topNav/TopNav';
//style
import './style/style.scss';
//icons
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import './script/script.js';

export default function Layouts() {

  const [active, setActive] = useState(false)

  return (
    <div className='container'>
      <nav className='topNav'>
        <button onClick={() => setActive(!active)}>
          <MenuOutlinedIcon sx={{fontSize: 30}}/>
        </button>
        
        <TopNav/>
      </nav>
      <div className='main'>

        <aside 
          className={(active === true) ? 'active' : 'sidebar'}
        >
          <NavBar/>
        </aside>

        <main>
          <Outlet/>

          <div className='scrollProgress'>
            <span className='scrollProgressValue'>
              <NorthOutlinedIcon/>
            </span>
          </div>

        </main>
        
      </div>
    </div >
  )
}
