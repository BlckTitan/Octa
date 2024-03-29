import React from 'react';
import { Link  } from 'react-router-dom';
import millify from 'millify';
import './style/homepage_style.scss';
import { Card, CardContent, Grid, Typography} from '@mui/material';
import { useGetCryptoCoinsQuery } from '../../app/coinSlice';
import { Cryptocurrencies, News } from '../../components';
import Loader from '../Loader';

export default function Homepage() {

  const {data, isFetching } = useGetCryptoCoinsQuery(10)
  const globalStats = data?.data?.stats;

  if(isFetching) return <Loader/>;

  const widget_items = [
    {id: 1, title: 'Total Cryptocurrencies', value: globalStats.total},
    {id: 2, title: 'Total Exchanges', value: globalStats.totalExchanges},
    {id: 3, title: 'Total Market Cap', value: globalStats.totalMarketCap},
    {id: 4, title: 'Total 24h Volume', value: globalStats.total24hVolume},
    {id: 5, title: 'Total Markets', value: globalStats.totalMarkets},
  ]

  return (
  <div className='homepage_container'>
    <Typography variant='h4' component='h2'>
      GLOBAL CRYPTO STATS
    </Typography>
    
    <Grid container spacing={4}>
      {widget_items.map(widget_Item => (

          <Grid item xs={12} sm={6} md={6} lg={4} xl={3} key={widget_Item.id}>
            <Card sx={{minWidth: 285, height: 120}} className='card'>
              <CardContent className='cardContent'>
                
                  <p>{widget_Item.title}</p>
                  <Typography variant='h5'>
                    {millify(widget_Item.value)}
                  </Typography>

              </CardContent>
            </Card>
          </Grid>

        ))}
    </Grid>
    
    <div className='crypto_rating_section'>

        <header>
          
          <Typography variant='h5'>
            Top 10 Cryptocurrencies in the world
          </Typography>
            
          <Link to='/cryptocurrencies'>Show More</Link>

        </header>
      
        <div className='componentContainer'>
          <Cryptocurrencies simplified={true}/>
        </div>
    </div>

    <div className='crypto_news_section'>

        <header>

          <Typography variant='h5'>
            Latest Crypto news
          </Typography>

          <Link to='/news'>Show More</Link>
          
        </header>

        <div className='componentContainer'>
          <News simplified={true}/>
        </div>
    </div>
  </div>
  )
}
