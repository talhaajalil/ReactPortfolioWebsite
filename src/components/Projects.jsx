import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Cloud Infrastructure Automation',
      description: 'Terraform-based infrastructure automation supporting AWS, Azure, and GCP with centralized state management and automated CI/CD deployment.',
      technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'GitLab CI'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Kubernetes Monitoring Stack',
      description: 'Complete monitoring solution for Kubernetes clusters using Prometheus, Grafana, and AlertManager with custom dashboards and alerting rules.',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'AlertManager', 'Helm'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'CI/CD Pipeline Template',
      description: 'Reusable CI/CD pipeline templates for microservices deployment with automated testing, security scanning, and deployment strategies.',
      technologies: ['Jenkins', 'Docker', 'SonarQube', 'Trivy', 'ArgoCD'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Infrastructure Cost Optimizer',
      description: 'Python-based tool for analyzing and optimizing cloud infrastructure costs with automated recommendations and cost tracking.',
      technologies: ['Python', 'AWS Cost Explorer', 'Boto3', 'Flask', 'Chart.js'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Microservices Health Monitor',
      description: 'Real-time health monitoring system for microservices with automated failover and self-healing capabilities.',
      technologies: ['Go', 'Redis', 'Docker', 'Consul', 'Nginx'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'GitOps Deployment Platform',
      description: 'GitOps-based deployment platform with automated rollbacks, canary deployments, and comprehensive audit trails.',
      technologies: ['ArgoCD', 'Flux', 'Kubernetes', 'Helm', 'Istio'],
      github: '#',
      demo: '#',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.subtitle}>
            DevOps and infrastructure projects I've worked on
          </p>
        </motion.div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.projectImage}>
                <div className={styles.placeholder}>
                  <span>Project Diagram</span>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={styles.projectLinks}>
                  <a href={project.github} className={styles.link}>
                    <FiGithub /> Code
                  </a>
                  <a href={project.demo} className={styles.link}>
                    <FiExternalLink /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;