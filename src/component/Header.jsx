import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import { 
  FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaInstagram, 
  FaClock, FaMapMarkerAlt, FaArrowRight, FaEllipsisV 
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {/* Overlay */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <span><FaMapMarkerAlt /> Behind Central Bank of India,Noida   </span>
          <span><FaClock />    Mon - Sat : 09.00 AM - 09.00 PM</span>
        </div>
        <div className={styles.topRight}>
      {/* Phone Number */}
      <a href="tel:+91**********" className={styles.link}>
        <FaPhoneAlt /> +91-**********
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
      >
        <FaFacebookF />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
      >
        <FaLinkedinIn />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.icon}
      >
        <FaInstagram />
      </a>
    </div>
      </div>

      {/* Navbar */}
      
<      div className={styles.navbar}>
  <div className={styles.logo}>
    <Link to="/"><img src="/assets/logo.jpg" alt="logo" /></Link>
  </div>
        {/* Hamburger */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          <FaEllipsisV />
        </div>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
  <Link to="/" className={styles.active} onClick={closeMenu}>HOME</Link>
  <Link to="/about" onClick={closeMenu}>ABOUT</Link>
  <Link to="/services" onClick={closeMenu}>SERVICE</Link>
  <Link to="/projects" onClick={closeMenu}>PROJECT</Link>
  <Link to="/contact" onClick={closeMenu}>CONTACT</Link>

  <Link to="/contact" className={styles.quoteBtn} onClick={closeMenu}>
    Get A Quote <FaArrowRight />
  </Link>
</nav>
      </div>
    </header>
  );
};

export default Header;
