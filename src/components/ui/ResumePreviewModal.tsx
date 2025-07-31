import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
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
    };

    const handleOpenInNewTab = () => {
        window.open('/VS_RESUME.pdf', '_blank');
    };

    // If the modal is not open, don't render anything to the portal
    if (!isOpen) {
        return null;
    }

    // Define the content of your modal
    const modalContent = (
        <motion.div
            // Animate opacity for the background overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // This outer div acts as the full-screen overlay and centers its content
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" // Global overlay with low opacity background
        >
            {/* This inner motion.div is your actual "floaty window" */}
            <motion.div
                // Animate scale and y position for the "floaty window" itself
                initial={{ scale: 0.95, y: 50 }} // Start slightly smaller and lower
                animate={{ scale: 1, y: 0 }} // Animate to full size and centered
                exit={{ scale: 0.95, y: 50 }} // Exit by shrinking and moving down
                className="w-[800px] max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            Resume
                        </h3>

                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={handleDownload}
                            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            title="Download"
                        >
                            <Download size={20} />
                        </button>
                        <button
                            onClick={handleOpenInNewTab}
                            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            title="Open in new tab"
                        >
                            <ExternalLink size={20} />
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer */}
                <div className="h-[700px] max-h-[calc(100vh-8rem)] bg-gray-50 dark:bg-gray-800">
                    <iframe
                        src="/VS_RESUME.pdf"
                        className="w-full h-full"
                        title="Resume Preview"
                    />
                </div>
            </motion.div>
        </motion.div>
    );

    // Render the modal content into a portal attached to document.body
    return ReactDOM.createPortal(
        <AnimatePresence>{modalContent}</AnimatePresence>,
        document.body
    );
};

export default ResumePreviewModal;