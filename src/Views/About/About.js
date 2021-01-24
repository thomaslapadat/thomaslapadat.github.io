import React, { Component } from 'react';

import tux from '../../Assets/Tux_Mono.svg';
import languages from '../../Assets/languages.svg';
import frameworks from '../../Assets/frameworks.svg';
import tools from '../../Assets/tools.svg';

import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <h1>About</h1>
                    <div className="content">
                        <p>I am a <span>Software Developer</span> that likes to build <span>full-stack applications</span> with a preference for backend APIs and database management.
                        <br></br>
                        <br></br>
                        I am completing a <span>BASc in Computer Engineering</span> at the <span>University of British Columbia</span>. I enjoy skiing, playing volleyball, investing in stocks, and playing competitive video games.</p>
                        <img alt="beautiful bird" src={tux} />
                    </div>
                </div>
                <div className="about2">
                    <div className="skills">
                        <div className="category">
                            <h3>Lanuages</h3>
                            <img alt="Language icons" src={languages} />
                        </div>
                        <div className="category">
                            <h3>Frameworks</h3>
                            <img className="" alt="Framework icons" src={frameworks} />
                        </div>
                        <div className="category">
                            <h3>Tools</h3>
                            <img alt="Tools icons" src={tools} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}