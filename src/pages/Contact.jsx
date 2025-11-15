import React from "react";
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
          {/* CONTACT FORM / GET A QUOTE */}
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
            <p><strong>Address:</strong> 123 Solar Street, Delhi, India</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> info@sunsysglobal.com</p>

            <h3>Office Hours</h3>
            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
            <p>Sat: 10:00 AM - 2:00 PM</p>

            <div className={styles.mapPlaceholder}>
              <p>Map Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
