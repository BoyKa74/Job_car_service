import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const NotFound: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="container py-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="display-1 fw-bold">404</h1>
          <h2 className="mb-4">{t('page.not.found')}</h2>
          <p className="lead mb-5">{t('page.not.found.message')}</p>
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-home me-2"></i>
            {t('back.to.home')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 