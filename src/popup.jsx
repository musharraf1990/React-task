import React from 'react';

export const Popup = ({ message }) => {
  return (
    <div className="popup">
      <p>{message}</p>
      {/* Add OTP input field and submit button */}
    </div>
  );
};

export default Popup;

