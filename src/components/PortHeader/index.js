import React from "react";
import { Link } from "react-router-dom";
import { row } from 'react-materialize'
import "./style.css";
import logo1 from "../../assets/logo1.gif"



function PortHeader() {
    return (
        <div className="container-fluid">
            <div className={row}>
                <div className="icon1 col l4">
                    <Link to="/">
                        <img className="responsive-img" src={logo1} id="logo1" alt="AJ Huff"></img>
                    </Link>
                </div>
                <div className="container">
                    <div className="card2">
                        <div>
                            <Link to="/Bio">
                                <h2 class="portLink">BIO</h2>
                            </Link>
                        </div>
                        <div>
                            <Link to="/Contact">
                                <h2 class="portLink">CONTACT</h2>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <h2 class="portLink" >HOME</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PortHeader;