import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, GraduationCap, MapPin, Edit3, Shield } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container" style={{ minHeight: '100vh', background: '#020617', color: 'white', padding: '100px 20px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.03)', 
          border: '1px solid rgba(255, 255, 255, 0.08)', 
          borderRadius: '32px',
          overflow: 'hidden'
        }}>
          {/* Cover Area */}
          <div style={{ height: '160px', background: 'linear-gradient(135deg, #3AD4FF, #2E57A5)', position: 'relative' }}>
            <button style={{ 
              position: 'absolute', 
              right: '24px', 
              bottom: '-24px', 
              background: 'white', 
              color: '#020617', 
              border: 'none', 
              padding: '12px 24px', 
              borderRadius: '14px', 
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
            }}>
              <Edit3 size={18} /> Edit Profile
            </button>
          </div>

          <div style={{ padding: '0 40px 40px' }}>
            {/* Avatar */}
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '30px', 
              background: '#020617', 
              border: '6px solid #020617', 
              marginTop: '-60px', 
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3AD4FF, #2E57A5)',
              boxShadow: '0 10px 25px rgba(58, 212, 255, 0.2)'
            }}>
              {user?.username?.[0]?.toUpperCase() || 'U'}
            </div>

            <div style={{ marginTop: '24px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '4px' }}>{user?.username || 'User Name'}</h1>
              <p style={{ color: 'rgba(255, 255, 255, 0.5)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GraduationCap size={16} /> Final Year Computer Science Student
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '40px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ color: '#3AD4FF' }}><Mail size={20} /></div>
                <div>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)', marginBottom: '2px' }}>Email Address</p>
                  <p style={{ fontWeight: '500' }}>{user?.username?.toLowerCase() || 'user'}@college.edu</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ color: '#3AD4FF' }}><MapPin size={20} /></div>
                <div>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)', marginBottom: '2px' }}>Location</p>
                  <p style={{ fontWeight: '500' }}>San Francisco, CA</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ color: '#3AD4FF' }}><Shield size={20} /></div>
                <div>
                  <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)', marginBottom: '2px' }}>Account Status</p>
                  <p style={{ fontWeight: '500', color: '#10b981' }}>Verified Student</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '48px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Skills & Endorsements</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {['React.js', 'Node.js', 'Python', 'Machine Learning', 'Data Structures', 'System Design'].map(skill => (
                  <span key={skill} style={{ 
                    padding: '8px 16px', 
                    background: 'rgba(255, 255, 255, 0.05)', 
                    border: '1px solid rgba(255, 255, 255, 0.1)', 
                    borderRadius: '10px',
                    fontSize: '14px'
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
