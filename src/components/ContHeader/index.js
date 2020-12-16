import React from "react";
import { Link } from "react-router-dom";
import { row } from 'react-materialize'
import "./style.css";
import logo5 from "../../assets/logo5.gif"



function ContHeader() {
    return (

        <div className="container-fluid">
            <div className={row} >
                <div className="icon5 col l4">
                    <Link to="/">
                        <img className="responsive-img" src={logo5} id="logo5" alt="AJ Huff"></img>
                    </Link>
                </div>
                <div className="container">
                    <div className="card4">
                        <div className="col">
                            <Link to="/Portfolio">
                                <h2 class="contactLink">PORTFOLIO</h2>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/Bio">
                                <h2 class="contactLink">BIO</h2>
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/">
                                <h2 class="contactLink">HOME</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContHeader;