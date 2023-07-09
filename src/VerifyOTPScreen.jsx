import React from 'react';
import { useHistory } from 'react-router-dom';

export const VerifyOTPScreen = () => {
  return (
    <div>
      <form className="signup-form">
        <label htmlFor="otp">Enter OTP only one Digit</label>
        <input type="number" id="firstname" />
        <label htmlFor="otp">Enter OTPonly one Digit</label>
        <input type="number" id="firstname" />
        <label htmlFor="otp">Enter OTP only one Digit</label>
        <input type="number" id="firstname" />
        <label htmlFor="otp">Enter OTP only one Digit</label>
        <input type="number" id="firstname" />
        <input type="submit" value="Submit" />
      </form>
    </div> 
 
    
    
  );
};

export default VerifyOTPScreen;
