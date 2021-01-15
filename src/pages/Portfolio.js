import React from "react";

import  "../components/style.css";

const Portfolio =(props) => {


    return (


        <>

            <div className="row black">
                <div className="col s6 offset-s3">
                    <div className="card dispBox ">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" alt={props.name} src={props.img}></img>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-bold text-darken-4">{props.name}<i className="material-icons right">More</i></span>
                            <span className="center-align"><a href={props.git} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a><p></p><a className="secondLink" target="_blank" rel="noreferrer" href={props.deployed}>Deployed Link</a></span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text  text-darken-4 ">{props.name}<i className="material-icons right">close</i></span>
                            
                            <div className="row">
                                <div className="col s12">
                                   <h5 className="center-align">Description Of App </h5>   
                                   <p>{props.description}</p>                                 
                                </div>
                                <div className="col s12">
                                <h5 className="center-align">Challenges </h5> 
                                    <p>{props.challenges}</p>
                                </div>
                                <div className="col s12">
                                <h5 className="center-align">Perseverance</h5> 
                                <p>{props.persevered}</p>
                                </div>
                                <div className="col s12">
                                    <h5 className="center-align">Technologies Used</h5>
                                    <ul className="center-align">
                                        {props.technology.map(tech =>
                                            
                                        <li key={tech} className="collection-item">{tech}</li>
                                            )}
                                        
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