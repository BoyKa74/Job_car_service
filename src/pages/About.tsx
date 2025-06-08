import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Define team members data
const teamMembers = [
  {
    id: 1,
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    nameVi: "Nguyễn Văn A",
    nameEn: "John Smith",
    positionKey: "team.director"
  },
  {
    id: 2,
    imageUrl: "https://randomuser.me/api/portraits/men/36.jpg",
    nameVi: "Trần Văn B",
    nameEn: "Michael Johnson",
    positionKey: "team.tech.lead"
  },
  {
    id: 3,
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    nameVi: "Lê Thị C",
    nameEn: "Sarah Williams",
    positionKey: "team.customer.service"
  },
  {
    id: 4,
    imageUrl: "https://randomuser.me/api/portraits/men/67.jpg",
    nameVi: "Phạm Văn D",
    nameEn: "Robert Brown",
    positionKey: "team.senior.tech"
  }
];

const About: React.FC = () => {
  const { t, language } = useLanguage();
  
  // Helper function to get localized name
  const getLocalizedName = (nameEn: string, nameVi: string) => {
    return language === 'en' ? nameEn : nameVi;
  };
  
  return (
    <>
      {/* Header */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">{t('about.us')}</h1>
          <p className="lead">
            {t('about.description')}
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
              <h2 className="mb-4">{t('our.story')}</h2>
              <p className="lead mb-4">
                {t('about.story.lead')}
              </p>
              <p className="mb-4">
                {t('about.story.p1')}
              </p>
              <p>
                {t('about.story.p2')}
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
                  <h3 className="card-title">{t('mission')}</h3>
                  <p className="card-text">
                    {t('about.mission.text')}
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
                  <h3 className="card-title">{t('vision')}</h3>
                  <p className="card-text">
                    {t('about.vision.text')}
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
                  <h3 className="card-title">{t('core.values')}</h3>
                  <p className="card-text">
                    {t('about.values.text')}
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
          <h2 className="section-title">{t('our.team')}</h2>
          
          <div className="row">
            {teamMembers.map(member => (
              <div className="col-lg-3 col-md-6 mb-4" key={member.id}>
                <div className="card border-0 shadow h-100">
                  <img
                    src={member.imageUrl}
                    alt="Team Member"
                    className="card-img-top"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{getLocalizedName(member.nameEn, member.nameVi)}</h5>
                    <p className="text-muted">{t(member.positionKey)}</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">{t('achievements')}</h2>
          
          <div className="row text-center">
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary">10+</div>
              <p className="lead">{t('years.experience')}</p>
            </div>
            
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary">5,000+</div>
              <p className="lead">{t('happy.customers')}</p>
            </div>
            
            <div className="col-md-3 mb-4 mb-md-0">
              <div className="display-4 fw-bold text-primary">20+</div>
              <p className="lead">{t('professional.technicians')}</p>
            </div>
            
            <div className="col-md-3">
              <div className="display-4 fw-bold text-primary">15+</div>
              <p className="lead">{t('quality.awards')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-4">{t('ready.experience')}</h2>
          <Link to="/contact" className="btn btn-primary btn-lg">
            {t('contact.now')}
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;