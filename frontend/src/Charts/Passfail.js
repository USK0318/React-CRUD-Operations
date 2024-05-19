import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const PassFail = ({
  baseUrl
}) => {
  const [passFailData, setPassFailData] = useState([]);

  useEffect(() => {
    const fetchPassFailData = async () => {
      try {
        const response = await fetch(`${baseUrl}/fail/`);
        const data = await response.json();

        // Assuming the API response is like { "pass": [5, 2] }
        setPassFailData(data.pass);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPassFailData();
  }, []);

  const options = {
    labels: ['Pass', 'Failed'],
    series: passFailData, // Use the fetched passFailData here
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

export default PassFail;
