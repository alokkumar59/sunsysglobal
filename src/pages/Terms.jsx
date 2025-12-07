import React from "react";
import styles from "./terms.module.css";

export default function Terms() {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <p className={styles.updated}>Last updated: December 2025</p>

      <p className={styles.intro}>
        VISITORS TO THIS WEBSITE ARE BOUND BY THE FOLLOWING TERMS AND CONDITIONS ("TERMS"). PLEASE READ THE TERMS CAREFULLY BEFORE CONTINUING TO USE THIS SITE. IF YOU DO NOT AGREE WITH ANY OF THESE TERMS, PLEASE DO NOT USE THIS SITE.
      </p>

      <div className={styles.section}>
        <h2 className={styles.heading}>1. Use of Website</h2>
        <p className={styles.text}>
          The use of this website is subject to the following terms of use. The content of the pages of this website is for your general information and use only. It is subject to change without notice.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>2. Cookies</h2>
        <p className={styles.text}>
          This website uses cookies to monitor browsing preferences. If you allow cookies to be used, personal information may be stored by us for use by third parties.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>3. Accuracy and Disclaimer</h2>
        <p className={styles.text}>
          Neither Sunsys Global nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found on this website for any particular purpose. You acknowledge that such information may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies to the fullest extent permitted by law.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>4. Responsibility</h2>
        <p className={styles.text}>
          Your use of any information or materials on this website is entirely at your own risk. It is your responsibility to ensure that any products, services, or information available through this website meet your specific requirements.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>5. Intellectual Property</h2>
        <p className={styles.text}>
          This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>6. Trademarks</h2>
        <p className={styles.text}>
          All products, logos, and marks denoted with “TM” or “®” are trademarks or registered trademarks of Sunsys Global or its affiliates. Trademarks may not be used in connection with any product or service that is not affiliated with Sunsys Global.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>7. Unauthorized Use</h2>
        <p className={styles.text}>
          Unauthorized use of this website may give rise to a claim for damages and/or constitute a criminal offense.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>8. Third-Party Links</h2>
        <p className={styles.text}>
          From time to time, this website may include links to other websites. These links are provided for convenience only and do not signify endorsement by Sunsys Global. We are not responsible for the content of linked websites.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>9. Governing Law and Jurisdiction</h2>
        <p className={styles.text}>
          Applicable law and jurisdiction of this website are governed by the laws of India. In the event of any dispute, the user agrees to submit to the courts located in Ahmedabad for resolution.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.heading}>10. Contact Us</h2>
        <p className={styles.text}>
          If you have any questions regarding these Terms & Conditions, please contact us at:
        </p>
        <p className={styles.contactEmail}>
          <a href="mailto:sunsystechsol@gmail.com">sunsystechsol@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
