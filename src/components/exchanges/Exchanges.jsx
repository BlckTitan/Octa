import React from 'react';
import { useGetCryptoCoinsQuery } from '../../app/coinSlice';

export default function Exchanges({simplified}) {
  let count = simplified ? 10 : 100;
  
  const {data, isFetching} = useGetCryptoCoinsQuery(count)

  if(isFetching) return 'Loading';
  
  return (
    <div>
      Exchanges
      {console.log(data)}
    </div>
  )
}
