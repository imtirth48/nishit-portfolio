import React from 'react';
import { ArrowRight, Activity, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scene from '../components/Scene';
import profileImg from '../assets/profile.jpg'; // Import the uploaded profile image
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content fade-in">
            <h1>Restoring Motion, <span className="text-secondary">Reclaiming Life</span></h1>
            <p className="hero-subtitle">
              Expert physiotherapy care specialized in pain management and rehabilitation.
              Personalized treatment plans designed for your recovery in the heart of Vadodara.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn">Book Consultation <ArrowRight size={18} /></Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
          </div>
          <div className="hero-visual">
             <div className="scene-wrapper" style={{ width: '100%', height: '500px' }}>
              <Scene />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-grid">
             <div className="intro-image">
                <div className="image-frame">
                    <img src={profileImg} alt="Physiotherapist Profile" />
                </div>
             </div>
             <div className="intro-text">
               <h2>Meet Your Physiotherapist</h2>
               <p>
                 I am dedicated to helping patients achieve their physical potential.
                 My approach combines manual therapy, therapeutic exercise, and education to manage pain and prevent future injury.
                 Located in Manjalpur, Vadodara, I bring personalized care to every session.
               </p>
               <ul className="stats-list">
                 <li>
                   <span className="stat-number">2+</span>
                   <span className="stat-label">Years Experience</span>
                 </li>
                 <li>
                   <span className="stat-number">50+</span>
                   <span className="stat-label">Happy Patients</span>
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Features/Services Summary */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Activity className="feature-icon" size={40} />
              <h3>Personalized Care</h3>
              <p>Treatment plans tailored specifically to your body and recovery goals.</p>
            </div>
            <div className="feature-card">
              <Shield className="feature-icon" size={40} />
              <h3>Evidence Based</h3>
              <p>Utilizing the latest research and proven techniques for effective rehabilitation.</p>
            </div>
            <div className="feature-card">
              <Heart className="feature-icon" size={40} />
              <h3>Holistic Approach</h3>
              <p>Treating the root cause of pain, not just the symptoms, for long-term health.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
