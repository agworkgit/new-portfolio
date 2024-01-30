import { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import { Link } from 'react-router-dom';
import { animateScroll as scroll, scroller } from "react-scroll";

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

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };

    return (
        <header className="header">
          <nav className="nav container">
            <Link to="/" className="nav-logo">Alex Grigore</Link>
    
            <div className={isMenuOpen ? "nav-menu show-menu" : "nav-menu"}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={() => {handleMenuClose(); scrollToSection("home");}}>
                    <i className="bi bi-house nav-icon"></i> Home
                  </Link>
                </li>
    
                <li className="nav-item">
                  <Link to="/#about" className="nav-link" onClick={() => {handleMenuClose(); scrollToSection("about");}}>
                    <i className="bi bi-person-circle nav-icon"></i> About
                  </Link>
                </li>
    
                <li className="nav-item">
                  <Link to="/#skills" className="nav-link" onClick={() => {handleMenuClose(); scrollToSection("skills");}}>
                    <i className="bi bi-tools nav-icon"></i> Skills
                  </Link>
                </li>
    
                <li className="nav-item">
                  <Link to="/#services" className="nav-link" onClick={() => {handleMenuClose(); scrollToSection("services");}}>
                    <i className="bi bi-briefcase nav-icon"></i> Services
                  </Link>
                </li>
    
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link" onClick={() => {handleMenuClose(); scrollToSection("portfolio");}}>
                    <i className="bi bi-file-earmark-code nav-icon"></i> Portfolio
                  </Link>
                </li>
    
                <li className="nav-item">
                  <Link to="/contact" className="nav-link" onClick={() => {handleMenuClose(); scrollToSection("contact");}}>
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
                  onColor="#4e4e4e"
                  activeBoxShadow="0 0 2px 3px #272"
                ></ReactSwitch>
              </div>
            )}
    
            <div className="nav-toggle" onClick={handleMenuToggle}>
              <i className="bi bi-list"></i>
            </div>
          </nav>
        </header>
      );
    }

export default Header;
