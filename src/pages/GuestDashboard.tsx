import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Dashboard.css';

const GuestDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{t('guest.dashboard')}</h1>
        <p>{t('welcome')}, {currentUser?.username}!</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-card">
          <h2>{t('my.profile')}</h2>
          <div className="profile-info">
            <div className="info-item">
              <span className="label">{t('username')}:</span>
              <span className="value">{currentUser?.username}</span>
            </div>
            <div className="info-item">
              <span className="label">{t('role')}:</span>
              <span className="value">{t(currentUser?.role || '')}</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>{t('limited.access')}</h2>
          <p>{t('guest.limited.access.message')}</p>
          <Link to="/register" className="dashboard-button">
            {t('upgrade.to.user')}
          </Link>
        </div>

        <div className="dashboard-card">
          <h2>{t('browse.services')}</h2>
          <p>{t('guest.browse.services.message')}</p>
          <Link to="/services" className="dashboard-button">
            {t('view.services')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuestDashboard; 