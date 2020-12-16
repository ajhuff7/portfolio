import React from "react";
import { Link } from "react-router-dom";
import { row } from 'react-materialize'
import "./style.css";
import logo2 from "../../assets/logo2.gif"



function HomeHeader() {
    return (

        <div className="container-fluid">
            <div className={row} >
                <div className="icon2 col l4">
                    <Link to="/Contact">
                        <img className="responsive-img" src={logo2} id="logo2" alt="AJ Huff"></img>
                    </Link>
                </div>
            </div>
        </div >



    );
}

export default HomeHeader;