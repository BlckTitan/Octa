import React from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptoCoinsQuery } from '../../app/coinSlice';
import { Grid, Card, CardContent, Avatar } from '@mui/material';
import './style/cryptocurrency_style.scss';

export default function Cryptocurrencies({ simplified }) {

  const count = simplified ? 10 : 100;

  const { data: cryptoList, isFetching } = useGetCryptoCoinsQuery(count);
  
    if(isFetching) return 'Loading';

  console.log(cryptoList?.data?.coins)

  
  return (
    <Grid spacing={2} container columns={{ xs: 12, sm: 12, md: 12, lg: 10}}>
      {cryptoList?.data?.coins.map((currency) => (
        <Grid item xs={2} key={currency.uuid}>
          <Link to={`/crypto/${currency.uuid}`}>
            <Card sx={{ minWidth: 285 }}>
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
        </Grid>
      ))}
    </Grid>

  )
}