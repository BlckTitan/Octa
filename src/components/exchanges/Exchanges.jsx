import React, { useState } from 'react';
//store
import { useGetCoinExchangesByIdQuery, useGetCryptoCoinsQuery } from '../../app/coinSlice';
//style
import './style/exchange_style.scss';
//icon
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Exchanges({simplified}) {

  let count = simplified ? 10 : 100;
  
  const [coinId, setCoinId] = useState('Qwsogvtv82FCd')
  const {data: coinExchange, isFetching} = useGetCoinExchangesByIdQuery({coinId, count})
  const {data: allCoins} = useGetCryptoCoinsQuery(count)
  let coinDetailsInfo = allCoins?.data?.coins

  console.log(coinExchange)

  if(isFetching) return 'Loading';
  
  return (
    <div className='exchange_container'>
      <header>
        <select onChange={(e) => setCoinId(e.target.value)}>
          {coinDetailsInfo && coinDetailsInfo.map((coinDetail, index) => (

            <option key={index} value={coinDetail.uuid}>{coinDetail.name}</option>
            
          ))}
          </select>
      </header>
      
      <div className='exchange_body'>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="left">Calories</TableCell>
                <TableCell align="left">Fat&nbsp;(g)</TableCell>
                <TableCell align="left">Carbs&nbsp;(g)</TableCell>
                <TableCell align="left">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}