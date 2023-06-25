import React from 'react';
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
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' ,
    },
    title: {
      display: true,
      text: 'Company Achivements',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Brand 1',
      data: [3,8,19,29],
      borderColor: 'red',
      backgroundColor: 'blue',
    },
    {
      label: 'Brand 2',
      data: [5,4,18,24],
      borderColor: 'blue',
      backgroundColor: 'white',
    },
  ],
};

function Chart() {
  return(<div style={{height:300 ,width:500}  }> <Line options={options} data={data} /></div>)
}
export  default Chart;
