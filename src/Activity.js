import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { options } from './Chart';

ChartJS.register(ArcElement, Tooltip, Legend);




export const data = {
    
   
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Company Activity',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'blue',
        'red',
        'pink',
        'green',
        'yellow',
        
      ],
      borderColor: [
        'blue',
        'red',
        'pink',
        'green',
        'yellow',
        
      ],
      borderWidth: 1,
    },
  ],
};

function Activity() {
  return (
  <div style={{height:200, width:230}}>
  <Pie data={data}  options={options} />
  </div>)
}
export default Activity;
