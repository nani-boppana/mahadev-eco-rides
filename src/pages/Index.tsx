
import React from 'react';
import Hero from '../components/Hero';
import ServiceOverview from '../components/ServiceOverview';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

const Index = () => {
  return (
    <div>
      <Hero />
      <ServiceOverview />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Index;
