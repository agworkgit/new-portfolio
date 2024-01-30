import "./about.css";
import AboutImage from "../../assets/images/profile-pic-2.jpg";
import CV from "../../assets/cv/my-cv.pdf"
import Info from "./Info";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section-title">About Me</h2>
            <span className="section-subtitle">A brief introduction</span>

            <div className="about-container container grid">
                <img src={AboutImage} alt="Profile picture of Alex" className="about-image" />
                
                <div className="about-data">
                    <Info />

                    <p className="about-description">
                    I&apos;m a web development enthusiast, currently wrapping up my studies with edX, 
                    Meta, and The Odin Project. I aim to integrate my 9 years of experience in 
                    UK industries, covering sales, design, and full-stack development, to craft 
                    websites that are scalable, accessible, and visually stunning. 
                    My passion lies in staying up-to-date with emerging technologies. 
                    Outside of my studies and work, I cherish spending time with loved ones, 
                    indulging in music creation, exploring through travel, and enjoying the art of cooking.
                    </p>

                    <a download="" href={CV} className="button button-flex">Download CV 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--body-color)" className="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                    </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;