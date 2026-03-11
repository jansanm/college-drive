import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivers",
      role: "SDE at Google",
      content: "PlacementAI predicted my placement with 98% accuracy. The skill gap analysis was a game changer for my preparation.",
      avatar: "A"
    },
    {
      name: "Sarah Chen",
      role: "Data Analyst at Meta",
      content: "I was confused between multiple offers. The ROI analysis on the dashboard helped me make the right career move.",
      avatar: "S"
    },
    {
      name: "James Wilson",
      role: "Cloud Engineer at AWS",
      content: "The real-time alerts allowed me to apply to roles before they even hit the public boards. Highly recommended!",
      avatar: "J"
    }
  ];

  return (
    <section id="testimonials" style={{ padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Student <span className="gradient-text">Success Stories</span></h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of students who have secured their dream jobs using our platform.
          </p>
        </div>

        <div className="grid grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="card" style={{ position: 'relative' }}>
              <Quote 
                size={40} 
                style={{ position: 'absolute', top: '24px', right: '24px', opacity: 0.1, color: '#3AD4FF' }} 
              />
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#3AD4FF" color="#3AD4FF" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '24px', color: 'rgba(255,255,255,0.8)' }}>"{t.content}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #3AD4FF, #2E57A5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>{t.avatar}</div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '15px' }}>{t.name}</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
