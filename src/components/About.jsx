import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>About Me</h2>
          
          <div className={styles.grid}>
            <div className={styles.text}>
              <p>
                I'm a passionate DevOps Engineer currently working at CareCloud, where I focus on 
                building and maintaining robust cloud infrastructure. With expertise in AWS, 
                Kubernetes, and modern DevOps practices, I help teams deliver software faster 
                and more reliably.
              </p>
              
              <p>
                My journey in technology has led me to specialize in container orchestration, 
                CI/CD pipeline automation, and infrastructure as code. I believe in the power 
                of automation to solve complex problems and enable teams to focus on what matters most.
              </p>
              
              <p>
                When I'm not working on infrastructure, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the DevOps community.
              </p>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.stat}>
                <h3>50+</h3>
                <p>Projects Deployed</p>
              </div>
              <div className={styles.stat}>
                <h3>99.9%</h3>
                <p>Uptime Achieved</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;