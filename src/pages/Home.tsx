import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { getServices, Service } from '../services/api';

const Home: React.FC = () => {
  const [services, setServices] = React.useState<Service[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        // Chỉ hiển thị 3 dịch vụ nổi bật trên trang chủ
        setServices(data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Dịch vụ sửa chữa ô tô chuyên nghiệp</h1>
              <p className="lead mb-4">
                Chúng tôi cung cấp dịch vụ sửa chữa và bảo dưỡng xe hơi chất lượng cao với đội ngũ kỹ thuật viên
                chuyên nghiệp và thiết bị hiện đại.
              </p>
              <div className="d-flex gap-3">
                <Link to="/services" className="btn btn-light btn-lg">
                  Xem dịch vụ
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  Liên hệ ngay
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0byUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Auto Service"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Dịch vụ nổi bật</h2>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row">
              {services.map(service => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  price={service.price}
                />
              ))}
            </div>
          )}
          
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-primary btn-lg">
              Xem tất cả dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Tại sao chọn chúng tôi?</h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-user-tie fa-2x text-white"></i>
                  </div>
                  <h4>Đội ngũ chuyên nghiệp</h4>
                  <p className="text-muted">
                    Kỹ thuật viên của chúng tôi được đào tạo chuyên sâu và có nhiều năm kinh nghiệm trong lĩnh vực sửa chữa ô tô.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-tools fa-2x text-white"></i>
                  </div>
                  <h4>Thiết bị hiện đại</h4>
                  <p className="text-muted">
                    Chúng tôi sử dụng các thiết bị và công nghệ hiện đại nhất để chẩn đoán và sửa chữa xe của bạn một cách chính xác.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card border-0 h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-shield-alt fa-2x text-white"></i>
                  </div>
                  <h4>Bảo hành dịch vụ</h4>
                  <p className="text-muted">
                    Chúng tôi cam kết chất lượng dịch vụ với chính sách bảo hành rõ ràng cho tất cả các công việc sửa chữa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Khách hàng nói gì về chúng tôi</h2>
          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Customer"
                      className="rounded-circle"
                      width="60"
                      height="60"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">Nguyễn Văn A</h5>
                      <div className="text-warning">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">
                    "Dịch vụ rất tốt và chuyên nghiệp. Nhân viên thân thiện và giải thích rõ ràng về vấn đề của xe tôi.
                    Giá cả hợp lý và thời gian sửa chữa nhanh chóng."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Customer"
                      className="rounded-circle"
                      width="60"
                      height="60"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">Trần Thị B</h5>
                      <div className="text-warning">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">
                    "Tôi rất hài lòng với dịch vụ bảo dưỡng định kỳ. Kỹ thuật viên rất tận tâm và cẩn thận.
                    Xe chạy êm hơn nhiều sau khi được bảo dưỡng."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-4">
                    <img
                      src="https://randomuser.me/api/portraits/men/67.jpg"
                      alt="Customer"
                      className="rounded-circle"
                      width="60"
                      height="60"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">Lê Văn C</h5>
                      <div className="text-warning">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted">
                    "Đội ngũ kỹ thuật viên rất chuyên nghiệp và am hiểu về xe. Họ đã giúp tôi sửa chữa một vấn đề phức tạp
                    mà nhiều garage khác không thể giải quyết được."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">Bạn cần dịch vụ sửa chữa hoặc bảo dưỡng xe?</h2>
          <p className="lead mb-4">Liên hệ với chúng tôi ngay hôm nay để được tư vấn và đặt lịch hẹn</p>
          <Link to="/contact" className="btn btn-light btn-lg">
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;