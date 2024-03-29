import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptoNewsQuery } from '../../app/newsSlice';
import { useGetCryptoCoinsQuery } from '../../app/coinSlice';
import { Avatar, Grid } from '@mui/material';
import { Card, Typography } from '@mui/material';
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
    <div >
      <Grid container spacing={4}>
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
          <Grid item key={index} xs={12} sm={12} md={12} lg={4} xl={3} className='news_grid'>
            <Link to={cryproNewsData.url} target='_blank' className='newsGrid_links'>
              <Card className='card_news'>
                <header>

                  <img 
                    src={
                      (cryproNewsData?.image) ?
                      cryproNewsData?.image?.thumbnail?.contentUrl : 
                      'https://imgs.search.brave.com/Xsw5QrZVjKCHjpqT6gok-qZIMvv1HUUpUUiYj2V3woI/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMubG9zc3ByZXZl/bnRpb25tZWRpYS5j/b20vdXBsb2Fkcy8y/MDE5LzA4L2NyeXB0/b2N1cnJlbmN5LWJp/dGNvaW4tMTI4MHg3/MjAuanBn'
                    }
                  alt='Crypto news thumbnail'
                  />
                  
                  <Typography gutterBottom variant="h6" component="div" className='news_title'>
                      {cryproNewsData.name}
                  </Typography>

                </header>


                  <div className="news_item">
                    {cryproNewsData.description.substring(0, 100)}
                  </div>
                  
                  <div className='newsSource'>
                      <Avatar 
                        src={
                          (cryproNewsData?.provider[0]?.image) ?
                          cryproNewsData?.provider[0]?.image?.thumbnail?.contentUrl : 
                          'https://imgs.search.brave.com/Xsw5QrZVjKCHjpqT6gok-qZIMvv1HUUpUUiYj2V3woI/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMubG9zc3ByZXZl/bnRpb25tZWRpYS5j/b20vdXBsb2Fkcy8y/MDE5LzA4L2NyeXB0/b2N1cnJlbmN5LWJp/dGNvaW4tMTI4MHg3/MjAuanBn'
                        } 
                        alt=''
                      />
                    <div className='provider'>
                      <span>{cryproNewsData?.provider[0]?.name}</span>
                      <span className='time'>
                        {moment(cryproNewsData.datePublished).startOf('seconds').fromNow()}
                      </span>

                    </div>

                  </div>
                  
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      
    </div>
  )
}