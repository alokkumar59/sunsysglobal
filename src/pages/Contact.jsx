import React from "react";
import { FaPhoneAlt } from "react-icons/fa";   // <-- REQUIRED IMPORT
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get in Touch with Sunsys Global</h2>
        <p className={styles.subheading}>
          Have questions about our solar solutions or want a custom quote? We’re here to help.
        </p>

        <div className={styles.contentWrapper}>
          
          {/* CONTACT FORM */}
          <form className={styles.contactForm} id="quoteForm">
            <h3 className={styles.formTitle}>Request a Quote</h3>

            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Your Phone" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="projectType">Project Type</label>
              <input type="text" id="projectType" placeholder="Residential / Commercial / Industrial" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="location">Project Location</label>
              <input type="text" id="location" placeholder="City / State" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Additional Details</label>
              <textarea id="message" rows="5" placeholder="Your Message / Requirements"></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>Get a Quote</button>
          </form>

          
          {/* CONTACT INFO */}
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>

            <p>
              <strong>Address:</strong><br />
              Shop No. 6, H.NO. 44, Vaijanti Resort, Kalal Khairiya<br />
              Fatehabad Road, Agra, Uttar Pradesh – 282001
            </p>

            <p>
              <strong>Phone:</strong><br />
              <a href="tel:+919105837321" className={styles.link}>
                <FaPhoneAlt /> +91 9105837321
              </a>
            </p>

            <p>
              <strong>Email:</strong><br />
              <a href="mailto:sunsystechsol@gmail.com">sunsystechsol@gmail.com</a><br />
              <a href="mailto:admin@sunsystechsol.com">admin@sunsystechsol.com</a>
            </p>

            <h3>Office Hours</h3>
            <p>Mon - Sat: 9:00 AM - 9:00 PM</p>

            {/* MAP */}
            <div className={styles.mapEmbed}>
              <iframe
                title="Sunsys Global Location"
                src="https://www.google.com/maps?q=Vaijanti%20Resort%20Kalal%20Khairiya%20Fatehabad%20Road%20Agra&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
