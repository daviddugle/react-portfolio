import React, { Component } from "react";
import Portfolio from "./Portfolio";
import port from "./port.json";
import "./style.css";



class Wrapper extends Component {

    state = {
        port
    };

    render() {

        return (

                 <>

                
                

                
                {this.state.port.map(proj => (
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
                ))}

                

                


                    </>


        )
    }

}

export default Wrapper;