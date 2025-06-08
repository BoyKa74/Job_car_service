import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Nếu đã đăng nhập, chuyển hướng về trang chủ
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(username, password);
      // Sau khi đăng nhập thành công, useEffect sẽ chuyển hướng người dùng
    } catch (err) {
      setError(t('login.error'));
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{t('admin.login')}</h2>
        
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
            />
          </div>
          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? t('logging.in') : t('login')}
          </button>
        </form>
        
        <div className="register-link">
          <p>{t('dont.have.account')} <Link to="/register">{t('register.now')}</Link></p>
        </div>
        
        <div className="demo-credentials">
          <h3>{t('demo.credentials')}</h3>
          <p>Admin: admin / admin123</p>
          <p>User: user / user123</p>
          <p>Guest: guest / guest123</p>
        </div>
      </div>
    </div>
  );
};

export default Login; 