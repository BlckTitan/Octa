import { Avatar, Menu, Typography } from 'antd';
import { HomeOutlined, FundOutlined, MoneyCollectOutlined, BulbOutlined} from '@ant-design/icons'
import React from 'react';
import { Link } from 'react-router-dom';
import iconImg from '../img/cryptocurrency.png'

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav className='container'>
        <div className='logo-container'>
          <Avatar className={iconImg} size='large'/>
          <Typography.Title level={2} className="logo">
            <Link to="/">Octa</Link>
          </Typography.Title>
        </div>
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/">Homepage</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
        </nav>
    </div>
  )
}
/*
  <Menu.Item icon={</>}>
  <Link to="/crypto/12">Cryptodetails</Link>
  </Menu.Item>
*/
