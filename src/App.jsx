import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './components/Counter.jsx';
import UserDataForm from './components/UserDataForm.jsx';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/user-form" element={<UserDataForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
