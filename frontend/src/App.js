import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Studentsget from './Components/Studentsget';
import Studentspost from './Components/Studentspost';
import Dashboard from './Components/Dashboard';
import Chart from './Charts/Chart';
import Staffget from './Components/Staffget';
import AddStaff from './Components/AddStaff';




function App() {
  const BASE_URL = 'http://127.0.0.1:8000'; // Define your base URL here

  return (
    <>
      <div class ='final'>
      <Routes>
        <Route path="/" element={<Studentsget baseUrl={BASE_URL}/>}/>
        <Route path="/post" element={<Studentspost baseUrl={BASE_URL}/>} />
        <Route path="/dashboard" element={<Dashboard baseUrl={BASE_URL}/>} />
        <Route path="/chart/:userId" element={<Chart baseUrl={BASE_URL}/>} />
        <Route path='/staffinfo' element={<Staffget baseUrl={BASE_URL}/>} />
        <Route path='/stafpost' element={<AddStaff baseUrl={BASE_URL}/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
