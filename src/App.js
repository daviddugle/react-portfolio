import React from "react";
import Portfolio from "./Portfolio";
import Bundle from "./Bundle"
import Home from "./Home";
import NavHead from "./NavHead";
import Foot from "./Foot";
import "./style.css";

import AboutMe from "./AboutMe";

import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (

    <Router>

        <div className="black">
        <NavHead />

      <Bundle>

        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contactme" component={AboutMe} />


      
      </Bundle>

        <Foot />
        </div>




      

    </Router>


  )


}

export default App;
