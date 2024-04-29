import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Studentsget from './Components/Studentsget';
import Studentspost from './Components/Studentspost';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
      <div class ='final'>
      <Routes>
        <Route path="/" element={<Studentsget />} />
        <Route path="/post" element={<Studentspost />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
