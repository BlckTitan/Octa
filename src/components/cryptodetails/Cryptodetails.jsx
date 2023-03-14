import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useGetCoinIdQuery } from '../../app/coinSlice';
import millify from 'millify';
import './style/cryptoDetails_style.scss';
//icons
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import FunctionsIcon from '@mui/icons-material/Functions';
import SuperscriptIcon from '@mui/icons-material/Superscript';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Cryptodetails() {
  
  const {coinId} = useParams()
  const [timePeriod, setTimePeriod] = useState('7d');
  const {data, isFetching} = useGetCoinIdQuery(coinId)
  const cryptoDetails = data?.data?.coin;

  if(isFetching) return 'Loading';

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <MonetizationOnOutlinedIcon /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumbersOutlinedIcon /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <BoltOutlinedIcon /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <CandlestickChartOutlinedIcon /> },
    { title: 'All-time-high (daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <EmojiEventsOutlinedIcon /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <ShowChartIcon /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <CurrencyYenIcon /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <ThumbUpOffAltIcon /> : <ThumbDownOffAltIcon />, icon: <ErrorOutlineIcon /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <FunctionsIcon /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <SuperscriptIcon /> },
  ];

  return (
    <div className='crypto_details_container'>
      <header>
        <div className='crypto_name_img'>
          <img src={cryptoDetails.iconUrl} alt=''/>
          <h1 style={{color: `${cryptoDetails.color}`}}>{cryptoDetails.name}</h1>
          <span>{`(${cryptoDetails.symbol})`}</span>
        </div>
        <p>{cryptoDetails.tags}</p>
        <p>{cryptoDetails.description}</p>
      </header>

      <div className='cryptoDetails_body'>
        <select onClick={ (e) => setTimePeriod(e.target.value)}>
          {time.map((timeframe, index) => (
            <option key={index}>{timeframe}</option>
          ))}
        </select>
        <div className='statistics'>

          <div className='value_statistics'>
            <h1>{cryptoDetails.name} Value Statistics</h1>
            <p>An overview of {cryptoDetails.name} performance.</p>

            <ul>
              {stats.map((stats_data, index) => (
                <li key={index}>

                  <div className='icon_title'>
                    <p className='cryptoDetails_icon'>{stats_data.icon}</p>
                    <p className='cryptoDetails_title'>{stats_data.title}</p>
                  </div>

                  <p className='cryptoDetails_value'>{stats_data.value}</p>

                </li>
              ))}
            </ul>
          </div>

          <div className='other_statistics'>

            <h1>Other Statistics</h1>
            <p>An overview of all cryptocurrency performance.</p>

            
            <ul>
              {genericStats.map((genericStats_data, index) => (
                <li key={index}>

                  <div className='icon_title'>
                    <p className='cryptoDetails_icon'>{genericStats_data.icon}</p>
                    <p className='cryptoDetails_title'>{genericStats_data.title}</p>
                  </div>

                  <p className='cryptoDetails_value'>{genericStats_data.value}</p>

                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
      {console.log(cryptoDetails, timePeriod)}
    </div>
  )
}
