import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>
          <a href='#' style={linkStyle}>Has my SSN been stolen?</a></h1>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#007BFF', // Background color
  color: '#fff',             // Text color
  padding: '20px 0',         // Vertical and horizontal padding
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', // Box shadow for depth
  position: 'fixed',         // Fixed positioning at the top
  top: '0',                  // Positioned at the top
  left: '0',
  width: '100%',            // Full width
  zIndex: '1000',            // Ensure it's above other content
};

const containerStyle = {
  maxWidth: '1200px',        // Limit width for content
  margin: '0 auto',          // Center content horizontally
  padding: '0 20px',         // Horizontal padding for content
};

const titleStyle = {
  fontSize: '2rem',          // Large font size
  letterSpacing: '1px',      // Letter spacing for emphasis
  marginBottom: '10px',      // Space below the title
};

const linkStyle = {
  color: 'inherit',
}

export default Header;
