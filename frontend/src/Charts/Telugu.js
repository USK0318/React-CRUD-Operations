import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Telugu = (
  { baseUrl }
) => {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`${baseUrl}/telugustudents`);
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
    chart: {
      type: 'bar',
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
  };

  return (
    <div>
      <h2>Telugu Chart</h2>
      {studentsData.length > 0 ? (
        <Chart options={options} series={options.series} type="bar" height={400} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Telugu;
