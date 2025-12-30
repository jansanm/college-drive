import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Users, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

const StatsDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5001/stats');
        setStats(response.data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };
    fetchStats();
  }, []);

  if (!stats) return null;

  const statCards = [
    { label: 'Total Students', value: stats.total_students, icon: <Users size={24} />, color: '#3ad4ff' },
    { label: 'Students Placed', value: stats.placed_count, icon: <Briefcase size={24} />, color: '#10b981' },
    { label: 'Avg. CGPA', value: stats.avg_cgpa.toFixed(2), icon: <GraduationCap size={24} />, color: '#f59e0b' },
    { label: 'Avg. Package (LPA)', value: `₹${stats.avg_package.toFixed(1)}`, icon: <TrendingUp size={24} />, color: '#8b5cf6' }
  ];

  return (
    <section id="stats" style={{ padding: '80px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Dataset <span className="gradient-text">Insights</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Real-time statistics from our historical placement data</p>
        </div>

        <div className="grid grid-cols-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {statCards.map((item, index) => (
            <div key={index} className="card glass" style={{ textAlign: 'center' }}>
              <div style={{ 
                color: item.color, 
                background: `${item.color}15`, 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                {item.icon}
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '4px' }}>{item.label}</p>
              <h3 style={{ fontSize: '1.75rem', margin: 0 }}>{item.value}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
