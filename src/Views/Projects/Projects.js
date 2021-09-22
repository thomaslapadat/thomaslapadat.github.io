import React, { Component } from 'react';

// import cyberduck from '../../Assets/cyberduck.jpeg';
import quickpick from '../../Assets/quickpick.svg';
import hireflow from '../../Assets/hireflow.png';
import battlechip from '../../Assets/battlechipui.png';

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
                            <h2>HireFlow</h2>
                            <img src={hireflow} alt="HireFlow"></img>
                        </a>
                    </div>
                    <div className="project-item item4">
                        <a href="https://github.com/Codename-NF/BattleChip">
                            <h2>BattleChip FPGA Game</h2>
                            <img src={battlechip} alt="Web Portfolio"></img>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
