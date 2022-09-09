import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
// import $ from 'jquery';

import MyPicture from './img/me_with_background.png';
import LinkedIn from './img/linkedin.png';
import GitHub from './img/github.png';
import Resume from './img/resume.png';
import ResumePDF from './pdf/resume.pdf';

import Navbar from './components/navbar';
import RoleCard from './components/rolecard';
import ProjectCard from './components/projectcard';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      proj1title: 'Search Engine',
      proj1desc: 'A functional search engine in C on a small set of linked HTML files using set and map ADTs coded from scratch.',
      proj1href: 'https://github.com/jpfeff/tiny-search-engine',

      proj2title: 'AI Chess Player',
      proj2desc: 'A chess bot coded in Python using arrays of positional and material scores for board pieces along with the minimax algorithm to compute move favorability.',
      proj2href: 'https://github.com/jpfeff/chess-bot',

      proj3title: 'Hidden Markov Model Part-of-Speech Tagger',
      proj3desc: 'A tagger coded in Python that generates part-of-speech sequences for English sentences with over 95% accuracy using the Viterbi alogirthm.',
      proj3href: 'https://github.com/jpfeff/HMM-POS-tagger',

      proj4title: 'Wordle Solver',
      proj4desc: 'An engine and solver for the online word game capable of solving the puzzles in 3.5 guesses on average.',
      proj4href: 'https://github.com/jpfeff/wordle-solver',

      proj5title: 'Superstore Dataset Analysis',
      proj5desc: 'Data visualizations and a Python machine learning model to predict profit-margin ratio given sales data.',
      proj5href: 'https://github.com/jpfeff/DALI-Data-Challenge-22S',

      proj6title: 'Flow Fitness App',
      proj6desc: 'A goal-setting and exercise-tracking app designed and prototyped from scratch.',
      proj6href: 'https://www.figma.com/file/qcdSeh2oSrJ9UXB8OhKBuA/Flow-Case-Study?node-id=0%3A1',
    };
  }

  render() {
    return (
      <div>
        <Navbar resumeFile={ResumePDF} />
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
            <div className="icon-flex">
              <a target="_blank" href="https://www.linkedin.com/in/joshua-pfefferkorn/" rel="noreferrer">
                <img className="icon" alt="" src={LinkedIn} />
              </a>
              <a target="_blank" href="https://github.com/jpfeff/" rel="noreferrer">
                <img className="icon" alt="" src={GitHub} />
              </a>
              <a target="_blank" href={ResumePDF} rel="noreferrer">
                <img className="icon" alt="" src={Resume} />
              </a>
            </div>
          </div>
          <img className="image" alt="" src={MyPicture} />
        </div>
        <div id="about-divider" className="divider" />

        <div className="about-section-row-flex">
          <h3>ABOUT</h3>
          <div className="about-section-column-flex">
            <h4>Hi, it’s nice to meet you. I’m Josh.</h4>
            <p>I’m a student at Dartmouth College studying Computer Science and Digital Arts.
              I’m passionate about problem-solving, both through programming and elegant, user-conscious design.
              In my free time, I enjoy lifting weights, hiking and camping, and teaching myself new skills.
            </p>
          </div>
        </div>
        <div id="projects-divider" className="divider" />

        <div className="projects-section-row-flex">
          <div className="projects-section-card-column-flex">
            <div className="projects-section-card-row-flex">
              <ProjectCard href={this.state.proj1href} title={this.state.proj1title} desc={this.state.proj1desc} />
              <ProjectCard href={this.state.proj2href} title={this.state.proj2title} desc={this.state.proj2desc} />
            </div>
            <div className="projects-section-card-row-flex">
              <ProjectCard href={this.state.proj3href} title={this.state.proj3title} desc={this.state.proj3desc} />
              <ProjectCard target="_blank" href={this.state.proj4href} title={this.state.proj4title} desc={this.state.proj4desc} />
            </div>
            <div className="projects-section-card-row-flex">
              <ProjectCard href={this.state.proj5href} title={this.state.proj5title} desc={this.state.proj5desc} />
              <ProjectCard href={this.state.proj6href} title={this.state.proj6title} desc={this.state.proj6desc} />
            </div>
          </div>
          <h3 className="section-header">PROJECTS</h3>
        </div>

        <div id="contact-divider" className="divider" />

        <div className="contact-section-row-flex">
          <h3>CONTACT</h3>
          <div className="contact-section-column-flex">
            <h4>Thanks for stopping by!</h4>
            <p>
              <span>
                You can contact me through LinkedIn or by email at &nbsp;
              </span>
              <span id="my-email">
                <a target="_blank" href="mailto: joshua.d.pfefferkorn.24@dartmouth.edu" rel="noreferrer">joshua.d.pfefferkorn.24@dartmouth.edu</a>
              </span>
              <span>
                .
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
