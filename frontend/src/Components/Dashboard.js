import React from 'react';
import Telugu from '../Charts/Telugu';
import Cities from '../Charts/Cities';
import Topper from '../Charts/Topper';
import Highestmarks from '../Charts/Highestmarks';
import Passfail from '../Charts/Passfail';
import Krishna from '../Charts/Krishna';

function Dashboard() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between', // Adjust as needed (e.g., 'space-around', 'center')
    flexWrap: 'wrap',
  };

  const cardStyle = {
    width: '430px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    margin: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', width: '100%' }}>Students Dashboard</h1>
      
      {/* Telugu Chart Card */}
      <div style={cardStyle}>
        <Telugu />
      </div>

      {/* Highest Marks Chart Card */}
      <div style={cardStyle}>
        <Highestmarks />
      </div>

      {/* Cities Chart Card */}
      <div style={cardStyle}>
        <Cities />
      </div>

      {/* Pass/Fail Chart Card */}
      <div style={cardStyle}>
        <Passfail />
      </div>

      {/* Krishna Chart Card with Input Parameter */}
      <div style={cardStyle}>
        {/* Pass the courseId as a prop to Krishna */}
        <Krishna courseId="3" />
      </div>

      {/* Topper Chart Card */}
      <div style={cardStyle}>
        <Topper />
      </div>
    </div>
  );
}

export default Dashboard;
