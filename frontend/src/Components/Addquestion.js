import React, { useState } from 'react';
import { Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, Card, CardContent, Typography, Box } from '@mui/material';

function AddQuestion() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ a: '', b: '', c: '', d: '' });
  const [answer, setAnswer] = useState('');

  const handleOptionChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    console.log({ question, options, answer });
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 10 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              <b>Add Question</b>
            </Typography>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Question"
                variant="outlined"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Option A"
                variant="outlined"
                name="a"
                value={options.a}
                onChange={handleOptionChange}
                required
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Option B"
                variant="outlined"
                name="b"
                value={options.b}
                onChange={handleOptionChange}
                required
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Option C"
                variant="outlined"
                name="c"
                value={options.c}
                onChange={handleOptionChange}
                required
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Option D"
                variant="outlined"
                name="d"
                value={options.d}
                onChange={handleOptionChange}
                required
              />
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="correct-answer-label">Correct Answer</InputLabel>
              <Select
                labelId="correct-answer-label"
                id="correct-answer"
                value={answer}
                label="Correct Answer"
                onChange={(e) => setAnswer(e.target.value)}
                required
              >
                <MenuItem value="a">Option A</MenuItem>
                <MenuItem value="b">Option B</MenuItem>
                <MenuItem value="c">Option C</MenuItem>
                <MenuItem value="d">Option D</MenuItem>
              </Select>
            </FormControl>
            <Box mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Add Question
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default AddQuestion;
