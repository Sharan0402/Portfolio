import React from 'react';
import { motion } from 'framer-motion';
import { Github, ChevronRight, Star } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { resumeData } from '../../data/resumeData';

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { projects } = resumeData;

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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-responsive">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, 
              AI integration, and system design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden"
              >
                <div className="card h-full hover:shadow-2xl transition-all duration-300">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Featured</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: techIndex * 0.05 }}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <div className="space-y-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ delay: achIndex * 0.1 }}
                          className="flex items-start space-x-2"
                        >
                          <ChevronRight 
                            size={16} 
                            className="text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" 
                          />
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    {project.url && (
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        <Github size={16} />
                        <span className="font-medium">View Code</span>
                      </motion.a>
                    )}

                  </div>

                  {/* Hover Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Projects Teaser */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring emerging technologies. 
              Stay tuned for more exciting developments in AI, full-stack development, and cloud computing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href={resumeData.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2"
              >
                <Github size={16} />
                <span>View All on GitHub</span>
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Let's Collaborate
              </button>
            </div>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { label: "Projects Completed", value: "10+", color: "from-blue-500 to-blue-600" },
              { label: "Technologies Used", value: "25+", color: "from-green-500 to-green-600" },
              { label: "Code Commits", value: "500+", color: "from-purple-500 to-purple-600" },
              { label: "Users Impacted", value: "2000+", color: "from-orange-500 to-orange-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;