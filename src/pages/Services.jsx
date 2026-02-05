import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: "Pain Management",
    description: "Comprehensive assessment and treatment for chronic and acute pain conditions.",
    icon: "💊" 
  },
  {
    title: "Sports Injuries",
    description: "Specialized rehabilitation for athletes to recover faster and prevent re-injury.",
    icon: "🏃"
  },
  {
    title: "Post-Surgery Rehabilitation",
    description: "Guided recovery programs following orthopedic surgeries like ACL repair or joint replacement.",
    icon: "🏥"
  },
  {
    title: "Back & Neck Pain",
    description: "Targeted therapy for spinal conditions, herniated discs, and postural issues.",
    icon: "spine" 
  },
  {
    title: "Kinesio Taping",
    description: "Therapeutic taping to support muscles, reduce pain, and improve circulation.",
    icon: "🩹"
  },
   {
    title: "Manual Therapy",
    description: "Hands-on techniques to mobilize joints and soft tissues.",
    icon: "👐"
  }
];

const Services = () => {
  return (
    <div className="services-page page-padding">
      <div className="container">
        <header className="page-header text-center">
          <h1>Our Services</h1>
          <p>Holistic treatments designed to restore your movement and quality of life.</p>
        </header>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-icon-wrapper">
                {/* Placeholder for icons, can replace with Lucide or 3D icons */}
                <span className="service-emoji">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
