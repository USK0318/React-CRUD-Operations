import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Studentsget from './Components/Studentsget';
import Studentspost from './Components/Studentspost';
import Dashboard from './Components/Dashboard';
import Chart from './Charts/Chart';

function App() {
  return (
    <>
      <div class ='final'>
      <Routes>
        <Route path="/" element={<Studentsget />} />
        <Route path="/post" element={<Studentspost />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chart/:userId" element={<Chart />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
