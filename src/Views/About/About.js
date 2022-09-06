import React, { Component } from 'react';

import portrait from '../../Assets/self_portrait.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPenRuler, faCode, faNetworkWired, faUserShield, faWifi, faMicrochip, faComputer, faCalculator, faPiggyBank, faChartLine, faScaleBalanced, faTags, faC, faE, faTable, faBolt, faCodeBranch, faUserAstronaut, faDatabase, faBell, faCubes } from '@fortawesome/free-solid-svg-icons'
import { faPython, faJsSquare, faNodeJs, faReact, faUbuntu, faAws, faGoogle, faUnity, faDocker } from '@fortawesome/free-brands-svg-icons'

import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <h1>&#123; About &#125;</h1>
                    <div className="content">
                        <p>I am a <span>Software Engineer</span> with an interest in backend development and machine learning.
                            <br></br>
                            <br></br>
                            I recently completed my <span>BASc in Computer Engineering</span> with <span>distinction</span> and a <span>Minor in Commerce</span> at the <span>University of British Columbia</span>.
                            <br></br>
                            <br></br>
                            Outside of work and school, my favorite sports include skiing, volleyball, and badminton. I also enjoy learning new songs on my guitar and playing music with friends.</p>
                        <img alt="Self portrait" src={portrait} />
                    </div>
                </div>
                <div className="about2">
                    <div className="skills">
                        <div className="category">
                            <h3>Relevant Coursework</h3>
                            <h4>/* Computer Engineering */</h4>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><FontAwesomeIcon icon={faPenRuler} /></span> - Software Design Principles</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faCode} /></span>- Algorithms and Data Structures</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faNetworkWired} /></span>- Distributed Systems</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faUserShield} /></span>- Cybersecurity</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faWifi} /></span>- Computer Communications</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faMicrochip} /></span>- Machine Learning</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faComputer} /></span>- Operating Systems</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faCalculator} /></span>- Statistics</li>
                            </ul>

                            <h4>/* Commerce Minor */</h4>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><FontAwesomeIcon icon={faPiggyBank} /></span>- Economics</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faChartLine} /></span>- Finance</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faScaleBalanced} /></span>- Accounting</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faTags} /></span>- Marketing</li>
                            </ul>

                        </div>
                        <div className="category">

                            <h3>Tools</h3>
                            <ul class="fa-ul">
                                <li><span class="fa-li"><FontAwesomeIcon icon={faCodeBranch} /></span>- Git</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faUserAstronaut} /></span>- Postman</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faUbuntu} /></span>- Ubuntu</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faAws} /></span>- Amazon Web Services</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faGoogle} /></span>- Google Compute Engine</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faDatabase} /></span>- MongoDB</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faUnity} /></span>- Unity Game Engine</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faBell} /></span>- Twilio</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faCubes} /></span>- Anaconda</li>
                                <li><span class="fa-li"><FontAwesomeIcon icon={faDocker} /></span>- Docker</li>
                            </ul>
                        </div>
                        <div className="category">
                            <div>
                                <h3>Primary Languages</h3>
                                {/* <img alt="Tools icons" src={tools} /> */}
                                <ul class="fa-ul">
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faCoffee} /></span>- Java</li>
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faPython} /></span>- Python</li>
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faC} /></span>- C/C++</li>
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faJsSquare} /></span>- JavaScript</li>
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faDatabase} /></span>- SQL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="category">
                            <div>
                                <h3>Libraries + Frameworks</h3>
                                {/* <img className="" alt="Framework icons" src={frameworks} /> */}
                                <ul class="fa-ul">
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faNodeJs} /></span>- NodeJS</li>
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faE} /></span>- Express</li>
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faReact} /></span>- React</li>
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faTable} /></span>- Pandas + Numpy</li>
                                    <li><span class="fa-li"><FontAwesomeIcon icon={faBolt} /></span>- FastAPI</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}