import React, { Component } from 'react';

import cyberduck from '../../Assets/cyberduck.jpeg';

import './Projects.css';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h1>Projects</h1>
                <div className="gallery">
                    <div className="project-item item1">
                        <h2>Dancing Robot</h2>
                    </div>
                    <div className="project-item item2">
                        <h2>QuickPick</h2>
                    </div>
                    <div className="project-item item3">
                        <h2>RecruitCare</h2>
                    </div>
                    <div className="project-item item4">
                        <h2>Website Porfolio</h2>
                    </div>
                </div>
            </div>
        )
    }
}
