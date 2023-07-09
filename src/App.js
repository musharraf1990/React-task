import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './signup';
import { Login } from './login';
import { VerifyOTPScreen } from './VerifyOTPScreen';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Profile from './Profile';
import ChangePassword from './ChangePassword';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {/* {currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Signup />} */}
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<VerifyOTPScreen />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<ChangePassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

