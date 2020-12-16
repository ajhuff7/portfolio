import React, { Component } from 'react';
import './style.css';
import Wrapper from '../../components/Wrapper';
import ContHeader from '../../components/ContHeader';
import ContModal from '../../components/ContModal';





class Contact extends Component {

    render() {

        return (

            <Wrapper>
                <div className="contact">
                    <ContHeader />
                    <ContModal />
                    <div className="contact2">
                        
                    </div>
                </div>
            </Wrapper>

        );

    }
}


export default Contact;