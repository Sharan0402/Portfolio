import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, Eye } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { resumeData } from '../../data/resumeData';
import UWLogo from '../../assets/logos/uwlogo.png';
import AmritaLogo from '../../assets/logos/amritalogo.png';
import ResumePreviewModal from '../ui/ResumePreviewModal';

const Education: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { education } = resumeData;
  const [showResumePreview, setShowResumePreview] = useState(false);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/VS_RESUME.pdf';
    link.download = 'Sharan_Vaitheeswaran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  const getInstitutionInfo = (institution: string) => {
    if (institution.includes('University of Washington')) {
      return {
        location: 'Seattle, WA',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
        logo: UWLogo
      };
    } else if (institution.includes('Amrita')) {
      return {
        location: 'Coimbatore, India', 
        color: 'from-orange-500 to-orange-600',
        bgColor: 'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20',
        logo: AmritaLogo
      };
    }
    return {
      location: '',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20',
      logo: null
    };
  };

  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-800/50">
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
              Education & <span className="text-gradient">Qualifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              My academic journey in Computer Science, building a strong foundation in 
              software engineering principles and advanced computing concepts.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => {
              const institutionInfo = getInstitutionInfo(edu.institution);
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${institutionInfo.bgColor} p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                    <GraduationCap size={256} className="text-current" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <motion.div 
                            whileHover={{ scale: 1.05 }}
                            className="w-16 h-16 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center p-2 border border-gray-100 dark:border-gray-700"
                          >
                            {institutionInfo.logo ? (
                              <img 
                                src={institutionInfo.logo} 
                                alt={`${edu.institution} logo`}
                                className="w-12 h-12 object-contain filter drop-shadow-sm"
                              />
                            ) : (
                              <GraduationCap size={24} className="text-gray-600 dark:text-gray-300" />
                            )}
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {edu.institution}
                            </h3>
                            {institutionInfo.location && (
                              <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 mt-1">
                                <MapPin size={16} />
                                <span className="text-sm">{institutionInfo.location}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            {edu.degree}, {edu.field}
                          </h4>
                          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300">
                            <div className="flex items-center space-x-1">
                              <Calendar size={16} />
                              <span className="text-sm font-medium">Graduated {edu.endDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* GPA Badge */}
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center space-x-0 bg-white dark:bg-gray-800 rounded-full px-2 pr-5 py-3 shadow-lg"
                        >
                          <Award className={`w-5 h-5 text-transparent bg-gradient-to-r ${institutionInfo.color} bg-clip-text`} />
                          <div className="text-center">
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">GPA</div>
                            <div className={`text-2xl font-bold bg-gradient-to-r ${institutionInfo.color} bg-clip-text text-transparent`}>
                              {edu.gpa}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>


                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Academic Achievements */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Academic Highlights
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "High Academic Performance",
                  description: "Maintained 3.9/4.0 GPA in graduate studies",
                  color: "from-yellow-500 to-yellow-600"
                },
                {
                  icon: <GraduationCap className="w-8 h-8" />,
                  title: "Research Contribution",
                  description: "Published research paper at IEEE ICCNT 2023",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Consistent Excellence",
                  description: "Strong academic record across both degrees",
                  color: "from-green-500 to-green-600"
                }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white`}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Interested in discussing my academic background or research interests?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Get in Touch
              </button>
              <button
                onClick={() => setShowResumePreview(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Download Resume</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Preview Modal */}
      <ResumePreviewModal
        isOpen={showResumePreview}
        onClose={() => setShowResumePreview(false)}
        onDownload={downloadResume}
      />
    </section>
  );
};

export default Education;