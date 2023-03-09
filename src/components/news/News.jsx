import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptoNewsQuery } from '../../app/newsSlice';
import { Grid } from '@mui/material';
import { Card, Typography, CardMedia, CardContent} from '@mui/material';
import './style/news_style.scss';



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
              <Card sx={{height: 350}} className='card'>

                <img 
                  src={cryproNewsData?.image?.thumbnail?.contentUrl}
                 alt='Crypto news thumbnail'
                />

                <CardContent>

                  <Typography gutterBottom variant="h6" component="div">
                    {cryproNewsData.name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {cryproNewsData.description.substring(0, 80)}
                  </Typography>

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