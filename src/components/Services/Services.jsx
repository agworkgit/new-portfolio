import { useState } from "react";
import "./services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0); 
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section-title">Services</h2>
            <span className="section-subtitle">Here&apos;s how I can help</span>

            <div className="services-container container grid">
                <div className="services-content">
                    <div>
                        <i className="bi bi-phone services-icon"></i>
                        <h3 className="services-title">
                            Product <br /> Designer
                        </h3>
                    </div>

                    <span className="services-button" onClick={() => { toggleTab(1) }}>View More
                        <i className="bi bi-arrow-right-short services-button-icon"></i>
                    </span>

                    <div className={ toggleState === 1 ? "services-modal active-modal" : "services-modal" }>
                        <div className="services-modal-content">
                            <i className="bi bi-x services-modal-close" onClick={() => { toggleTab(0) }}></i>

                            <h3 className="services-modal-title">Product Designer</h3>
                            <p className="services-modal-description">
                                Service with more than 3 years of experience.
                                Providing quality work to clients and companies.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Web page development.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I create UX element interactions.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I position your company brand.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I create the design and mockups for your company.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="bi bi-play-circle services-icon"></i>
                        <h3 className="services-title">UI/UX <br /> Designer</h3>
                    </div>

                    <span className="services-button" onClick={() => { toggleTab(2) }}>View More
                        <i className="bi bi-arrow-right-short services-button-icon"></i>
                    </span>

                    <div className={ toggleState === 2 ? "services-modal active-modal" : "services-modal" }>
                        <div className="services-modal-content">
                            <i className="bi bi-x services-modal-close" onClick={() => { toggleTab(0) }}></i>

                            <h3 className="services-modal-title">UI/UX Designer</h3>
                            <p className="services-modal-description">
                                Service with more than 3 years of experience.
                                Providing quality work to clients and companies.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Web page development.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I create UX element interactions.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I position your company brand.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I create the design and mockups for your company.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-content">
                    <div>
                        <i className="bi bi-eyeglasses services-icon"></i>
                        <h3 className="services-title">Graphic <br /> Designer</h3>
                    </div>

                    <span className="services-button" onClick={() => { toggleTab(3) }}>View More
                        <i className="bi bi-arrow-right-short services-button-icon"></i>
                    </span>

                    <div className={ toggleState === 3 ? "services-modal active-modal" : "services-modal" }>
                        <div className="services-modal-content">
                            <i className="bi bi-x services-modal-close" onClick={() => { toggleTab(0) }}></i>

                            <h3 className="services-modal-title">Graphic Designer</h3>
                            <p className="services-modal-description">
                                Service with more than 3 years of experience.
                                Providing quality work to clients and companies.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I develop the user interface.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">Web page development.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I create UX element interactions.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I position your company brand.</p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="bi bi-check2-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I create the design and mockups for your company.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;