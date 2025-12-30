import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{ padding: '80px 0', textAlign: 'center' }}>
      <div className="container">
        <span style={{ 
          background: 'rgba(58, 212, 255, 0.1)', 
          color: 'var(--primary)', 
          padding: '4px 16px', 
          borderRadius: '20px', 
          fontSize: '0.875rem', 
          fontWeight: 600,
          border: '1px solid rgba(58, 212, 255, 0.2)'
        }}>
          Powered by Advanced ML
        </span>
        <h1 style={{ fontSize: '4rem', marginTop: '24px', maxWidth: '800px', marginInline: 'auto' }}>
          Secure Your <span className="gradient-text">Future Career</span> with AI Insights
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '24px auto' }}>
          Predict your placement probability based on academic records, skills, and industry requirements using our state-of-the-art predictive model.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '40px' }}>
          <button className="btn-primary" onClick={() => document.getElementById('predict').scrollIntoView({ behavior: 'smooth' })}>
            Predict Your Status
          </button>
          <button className="glass" style={{ padding: '12px 24px', borderRadius: '12px', color: 'white' }}>
            View Statistics
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
