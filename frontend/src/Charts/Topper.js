import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Topper = (
  { baseUrl }
) => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`${baseUrl}/topper/`);
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
  }, []);

  const options = {
    chart: {
      type: 'line', // Set chart type to line
    },
    series: [
      {
        name: 'Marks',
        data: studentsData.map(student => student.marks),
      },
    ],
    xaxis: {
      categories: studentsData.map(student => student.name),
    },
    colors: ['#008FFB'], // Line color
  };

  return (
    <div>
      <h2>Topper Chart </h2>
      <Chart options={options} series={options.series} type="line" height={400} />
    </div>
  );
};

export default Topper;
