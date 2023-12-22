import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.h2}>Contact</h2>
      <form action={'#'} method='post' className={styles.form}>
        {/* Form fields go here */}
        <div className={styles.inputGroup}>
          <input className={styles.input} type="text" id='name' name='name' placeholder='Name' required/>
          <span className={styles.span}></span>
          <input className={styles.input} type="email" name="email" id="email" placeholder='Email' required />
        </div>
        <textarea className={styles.textarea} name="message
        " id='message' placeholder='Message required'></textarea>
        <button className={styles.button} type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;