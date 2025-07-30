import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'CareCloud',
      period: '2023 - Present',
      location: 'Remote',
      responsibilities: [
        'Designed and implemented CI/CD pipelines using Jenkins and GitLab CI',
        'Managed AWS infrastructure including EC2, ECS, RDS, and Lambda services',
        'Orchestrated container deployments using Kubernetes and Docker',
        'Automated infrastructure provisioning with Terraform and CloudFormation',
        'Implemented monitoring solutions with Prometheus and Grafana',
        'Reduced deployment time by 60% through automation initiatives'
      ]
    },
    {
      title: 'Cloud Engineer',
      company: 'Previous Company',
      period: '2022 - 2023',
      location: 'Pakistan',
      responsibilities: [
        'Migrated legacy applications to cloud-native architecture',
        'Implemented Infrastructure as Code using Terraform',
        'Set up monitoring and alerting systems for production environments',
        'Collaborated with development teams to optimize application performance',
        'Maintained 99.9% uptime for critical production systems'
      ]
    },
    {
      title: 'Junior DevOps Engineer',
      company: 'Tech Startup',
      period: '2021 - 2022',
      location: 'Pakistan',
      responsibilities: [
        'Assisted in setting up CI/CD pipelines',
        'Managed Docker containers and basic Kubernetes deployments',
        'Supported development teams with environment setup',
        'Learned and implemented best practices for cloud infrastructure'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Professional Experience</h2>
          <p className={styles.subtitle}>
            My journey in DevOps and cloud engineering
          </p>
        </motion.div>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <h3 className={styles.jobTitle}>{exp.title}</h3>
                  <div className={styles.company}>
                    <span className={styles.companyName}>{exp.company}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                
                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;