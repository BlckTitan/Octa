import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import { Avatar } from '@mui/material';
import NavBar from './navbar/NavBar';
import iconImg from '../img/cryptocurrency.png';
import './style/style.scss';

export default function Layouts() {
  return (
    <div className='container'>
      <div className='topNav'>
        <div className='logo'>
            <Avatar alt='logo' src={iconImg} />
            <Link to="/">
              <span>Octa</span>
            </Link>
          </div>
      </div>
      <div className='main'>

        <aside>
          <NavBar/>
        </aside>

        <main>
          <Outlet/>
        </main>
        
      </div>
      <div className='foot'></div>
    </div >
  )
}
