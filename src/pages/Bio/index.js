import React, { Component } from 'react';
import './style.css';
import Wrapper from '../../components/Wrapper';
import BioHeader from '../../components/BioHeader';
import BioModal from '../../components/BioModal';
import BioNav from '../../components/BioNav';



class Bio extends Component {

    render() {

        return (

            <Wrapper>
                <div className="bio1">
                    <BioHeader />
                    <div className="bio2 flex">
                    <BioNav />
                    <BioModal />
                        
                    </div>
                </div>
            </Wrapper>

        );

    }
}


export default Bio;