import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import React from 'react';
import { Link } from 'react-router-dom';
import './style/navbar_style.scss';
import './script/navBar_script';

export default function NavBar() {

  
  const menuLinks = [
    {label: 'Homepage', menu_link: '/', key: 'homepage', menu_icon: <HomeOutlinedIcon/>},
    {label: 'Exchanges', menu_link: '/exchanges', key: 'exchanges', menu_icon: <PaidOutlinedIcon/>},
    {label: 'Crypto currencies', menu_link: '/cryptocurrencies', key: 'cryptocurrencies', menu_icon: <CurrencyBitcoinOutlinedIcon/>},
    {label: 'News', menu_link: '/news', key: 'news', menu_icon: <NewspaperOutlinedIcon/>},
  ]
  return (
    <div className="navbar_container">
      <nav className='container'>
        
        
        <ul>
          {menuLinks.map((menu_links_item) => (
            <li key={menu_links_item.key} className='navigation_link' >
              <Link to={menu_links_item.menu_link} className='clicked'>
                <span>{menu_links_item.menu_icon}</span>
                <span>{menu_links_item.label}</span>
              </Link>
            </li>
          ))}

        </ul>
      </nav>
    </div>
  )
}
