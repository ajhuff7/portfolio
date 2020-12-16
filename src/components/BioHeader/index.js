import React from "react";
import { Link } from "react-router-dom";
import { row } from 'react-materialize'
import logo1 from "../../assets/logo1.gif"



function BioHeader() {
    return (

        <div className="container-fluid">
            <div className={row} >
                <div className="icon1 col l4">
                    <Link to="/">
                        <img className="responsive-img" src={logo1} id="logo1" alt="AJ Huff"></img>
                    </Link>
                </div>
            </div>
        </div >



    );
}

export default BioHeader;