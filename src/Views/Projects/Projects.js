import React, { Component } from 'react';

import './Projects.css';

import ProjectGallery from '../../Components/ProjectGallery/ProjectGallery.js';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <h1>&#123; Favorite Projects &#125;</h1>
                <ProjectGallery />
            </div>
        )
    }
}
