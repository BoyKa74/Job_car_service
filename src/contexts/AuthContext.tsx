import React, { createContext, useState, useEffect, useContext } from 'react';

// Định nghĩa kiểu dữ liệu cho người dùng
export interface User {
  id: string;
  username: string;
  role: 'admin' | 'user' | 'guest';
  avatarUrl?: string;
}

// Định nghĩa kiểu dữ liệu cho AuthContext
interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (username: string, password: string, role: 'user' | 'guest') => Promise<boolean>;
}

// Tạo context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users cho demo
const MOCK_USERS = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    role: 'admin' as const,
  },
  {
    id: '2',
    username: 'user',
    password: 'user123',
    role: 'user' as const,
  },
  {
    id: '3',
    username: 'guest',
    password: 'guest123',
    role: 'guest' as const,
  }
];

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Khởi tạo state từ localStorage nếu có
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  // Cập nhật localStorage khi currentUser thay đổi
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      localStorage.removeItem('currentUser');
      localStorage.setItem('isAuthenticated', 'false');
    }
  }, [currentUser, isAuthenticated]);

  // Hàm đăng nhập
  const login = async (username: string, password: string): Promise<boolean> => {
    // Giả lập API call với timeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = MOCK_USERS.find(
          (u) => u.username === username && u.password === password
        );
        
        if (user) {
          // Tạo đối tượng user không chứa password
          const { password: _, ...userWithoutPassword } = user;
          setCurrentUser(userWithoutPassword);
          setIsAuthenticated(true);
          resolve(true);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000); // Giả lập độ trễ mạng
    });
  };

  // Hàm đăng ký
  const register = async (username: string, password: string, role: 'user' | 'guest'): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Kiểm tra username đã tồn tại chưa
        const existingUser = MOCK_USERS.find(u => u.username === username);
        if (existingUser) {
          reject(new Error('Username already exists'));
          return;
        }

        // Tạo user mới
        const newUser = {
          id: (MOCK_USERS.length + 1).toString(),
          username,
          password,
          role,
        };

        // Thêm vào danh sách users (trong thực tế sẽ gọi API)
        MOCK_USERS.push(newUser);

        // Đăng nhập luôn
        const { password: _, ...userWithoutPassword } = newUser;
        setCurrentUser(userWithoutPassword);
        setIsAuthenticated(true);
        resolve(true);
      }, 1000);
    });
  };

  // Hàm đăng xuất
  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  // Giá trị context
  const value = {
    currentUser,
    isAuthenticated,
    login,
    logout,
    register
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook để sử dụng AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 