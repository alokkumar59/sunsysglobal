import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="platforms-section">
        <h1>Our Other Platforms</h1>
        <div className="platforms">

          <div className="card">
            <a href="https://internsaathi.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/intersaathi.jpg" alt="Intern Saathi" />
            </a>
            <p>Your Gateway to Industry-Ready Internships.</p>
          </div>

          <div className="card">
            <a href="https://naukrisaathi.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/naukrisaathi.jpg" alt="Naukri Saathi" />
            </a>
            <p>Naukri Saathi: Connecting Talent with the Right Opportunities Nationwide.</p>
          </div>

          <div className="card">
            <a href="https://tasksaathi.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/tasksaathi.jpg" alt="Task Saathi" />
            </a>
            <p>Make Work Simple, Smart, and Stress-Free with Task Saathi.</p>
          </div>

          <div className="card">
            <a href="https://kaushalsaathi.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/kaushalsaathi.jpg" alt="Kaushal Saathi" />
            </a>
            <p>Kaushal Saathi: Bridging Skills with Opportunities for Women Nationwide.</p>
          </div>

          <div className="card">
            <a href="https://www.chalosaathi.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/chalosaathi.jpg" alt="Chalo Saathi" />
            </a>
            <p>Connect with fellow commuters, share rides safely, and reduce travel costs.</p>
          </div>

        </div>
      </section>

      {/* --- Footer Bottom --- */}
      <div className="footer-bottom">
      <div className="contact">
  <h4>Contact Us :</h4>
  <p>
    <a href="mailto:info@chalosaathi.com">info@chalosaathi.com</a>
  </p>
  <p>
    <a href="mailto:admin@chalosaathi.com">admin@chalosaathi.com </a>
  </p>
</div>

        <div className="powered">
          <p>
            Powered by <img src="/assets/logo.jpg" alt="Sunsys Techsol" className="powered-logo" />
          </p>
        </div>

        {/* --- Updated Social Icons --- */}
        <div className="social">
          <h4>Follow us on</h4>
          <div className="icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
              <FaInstagram />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="icon">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>
          © 2025 Sunsys. All Rights Reserved. |{" "}
          <a href="/privacy">Privacy Policy</a> |{" "}
          <a href="/terms">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
