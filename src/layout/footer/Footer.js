import React from 'react';
import { Link  } from 'react-router-dom';

export default function Footer() {
  return (
    <>
         <div className='footer_text'>
          <span className='site_name'>Octa</span>
          <span className='copyright'>&copy; All rights reserved</span>
        </div>

        <div className='footer_links'>
          <Link to='/'>Home</Link> |
          <Link to='/exchanges'>Exchanges</Link> |
          <Link to='/news'>News</Link> 
        </div>
    </>
  )
}
