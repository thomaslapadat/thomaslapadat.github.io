import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './Contact.css';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contactContent">
                    <h1>&#123; Contact &#125;</h1>
                    <div className="contactInfo">
                        <div className="contactText">
                            <p >Thanks for checking out my website! If you would like to get in touch, my <span>contact info</span> is listed <span className="dynamic1">on the right</span><span className="dynamic2">below</span>.</p>
                            <p> Feel free to <span>click the link</span> below if you would like a copy of my resume:</p>
                            <span class="fa-li"><FontAwesomeIcon icon={faFile} /></span><a href='https://drive.google.com/file/d/1aMde2Xcijlp-I0Z1FD1XsJpmd_oSCGCh/view?usp=sharing' target="_blank" rel="noreferrer">[Click to check out my resume]</a>
                        </div>

                        <ul class="fa-ul">
                            <li><span class="fa-li"><FontAwesomeIcon icon={faPhone} /></span> thomaslapadat@gmail.com</li>
                            <li><span class="fa-li"><FontAwesomeIcon icon={faEnvelope} /></span>(604)-720-7410</li>
                            <li><span class="fa-li"><FontAwesomeIcon icon={faLinkedin} /></span><a href='https://www.linkedin.com/in/thomaslapadat/' target="_blank" rel="noreferrer">thomaslapadat</a></li>
                        </ul>
                        

                    </div>
                </div>

            </div>
        )
    }
}