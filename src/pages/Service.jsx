import React from "react";
import { motion } from "framer-motion";
import styles from "./Service.module.css";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const services = [
    { title: "Solar Panel Installation", desc: "High-efficiency solar panels installed with precision engineering." },
    { title: "Solar EPC Services", desc: "End-to-end design, procurement, and construction for large projects." },
    { title: "Rooftop Solar Systems", desc: "Affordable rooftop systems for homes, schools, and small businesses." },
    { title: "Maintenance & Repair", desc: "Scheduled and on-demand maintenance for optimized performance." },
    { title: "Solar Consultancy", desc: "Expert guidance, load analysis, and long-term financial projections." },
    { title: "Hybrid & Off-Grid Systems", desc: "Reliable solar solutions for rural, remote, and unstable-grid regions." },
  ];

  return (
    <div className={styles.page}>
      
      <section className={styles.hero}>
        <div className={styles.container}>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.heroTitle}
          >
            Our Solar Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Smart. Reliable. Affordable. Tailored for homes, businesses, and industries.
          </motion.p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>

          <div className={styles.grid}>
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={styles.card}
              >
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.ctaTitle}>
            Ready to Go Solar?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={styles.ctaSubtitle}
          >
            Let Sunsys Global build a world-class solar solution for you.
          </motion.p>

          <Link to="/contact" className={styles.ctaBtn}>Contact Us</Link>
        </div>
      </section>

    </div>
  );
}
