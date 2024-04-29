import React from 'react';
import Chart from 'react-apexcharts';

const Highestmarks = () => {
    const options = {
        chart: {
            type: 'bar',
        },
        series: [
            {
                name: 'Sales',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
            },
        ],
        colors: ['#0000FF', '#0000CC', '#000099', '#000066', '#000033', '#FF0000', '#00FF00', '#FFFF00', '#FF00FF'],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        },
    };

    return (
        <div>
            <h2>Highestmarks Chart</h2>
            <Chart options={options} series={options.series} type="bar" height={400} />
        </div>
    );
};

export default Highestmarks;