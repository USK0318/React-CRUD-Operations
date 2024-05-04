import React from 'react';
import { useParams } from 'react-router-dom';
import Highestmarks from './Highestmarks';

const Chart = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between', // Adjust as needed (e.g., 'space-around', 'center')
        flexWrap: 'wrap',
    };
    
    const cardStyle = {
        width: '1000px', // Increase width of the card
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px', // Increase padding inside the card
        margin: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Increase box shadow for a raised effect
        backgroundColor: '#f0f0f0', // Change background color
    };

    const { userId } = useParams(); // Get the userId parameter from the URL

    // Use the userId parameter in your component logic
    return (
        <div>
            <div style={containerStyle}>
                <div style={cardStyle}>
                    <Highestmarks/>
                </div>
            </div>
        </div>
    );
};

export default Chart;
