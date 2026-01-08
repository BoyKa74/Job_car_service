import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/UserAvatar.css';

const UserAvatar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage, language, t } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Xác định màu sắc avatar dựa trên vai trò
  const getAvatarColor = () => {
    if (!currentUser) return '#888'; // Guest color
    switch (currentUser.role) {
      case 'admin':
        return '#ff5722'; // Admin color - orange
      case 'user':
        return '#2196f3'; // User color - blue
      case 'guest':
        return '#4caf50'; // Guest color - green
      default:
        return '#888'; // Default - gray
    }
  };

  // Xác định chữ cái đầu tiên của tên người dùng
  const getInitials = () => {
    if (currentUser && currentUser.username) {
      return currentUser.username.charAt(0).toUpperCase();
    }
    return 'G'; // Guest
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

  // Đóng dropdown khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="user-avatar-container" ref={dropdownRef}>
      <div 
        className="user-avatar" 
        style={{ backgroundColor: getAvatarColor() }}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {getInitials()}
      </div>
      
      {dropdownOpen && (
        <div className="avatar-dropdown">
          {currentUser ? (
            <>
              <div className="user-info">
                <span className="username">{currentUser.username}</span>
                <span className="role">{t(currentUser.role)}</span>
              </div>
              <div className="dropdown-divider"></div>
              <Link to={getDashboardLink()} className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                {t('my.profile')}
              </Link>
            </>
          ) : (
            <div className="login-register-links">
              <Link to="/login" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                {t('login')}
              </Link>
              <Link to="/register" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                {t('register')}
              </Link>
            </div>
          )}
          
          <div className="dropdown-divider"></div>
          
          <div className="dropdown-item" onClick={toggleTheme}>
            {theme === 'dark' ? t('light.mode') : t('dark.mode')}
          </div>
          
          <div className="dropdown-item" onClick={toggleLanguage}>
            {language === 'vi' ? t('english') : t('vietnamese')}
          </div>
          
          {currentUser && (
            <>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item logout" onClick={logout}>
                {t('logout')}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserAvatar; 