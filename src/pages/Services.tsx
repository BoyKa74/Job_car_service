import React, { useState, useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';
import { getServices, Service } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

// Định nghĩa FAQ
const faqItems = [
  {
    id: 'faq1',
    questionKey: 'faq.appointment',
    answerKey: 'faq.appointment.answer'
  },
  {
    id: 'faq2',
    questionKey: 'faq.warranty',
    answerKey: 'faq.warranty.answer'
  },
  {
    id: 'faq3',
    questionKey: 'faq.payment',
    answerKey: 'faq.payment.answer'
  }
];

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const { t } = useLanguage();

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
          <h1 className="display-4">{t('our.services')}</h1>
          <p className="lead">
            {t('services.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2>{t('all.services')}</h2>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end">
                <select 
                  className="form-select w-auto" 
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <option value="all">{t('filter.all')}</option>
                  <option value="low">{t('filter.low')}</option>
                  <option value="medium">{t('filter.medium')}</option>
                  <option value="high">{t('filter.high')}</option>
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
                  titleEn={service.titleEn}
                  description={service.description}
                  descriptionEn={service.descriptionEn}
                  icon={service.icon}
                  price={service.price}
                  priceEn={service.priceEn}
                />
              ))}
            </div>
          ) : (
            <div className="alert alert-info text-center">
              {t('no.services')}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">{t('work.process')}</h2>
          
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card border-0 h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <span className="h3 text-white mb-0">1</span>
                  </div>
                  <h4>{t('appointment')}</h4>
                  <p className="text-muted">
                    {t('appointment.desc')}
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
                  <h4>{t('check.car')}</h4>
                  <p className="text-muted">
                    {t('check.car.desc')}
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
                  <h4>{t('repair')}</h4>
                  <p className="text-muted">
                    {t('repair.desc')}
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
                  <h4>{t('delivery')}</h4>
                  <p className="text-muted">
                    {t('delivery.desc')}
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
          <h2 className="section-title">{t('faq')}</h2>
          
          <div className="accordion" id="faqAccordion">
            {faqItems.map((faq, index) => (
              <div className="accordion-item" key={faq.id}>
                <h2 className="accordion-header">
                  <button 
                    className={`accordion-button ${index === 0 ? '' : 'collapsed'}`} 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={`#${faq.id}`}
                  >
                    {t(faq.questionKey)}
                  </button>
                </h2>
                <div 
                  id={faq.id} 
                  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    {t(faq.answerKey)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;