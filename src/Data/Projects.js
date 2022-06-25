export const ProjectsData = [
    {
        "title": "TrustSMS (UBC Cybersecurity 2021 “Best Design Project” winner)",
        "contents": [
            {
                "subheading": "Problem",
                "body": " SMS phishing attacks increased drastically in the last few years. Existing solutions involve parsing messages for keywords, or fully blocking messages from unknown numbers."
            },
            { 
                "subheading": "Goal", 
                "body": "Design a system to defend against SMS phishing attacks." 
            },
            { 
                "subheading": "Project Description", 
                "body": "Built a system to rate the “trustworthiness” of an SMS message’s sender using a “trust-network” of users. Users of the application can mark other phone numbers as “trustworthy” or “spam”. The trust network checks for the sender’s number within the user’s trust network with up to three degrees of separation. Senders are sorted into inboxes based on how trustworthy they appear." 
            }
        ],
        "links": [
            {
                "text": "read more about the project's design considerations", 
                "destination": "https://www.spotify.com/us/404/"
            }
        ]
    },
    {
        "title": "Hireflo - Club Recruitment Web-app - Software Engineering Club Project",
        "contents": [
            {
                "subheading": "Problem",
                "body": "UBC Launchpad (school software development club) had 150+ applicants. The current process for onboarding the applicants is tedious, and involves lots of copy/pasting."
            },
            { 
                "subheading": "Description", 
                "body": "Our subteam built a browser application to streamline the recruitment process. The application provides a dashboard to view different applicants at various stages throughout the recruitment pipeline. Automatic email notifications are sent to applicants to update their recruitment status." 
            }
        ],
        "links": [
            {
                "text": "open the project demo", 
                "destination": "http://hireflow.ubclaunchpad.com/"
            },
            {
                "text": "see the (front-end) source code", 
                "destination": "https://github.com/ubclaunchpad/club-manager-client"
            },
            {
                "text": "see the (back-end) source code", 
                "destination": "https://github.com/ubclaunchpad/club-manager-server"
            }
        ]
    },
    {
        "title": "KVStore - Distributed Systems Design Project",
        "contents": [
            {
                "subheading": "Goal",
                "body": "Build a distributed key-value store to retain data in the event of packet-loss, network delays, and node failures. The design should also maintain sequential consistency under these conditions."
            },
            { 
                "subheading": "Description", 
                "body": "Shorten this" 
            }
        ],
        "links": [
            {
                "text": "see the source code", 
                "destination": "https://www.spotify.com/us/404/"
            }
        ]
    },
    {
        "title": "BattleChip - Battleship on an FPGA Board",
        "contents": [
            {
                "subheading": "Goal",
                "body": "Implement a battleship-like game on a DE1-S0C FPGA board with bluetooth/WiFi capabilities and a hardware accelerated AI."
            },
            { 
                "subheading": "Description", 
                "body": "Game logic is written in C++ and runs directly on the FPGA board. The hardware-accelerated AI is designed using SystemVerilog and makes optimal decisions based on probability. The GUI uses the Unity Game Engine to render the boards and support tap and drag inputs. The GUI is wrapped within an Android Studio application, which facilitates bluetooth communication with the FPGA. Completed games are uploaded to a leaderboard hosted remotely on an AWS cloud instance." 
            }
        ],
        "links": [
            {
                "text": "see the source code", 
                "destination": "https://www.spotify.com/us/404/"
            }
        ]
    },
    {
        "title": "QuickPick - Tinder-like Decision-Making App",
        "contents": [
            {
                "subheading": "Goal",
                "body": "Streamline the decision-making process for friend groups when trying to decide on where to eat, what movie to watch, etc."
            },
            { 
                "subheading": "Description", 
                "body": "Provides a Tinder-like swiping interface for users to vote on which decisions they like/dislike. Users can add/remove/edit multiple lists of ideas saved to their account. Users can create and join lobbies with their friends and merge their lists for voting. Votes are aggregated and displayed once all users in the lobby have voted. Uses Facebook OAuth2 for authentication and the Unsplash API for auto-populating lists with images. API requests are minimized via caching." 
            }
        ],
        "images": [
            "../../Assets/cyberduck.jpeg"
        ],
        "links": [
            {
                "text": "see the source code", 
                "destination": "https://www.spotify.com/us/404/"
            }
        ]
    }
]
