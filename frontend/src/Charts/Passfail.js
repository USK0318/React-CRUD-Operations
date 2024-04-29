import React from 'react';
import Chart from 'react-apexcharts';

const Passfail = () => {
  const options = {
    labels: ['Pass', 'Failed'],
    series: [80, 20],
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
        <h2>Pass Failed</h2>
      <Chart options={options} series={options.series} type="donut" height={400} />
    </div>
  );
};

export default Passfail;
