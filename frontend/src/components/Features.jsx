import React from 'react';
import { 
  Zap, 
  Shield, 
  Target, 
  BarChart3, 
  Users, 
  Cpu 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "AI Probability Matching",
      description: "Our proprietary algorithms calculate your placement odds with 95% accuracy based on historical big data.",
      icon: Cpu,
      color: "#3AD4FF"
    },
    {
      title: "Real-time Job Alerts",
      description: "Get instant notifications the moment a top-tier MNC opens its drive for your specific profile.",
      icon: Zap,
      color: "#f59e0b"
    },
    {
      title: "Skill Gap Analysis",
      description: "Identify exactly which skills you need to develop to crack your dream company's interview.",
      icon: Target,
      color: "#10b981"
    }
  ];

  return (
    <section id="features" style={{ padding: '100px 0', background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Why Choose <span className="gradient-text">PlacementAI</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            We leverage advanced machine learning to give you an unfair advantage in your career journey.
          </p>
        </div>
        
        <div className="grid grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: `${f.color}15`, 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 24px',
                color: f.color
              }}>
                <f.icon size={30} />
              </div>
              <h3 style={{ marginBottom: '12px' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
