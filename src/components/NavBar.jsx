import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../img/cryptocurrency.png'

export default function NavBar() {
  return (
    <div className="nav-container">
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Octa</Link>
            </Typography.Title>
            {/*<button className='menu-control-container'></button>*/}
        </div>
    </div>
  )
}
