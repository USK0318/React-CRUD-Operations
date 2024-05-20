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

  const handleDelete = (staffId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this staff member?');
    if (shouldDelete) {
      fetch(`${baseUrl}/staffdelete/${staffId}/`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            // Refresh the staff list after successful deletion
            fetch(`${baseUrl}/staffget/`)
              .then(response => response.json())
              .then(data => {
                const updatedData = data.map(staffMember => ({
                  ...staffMember,
                  photo: `${baseUrl}${staffMember.photo}`
                }));
                setStaffData(updatedData);
              })
              .catch(error => console.error('Error fetching data:', error));
          } else {
            throw new Error('Failed to delete');
          }
        })
        .catch(error => console.error('Error deleting staff member:', error));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center',marginTop:'70px'}}>Staff Details</h1>
    <div className="staff-table-container">
      
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
              <td>{staffMember.salary} ₹</td>
              <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ cursor: 'pointer', color: 'blue' }}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }}
                  onClick={() => handleDelete(staffMember.stadd_id)} // Call handleDelete with staffId
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
    </div>
  );
}

export default Staff;
