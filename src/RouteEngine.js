import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { Homepage, Exchanges, Cryptocurrencies, Cryptodetails, News, NoPage} from './components';
import Layout from './Layouts';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import Cryptodetails from './components/Cryptodetails';
import News from './components/News';
import NoPage from './components/NoPage';

export default function RouteEngine() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
          <Route path="/crypto/:coinId" element={<Cryptodetails />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
