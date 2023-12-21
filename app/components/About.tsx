import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h2>About</h2>
      <div>{/* Explainer video goes here */}</div>
      <p>{/* About text goes here */}</p>
    </section>
  );
};

export default About;