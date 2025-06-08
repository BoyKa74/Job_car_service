import React from 'react';

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  icon: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, price }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 border-0 shadow">
        <div className="card-body text-center p-4">
          <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center mx-auto mb-4" 
               style={{ width: '80px', height: '80px' }}>
            <i className={`${icon} fa-2x text-white`}></i>
          </div>
          <h4 className="card-title mb-3">{title}</h4>
          <p className="card-text text-muted">{description}</p>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <span className="h5 mb-0 text-primary">{price}</span>
            <button className="btn btn-outline-primary">Chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 