import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Liên hệ với chúng tôi</h1>
          <p className="lead">
            Hãy liên hệ với chúng tôi nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">Thông tin liên hệ</h3>
                  
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" 
                           style={{ width: '50px', height: '50px' }}>
                        <i className="fas fa-map-marker-alt text-white"></i>
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5>Địa chỉ</h5>
                      <p className="text-muted mb-0">123 Đường Lê Lợi, Quận 1, TP.HCM</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" 
                           style={{ width: '50px', height: '50px' }}>
                        <i className="fas fa-phone-alt text-white"></i>
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5>Điện thoại</h5>
                      <p className="text-muted mb-0">+84 123 456 789</p>
                    </div>
                  </div>
                  
                  <div className="d-flex mb-4">
                    <div className="flex-shrink-0">
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" 
                           style={{ width: '50px', height: '50px' }}>
                        <i className="fas fa-envelope text-white"></i>
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5>Email</h5>
                      <p className="text-muted mb-0">info@autoservice.com</p>
                    </div>
                  </div>
                  
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" 
                           style={{ width: '50px', height: '50px' }}>
                        <i className="fas fa-clock text-white"></i>
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5>Giờ làm việc</h5>
                      <p className="text-muted mb-0">Thứ 2 - Thứ 7: 8:00 - 18:00</p>
                      <p className="text-muted mb-0">Chủ nhật: Đóng cửa</p>
                    </div>
                  </div>
                  
                  <hr className="my-4" />
                  
                  <h5>Kết nối với chúng tôi</h5>
                  <div className="d-flex gap-3 mt-3">
                    <a href="https://facebook.com" className="text-primary fs-4">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" className="text-primary fs-4">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" className="text-primary fs-4">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://youtube.com" className="text-primary fs-4">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="mt-5">
        <div className="container">
          <div className="card border-0 shadow">
            <div className="card-body p-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197667!2d106.69904857469967!3d10.775220089387898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3a5bb9909!2zMTIzIEzDqiBM4bujaSwgQuG6v24gTmdow6ksIFF14bqtbiAxLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1686232283033!5m2!1svi!2s" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 