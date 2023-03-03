import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Exchanges, Cryptocurrencies, Cryptodetails, News, NoPage} from './components';
import Layouts from './Layouts';

export default function RouteEngine() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
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
