import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends Component {
  render() {
    return (
      <ul className="navbar">
        <a className="navbar-text" href="google.com">About</a>
        <a className="navbar-text" href="google.com">Projects</a>
        <a className="navbar-text" href="google.com">Contact</a>
        <a className="navbar-text" href="google.com">Resume</a>
      </ul>
    );
  }
}

export default Navbar;
