import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div style={{ marginTop: "5rem" }}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="mb-4">About Me</h1>
            <p className="lead">
              Hello! I'm <strong>Swasthik</strong>, a passionate Full Stack
              Developer specializing in the MERN stack. I enjoy building
              scalable web applications and exploring new technologies.
            </p>
          </div>
        </div>

        <div
          className="row mt-5 "
          style={{
            marginLeft: "30rem",
          }}
        >
          <div className="col-md-6">
            <h3>My Skills</h3>
            <ul className="list-group">
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">Express.js</li>
              <li className="list-group-item">React.js</li>
              <li className="list-group-item">Node.js</li>
            </ul>
          </div>

          <div className="md-6" style={{ marginTop: "5rem" }}>
            <h3>Education</h3>
            <p>
              Bachelor of Engineering in Computer Science - Shree Devi Institute
              of Technology
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
