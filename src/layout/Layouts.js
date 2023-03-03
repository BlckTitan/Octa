import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function Layouts() {
  return (
    <>
      <div className='navbar'></div>
      <div className='main'>

        <aside>
          <NavBar/>
        </aside>

        <main>
          <Outlet/>
        </main>
        
      </div>
      <div className='footer'></div>
    </>
  )
}
