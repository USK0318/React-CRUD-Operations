import React, { useEffect, useState } from 'react';
import './Staff.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function Staff({ baseUrl }) {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/staffget/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Prepend the base URL to the photo paths
        const updatedData = data.map(staffMember => ({
          ...staffMember,
          photo: `${baseUrl}${staffMember.photo}`
        }));
        setStaffData(updatedData);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [baseUrl]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="staff-table-container">
      <h1 style={{ textAlign: 'center' }}>Staff Details</h1>
      <table className="staff-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staffMember) => (
            <tr key={staffMember.stadd_id}>
              <td>
                <img
                  src={staffMember.photo}
                  alt={staffMember.name}
                  className="staff-photo"
                />
              </td>
              <td>{staffMember.stadd_id}</td>
              <td>{staffMember.name}</td>
              <td>{staffMember.department}</td>
              <td>${staffMember.salary}</td>
              <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ cursor: 'pointer', color: 'blue' }}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        style={{
          marginTop: '20px',
          padding: '10px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
        onClick={() => window.location.href = '/stafpost'}
      >
        Add Staff
      </button>
    </div>
  );
}

export default Staff;
