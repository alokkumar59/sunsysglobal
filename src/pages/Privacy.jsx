import React from "react";
import styles from "./privacy.module.css";

export default function Privacy() {
  return (
    <div className={styles.privacyContainer}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: December 2025</p>

      <p className={styles.intro}>
        At <strong>Sunsys Global</strong>, your privacy is a top priority. This Privacy Policy explains the types of information we collect, how we use it, and the measures we take to protect your personal data while you use our website and services.
      </p>

      <div className={styles.section}>
        <h2 className={styles.heading}>1. Information We Collect</h2>
        <p>
          We collect information to provide and improve our services. This may include:
        </p>
        <ul className={styles.list}>
          <li>Personal details such as name, email address, and phone number.</li>
          <li>Usage data such as pages visited, time spent on the site, and interaction patterns.</li>
          <li>Cookies and analytics data to enhance your browsing experience.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>2. How We Use Your Information</h2>
        <p>
          The information we collect is used for the following purposes:
        </p>
        <ul className={styles.list}>
          <li>To deliver our services effectively and personalize your experience.</li>
          <li>To communicate updates, promotional materials, and important announcements.</li>
          <li>To analyze and improve the performance of our website and services.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>3. Data Protection & Security</h2>
        <p>
          We implement industry-standard security measures to protect your data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>4. Third-Party Sharing</h2>
        <p>
          We value your trust and do not sell your personal information. We may share data only with trusted partners who assist us in providing our services, such as hosting providers, payment processors, or analytics providers, strictly under confidentiality agreements.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>5. Your Rights</h2>
        <p>
          You have full control over your personal data. You can:
        </p>
        <ul className={styles.list}>
          <li>Request access to the data we hold about you.</li>
          <li>Request corrections to any inaccurate information.</li>
          <li>Request deletion of your personal data, where applicable.</li>
          <li>Opt-out of marketing communications at any time.</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>6. Cookies</h2>
        <p>
          Our website uses cookies to improve functionality and enhance user experience. You can manage or disable cookies through your browser settings.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices or regulations. We recommend reviewing this page periodically to stay informed about how we protect your data.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>8. Contact Us</h2>
        <p>
          For any questions, concerns, or requests regarding your privacy, please contact us at:
        </p>
        <p className={styles.contactEmail}>
          <a href="mailto:sunsystechsol@gmail.com">sunsystechsol@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
