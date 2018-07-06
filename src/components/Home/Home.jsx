import React, { Component } from 'react';
import headshot from '../../img/headshot.png'
import tbj from '../../img/logo.png'
import fr from '../../img/frlogo.png'
import lflogo from '../../img/lf-logo2.png'
import './Home.css';

export default class Home extends Component {
    render() {
        const companies = [
            {
                name: "Freshii",
                logo: fr
            },
            {
                name: "Toronto Blue Jays",
                logo: tbj
            },
            {
                name: "LyricFind",
                logo: lflogo
            }
        ]

        const listCompanies = companies.map((company, index) => {
            return (
                <div className="section" key={company.name+index}>
                    <div className="full-height container">
                        <h1>{company.name}</h1>
                        <img className="circle-img" src={company.logo} alt="company logo"/>
                    </div >
                </div>
            )
        })
        
        return (
            <div className="Home">
                <div className="top">
                    <div className="top-container">
                        <h1>Austin Gomez</h1>
                        <h2>Placeholder</h2>
                    </div>
                    <img className="circle-img" src={headshot} alt="headshot"/>
                </div>

                <div className="section">
                    <div className="full-height container">
                        <h1>Work Experience</h1>
                    </div >
                </div>
                {listCompanies}
                <div className="top">
                    <div className="top-container">
                        <h1>Austin Gomez</h1>
                        <h2>Placeholder</h2>
                    </div >
                </div>
            </div>
        )
    }
}