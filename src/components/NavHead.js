import React from "react";
import resume from "../images/resume.pdf"
import  "./style.css";

const NavHead = () => {

    return (


        <nav>
            <div className="nav-wrapper black">
                <a href="#" className="brand-logo"><i className="fas fa-home"></i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://www.linkedin.com/in/david-dugle-54b16641/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/daviddugle" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></li>
                    <li><a href="google.com" target="_blank" rel="noreferrer">Portfolio</a></li>
                    <li><a href={ resume } target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
            </div>
        </nav>





    )

}

export default NavHead;