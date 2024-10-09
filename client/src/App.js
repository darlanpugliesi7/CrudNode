import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import TaskManager from './components/TaskManager.js';
import CompletedTasks from './components/CompletedTasks.js';
import Tasks from './components/Tasks.js';

function App() {
  return (
    <header>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<TaskManager />} /> 
            <Route path="completedtasks" element={<CompletedTasks />} /> 
            <Route path="tasks" element={<Tasks />} /> 
          </Routes>
        </div>
      </Router>
    </header>
  );
}

export default App;
