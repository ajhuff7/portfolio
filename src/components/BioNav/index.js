import React from "react";
import { Link } from "react-router-dom";
import "./style.css";




function BioNav() {
    return (


        <div className="container">
            <div className="card6"> &nbsp;&nbsp;
                <Link to="/Portfolio">
                    <h2 class="bioLink">PORTFOLIO</h2>
                </Link> &nbsp;&nbsp;
                <Link to="/Contact">
                    <h2 class="bioLink" >CONTACT</h2>
                </Link> &nbsp;&nbsp;
                <Link to="/">
                    <h2 class="bioLink">HOME</h2>
                </Link>
            </div>
        </div>
    );
}

export default BioNav;