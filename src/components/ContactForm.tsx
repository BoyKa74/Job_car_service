import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý gửi form ở đây (có thể gửi đến API)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form sau khi gửi
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-body p-4">
        <h3 className="card-title mb-4">Gửi yêu cầu</h3>
        
        {submitted ? (
          <div className="alert alert-success">
            Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">Họ và tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="subject" className="form-label">Chủ đề</label>
                <select
                  className="form-select"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Chọn chủ đề</option>
                  <option value="Sửa chữa">Sửa chữa</option>
                  <option value="Bảo dưỡng">Bảo dưỡng</option>
                  <option value="Tư vấn">Tư vấn</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
            </div>
            
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Nội dung</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Gửi yêu cầu
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm; 