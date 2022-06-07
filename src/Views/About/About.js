import React, { Component } from 'react';

import portrait from '../../Assets/self_portrait.jpg';
import languages from '../../Assets/languages.svg';
import frameworks from '../../Assets/frameworks.svg';
import tools from '../../Assets/tools.svg';

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
                            {/* <h4>Computer Engineering</h4> */}
                            <ul>
                                <li>Software Design Principles</li>
                                <li>Algorithms and Data Structures</li>
                                <li>Distributed Systems</li>
                                <li>Cybersecurity</li>
                                <li>Computer Communications</li>
                                <li>Machine/Deep Learning</li>
                                {/* <li>Signals and Systems</li> */}
                                <li>Operating Systems</li>
                                <li>Statistics</li>
                                <li>Economics</li>
                                <li>Finance</li>
                                <li>Accounting</li>
                                <li>Marketing</li>
                            </ul>
                        </div>
                        <div className="category">
                            <h3>Primary Languages</h3>
                            {/* <img alt="Tools icons" src={tools} /> */}
                            <ul>
                                <li>Java</li>
                                <li>Python</li>
                                <li>C/C++</li>
                                <li>JavaScript</li>
                            </ul>
                            <h3>Libraries + Frameworks</h3>
                            {/* <img className="" alt="Framework icons" src={frameworks} /> */}
                            <ul>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Pandas + Numpy</li>
                                <li>FastAPI</li>
                            </ul>
                        </div>
                        <div className="category">
                            
                            <h3>Tools</h3>
                            {/* <img alt="Tools icons" src={tools} /> */}
                            <ul>
                                <li>Git</li>
                                <li>Postman</li>
                                <li>Ubuntu</li>
                                <li>Amazon Web Services</li>
                                <li>Google Compute Engine</li>
                                <li>MongoDB</li>
                                <li>Unity Game Engine</li>
                                <li>Twilio</li>
                                <li>Anaconda</li>
                                <li>Docker</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}