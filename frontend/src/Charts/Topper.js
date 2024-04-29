import React from 'react';
import Chart from 'react-apexcharts';

const Topper = () => {
  const options = {
    chart: {
      type: 'bar',
    },
    series: [
      {
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8', '#F535AA'],
      },
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
  };

  return (
    <div>
        <h2>Topper Chart</h2>
      <Chart options={options} series={options.series} type="bar" height={400} />
    </div>
  );
};

export default Topper;
