import React, { useState } from 'react';
//store
import { useGetCoinExchangesByIdQuery, useGetCryptoCoinsQuery } from '../../app/coinSlice';
//style
import './style/exchange_style.scss';
//material
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';
//icon
import VerifiedIcon from '@mui/icons-material/Verified';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
//millify
import millify from 'millify';

export default function Exchanges({simplified}) {

  let count = simplified ? 10 : 100;
  
  const [coinId, setCoinId] = useState('Qwsogvtv82FCd')
  const {data: coinExchange, isFetching} = useGetCoinExchangesByIdQuery({coinId, count})
  const {data: allCoins} = useGetCryptoCoinsQuery(count)

  let coinDetailsInfo = allCoins?.data?.coins
  let coinExchangeInfo = coinExchange?.data?.exchanges;

  if(isFetching) return 'Loading crypto exchanges';
  console.log(coinDetailsInfo)
  return (
    <div className='exchange_container'>
      <header>
          <select onClick={(e) => {setCoinId(e.target.value)}}>
            {coinDetailsInfo && coinDetailsInfo.map((coinDetail, index) => (

              <option key={index} value={coinDetail.uuid}>{coinDetail.name}</option>
              
            ))}
          </select>
          <p>Crypto coin exchanges</p>
      </header>
      
      <div className='exchange_body'>
        <TableContainer component={Paper}>
          <Table aria-label="table">

            <TableHead>
              <TableRow>
                <TableCell sx={{fontWeight: '600', color: '#232323'}} align="left">Exchanges</TableCell>
                <TableCell sx={{fontWeight: '600', color: '#232323'}} align="left">Rank</TableCell>
                <TableCell sx={{fontWeight: '600', color: '#232323'}} align="left">24H Trade Volume</TableCell>
                <TableCell sx={{fontWeight: '600', color: '#232323'}} align="left">Price</TableCell>
                <TableCell sx={{fontWeight: '600', color: '#232323', display: 'flex', alignItems: 'center'}} align="left">
                  <VerifiedIcon sx={{color: '#232323', marginRight: '1rem'}}/>
                  <span>Verified</span>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>

              
              {coinExchangeInfo && coinExchangeInfo.map((exchange, index) => (
                <TableRow key={index}>
                  <TableCell align="left" sx={{display: 'flex', alignItems: 'center'}}>
                    <Avatar src={exchange.iconUrl} sx={{marginRight: '1rem'}}/>
                    <span>{exchange.name}</span>
                  </TableCell>
                  <TableCell align="left">{exchange.rank}</TableCell>
                  <TableCell align="left">{millify(exchange?.['24hVolume'])}</TableCell>
                  <TableCell align="left">{millify(exchange.price)}</TableCell>
                  <TableCell align="left">
                    {exchange.verified === true ? <VerifiedIcon sx={{color: '#2979ff'}}/> : <VerifiedOutlinedIcon/>}
                  </TableCell>
                </TableRow>
              ))}

              
            </TableBody>
          </Table>

        </TableContainer>
      </div>
    </div>
  )
}