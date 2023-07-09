import React, { useState } from 'react';
import Popup from './popup';
import VerifyOTPScreen from './VerifyOTPScreen';

const LoginSignup = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle successful login/signup
  const handleLoginSignupSuccess = () => {
    setShowPopup(true);
  };

  // Render the login/signup form and handle form submission

  return (
    <div>
      {/* Render the login/signup form */}
      {/* Handle form submission and call handleLoginSignupSuccess() upon success */}

      {showPopup && (
        <Popup message="Login/Signup successful! Please enter OTP to continue" />
      )}

      {showPopup && <VerifyOTPScreen />}
    </div>
  );
};

export default LoginSignup;
