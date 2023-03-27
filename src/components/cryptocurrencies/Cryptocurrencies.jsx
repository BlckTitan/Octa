import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom'
import { useGetCryptoCoinsQuery } from '../../app/coinSlice';
import { Card, CardContent, Avatar } from '@mui/material';
import './style/cryptocurrency_style.scss';

export default function Cryptocurrencies({ simplified }) {
  const [searchTerm, setSearchTerm] = useState('')

  const count = simplified ? 10 : 100;

  const { data: cryptoList } = useGetCryptoCoinsQuery(count);

  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  useEffect(()=>{
    
    let filteredData = cryptoList?.data?.coins.filter(
      (coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
     setCryptos(filteredData)
     

  }, [searchTerm, cryptoList?.data?.coins])

  return (
    <div className='cryptocurrencies_container'>
      {simplified !== true && 
        <div className='filter'>
          <input 
            placeholder='search crypto currency'
            onChange={(e) => {setSearchTerm(e.target.value)}}
          />
        </div>
      }
      
      <div  className='grid_container'>
        {cryptos && cryptos.map((currency) => (
          <Link to={`/crypto/${currency.uuid}`} key={currency.uuid} className='currency_link'>
            <Card className='card'>
                <CardContent>
                  <div className='card_header'>

                    <div className='text'>
                      <p className='title'>{currency.name}</p>
                      <p className='subTitle'>Coin Rank: {currency.rank}</p>
                    </div>

                    <Avatar alt='' src={currency.iconUrl}/>

                  </div>
                  
                  <div className='otherCryptoInfo'>
                    <p>Price: <strong>{millify(currency.price)}</strong></p>
                    <p>Market Cap: <strong>{millify(currency.marketCap)}</strong></p>
                    <p>Daily Change: <strong>{millify(currency.change)}</strong></p>
                  </div>
                </CardContent>

            </Card>
          </Link>  
        ))}
      </div>
    </div>
    
  )
}