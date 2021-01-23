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
                    <a><FontAwesomeIcon icon={faGithub} /></a>
                    <a><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
            </div>
        )
    }
}
