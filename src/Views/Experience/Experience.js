import React, { Component } from 'react';

import './Experience.css';

export default class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <h1>&#123; Experience &#125;</h1>
                <div className="card">
                    <h2>UBC Launchpad</h2>
                    <p className="timerange">September 2020 - April 2021</p>
                    <p className="card-body">UBC Launchpad [<a href="https://ubclaunchpad.com/" target="_blank" rel="noreferrer" >Website</a>] is a team of student software developers that collaborate to build full-stack applications.
                    <br></br>
                    <br></br>
                    My team created a web-application to help student teams manage their applicants and streamline the annual recruitment process. I developed our project's backend API using Node, Express, and Postman, while updating functional React components on the front-end.</p>
                </div>
                <div className="card">
                    <h2>Teaching Assistant (APSC 160)</h2>
                    <p className="timerange">September 2020 - December 2020</p>
                    <p className="card-body">APSC 160 is my university's introductory programming course taken by all the first-year engineering students.
                    <br></br>
                    <br></br>
                    I had the opportunity to work directly with the students by helping them debug their C projects and providing feedback to improve the quality of their code. I also graded project/exam submissions and invigilated online assessments via Zoom.</p>
                </div>
                <div className="card">
                    <h2>Change Healthcare (McKesson)</h2>
                    <p className="timerange"projects>April 2019 - April 2020</p>
                    <p className="card-body">Change Healthcare (formerly McKesson) is a technology company that provides software solutions to help healthcare systems cut costs and enhance employee productivity.
                    <br></br>
                    <br></br>
                    Within the Radiology division, I wrote automation scripts in Windows Batch and designed a performance monitoring solution using a collection of open-source tools.</p>
                </div>
            </div>
        )
    }
}