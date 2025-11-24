import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

export default function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      projectType: form.projectType.value,
      location: form.location.value,
      message: form.message.value,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzJvf7TSYo7wzSpEEtgJXx-BA4GwOkpd22_YzuogrRTO0ptqBGIGad5lZps6vahWRnT/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      alert("Your request has been submitted!");
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Form submission failed.");
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>

        <h2 className={styles.heading}>Get in Touch with Sunsys Global</h2>
        <p className={styles.subheading}>
          Have questions about our solar solutions or want a custom quote? We’re here to help.
        </p>

        <div className={styles.contentWrapper}>
          
          <form className={styles.contactForm} id="quoteForm" onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Request a Quote</h3>

            <div className={styles.formGroup}>
  <label>Full Name</label>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    pattern="^[A-Za-z ]+$"
    title="Only alphabets and spaces are allowed"
  />
</div>

<div className={styles.formGroup}>
  <label>Email</label>
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
  />
</div>

<div className={styles.formGroup}>
  <label>Phone Number</label>
  <input
    type="tel"
    name="phone"
    placeholder="Your Phone"
    required
    pattern="^[0-9]{10}$"
    title="Enter a valid 10-digit phone number"
  />
</div>

<div className={styles.formGroup}>
  <label>Project Type</label>
  <input
    type="text"
    name="projectType"
    placeholder="Residential / Commercial / Industrial"
    required
  />
</div>

<div className={styles.formGroup}>
  <label>Project Location</label>
  <input
    type="text"
    name="location"
    placeholder="City / State"
    required
  />
</div>

<div className={styles.formGroup}>
  <label>Additional Details</label>
  <textarea
    name="message"
    rows="5"
    placeholder="Your Message / Requirements"
  ></textarea>
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

            <div className={styles.mapEmbed}>
              <iframe
                title="Sunsys Global Location"
                src="https://www.google.com/maps?q=Vaijanti%20Resort%20Kalal%20Khairiya%20Fatehabad%20Road%20Agra&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
