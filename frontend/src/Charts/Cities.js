import React from 'react';
import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';

const Cities = () => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/citystudents/');
        const data = await response.json();

        // Assuming data is in the format you provided
        const names = data[0].name;
        const marks = data[0].marks;

        // Transform the data into an array of objects
        const transformedData = names.map((name, index) => ({
          name: name,
          marks: marks[index]
        }));

        setStudentsData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStudents();
  }, []); // Empty dependency array to run effect only once after initial render

  const options = {
    labels: studentsData.map(student => student.name),
    series: studentsData.map(student => student.marks),
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
