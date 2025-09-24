import React from 'react';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-spinner"></div>
        <p>Loading news...</p>
      </div>
    </div>
  );
};

export default Loader;