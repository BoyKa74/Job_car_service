import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'user' | 'guest';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole 
}) => {
  const { currentUser, isAuthenticated } = useAuth();

  // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Nếu yêu cầu vai trò cụ thể và người dùng không có vai trò đó
  if (requiredRole && currentUser?.role !== requiredRole) {
    // Nếu yêu cầu quyền admin nhưng user không phải admin
    if (requiredRole === 'admin') {
      return <Navigate to="/" replace />;
    }
    
    // Nếu yêu cầu quyền user nhưng user là guest
    if (requiredRole === 'user' && currentUser?.role === 'guest') {
      return <Navigate to="/" replace />;
    }
  }

  // Nếu đã đăng nhập và có quyền truy cập, hiển thị nội dung
  return <>{children}</>;
};

export default ProtectedRoute; 