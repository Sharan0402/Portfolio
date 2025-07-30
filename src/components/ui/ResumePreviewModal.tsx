import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

const ResumePreviewModal: React.FC<ResumePreviewModalProps> = ({
  isOpen,
  onClose,
  onDownload
}) => {
  const handleDownload = () => {
    onDownload();
    onClose();
  };

  const handleOpenInNewTab = () => {
    window.open('/VS_RESUME.pdf', '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Resume Preview
                </h2>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleOpenInNewTab}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink size={20} />
                  </button>

                  <button
                    onClick={onClose}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="flex-1 p-6">
                <div className="w-full h-full min-h-[600px] bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <iframe
                    src="/VS_RESUME.pdf"
                    className="w-full h-full min-h-[600px]"
                    title="Resume Preview"
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">

                <div className="flex space-x-3">

                  <button
                    onClick={handleDownload}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Download size={16} />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumePreviewModal;