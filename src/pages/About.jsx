import styles from "./About.Module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.bgSquare}></div>
          <img
            src="/images/about.jpg"
            alt="Sunsys Global"
            className={styles.aboutImg}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>About Sunsys Global</h2>

          <p className={styles.text}>
            Sunsys Global is dedicated to delivering reliable and scalable solar
            energy solutions for homes, businesses, and industries across India.
          </p>

          <p className={styles.text}>
            We combine advanced photovoltaic technology, strong engineering
            expertise, and transparent execution to maximize energy output and
            minimize long-term costs.
          </p>

          <p className={styles.text}>
            From residential rooftops to commercial solar plants, we offer
            end-to-end installation, monitoring, and maintenance services.
          </p>

          <ul className={styles.list}>
            <li>✔ Expert system design & engineering</li>
            <li>✔ End-to-end project execution</li>
            <li>✔ High-efficiency solar modules</li>
            <li>✔ Smart monitoring & performance optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
