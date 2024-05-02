import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Krishna = () => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/krishna/');
        const data = await response.json();
        setStudentsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStudents();
  }, []);

  const options = {
    chart: {
      type: 'line', // Set chart type to 'line'
    },
    series: [
      {
        name: 'Marks', // Series name
        data: studentsData.marks || [], // Marks data from API response
      },
    ],
    xaxis: {
      categories: studentsData.name || [], // Subject names as categories
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
