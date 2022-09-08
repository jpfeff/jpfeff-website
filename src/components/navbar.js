import React from 'react';

function Navbar(props) {
  const resume = props.resumeFile;

  return (
    <ul className="navbar">
      <a className="navbar-text" href="#about-divider">About</a>
      <a className="navbar-text" href="#projects-divider">Projects</a>
      <a className="navbar-text" href="#contact-divider">Contact</a>
      <a className="navbar-text" href={resume}>Resume</a>
    </ul>
  );
}

export default Navbar;
