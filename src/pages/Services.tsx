import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import { getServices, Service } from '../services/api';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Lọc dịch vụ theo giá
  const filteredServices = services.filter(service => {
    if (filter === 'all') return true;
    if (filter === 'low' && service.price.includes('500.000')) return true;
    if (filter === 'medium' && service.price.includes('1.000.000')) return true;
    if (filter === 'high' && (service.price.includes('2.000.000') || service.price.includes('3.000.000') || service.price.includes('10.000.000'))) return true;
    return false;
  });

  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Dịch vụ của chúng tôi</h1>
          <p className="lead">
            Chúng tôi cung cấp đầy đủ các dịch vụ sửa chữa và bảo dưỡng xe hơi với chất lượng cao
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2>Tất cả dịch vụ</h2>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end">
                <select 
                  className="form-select w-auto" 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">Tất cả dịch vụ</option>
                  <option value="low">Giá thấp</option>
                  <option value="medium">Giá trung bình</option>
                  <option value="high">Giá cao</option>
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="row">
              {filteredServices.map(service => (
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
          ) : (
            <div className="alert alert-info text-center">
              Không tìm thấy dịch vụ nào phù hợp với bộ lọc.
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Quy trình làm việc</h2>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card border-0 h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <span className="h3 text-white mb-0">1</span>
                  </div>
                  <h4>Đặt lịch hẹn</h4>
                  <p className="text-muted">
                    Liên hệ với chúng tôi qua điện thoại hoặc form trực tuyến để đặt lịch hẹn.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <span className="h3 text-white mb-0">2</span>
                  </div>
                  <h4>Kiểm tra xe</h4>
                  <p className="text-muted">
                    Kỹ thuật viên của chúng tôi sẽ kiểm tra xe và xác định vấn đề cần giải quyết.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <span className="h3 text-white mb-0">3</span>
                  </div>
                  <h4>Sửa chữa</h4>
                  <p className="text-muted">
                    Xe của bạn sẽ được sửa chữa bởi đội ngũ kỹ thuật viên chuyên nghiệp với thiết bị hiện đại.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-3">
              <div className="card border-0 h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <span className="h3 text-white mb-0">4</span>
                  </div>
                  <h4>Bàn giao xe</h4>
                  <p className="text-muted">
                    Xe sẽ được kiểm tra lại trước khi bàn giao để đảm bảo mọi vấn đề đã được giải quyết.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Câu hỏi thường gặp</h2>
          
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  Tôi cần đặt lịch hẹn trước không?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Có, chúng tôi khuyến khích khách hàng đặt lịch hẹn trước để đảm bảo có đủ thời gian và nhân lực để phục vụ bạn tốt nhất.
                  Tuy nhiên, trong trường hợp khẩn cấp, chúng tôi sẽ cố gắng hỗ trợ bạn ngay khi có thể.
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  Thời gian bảo hành dịch vụ là bao lâu?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Thời gian bảo hành phụ thuộc vào loại dịch vụ. Thông thường, chúng tôi cung cấp bảo hành 6 tháng cho các dịch vụ sửa chữa lớn
                  và 3 tháng cho các dịch vụ nhỏ. Vui lòng liên hệ với chúng tôi để biết thêm chi tiết.
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  Các phương thức thanh toán được chấp nhận?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Chúng tôi chấp nhận thanh toán bằng tiền mặt, thẻ tín dụng/ghi nợ, và chuyển khoản ngân hàng.
                  Đối với các dịch vụ lớn, chúng tôi cũng cung cấp tùy chọn trả góp thông qua các đối tác tài chính.
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  Có dịch vụ cứu hộ xe không?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Có, chúng tôi cung cấp dịch vụ cứu hộ xe 24/7. Nếu xe của bạn gặp sự cố trên đường, hãy gọi cho chúng tôi
                  và đội ngũ cứu hộ sẽ đến hỗ trợ trong thời gian nhanh nhất.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;