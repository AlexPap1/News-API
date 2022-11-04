import React from 'react';

const Footer = () => {
  return (
    <footer className = "footer">
      <div>
        <span>Your News Today &copy;{new Date().getFullYear()} Alex Pappagallo </span>
        <a className ="contact" href="mailto:arpappagallo@gmail.com">
          <li className="contact-link" >Contact Us!</li>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
