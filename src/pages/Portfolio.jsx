import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page page-padding">
      <div className="container">
        <header className="page-header text-center">
            <h1>Success Stories</h1>
            <p>Real results from real patients.</p>
        </header>

        <section className="testimonials-section">
            <h2 className="section-subtitle">What Our Patients Say</h2>
            <div className="testimonials-grid">
                <div className="testimonial-card">
                    <p className="quote">"I had chronic back pain for years. After just a few sessions, I felt a significant improvement. Highly recommended!"</p>
                    <div className="author">
                        <div className="avatar">R</div>
                        <div className="author-info">
                            <h4>Ramesh Patel</h4>
                            <span>Back Pain Relief</span>
                        </div>
                    </div>
                </div>
                <div className="testimonial-card">
                    <p className="quote">"The post-surgery rehab program was excellent. I was back on my feet faster than expected."</p>
                    <div className="author">
                        <div className="avatar">P</div>
                        <div className="author-info">
                            <h4>Priya Sharma</h4>
                            <span>ACL Recovery</span>
                        </div>
                    </div>
                </div>
                 <div className="testimonial-card">
                    <p className="quote">"Professional, knowledgeable, and caring. The best experience I've had with a physiotherapist."</p>
                    <div className="author">
                        <div className="avatar">A</div>
                        <div className="author-info">
                            <h4>Amit Shah</h4>
                            <span>Sports Injury</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="case-studies-section section">
            <h2 className="section-subtitle">Case Studies</h2>
            <div className="case-study-card">
                <div className="case-content">
                    <h3>Frozen Shoulder Recovery</h3>
                    <p><strong>Patient:</strong> 45-year-old female</p>
                    <p><strong>Condition:</strong> Adhesive Capsulitis (Frozen Shoulder) with severe range of motion restriction.</p>
                    <p><strong>Treatment:</strong> Manual therapy, mobilization, and progressive stretching over 8 weeks.</p>
                    <p><strong>Result:</strong> Full range of motion restored and pain-free movement.</p>
                </div>
                <div className="case-visual">
                    <div className="before-after-placeholder">
                        <span>Before / After Visuals</span>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
