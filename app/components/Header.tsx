import Image from 'next/image';
import DP from '../media/profile-pic.jpg';
import styles from '../styles/Header.module.css';


const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.overlay}>
          <Image className={styles.dp} src={DP} width="124" height="124" alt="" />
          <h1>Joe Boadi Orion</h1>
          <p>A Beginner Web Developer at The PAD Forum</p>
          {/* Social links go here */}
        </div>
     </header>
  );
};

export default Header;