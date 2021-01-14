import React from "react";
import NavHead from "./NavHead";
import Foot from "./Foot"
import Portfolio from "./Portfolio";


const Wrapper =() => {

    return (
        <>

        <div className="black">
        <NavHead />

        <Portfolio/>

        <Foot />

        </div>


        </>
    )

}

export default Wrapper;