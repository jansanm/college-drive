import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(58, 212, 255, 0.1), rgba(46, 87, 165, 0.1))', 
          borderRadius: '32px', 
          padding: '80px 40px',
          border: '1px solid rgba(58, 212, 255, 0.2)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative glows */}
          <div style={{ 
            position: 'absolute', 
            top: '-100px', 
            right: '-100px', 
            width: '300px', 
            height: '300px', 
            background: 'rgba(58, 212, 255, 0.1)', 
            filter: 'blur(100px)',
            borderRadius: '50%'
          }}></div>
          
          <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '24px' }}>
            Ready to Accelerate Your <span className="gradient-text">Career?</span>
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.6' }}>
            Join 10,000+ students already using PlacementAI to secure their future. No credit card required.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {['Free for students', 'Instant insights', 'MNC connections'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981' }}>
                <CheckCircle size={18} />
                <span style={{ fontSize: '14px', fontWeight: '500' }}>{item}</span>
              </div>
            ))}
          </div>

          <button className="btn-primary" style={{ 
            padding: '16px 40px', 
            fontSize: '18px', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px',
            boxShadow: '0 15px 30px rgba(58, 212, 255, 0.3)'
          }}>
            Get Started Now <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
