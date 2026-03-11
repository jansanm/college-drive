import React from 'react';
import Hero from '../components/Hero';
import PredictionForm from '../components/PredictionForm';
import StatsDashboard from '../components/StatsDashboard';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <PredictionForm />
      <StatsDashboard />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
