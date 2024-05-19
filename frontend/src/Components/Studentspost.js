import { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography, Container, Grid } from '@mui/material';
import axios from "axios";

function First({ baseUrl }) {
    const [roll, setRoll] = useState('');
    const [name, setName] = useState('');
    const [fname, setFname] = useState('');
    const [eng, setEng] = useState('');
    const [math, setMath] = useState('');
    const [sci, setSci] = useState('');
    const [hin, setHin] = useState('');
    const [tel, setTel] = useState('');
    const [city, setCity] = useState('');

    const handleInputChange = (event, setterFunction) => {
        setterFunction(event.target.value);
    };



    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        
        // Parse numeric values as integers
        const formData = [{
            roll: parseInt(roll),
            name: name,
            father_name: fname,
            english: parseInt(eng),
            maths: parseInt(math),
            science: parseInt(sci),
            hindi: parseInt(hin),
            telugu: parseInt(tel),
            city: city
        }];
        console.log('Form Data:', formData); // Log the form data for debugging


        axios.post(`${baseUrl}/studentpost/`, formData)
            .then((response) => {
                console.log(response);
                alert('Data submitted successfully!');
            })
            .catch((error) => {
                console.error('Error submitting data:', error);
                alert('Data not submitted!');
            });
    };

    return (
        <Container maxWidth="sm">
            <Card style={{ marginTop: '80px' }}>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        <b>Enter your Details</b>
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Roll No"
                                    variant="outlined"
                                    fullWidth
                                    value={roll}
                                    onChange={(e) => handleInputChange(e, setRoll)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    fullWidth
                                    value={name}
                                    onChange={(e) => handleInputChange(e, setName)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Father Name"
                                    variant="outlined"
                                    fullWidth
                                    value={fname}
                                    onChange={(e) => handleInputChange(e, setFname)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="English Marks"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={eng}
                                    onChange={(e) => handleInputChange(e, setEng)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Math Marks"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={math}
                                    onChange={(e) => handleInputChange(e, setMath)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Science Marks"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={sci}
                                    onChange={(e) => handleInputChange(e, setSci)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Hindi Marks"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={hin}
                                    onChange={(e) => handleInputChange(e, setHin)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Telugu Marks"
                                    variant="outlined"
                                    fullWidth
                                    type="number"
                                    value={tel}
                                    onChange={(e) => handleInputChange(e, setTel)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    value={city}
                                    onChange={(e) => handleInputChange(e, setCity)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
}

export default First;
