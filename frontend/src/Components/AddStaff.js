import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Button,
    TextField,
    Typography,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Container,
    Card,
    CardContent,
    CardActions,
} from '@mui/material';

const StaffCreate = ({ baseUrl }) => {
    const [staffId, setStaffId] = useState('');
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleStaffIdChange = (e) => {
        setStaffId(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('staff_id', staffId);
        formData.append('name', name);
        formData.append('salary', salary);
        formData.append('department', department);
        formData.append('photo', photo);

        try {
            const response = await axios.post(`${baseUrl}/poststaff/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            alert('Staff member created successfully!');
            // Reset the form fields
            setStaffId('');
            setName('');
            setSalary('');
            setDepartment('');
            setPhoto(null);
        } catch (error) {
            console.error('There was an error creating the staff member!', error);
            alert('There was an error creating the staff member!');
        }
    };

    return (
        <Container maxWidth="sm">
            <Card sx={{ mt: 15 }}>
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom>
                       <b> Create Staff Member</b>
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            label="Staff ID"
                            type="number"
                            value={staffId}
                            onChange={handleStaffIdChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <TextField
                            label="Salary"
                            type="number"
                            value={salary}
                            onChange={handleSalaryChange}
                            fullWidth
                            margin="normal"
                            required
                        />
                        <FormControl fullWidth margin="normal" required>
                            <InputLabel>Department</InputLabel>
                            <Select
                                value={department}
                                onChange={handleDepartmentChange}
                                label="Department"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="HR">HR</MenuItem>
                                <MenuItem value="Engineering">Engineering</MenuItem>
                                <MenuItem value="Marketing">Marketing</MenuItem>
                                <MenuItem value="Sales">Sales</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            component="label"
                            sx={{ my: 2 }}
                        >
                            Upload Photo
                            <input
                                type="file"
                                hidden
                                onChange={handlePhotoChange}
                            />
                        </Button>
                        <CardActions>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={{ height: '40px'}}
                                fullWidth
                            >
                                Create Staff Member
                            </Button>
                        </CardActions>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default StaffCreate;
