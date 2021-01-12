import React, { Component } from "react";

function Navigation() {

    return (


        <nav class="navbar has-background-black has-text-dark is-transparent">
            <div class="navbar-init">
                <a href="index.html" class="navbar-item">
                    <p id="initials" class="py-2 px-2 is-size-1"><i class="fas fa-home"></i>
                    </p>
                </a>
                {/* <a class="navbar-burger" id="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a> */}
            </div>
            <div class="navbar-menu" id="nav-links">
                <div class="navbar-end is-size-5">
                    <a href="https://www.linkedin.com/in/david-dugle-54b16641/" rel="noreferrer" target="_blank"
                        class="navbar-item"><i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/daviddugle" rel="noreferrer" target="_blank" class="navbar-item">Github</a>
                    <a href="assets/David Dugle Resume2.1.pdf" rel="noreferrer" target="_blank" class="navbar-item">Resume</a>

                </div>
            </div>
        </nav>




    )

}

export default Navigation;