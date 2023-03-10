import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptoNewsQuery } from '../../app/newsSlice';
import { Avatar, Grid } from '@mui/material';
import { Card, Typography, CardContent} from '@mui/material';
import './style/news_style.scss';
import moment from 'moment/moment';



export default function News(simplified) {

  let count = simplified ? 10 : 100;

  const {data: cryptoNews, isLoading} = useGetCryptoNewsQuery({newsCategory: 'cryptocurrency', count})

  if( isLoading) return 'Loading'

  return (
    <div>
      <Grid container spacing={2}>
        {cryptoNews.value && cryptoNews.value.map((cryproNewsData, index) => (
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

      {console.log(cryptoNews.value)}
      
    </div>
  )
}
/**
 
 */