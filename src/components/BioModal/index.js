import React from "react";
import "./style.css";
import { row } from 'react-materialize'



function BioModal() {
    return (

        <div className="container-fluid">
            <div className={row} >
                <div className="card" id="bioM">
                    <div className="card-content">
                        <p id="bioText">AJ Huff is an ambitious Front End Web Developer with an interest in UX/UI design who hopes to bring a creative problem solving approach to developing new products and experiences. An innovative self-starter with experience building responsive websites, he is proficient in HTML, CSS, jQuery, JavaScript and Node.js; plus modern libraries and frameworks.</p>
                        <p id="bioText">A creative thinker who believes adaptability is key, AJ is passionate about collaborating closely with a team to support projects during all phases of delivery.</p>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default BioModal;