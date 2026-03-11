import React, { useState } from 'react';
import axios from 'axios';
import { Target, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

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
  const [error, setError] = useState(null);

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
    setError(null);
    try {
      const response = await axios.post('http://127.0.0.1:5001/predict', formData);
      if (response.data.error) {
        setError(response.data.error);
      } else {
        setResult(response.data);
      }
    } catch (error) {
      console.error("Prediction failed", error);
      setError("Failed to connect to AI server. Please ensure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  const loadSample = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://127.0.0.1:5001/random_student');
      const data = res.data;
      setFormData({
        gender: data.gender || 'Male',
        age: data.age || 22,
        department: data.department || 'CSE',
        cgpa: data.cgpa || 8.5,
        backlogs: data.backlogs || 0,
        attendance_percentage: data.attendance_percentage || 85,
        programming_skills: data.programming_skills || 7,
        dsa_skills: data.dsa_skills || 7,
        core_subjects: data.core_subjects || 7,
        projects_completed: data.projects_completed || 2,
        internships: data.internships || 1,
        certifications: data.certifications || 1,
        communication_skills: data.communication_skills || 7,
        leadership: data.leadership || 5,
        teamwork: data.teamwork || 7,
        hackathons: data.hackathons || 1,
        extracurricular_score: data.extracurricular_score || 7,
        aptitude_score: data.aptitude_score || 80,
        interview_score: data.interview_score || 75,
        resume_score: data.resume_score || 7,
        mock_interview_score: data.mock_interview_score || 7
      });
      setResult(null);
      setError(null);
    } catch (err) {
      console.error("Failed to load sample", err);
      setError("Could not load sample data. Backend might be down.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="predict" style={{ padding: '80px 0', background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Placement <span className="gradient-text">Predictor</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Fill in your details or load a sample record to get an instant prediction</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: result || error? '1fr 1fr' : '1fr', gap: '40px', transition: 'all 0.5s ease' }}>
          <form className="card glass" onSubmit={handleSubmit} style={{ position: 'relative' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end', 
              marginBottom: '20px',
              position: 'absolute',
              top: '24px',
              right: '24px'
            }}>
              <button 
                type="button" 
                onClick={loadSample}
                style={{
                  background: 'rgba(58, 212, 255, 0.1)',
                  border: '1px solid rgba(58, 212, 255, 0.3)',
                  color: '#3AD4FF',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <RefreshCw size={14} /> Load Dataset Row
              </button>
            </div>

            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '32px' }}>Personal & Academic Data</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
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
                <label>Aptitude Score (1-100)</label>
                <input type="number" name="aptitude_score" value={formData.aptitude_score} onChange={handleChange} />
              </div>
              <div>
                <label>Interview Score (1-100)</label>
                <input type="number" name="interview_score" value={formData.interview_score} onChange={handleChange} />
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
                <label>Certifications</label>
                <input type="number" name="certifications" value={formData.certifications} onChange={handleChange} />
              </div>
              <div>
                  <label>Age</label>
                  <input type="number" name="age" value={formData.age} onChange={handleChange} />
              </div>
              <div>
                  <label>Comm. Skills (1-10)</label>
                  <input type="number" name="communication_skills" value={formData.communication_skills} onChange={handleChange} />
              </div>
              <div>
                  <label>Resume Score (1-10)</label>
                  <input type="number" name="resume_score" value={formData.resume_score} onChange={handleChange} />
              </div>
            </div>
            
            <div style={{ marginTop: '30px' }}>
              <button className="btn-primary" type="submit" style={{ width: '100%', padding: '16px' }} disabled={loading}>
                {loading ? 'Analyzing Profile...' : 'Generate Prediction'}
              </button>
            </div>
          </form>

          {(result || error) && (
            <div className="card glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
              {error ? (
                <>
                  <XCircle size={60} color="var(--error)" style={{ marginBottom: '24px' }} />
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--error)', marginBottom: '16px' }}>Error</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)' }}>{error}</p>
                </>
              ) : (
                <>
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
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>
                    Probability: <span style={{ color: result.placement_status === 1 ? 'var(--success)' : 'var(--error)', fontWeight: 700 }}>{((result.probability || 0) * 100).toFixed(2)}%</span>
                  </p>
                  <div style={{ marginTop: '24px', textAlign: 'left', width: '100%' }}>
                    <h4 style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '12px' }}>AI recommendation:</h4>
                    <div style={{ padding: '16px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {result.placement_status === 1 
                        ? "Your profile looks strong! Focus on mock interviews and refining your communication skills to excel in the final rounds of top-tier companies."
                        : "Focus on improving your technical skills and certifications. Increasing your participation in hackathons could also significantly improve your industry readiness."}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PredictionForm;
