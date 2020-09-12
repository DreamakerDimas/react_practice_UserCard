import React from 'react';

const UserCard = () => {
  return (
    <div className="user-card-container">
      <div className="card-header">
        <div className="card-bg"></div>
        <div className="card-avatar"></div>
      </div>
      <div className="card-body">
        <h4 className="user-fullname"></h4>
        <h5 className="user-work"></h5>
        <p className="user-description"></p>
      </div>
    </div>
  );
};
