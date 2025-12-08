import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.headerSection}>
        <h1>About Sunsys Techsol</h1>
        <p>Your trusted partner in Solar EPC, IT Services & Workforce Development.</p>
      </div>

      <section className={styles.section}>
        <h2>Who We Are</h2>
        <p>
          Sunsys Techsol Pvt. Ltd. is an ISO 9001:2015 certified LLP 
          delivering end-to-end solutions in Solar EPC, IT services, workforce 
          development, and technical training. We focus on reliable engineering, 
          measurable performance, and practical innovation.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          To provide dependable energy, technology, and training solutions that deliver 
          measurable value to individuals, businesses, and institutions.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Our Vision</h2>
        <p>
          To become a trusted name in clean energy, digital transformation, and 
          competency-based skill development across India.
        </p>
      </section>

      <section className={styles.section}>
        <h2>What We Do</h2>
        <ul>
          <li><strong>Solar EPC:</strong> Engineering, installation, commissioning & maintenance.</li>
          <li><strong>IT Services:</strong> Web/mobile development, cloud deployment & automation.</li>
          <li><strong>Training:</strong> Solar, IT, and corporate skill development programs.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Our Core Values</h2>
        <ul>
          <li>Quality</li>
          <li>Reliability</li>
          <li>Transparency</li>
          <li>Innovation</li>
          <li>Customer Focus</li>
        </ul>
      </section>

      <section className={styles.certSection}>
  <h2>Certification</h2>
  <img
    src="/assets/ISOCertificate.png"
    alt="ISO Certificate"
    className={styles.certImage}
  />
  <p>ISO 9001:2015 Certified by RQC (Radiance Quality Certifications), UK.</p>
</section>

       
    </div>
  );
};

export default About;
