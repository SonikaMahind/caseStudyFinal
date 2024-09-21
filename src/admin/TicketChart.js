import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TicketsChart = () => {
  const data = {
    labels: ['Category A', 'Category B', 'Category C'],
    datasets: [
      {
        label: 'Booked Tickets',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        data: [12, 19, 3],
      },
      {
        label: 'Cancelled Tickets',
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        data: [2, 3, 1], 
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default TicketsChart;
