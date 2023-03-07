import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptoCoinsQuery } from '../../app/coinSlice';
import { Grid, Card, CardContent, CardHeader, Typography, Button, CardActionArea, Avatar } from '@mui/material';

export default function Cryptocurrencies() {

  const { data: cryptoList, isFetching } = useGetCryptoCoinsQuery();
  
    if(isFetching) return 'Loading';

  console.log(cryptoList?.data?.coins)
  
  return (
    <Grid spacing={2} container columns={{ xs: 12, sm: 12, md: 12, lg: 10}}>
      {cryptoList?.data?.coins.map((currency) => (
        <Grid item xs={2} key={currency.uuid}>
          <Link to={`/crypto/${currency.uuid}`}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <CardHeader
                  avatar={
                    <Avatar alt='' src={currency.iconUrl}/>
                  }
                  title={`${currency.name}`}
                  subheader={`Crypto Rank: ${currency.rank}`}
                />
                  <CardActionArea>
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}</p>
                  </CardActionArea>
                  
                </CardContent>

            </Card>
          </Link>  
        </Grid>
      ))}
    </Grid>

  )
}