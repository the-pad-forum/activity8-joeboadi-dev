import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      ©2023, The PAD Forum. All Rights Reserved. <br />
      <small>Made with NextJS</small>
    </footer>
  );
};

export default Footer;