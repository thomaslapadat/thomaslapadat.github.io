import React, { Component } from 'react';

import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <h1>About</h1>
                    <p>I am a <span>Software Developer</span> that likes to build <span>full-stack applications</span> with a preference for backend APIs and database management.
                    <br></br>
                    <br></br>
                    I am completing a <span>BASc in Computer Engineering</span> at the <span>University of British Columbia</span>. I enjoy skiing, playing volleyball, investing in stocks, and playing competitive video games.</p>
                </div>
                <div className="skills">
                    <div className="category">
                        <h3>Lanuages</h3>
                        <p>Language A B C</p>
                    </div>
                    <div className="category">
                        <h3>Lanuages</h3>
                        <p>Language A B C</p>
                    </div>
                    <div className="category">
                        <h3>Lanuages</h3>
                        <p>Language A B C</p>
                    </div>
                </div>
            </div>
        )
    }
}