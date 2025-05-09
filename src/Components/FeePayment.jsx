import React, { useState } from 'react';
import '../Styles/fee.css'; // (we'll create this next)

const FeePayment = () => {
  const [paid, setPaid] = useState(false);

  const handlePayment = () => {
    setPaid(true);
    alert('Payment Successful! ₹50,000 Paid.');
  };

  return (
    <div className="fee-container">
      <h2>Hostel Fee Payment</h2>
      <p><strong>Student Name:</strong> John Doe</p>
      <p><strong>Student ID:</strong> SJIT2025ECE123</p>
      <p><strong>Amount:</strong> ₹50,000</p>
      <p><strong>Status:</strong> <span className={paid ? "paid" : "not-paid"}>
        {paid ? "Paid" : "Not Paid"}
      </span></p>
      {!paid && (
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
      )}
    </div>
  );
};

export default FeePayment;
