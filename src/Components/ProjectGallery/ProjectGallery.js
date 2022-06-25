import React from 'react';

import './ProjectGallery.css';

import trustNetwork from '../../Assets/TrustNetwork.png'
import hireflo from '../../Assets/hireflo_project.png'
import battleChip from '../../Assets/battlechipui.png'
import quickpick from '../../Assets/quickpick_menu.png'

export default class ProjectGallery extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            // <div style={{ userSelect: "none" }}>
            <div>
                <div className='projectItem'>
                    <div className='projectInfo'>
                        <h2>TrustSMS -  (UBC Cybersecurity 2021 “Best Design Project” Winner)</h2>
                        <p><span>Problem</span>: SMS phishing attacks increased drastically in the last few years. Existing solutions involve parsing messages for keywords, or fully blocking messages from unknown numbers.</p>
                        <p><span>Project Objective:</span> Design a system to defend against SMS phishing attacks without scraping message contents or simply blocking all unrecognized phone numbers.</p>
                        <p><span>Description:</span> Built a system to rate the “trustworthiness” of an SMS message’s sender using a “trust-network” of users. Users of the application can mark other phone numbers as “trustworthy” or “spam”. The trust network checks for the sender’s number within the user’s trust network with up to three degrees of separation. Senders are sorted into inboxes based on how trustworthy they appear.</p>
                        <p><a href='https://docs.google.com/document/d/1Uz5ehnPAjX08tqSepiviv4XpkF9TyAh0/edit?usp=sharing&ouid=109793740372991403186&rtpof=true&sd=true' target="_blank" rel="noreferrer">[Click to read more about the project's design considerations]</a></p>
                        <p><a href='https://drive.google.com/file/d/1ojoD1g2o4F2iCXZtQQe2g8c1K4-EKjBO/view?usp=sharing' target="_blank" rel="noreferrer">[Click to watch the project video]</a></p>
                        <p><a href='https://github.com/preetsha/trustsms' target="_blank" rel="noreferrer">[Click to view the source code]</a></p>
                    </div>
                    <img className='projectImage' src={trustNetwork} />
                </div>
                <div className='projectItem'>
                    <div className='projectInfo'>
                        <h2>Hireflo - Club Recruitment Web-app (Software Dev. Club Project)</h2>
                        <p><span>Problem:</span> In recent years, UBC Launchpad (our University's software development club) receives 150+ applicants annually. The current process for onboarding the applicants is tedious and involves many manual, error-prone tasks.</p>
                        <p><span>Description:</span> Our subteam built a browser application to streamline the recruitment process. The application provides a dashboard to view different applicants at various stages throughout the recruitment pipeline. Automatic email notifications are sent to applicants to inform them of any updates to their recruitment status.</p>
                        <p><a href='http://hireflow.ubclaunchpad.com/' target="_blank" rel="noreferrer">[Click to view the project demo]</a></p>
                        <p><a href='https://github.com/ubclaunchpad/club-manager-client' target="_blank" rel="noreferrer">[Click to view the front-end source code]</a></p>
                        <p><a href='https://github.com/ubclaunchpad/club-manager-server' target="_blank" rel="noreferrer">[Click to view the back-end source code]</a></p>
                    </div>
                    <img className='projectImage' src={hireflo} />
                </div>
                <div className='projectItem'>
                    <div className='projectInfo'>
                        <h2>BattleChip - Battleship on an FPGA Board</h2>
                        <p><span>Goal:</span> Implement a battleship-like game on a DE1-S0C FPGA board with bluetooth/WiFi capabilities and a hardware accelerated AI.</p>
                        <p><span>Description:</span> Game logic is written in C++ and runs directly on the FPGA board. The hardware-accelerated AI is designed using SystemVerilog and makes optimal decisions based on probability. The GUI uses the Unity Game Engine to render the boards and support tap and drag inputs. The GUI is wrapped within an Android Studio application, which facilitates bluetooth communication with the FPGA. Completed games are uploaded to a leaderboard hosted remotely on an AWS cloud instance.</p>
                        <p><a href='https://github.com/Codename-NF/BattleChip' target="_blank" rel="noreferrer">[Click to view the source code]</a></p>
                        <p><a href='https://drive.google.com/file/d/1FXXQeBU_V6SnXP0wcuTgtvzByLP_Jlt4/view?usp=sharing' target="_blank" rel="noreferrer">[Click to watch the Unity UI Demo] (no audio)</a></p>
                        <p><a href='https://drive.google.com/file/d/1xYmufMgq8Mo0t7QIHJQGmJ_HaOpVwKqt/view?usp=sharing' target="_blank" rel="noreferrer">[Click to watch the full project demo] (no audio)</a></p>
                    </div>
                    <img className='projectImage' src={battleChip} />
                </div>
                {/* <div className='projectItem'>
                    <div className='projectInfo'>
                        <h2>KVStore - Distributed Systems Design Project</h2>
                        <p><span>Objective:</span> Build a distributed key-value store to retain data in the event of packet-loss, network delays, and node failures. The design should also maintain sequential consistency under these conditions.</p>
                        <p><span>Description:</span> TODO Find out if I am allowed to share the code before posting.</p>
                        <p><a>[Click to view the source code]</a></p>
                    </div>
                </div> */}
                
                <div className='projectItem'>
                    <div className='projectInfo'>
                        <h2>QuickPick - Tinder-like Decision-Making App</h2>
                        <p><span>Goal:</span> Streamline the decision-making process for friend groups when trying to decide on where to eat, what movie to watch, etc.</p>
                        <p><span>Description:</span> Provides a Tinder-like swiping interface for users to vote on which decisions they like/dislike. Users can add/remove/edit multiple lists of ideas saved to their account. Users can create and join lobbies with their friends and merge their lists for voting. Votes are aggregated and displayed once all users in the lobby have voted. Uses Facebook OAuth2 for authentication and the Unsplash API for auto-populating lists with images. API requests are minimized via caching.</p>
                        <p><a href='https://github.com/richardechegaray/quickPick' target="_blank" rel="noreferrer">[Click to view the source code]</a></p>
                    </div>
                    <img className='projectImage' src={quickpick} />
                </div>
            </div>
        )
    }
}