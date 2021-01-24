import React, { Component } from 'react';

// import cyberduck from '../../Assets/cyberduck.jpeg';
import quickpick from '../../Assets/quickpick.svg';
import recruitcare from '../../Assets/recruitcare.png';
import webicon from '../../Assets/webicon.svg';

import './Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h1>Projects</h1>
                <div className="gallery">
                    {/* <div className="project-item item1">
                        <h2>Dancing Robot</h2>
                    </div> */}
                    <div className="project-item item2">
                        <a href="https://github.com/richardechegaray/quickPick">
                            <h2>QuickPick</h2>
                            <img src={quickpick} alt="Food Tinder"></img>
                        </a>
                    </div>
                    <div className="project-item item3">
                        <a href="https://github.com/ubclaunchpad/club-manager-server">
                            <h2>RecruitCare</h2>
                            <img src={recruitcare} alt="Recruit App"></img>
                        </a>
                    </div>
                    <div className="project-item item4">
                        <a href="https://github.com/thomaslapadat/personal-website">
                            <h2>Website Porfolio</h2>
                            <img src={webicon} alt="Web Portfolio"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
