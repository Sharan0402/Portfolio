import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeTest: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
        Current theme: <strong>{isDark ? 'Dark' : 'Light'}</strong>
      </div>
      <button
        onClick={toggleTheme}
        className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700 transition-colors"
      >
        Toggle to {isDark ? 'Light' : 'Dark'}
      </button>
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        HTML class: {document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
      </div>
    </div>
  );
};

export default ThemeTest;