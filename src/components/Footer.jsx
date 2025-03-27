import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Name and Role */}
        <div className="footer-text">
          <h2>Swasthik</h2>
          <p>Full Stack Developer | MERN Stack</p>
        </div>

        {/* Copyright */}
        <div className="footer-copy" style={{ color: "gray" }}>
          © {new Date().getFullYear()} Swasthik. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
