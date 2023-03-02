import React from 'react';
import { Link } from 'react-router-dom';
import iconImg from '../img/cryptocurrency.png'

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav className='logo-container'>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/exchanges">Exchanges</Link>
            </li>
            <li>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </li>
            <li>
              <Link to="/crypto/12">Cryptodetails</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}
