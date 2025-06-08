import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { getServices, Service } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';

// Định nghĩa testimonials data
const testimonials = [
  {
    id: 1,
    name: "John Smith",
    nameVi: "Nguyễn Văn A",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    commentKey: "testimonial1"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    nameVi: "Trần Thị B",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    commentKey: "testimonial2"
  },
  {
    id: 3,
    name: "Michael Brown",
    nameVi: "Lê Văn C",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    rating: 5,
    commentKey: "testimonial3"
  }
];

const Home: React.FC = () => {
  const [services, setServices] = React.useState<Service[]>([]);
  const [loading, setLoading] = React.useState(true);
  const { t, language } = useLanguage();

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

  // Helper function to get name based on language
  const getLocalizedName = (nameEn: string, nameVi: string) => {
    return language === 'en' ? nameEn : nameVi;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">{t('hero.title')}</h1>
              <p className="lead mb-4">
                {t('hero.description')}
              </p>
              <div className="d-flex gap-3">
                <Link to="/services" className="btn btn-light btn-lg">
                  {t('hero.view_services')}
                </Link>
                <Link to="/contact" className="btn btn-outline-light btn-lg">
                  {t('hero.contact_now')}
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
          <h2 className="section-title">{t('featured.services')}</h2>
          
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
                  titleEn={service.titleEn}
                  description={service.description}
                  descriptionEn={service.descriptionEn}
                  icon={service.icon}
                  price={service.price}
                  priceEn={service.priceEn}
                />
              ))}
            </div>
          )}
          
          <div className="text-center mt-5">
            <Link to="/services" className="btn btn-primary btn-lg">
              {t('view.all.services')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">{t('why.choose.us')}</h2>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 h-100">
                <div className="card-body text-center">
                  <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
                       style={{ width: '80px', height: '80px' }}>
                    <i className="fas fa-user-tie fa-2x text-white"></i>
                  </div>
                  <h4>{t('professional.team')}</h4>
                  <p className="text-muted">
                    {t('professional.team.desc')}
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
                  <h4>{t('modern.equipment')}</h4>
                  <p className="text-muted">
                    {t('modern.equipment.desc')}
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
                  <h4>{t('service.warranty')}</h4>
                  <p className="text-muted">
                    {t('service.warranty.desc')}
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
          <h2 className="section-title">{t('testimonials')}</h2>
          
          <div className="row">
            {testimonials.map(testimonial => (
              <div className="col-md-4 mb-4" key={testimonial.id}>
                <div className="card border-0 shadow h-100">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt="Customer"
                        className="rounded-circle"
                        width="60"
                        height="60"
                      />
                      <div className="ms-3">
                        <h5 className="mb-0">{getLocalizedName(testimonial.name, testimonial.nameVi)}</h5>
                        <div className="text-warning">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <i className="fas fa-star" key={i}></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted">
                      {t(testimonial.commentKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="mb-4">{t('cta.title')}</h2>
          <p className="lead mb-4">{t('cta.description')}</p>
          <Link to="/contact" className="btn btn-light btn-lg">
            {t('contact.now')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;