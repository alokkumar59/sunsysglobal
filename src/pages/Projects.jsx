import React, { useEffect } from "react";
import styles from "./Projects.module.css";

export default function Projects() {
  const completedProjects = [
    { title: "Rooftop Solar for School", desc: "Installed a 50kW rooftop solar system at a local school.", img: "/public/assets/servicepage/project1.png" },

    { title: "Industrial Solar Plant", desc: "500kW solar power plant for a manufacturing unit.", img: "/public/assets/servicepage/project2.png" },
    { title: "Off-Grid Solar Village", desc: "Implemented off-grid solar systems for rural households.", img: "/public/assets/servicepage/project3.png" },
    { title: "Commercial Rooftop", desc: "120kW rooftop solar system for a shopping complex.", img: "/public/assets/servicepage/project4.png" },
    { title: "Hybrid Solar System", desc: "Hybrid on-grid & off-grid system for a remote industrial unit.", img: "/public/assets/servicepage/project5.png" },
    { title: "Solar Consultancy", desc: "Complete project planning and ROI forecasting for corporate clients.", img: "/public/assets/servicepage/project6.png" },
  ];

  const upcomingProjects = [
    { title: "Utility Scale Solar Plant", desc: "1MW plant installation scheduled for Q2 2025.", img: "/public/assets/servicepage/project7.png" },
    { title: "Rooftop Expansion Program", desc: "Expanding rooftop installations in 3 major cities.", img: "/public/assets/servicepage/project8.png" },
    { title: "Remote Village Electrification", desc: "Off-grid solar setups planned for rural villages.", img: "/public/assets/servicepage/project9.png" },
    { title: "Industrial Efficiency Upgrade", desc: "Retrofitting older plants with high-efficiency panels.", img: "/public/assets/servicepage/project10.png" },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.projectCard}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.fadeIn);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Solar Projects</h2>
        <p className={styles.subheading}>
          Demonstrating quality, efficiency, and sustainability through our completed and upcoming projects.
        </p>

        <h3 className={styles.sectionTitle}>Completed Projects</h3>
        <div className={styles.projectsGrid}>
          {completedProjects.map((p, i) => (
            <div key={i} className={styles.projectCard}>
              <img src={p.img} alt={p.title} className={styles.projectImg} />
              <div className={styles.projectContent}>
                <h4 className={styles.projectTitle}>{p.title}</h4>
                <p className={styles.projectDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className={styles.sectionTitle}>Upcoming Projects</h3>
        <div className={styles.projectsGrid}>
          {upcomingProjects.map((p, i) => (
            <div key={i} className={styles.projectCard}>
              <img src={p.img} alt={p.title} className={styles.projectImg} />
              <div className={styles.projectContent}>
                <h4 className={styles.projectTitle}>{p.title}</h4>
                <p className={styles.projectDesc}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Want to Start Your Solar Project?</h2>
          <p className={styles.ctaSubtitle}>
            Our experts at Sunsys Global will help you plan, design, and implement a high-performance solar solution.
          </p>
          <a href="/contact" className={styles.ctaBtn}>Contact Us</a>
        </div>
      </div>
    </section>
  );
}
