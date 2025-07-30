import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { resumeData } from '../../data/resumeData';

const Experience: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { experience } = resumeData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-responsive">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600 transform md:-translate-x-0.5"></div>

            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-4'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg ${
                  index % 2 === 0 
                    ? 'left-2 md:right-[-0.5rem] md:left-auto' 
                    : 'left-2 md:left-[-0.5rem]'
                } top-8`}></div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="card ml-12 md:ml-0 hover:border-primary-200 dark:hover:border-primary-800 relative"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.position}
                      </h3>
                      <h4 className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-3">
                        {exp.company}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">
                        {exp.startDate} - {exp.endDate}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: achIndex * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <ChevronRight 
                          size={16} 
                          className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" 
                        />
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Want to learn more about my professional journey?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/VS_RESUME.pdf';
                  link.download = 'Sharan_Vaitheeswaran_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="btn-primary"
              >
                Download Full Resume
              </button>
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Projects
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;