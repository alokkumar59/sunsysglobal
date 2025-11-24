import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import { 
  FaPhoneAlt, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube,
  FaClock, FaMapMarkerAlt, FaArrowRight, FaEllipsisV 
} from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <div className={styles.topBar}>
        <div className={styles.topLeft}>
        <span>
  <FaMapMarkerAlt /> Shop No. 6, H.NO. 44, Vaijanti Resort, Kalal Khairiya, Fatehabad Road, 
  Agra, Uttar Pradesh - 282001
</span>
          <span><FaClock /> Mon - Sat: 09.00 AM - 09.00 PM</span>
        </div>

        <div className={styles.topRight}>
          <a href="tel:+91 9105837321" className={styles.link}>
            <FaPhoneAlt /> +91 9105837321
          </a>

          <a href="https://www.facebook.com/people/Sunsys-Techsol/61577192545055/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebookF />
          </a>

          <a href="https://www.linkedin.com/company/sunsystechsol-pvt-ltd" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedinIn />
          </a>

          <a href="https://www.instagram.com/sunsys_techsol" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram />
          </a>

        
          <a href="https://www.youtube.com/@sunsystechsol" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/"><img src="/assets/logo.jpg" alt="logo" /></Link>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <FaEllipsisV />
        </div>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          <Link to="/" className={styles.active} onClick={closeMenu}>HOME</Link>
          <Link to="/about" onClick={closeMenu}>ABOUT</Link>
          <Link to="/services" onClick={closeMenu}>SERVICE</Link>
          <Link to="/projects" onClick={closeMenu}>PROJECT</Link>
          <Link to="/contact" onClick={closeMenu}>CONTACT</Link>

          <Link to="/contact" className={styles.quoteBtn} onClick={closeMenu}>  Get A Quote <FaArrowRight />        </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
