import React, { Component } from 'react';
import './style.css';
import Wrapper from '../../components/Wrapper';
import PortHeader from '../../components/PortHeader';
import VerticalCarousel from '../../components/VerticalCarousel';
import { config } from "react-spring";


let slides = [
    {
        key: 1,
        content: 'https://raw.githubusercontent.com/ajhuff7/portfolio/master/src/assets/1updb2.png', 
        link: 'https://oneupdb.herokuapp.com/',
        name: 'OneUpDB',
        description: 'OneUpDB is an interactive database that uses sign up and login functionality through Passport and Bcrypt, profile creation on our database using MySQL and Sequelize, and allows video game searches using Axios, Express, and the IGDB API.'
    },
    {
        key: 2,
        content: 'https://raw.githubusercontent.com/ajhuff7/portfolio/master/src/assets/workout12.png',
        link: 'https://still-brook-83003.herokuapp.com/',
        name: 'WORKOUT TRACKER',
        description: 'Workout Tracker allows the user to document their personalized workout information on the browser and uses API routes and to store the data on our Mongo database.'
    },
    {
        key: 3,
        content: 'https://raw.githubusercontent.com/ajhuff7/portfolio/master/src/assets/bl12.png',
        link: 'https://ajhuff7.github.io/burger_lounge/',
        name: 'BURGER LOUNGE', 
        description: 'Burger Lounge is an interactive burger logging system. Using MVC design, MySQL, Node.js, and Express Handlebars this app allows users to prompt and route burger data to the database.'
    },
    {
        key: 4,
        content: 'https://raw.githubusercontent.com/ajhuff7/portfolio/master/src/assets/tep12.png',
        link: 'https://ajhuff7.github.io/the-escape-plan/',
        name: 'THE ESCAPE PLAN',
        description: 'The Escape Plan is an exclusive Global Luxury Concierge and Lifestyle Management Service. Using Ajax calls to several nested APIs, The Escape Plan is able to return weather, currency, and covid data on international city searches.'
    },
    {
        key: 5,
        content: 'https://raw.githubusercontent.com/ajhuff7/portfolio/master/src/assets/mts2.png',
        link: 'https://ajhuff7.github.io/Code-Quiz/',
        name: 'CODE QUIZ',
        description: 'How much do you REALLY know about Megan Thee Stallion? Using a timer function and event listeners, this interactive multiple choice quiz tests your knowledge on MTS.'
    },
    {
        key: 6,
        content: 'https://raw.githubusercontent.com/ajhuff7/portfolio/master/src/assets/Work2.png',
        link: 'https://ajhuff7.github.io/work-day-scheduler/',
        name: 'WORK DAY SCHEDULER'
    },
    {
        key: 7,
        content: 'https://raw.githubusercontent.com/ajhuff7/portfolio/master/src/assets/onsite12.png',
        link: 'https://pacific-journey-56718.herokuapp.com/',
        name: 'EMPLOYEE DIRECTORY'
    },
    {
        key: 8, 
        content: 'https://raw.githubusercontent.com/ajhuff7/portfolio/master/src/assets/Avengers2.png',
        link: 'https://ajhuff7.github.io/avengers_match_up/',
        name: 'AVENGERS MEMORY GAME', 
        description: 'Built with React, Avengers Memory Game tests how well you know these heroes. This app uses State to set the game board and score, and a Math.random function to randomize the playing cards on each turn.'
    }
];

export default class Portfolio extends Component {
    state = {
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: true,
        config: config.gentle
    };


    render() {
        return (
            <Wrapper>
                <div className="port">
                    <div className="port2">
                    
                    <div
                        style={{
                            position: "fixed",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            width: "100vw",
                            height: "100vh",
                            margin: "0 auto",
                            background: "#00000000"
                        }}
                    >
                        <PortHeader />
                        <VerticalCarousel
                            slides={slides}
                            offsetRadius={this.state.offsetRadius}
                            showNavigation={this.state.showNavigation}
                            animationConfig={this.state.config}
                        />
                        
                    </div>

                    </div>
                </div>

            </Wrapper>

        );
    }


}





