import React from 'react';
import { Link } from 'react-router-dom';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { setSidebarActive } from '../../app/utilitySlice';
//icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
//style
import './style/navbar_style.scss';

export default function NavBar() {

  const active  = useSelector((state) => state.sidebarToggle.sidebarState)
  const dispatch = useDispatch()
  
  const menuLinks = [
    {label: 'Homepage', menu_link: '/', key: 'homepage', menu_icon: <HomeOutlinedIcon/>},
    {label: 'Exchanges', menu_link: '/exchanges', key: 'exchanges', menu_icon: <PaidOutlinedIcon/>},
    {label: 'Currency', menu_link: '/cryptocurrencies', key: 'cryptocurrencies', menu_icon: <CurrencyBitcoinOutlinedIcon/>},
    {label: 'News', menu_link: '/news', key: 'news', menu_icon: <NewspaperOutlinedIcon/>},
  ];

  let currentPage = window.location.pathname;

  return (
    <nav className='navbar_container'>

      <ul>
        {menuLinks.map((menu_links_item) => (
          <li 
            key={menu_links_item.key} 
            className={
              (currentPage === menu_links_item.menu_link) ?
              'navigation_link active' :
              'navigation_link'
            } 
            onClick={() => dispatch(setSidebarActive(!active))}
          >
            <Link to={menu_links_item.menu_link}>
              <span>{menu_links_item.menu_icon}</span>
              <span>{menu_links_item.label}</span>
            </Link>
          </li>
        ))}

      </ul>
    </nav>
  )
}
