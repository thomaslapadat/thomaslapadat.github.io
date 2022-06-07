import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="name">
                    <h1>Thomas Lapadat</h1>
                    <h2>Software Engineer</h2>
                </div>
                <div className="icons">
                    <a href="https://github.com/thomaslapadat"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/thomaslapadat/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="mailto:thomaslapadat@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
                <svg class="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </div>
        )
    }
}
