import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Activity, 
  Users, 
  Target, 
  TrendingUp, 
  Bell, 
  Search, 
  Menu,
  CheckCircle2,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const [activities, setActivities] = useState([
    { id: 1, type: 'prediction', message: 'You analyzed your placement chances for "Data Science" role.', time: '2 mins ago', status: 'completed' },
    { id: 2, type: 'system', message: 'New placement drive started at TechCorp.', time: '1 hour ago', status: 'info' },
    { id: 3, type: 'achievement', message: 'Profile strength increased to 85%.', time: '3 hours ago', status: 'success' },
  ]);

  // Real-time effect: add a new activity every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        type: 'update',
        message: 'A student just matched with a top tier MNC!',
        time: 'Just now',
        status: 'live'
      };
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container" style={{ minHeight: '100vh', background: '#020617', color: 'white' }}>
      <div className="container" style={{ padding: '32px 20px' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>
            Welcome back, <span style={{ background: 'linear-gradient(135deg, #3AD4FF, #2E57A5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{user?.username || 'Student'}!</span>
          </h1>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Here's what's happening with your placement profile today.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          {[
            { label: 'Profile Score', value: '85/100', icon: Target, color: '#3AD4FF' },
            { label: 'Active Applications', value: '12', icon: Activity, color: '#10b981' },
            { label: 'Network Reach', value: '1.2k', icon: Users, color: '#f59e0b' },
            { label: 'Growth Rate', value: '+12%', icon: TrendingUp, color: '#8b5cf6' }
          ].map((stat, i) => (
            <div key={i} style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              padding: '24px', 
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{ background: `${stat.color}15`, padding: '12px', borderRadius: '14px' }}>
                <stat.icon size={24} color={stat.color} />
              </div>
              <div>
                <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', marginBottom: '4px' }}>{stat.label}</p>
                <h3 style={{ fontSize: '24px', fontWeight: '700' }}>{stat.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
          {/* Main Analytics Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Placement Trends */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              borderRadius: '24px',
              padding: '32px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '600' }}>Hiring Demand Heatmap</h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['Q1', 'Q2', 'Q3', 'Q4'].map(t => (
                    <button key={t} style={{ 
                      padding: '6px 16px', 
                      borderRadius: '8px', 
                      fontSize: '12px', 
                      background: t === 'Q1' ? 'rgba(58, 212, 255, 0.1)' : 'transparent',
                      border: 'none',
                      color: t === 'Q1' ? '#3AD4FF' : 'rgba(255, 255, 255, 0.5)',
                      cursor: 'pointer'
                    }}>{t}</button>
                  ))}
                </div>
              </div>
              <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', gap: '12px', padding: '20px 0' }}>
                {[60, 40, 80, 95, 70, 50, 85, 90, 45, 65, 75, 80].map((h, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{ 
                      width: '100%', 
                      height: `${h}%`, 
                      background: h > 80 ? 'linear-gradient(to top, #2E57A5, #3AD4FF)' : 'rgba(58, 212, 255, 0.05)', 
                      borderRadius: '4px',
                      transition: 'height 1s ease-out'
                    }}></div>
                  </div>
                ))}
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px', marginTop: '16px' }}>
                * AI insight: Demand for <b>Full Stack Engineers</b> is expected to peak in April (+22%).
              </p>
            </div>

            {/* Skills Progress */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              borderRadius: '24px',
              padding: '32px'
            }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>Skills Proficiency Analysis</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: 'Data Structures & Algorithms', value: 88, color: '#3AD4FF' },
                  { label: 'System Design', value: 65, color: '#8b5cf6' },
                  { label: 'Communication Skills', value: 92, color: '#10b981' },
                  { label: 'Aptitude & Logical', value: 75, color: '#f59e0b' }
                ].map((skill, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px' }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{skill.label}</span>
                      <span style={{ fontWeight: '600', color: skill.color }}>{skill.value}%</span>
                    </div>
                    <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${skill.value}%`, height: '100%', background: skill.color, borderRadius: '4px' }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Eligibility Table */}
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              borderRadius: '24px',
              padding: '32px'
            }}>
              <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>Upcoming Recruitment Partners</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { company: 'Microsoft', role: 'Software Engineer', lpa: '44.0', status: 'Eligible' },
                  { company: 'Amazon', role: 'SDE-1', lpa: '32.5', status: 'Eligible' },
                  { company: 'Goldman Sachs', role: 'Analyst', lpa: '28.0', status: 'Criteria Not Met' },
                  { company: 'TCS Digital', role: 'System Engineer', lpa: '7.5', status: 'Eligible' }
                ].map((c, i) => (
                  <div key={i} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '2fr 2fr 1fr 1.5fr', 
                    padding: '16px', 
                    background: 'rgba(255, 255, 255, 0.02)', 
                    borderRadius: '12px',
                    alignItems: 'center',
                    fontSize: '14px'
                  }}>
                    <span style={{ fontWeight: '600' }}>{c.company}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{c.role}</span>
                    <span>{c.lpa} LPA</span>
                    <span style={{ 
                      textAlign: 'right', 
                      color: c.status === 'Eligible' ? '#10b981' : '#ef4444',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>{c.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Analytics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              borderRadius: '24px',
              padding: '24px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Activity size={18} color="#3AD4FF" /> Live Feed
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {activities.map((act) => (
                  <div key={act.id} style={{ display: 'flex', gap: '12px', animation: act.status === 'live' ? 'pulse 2s infinite' : 'none' }}>
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      borderRadius: '50%', 
                      background: act.status === 'success' ? '#10b981' : act.status === 'live' ? '#ef4444' : '#3AD4FF',
                      marginTop: '6px',
                      boxShadow: act.status === 'live' ? '0 0 8px #ef4444' : 'none'
                    }}></div>
                    <div>
                      <p style={{ fontSize: '13px', lineHeight: '1.4', marginBottom: '4px' }}>{act.message}</p>
                      <span style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.3)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={10} /> {act.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              border: '1px solid rgba(255, 255, 255, 0.08)', 
              borderRadius: '24px',
              padding: '24px'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Interview Readiness</h3>
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  border: '8px solid rgba(58, 212, 255, 0.1)', 
                  borderTopColor: '#3AD4FF',
                  margin: '0 auto 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  rotate: '45deg'
                }}>
                  <span style={{ rotate: '-45deg' }}>78%</span>
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.5)' }}>High Probability</p>
              </div>
            </div>

            <div style={{ 
              background: 'linear-gradient(135deg, rgba(58, 212, 255, 0.1), rgba(46, 87, 165, 0.1))', 
              border: '1px solid rgba(58, 212, 255, 0.2)', 
              borderRadius: '24px',
              padding: '24px',
              textAlign: 'center'
            }}>
              <CheckCircle2 size={32} color="#3AD4FF" style={{ marginBottom: '12px' }} />
              <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Pro Tip</h4>
              <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.5' }}>
                Based on your current scores, you are in the <b>top 15%</b> of applicant pool for Tier-1 companies. Keep practicing System Design!
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.6; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
