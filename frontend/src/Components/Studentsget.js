import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit ,faChartPie } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal'; // Import a modal library
import { Link } from 'react-router-dom';

const Studentsget = () => {
  const [students, setStudents] = useState([]);
  const [editedStudent, setEditedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to fetch students data
  const fetchStudents = () => {

    fetch('http://127.0.0.1:8000/studentsget/')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    fetchStudents();
  }, []); // Fetch data on component mount

  const handleDelete = (roll) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this student?');
    
    if (shouldDelete) {
      fetch(`http://127.0.0.1:8000/studentdelete/${roll}/`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            fetchStudents(); // Refresh student list after successful deletion
            console.log('Student deleted successfully:', roll);
          } else {
            throw new Error('Failed to delete');
          }
        })
        .catch(error => console.error('Error deleting student:', error));
    }
  };

  const handleEdit = (student) => {
    setEditedStudent(student); // Set the edited student details
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setEditedStudent(null); // Clear the edited student details
  };

  const saveEditedData = () => {
    fetch(`http://127.0.0.1:8000/studentedit/${editedStudent.roll}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedStudent),
    })
      .then(response => {
        if (response.ok) {
          fetchStudents(); // Refresh student list after successful update
          closeModal(); // Close the modal
          console.log('Student updated successfully:', editedStudent.roll);
          alert('Student updated successfully:', editedStudent.roll);
        } else {
          throw new Error('Failed to update student');
        } 
      })
      .catch(error => console.error('Error updating student:', error));

    setEditedStudent(null);

  };

  return (
    <div className="table-container">
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Father's Name</th>
            <th>English</th>
            <th>Maths</th>
            <th>Science</th>
            <th>Hindi</th>
            <th>Telugu</th>
            <th>City</th>
            <th>Actions</th>
            <th>Dashboard</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.roll}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.father_name}</td>
              <td>{student.english}</td>
              <td>{student.maths}</td>
              <td>{student.science}</td>
              <td>{student.hindi}</td>
              <td>{student.telugu}</td>
              <td>{student.city}</td>
              <td>
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => handleEdit(student)}
                  style={{ cursor: 'pointer', color: 'blue' }}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(student.roll)}
                  style={{ cursor: 'pointer', color: 'red', marginLeft: '10px' }}
                />
              </td>
              <td>
              <Link key={student.roll} to={`/chart/${student.roll}`}>
                <FontAwesomeIcon
                  icon={faChartPie}
                  style={{ cursor: 'pointer', color: 'green', marginLeft: '30px' }}
                />
              </Link>
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
        onClick={() => window.location.href = '/post'}
      >
        Add Student
      </button>
      <button
        style={{
          marginTop: '20px',
          marginLeft: '50px',
          padding: '10px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
        onClick={() => window.location.href = '/dashboard'}
      >
        Dashboard
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
  {editedStudent && (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Edit Student</h2>
      <label style={{ display: 'block', marginBottom: '8px' }}>Name:</label>
      <input
        type="text"
        value={editedStudent.name}
        onChange={e => setEditedStudent({ ...editedStudent, name: e.target.value })}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <label style={{ display: 'block', marginBottom: '8px' }}>Father's Name:</label>
      <input
        type="text"
        value={editedStudent.father_name}
        onChange={e => setEditedStudent({ ...editedStudent, father_name: e.target.value })}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <label style={{ display: 'block', marginBottom: '8px' }}>English:</label>
      <input
        type="text"
        value={editedStudent.english}
        onChange={e => setEditedStudent({ ...editedStudent, english: e.target.value })}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <label style={{ display: 'block', marginBottom: '8px' }}>Maths:</label>
      <input
        type="text"
        value={editedStudent.maths}
        onChange={e => setEditedStudent({ ...editedStudent, maths: e.target.value })}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <label style={{ display: 'block', marginBottom: '8px' }}>Science:</label>
      <input
        type="text"
        value={editedStudent.science}
        onChange={e => setEditedStudent({ ...editedStudent, science: e.target.value })}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <label style={{ display: 'block', marginBottom: '8px' }}>Hindi:</label>
      <input
        type="text"
        value={editedStudent.hindi}
        onChange={e => setEditedStudent({ ...editedStudent, hindi: e.target.value })}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <label style={{ display: 'block', marginBottom: '8px' }}>Telugu:</label>
      <input
        type="text"
        value={editedStudent.telugu}
        onChange={e => setEditedStudent({ ...editedStudent, telugu: e.target.value })}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <label style={{ display: 'block', marginBottom: '8px' }}>City:</label>
      <input
        type="text"
        value={editedStudent.city}
        onChange={e => setEditedStudent({ ...editedStudent, city: e.target.value })}
        style={{ width: '100%', padding: '8px', marginBottom: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <br />
      
      <div style={{ textAlign: 'center' }}>
        <button
          onClick={saveEditedData}
          style={{ padding: '10px 20px', marginRight: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Save
        </button>
        <button
          onClick={closeModal}
          style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Cancel
        </button>
      </div>
    </div>
  )}
</Modal>

    </div>
  );
};

export default Studentsget;
