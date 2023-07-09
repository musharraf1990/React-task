import React, { useState } from 'react';
import './App.css';
export const Signup = (props) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [cnic, setCnic] = useState('');
  const [cnicfront, setCnicfront] = useState('');
  const [cnicBack, setCnicBack] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="firstname">FirstName</label>
        
        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Enter FirstName" id="firstname"></input>
        
        <label htmlFor="lastname">LastName</label>
        
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="Enter LastName" id="lastname"></input>
        
        <label htmlFor="email">Email</label>
        
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" id="email"></input>
        
        <label htmlFor="username">UserName</label>
        
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" id="username"></input>
        
        <label htmlFor="password">Password</label>
        
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" id="password"></input>
        
        <label htmlFor="mobile">MobileNumber</label>
        
        <input value={mobile} onChange={(e) => setMobile(e.target.value)} type="tel" placeholder="Enter Mobile number" id="mobilenumber"></input>
        
        <label htmlFor="cnic">CNICNumber</label>
        
        <input value={cnic} onChange={(e) => setCnic(e.target.value)} type="text" placeholder="Enter CNIC Number" id="cnic"></input>
        
        <label htmlFor="cnicFront">CNIC Front Picture:</label>
        
        <input value={cnicfront} onChange={(e) => setCnicfront(e.target.value)} type="file" id="cnicFront" name="cnicFront" accept="image/*" required></input>
       
        <label htmlFor="cnicBack">CNIC Back Picture:</label>
       
        <input value={cnicBack} onChange={(e) => setCnicBack(e.target.value)} type="file" id="cnicBack" name="cnicBack" accept="image/*" required></input>
       
        <button type="submit">Signup</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
      </form>
    </div>
  );
};
