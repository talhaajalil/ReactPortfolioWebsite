import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Talha Jalil</h3>
            <p>DevOps Engineer passionate about cloud infrastructure and automation</p>
          </div>
          
          <div className={styles.social}>
            <a href="https://github.com/talhaajalil" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href="https://linkedin.com/in/talhaajalil" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href="mailto:talha@example.com">
              <FiMail />
            </a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>
            © {currentYear} Talha Jalil. Made with <FiHeart className={styles.heart} /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;