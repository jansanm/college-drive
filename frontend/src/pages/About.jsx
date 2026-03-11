import React from 'react';
import { Target, Shield, Zap, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="about-container" style={{ minHeight: '100vh', background: '#020617', color: 'white', padding: '120px 20px' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>
            Empowering the <span style={{ background: 'linear-gradient(135deg, #3AD4FF, #2E57A5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Next Generation</span> of Talent
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.6)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            PlacementAI is more than just a prediction tool. We're a comprehensive platform dedicated to bridging the gap between education and employment using cutting-edge AI.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {[
            { 
              title: "Our Mission", 
              desc: "To provide data-driven insights that help students navigate their career paths with confidence and clarity.", 
              icon: Target 
            },
            { 
              title: "AI Integrity", 
              desc: "We use ethical AI models trained on diverse datasets to ensure fair and accurate placement predictions for everyone.", 
              icon: Shield 
            },
            { 
              title: "Real-time Impact", 
              desc: "Our platform processes thousands of industry data points in real-time to give you the most up-to-date career advice.", 
              icon: Zap 
            },
            { 
              title: "Global Reach", 
              desc: "Connecting students from across the globe with top-tier multinational corporations and innovative startups.", 
              icon: Globe 
            }
          ].map((item, i) => (
            <div key={i} style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              padding: '40px', 
              borderRadius: '24px',
              transition: 'transform 0.3s'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                background: 'rgba(58, 212, 255, 0.1)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '24px',
                color: '#3AD4FF'
              }}>
                <item.icon size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', lineHeight: '1.6', fontSize: '15px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
