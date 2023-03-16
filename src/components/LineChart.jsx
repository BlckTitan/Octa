import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  
export default function LineChart(props) {
    const coinPrice = [];
    const coinTimestamp = [];

    if(!props) return 'Loading chart data'

    for(let i = 0; i < props.history.length; i += 1){
        coinPrice.push(props.history[i].price)
        coinTimestamp.push(new Date(props.history[i].timestamp).toLocaleDateString())
    }


    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
    };

    
    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price in USD',
            data: coinPrice,
            fill: false,
            borderColor: '#01579b',
            backgroundColor: '#01579b',
          },
        ],
    };

  return (
    <div>
        <div className='header'>
            <h3>{props.name} Price chart</h3>
            <span>Current price: {props.currentPrice}</span>
        </div>
        <Line width={1300} height={400} options={options} data={data}/>
    </div>
  )
}
