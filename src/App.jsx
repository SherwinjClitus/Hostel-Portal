import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import LeaveRequestForm from './Components/LeaveRequestForm';
import MessFeedbackForm from './Components/MessFeedbackForm';
import NoticeBoard from './Components/NoticeBoard';
import Home from './Components/Home'; // Import the Home component
import FeePayment from './Components/FeePayment'; // Import the FeePayment component
import SignIn from './Components/SignIn'; // Import the SignIn component
import './index.css'; // Make sure your global styles are imported

function App() {
  return (
    <Router>
      <Routes>
        {/* Login page route */}
        <Route path="/signin" element={<SignIn />} />

        {/* All other pages wrapped with Header */}
        <Route path="*" element={
          <>
            <Header />
            <div className="content-area">
              <Routes>
                <Route path="/leave" element={<LeaveRequestForm />} />
                <Route path="/feedback" element={<MessFeedbackForm />} />
                <Route path="/notice" element={<NoticeBoard />} />
                <Route path="/fee" element={<FeePayment />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}
export default App;
