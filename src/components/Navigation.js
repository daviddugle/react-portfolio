import React from "react";

function Navigation() {

    return (


        <nav className="navbar has-background-black has-text-dark is-transparent">
            <div className="navbar-init">
                <a href="index.html" className="navbar-item">
                    <p id="initials" className="py-2 px-2 is-size-1"><i className="fas fa-home"></i>
                    </p>
                </a>
                {/* <a className="navbar-burger" id="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a> */}
            </div>
            <div className="navbar-menu" id="nav-links">
                <div className="navbar-end is-size-5">
                    <a href="https://www.linkedin.com/in/david-dugle-54b16641/" rel="noreferrer" target="_blank"
                        className="navbar-item"><i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/daviddugle" rel="noreferrer" target="_blank" className="navbar-item"><i className="fab fa-github"></i></a>
                    <a href="./David Dugle Resume2.1.pdf" rel="noreferrer" target="_blank" className="navbar-item">Resume</a>

                </div>
            </div>
        </nav>




    )

}

export default Navigation;