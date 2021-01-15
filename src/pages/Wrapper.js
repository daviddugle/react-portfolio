import React, { Component } from "react";
import Portfolio from "./Portfolio";
import port from "../components/port.json";



class Wrapper extends Component {

    state = {
        port
    };

    render() {

        return (

                <>

            
            

            
            {this.state.port.map(proj => (
                <Portfolio
                    key={proj.id.value}
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