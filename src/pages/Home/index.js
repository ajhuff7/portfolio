import React, { Component } from 'react';
import './style.css';
import Wrapper from '../../components/Wrapper';
import HomeHeader from '../../components/HomeHeader';
import HomeNav from '../../components/HomeNav'



class Home extends Component {

    render() {

        return (

            <Wrapper>
                <div className="home">
                    <HomeHeader />
                    <div className="home2">
                    <HomeNav />
                        
                    </div>
                </div>
            </Wrapper>

        );

    }
}


export default Home;