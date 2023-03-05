import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import './style/style.scss';
import TopNav from './topNav/TopNav';
import Footer from './footer/Footer';

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
          
        </main>
        
      </div>

      <div className='footer'>
        <Footer/>
      </div>

    </div >
  )
}
