import React from "react";
import  "./style.css";

const Portfolio = () => {


    return (


        <>

            <div className="row black">
                <div className="col s6 offset-s3">
                    <div className="card dispBox ">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" alt="img name" src="https://github.com/daviddugle/Work-Day-Scheduler/blob/main/assets/Screenshot%202020-11-11%20125954.jpg?raw=true"></img>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">Project Name<i className="material-icons right">More</i></span>
                            <span className="center-align"><a href="https://github.com/daviddugle/Work-Day-Scheduler"><i className="fab fa-github"></i></a><p></p><a className="secondLink" href="https://github.com/daviddugle/Work-Day-Scheduler">Deployed Link</a></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                            <div className="row">
                                <div className="col s12">
                                   <h5 className="center-align">Description Of App </h5>   
                                   <p>"This App is a work day scheduler that keeps track of your business hours. The hours on the scheduler change as the time of day progresses (past, present and future). The user is able to save information to local storage to display on the page."</p>                                 
                                </div>
                                <div className="col s6">
                                <h5 className="center-align">Challenges </h5> 
                                    <p>"Working with local storage was challenging at first but was able to get through it."</p>
                                </div>
                                <div className="col s6">
                                <h5 className="center-align">Perseverance</h5> 
                                <p>"Continued to dive deep into the documentation and ask a lot of questions. I feel this was a great project that challenged me at the state of development I was at."</p>
                                </div>
                                <div className="col s12">
                                    <h5 className="center-align">Technologies Used</h5>
                                    <ul className="center-align">
                                        <li className="collection-item">Moment</li>
                                        <li className="collection-item">Local Storage</li>
                                        <li className="collection-item">Bootstrap</li>
                                        <li className="collection-item">FontAwesome</li>
                                        <li className="collection-item">Google Fonts</li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>






    )

}

export default Portfolio;