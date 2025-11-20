import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // make sure Link is imported

import styles from "./Home.module.css";


const getHeroImages = () => {
  return [
    {
      filename: "hero1.png",
      title: "Powering a Sustainable Future",
      subtitle: "Harness the limitless energy of the sun for a cleaner tomorrow.",
    },
    {
      filename: "hero2.png",
      title: "Reliable Solar Solutions for Every Need",
      subtitle: "From homes to industries — we design systems that deliver long-term performance.",
    },
    {
      filename: "hero3.jpg",
      title: "Empowering Communities Through Clean Energy",
      subtitle: "Transforming rural and urban lives with affordable solar technology.",
    },
  ];
};


const heroSlides = getHeroImages();

const whyCards = [
  { filename: "save-money.jpg", title: "Save Money", desc: "Reduce your electricity bills and generate your own power." },
  { filename: "eco.jpg", title: "Eco-Friendly", desc: "Clean energy solutions that help reduce carbon footprint." },
  { filename: "Independence.png", title: "Energy Independence", desc: "Stay protected from power cuts and rising electricity prices." },
];

const serviceCards = [
  { filename: "residential.jpg", title: "Residential Solar" },
  { filename: "commercial.jpg", title: "Commercial Solar" },
  { filename: "industrial.jpg", title: "Industrial Solar " },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i) => setIndex(i);

  return (
    <div className={styles.page}>
      {/* HERO SLIDER */}
      <section className={styles.hero}>
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
            style={{ backgroundImage: `url(/assets/hero/${slide.filename})` }}
          >
            <div className={styles.overlay}>
              <h1 className={styles.title}>{slide.title}</h1>
              <p className={styles.subtitle}>{slide.subtitle}</p>
              <div className={styles.ctaGroup}>
                <a href="#services" className={styles.btnPrimary}>Explore Solutions</a>
                <Link to="/contact" className={styles.btnGhost}>Contact Us</Link>
                </div>
            </div>
          </div>
        ))}

        <div className={styles.dots}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* WHY SOLAR */}
      <section id="why" className={styles.whySolar}>
        <div className={styles.container}>
          <h2>Why Choose Solar?</h2>
          <div className={styles.grid}>
            {whyCards.map((card, i) => (
              <div className={styles.card} key={i}>
                <img src={`/assets/${card.filename}`} alt={card.title} />
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <h2>Our Solar Solutions</h2>
          <div className={styles.grid}>
            {serviceCards.map((card, i) => (
              <div className={styles.card} key={i}>
                <img src={`/assets/${card.filename}`} alt={card.title} />
                <h4>{card.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2>Get a Free Solar Consultation</h2>
          <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" required />
            <textarea placeholder="Message" required />
            <button type="submit" className={styles.btnPrimary}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
