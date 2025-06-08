import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import UserAvatar from './UserAvatar';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const { isAuthenticated, currentUser } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  // Get dashboard link based on user role
  const getDashboardLink = () => {
    if (!currentUser) return '/login';
    
    switch (currentUser.role) {
      case 'admin':
        return '/admin';
      case 'user':
        return '/dashboard';
      case 'guest':
        return '/guest-dashboard';
      default:
        return '/';
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Car Service Shop" />
          <span>Auto Service Center</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/')}`}
              onClick={closeMenu}
            >
              {t('home')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={`nav-link ${isActive('/services')}`}
              onClick={closeMenu}
            >
              {t('services')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive('/about')}`}
              onClick={closeMenu}
            >
              {t('about')}
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact')}`}
              onClick={closeMenu}
            >
              {t('contact')}
            </Link>
          </li>
          {isAuthenticated && (
            <li className="nav-item">
              <Link
                to={getDashboardLink()}
                className={`nav-link ${isActive(getDashboardLink())}`}
                onClick={closeMenu}
              >
                {t('my.profile')}
              </Link>
            </li>
          )}
        </ul>

        <div className="navbar-actions">
          <UserAvatar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 