import React,{useState} from "react"
 
 
 export const Login = (props) => {
   const [cnic,setcnic]=useState('');
   const [email,setemail]=useState('');
   const [password,setpassword]=useState('');
   const handlesubmit =(e) => {
      e.preventDefault();
      console.log(email);}
    return (
      <div  className="auth-form-container">
         <h2>Login</h2>
         <form className="login-form" onSubmit={handlesubmit}>
            <label for="cnic">CNIC</label> 
            <input value={cnic} onChange={(e) => setcnic(e.target.value)} type="text" placeholder="Enter CNIC Number" id="cnic"></input>
            <label for="email">Email</label> 
            <input value={email} onChange={(e) => setemail(e.target.value)} type="Email" placeholder=" Enter Email" id="email"></input>
            <label for="password">password</label>
            <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Enter Password" id="password"></input>
            <button type="submit">Login</button>
         </form>
      </div>
    );
   }