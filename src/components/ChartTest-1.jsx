import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Nov', 'Dec', 'Jan'],
  datasets: [
    {
      label: 'Number of People',
      data: [11154180, 18137068, 181390578],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
    },
  ],
};

const options = { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } };

const BarChart = () => {
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
