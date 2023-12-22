import Image from 'next/image';
import DP from '../media/profile-pic.jpg';
import styles from '../styles/Header.module.css';
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/facebook'
import 'react-social-icons/x'
import 'react-social-icons/linkedin'
import 'react-social-icons/discord'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <Image className={styles.dp} src={DP} width="124" height="124" alt="" />
        <h1>Joe Boadi Orion</h1>
        <p>A Beginner Web Developer at The PAD Forum</p>
          {/* Social links go here */}
          <SocialIcon url="https://www.facebook.com/profile.php?id=100095549220353&mibextid=2JQ9oc" target='_blank' />
          <SocialIcon url="https://x.com/joeboadiDev_?t=u2KiKAn8-pioz1Q80HYLgA&s=09" target='_blank' />
          <SocialIcon url="https://www.linkedin.com/in/kwadjo-boadi-mantey-43b670271" target='_blank' />
          <SocialIcon url="https://discord.com/users/1020877777706176563" target='_blank' />
       </div>
    </header>
  );
};

export default Header;