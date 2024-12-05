import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Timeline from './components/Timeline';
import Navbar from './components/Navbar';
// import './styles/tailwind.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, date: new Date().toLocaleDateString(), description: `Description for ${task}` }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login onLogin={(email, password) => console.log("Login", email, password)} />} />
            <Route path="/register" element={<Register onRegister={(email, password) => console.log("Register", email, password)} />} />
            <Route path="/tasks" element={
              <>
                <AddTask addTask={addTask} />
                <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
                <Timeline tasks={tasks} />
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
