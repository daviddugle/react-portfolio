import React from "react";

const Portfolio = () => {


    return (
        <>
            <div className="container dispBox">
                <div className="row">
                    <div className="title has-text-centered">
                        <h3>Placeholder for dynamic Title</h3>
                    </div>
                    <div className="columns is-multiline">
                        <div className="column is-half">
                            <div className="image mb-6">
                                <img id="dynImg" alt="placeholder"></img>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="tech content mt-6">
                                <h5>Technologies Used</h5>
                                <ul>
                                    <li className="dynTech"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-half">
                            <div className="field">
                                <label className="label">Description of Project</label>
                                {/* <textarea id="dynText" style={{max-width:95% , cols="100", rows="4"})></textarea> */}

                            </div>
                            <div className="field">
                                <label className="label">Challenges</label>
                                {/* <textarea id="dynChal" style="max-width:95%" cols="100" rows="4"></textarea> */}

                            </div>
                            <div className="field">
                                <label class="label">How I Persevered</label>
                                {/* <textarea id="dynPers" style="max-width:95%" cols="100" rows="4"></textarea> */}

                            </div>
                            <div className="links">
                                <a id="dynGit" href="#" target="_blank" className="card-footer-item"><i className="fab fa-github"></i></a>
                                <a id="dynDepl" href="#" target="_blank" className="card-footer-item">Deployed Link</a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    )

}

export default Portfolio;