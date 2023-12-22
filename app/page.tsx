import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './styles/page.module.css'

const Home = () => {
  return (
    <div className={styles.homeContainer}>
       <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;