import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {Navbar} from './components';
import './App.css';


export default function App() {
  return (
    <div className="app">
        <div className='navBar'>
          <Navbar/>
        </div>
        <div className='main'></div>
        <div className='footer'></div>
    </div>
  )
}
