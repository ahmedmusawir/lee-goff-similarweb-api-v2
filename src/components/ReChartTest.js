import React from 'react';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const ReChartTest = () => {
  const data = [{ Nov: 10000401 }, { Dec: 11000201 }, { Jan: 12000301 }];

  return (
    <BarChart width={500} height={500} data={data}>
      <XAxis dataKey='name' />
      <YAxis />
      <Bar dataKey='Nov' fill='#8884d8' />
      <Bar dataKey='Dec' fill='#82ca9d' />
      <Bar dataKey='Jan' fill='#ffc658' />
    </BarChart>
  );
};

export default ReChartTest;
