import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const Krishna = ({ courseId,baseUrl }) => {
  const [studentsData, setStudentsData] = useState([]);
  const [myName, setMyName] = useState('');
  const apiURL = `${baseUrl}/krishna/${courseId}`;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log('Fetched Data:', data);

        if (data.length > 0) {
          const { name, marks, myname } = data[0];

          // Transform the data into an array of objects
          const transformedData = name.map((name, index) => ({
            name,
            marks: marks[index],
          }));

          setStudentsData(transformedData);
          setMyName(myname); // Set the myName state
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchStudents();
  }, [apiURL]);

  console.log('Students Data:', studentsData);

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
      <h2>Total Marks of {myName}</h2>
      {studentsData.length > 0 ? (
        <Chart options={options} series={options.series} type="bar" height={400} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Krishna;
