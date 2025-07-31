import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Eye } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import ResumePreviewModal from '../ui/ResumePreviewModal';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showResumePreview, setShowResumePreview] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/VS_RESUME.pdf';
    link.download = 'Sharan_Vaitheeswaran_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-responsive section-padding py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-gradient"
          >
            SV
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle Switch */}
            <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              <motion.div
                className="absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center transition-transform duration-300"
                animate={{ x: isDark ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
              >
                {isDark ? (
                  <Moon size={14} className="text-blue-400" />
                ) : (
                  <Sun size={14} className="text-yellow-500" />
                )}
              </motion.div>
            </motion.button>

            <div className="relative">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setShowResumePreview(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <span>Resume</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
                <div className="px-4 py-2 flex items-center space-x-4">
                  <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
                    title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                  >
                    <motion.div
                      className="absolute top-0.5 left-0.5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center transition-transform duration-300"
                      animate={{ x: isDark ? 28 : 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                      {isDark ? (
                        <Moon size={14} className="text-blue-400" />
                      ) : (
                        <Sun size={14} className="text-yellow-500" />
                      )}
                    </motion.div>
                  </motion.button>
                  <button
                    onClick={() => setShowResumePreview(true)}
                    className="btn-primary flex items-center space-x-2 flex-1"
                  >
                    <Eye size={16} />
                    <span>Resume</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Resume Preview Modal */}
      <ResumePreviewModal
        isOpen={showResumePreview}
        onClose={() => setShowResumePreview(false)}
        onDownload={downloadResume}
      />
    </motion.nav>
  );
};

export default Navigation;