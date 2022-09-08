import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
// import $ from 'jquery';

import Navbar from './components/navbar';
import MyPicture from './img/me_with_background.png';
import RoleCard from './components/rolecard';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  render() {
    return (
      <div>
        <Navbar />
        <div id="main-row-flex">
          <div id="main-column-flex">
            <div id="my-name">
              <h1>Joshua</h1>
              <h1>Pfefferkorn</h1>
            </div>
            <div className="card-flex">
              <RoleCard text="Software Engineer" />
              <RoleCard text="UI/UX Designer" />
            </div>
          </div>
          <img className="image" alt="" src={MyPicture} />
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
