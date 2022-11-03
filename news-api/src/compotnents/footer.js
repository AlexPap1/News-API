import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed-bottom" >
      <div id="footer">
        <span className='footer'>Your News Today &copy;{new Date().getFullYear()} Alex Pappagallo</span>
      </div>
    </footer>
  );
};

export default Footer;
