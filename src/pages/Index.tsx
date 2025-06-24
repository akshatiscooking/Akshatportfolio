
import React from 'react';
import Navigation from '../components/Navigation';
import IntroSection from '../components/IntroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <IntroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
