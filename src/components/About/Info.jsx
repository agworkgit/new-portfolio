const Info = () => {
    return (
        <div className="about-info grid">
            <div className="about-box">
                <i className="bi bi-award about-icon"></i>
                <h3 className="about-title">
                Experience
                </h3>
                <span className="about-subtitle">
                10 Years    
                </span>
            </div>

            <div className="about-box">
                <i className="bi bi-briefcase about-icon"></i>
                <h3 className="about-title">
                Completed
                </h3>
                <span className="about-subtitle">
                27+ Projects     
                </span>
            </div>

            <div className="about-box">
                <i className="bi bi-headset about-icon"></i>
                <h3 className="about-title">
                Support
                </h3>
                <span className="about-subtitle">
                Online 24/7 
                </span>
            </div>
        </div>
    )
}

export default Info;