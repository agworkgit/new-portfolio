import { useState } from "react";
import "./header.css"

const Header = () => {
    // Toggle Menu
    const [Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav-logo">Alex / Frontend Dev</a>

                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#home" className="nav-link active-link">
                                <i className="bi bi-house nav-icon"></i> Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link active-link">
                                <i className="bi bi-person-circle nav-icon"></i> About
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#skills" className="nav-link active-link">
                                <i className="bi bi-tools nav-icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#services" className="nav-link active-link">
                                <i className="bi bi-briefcase nav-icon"></i> Services
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#portfolio" className="nav-link active-link">
                                <i className="bi bi-file-earmark-code nav-icon"></i> Portfolio
                            </a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link active-link">
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