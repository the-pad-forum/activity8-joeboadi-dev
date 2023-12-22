import styles from '../styles/Skills.module.css';

const Skills = () => {
  return (
    <section className={styles.skillSection}>
      <h2>Skills</h2>
      {/* Skill contents go here */}
      <div className={styles.skill}>
			<span className={styles.skillName}>CSS</span>
			<div className = {styles.progressBar} style={{width:'59%'}}>
				<div className={styles.filled}></div>
			</div>
			<span className = {styles.skillPercent}>50%</span>
		</div>

    <div className={styles.skill}>
			<span className={styles.skillName}>JS</span>
			<div className = {styles.progressBar}>
				<div className={styles.filled}></div>
			</div>
			<span className = {styles.skillPercent}>67%</span>
		</div>

    <div className={styles.skill}>
			<span className={styles.skillName}>Python</span>
			<div className = {styles.progressBar}>
				<div className={styles.filled}></div>
			</div>
			<span className = {styles.skillPercent}>70%</span>
		</div>

    <div className={styles.skill}>
			<span className={styles.skillName}>Communication</span>
			<div className = {styles.progressBar}>
				<div className={styles.filled}></div>
			</div>
			<span className = {styles.skillPercent}>50%</span>
		</div>
    </section>
  );
};

export default Skills;