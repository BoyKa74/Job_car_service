import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  id: number;
  title: string;
  titleEn?: string;
  description: string;
  descriptionEn?: string;
  icon: string;
  price: string;
  priceEn?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  id, 
  title, 
  titleEn, 
  description, 
  descriptionEn, 
  icon, 
  price,
  priceEn 
}) => {
  const { language, t } = useLanguage();

  // Get localized content
  const getTitle = () => language === 'en' && titleEn ? titleEn : title;
  const getDescription = () => language === 'en' && descriptionEn ? descriptionEn : description;
  const getPrice = () => language === 'en' && priceEn ? priceEn : price;

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow">
        <div className="card-body text-center p-4">
          <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
               style={{ width: '80px', height: '80px' }}>
            <i className={`${icon} fa-2x text-white`}></i>
          </div>
          <h4 className="card-title mb-3">{getTitle()}</h4>
          <p className="card-text text-muted">{getDescription()}</p>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <span className="h5 mb-0 text-primary">{getPrice()}</span>
            <button className="btn btn-outline-primary">{t('details')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 