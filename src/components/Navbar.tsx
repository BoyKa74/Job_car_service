import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Navbar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-car-mechanic me-2"></i>
          Auto Service Center
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {t('home')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                {t('services')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {t('about')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {t('contact')}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                {t('admin')}
              </Link>
            </li>
          </ul>
          <div className="d-flex gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 