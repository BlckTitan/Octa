import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import './style/style.scss';

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
      <div className='foot'></div>
    </>
  )
}
