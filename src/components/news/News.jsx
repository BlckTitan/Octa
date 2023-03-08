import React from 'react';
import { useGetCryptoNewsQuery } from '../../app/newsSlice';

export default function News() {

  const {data, isLoading} = useGetCryptoNewsQuery()

  if( isLoading) return 'Loading'

  return (
    <div>{console.log(data)}</div>
  )
}
