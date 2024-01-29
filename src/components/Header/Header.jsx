import { useState } from "react";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./header.css";

const Header = () => {
    // Toggle Menu
    const [Toggle, showMenu] = useState(false);

    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" smooth="true" duration={500} className="nav-logo">Alex Grigore</Link>

                <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" smooth="true" duration={500} className="nav-link" onClick={() => showMenu(false)}>
                                <i className="bi bi-house nav-icon"></i> Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <HashLink to="#about" smooth="true" duration={500} className="nav-link" onClick={() => showMenu(false)}>
                                <i className="bi bi-person-circle nav-icon"></i> About
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink to="#skills" smooth="true" duration={500} className="nav-link" onClick={() => showMenu(false)}>
                                <i className="bi bi-tools nav-icon"></i> Skills
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink to="#services" smooth="true" duration={500} className="nav-link" onClick={() => showMenu(false)}>
                                <i className="bi bi-briefcase nav-icon"></i> Services
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <Link to="/portfolio" smooth="false" className="nav-link" onClick={() => showMenu(false)}>
                                <i className="bi bi-file-earmark-code nav-icon"></i> Portfolio
                            </Link>
                        </li>

                        {/* <li className="nav-item">
                            <a href="/portfolio" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={() => showMenu(false)}>
                                <i className="bi bi-file-earmark-code nav-icon"></i> Portfolio
                            </a>
                        </li> */}

                        <li className="nav-item">
                            <Link to="/contact" smooth="true" duration={500} className="nav-link" onClick={() => showMenu(false)}>
                                <i className="bi bi-envelope nav-icon"></i> Contact
                            </Link>
                        </li>

                        <i className="bi bi-x nav-close" onClick={() => showMenu(false)}></i>
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
