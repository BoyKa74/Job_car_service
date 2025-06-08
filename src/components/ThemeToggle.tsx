import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <button
      className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'} btn-sm`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <i className="fas fa-sun me-2"></i>
          {t('light.mode')}
        </>
      ) : (
        <>
          <i className="fas fa-moon me-2"></i>
          {t('dark.mode')}
        </>
      )}
    </button>
  );
};

export default ThemeToggle; 