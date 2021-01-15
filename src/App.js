import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Portfolio from "./pages/Portfolio";
import Wrapper from "./pages/Wrapper"
import Home from "./pages/Home";
import NavHead from "./components/NavHead";
import Foot from "./components/Foot";
import "./components/style.css";


import ContactMe from "./pages/ContactMe";





function App() {
  return (

    <Router>

        <div className="black">
        <NavHead />

        <Route exact path="/" component={Home} />
        <Route exact path="/contactme" component={ContactMe} />
       
        {/* <Wrapper> */}
        <Route exact path="/portfolio" component={Wrapper} />
        {/* </Wrapper> */}
        


      
      

        <Foot />
        </div>




      

    </Router>


  )


}

export default App;
