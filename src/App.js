import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Anime from 'react-anime';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="full-height container">
          <Anime easing="easeInOutElastic"
            duration={2000}
            delay={(el, index) => index * 1700}
            opacity={[0, 1]}>
            <h2 className="Aligner-item">Hello</h2>
            <h2 className="Aligner-item">My name's Austin.</h2>
            <h2 className="Aligner-item">Lets make things together.</h2>
            <div className="links">
              
            </div>
          </Anime>
        </div >
      </div>
    );
  }
}

export default App;
