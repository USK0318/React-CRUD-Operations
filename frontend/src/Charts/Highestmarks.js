import React from 'react';
import Chart from 'react-apexcharts';
import { useState, useEffect } from 'react';

const Highestmarks = () => {
    const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/highmarks/');
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
                name: 'Highestmarks',
                data: studentsData.map(student => student.marks),
            },
        ],
        colors: ['#0000FF', '#0000CC', '#000099', '#000066', '#000033', '#FF0000', '#00FF00', '#FFFF00', '#FF00FF'],
        xaxis: {
            categories: studentsData.map(student => student.name),
        },
    };

    return (
        <div>
            <Chart options={options} series={options.series} type="bar" height={400} />
        </div>
    );
};

export default Highestmarks;