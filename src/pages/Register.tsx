import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Login.css'; // Reuse login styles

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState<'user' | 'guest'>('user');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // If already logged in, redirect to home page
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate password match
    if (password !== confirmPassword) {
      setError(t('register.error.password'));
      return;
    }
    
    // Validate password length
    if (password.length < 6) {
      setError(t('password.requirements'));
      return;
    }
    
    setLoading(true);

    try {
      await register(username, password, role);
      // After successful registration, useEffect will redirect the user
    } catch (err) {
      if ((err as Error).message === 'Username already exists') {
        setError(t('register.error.username'));
      } else {
        setError(t('register.error'));
      }
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{t('register.title')}</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">{t('username')}</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">{t('password')}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">{t('confirm.password')}</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="role">{t('select.role')}</label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value as 'user' | 'guest')}
              required
            >
              <option value="user">{t('user')}</option>
              <option value="guest">{t('guest')}</option>
            </select>
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? t('registering') : t('register')}
          </button>
        </form>
        
        <div className="register-link">
          <p>{t('already.have.account')} <Link to="/login">{t('login.now')}</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register; 