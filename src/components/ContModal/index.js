import React from "react";
import { row } from 'react-materialize'
import { Link } from "react-router-dom";
import "./style.css";




function ContModal() {
    return (

        <div className="container-fluid">
            <div className={row} >
                <div className="card" >
                    <div className="card-content" id="contactM">
                        <h1 className="contacthead card-title">CONTACT ME</h1>
                        <hr />
                        <h3 class="contacttext flow-text">ajhuff7@gmail.com</h3>
                        <h3 class="contacttext flow-text">619.518.5064</h3>
                        
                        <Link to="https://github.com/ajhuff7">
                            <i className="fa fa-github" alt="Github"></i>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="https://www.linkedin.com/in/aj-huff-7696b14b/">
                            <i className="fa fa-linkedin" alt="Linked In"></i>
                        </Link>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to="https://www.linkedin.com/in/aj-huff-7696b14b/">
                            <i className="fa fa-file-alt" alt="Resume"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContModal;