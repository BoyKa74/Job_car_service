import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      className="btn btn-outline-primary btn-sm"
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {language === 'vi' ? (
        <>
          <span className="me-2">🇬🇧</span>
          {t('english')}
        </>
      ) : (
        <>
          <span className="me-2">🇻🇳</span>
          {t('vietnamese')}
        </>
      )}
    </button>
  );
};

export default LanguageToggle; 