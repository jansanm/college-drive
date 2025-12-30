import React, { useState } from 'react';
import axios from 'axios';
import { Target, CheckCircle, XCircle } from 'lucide-react';

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    gender: 'Male',
    age: 22,
    department: 'CSE',
    cgpa: 8.5,
    backlogs: 0,
    attendance_percentage: 85,
    programming_skills: 7,
    dsa_skills: 7,
    core_subjects: 7,
    projects_completed: 2,
    internships: 1,
    certifications: 1,
    communication_skills: 7,
    leadership: 5,
    teamwork: 7,
    hackathons: 1,
    extracurricular_score: 7,
    aptitude_score: 80,
    interview_score: 75,
    resume_score: 7,
    mock_interview_score: 7
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: ['gender', 'department'].includes(name) ? value : parseFloat(value)
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5001/predict', formData);
      setResult(response.data);
    } catch (error) {
      console.error("Prediction failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="predict" style={{ padding: '80px 0', background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Placement <span className="gradient-text">Predictor</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Fill in your details to get an instant prediction</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: result ? '1fr 1fr' : '1fr', gap: '40px', transition: 'all 0.5s ease' }}>
          <form className="card glass" onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label>Department</label>
              <select name="department" value={formData.department} onChange={handleChange}>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="Mechanical">Mechanical</option>
                <option value="Civil">Civil</option>
              </select>
            </div>
            <div>
              <label>CGPA</label>
              <input type="number" name="cgpa" step="0.01" value={formData.cgpa} onChange={handleChange} />
            </div>
            <div>
              <label>Backlogs</label>
              <input type="number" name="backlogs" value={formData.backlogs} onChange={handleChange} />
            </div>
            <div>
              <label>Attendance (%)</label>
              <input type="number" name="attendance_percentage" value={formData.attendance_percentage} onChange={handleChange} />
            </div>
            <div>
              <label>Programming Skills (1-10)</label>
              <input type="number" name="programming_skills" min="1" max="10" value={formData.programming_skills} onChange={handleChange} />
            </div>
            <div>
              <label>DSA Skills (1-10)</label>
              <input type="number" name="dsa_skills" min="1" max="10" value={formData.dsa_skills} onChange={handleChange} />
            </div>
            <div>
              <label>Projects Completed</label>
              <input type="number" name="projects_completed" value={formData.projects_completed} onChange={handleChange} />
            </div>
            <div>
                <label>Internships</label>
                <input type="number" name="internships" value={formData.internships} onChange={handleChange} />
            </div>
            <div>
                <label>Aptitude Score (1-100)</label>
                <input type="number" name="aptitude_score" value={formData.aptitude_score} onChange={handleChange} />
            </div>
            <div>
                <label>Certifications</label>
                <input type="number" name="certifications" value={formData.certifications} onChange={handleChange} />
            </div>
            <div>
                <label>Core Subjects (1-10)</label>
                <input type="number" name="core_subjects" value={formData.core_subjects} onChange={handleChange} />
            </div>
            <div>
                <label>Interview Score (1-100)</label>
                <input type="number" name="interview_score" value={formData.interview_score} onChange={handleChange} />
            </div>
            
            <div style={{ gridColumn: '1 / -1', marginTop: '10px' }}>
              <button className="btn-primary" type="submit" style={{ width: '100%' }} disabled={loading}>
                {loading ? 'Analyzing...' : 'Generate Prediction'}
              </button>
            </div>
          </form>

          {result && (
            <div className="card glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                background: result.placement_status === 1 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                border: `2px solid ${result.placement_status === 1 ? 'var(--success)' : 'var(--error)'}`
              }}>
                {result.placement_status === 1 ? (
                  <CheckCircle size={60} color="var(--success)" />
                ) : (
                  <XCircle size={60} color="var(--error)" />
                )}
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>
                {result.placement_status === 1 ? 'Predicted: Placed' : 'Predicted: Not Placed'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Probability: <span style={{ color: result.placement_status === 1 ? 'var(--success)' : 'var(--error)', fontWeight: 700 }}>{(result.probability * 100).toFixed(2)}%</span>
              </p>
              <div style={{ marginTop: '24px', textAlign: 'left', width: '100%' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '12px' }}>AI recommendation:</h4>
                <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', fontSize: '0.9rem' }}>
                  {result.placement_status === 1 
                    ? "Your profile looks strong! Focus on mock interviews and refining your communication skills to excel in the final rounds."
                    : "Focus on improving your CGPA and core technical skills. Participating in more hackathons and completing relevant certifications could significantly boost your chances."}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PredictionForm;
