import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel, Button, Box, Paper } from '@mui/material';

const exampleData = [
  {
    question: "What is the capital of France?",
    options: { a: "Berlin", b: "Madrid", c: "Paris", d: "Rome" },
    answer: "c"
  },
  {
    question: "What is 2 + 2?",
    options: { a: "3", b: "4", c: "5", d: "6" },
    answer: "b"
  },
  {
    question: "What is the capital of France?",
    options: { a: "Berlin", b: "Madrid", c: "Paris", d: "Rome" },
    answer: "c"
  },
  {
    question: "What is 2 + 2?",
    options: { a: "3", b: "4", c: "5", d: "6" },
    answer: "b"
  },
  {
    question: "What is the capital of France?",
    options: { a: "Berlin", b: "Madrid", c: "Paris", d: "Rome" },
    answer: "c"
  },
  {
    question: "What is 2 + 2?",
    options: { a: "3", b: "4", c: "5", d: "6" },
    answer: "b"
  }
];

function ViewQuestion() {
  const [selectedAnswers, setSelectedAnswers] = useState(
    exampleData.map(() => '')
  );

  const handleAnswerChange = (index, value) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = value;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    console.log('Selected answers:', selectedAnswers);
  };

  const answeredCount = selectedAnswers.filter(answer => answer !== '').length;

  return (
    <Container maxWidth="sm">
      <Box sx={{ position: 'relative' }}>
        <Box
          component={Paper}
          elevation={6}
          sx={{
            position: 'fixed',
            top: 16,
            right: 16,
            padding: 2,
            paddingX: 3,
            width: 250,
            zIndex: 1000,
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Dashboard
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <b>Total Questions:</b> {exampleData.length}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <b>Questions Answered:</b> {answeredCount}
          </Typography>
          <Typography variant="body1">
            <b>Questions Unanswered:</b> {exampleData.length - answeredCount}
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          {exampleData.map((q, index) => (
            <Card key={index} sx={{ mt: 3, borderRadius: 2, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  <b>{q.question}</b>
                </Typography>
                <RadioGroup
                  value={selectedAnswers[index]}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                >
                  {Object.entries(q.options).map(([key, value]) => (
                    <FormControlLabel
                      key={key}
                      value={key}
                      control={<Radio />}
                      label={`${key.toUpperCase()}: ${value}`}
                      sx={{ marginLeft: 1 }}
                    />
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
          <Box mt={3} display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ViewQuestion;
