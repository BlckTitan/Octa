import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import './style/style.scss';
import TopNav from './topNav/TopNav';
import Footer from './footer/Footer';
import NorthOutlinedIcon from '@mui/icons-material/NorthOutlined';
import './script/script.js';

export default function Layouts() {
  return (
    <div className='container'>
      <TopNav/>
      <div className='main'>

        <aside>
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

      {/*
        <div className='footer'>
          <Footer/>
        </div>
  */}

    </div >
  )
}
