import { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import ReactSwitch from "react-switch";
import "./header.css";

const Header = () => {
    // Toggle Menu
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { toggleTheme, theme } = useContext(ThemeContext);

    const handleMenuToggle = () => {
        setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="nav container">
                <Link to="/" smooth="true" duration={500} className="nav-logo">Alex Grigore</Link>

                <div className={isMenuOpen ? "nav-menu show-menu" : "nav-menu"}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" smooth="true" duration={500} className="nav-link" onClick={handleMenuClose}>
                                <i className="bi bi-house nav-icon"></i> Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <HashLink to="#about" smooth="true" duration={500} className="nav-link" onClick={handleMenuClose}>
                                <i className="bi bi-person-circle nav-icon"></i> About
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink to="#skills" smooth="true" duration={500} className="nav-link" onClick={handleMenuClose}>
                                <i className="bi bi-tools nav-icon"></i> Skills
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <HashLink to="#services" smooth="true" duration={500} className="nav-link" onClick={handleMenuClose}>
                                <i className="bi bi-briefcase nav-icon"></i> Services
                            </HashLink>
                        </li>

                        <li className="nav-item">
                            <Link to="/portfolio" smooth="false" className="nav-link" onClick={handleMenuClose}>
                                <i className="bi bi-file-earmark-code nav-icon"></i> Portfolio
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contact" smooth="true" duration={500} className="nav-link" onClick={handleMenuClose}>
                                <i className="bi bi-envelope nav-icon"></i> Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Close Menu Button */}
                    {isMenuOpen && (
                        <i className="bi bi-x nav-close" onClick={handleMenuClose}></i>
                    )}
                </div>

                {/* Theme Toggle */}
                {!isMenuOpen && (
                    <div className="switch-theme">
                        <ReactSwitch
                            onChange={toggleTheme}
                            checked={theme === "dark"}
                            onColor="#272727"
                            activeBoxShadow="0 0 2px 3px #272"
                        ></ReactSwitch>
                    </div>
                )}

                <div className="nav-toggle" onClick={handleMenuToggle}>
                    <i className="bi bi-list"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
