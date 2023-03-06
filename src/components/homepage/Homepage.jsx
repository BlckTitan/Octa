import React, { useEffect } from 'react';
import { Link  } from 'react-router-dom';
import millify from 'millify';
import './style/homepage_style.scss';
import { Grid, Typography} from '@mui/material';
import { useGetCryptoCoinsQuery } from '../../app/coinSlice';

export default function Homepage() {

  const {data, isFetching } = useGetCryptoCoinsQuery()

  const widget_items = [
    {id: 1, title: 'Total Cryptocurrencies', value: 5},
    {id: 2, title: 'Total Exchanges', value: 5},
    {id: 3, title: 'Total Market Cap', value: 5},
    {id: 4, title: 'Total 24h Volume', value: 5},
    {id: 5, title: 'Total Markets', value: 5},
  ]

  return (
  <>
    <Typography variant='h4'>
      GLOBAL CRYPTO STATS
    </Typography>
      {console.log(data)}
    <Grid container spacing={2}>
      {
        widget_items.map(widget_Item => (
          <Grid item xs={6} key={widget_Item.id}>
            <p>{widget_Item.title}</p>
            <p>{widget_Item.value}</p>
          </Grid>
        ))
      }
    </Grid>
  </>
  )
}
