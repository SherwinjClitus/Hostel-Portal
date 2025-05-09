
import React, { useState } from 'react';
import '../Styles/MessFeedbackForm.css'; // Import the CSS file

const MessFeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}\nRating: ${rating}`);
  };

  return (
    <div className="form-container">
      <h2>Mess Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Feedback Textarea */}
        <div>
          <label htmlFor="feedback" className="label">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            rows="5"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here"
            required
          />
        </div>

        {/* Rating Buttons */}
        <div className="rating-buttons">
          {[1, 2, 3, 4, 5].map((rate) => (
            <button
              key={rate}
              type="button"
              onClick={() => setRating(rate)}
              className={`rating-button ${rating >= rate ? 'selected' : ''}`}
            >
              {rate}
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default MessFeedbackForm;

