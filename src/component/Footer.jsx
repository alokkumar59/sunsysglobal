import React from "react";
import "./Footer.css";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Platforms Section */}
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
            <p>Connecting Talent with the Right Opportunities Nationwide.</p>
          </div>

          <div className="card">
            <a href="https://tasksaathi.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/tasksaathi.jpg" alt="Task Saathi" />
            </a>
            <p>Make Work Simple and Smart with Task Saathi.</p>
          </div>

          <div className="card">
            <a href="https://kaushalsaathi.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/kaushalsaathi.jpg" alt="Kaushal Saathi" />
            </a>
            <p>Bridging Skills With Opportunities for Women Nationwide.</p>
          </div>

          <div className="card">
            <a href="https://www.chalosaathi.com/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/chalosaathi.jpg" alt="Chalo Saathi" />
            </a>
            <p>Connect, share rides safely, and reduce travel costs.</p>
          </div>

        </div>
      </section>

      {/* Footer Main */}
      <div className="footer-bottom">

        <div className="contact">
          <h4>Contact Us</h4>
          <p><a href="mailto:sunsystechsol@gmail.com">sunsystechsol@gmail.com</a></p>
          <p><a href="mailto:admin@sunsystechsol.com">admin@sunsystechsol.com</a></p>
        </div>

        <div className="certification">
          <h4>Certification</h4>
          <p>ISO 9001:2015 Certified LLP</p>
          <small>Quality Management System</small>
        </div>

        <div className="social">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="https://www.facebook.com/people/Sunsys-Techsol/61577192545055/" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/sunsystechsol-pvt-ltd" target="_blank">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/sunsys_techsol" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://www.youtube.com/@sunsystechsol" target="_blank">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>
          © 2025 Sunsys. All Rights Reserved. |{" "}
          <a href="/privacy">Privacy Policy</a> |{" "}
          <a href="/terms">Terms & Conditions</a> |{" "}
          Developed by{" "}
          <a href="mailto:studentalokkumar1278@gmail.com">Alok Kumar</a> |{" "}
          Designed by{" "}
          <a href="mailto:rahuluser.rk@gmail.com">Rahul Kashyap</a> |{" "}
          QA/Tester:{" "}
          <a href="mailto:shreyabansal2806@gmail.com">Shreya Bansal</a>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
