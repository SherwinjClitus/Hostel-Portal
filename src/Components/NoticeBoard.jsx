
import React from 'react';
import '../Styles/notice.css';

const notices = [
  { title: 'Water Supply Alert', content: 'Water supply will be off from 10 AM to 2 PM on 15th April.' },
  { title: 'Guest Policy Update', content: 'Parents are not allowed post 6 PM until further notice.' },
  { title: 'WIFI - Maintenance ', content: 'WiFI maintenance on 16th April from 1 PM to 3 PM.' },
];

const NoticeBoard = () => {
  return (
    <div className="notice-board">
      <h2>📢 Hostel Notice Board</h2>
      <div className="notice-list">
        {notices.map((notice, index) => (
          <div className="notice-card" key={index}>
            <h3>{notice.title}</h3>
            <p>{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
