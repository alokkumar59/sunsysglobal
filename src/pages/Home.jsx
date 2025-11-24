import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const getHeroImages = () => [
  { filename: "hero1.png", title: "Powering a Sustainable Future", subtitle: "Harness the limitless energy of the sun for a cleaner tomorrow." },
  { filename: "hero2.png", title: "Reliable Solar Solutions for Every Need", subtitle: "From homes to industries — we design systems that deliver long-term performance." },
  { filename: "hero3.jpg", title: "Empowering Communities Through Clean Energy", subtitle: "Transforming rural and urban lives with affordable solar technology." },
];

const heroSlides = getHeroImages();

const whyCards = [
  { filename: "save-money.jpg", title: "Save Money", desc: "Reduce your electricity bills and generate your own power." },
  { filename: "eco.jpg", title: "Eco-Friendly", desc: "Clean energy solutions that help reduce carbon footprint." },
  { filename: "Independence.png", title: "Energy Independence", desc: "Stay protected from power cuts and rising electricity prices." },
];

const serviceCards = [
  { filename: "residential.jpg", title: "Residential Solar" },
  { filename: "commercial.jpg", title: "Commercial Solar" },
  { filename: "industrial.jpg", title: "Industrial Solar" },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    hp: "",
    projectType: "Consulting",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const API_URL =
    "https://script.google.com/macros/s/AKfycbzJvf7TSYo7wzSpEEtgJXx-BA4GwOkpd22_YzuogrRTO0ptqBGIGad5lZps6vahWRnT/exec";

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (i) => setIndex(i);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
  const validPhone = (s) => /^\d{10}$/.test(s);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.hp && form.hp.trim() !== "") {
      setResult({ type: "error", text: "Submission blocked." });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      setResult({ type: "error", text: "Please fill all fields." });
      return;
    }
    if (!validEmail(form.email.trim())) {
      setResult({ type: "error", text: "Please enter a valid email." });
      return;
    }
    if (!validPhone(form.phone.trim())) {
      setResult({ type: "error", text: "Please enter a valid 10-digit phone number." });
      return;
    }

    setLoading(true);
    setResult(null);

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim(),
      projectType: form.projectType, 
    };

    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setResult({ type: "success", text: "Your message has been sent successfully!" });
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
        hp: "",
        projectType: "Consulting",
      });
    } catch (err) {
      console.error("submit error:", err);
      setResult({ type: "error", text: "Form submission failed." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
            style={{ backgroundImage: `url(/assets/hero/${slide.filename})` }}
            aria-hidden={i === index ? "false" : "true"}
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

      <section id="why" className={styles.whySolar}>
        <div className={styles.container}>
          <h2>Why Choose Solar?</h2>
          <div className={styles.grid}>
            {whyCards.map((card, i) => (
              <div className={styles.card} key={i}>
                <img src={`/assets/${card.filename}`} alt={card.title} loading="lazy" />
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <h2>Our Solar Solutions</h2>
          <div className={styles.grid}>
            {serviceCards.map((card, i) => (
              <div className={styles.card} key={i}>
                <img src={`/assets/${card.filename}`} alt={card.title} loading="lazy" />
                <h4>{card.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2>Get a Free Solar Consultation</h2>

          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <input type="text" name="hp" value={form.hp} onChange={handleChange} style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

            <input type="hidden" name="projectType" value={form.projectType} readOnly />

            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />

            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required />

            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number (10 digits)" required />

            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows="4" required />

            <button type="submit" className={styles.btnPrimary} disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>

            {result && (
              <p
                className={styles.formResult}
                style={{
                  marginTop: "0.75rem",
                  color: result.type === "success" ? "green" : "#c0392b",
                }}
              >
                {result.text}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
