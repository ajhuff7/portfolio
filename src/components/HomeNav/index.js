import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function HomeNav() {
    return (


        <div className="container">
            <div className="card1"> &nbsp;&nbsp;
                <Link to="/Portfolio">
                    <h2 class="headerLink">PORTFOLIO</h2>
                </Link> &nbsp;&nbsp;
                <Link to="/Bio">
                    <h2 class="headerLink">BIO</h2>
                </Link> &nbsp;&nbsp;
                <Link to="/Contact">
                    <h2 class="headerLink" >CONTACT</h2>
                </Link> 
            </div>
        </div>
    );
}

export default HomeNav;