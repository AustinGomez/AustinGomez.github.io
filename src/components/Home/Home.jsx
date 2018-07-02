import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Anime from 'react-anime';

import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="full-height container">
                <Anime easing="easeInSine"
                    duration={300}
                    delay={(el, index) => index * 1500}
                    opacity={[0, 1]}>
                    <h2 className="Aligner-item">Hello</h2>
                    <h2 className="Aligner-item">My name's Austin.</h2>
                    <h2 className="Aligner-item">Lets make things together.</h2>
                    <div className="links">
                        <Link to="/">Another Link </Link>
                        <Link to="/">Hello</Link>
                    </div>
                </Anime>
            </div >
        )
    }
}