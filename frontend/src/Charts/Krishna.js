import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Krishna = () => {
  const [studentsData, setStudentsData] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/krishna/');
      const data = await response.json();

      // Assuming data is an array of students
      setStudentsData(data); // Update state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []); // Empty dependency array means this effect runs only once on mount

  const options = {
    chart: {
      type: 'line',
    },
    series: [
      {
        name: 'Marks',
        data: studentsData.map(student => student.marks), // Map over studentsData
      },
    ],
    xaxis: {
      categories: studentsData.map(student => student.roll), // Map over studentsData
    },
  };

  return (
    <div>
      <h2>Krishna Chart</h2>
      {studentsData.length > 0 ? ( // Render chart only when studentsData is populated
        <Chart options={options} series={options.series} type="line" height={400} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Krishna;
