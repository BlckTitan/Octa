import React from 'react';
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material';
import iconImg from '../../img/cryptocurrency_logo.png';

export default function TopNav() {
  return (
    <>
      <div className='logo'>
        <Avatar alt='logo' src={iconImg} />
        <Link to="/">
          <span>Octa</span>
        </Link>
      </div>
    </>
  )
}
