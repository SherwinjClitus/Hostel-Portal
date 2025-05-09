
import React, { useState } from 'react';
import '../Styles/forms.css';
import '../Styles/LeaveRequestForm.css';


const LeaveRequestForm = () => {
  const [name, setName] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Leave Request Submitted:\nName: ${name}\nRoom: ${roomNo}\nReason: ${reason}`);
  };

  return (
    <div className="form-container">
      <h2>Leave Request Form</h2>
      <form onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label className="label">Room Number</label>
        <input type="text" value={roomNo} onChange={(e) => setRoomNo(e.target.value)} required />

        <label className="label">Reason</label>
        <textarea rows="4" value={reason} onChange={(e) => setReason(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveRequestForm;

