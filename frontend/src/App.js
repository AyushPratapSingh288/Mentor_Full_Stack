import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import Discovery from './components/Discovery';
import Matchmaking from './components/Matchmaking';
import Notifications from './components/Notifications';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/matchmaking" element={<Matchmaking />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
