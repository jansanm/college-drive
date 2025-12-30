import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PredictionForm from './components/PredictionForm';
import StatsDashboard from './components/StatsDashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <PredictionForm />
        <StatsDashboard />
      </main>
      <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <div className="container">
          <p>&copy; 2025 PlacementAI. All rights reserved.</p>
          <p style={{ marginTop: '8px' }}>Created with love for students everywhere.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
