import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Dashboard.css';

const UserDashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{t('user.dashboard')}</h1>
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
          <h2>{t('my.services')}</h2>
          <p>{t('no.services.yet')}</p>
          <button className="dashboard-button">{t('book.service')}</button>
        </div>

        <div className="dashboard-card">
          <h2>{t('my.appointments')}</h2>
          <p>{t('no.appointments')}</p>
          <button className="dashboard-button">{t('schedule.appointment')}</button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard; 