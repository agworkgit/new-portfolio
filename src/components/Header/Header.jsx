import { useState } from "react";
import "./header.css"

const Header = () => {
    // Change Background Header
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        (this.scrollY >= 80) 
        ? header.classList.add("scroll-header") 
        : header.classList.remove("scroll-header");
    })
    // Toggle Menu
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">Alex Grigore</a>

                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className={activeNav === "#home" ? "nav-link active-link" : "nav-link"} onClick={() => setActiveNav("#home")}>
                                <i className="bi bi-house nav-icon"></i> Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className={activeNav === "#about" ? "nav-link active-link" : "nav-link"} onClick={() => setActiveNav("#about")}>
                                <i className="bi bi-person-circle nav-icon"></i> About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#skills" className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"} onClick={() => setActiveNav("#skills")}>
                                <i className="bi bi-tools nav-icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#services" className={activeNav === "#services" ? "nav-link active-link" : "nav-link"} onClick={() => setActiveNav("#services")}>
                                <i className="bi bi-briefcase nav-icon"></i> Services
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#portfolio" className={activeNav === "#portfolio" ? "nav-link active-link" : "nav-link"} onClick={() => setActiveNav("#portfolio")}>
                                <i className="bi bi-file-earmark-code nav-icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className={activeNav === "#contact" ? "nav-link active-link" : "nav-link"} onClick={() => setActiveNav("#contact")}>
                                <i className="bi bi-envelope nav-icon"></i> Contact
                            </a>
                        </li>

                        <i className="bi bi-x nav-close" onClick={() => showMenu(!Toggle)}></i>
                    </ul>
                </div>

                <div className="nav-toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="bi bi-list"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;