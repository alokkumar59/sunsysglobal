import React, { useEffect } from "react";
import styles from "./About.module.css";
import { FaSolarPanel, FaBolt, FaShield, FaLeaf } from "react-icons/fa6";

export default function About() {
  
  useEffect(() => {
    const elements = document.querySelectorAll(`.${styles.featureBox}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            Powering a Sustainable Future with <span>Sunsys Global</span>
          </h2>

          <p className={styles.desc}>
            Sunsys Global delivers high-performance solar solutions for homes, businesses, 
            and industries across India. Our mission is simple — make clean energy accessible, 
            affordable, and reliable for everyone.
          </p>

          <div className={styles.features}>
            <div className={styles.featureBox}>
              <FaSolarPanel className={styles.icon} />
              <h4>High Efficiency Panels</h4>
              <p>Cutting-edge technology built for maximum output.</p>
            </div>

            <div className={styles.featureBox}>
              <FaBolt className={styles.icon} />
              <h4>24/7 System Monitoring</h4>
              <p>Real-time energy tracking and performance insights.</p>
            </div>

            <div className={styles.featureBox}>
              <FaShield className={styles.icon} />
              <h4>Guaranteed Safety</h4>
              <p>Premium installation quality with advanced protection.</p>
            </div>

            <div className={styles.featureBox}>
              <FaLeaf className={styles.icon} />
              <h4>Eco-Friendly Approach</h4>
              <p>Helping India reduce carbon emissions at scale.</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <img src="/public/assets/hero/hero3.jpg.jpg" alt="Sunsys Global" />
            <div className={styles.experienceBox}>
              <h3>10+ Years</h3>
              <p>Of Solar Excellence</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
