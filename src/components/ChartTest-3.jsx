import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Nov', 'Dec', 'Jan'],
  datasets: [
    {
      label: 'Number of People',
      data: [11154180, 18137068, 18139057],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
    },
  ],
};

const options = {
  scales: {
    y: [
      {
        ticks: { beginAtZero: true, color: '#ffffff' },
        grid: { color: 'white' },
      },
    ],
  },
  color: 'white',
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
    },
  },
};

const BarChart = () => {
  return (
    <div style={{ color: 'white' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
