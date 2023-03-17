import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptoNewsQuery } from '../../app/newsSlice';
import { useGetCryptoCoinsQuery } from '../../app/coinSlice';
import { Avatar, Grid } from '@mui/material';
import { Card, Typography, CardContent} from '@mui/material';
import './style/news_style.scss';
import moment from 'moment/moment';
import Loader from '../Loader';



export default function News({simplified}) {

  const [searchOptions, setSearchOptions] = useState()

  let count = simplified ? 10 : 100;

  const {data: cryptoCoin, isFetching} = useGetCryptoCoinsQuery(count)
  const {data: cryptoNews, isLoading} = useGetCryptoNewsQuery({newsCategory: searchOptions, count})
  
  if( isLoading) return <Loader/>;
  if( isFetching) return <Loader/>

  return (
    <div>
      <Grid container spacing={2}>
        {!simplified &&
          <Grid item xs={12}>
            <select onClick={(e) => {setSearchOptions(e.target.value)}} className='searchCoin'>

                  <option value='cryptocurrency'>Cryptocurrency</option>
              {cryptoCoin && cryptoCoin?.data?.coins.map((coin, index) => (
                  <option value={coin.name} key={index}>{coin.name}</option>
              ))}

            </select>
          </Grid>
        }

        {cryptoNews.value && cryptoNews?.value.map((cryproNewsData, index) => (
          <Grid item key={index} xs={3}>
            <Link to={cryproNewsData.url} target='_blank'>
              <Card sx={{height: 230}} className='card'>
                <header>

                  <img 
                    src={cryproNewsData?.image?.thumbnail?.contentUrl}
                  alt='Crypto news thumbnail'
                  />
                  
                  <Typography gutterBottom variant="h6" component="div" className='news_title'>
                      {cryproNewsData.name}
                  </Typography>

                </header>

                <CardContent>

                  <Typography variant="body2" color="text.secondary">
                    {cryproNewsData.description.substring(0, 100)}
                  </Typography>
                  
                  <div className='newsSource'>
                    <div className='provider'>

                      <Avatar 
                        src={cryproNewsData?.provider[0]?.image?.thumbnail?.contentUrl} 
                        alt=''
                      />

                      <span>{cryproNewsData?.provider[0]?.name}</span>

                    </div>

                    <span>
                      {moment(cryproNewsData.datePublished).startOf('seconds').fromNow()}
                    </span>

                  </div>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      
    </div>
  )
}