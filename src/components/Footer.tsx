import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Auto Service Center</h5>
            <p>
              Chúng tôi cung cấp dịch vụ sửa chữa và bảo dưỡng xe hơi chất lượng cao với đội ngũ kỹ thuật viên
              chuyên nghiệp và thiết bị hiện đại.
            </p>
            <div className="mt-4">
              <a href="https://facebook.com" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://youtube.com" className="text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-4">Liên kết nhanh</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none">
                  <i className="fas fa-angle-right me-2"></i>Trang chủ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-white text-decoration-none">
                  <i className="fas fa-angle-right me-2"></i>Dịch vụ
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-white text-decoration-none">
                  <i className="fas fa-angle-right me-2"></i>Giới thiệu
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none">
                  <i className="fas fa-angle-right me-2"></i>Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5 className="text-uppercase mb-4">Thông tin liên hệ</h5>
            <p className="mb-3">
              <i className="fas fa-home me-3"></i>
              123 Đường Lê Lợi, Quận 1, TP.HCM
            </p>
            <p className="mb-3">
              <i className="fas fa-envelope me-3"></i>
              info@autoservice.com
            </p>
            <p className="mb-3">
              <i className="fas fa-phone me-3"></i>
              +84 123 456 789
            </p>
            <p className="mb-3">
              <i className="fas fa-clock me-3"></i>
              Thứ 2 - Thứ 7: 8:00 - 18:00
            </p>
          </div>
        </div>
      </div>
      <div className="text-center py-3 mt-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <p className="mb-0">
          © {new Date().getFullYear()} Auto Service Center. Đã đăng ký bản quyền.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 