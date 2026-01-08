import React, { useState, useEffect } from 'react';
import { getServices, Service } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';

// Define icon options
const iconOptions = [
  { value: "fas fa-tools", labelKey: "icon.tools" },
  { value: "fas fa-cogs", labelKey: "icon.gears" },
  { value: "fas fa-car", labelKey: "icon.car" },
  { value: "fas fa-oil-can", labelKey: "icon.oil" },
  { value: "fas fa-bolt", labelKey: "icon.electric" },
  { value: "fas fa-tachometer-alt", labelKey: "icon.gauge" },
  { value: "fas fa-car-battery", labelKey: "icon.battery" },
  { value: "fas fa-car-crash", labelKey: "icon.repair" },
  { value: "fas fa-snowflake", labelKey: "icon.ac" },
  { value: "fas fa-car-side", labelKey: "icon.tire" }
];

const Admin: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [newService, setNewService] = useState<Omit<Service, 'id'>>({
    title: '',
    titleEn: '',
    description: '',
    descriptionEn: '',
    icon: 'fas fa-tools',
    price: '',
    priceEn: ''
  });
  const [editingService, setEditingService] = useState<Service | null>(null);
  const { t } = useLanguage();
  const { logout } = useAuth();

  useEffect(() => {
    fetchServices();
  }, []);

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
      titleEn: '',
      description: '',
      descriptionEn: '',
      icon: 'fas fa-tools',
      price: '',
      priceEn: ''
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

  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="h3 mb-0">{t('service.management')}</h1>
            <button className="btn btn-outline-light" onClick={logout}>
              {t('logout')}
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
                    {editingService ? t('update.service') : t('add.service')}
                  </h3>
                  <form onSubmit={editingService ? handleUpdateService : handleAddService}>
                    <div className="mb-3">
                      <label htmlFor="title" className="form-label">{t('service.name')} ({t('vietnamese')})</label>
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
                      <label htmlFor="titleEn" className="form-label">{t('service.name')} ({t('english')})</label>
                      <input
                        type="text"
                        className="form-control"
                        id="titleEn"
                        name="titleEn"
                        value={editingService ? editingService.titleEn : newService.titleEn}
                        onChange={editingService ? handleEditServiceChange : handleNewServiceChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="description" className="form-label">{t('description')} ({t('vietnamese')})</label>
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
                      <label htmlFor="descriptionEn" className="form-label">{t('description')} ({t('english')})</label>
                      <textarea
                        className="form-control"
                        id="descriptionEn"
                        name="descriptionEn"
                        rows={3}
                        value={editingService ? editingService.descriptionEn : newService.descriptionEn}
                        onChange={editingService ? handleEditServiceChange : handleNewServiceChange}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="icon" className="form-label">{t('icon')}</label>
                      <select
                        className="form-select"
                        id="icon"
                        name="icon"
                        value={editingService ? editingService.icon : newService.icon}
                        onChange={editingService ? handleEditServiceChange : handleNewServiceChange}
                        required
                      >
                        {iconOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {t(option.labelKey)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="price" className="form-label">{t('price')} ({t('vietnamese')})</label>
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
                    <div className="mb-3">
                      <label htmlFor="priceEn" className="form-label">{t('price')} ({t('english')})</label>
                      <input
                        type="text"
                        className="form-control"
                        id="priceEn"
                        name="priceEn"
                        value={editingService ? editingService.priceEn : newService.priceEn}
                        onChange={editingService ? handleEditServiceChange : handleNewServiceChange}
                        required
                      />
                    </div>
                    <div className="d-flex gap-2">
                      <button type="submit" className="btn btn-primary">
                        {editingService ? t('update') : t('add')}
                      </button>
                      {editingService && (
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => setEditingService(null)}
                        >
                          {t('cancel')}
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
                  <h3 className="card-title mb-4">{t('service.list')}</h3>
                  {loading ? (
                    <div className="text-center py-4">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>{t('id')}</th>
                            <th>{t('service.name')}</th>
                            <th>{t('price')}</th>
                            <th>{t('actions')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {services.map((service) => (
                            <tr key={service.id}>
                              <td>{service.id}</td>
                              <td>{service.title}</td>
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