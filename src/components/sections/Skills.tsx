import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, GitBranch, Settings } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { resumeData } from '../../data/resumeData';

const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { skills } = resumeData;

  const getCategoryIcon = (category: string) => {
    const iconClass = "w-6 h-6";
    switch (category.toLowerCase()) {
      case 'languages':
        return <Code className={iconClass} />;
      case 'frameworks':
        return <Settings className={iconClass} />;
      case 'database':
        return <Database className={iconClass} />;
      case 'amazon web services':
      case 'cloud technologies':
        return <Cloud className={iconClass} />;
      case 'other tools':
        return <Wrench className={iconClass} />;
      case 'development practices':
        return <GitBranch className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600',
      'from-red-500 to-red-600',
      'from-indigo-500 to-indigo-600',
      'from-pink-500 to-pink-600',
      'from-teal-500 to-teal-600'
    ];
    return colors[index % colors.length];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800/50">
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
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and practices I use to build scalable, 
              maintainable, and high-performance applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="card hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(categoryIndex)} text-white`}>
                    {getCategoryIcon(skillCategory.category)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={skillVariants}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      transition={{ delay: skillIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                      }}
                      className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {skillCategory.skills.length} skills
                    </span>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getCategoryColor(categoryIndex)}`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>


          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Ready to put these skills to work on your next project?
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Let's Collaborate
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;