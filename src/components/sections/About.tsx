import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Zap } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { resumeData } from '../../data/resumeData';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { personalInfo } = resumeData;

  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "2+ years of experience building scalable web applications with React, Angular, and Python"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Systems",
      description: "Expert in designing APIs, optimizing database queries, and managing data architecture"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Experienced in AWS services, Kubernetes deployments, and CI/CD pipeline management"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Focused on clean code, maintainability, and performance improvements across systems"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-responsive">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalInfo.short_summary}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I recently earned my Master’s in Computer Science from the University of Washington,
                  where I worked on projects ranging from government platforms to consumer-facing products, always
                  prioritizing scalability and user experience.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                  and staying up-to-date with the latest developments in software engineering and AI.
                </p>
              </div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-gradient mb-2">2+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-gradient mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Major Features Shipped</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Interested in working together? Let's talk about your next project.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;