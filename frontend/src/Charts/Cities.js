import React from 'react';
import Chart from 'react-apexcharts';

const Cities = () => {
  const options = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    series: [30, 40, 35, 50, 49],
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  return (
    <div>
        <h2>Cities Chart</h2>
      <Chart options={options} series={options.series} type="donut" height={400} />
    </div>
  );
};

export default Cities;
