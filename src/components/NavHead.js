import React from "react";
import resume from "../images/resume.pdf"
import { Link, useLocation } from "react-router-dom"; 
import  "./style.css";

const NavHead = () => {
 const location = useLocation();
    return (


        <nav>
            <div className="nav-wrapper black">
                <p className="brand-logo blueman">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}><i className="fas fa-home"></i></Link>
                
                </p>
                <ul id="nav-mobile" className="right hide-on-med-and-down ">
                    <li><a href="https://www.linkedin.com/in/david-dugle-54b16641/" target="_blank" rel="noreferrer"><i className="blueman fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/daviddugle" target="_blank" rel="noreferrer"><i className="fab fa-github blueman"></i></a></li>

                    <li className="blueman">
                        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    </li>


                    <li className="blueman">
                        <Link to="/contactme" className={location.pathname === "/contactme" ? "nav-link active" : "nav-link"}>Contact Me</Link>
                    </li>

                    <li><a className="blueman" href={ resume } target="_blank" rel="noreferrer">Contact Me</a></li>
                    <li><a className="blueman" href={ resume } target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </div>
        </nav>





    )

}

export default NavHead;