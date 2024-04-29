import React from 'react';
import Chart from 'react-apexcharts';

const Krishna = () => {
  const options = {
    chart: {
      type: 'line',
    },
    series: [
      {
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  };

  return (
    <div>
        <h2>Krishna Chart</h2>
      <Chart options={options} series={options.series} type="line" height={400} />
    </div>
  );
};

export default Krishna;
