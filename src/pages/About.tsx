import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Về chúng tôi</h1>
          <p className="lead">
            Tìm hiểu thêm về Auto Service Center và đội ngũ của chúng tôi
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1dG8lMjByZXBhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="Auto Service Center"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Câu chuyện của chúng tôi</h2>
              <p className="lead mb-4">
                Auto Service Center được thành lập vào năm 2010 với mục tiêu cung cấp dịch vụ sửa chữa và bảo dưỡng xe hơi chất lượng cao với giá cả hợp lý.
              </p>
              <p className="mb-4">
                Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi tự hào về đội ngũ kỹ thuật viên chuyên nghiệp và trang thiết bị hiện đại. 
                Chúng tôi cam kết mang đến cho khách hàng dịch vụ tốt nhất và sự hài lòng tuyệt đối.
              </p>
              <p>
                Tại Auto Service Center, chúng tôi không chỉ sửa chữa xe hơi mà còn xây dựng mối quan hệ lâu dài với khách hàng dựa trên sự tin tưởng và chất lượng dịch vụ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-bullseye fa-2x text-white"></i>
                  </div>
                  <h3 className="card-title">Sứ mệnh</h3>
                  <p className="card-text">
                    Cung cấp dịch vụ sửa chữa và bảo dưỡng xe hơi chất lượng cao với giá cả hợp lý, 
                    đảm bảo an toàn và sự hài lòng cho khách hàng.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-eye fa-2x text-white"></i>
                  </div>
                  <h3 className="card-title">Tầm nhìn</h3>
                  <p className="card-text">
                    Trở thành trung tâm dịch vụ ô tô hàng đầu tại Việt Nam, được khách hàng tin tưởng và lựa chọn 
                    nhờ chất lượng dịch vụ và sự chuyên nghiệp.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4 text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-heart fa-2x text-white"></i>
                  </div>
                  <h3 className="card-title">Giá trị cốt lõi</h3>
                  <p className="card-text">
                    Chúng tôi hoạt động dựa trên các giá trị: Chất lượng, Trung thực, Minh bạch, 
                    Tôn trọng khách hàng và Không ngừng cải tiến.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Đội ngũ của chúng tôi</h2>
          
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card border-0 shadow h-100">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Team Member"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Nguyễn Văn A</h5>
                  <p className="text-muted">Giám đốc</p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href="#!" className="text-primary">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card border-0 shadow h-100">
                <img
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="Team Member"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Trần Văn B</h5>
                  <p className="text-muted">Trưởng kỹ thuật</p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href="#!" className="text-primary">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card border-0 shadow h-100">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Team Member"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Lê Thị C</h5>
                  <p className="text-muted">Quản lý dịch vụ khách hàng</p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href="#!" className="text-primary">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card border-0 shadow h-100">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Team Member"
                  className="card-img-top"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Phạm Văn D</h5>
                  <p className="text-muted">Kỹ thuật viên cao cấp</p>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a href="#!" className="text-primary">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#!" className="text-primary">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Thành tựu của chúng tôi</h2>
          
          <div className="row">
            <div className="col-md-3 col-6 mb-4 mb-md-0">
              <div className="text-center">
                <div className="display-4 fw-bold text-primary mb-2">10+</div>
                <p className="mb-0">Năm kinh nghiệm</p>
              </div>
            </div>
            
            <div className="col-md-3 col-6 mb-4 mb-md-0">
              <div className="text-center">
                <div className="display-4 fw-bold text-primary mb-2">5000+</div>
                <p className="mb-0">Khách hàng hài lòng</p>
              </div>
            </div>
            
            <div className="col-md-3 col-6">
              <div className="text-center">
                <div className="display-4 fw-bold text-primary mb-2">15+</div>
                <p className="mb-0">Kỹ thuật viên chuyên nghiệp</p>
              </div>
            </div>
            
            <div className="col-md-3 col-6">
              <div className="text-center">
                <div className="display-4 fw-bold text-primary mb-2">3</div>
                <p className="mb-0">Giải thưởng chất lượng</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Sẵn sàng trải nghiệm dịch vụ của chúng tôi?</h2>
          <p className="lead mb-4">Liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt lịch hẹn</p>
          <Link to="/contact" className="btn btn-light btn-lg">
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;