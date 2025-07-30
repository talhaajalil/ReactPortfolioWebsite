import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: ['AWS', 'Azure', 'Google Cloud Platform', 'DigitalOcean']
    },
    {
      title: 'Container Technologies',
      skills: ['Docker', 'Kubernetes', 'Container Orchestration', 'Helm']
    },
    {
      title: 'CI/CD & Automation',
      skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Azure DevOps']
    },
    {
      title: 'Infrastructure as Code',
      skills: ['Terraform', 'CloudFormation', 'Ansible', 'Pulumi']
    },
    {
      title: 'Monitoring & Logging',
      skills: ['Prometheus', 'Grafana', 'ELK Stack', 'DataDog']
    },
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Bash', 'Go', 'YAML']
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Web Technologies',
      skills: ['React', 'Node.js', 'Express.js', 'REST APIs']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Skills & Technologies</h2>
          <p className={styles.subtitle}>
            Technologies and tools I work with to build scalable and reliable systems
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className={styles.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <span key={skill} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;