import React, { Component } from "react";
import NavHead from "./NavHead";
import Foot from "./Foot";
import Portfolio from "./Portfolio";
import Home from "./Home";
import AboutMe from "./AboutMe";
import port from "./port.json";
import "./style.css";



class Wrapper extends Component {

    state = {
        port
    };

    render() {

        return (

                 <>

                <div className="black">
                <NavHead />

                <AboutMe/>
                {/* <Home /> */}
                {/* {this.state.port.map(proj => (
                    <Portfolio
                        id={proj.id}
                        name={proj.name}
                        img={proj.img}
                        git={proj.git}
                        deployed={proj.deployed}
                        description={proj.description}
                        challenges={proj.challenges}
                        persevered={proj.persevered}
                        technology={proj.technology}
                    />
                ))} */}

                <Foot />

                </div>


                    </>


        )
    }

}

export default Wrapper;