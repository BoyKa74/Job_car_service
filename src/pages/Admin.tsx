import React, { useState, useEffect } from 'react';
import { getServices, Service } from '../services/api';

const Admin: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [newService, setNewService] = useState<Omit<Service, 'id'>>({
    title: '',
    description: '',
    icon: 'fas fa-tools',
    price: '',
  });
  const [editingService, setEditingService] = useState<Service | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      fetchServices();
    }
  }, [isLoggedIn]);

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

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Đơn giản hóa đăng nhập (trong thực tế cần xác thực với API)
    if (loginForm.username === 'admin' && loginForm.password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleNewServiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewService(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    // Trong thực tế, đây sẽ là một API call để thêm dịch vụ
    const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
    const serviceToAdd = {
      id: newId,
      ...newService
    };
    setServices([...services, serviceToAdd]);
    setNewService({
      title: '',
      description: '',
      icon: 'fas fa-tools',
      price: '',
    });
  };

  const handleEditServiceChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!editingService) return;
    
    const { name, value } = e.target;
    setEditingService({
      ...editingService,
      [name]: value
    });
  };

  const handleUpdateService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    
    // Trong thực tế, đây sẽ là một API call để cập nhật dịch vụ
    const updatedServices = services.map(service => 
      service.id === editingService.id ? editingService : service
    );
    
    setServices(updatedServices);
    setEditingService(null);
  };

  const handleDeleteService = (id: number) => {
    // Trong thực tế, đây sẽ là một API call để xóa dịch vụ
    const updatedServices = services.filter(service => service.id !== id);
    setServices(updatedServices);
  };

  if (!isLoggedIn) {
    return (
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h2 className="card-title text-center mb-4">Đăng nhập quản trị</h2>
                  <form onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">Tên đăng nhập</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={loginForm.username}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Mật khẩu</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={loginForm.password}
                        onChange={handleLoginChange}
                        required
                      />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Đăng nhập
                      </button>
                    </div>
                    <div className="mt-3 text-center">
                      <small className="text-muted">
                        Tên đăng nhập: admin | Mật khẩu: admin123
                      </small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3 mb-0">Quản lý dịch vụ</h1>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Đăng xuất
            </button>
          </div>
        </div>
      </section>

      {/* Admin Panel */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">
                    {editingService ? 'Cập nhật dịch vụ' : 'Thêm dịch vụ mới'}
                  </h3>
                  <form onSubmit={editingService ? handleUpdateService : handleAddService}>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">Tên dịch vụ</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={editingService ? editingService.title : newService.title}
                        onChange={editingService ? handleEditServiceChange : handleNewServiceChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">Mô tả</label>
                      <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows={3}
                        value={editingService ? editingService.description : newService.description}
                        onChange={editingService ? handleEditServiceChange : handleNewServiceChange}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="icon" className="form-label">Icon</label>
                      <select
                        className="form-select"
                        id="icon"
                        name="icon"
                        value={editingService ? editingService.icon : newService.icon}
                        onChange={editingService ? handleEditServiceChange : handleNewServiceChange}
                        required
                      >
                        <option value="fas fa-tools">Công cụ</option>
                        <option value="fas fa-cogs">Bánh răng</option>
                        <option value="fas fa-car">Xe hơi</option>
                        <option value="fas fa-oil-can">Dầu</option>
                        <option value="fas fa-bolt">Điện</option>
                        <option value="fas fa-tachometer-alt">Đồng hồ</option>
                        <option value="fas fa-car-battery">Ắc quy</option>
                        <option value="fas fa-car-crash">Sửa chữa</option>
                        <option value="fas fa-snowflake">Điều hòa</option>
                        <option value="fas fa-car-side">Lốp xe</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">Giá</label>
                      <input
                        type="text"
                        className="form-control"
                        id="price"
                        name="price"
                        value={editingService ? editingService.price : newService.price}
                        onChange={editingService ? handleEditServiceChange : handleNewServiceChange}
                        required
                      />
                    </div>
                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-primary">
                        {editingService ? 'Cập nhật' : 'Thêm dịch vụ'}
                      </button>
                      {editingService && (
                        <button 
                          type="button" 
                          className="btn btn-outline-secondary"
                          onClick={() => setEditingService(null)}
                        >
                          Hủy
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            <div className="col-lg-8">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h3 className="card-title mb-4">Danh sách dịch vụ</h3>
                  
                  {loading ? (
                    <div className="text-center py-5">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Tên dịch vụ</th>
                            <th>Icon</th>
                            <th>Giá</th>
                            <th>Thao tác</th>
                          </tr>
                        </thead>
                        <tbody>
                          {services.map(service => (
                            <tr key={service.id}>
                              <td>{service.id}</td>
                              <td>{service.title}</td>
                              <td><i className={service.icon}></i> {service.icon}</td>
                              <td>{service.price}</td>
                              <td>
                                <div className="d-flex gap-2">
                                  <button 
                                    className="btn btn-sm btn-outline-primary"
                                    onClick={() => setEditingService(service)}
                                  >
                                    <i className="fas fa-edit"></i>
                                  </button>
                                  <button 
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => handleDeleteService(service.id)}
                                  >
                                    <i className="fas fa-trash"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Admin;