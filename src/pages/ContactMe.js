import React from "react";
import  "../components/style.css";

const ContactMe = () => {

return (

    <div className="row contactMe ">
    <div className="col s6 offset-s3 ">
      <div className="card blue-grey darken-1 ">
        <div className="card-content white-text">
          <span className="card-title">Contact Information</span>
          <p>I can be reached either by Email or Phone.</p>
        </div>
        <div className="card-action">
        <a href="mailto:david.dugleii@yahoo.com">david.dugleii@yahoo.com</a>
            <p><i className="fas fa-mobile-alt"></i> 980.777.0729</p>
        </div>
      </div>
    </div>
  </div>

)

}

export default ContactMe;