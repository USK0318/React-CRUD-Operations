import React from 'react';
import { useParams } from 'react-router-dom';
import Passfail from './Passfail';
import Krishna from './Krishna';

const Chart = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center', // Center align items horizontally
        alignItems: 'center', // Center align items vertically
        height: '100vh', // Adjust height as needed
    };
    
    const cardStyle = {
        width: '900px', // Set the width of each card
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px', // Increase padding inside each card
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Increase box shadow for a raised effect
        backgroundColor: '#f0f0f0', // Change background color
    };

    const { userId } = useParams(); // Get the userId parameter from the URL

    return (
      <div>
        <div style={containerStyle}>
            <div style={{ ...cardStyle, marginRight: '10px' }}>
                <Krishna courseId={userId} />
            </div>
        </div>
        <div style={containerStyle}>
            <div style={{ ...cardStyle, marginRight: '10px' }}>
                <Passfail />
            </div>
          </div>
      </div>
    );
};

export default Chart;
