import "./qualification.css";
import { useState } from "react";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1); 
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section">
            <h2 className="section-title">Qualifications</h2>
            <span className="section-subtitle">My personal learning journey</span>

            <div className="qualification-container container">
                <div className="qualification-tabs">
                    <div className={ toggleState === 1 
                        ? "qualification-button qualification-active button-flex" 
                        : "qualification-button button-flex"} onClick={() => toggleTab(1)}>
                        <i className="bi bi-mortarboard qualification-icon"></i>{" "}
                        Education
                    </div>

                    <div className={ toggleState === 2 
                        ? "qualification-button qualification-active button-flex" 
                        : "qualification-button button-flex"} onClick={() => toggleTab(2)}>
                        <i className="bi bi-clock-history qualification-icon"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification-sections">
                    <div className={ toggleState === 1 
                        ? "qualification-content qualification-content-active" 
                        : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Web Developer</h3>
                                <span className="qualification-subtitle">Remote - edX</span>
                                <div className="qualification-calendar">
                                    <i className="bi bi-calendar3"></i>
                                    2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Front-End Developer</h3>
                                <span className="qualification-subtitle">Remote - Meta</span>
                                <div className="qualification-calendar">
                                    <i className="bi bi-calendar3"></i>
                                    2030 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Full Stack Developer</h3>
                                <span className="qualification-subtitle">Remote - FreeCodeCamp</span>
                                <div className="qualification-calendar">
                                    <i className="bi bi-calendar3"></i>
                                    2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Full Stack Developer</h3>
                                <span className="qualification-subtitle">Remote - The Odin Project</span>
                                <div className="qualification-calendar">
                                    <i className="bi bi-calendar3"></i>
                                    2030 - Present
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ toggleState === 2 
                        ? "qualification-content qualification-content-active" 
                        : "qualification-content"}>
                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Web Developer</h3>
                                <span className="qualification-subtitle">Remote - edX</span>
                                <div className="qualification-calendar">
                                    <i className="bi bi-calendar3"></i>
                                    2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Web Designer</h3>
                                <span className="qualification-subtitle">Paris - Institute</span>
                                <div className="qualification-calendar">
                                    <i className="bi bi-calendar3"></i>
                                    2030 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div>
                                <h3 className="qualification-title">Frontend Developer</h3>
                                <span className="qualification-subtitle">UK - Institute</span>
                                <div className="qualification-calendar">
                                    <i className="bi bi-calendar3"></i>
                                    2020 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                        </div>

                        <div className="qualification-data">
                            <div></div>
                            <div>
                                <span className="qualification-rounder"></span>
                                <span className="qualification-line"></span>
                            </div>
                            <div>
                                <h3 className="qualification-title">Graphic Designer</h3>
                                <span className="qualification-subtitle">Paris - Institute</span>
                                <div className="qualification-calendar">
                                    <i className="bi bi-calendar3"></i>
                                    2030 - Present
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;