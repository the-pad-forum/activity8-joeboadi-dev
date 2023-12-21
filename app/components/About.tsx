import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h2>About</h2>
      <div>{
        <video><source src="../media/web-dev.mp4" type="video/mp4"/></video>
        }
      </div>
      <p>
        {/* About text goes here */}
        👋 Hello, I am Joe, a passionate software engineer with nearly a year of professional experience. Armed with a BSc in Computer Science and Engineering, my focus extends to the dynamic realms of information security and leveraging AI to fortify digital landscapes.

        💻 My tech toolkit includes Next.js, Node.js, and Python, and I revel in crafting robust software solutions that elevate organizations and delight clients.

        🎧 When I am not immersed in code, you will find me immersed in podcasts or buried in the pages of a compelling tech book, staying ahead of the curve on the latest in technology and trends. I am an avid contributor to the software engineering community, always eager to share knowledge and insights.

        🎹 Beyond the keyboard, I find harmony playing the piano and engage in various extracurricular activities that add color to life.
      </p>
    </section>
  );
};

export default About;